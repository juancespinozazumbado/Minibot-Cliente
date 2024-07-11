import React from 'react'
import Logo from '../../assets/img/Logo.jpg'

const navbarStyle = {
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
};

const Navbar = () => {
  return (
   
    <nav className="navbar navbar-light bg-light shadow-lg"
       style={navbarStyle}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src={Logo}
            className="me-2"
            height="40"
            alt="MDB Logo"
            loading="lazy"
          />
          <small>XumTech</small>
        </a>
      </div>
    </nav>
  )
}

export default Navbar