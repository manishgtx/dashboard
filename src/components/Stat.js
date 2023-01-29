import React from 'react'

const Stat = ({title,count,icon}) => {
  return (
    <div className='single-stat'>
        <span className='stat-icon'>{icon}</span>
        <div className="info">
            <h4>{count}</h4>
            <p>{title}</p>
        </div>
    </div>
  )
}

export default Stat