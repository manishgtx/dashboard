import React from 'react'

const Stat = ({title,count,icon}) => {
  return (
    <div>
        <span>{icon}</span>
        <div className="info">
            <h4>{count}</h4>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Stat