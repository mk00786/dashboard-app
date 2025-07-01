import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal';

const Card=({title,description,onClick})=>{
    return (
    <div onClick={onClick} className='cursor-pointer p-4 bg-white shadow-xl rounded-2xl hover:scale-[1.02] transition-transform'>
        <h2 className='text-xl font-semibold mb-2'>{title}</h2>
        <p className='text-gray-600 text-sm'>{description}</p>

    </div>
    );
}


const CardGrid = ({searchTerm}) => {
    const [cards,setCards]=useState([]);
    const [loading,setLoading]=useState(false);
    const [selectedCard,setSelectedCard]=useState(null);

  const filteredCard=cards.filter(card=>card.title.toLowerCase().includes(searchTerm.toLowerCase()));

    const handleCardClick=(card)=>{
      setSelectedCard(card);
    }

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
      {filteredCard.map((item)=>(
        <Card key={item.id} 
            title={item.title}
            description={item.body}
            onClick={()=>handleCardClick(item)}
        />
      ))}
      <Modal
        open={selectedCard!==null}
        onClose={()=>setSelectedCard(null)}
        title={selectedCard?.title}
        description={selectedCard?.body}
      />
    </div>
  )
}

export default CardGrid
