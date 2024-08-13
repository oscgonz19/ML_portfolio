'use client';

import Image from 'next/image';
import {FaLinkedin, FaGithub, FaMedium, FaKaggle } from 'react-icons/fa';
export default function HeroSection() {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/fondo2.jpg" // Reemplaza con la ruta de tu imagen
        alt="Background"
        fill
        style={{ objectFit: 'cover' }}
        quality={100}
        className="absolute inset-0 brightness-120 contrast-100"
        />
    <div className="relative z-10 flex flex-col items-right justify-center h-full text-white">
        <div className="ml-20 items-right">
        <h1 className="mt-4 text-6xl font-bold font-serif drop-shadow-lg">Óscar Antonio González</h1>
        <p className="m-2 text-2xl drop-shadow-lg font-mono">
            Machine learning. Data science. Earth science.
        </p>
        <div className="p-5 flex space-x-4">
            <a href="https://github.com/oscgonz19" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-10 h-8"/>
          </a>
          <a href="https://linkedin.com/in/oscgonz19" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-10 h-8"/>
          </a>
        </div>
        </div>
    </div>
    </div>
    );
}
