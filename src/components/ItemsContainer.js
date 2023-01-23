import {useState} from 'react'
import Item from './Item'
import { menu } from '../meta/menu'
const ItemsContainer = () => {
    const [isSelected,setIsSelected] = useState(0);
  return (
    <ul>
        {menu.map((data) => {
            return <Item key={data.id} {...data} isSelected={isSelected} setIsSelected={setIsSelected}/>
        })}
    </ul>
  )
}

export default ItemsContainer