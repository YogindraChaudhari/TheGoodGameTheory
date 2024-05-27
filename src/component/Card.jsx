import React from 'react'

function Card({beer}){

    return (
        <div className=' bg-gray-900 text-white m-10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <img className='h-[30] w-[20] object-cover rounded-2xl hover:scale-110 transition-transform duration-300 hover:cursor-pointer mb-4' src={beer.image} alt={beer.name} />
            <h1 className='text-2xl font-bold text-white-300'>{beer.name}</h1>
            <p className='text-xl font-bold mb-2 text-red-500'>Price: {beer.price} </p>
            <p className='text-lg font-bold mb-2 text-yellow-300'>Rating: {beer.rating.average} </p>
            <p className='text-lg font-bold mb-2 text-orange-300'>Reviews: {beer.rating.reviews} </p>
        </div>
    )
}


export default Card