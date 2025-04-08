'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  isClicking: boolean;
  hoverTarget: string;
}

export function CustomCursor() {
  const [cursor, setCursor] = useState<CursorState>({
    x: -100,
    y: -100,
    isHovering: false,
    isClicking: false,
    hoverTarget: ''
  });
  
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;
    
    // Add data attributes to interactive elements
    document.querySelectorAll('a, button, [role="button"]').forEach((el) => {
      el.setAttribute('data-cursor-hover', 'interactive');
    });
    
    const updateCursorPosition = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const hoverAttribute = target.getAttribute('data-cursor-hover');
      
      setCursor({
        x: e.clientX,
        y: e.clientY,
        isHovering: !!hoverAttribute,
        isClicking: cursor.isClicking,
        hoverTarget: hoverAttribute || ''
      });
    };
    
    const handleMouseDown = () => {
      setCursor(prev => ({
        ...prev,
        isClicking: true
      }));
    };
    
    const handleMouseUp = () => {
      setCursor(prev => ({
        ...prev,
        isClicking: false
      }));
    };
    
    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Add a class to the body to hide default cursor
    document.body.classList.add('custom-cursor');
    
    // Clean up event listeners
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.classList.remove('custom-cursor');
    };
  }, [cursor.isClicking]);
  
  if (typeof window === 'undefined') return null;
  
  const getVariants = () => {
    // Default cursor
    if (!cursor.isHovering && !cursor.isClicking) {
      return {
        scale: 1,
        borderWidth: '2px',
        backgroundColor: 'rgba(255, 255, 255, 0)',
      };
    }
    
    // Clicking
    if (cursor.isClicking) {
      return {
        scale: 0.8,
        borderWidth: '1px',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
      };
    }
    
    // Hovering over interactive element
    if (cursor.hoverTarget === 'interactive') {
      return {
        scale: 1.5,
        borderWidth: '1px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
      };
    }
    
    return {
      scale: 1,
      borderWidth: '2px',
      backgroundColor: 'rgba(255, 255, 255, 0)',
    };
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full border-white border-2 pointer-events-none z-50"
        style={{
          x: cursor.x - 12,
          y: cursor.y - 12,
        }}
        animate={getVariants()}
        transition={{
          duration: 0, // Remove delay/smoothing for instant cursor movement
        }}
      />
      
      {/* Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-white pointer-events-none z-50"
        style={{
          x: cursor.x - 2,
          y: cursor.y - 2,
        }}
        transition={{
          duration: 0, // Remove delay/smoothing for instant cursor movement
        }}
      />
      
      {/* Add global style for hiding default cursor */}
      <style jsx global>{`
        .custom-cursor * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
} 