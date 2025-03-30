'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollY: MotionValue<number>;
}

export function HeroSection({ scrollY }: HeroSectionProps) {
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.9]);
  
  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleScrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const handleScrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <section id="home" className="relative h-screen flex flex-col items-center justify-center">
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          rotate: [0, 360],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ 
          duration: 30, 
          repeat: Infinity,
          ease: "linear" 
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"
      />
      <motion.div 
        animate={{ 
          rotate: [360, 0],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"
      />
      
      <div className="container px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.h1 
            style={{ opacity, scale }}
            className="text-5xl md:text-7xl font-bold dark-text-gradient mb-6"
          >
            Mehir Portfolio
          </motion.h1>
          <p className="text-xl text-zinc-200 mb-10 leading-relaxed">
            Creating exceptional digital experiences with elegance and precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-zinc-800 hover:bg-zinc-700 text-white"
                onClick={handleScrollToProjects}
              >
                View Projects
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-zinc-600 hover:bg-zinc-800/50"
                onClick={handleScrollToContact}
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={handleScrollToAbout}
      >
        <div className="h-14 w-8 rounded-full border-2 border-zinc-500 flex justify-center pt-2 cursor-pointer">
          <div className="h-2 w-1 rounded-full bg-zinc-300 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
} 