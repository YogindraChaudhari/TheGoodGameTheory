import React, { useState } from 'react'

function Search({search, setSearch}){

    return (
        <div className='flex justify-center flex-wrap m-5'>
            <input type="text" 
            className='h-[5vh] w-[50vh] bg-gray-900 outline-none p-4 m-5 rounded-xl font-bold text-xl cursor-pointer text-white'
            placeholder='Search for Beers'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
        </div>        
    )
}

export default Search