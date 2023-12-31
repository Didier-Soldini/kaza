import React, { useState, useEffect } from 'react'
import fleche from '../../assets/fleche--droite.svg'

const Gallery = ({ pictures }) => {
  const [images] = useState(pictures)
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    images.forEach((imageUrl) => {
      const image = new Image()
      image.src = imageUrl
    })
  }, [images])
  const goToPrevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    )
  }

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const currentImage = images[currentIndex]

  return (
    <div className="carousel">
      <img src={currentImage} alt="gallery" className="carousel__img" />
      {images.length > 1 && (
        <>
          <img
            src={fleche} //Gauche
            alt="Cliquer sur le bouton précédent"
            className="carousel__button carousel__button--left"
            onClick={goToPrevSlide}
          />
          <p className="carousel__count">
            {currentIndex + 1}/{images.length}
          </p>
          <img
            src={fleche} //Droite
            alt="Cliquer sur le bouton suivant"
            className="carousel__button carousel__button--right"
            onClick={goToNextSlide}
          />
        </>
      )}
    </div>
  )
}

export default Gallery
