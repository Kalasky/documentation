import React, { useState, useEffect } from 'react'
import { MARKS, BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Link } from 'react-router-dom'
import '../index.scss'

// components
import { GlowGreenPrimary } from '../components/Buttons'
import Sidebar from '../components/docs/Sidebar'

// Custom options for rendering rich text
// Custom options for rendering rich text
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mt-6 font-light text-base text-white">{children}</p>,
    // heading
    [BLOCKS.HEADING_1]: (node, children) => {
      const id = node.content[0].value.toLowerCase().replace(/\s/g, '-')

      return (
        <h1 id={id} className="mt-10 text-4xl font-bold text-white">
          {children}
        </h1>
      )
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      const id = node.content[0].value.toLowerCase().replace(/\s/g, '-')

      return (
        <h2 id={id} className="mt-10 text-3xl font-bold text-white">
          {children}
        </h2>
      )
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      const id = node.content[0].value.toLowerCase().replace(/\s/g, '-')

      return (
        <h3 id={id} className="mt-10 text-2xl font-bold text-white">
          {children}
        </h3>
      )
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      const id = node.content[0].value.toLowerCase().replace(/\s/g, '-')

      return (
        <h4 id={id} className="mt-10 text-xl font-bold text-white">
          {children}
        </h4>
      )
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      const id = node.content[0].value.toLowerCase().replace(/\s/g, '-')

      return (
        <h5 id={id} className="mt-10 text-lg font-bold text-white">
          {children}
        </h5>
      )
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      const id = node.content[0].value.toLowerCase().replace(/\s/g, '-')

      return (
        <h6 id={id} className="mt-10 text-base font-bold text-white">
          {children}
        </h6>
      )
    },
    // list
    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc list-inside">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal list-inside">{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li className="mt-2">{children}</li>,
    // embedded asset
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, file } = node.data.target.fields
      const imageUrl = file?.url
      const imageId = node.data.target.sys.id
      return <img className="rounded-2xl shadow-2xl mt-10 m-auto" id={imageId} src={imageUrl} alt={title} />
    },
  },
}

const Releases = () => {
  const [content, setContent] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
  const [entries, setEntries] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/releases')
      .then((res) => res.json())
      .then((data) => {
        data.forEach((content) => {
          console.log('Description for content', content.sys.id, ':', content)
        })
        setContent(data)

        // extract entries for sidebar
        const entries = data.map((content) => {
          const elements = content.fields.description.content
            .filter((item) =>
              ['heading-1', 'heading-2', 'heading-3', 'heading-4', 'heading-5', 'heading-6'].includes(item.nodeType)
            )
            .map((item) => ({
              id: item.content[0].value.toLowerCase().replace(/\s/g, '-'),
              title: item.content[0].value,
            }))
          setEntries(elements)
        })
      })
      .catch((err) => console.error(err))
  }, [])

  const handleReadMore = () => {
    setCurrentPage(currentPage + 1)
  }

  const displayedContent = content.slice(0, currentPage * postsPerPage)

  return (
    <div>
      {displayedContent.map((content) => {
        const { description } = content.fields
        return (
          <div key={content.sys.id}>
            <div className="container mx-auto sm:pt-28 max-sm:pt-14 pb-12" style={{ fontFamily: 'Poppins' }}>
              <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-6">
                <div className="col-span-1" style={{ position: 'sticky' }}>
                  <Sidebar entries={entries} isVisible={true} />
                </div>
                <div className="shadow-2x1 rounded-2xl cardbg-color col-span-2 max-lg:col-span-3">
                  <div className="text-white text-lg font-bold p-10 rounded-2xl ">
                    <div className="text-xl flex">{content.fields.title}</div>
                    {/* Converting description to react component to render it, due to the fact that it is a rich text field */}
                    <div>{description.nodeType ? documentToReactComponents(description, options) : description}</div>
                    <div className="text-gray-600 text-sm mt-10">
                      <div>{new Date(content.sys.createdAt).toLocaleDateString()}</div>
                    </div>
                  </div>
                  {/* Only render read more button if there are more than 6 posts */}
                  {currentPage * postsPerPage >= content.length && (
                    <div className="text-center">
                      <GlowGreenPrimary onClick={handleReadMore} children="Read More" padding={'px-4 py-3 mt-6'} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Releases
