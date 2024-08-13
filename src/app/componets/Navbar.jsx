'use client';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-black text-white p-3">
      <div className="container mx-auto flex justify-between items-center max-w-full">
        <div className="text-xl font-bold">
          <Link href="/">ozzproject.com</Link>
        </div>
        <ul className="hidden md:flex space-x-4 text-xl">
          <li>
            <Link href="https://www.canva.com/design/DAFs7jzIutM/WkONmE7E75_GS3KU2lfbSg/view">CV</Link>
          </li>
          <li>
            <Link href="">Portfolio</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/oscgonz19/recent-activity/articles/">Articles</Link>
          </li>
          <li>
            <Link href="/other-sites">Other Sites</Link>
          </li>
        </ul>
        <div className="hidden md:flex space-x-2">
          <a href="https://github.com/oscgonz19" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-6 h-6"/>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-6 h-6"/>
          </a>
        </div>
        <div className="md:hidden">
          <button className="text-white">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}
