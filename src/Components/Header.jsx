import React from 'react'
import {Link} from "react-router-dom"

function header() {
  return (
    <>
    <div className='header'>
      Header
    </div>
    <div class="Header">
    <Link to="/">Home</Link> 
    <Link to="/about">about</Link>
    <Link to="/contact">contact</Link>
    </div>
    </>
  )
}

export default header

