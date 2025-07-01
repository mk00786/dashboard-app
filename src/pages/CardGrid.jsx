import React, { useEffect, useState } from 'react'

const Card=({title,description})=>{
    return (
    <div className='p-4 bg-white shadow-xl rounded-2xl hover:scale-[1.02] transition-transform'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p className='text-gray-600 text-sm'>{description}</p>
    </div>
    );
}

const CardGrid = () => {
    const [cards,setCards]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
        .then(res=>res.json())
        .then(data=>{
            setCards(data);
            setLoading(false);
        })
        .catch((err)=>{
          console.error('API fetch failed',err);
          setLoading(false);  
        });
    },[]);

    if(loading){
        return <p className='text-center p-6'>Loading...</p>
    }

  return (
    <div className='p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
      {cards.map((item)=>(
        <Card key={item.id} 
            title={item.title}
            description={item.body}
        />
      ))}
    </div>
  )
}

export default CardGrid
