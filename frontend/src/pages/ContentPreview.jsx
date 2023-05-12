import React, { useState, useEffect } from 'react'
import { MARKS, BLOCKS } from '@contentful/rich-text-types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Link } from 'react-router-dom'
import '../index.scss'

// components
import { GlowGreenPrimary, GlowGrayPrimary } from '../components/Buttons'

// assets
import loader from '../assets/loader.svg'

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
  const [isLoading, setIsLoading] = useState(true)
  const [isTimeout, setIsTimeout] = useState(false)
  const [fetchError, setFetchError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6
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
    fetch('/api/blog')
      .then((res) => res.json())
      .then((data) => {
        data.forEach((content) => {
          console.log('Description for content', content.sys.id, ':', content)
        })
        setContent(data)
        setIsLoading(false)
        setFetchError(false)
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

    fetchContent()

    return () => clearTimeout(timer)
  }, [isLoading])

  useEffect(() => {
    if (fetchError && retryCount < 3) {
      // retry fetching the data up to 3 times
      setRetryCount(retryCount + 1)
      const retryTimer = setTimeout(fetchContent, 3000) // retry after 3 seconds
      return () => clearTimeout(retryTimer)
    }
  }, [fetchError])

  const handleReadMore = () => {
    setCurrentPage(currentPage + 1)
  }

  const displayedContent = content.slice(0, currentPage * postsPerPage)

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
    <div id="top">
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
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
          {displayedContent.map((content) => {
            const { previewDescription, media } = content.fields
            return (
              <div key={content.sys.id} className="shadow-2x1 rounded-2xl cardbg-color">
                <div className="bg-slate-800 text-white text-lg font-bold rounded-t-2xl h-80 flex contents-center justify-center">
                  <div className="blog-image-container">
                    {media && media.fields.file && (
                      <img className="blog-image rounded-t-2xl" src={`https:${media.fields.file.url}`} alt={media.fields.title} />
                    )}
                  </div>
                </div>
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
              </div>
            )
          })}
        </div>
        {/* Only render read more button if there are more than 6 posts */}
        {currentPage * postsPerPage < content.length && (
          <div className="text-center">
            <GlowGreenPrimary onClick={handleReadMore} children="Read More" padding={'px-4 py-3 mt-6'} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Content
