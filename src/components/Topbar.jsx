import React from 'react'

const Topbar = () => {
  return (
    <header className='h-16 bg-white shadow flex items-center justify-between px-6'>
        <h1 className='text-2xl font-semibold'>Your App</h1>
        <div className='flex items-center gap-3'>
            <span className='text-gray-700'>Hi, user</span>
            <img src='https://i.pravatar.cc/40' alt='avatar' className='w-12 h-12 rounded-full'/>
        </div>
    </header>
  )
}

export default Topbar
