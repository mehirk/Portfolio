'use client';

import { motion } from 'framer-motion';

interface HandwritingDividerProps {
  width?: number;
  height?: number;
  color1?: string;
  color2?: string;
  className?: string;
  path?: string;
}

export function HandwritingDivider({
  width = 150, 
  height = 30,
  color1 = '#818cf8',
  color2 = '#3b82f6',
  className = '',
  path = "M10,15 C20,5 30,25 50,15 C70,5 80,25 100,15 C120,5 130,25 150,15"
}: HandwritingDividerProps) {
  const uniqueId = `gradient-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className={`flex justify-center items-center my-4 ${className}`}>
      <svg 
        width={width} 
        height={height} 
        viewBox={`0 0 ${width} ${height}`} 
        className="overflow-visible"
      >
        <motion.path
          d={path}
          fill="transparent"
          stroke={`url(#${uniqueId})`}
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ 
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 0.5,
            repeatType: "reverse"
          }}
        />
        <defs>
          <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={color1} />
            <stop offset="100%" stopColor={color2} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
} 