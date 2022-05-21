import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
    <nav>
        <Link to="/" className='link'> Discover</Link>
        <Link to="/watchlist" className='link'> Watchlist</Link>
       
         </nav>
    </div>
  )
}
