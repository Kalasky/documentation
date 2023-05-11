import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MARKS, BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Link } from 'react-router-dom'
import '../index.scss'

// assets
import loader from '../assets/loader.svg'

// components
import { GlowGreenPrimary, GlowGrayPrimary } from '../components/Buttons'
import Sidebar from '../components/docs/Sidebar'

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

const ContentPage = () => {
  const { id } = useParams()
  const [content, setContent] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isTimeout, setIsTimeout] = useState(false)
  const [fetchError, setFetchError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const [entries, setEntries] = useState([])

  const fetchContent = () => {
    fetch(`http://localhost:5000/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setContent(data)
        // the data has been fetched
        setIsLoading(false)
        setFetchError(false)
        // extract entries for sidebar
        const entries = data.fields.description.content
          .filter((item) => ['heading-2', 'heading-3'].includes(item.nodeType))
          .map((item) => ({
            id: item.content[0].value.toLowerCase().replace(/ /g, '-'),
            title: item.content[0].value,
          }))
        setEntries(entries) 
      })
      .catch((err) => {
        console.error(err)
      })
      .catch((err) => {
        console.error(err)
        setFetchError(true)
      })
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setIsTimeout(true)
      }
    }, 5000) // timeout after 5 seconds

    // if the data is not fetched after 5 seconds, retry fetching the data
    fetchContent()

    return () => clearTimeout(timer)
  }, [id, isLoading])

  useEffect(() => {
    if (fetchError && retryCount < 3) {
      // retry fetching the data up to 3 times
      setRetryCount(retryCount + 1)
      const retryTimer = setTimeout(fetchContent, 3000) // retry after 3 seconds
      return () => clearTimeout(retryTimer)
    }
  }, [fetchError])

  // if the data is not fetched yet, show the loader
  if (isLoading && !isTimeout) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src={loader} alt="loader" />
      </div>
    )
  }

  //  if the data is not fetched after 5 seconds, let the user know
  if (isTimeout && isLoading) {
    return (
      <div className="">
        <div className="text-5xl text-center text-white font-bold mb-12 align-middle mt-24">Uh Oh!</div>
        <div className="flex justify-center items-center font-semibold text-xl text-center m-auto text-white">
          Loading is taking longer than usual. Please check your network connection.
        </div>
        <div className="sm:text-center max:sm-text-left mt-20 lg:w-8/12 m-auto">
          <p
            className="font-bold md:text-4xl max-sm:text-4xl max-lg:text-4xl lg:w-11/12 bg-gradient-to-r from-green-400 to-white inline-block text-transparent bg-clip-text"
            style={{ lineHeight: '3.5rem' }}
          >
            We are building MongoDB for everyone
          </p>
          <p className="text-gray-400 text-base mt-5 lg:w-5/6 m-auto">
            MongoDB is being built in the open. We would love for you to be involved.
          </p>
          <div className="mt-10 text-base sm:space-x-8 space-y-5">
            <GlowGrayPrimary onClick={() => handleRefresh()} padding={'px-4 py-3'}>
              Refresh Page
            </GlowGrayPrimary>
            <Link to="/">
              <GlowGrayPrimary onClick={() => {}} padding={'px-4 py-3'}>
                Go back home
              </GlowGrayPrimary>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // if the data is fetched but there is no content, let the user know
  if (!content) {
    return <div className="flex justify-center items-center h-screen">Something went wrong. Please try again later.</div>
  }

  // Checking if the image exists
  const imageUrl = content.fields.media ? 'https:' + content.fields.media.fields.file.url : null

  return (
    <div key={content.sys.id}>
      <div className="container mx-auto sm:pt-28 max-sm:pt-14 pb-12" style={{ fontFamily: 'Poppins' }}>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-6">
          <div className="col-span-1" style={{ position: 'sticky' }}>
            <Sidebar entries={entries} isVisible={true} />
          </div>
          <div className="shadow-2x1 rounded-2xl cardbg-color col-span-2 max-lg:col-span-3">
            <div className="bg-slate-800 text-white text-lg font-bold rounded-t-2xl h-80 flex items-center justify-center">
              <div className="blog-image-container">
                {imageUrl && <img className="blog-image rounded-t-2xl" src={imageUrl} alt={content.fields.media.fields.title} />}
              </div>
            </div>
            <div className="text-white text-lg font-bold p-10 cardbg-color rounded-b-2xl">
              <div className="text-xl flex">{content.fields.title}</div>
              {/* Converting description to react component to render it, due to the fact that it is a rich text field */}
              {content.fields.description.nodeType
                ? documentToReactComponents(content.fields.description, options)
                : content.fields.description}
              <Link to={`/blog`}>
                <GlowGreenPrimary onClick={() => {}} children="Back to the blog page!" padding={'px-4 py-3 mt-6'} />
              </Link>
            </div>
            {/* date  */}
            <div className="text-gray-600 text-sm p-5 m-aut">
              <div>{new Date(content.sys.createdAt).toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentPage