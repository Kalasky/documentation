import React from 'react'
import '../index.scss'

export const GlowGrayPrimary = ({ onClick, children, padding = '', margin = 'auto' }) => {
  return (
    <button className={`btn-hover color-8 max-sm:w-full max-sm:mt-4 ${margin} ${padding}`} onClick={onClick}>
      {children}
    </button>
  )
}

export const GlowGreenPrimary = ({ onClick, children, padding = '', margin = 'auto' }) => {
  return (
    <button className={`btn-hover color-1 max-sm:w-full max-sm:mt-4 ${margin} ${padding}`} onClick={onClick}>
      {children}
    </button>
  )
}
