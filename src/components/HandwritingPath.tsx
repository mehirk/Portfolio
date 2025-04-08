'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface HandwritingPathProps {
  text: string;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  duration?: number;
}

export function HandwritingPath({
  text,
  className = "",
  strokeColor = "white",
  strokeWidth = 2,
  duration = 2.5
}: HandwritingPathProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [paths, setPaths] = useState<string[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const generatePaths = () => {
      // This is a simplified algorithm to generate handwritten-looking paths
      // A more sophisticated approach would use actual handwriting fonts or paths
      
      const textPaths: string[] = [];
      const charWidth = 20;
      const charHeight = 30;
      const baselineY = 25;
      
      let currentX = 10;
      
      // Generate a path for each character
      for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        if (char === ' ') {
          currentX += charWidth * 0.8;
          continue;
        }
        
        // Add some randomness to make it look handwritten
        const startY = baselineY + Math.random() * 3 - 1.5;
        const endY = baselineY + Math.random() * 3 - 1.5;
        
        // Different path strategies for different characters
        let path = '';
        
        // For simplicity, we're using basic shapes
        // In a real implementation, you'd use proper font path data
        switch(char.toLowerCase()) {
          case 'a':
            path = `M ${currentX} ${baselineY} Q ${currentX+5} ${baselineY-15}, ${currentX+10} ${baselineY} T ${currentX+20} ${baselineY} M ${currentX+5} ${baselineY-7} L ${currentX+15} ${baselineY-7}`;
            break;
          case 'e':
            path = `M ${currentX} ${baselineY-8} Q ${currentX+10} ${baselineY-15}, ${currentX+15} ${baselineY-8} Q ${currentX+20} ${baselineY}, ${currentX+10} ${baselineY+5} Q ${currentX} ${baselineY}, ${currentX+10} ${baselineY-8}`;
            break;
          case 'p':
            path = `M ${currentX} ${baselineY-20} L ${currentX} ${baselineY+10} M ${currentX} ${baselineY-15} Q ${currentX+15} ${baselineY-15}, ${currentX+15} ${baselineY} Q ${currentX+15} ${baselineY+5}, ${currentX} ${baselineY+5}`;
            break;
          case 'r':
            path = `M ${currentX} ${baselineY} L ${currentX} ${baselineY-15} Q ${currentX+10} ${baselineY-15}, ${currentX+15} ${baselineY-10}`;
            break;
          case 'j':
            path = `M ${currentX+10} ${baselineY-15} L ${currentX+10} ${baselineY+5} Q ${currentX+5} ${baselineY+10}, ${currentX} ${baselineY+5} M ${currentX+10} ${baselineY-20} L ${currentX+10} ${baselineY-18}`;
            break;
          case 't':
            path = `M ${currentX+5} ${baselineY-20} L ${currentX+5} ${baselineY+5} Q ${currentX+10} ${baselineY+5}, ${currentX+15} ${baselineY} M ${currentX} ${baselineY-10} L ${currentX+15} ${baselineY-10}`;
            break;
          case 'i':
            path = `M ${currentX+5} ${baselineY-15} L ${currentX+5} ${baselineY} M ${currentX+5} ${baselineY-20} L ${currentX+5} ${baselineY-18}`;
            break;
          case 'l':
            path = `M ${currentX+5} ${baselineY-20} L ${currentX+5} ${baselineY}`;
            break;
          case 'c':
            path = `M ${currentX+15} ${baselineY-15} Q ${currentX} ${baselineY-15}, ${currentX} ${baselineY} Q ${currentX} ${baselineY+5}, ${currentX+15} ${baselineY+5}`;
            break;
          case 's':
            path = `M ${currentX+15} ${baselineY-15} Q ${currentX} ${baselineY-15}, ${currentX} ${baselineY-7} Q ${currentX+20} ${baselineY-7}, ${currentX+5} ${baselineY+5} Q ${currentX-5} ${baselineY+10}, ${currentX+10} ${baselineY+5}`;
            break;
          default:
            // Default shape for letters without specific paths
            path = `M ${currentX} ${baselineY} Q ${currentX+7} ${baselineY-15}, ${currentX+10} ${baselineY-7} T ${currentX+20} ${baselineY}`;
        }
        
        textPaths.push(path);
        currentX += charWidth + Math.random() * 4 - 2; // Add some randomness to spacing
      }
      
      setPaths(textPaths);
      setDimensions({
        width: currentX + 20,
        height: charHeight + 20
      });
    };
    
    generatePaths();
  }, [text]);
  
  return (
    <div className={className}>
      <svg
        ref={svgRef}
        width={dimensions.width}
        height={dimensions.height}
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            fill="none"
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              duration: duration / paths.length,
              delay: (duration / paths.length) * index,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
} 