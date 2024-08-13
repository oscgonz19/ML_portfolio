'use client';

import { FaEnvelope, FaTiktok, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
            <ul>
              <li className="mb-2">
                <Link href="/portfolio" legacyBehavior>
                  <a className="hover:underline">View All Projects</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/portfolio#data-viz" legacyBehavior>
                  <a className="hover:underline">Data Visualization</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/portfolio#machine-learning" legacyBehavior>
                  <a className="hover:underline">Machine Learning</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/portfolio#web-development" legacyBehavior>
                  <a className="hover:underline">Web Development</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <ul>
              <li className="mb-2">
                <Link href="/certifications" legacyBehavior>
                  <a className="hover:underline">Microsoft</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/certifications" legacyBehavior>
                  <a className="hover:underline">AWS</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/certifications" legacyBehavior>
                  <a className="hover:underline">Networking</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul>
              <li className="mb-2">
                <Link href="/contact" legacyBehavior>
                  <a className="hover:underline">Contact Form</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="mailto:example@example.com" legacyBehavior>
                  <a className="hover:underline">Email: example@example.com</a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Other Projects</h3>
            <ul>
              <li className="mb-2">
                <Link href="/projects#project1" legacyBehavior>
                  <a className="hover:underline">Project 1</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/projects#project2" legacyBehavior>
                  <a className="hover:underline">Project 2</a>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/projects#project3" legacyBehavior>
                  <a className="hover:underline">Project 3</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="flex justify-center space-x-4 text-2xl">
        
            <Link href="https://www.twitter.com" legacyBehavior>
              <a className="hover:text-gray-500"><FaTwitter /></a>
            </Link>
            <Link href="https://www.linkedin.com" legacyBehavior>
              <a className="hover:text-gray-500"><FaLinkedin /></a>
            </Link>
            <Link href="https://github.com/oscgonz19" legacyBehavior>
              <a className="hover:text-gray-500"><FaGithub /></a>
            </Link>

          </div>
         <p className="mt-4 text-gray-400">{new Date().getFullYear()} All rights reserved. Made with 💜.</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
