import React from 'react'


const Banner = ({ image, showText }) => {
  return (
    <div className="banner">
      <img className="banner__img" src={image} alt="paysage de montagne" />
      <div className="banner__overlay" />
      {showText && (
        <h2 className="banner__title">
          Chez vous, <span>partout et ailleurs</span>
        </h2>
      )}
    </div>
  )
}

export default Banner
