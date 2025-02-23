import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'>
      <div><img src="/images/logo.svg" alt="Logo" /></div>
      <nav>
        <ul className="header-nav d-f align-center">
          <li className="header-nav-item"><Link to="/">Home</Link></li>
          <li className="header-nav-item"><Link to="/services">Services</Link></li>
          <li className="header-nav-item"><Link to="/projects">Projects</Link></li>
          <li className="header-nav-item"><Link to="/about">About</Link></li>
          <li className="header-nav-item"><Link to="/careers">Careers</Link></li>
          <li className="header-nav-item"><Link to="/blogs">Blogs</Link></li>
          <li className="header-nav-item header-nav-contact"><a href="">Contact us</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header