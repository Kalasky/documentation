import React, { useState, useEffect } from 'react'
import { MARKS, BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Link } from 'react-router-dom'
import '../index.scss'

// components
import { GlowGreenPrimary } from '../components/Buttons'

// Custom options for rendering rich text
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="mt-6 font-light text-base text-white">{children}</p>,
    // heading
    [BLOCKS.HEADING_1]: (node, children) => <h1 className="mt-10 text-4xl font-bold text-white">{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2 className="mt-10 text-3xl font-bold text-white">{children}</h2>,
    [BLOCKS.HEADING_3]: (node, children) => <h3 className="mt-10 text-2xl font-bold text-white">{children}</h3>,
    [BLOCKS.HEADING_4]: (node, children) => <h4 className="mt-10 text-xl font-bold text-white">{children}</h4>,
    [BLOCKS.HEADING_5]: (node, children) => <h5 className="mt-10 text-lg font-bold text-white">{children}</h5>,
    [BLOCKS.HEADING_6]: (node, children) => <h6 className="mt-10 text-base font-bold text-white">{children}</h6>,
    // list
    [BLOCKS.UL_LIST]: (node, children) => <ul className="list-disc list-inside">{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol className="list-decimal list-inside">{children}</ol>,
    [BLOCKS.LIST_content]: (node, children) => <li className="mt-2">{children}</li>,
    // embedded asset
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { title, file } = node.data.target.fields
      const imageUrl = file?.url
      const imageId = node.data.target.sys.id
      return <img className="rounded-2xl shadow-2xl mt-10 m-auto" id={imageId} src={imageUrl} alt={title} />
    },
  },
}

const Content = () => {
  const [content, setContent] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  useEffect(() => {
    fetch('http://localhost:5000/api/blog')
      .then((res) => res.json())
      .then((data) => {
        data.forEach((content) => {
          console.log('Description for content', content.sys.id, ':', content)
        })
        setContent(data)
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
        const { previewDescription, media } = content.fields
        return (
          <div key={content.sys.id}>
            <div className="container mx-auto sm:pt-28 max-sm:pt-14 pb-12" style={{ fontFamily: 'Poppins' }}>
              <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
                <div className="shadow-2x1 rounded-2xl cardbg-color">
                  <div className="bg-slate-800 text-white text-lg font-bold rounded-t-2xl h-80 flex contents-center justify-center">
                    <div className="blog-image-container">
                      {media && media.fields.file && (
                        <img
                          className="blog-image rounded-t-2xl"
                          src={`https:${media.fields.file.url}`}
                          alt={media.fields.title}
                        />
                      )}
                    </div>
                  </div>
                  {/* <div className="col-span-1"> */}
                  <div className="text-white text-lg font-bold p-10 cardbg-color rounded-b-2xl">
                    <div className="text-xl flex">{content.fields.title}</div>
                    {/* Preview desc. */}
                    <div>{previewDescription}</div>
                    {/* Checking if the image exists */}
                    <Link to={`/blog/${content.sys.id}`}>
                      <GlowGreenPrimary onClick={() => {}} children="Read More" padding={'px-4 py-3 mt-6'} />
                    </Link>
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

export default Content
