import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// data
import { productDropdown } from '../data/navbarLists'
import { social } from '../data/footerLists'

// fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// components
import { PopoverCard } from './Cards'

function ProductPopover() {
  const [open, setOpen] = useState(false)

  let hideTimeout = null

  const handleMouseEnter = () => {
    if (hideTimeout) {
      clearTimeout(hideTimeout)
    }
    setOpen(true)
  }

  const handleMouseLeave = () => {
    hideTimeout = setTimeout(() => {
      setOpen(false)
    }, 75)
  }

  return (
    <div className="relative inline-block text-left">
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="inline-block"
      >
        <button className="rounded-md inline-flex items-center text-base font-medium text-white hover:text-green-500 max-xl:hidden">
          Product
        </button>
        <div
          className={`${
            open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          } absolute z-10 mt-3 transform -translate-x-1/2 min-w-max pt-6 cardbg-color rounded-2xl ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-300 cursor-pointer`}
          style={{ left: '50%', boxShadow: '0 4px 7px rgba(0,0,0,.3), inset 0 1px 1px rgba(255,255,255,.1)' }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-0 w-3 h-3 rotate-45 cardbg-color"></div>
          <div className="grid grid-cols-2 gap-4 px-6">
            {productDropdown.map((item) => (
              <PopoverCard
                key={item.title}
                title={item.title}
                description={item.description}
                icon={item.icon}
                href={item.href}
                iconColor={'text-white'}
              />
            ))}
          </div>
          <div className="bg-slate-800 text-white text-lg font-bold p-4 rounded-b-2xl mt-6">
            <div className="text-sm grid grid-cols-4 xl:col-span-4 gap-y-4 gap-x-4">
              {social.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="font-medium text-white hover:text-green-500 duration-200 mt-3 flex items-center"
                >
                  <FontAwesomeIcon icon={item.icon} className="h-5" /> <span className="ml-3">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPopover
