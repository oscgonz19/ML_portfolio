'use client';

import { FaEnvelope, FaTiktok, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
const Profile = () => {
    return (
    <div className="bg-black-100 p-6 rounded-lg shadow-lg text-center">
    <h1 className="text-3xl font-semibold mb-6">1:1 Advice and Help</h1>
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg flex flex-col items-center text-center">
        <Image
        src="/Profile13.png" // Reemplaza con la ruta de tu imagen
        alt="Profile"
        width={300} // Ancho de la imagen (24 * 4 = 96px)
        height={400} // Alto de la imagen (24 * 4 = 96px)
        className="rounded-full mb-2"
        />
        <h2 className="text-4xl font-semibold mb-2 text-black "> Ozz <span role="img" aria-label="heart"> ⚡</span></h2>
        <p className="text-gray-800 mb-2">data and earth scientist with passion for tech, car spotting & finance, currently based on Colombia</p>
        <p className="text-gray-800 mb-4">📍 Quindío/ co</p>
    <button className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-900">Mentorship</button>
          
        </div>
        </div>
    
    );
};

export default Profile;
