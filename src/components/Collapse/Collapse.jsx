import React, { useState } from 'react'
import flecheHaut from '../../assets/fleche--haut.svg'


const Collapse = ({ title, children, className, headerClassName, titleClassName }) => {
  const [isCollapsed, setIsCollapsed] = useState(true)

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className={className}>
      <div className={headerClassName} onClick={toggleCollapse}>
        <h3 className={titleClassName}>{title}</h3>
        <button className="collapse__togglebtn">
          {isCollapsed ? (
            <img src={flecheHaut} alt="Collapse" />
          ) : (
            <img
              src={flecheHaut}
              className="collapse__togglebtn--rotate"
              alt="Expand"
            />
          )}
        </button>
      </div>
      <div
        className={`collapse__content ${
          isCollapsed ? 'collapse__content--hide' : 'collapse__content--show'
        }`}
      >
        <div className="collapse__content__text">{children}</div>
      </div>
    </div>
  )
}

export default Collapse
