import React from 'react'
import { NavLink } from 'react-router-dom'
const Navheader = () => {
  return (
    <nav className="navheader">
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? 'navheader__link--Accueil'
            : isActive
            ? 'navheader__link--Accueil--active'
            : 'navheader__link--Apropos'
        }
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending
            ? 'navheader__link--Apropos'
            : isActive
            ? 'navheader__link--Apropos--active'
            : 'navheader__link--Accueil'
        }
      >
        A Propos
      </NavLink>
    </nav>
  )
}
export default Navheader
