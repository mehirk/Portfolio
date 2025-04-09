'use client';

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useDeviceDetect, usePrefersReducedMotion } from '@/lib/device-utils';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltFactor?: number;
  glareEnabled?: boolean;
  perspective?: number;
  glareOpacity?: number;
  scale?: number;
}

export function TiltCard({
  children,
  className,
  tiltFactor = 5,
  glareEnabled = true,
  perspective = 1000,
  glareOpacity = 0.2,
  scale = 1.02
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  // Use device detection hooks
  const { isMobile } = useDeviceDetect();
  const prefersReducedMotion = usePrefersReducedMotion();
  
  // Determine if effects should be disabled
  const shouldDisableEffects = isMobile || prefersReducedMotion;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || shouldDisableEffects) return;
    
    // Get the card dimensions and position
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate the mouse position relative to the card
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate the tilt values
    const tiltX = ((y / rect.height) * 2 - 1) * tiltFactor;
    const tiltY = ((x / rect.width) * 2 - 1) * -tiltFactor;
    
    // Set the tilt state
    setTilt({ x: tiltX, y: tiltY });
    
    // Calculate glare position (percentage values)
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlarePosition({ x: glareX, y: glareY });
  };

  const handleMouseEnter = () => {
    if (shouldDisableEffects) return;
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // Reset the tilt when the mouse leaves
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={cn("relative overflow-hidden", className)}
      style={{
        perspective: `${perspective}px`,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: shouldDisableEffects ? 0 : tilt.x,
        rotateY: shouldDisableEffects ? 0 : tilt.y,
        scale: (isHovering && !shouldDisableEffects) ? scale : 1,
      }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 300,
        mass: 0.5,
      }}
    >
      {/* Main content */}
      {children}
      
      {/* Glare effect - disabled when effects should be disabled */}
      {(glareEnabled && !shouldDisableEffects) && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,${glareOpacity}), transparent 60%)`,
            opacity: isHovering ? 1 : 0,
          }}
          transition={{
            opacity: { duration: 0.3 }
          }}
        />
      )}
    </motion.div>
  );
}