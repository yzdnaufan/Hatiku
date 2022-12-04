import React from 'react'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
      <div className=''>Dashboard</div>
      <Outlet/>
    </>
  )
}

export default Dashboard