import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="d-flex justify-content-center py-3">
      <ul className="nav nav-pills">
        <li className="nav-item"><NavLink to="/" exact className="nav-link" activeClassName='active'>Contacts</NavLink></li>
        <li className="nav-item"><NavLink to="/register" className="nav-link">Registration</NavLink></li>
      </ul>
    </header>
  )
}

export default Header