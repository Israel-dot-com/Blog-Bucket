import React from 'react'
import "./Navbar.css";

function Navbar() {
  return (
    <div className='app__navbar'>
        <div className='logo'>
            <h1>Blog Bucket</h1>
        </div>
        <div className="logo__links">
            <ul>
                <li> <a href="www.google.com">Home</a> </li>
                <li> <a href="www.google.com">Blog</a> </li>
                <li> <a href="www.google.com">Login</a> </li>
            </ul>
        </div>
        <a href="www.google.com" className='button'>...</a>
    </div>
  )
}

export default Navbar;