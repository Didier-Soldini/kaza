import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="error__page">
      <h1 className="error__404">404</h1>
      <div className="error__oups">
      <h2 className="error__oups">
        Oups! La page que
      </h2>
      <h2 className="error__oups">
        vous demandez n'existe pas
      </h2>
      </div>
      <Link to="/" className="error__link">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}
export default Error
