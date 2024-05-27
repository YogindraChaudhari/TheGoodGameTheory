import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './component/Card'
import Search from './component/Search'

function App() {
  const [beers, setBeers] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    const getBeers = async () => {
      try{
        const res = await axios.get('https://api.sampleapis.com/beers/ale')
        setBeers(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    getBeers()
  }, [])

  const filterBeer = beers.filter(
    beer => beer.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='bg-gray-700 '>
      <Search search={search} setSearch={setSearch} />
      <div className='flex flex-wrap justify-around'>
        {filterBeer.map(beer => (
          <Card key={beer.id} beer={beer} />
        ))}
      </div>
    </div>
  )
}

export default App
