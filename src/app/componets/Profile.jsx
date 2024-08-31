'use client';

import { FaEnvelope, FaTiktok, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Profile = () => {
  return (
    
    <div className="p-6 text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className=" p-6 rounded-lg flex flex-col items-center text-center transform transition duration-500 hover:scale-105"
      >
        <Image
          src="/Profile13.png" // Reemplaza con la ruta de tu imagen
          alt="Profile"
          width={200} 
          height={200} 
          className="rounded-full mb-4 border-2 border-purple-700"
        />
        <h2 className="text-4xl font-bold mb-2 text-gray-900"> Ozz <span role="img" aria-label="heart">⚡</span></h2>
        <p className="text-gray-700 mb-4">Data and Earth Scientist with passion for tech, car spotting & finance, currently based in Colombia.</p>
        <p className="text-gray-500 mb-6">📍 Quindío, COL</p>
      </motion.div>
    </div>
  );
};

export default Profile;
