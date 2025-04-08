'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  width?: string;
  height?: string;
  className?: string;
  frontColor?: string;
  backColor?: string;
}

export const FlipCard = ({
  frontContent,
  backContent,
  width = '300px',
  height = '400px',
  className = '',
  frontColor = 'bg-zinc-900/90',
  backColor = 'bg-zinc-800/90'
}: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`flip-card ${className}`} 
      style={{ 
        width, 
        height,
        perspective: '1000px'
      }}
      onClick={handleFlip}
    >
      <div 
        className={`flip-card-inner relative w-full h-full transition-transform duration-700 ease-in-out transform-gpu`}
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div 
          className={`flip-card-front absolute w-full h-full backface-hidden rounded-xl overflow-hidden ${frontColor}`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
          }}
        >
          {frontContent}
        </div>
        
        <div 
          className={`flip-card-back absolute w-full h-full backface-hidden rounded-xl overflow-hidden ${backColor}`}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {backContent}
        </div>
      </div>
    </div>
  );
}; 