import React from 'react'
import "./MainHeader.css"

function MainHeader({ children }) {
  return (
    <div className='main-header'>{ children }</div>
  )
}

export default MainHeader