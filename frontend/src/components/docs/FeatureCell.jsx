import { useRef, useEffect } from 'react'

import future_badge from '../../assets/badges/future_badge.svg'
import planned_badge from '../../assets/badges/planned_badge.svg'
import complete_badge from '../../assets/badges/complete_badge.svg'

const badges = {
  complete: complete_badge,
  planned: planned_badge,
  future: future_badge,
}

export const FeatureCell = ({ icon = '', title, description, badge }) => {
  return (
    <div>
      <p className="font-bold md:text-3xl max-sm:text-3xl max-lg:text-4xl lg:w-11/12 text-white">
        <span className="inline-block">{icon}</span>
        {title}
        <span className="inline-block ml-4 align-middle">{badge && <img src={badges[badge]} alt="badge" />}</span>
      </p>
      <p className="font-light text-base text-gray-400 leading-7">{description}</p>
    </div>
  )
}
