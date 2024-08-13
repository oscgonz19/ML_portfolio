'use client';

import { FaEnvelope, FaTiktok, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
const Profile = () => {
    return (
    <div className="p-6 text-center">
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
        <Image
        src="/Profile13.png" // Reemplaza con la ruta de tu imagen
        alt="Profile"
        width={200} // Ancho de la imagen (24 * 4 = 96px)
        height={200} // Alto de la imagen (24 * 4 = 96px)
        className="rounded-full mb-2"
        />
        <h2 className="text-4xl font-semibold mb-2 text-black "> Ozz <span role="img" aria-label="heart"> ⚡</span></h2>
        <p className="text-gray-800 mb-2">data and earth scientist with passion for tech, car spotting & finance, currently based on Colombia</p>
        <p className="text-gray-800 mb-4">📍 Quindío/ co</p>
    <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-900">  Contact   </button>
          
        </div>
        </div>

    
    );
};

export default Profile;
