'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  distance?: number;
  strength?: number;
  scale?: number;
  onClick?: () => void;
  href?: string;
}

export function MagneticButton({
  children,
  className,
  distance = 500,
  strength = 25,
  scale = 1.05,
  onClick,
  href
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  
  // Setup motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Add springs for smooth movement
  const springConfig = { damping: 25, stiffness: 300 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);
  
  // Transform for the content (to add a slight delay)
  const contentX = useTransform(xSpring, (value) => value * 0.5);
  const contentY = useTransform(ySpring, (value) => value * 0.5);
  
  const [isHovering, setIsHovering] = useState(false);
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
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current || isMobile) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    
    // Calculate the center of the button
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate the distance from the mouse to the center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Calculate the distance using Pythagorean theorem
    const absoluteDistance = Math.sqrt(distanceX ** 2 + distanceY ** 2);
    
    // Only apply magnetic effect if within the defined distance
    if (absoluteDistance < distance) {
      // Calculate the magnetic pull (closer = stronger)
      const pull = (distance - absoluteDistance) / distance;
      
      // Apply the movement based on the configured strength and distance
      x.set(distanceX * pull * (strength / 10));
      y.set(distanceY * pull * (strength / 10));
    } else {
      // Reset if outside the magnetic field
      x.set(0);
      y.set(0);
    }
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
    // Reset position when mouse leaves
    x.set(0);
    y.set(0);
  };
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleClick = () => {
    onClick?.();
  };
  
  // Determine which element to render based on whether href is provided
  const Component = href ? 'a' : 'button';
  const additionalProps = href 
    ? { href } 
    : { type: "button" as "button" | "submit" | "reset" };
  
  return (
    <motion.div
      ref={buttonRef}
      className={cn(
        "relative cursor-pointer select-none",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      animate={{ scale: (isHovering && !isMobile) ? scale : 1 }}
      transition={{ scale: { type: "spring", damping: 15, stiffness: 300 } }}
      onClick={handleClick}
      style={{
        x: isMobile ? 0 : xSpring,
        y: isMobile ? 0 : ySpring,
      }}
    >
      {href ? (
        <a href={href} className="block outline-none">
          <motion.div
            style={{
              x: isMobile ? 0 : contentX,
              y: isMobile ? 0 : contentY,
            }}
          >
            {children}
          </motion.div>
        </a>
      ) : (
        <button type="button" className="block outline-none">
          <motion.div
            style={{
              x: isMobile ? 0 : contentX,
              y: isMobile ? 0 : contentY,
            }}
          >
            {children}
          </motion.div>
        </button>
      )}
    </motion.div>
  );
} 