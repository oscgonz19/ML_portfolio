'use client';
import Link from 'next/link';
import {FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';


export default function Navbar() {
  return (
    <nav className="bg-black text-white p-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">ozzproject.com</Link>
        </div>
        <ul className="flex space-x-4 text-xl">
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/talks">Portfolio</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/oscgonz19/recent-activity/articles/">Articles</Link>
          </li>
          <li>
            <Link href="/other-sites">Other Sites</Link>
          </li>
        </ul>
        <div className="flex space-x-2">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="w-10 h-8"/>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="w-10 h-8"/>
          </a>
        </div>
      </div>
    </nav>
  );
}
