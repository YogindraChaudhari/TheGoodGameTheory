import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './component/Card';
import Search from './component/Search';
import { motion } from 'framer-motion';

function App() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');
  const VITE_API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const getBeers = async () => {
      try {
        const res = await axios.get(VITE_API_URL);
        setBeers(res.data);
      } catch (err) {
        console.error("Error fetching beers:", err);
      }
    };
    getBeers();
  }, [VITE_API_URL]);

  const filterBeer = beers.filter(
    beer => beer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div
      className='min-h-screen bg-gray-900 p-4 sm:p-6 lg:p-8'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Search search={search} setSearch={setSearch} />
      <div className='flex flex-wrap justify-center gap-6 sm:gap-8'>
        {filterBeer.length > 0 ? (
          filterBeer.map(beer => (
            <Card key={beer.id} beer={beer} />
          ))
        ) : (
          <motion.p
            className='text-white text-2xl mt-10'
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            No beers found matching your search.
          </motion.p>
        )}
      </div>
    </motion.div>
  );
}

export default App;