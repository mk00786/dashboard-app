import React from 'react'

const Modal = ({open,onClose,title,description}) => {
    if(!open) return null;
  return (
    <div className='fixed inset-0 bg-black bg-opacity-1 flex items-center justify-center z-50'>
      <div className='p-6 bg-white rounded-xl max-w-md w-full shadow-xl'>
        <h2 className='font-semibold text-xl mb-2'>{title}</h2>
        <p className='text-gray-700'>{description}</p>
        <button onClick={onClose} className='mt-4 text-blue-600 hover:underline'>Close</button>
      </div>
    </div>
  )
}

export default Modal
