import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
const Dashboard = () => {
  return (
    <div className='flex h-screen w-full'>
      <Sidebar/>

      <div className='flex flex-col flex-1'>
        <Topbar/>
        <main className='flex-1 p-6 bg-gray-100 overflow-y-auto'>
            <h1 className='text-2xl font-semibold'>Welcome, User 👋</h1>
        </main>
      </div>
    </div>
  )
}

export default Dashboard
