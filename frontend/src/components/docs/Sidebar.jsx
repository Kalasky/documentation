import React, { useState, useEffect } from 'react'
import { Link as ScrollLink, animateScroll as scroll, scroller } from 'react-scroll'
import '../../index.scss'

const Sidebar = ({ entries, isVisible }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleSetActive = (index) => {
    setActiveIndex(index)
  }

  useEffect(() => {
    if (isVisible) {
      const onScroll = () => {
        let currentScrollPos = window.pageYOffset

        entries.forEach((entry, index) => {
          let ref = document.getElementById(entry.id)
          if (ref) {
            // Check if ref is not null
            if (ref.offsetTop <= currentScrollPos && ref.offsetTop + ref.offsetHeight > currentScrollPos) {
              setActiveIndex(index)
            }
          }
        })
      }

      window.addEventListener('scroll', onScroll)

      // Clean up the event listener when the component is unmounted
      return () => {
        window.removeEventListener('scroll', onScroll)
      }
    }
  }, [entries, isVisible])

  return (
    <div className="sidebar max-lg:hidden" style={{ position: 'sticky', top: '5rem' }}>
      <ul>
        {entries.map((entry, index) => (
          <li key={index} className={index === activeIndex ? 'active' : ''}>
            <ScrollLink
              activeClass="active"
              to={entry.id}
              spy={true}
              smooth={true}
              offset={-80}
              duration={200}
              onSetActive={() => handleSetActive(index)}
            >
              <div className="text-gray-400 cursor-pointer">{entry.title}</div>
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
