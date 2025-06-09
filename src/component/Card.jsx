import React from 'react';
import { motion } from 'framer-motion';
import { Star, Wallet, BookUser } from 'lucide-react';
import Bottle_Image from '../assets/Bottle_Image.jpg'

function Card({ beer }) {
  const formattedRating = beer.rating.average ? beer.rating.average.toFixed(1) : 'N/A';
  const formattedPrice = beer.price ? `$${parseFloat(beer.price).toFixed(2)}` : 'N/A';

  return (
    <motion.div
      className="bg-gray-850 hover:bg-slate-800 text-white rounded-xl shadow-xl overflow-hidden m-4 p-6 flex flex-col items-center
                 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm
                 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-102
                 border border-gray-700"
      initial={{ opacity: 0, y: 50, rotateX: -10 }} 
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ scale: 1.03, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.08)" }} 
    >
      {/* Image Section */}
      <motion.div 
        className="relative h-48 w-48 mb-6 flex items-center justify-center bg-gray-700 rounded-lg overflow-hidden p-2"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <motion.img
          className="max-h-full max-w-full object-contain cursor-pointer"
          src={beer.image || Bottle_Image}
        //   alt={beer.name || 'Beer image'}
          whileHover={{ scale: 1.05 }} 
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Content Section */}
      <div className="w-full text-center">
        <h1 className="text-3xl font-extrabold text-blue-300 mb-3 leading-tight">{beer.name}</h1>
        
        <div className="space-y-2 text-left w-full mt-4">
          <p className="text-xl font-semibold text-red-400 flex items-center">
            <Wallet className="mr-3 text-red-500 flex-shrink-0" size={20} />
            <span className="truncate">Price: {formattedPrice}</span>
          </p>
          <p className="text-lg font-semibold text-yellow-300 flex items-center">
            <Star className="mr-3 text-yellow-400 flex-shrink-0" size={20} />
            <span className="truncate">Rating: {formattedRating}</span>
          </p>
          <p className="text-lg font-semibold text-orange-300 flex items-center">
            <BookUser className="mr-3 text-orange-400 flex-shrink-0" size={20} />
            <span className="truncate">Reviews: {beer.rating.reviews}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;