import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.scss'
import { Link } from 'react-router-dom'

export const SocialCard = ({ title, description, icon, iconColor }) => {
  return (
    <div className="cardbg-color shadow-xl rounded-2xl">
      <div className="bg-slate-800 text-white text-lg font-bold p-10 rounded-t-2xl h-48 flex items-center justify-center">
        <div className="text-xl flex">
          <span>
            <FontAwesomeIcon icon={icon} className={`h-16 ${iconColor}`} />
          </span>
        </div>
      </div>
      <div className="text-white text-lg font-bold p-10">
        <div className="text-xl flex">
          <span>{title}</span>
        </div>
        <p className="mt-6 font-light text-base text-gray-400">{description}</p>
      </div>
    </div>
  )
}

export const PopoverCard = ({ title, icon, iconColor, description, href }) => {
  return (
    <Link to={href}>
      <div
        role="link"
        tabIndex="0"
        className="cardbg-color rounded-2xl max-w-sm flex flex-col hover:bg-slate-800 hover:transition duration-400 card-hover cursor-pointer"
        key={title}
      >
        <div className="text-gray-400 text-sm p-4">
          <FontAwesomeIcon icon={icon} size="1x" className={`mr-2 ${iconColor} icon-to-change-color`} />
          <span className="text-white">{title}</span>
        </div>
        <div className="text-lg font-bold p-4 pt-0 flex-grow w-64">
          <p className="font-normal text-xs text-gray-400 leading-6">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export const FeatureCard = ({ title, IconComponent, iconColor, description }) => (
  <div className="cardbg-color shadow-xl rounded-2xl">
    <div className="text-white text-lg font-bold p-10">
      <div className="text-xl flex">
        <IconComponent className={`${iconColor} h-6 mr-4`} />
        <span>{title}</span>
      </div>
      <p className="mt-6 font-light text-base text-gray-400">{description}</p>
    </div>
  </div>
)
