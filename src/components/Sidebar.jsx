import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate=useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div className='w-64 bg-gray-800 text-white p-6 space-y-4'>
        <h2 className='text-xl font-semibold'>Dashboard</h2>
        <nav className='flex flex-col space-y-2'>
            <Link to='/dashboard' className='hover:bg-gray-700 p-2 rounded'>Home</Link>
            <Link to='/profile' className='hover:bg-gray-700 p-2 rounded'>Profile</Link>
            <button onClick={handleLogout} className='text-left cursor-pointer hover:bg-gray-700 p-2 rounded'>
              Logout
            </button>
        </nav>      
    </div>
  )
}

export default Sidebar
