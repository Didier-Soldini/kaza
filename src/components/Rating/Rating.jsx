import React from 'react'

const Rating = ({ value }) => {
  const filledStars = []
  const emptyStars = []

  for (let i = 0; i < value; i++) {
    filledStars.push(<i className="fas fa-star" key={i}></i>)
  }

  for (let i = value; i < 5; i++) {
    emptyStars.push(<i className="fas fa-star rating--grise" key={i}></i>)
  }

  return (
    <div className="rating">
      {filledStars}
      {emptyStars}
    </div>
  )
}

export default Rating
