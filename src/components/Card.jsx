import React from 'react'

const Card = ({image,title,description}) => {
  return (
    <div className='bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform'>
      <img src={image} alt={title} className='w-full h-40 object-cover'/>
      <div className='p-4'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p className='text-gray-600 text-sm'>{description}</p>
      </div>
    </div>
  )
}

export default Card
 