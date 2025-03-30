'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-dark-800 bg-opacity-90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/">
          <span className="text-2xl font-bold text-white">Mehir.dev</span>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#home" className="text-gray-300 hover:text-white transition-colors duration-300">
            Home
          </Link>
          <Link href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
            About
          </Link>
          <Link href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">
            Projects
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
} 