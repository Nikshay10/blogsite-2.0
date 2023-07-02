import React from 'react'
import './Header.css'
function Header() {
  return (
    <nav className='header'>
      <div className='logo'>
        <p>The Blog</p>
      </div>
      <ul>
        <li><a href="#" className='login'>Login</a></li>
        <li><a href="#" className='register'>Register</a></li>
      </ul>
    </nav>
  )
}

export default Header