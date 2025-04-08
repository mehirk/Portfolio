'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HandwritingTextProps {
  text: string;
  className?: string;
  speed?: number; // milliseconds per character
  delay?: number; // initial delay in milliseconds
  onComplete?: () => void;
}

export function HandwritingText({ 
  text, 
  className = "", 
  speed = 70, 
  delay = 300,
  onComplete
}: HandwritingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let index = 0;
    let timeout: NodeJS.Timeout;
    
    // Reset text when component remounts or text changes
    setDisplayedText('');
    
    // Initial delay before starting animation
    const initialDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(prev => prev + text.charAt(index));
          index++;
        } else {
          clearInterval(interval);
          if (onComplete) onComplete();
        }
      }, speed);
      
      return () => clearInterval(interval);
    }, delay);
    
    return () => {
      clearTimeout(initialDelay);
      clearTimeout(timeout);
    };
  }, [text, speed, delay, onComplete]);
  
  return (
    <span className={className}>
      {displayedText}
      <motion.span 
        animate={{ opacity: [1, 0] }}
        transition={{ repeat: Infinity, duration: 0.7 }}
      >
        |
      </motion.span>
    </span>
  );
} 