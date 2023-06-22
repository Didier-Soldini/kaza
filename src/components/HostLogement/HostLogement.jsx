import React from 'react'

const HostLogement = ({ host }) => {
  return (
    <div className="hostlogement">
      <div className="hostlogement__name">{host.name}</div>
      <img alt={host.name} src={host.picture} />
    </div>
  )
}

export default HostLogement
