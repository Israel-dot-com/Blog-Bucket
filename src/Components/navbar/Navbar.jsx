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
                <li> <a href='#nav'>Home</a> </li>
                <li> <a href='#nav'>Blog</a> </li>
                <li> <a href='#nav'>Login</a> </li>
            </ul>
        </div>
        <a className='button'></a>
    </div>
  )
}

export default Navbar;