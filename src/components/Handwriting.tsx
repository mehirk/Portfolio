import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface HandwritingProps {
  text: string;
  className?: string;
  duration?: number;
  strokeWidth?: number;
  color?: string;
  delay?: number;
}

export const Handwriting = ({
  text,
  className = '',
  duration = 2.5,
  strokeWidth = 2,
  color = 'stroke-accent', // Using Tailwind classes for color
  delay = 0
}: HandwritingProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const pathRef = useRef<SVGPathElement>(null);
  
  useEffect(() => {
    if (inView) {
      controls.start({
        pathLength: 1,
        transition: { 
          duration, 
          delay,
          ease: "easeInOut" 
        }
      });
    }
  }, [controls, inView, duration, delay]);

  // Generate a simple path for the text
  // This is a simplified approach - for complex text, consider using a proper SVG path generation library
  const generateTextPath = (text: string) => {
    // For demonstration, we'll create a simple path that resembles handwriting
    // In a real implementation, you might want to use a font or custom SVG path
    const baseY = 30; // baseline y-coordinate
    const letterWidth = 20; // average width per character
    const totalWidth = text.length * letterWidth;
    
    return `M10,${baseY} q${totalWidth/2},0 ${totalWidth},0`;
  };

  return (
    <div className={`handwriting-container ${className}`} ref={ref}>
      <svg 
        width="100%" 
        height="60" 
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <motion.path
          ref={pathRef}
          d={generateTextPath(text)}
          fill="transparent"
          className={`${color}`}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={controls}
        />
        <text
          x="10"
          y="30"
          fontSize="20"
          fontFamily="cursive"
          className="fill-transparent"
          strokeWidth="0"
        >
          {text}
        </text>
      </svg>
    </div>
  );
}; 