import React from 'react'

const Item = ({id,title,icon,isSelected,setIsSelected}) => {
  return (
    <li className={`item ${isSelected === id ? 'active' : ''}`} onClick={() => setIsSelected(id)}>
        <span className='icon'>
            {icon}
        </span>
        <p>{title}</p>
    </li>
  )
}

export default Item