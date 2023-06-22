import React from 'react'
import { NavLink } from 'react-router-dom'
const Navheader = () => {
  return (
    <nav className="navheader">
      <NavLink to="/" className="navheader__link--Accueil">
        Accueil
      </NavLink>
      <NavLink to="/about" className="navheader__link--Apropos">
        A Propos
      </NavLink>
    </nav>
  )
}
export default Navheader
