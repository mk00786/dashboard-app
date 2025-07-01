import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import CardGrid from './CardGrid'
const Dashboard = () => {
  const [searchTerm,setSearchTerm]=useState('');


  return (
    <div className='flex h-screen w-full'>
      <Sidebar/>

      <div className='flex flex-col flex-1'>
        <Topbar/>
        <main className='flex-1 p-6 bg-gray-100 overflow-y-auto'>
            <div className='flex justify-between items-center flex-wrap gap-4 mb-6'>
            <h1 className='text-2xl font-semibold'>Welcome, User 👋</h1>
            <input type='text' placeholder='Search by title' className='p-2 border rounded w-full sm:w-64'
              value={searchTerm} onChange={e => setSearchTerm(e.target.value)}
              />
            </div>

            <CardGrid searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </main>
      </div>
    </div>
  )
}

export default Dashboard
