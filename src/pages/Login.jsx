import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [user,setUser]=useState({
        email:'',
        password:''
    });
    const navigate=useNavigate();

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUser(preVal=>{
            return {...preVal,[name]:value};
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(user.email==='m@abc.com'&&user.password==='mridul'){
          localStorage.setItem('token','dummy-token');
          navigate('/dashboard');
        }else{
          alert('Invalid Credentials');
        }

        setUser({
            email:'',
            password:''
        });
    }

  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white p-6 shadow-md rounded w-80 space-y-4'>
      <h2 className='text-xl font-semibold text-center'>Login</h2>
        <input type='email' name='email' value={user.email} onChange={handleChange} placeholder='Enter email'
            className='w-full border border-gray-300 rounded p-2'
        />
        <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='Enter password'
            className='w-full border border-gray-300 p-2 rounded'
        />
        <button
        className='w-full bg-blue-600 p-2 rounded text-white hover:bg-blue-700'
        >Login</button>
      </form>
    </div>
  )
}

export default Login
