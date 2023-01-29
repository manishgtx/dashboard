import React from 'react'
import Stat from '../Stat'
import { stats } from '../../meta/stats'
import Features from '../List/Features'
const index = () => {
  return (
        <div className='header'>
         {stats.map((data) => {
          return <Stat key={data.id} {...data}/>
         })} 
        </div>
  )
}

export default index