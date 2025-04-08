'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" ref={containerRef}>
      {/* Base background color */}
      <div className="absolute inset-0 bg-black/90"></div>
      
      {/* Main animated gradient blobs */}
      <motion.div 
        className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-violet-700/20 blur-[100px]"
        animate={{
          x: [0, 40, -20, 30, 0],
          y: [0, 30, -30, -20, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: 90,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute top-1/3 -right-1/4 w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-400/15 to-teal-600/20 blur-[120px]"
        animate={{
          x: [0, -40, 20, -30, 0],
          y: [0, -30, 30, 20, 0],
          scale: [1, 0.95, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute -bottom-1/4 left-1/3 w-[75%] h-[75%] rounded-full bg-gradient-to-bl from-purple-500/15 via-fuchsia-500/12 to-pink-600/15 blur-[120px]"
        animate={{
          x: [0, 30, -40, 20, 0],
          y: [0, 20, -10, 30, 0],
          scale: [1, 1.05, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 85,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      
      {/* Accent blobs with different colors */}
      <motion.div 
        className="absolute top-1/2 left-1/4 w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-emerald-500/15 via-teal-500/12 to-cyan-600/18 blur-[100px] opacity-80"
        animate={{
          x: [0, -60, 40, -20, 0],
          y: [0, 40, -40, 10, 0],
          scale: [1, 1.15, 0.9, 1.05, 1],
        }}
        transition={{
          duration: 95,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute -top-1/3 right-1/4 w-[55%] h-[55%] rounded-full bg-gradient-to-bl from-rose-500/12 via-pink-500/15 to-fuchsia-600/18 blur-[100px] opacity-80"
        animate={{
          x: [0, 50, -30, 10, 0],
          y: [0, -50, 30, -20, 0],
          scale: [1, 0.9, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 100,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      
      {/* Subtle overlay for texture */}
      <div className="absolute inset-0 star-bg opacity-10"></div>
      
      {/* Vignette effect for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.04]"></div>
    </div>
  );
} 