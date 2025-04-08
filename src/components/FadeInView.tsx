'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FadeInViewProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

export function FadeInView({ 
  children, 
  className, 
  delay = 0, 
  duration = 0.5,
  once = true,
  direction = 'up'
}: FadeInViewProps) {
  
  const getDirectionOffset = () => {
    switch (direction) {
      case 'up': return { y: 40, x: 0 };
      case 'down': return { y: -40, x: 0 };
      case 'left': return { y: 0, x: 40 };
      case 'right': return { y: 0, x: -40 };
      case 'none': return { y: 0, x: 0 };
      default: return { y: 40, x: 0 };
    }
  };

  const offset = getDirectionOffset();

  return (
    <motion.div
      className={cn(className)}
      initial={{ 
        opacity: 0,
        y: offset.y,
        x: offset.x 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0,
        x: 0,
        transition: {
          duration,
          delay: delay * 0.1,
          ease: "easeOut" 
        }
      }}
      viewport={{ once, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
} 