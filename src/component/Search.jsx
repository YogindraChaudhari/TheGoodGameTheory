import React from 'react';
import { motion } from 'framer-motion';
import { XCircle } from 'lucide-react';

function Search({ search, setSearch }) {
  const handleClearSearch = () => {
    setSearch('');
  };

  return (
    <motion.div
      className="flex justify-center m-5 p-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full max-w-md">
        <input
          type="text"
          className="h-12 w-full bg-gray-950 outline-none p-4 pr-10 rounded-xl {/* Added pr-10 */}
                     font-bold text-lg text-white placeholder-gray-500
                     focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          placeholder='Search for Beers...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search && (
          <motion.button
            className="absolute right-1 top-2.5 pr-2 -translate-y-1/3 text-gray-400 hover:text-white transition-colors duration-200"
            onClick={handleClearSearch}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <XCircle size={24} />
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}

export default Search;