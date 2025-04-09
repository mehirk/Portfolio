'use client';

import { useRef, useState, useEffect } from 'react';

export function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Check on resize
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden" ref={containerRef}>
      {/* Base background color */}
      <div className="absolute inset-0 bg-black/90"></div>
      
      {/* Conditional rendering based on device type */}
      {isMobile ? (
        // Simplified background for mobile - fewer elements and smaller blur radius
        <>
          <div 
            className="absolute inset-0 bg-gradient-to-br from-indigo-950/10 via-black/5 to-violet-950/10 blur-[50px]"
          />
          
          {/* Subtle overlay for texture - reduced opacity */}
          <div className="absolute inset-0 star-bg opacity-5"></div>
          
          {/* Vignette effect - simplified */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50"></div>
        </>
      ) : (
        // Full background for desktop
        <>
          {/* Static gradient blobs - no animation to reduce CPU usage */}
          <div 
            className="absolute -top-1/4 -left-1/4 w-[80%] h-[80%] rounded-full bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-violet-700/20 blur-[100px]"
          />
          
          <div 
            className="absolute top-1/3 -right-1/4 w-[70%] h-[70%] rounded-full bg-gradient-to-tr from-blue-500/20 via-cyan-400/15 to-teal-600/20 blur-[120px]"
          />
          
          <div 
            className="absolute -bottom-1/4 left-1/3 w-[75%] h-[75%] rounded-full bg-gradient-to-bl from-purple-500/15 via-fuchsia-500/12 to-pink-600/15 blur-[120px]"
          />
          
          {/* Static accent blobs */}
          <div 
            className="absolute top-1/2 left-1/4 w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-emerald-500/15 via-teal-500/12 to-cyan-600/18 blur-[100px] opacity-80"
          />
          
          <div 
            className="absolute -top-1/3 right-1/4 w-[55%] h-[55%] rounded-full bg-gradient-to-bl from-rose-500/12 via-pink-500/15 to-fuchsia-600/18 blur-[100px] opacity-80"
          />
          
          {/* Subtle overlay for texture */}
          <div className="absolute inset-0 star-bg opacity-10"></div>
          
          {/* Vignette effect for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
          
          {/* Noise texture overlay */}
          <div className="absolute inset-0 bg-noise opacity-[0.04]"></div>
        </>
      )}
    </div>
  );
}