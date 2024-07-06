import React from 'react'

const Sidebar = () => {
  return (
    <div className="d-flex flex-column vh-100 bg-light p-3" style={{ position: 'fixed', width: '200px' }}>
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Chat</a>
      </li>
    </ul>
  </div>
  )
}

export default Sidebar;