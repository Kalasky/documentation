import React from 'react'
import { Link } from 'react-router-dom'

// assets
import notfound from '../assets/404mongo.svg'

// components
import { GlowGreenPrimary } from '../components/Buttons'

const NotFound = () => {
  return (
    <div className="container mx-auto sm:pt-10 max-sm:pt-14 pb-12">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <img src={notfound} alt="404" className="" />
        <h1 className="sm:text-6xl max-sm:text-4xl font-bold text-gray-700">Page Not Found</h1>
        <p className="text-gray-500 mt-10 text-center">Oops! We can't find the page you were looking for.</p>
        <Link to="/" className="mt-10">
          <GlowGreenPrimary children={'Go back home'} padding={'px-4 py-3 mt-2'} />
        </Link>
      </div>
    </div>
  )
}

export default NotFound
