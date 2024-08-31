'use client';

import { FaEnvelope, FaTiktok, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Portfolio</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" legacyBehavior>
                  <a className="hover:underline hover:text-gray-400">View All Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio#data-viz" legacyBehavior>
                  <a className="hover:underline hover:text-gray-400">Data Visualization</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio#machine-learning" legacyBehavior>
                  <a className="hover:underline hover:text-gray-400">Machine Learning</a>
                </Link>
              </li>
              <li>
                <Link href="/portfolio#web-development" legacyBehavior>
                  <a className="hover:underline hover:text-gray-400">Web Development</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Certifications</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/certifications" legacyBehavior>
                  <a className="hover:underline hover:text-gray-400">Microsoft</a>
                </Link>
              </li>
              <li>
                <Link href="/certifications" legacyBehavior>
                  <a className="hover:underline hover:text-gray-400">AWS</a>
                </Link>
              </li>
              <li>
                <Link href="/certifications" legacyBehavior>
                  <a className="hover:underline hover:text-gray-400">Networking</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" legacyBehavior>
                  <a className="hover:underline hover:text-gray-400">Contact Form</a>
                </Link>
              </li>
              <li>
                <Link href="mailto:oscargo1917@gmail.com" legacyBehavior>
                  <a className="hover:underline hover:text-gray-400">Email: oscargo1917@gmail.com</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Other Projects</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projects#project1" legacyBehavior>
                  <a className="hover:underline hover:text-gray-400">Vivo</a>
                </Link>
              </li>
              <li>
                <Link href="/projects#project2" legacyBehavior>
                  <a className="hover:underline hover:text-gray-400">Geología & Concreto</a>
                </Link>
              </li>
              <li>
                <Link href="/projects#project3" legacyBehavior>
                  <a className="hover:underline hover:text-gray-400">Not Everything Belong to The Sea</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
        <p className="mt-6 text-gray-500">{new Date().getFullYear()} All rights reserved. Made with <span className="text-purple-500">💜</span>.</p>
          </div>
          
        </div>
    </footer>
  );
};

export default Footer;