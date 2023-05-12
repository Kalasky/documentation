import React from 'react'

// components
import { GlowGreenPrimary, GlowGrayPrimary } from '../components/Buttons'
import Timeline from '../components/Timeline'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCode } from '@fortawesome/free-solid-svg-icons'

// assets
import mongoroadmap from '../assets/mongoroadmap.png'

const Roadmap = () => {
  return (
    <div className="container mx-auto sm:pt-28 max-sm:pt-14 pb-12" style={{ fontFamily: 'Poppins' }}>
      <div className="grid grid-flow-row-dense xl:grid-cols-3 sm:grid-cols-1">
        <div id="text-section" className="col-span-2">
          <p className="font-bold xl:text-6xl md:text-5xl max-sm:text-4xl max-lg:text-4xl lg:w-11/12 bg-gradient-to-r from-green-400 to-white inline-block text-transparent bg-clip-text">
            Roadmap
          </p>
          <p className="text-gray-400 text-lg mt-5 lg:w-11/12">
            MongoDB has been built from the ground up to be the ultimate database for developers who want to build tomorrow's
            applications. On this page you can keep track of what we have planned for MongoDB..
          </p>
          <p className="text-gray-400 text-lg mt-5 lg:w-11/12">
            If you have an idea for MongoDB, then we would love to hear from you.
          </p>
          <div className="mt-10 text-base space-y-5">
            <GlowGrayPrimary
              onClick={() => {
                window.open('https://github.com/mongodb-developer/', '_blank')
              }}
              children="Follow us on Github"
              padding={'px-4 py-3'}
            />
          </div>
        </div>
        <img
          src={mongoroadmap}
          alt="mongo"
          className="hidden xl:block -z-10 relative"
          style={{ maxWidth: '540px', right: '62px' }}
        />
      </div>
      <p className="sm:mt-40 max-sm:mt-20 text-center font-bold xl:text-6xl md:text-5xl max-sm:text-4xl max-lg:text-4xl lg:w-full bg-gradient-to-r from-green-400 to-white inline-block text-transparent bg-clip-text">
        MongoDB Roadmap
      </p>
      <Timeline />
      <div className="sm:text-center max:sm-text-left mt-40 lg:w-8/12 m-auto">
        <p
          className="font-bold md:text-4xl max-sm:text-4xl max-lg:text-4xl lg:w-11/12 bg-gradient-to-r from-green-400 to-white inline-block text-transparent bg-clip-text"
          style={{ lineHeight: '3.5rem' }}
        >
          We are building MongoDB for everyone
        </p>
        <p className="text-gray-400 text-base mt-5 lg:w-5/6 m-auto">
          MongoDB is being built in the open. We would love for you to be involved.
        </p>
        <div className="mt-5 text-base sm:space-x-8 space-y-5">
          <GlowGrayPrimary
            onClick={() => {
              window.open('https://github.com/mongodb', '_blank')
            }}
            padding={'px-4 py-2'}
          >
            <FontAwesomeIcon icon={faStar} className="mr-2 text-green-500" />
            Star us on GitHub
          </GlowGrayPrimary>
          <GlowGrayPrimary onClick={() => console.log('Clicked!')} padding={'px-4 py-3'}>
            <FontAwesomeIcon icon={faCode} className="mr-2 text-green-500" />
            View our open source projects
          </GlowGrayPrimary>
        </div>
      </div>
    </div>
  )
}

export default Roadmap
