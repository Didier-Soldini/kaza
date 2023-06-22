import React, { useState } from 'react'
import flecheHaut from '../../assets/fleche--haut.svg'

const CollapseAbout = ({ title, children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="collapseAbout">
      <div className="collapseAbout__header" onClick={toggleCollapse}>
        <h3 className="collapseAbout__title">{title}</h3>
        <button className="collapseAbout__togglebtn">
          {isCollapsed ? (
            <img src={flecheHaut} alt="CollapseAbout" />
          ) : (
            <img
              src={flecheHaut}
              className="collapseAbout__togglebtn--rotate"
              alt="Expand"
            />
          )}
        </button>
      </div>
      <div
        className={`collapseAbout__content ${
          isCollapsed ? 'collapseAbout__content--hide' : 'collapseAbout__content--show'
        }`}
      >
        <div className="collapseAbout__content__text">{children}</div>
      </div>
    </div>
  )
}

export default CollapseAbout