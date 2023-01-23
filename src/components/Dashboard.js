import React from 'react'
import Header from './Header'
import List from './List'
import Sidebar from './Sidebar'
const Dashboard = () => {
  return (
    <div className='dashboard'>
        <Sidebar />
        <Header />
        <List />
    </div>
  )
}

export default Dashboard