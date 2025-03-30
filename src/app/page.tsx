'use client';

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-dark-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to <span className="text-primary">Mehir's</span> Portfolio
          </h1>
          <p className="text-xl text-gray-300">
            The full portfolio is under construction. Check back soon!
          </p>
        </motion.div>
      </main>
    </>
  );
} 