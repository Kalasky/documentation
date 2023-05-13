import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MARKS, BLOCKS, INLINES } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Link } from 'react-router-dom'
import '../index.scss'

// assets
import loader from '../assets/loader.svg'

// components
import { GlowGreenPrimary, GlowGrayPrimary } from '../components/Buttons'
import Sidebar from '../components/docs/Sidebar'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

// utils
import { scrollToSection } from '../utils/scroll'

// Custom options for rendering rich text
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="mt-6 font-light text-base text-white" style={{ wordWrap: 'break-word' }}>
        {children}
      </p>
    ),
    // heading
    [BLOCKS.HEADING_1]: (node, children) => {
      const id = node.content[0].value.toLowerCase().replace(/\s/g, '-')

      return (
        <h1
          id={id}
          className="mt-10 text-left sm:text-4xl max-sm:2xl font-bold text-white leading-none"
          style={{ wordWrap: 'break-word' }}
        >
          {children}
        </h1>
      )
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      const id = node.content[0].value.toLowerCase().replace(/\s/g, '-')

      return (
        <h2 id={id} className="mt-10 sm:text-3xl max-sm:2xl font-bold text-white leading-none" style={{ wordWrap: 'break-word' }}>
          {children}
        </h2>
      )
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      const id = node.content[0].value.toLowerCase().replace(/\s/g, '-')

      return (
        <h3 id={id} className="mt-10 text-xl font-bold text-white leading-none" style={{ wordWrap: 'break-word' }}>
          {children}
        </h3>
      )
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      const id = node.content[0].value.toLowerCase().replace(/\s/g, '-')

      return (
        <h4 id={id} className="mt-10 text-lg font-bold text-white leading-none" style={{ wordWrap: 'break-word' }}>
          {children}
        </h4>
      )
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      const id = node.content[0].value.toLowerCase().replace(/\s/g, '-')

      return (
        <h5 id={id} className="mt-10 text-lg font-bold text-white leading-none" style={{ wordWrap: 'break-word' }}>
          {children}
        </h5>
      )
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      const id = node.content[0].value.toLowerCase().replace(/\s/g, '-')

      return (
        <h6 id={id} className="mt-10 text-base font-bold text-white leading-none" style={{ wordWrap: 'break-word' }}>
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
    [BLOCKS.EMBEDDED_CODE]: (node, children) => (
      <pre className="p-4 bg-gray-800 text-white rounded-md overflow-x-auto">{children}</pre>
    ),

    // table
    [BLOCKS.TABLE]: (node, children) => (
      <div className="overflow-x-auto">
        <table className="table-auto divide-y divide-gray-200">{children}</table>
      </div>
    ),
    [BLOCKS.TABLE_ROW]: (node, children) => <tr className="">{children}</tr>,
    [BLOCKS.TABLE_CELL]: (node, children) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{children}</td>
    ),
    [BLOCKS.TABLE_HEADER_CELL]: (node, children) => (
      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{children}</th>
    ),
    // hyperlink
    [INLINES.HYPERLINK]: (node, children) => (
      <a href={node.data.uri} className="text-blue-500 hover:underline">
        {children}
      </a>
    ),
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
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShowBackToTop(true)
      } else {
        setShowBackToTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleRefresh = () => {
    window.location.reload()
  }

  const fetchContent = () => {
    fetch(`/api/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          // grabbing [0] because it's an id page meaning only 1 item
          // there will always be one object in the array
          console.log(data[0])
          console.log('main content', data)
          setContent(data[0])
          setIsLoading(false)
          setFetchError(false)

          if (data[0].fields.description.content.length > 0) {
            const entries = data[0].fields.description.content
              .filter((item) =>
                ['heading-1', 'heading-2', 'heading-3', 'heading-4', 'heading-5', 'heading-6'].includes(item.nodeType)
              )
              .map((item) => ({
                id: item.content[0]?.value.toLowerCase().replace(/ /g, '-'),
                title: item.content[0]?.value,
              }))
            setEntries(entries)
          }
        }
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
      <div className="container m-auto">
        <div className="text-5xl text-center text-white font-bold mb-12 align-middle mt-24">Uh Oh!</div>
        <div className="flex justify-center items-center font-semibold text-xl text-center m-auto text-white">
          Loading is taking longer than usual. Please check your network connection.
        </div>
        <div className="mt-20 m-auto">
          <p
            className="text-center m-auto font-bold md:text-4xl max-sm:text-4xl max-lg:text-4xl bg-gradient-to-r from-green-400 to-white text-transparent bg-clip-text"
            style={{ lineHeight: '3.5rem' }}
          >
            Engine noises
          </p>
          <p className="text-gray-400 text-base mt-5 m-auto text-center">
            If the issues persists please contact an administrator.
          </p>
          <div className="m-auto text-center mt-10 text-base sm:space-x-8 space-y-5">
            <GlowGrayPrimary onClick={() => handleRefresh()} padding={'px-4 py-3'}>
              Refresh Page
            </GlowGrayPrimary>
            <span className="max-sm:mt-5 max-sm:block"></span>
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
  return (
    <div key={content.sys.id} id="top">
      {showBackToTop && (
        <button
          onClick={() => scrollToSection('top')}
          className="fixed bottom-8 right-8 z-50 p-2 w-10 h-10 rounded-full bg-green-700 text-white focus:outline-none hover:bg-green-600 transition ease-in-out duration-200"
        >
          <div className="w-full h-full">
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
        </button>
      )}
      <div className="container mx-auto sm:pt-28 max-sm:pt-14 pb-12" style={{ fontFamily: 'Poppins' }}>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-6">
          <div className="col-span-1" style={{ position: 'sticky' }}>
            <Sidebar entries={entries} isVisible={true} />
          </div>
          <div className="shadow-2x1 rounded-2xl cardbg-color col-span-2 max-lg:col-span-3">
            <div className="text-white text-lg font-bold p-10 cardbg-color rounded-2xl">
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
            <div className="text-gray-600 text-sm p-5 m-auto">
              <div>{new Date(content.sys.createdAt).toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentPage
