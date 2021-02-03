import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
// import { Button } from './Button'
import './Navbar.css'

function Navbar() {
  const [click, setClick] = useState(false)
  const [button, setbutton] = useState(true)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setbutton(false)
    } else {
      setbutton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Ratatouille
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* HOME */}
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            {/* Services */}
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Menu
              </Link>
            </li>
            {/* Products */}
            {/* <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Promotions
              </Link>
            </li> */}
            {/* SignUp */}
            {/* <li className='nav-item'>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>Sign Up</Button>} */}
        </div>
      </nav>
    </>
  )
}

export default Navbar
