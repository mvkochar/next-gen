import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'>
      <div><img src="/images/logo.svg" alt="Logo" /></div>
      <nav>
        <ul className="header-nav d-f align-center">
          <li className="header-nav-item"><a href="">Home</a></li>
          <li className="header-nav-item"><a href="">Services</a></li>
          <li className="header-nav-item"><a href="">Projects</a></li>
          <li className="header-nav-item"><a href="">About</a></li>
          <li className="header-nav-item"><a href="">Careers</a></li>
          <li className="header-nav-item"><a href="">Blogs</a></li>
          <li className="header-nav-item header-nav-contact"><a href="">Contact us</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header