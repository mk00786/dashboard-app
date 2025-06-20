import React,{useState} from 'react'

const Register = () => {
    const [user,setUser]=useState({
            email:'',
            password:''
        });
    
        const handleChange=(e)=>{
            const {name,value}=e.target;
            setUser(preVal=>{
                return {...preVal,[name]:value};
            })
        }
    
        const handleSubmit=(e)=>{
            e.preventDefault();
    
            setUser({
                email:'',
                password:''
            });
        }

  return (
    <div className='flex justify-center items-center w-full min-h-screen bg-gray-100'>
      <form onSubmit={handleSubmit} className='bg-white w-80 shadow-md p-6 rounded space-y-4'>
      <h2 className='text-center font-semibold text-xl'>Register</h2>
        <input type='email' name='email' value={user.email} onChange={handleChange} placeholder='Enter email'
            className='border border-gray-300 p-2 w-full rounded'
        />
        <input type='password' name='password' value={user.password} onChange={handleChange} placeholder='Enter password'
            className='border border-gray-300 w-full p-2 rounded'
        />
        <button type='submit' className='bg-blue-600 rounded text-white p-2 w-full hover:bg-blue-700'>Register</button>
      </form>
    </div>
  )
}

export default Register
