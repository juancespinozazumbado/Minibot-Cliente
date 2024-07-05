import React from 'react'

const Navbar = () => {
  return (
   
    <nav className="navbar navbar-light bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
            className="me-2"
            height="20"
            alt="MDB Logo"
            loading="lazy"
          />
          <small>MDBootstrap</small>
        </a>
      </div>
    </nav>
  )
}

export default Navbar