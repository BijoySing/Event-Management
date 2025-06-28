import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const DetailsServices = ({ service, delay = 0 }) => {
  if (!service) return null;

  const { id, image, title, booking_cost, service_description } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: 'easeOut' }}
      className="w-full max-w-sm sm:max-w-md md:max-w-lg mx-auto my-6"
    >
      <motion.div
        whileHover={{ scale: 1.03, rotate: 0.5 }}
        whileTap={{ scale: 0.98, rotate: -0.5 }}
        className="rounded-2xl overflow-hidden shadow-xl bg-white/20 backdrop-blur-md border border-white/30 hover:shadow-2xl transition-all duration-500"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-5 space-y-3">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-700">{service_description.slice(0, 100)}...</p>
          <div className="flex justify-between items-center pt-2">
            <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-sm">
              ${booking_cost}
            </span>
            <Link to={`/service/${id}`}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-gradient-to-r from-orange-400 to-pink-500 text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-md transition-all duration-300 ease-in-out"
              >
                Show More <FaArrowRight className="text-sm" />
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DetailsServices;
