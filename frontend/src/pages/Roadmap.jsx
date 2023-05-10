import React from 'react'

// components
import { GlowGreenPrimary, GlowGrayPrimary } from '../components/Buttons'
import Timeline from '../components/Timeline'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiamond } from '@fortawesome/free-solid-svg-icons'

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
            SurrealDB has been built from the ground up to be the ultimate database for developers who want to build tomorrow's
            applications. On this page you can keep track of what we have planned for SurrealDB..
          </p>
          <p className="text-gray-400 text-lg mt-5 lg:w-11/12">
            If you have an idea for SurrealDB, then we would love to hear from you.
          </p>
          <div className="mt-10 text-base space-y-5">
            <GlowGrayPrimary onClick={() => {}} children="Follow us on Github" padding={'px-4 py-3'} />
            <GlowGrayPrimary onClick={() => {}} children="Join our Discord" padding={'px-4 py-3'} margin="sm:m-8" />
          </div>
        </div>
        <img
          src={mongoroadmap}
          alt="surreal"
          className="hidden xl:block -z-10 relative"
          style={{ maxWidth: '540px', right: '62px' }}
        />
      </div>
      <p className="mt-40 text-center font-bold xl:text-6xl md:text-5xl max-sm:text-4xl max-lg:text-4xl lg:w-full bg-gradient-to-r from-green-400 to-white inline-block text-transparent bg-clip-text">
        SurrealDB Roadmap
      </p>
      <Timeline />
    </div>
  )
}

export default Roadmap
