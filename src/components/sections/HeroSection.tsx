'use client';

import { motion, MotionValue, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollY: MotionValue<number>;
}

// Animation variants for background elements
const backgroundVariants = {
  animate1: {
    rotate: [0, 360],
    opacity: [0.05, 0.1, 0.05]
  },
  animate2: {
    rotate: [360, 0],
    opacity: [0.05, 0.1, 0.05]
  },
  animate3: {
    rotate: [180, 540],
    opacity: [0.05, 0.08, 0.05]
  }
};

// Animation transitions
const transitions = {
  slow: { duration: 30, repeat: Infinity, ease: "linear" },
  medium: { duration: 25, repeat: Infinity, ease: "linear" },
  fast: { duration: 20, repeat: Infinity, ease: "linear" }
};

export function HeroSection({ scrollY }: HeroSectionProps) {
  // Transform values for scroll effects
  const opacity = useTransform(scrollY, [0, 200], [1, 0], {
    ease: [0.33, 1, 0.68, 1]
  });
  
  const scale = useTransform(scrollY, [0, 200], [1, 0.9], {
    ease: [0.33, 1, 0.68, 1]
  });
  
  // Smooth scroll handlers
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
    <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <motion.div 
        animate={backgroundVariants.animate1}
        transition={transitions.slow}
        style={{ willChange: "transform" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"
      />
      <motion.div 
        animate={backgroundVariants.animate2}
        transition={transitions.medium}
        style={{ willChange: "transform" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"
      />
      <motion.div 
        animate={backgroundVariants.animate3}
        transition={transitions.fast}
        style={{ willChange: "transform" }}
        className="absolute top-1/3 right-1/3 w-72 h-72 bg-cyan-500/5 rounded-full filter blur-3xl"
      />
      
      <div className="container px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div 
            style={{ opacity, scale, willChange: "transform, opacity" }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-2">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-blue-400 to-cyan-300 animated-gradient-bg text-readability-shadow">
                Mehir Portfolio
              </span>
            </h1>
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-indigo-400/70 via-blue-400/70 to-cyan-400/70 rounded-full glow-effect"></div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
            className="text-xl text-zinc-200 mb-10 leading-relaxed text-readability-shadow"
          >
            Creating exceptional digital experiences with elegance and precision.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "tween", duration: 0.15 }}
              style={{ willChange: "transform" }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-indigo-600/80 to-blue-600/80 hover:from-indigo-700/90 hover:to-blue-700/90 text-white sleek-shadow glossy-effect"
                onClick={handleScrollToProjects}
              >
                View Projects
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "tween", duration: 0.15 }}
              style={{ willChange: "transform" }}
            >
              <Button 
                variant="outline" 
                size="lg" 
                className="text-white border-white/10 hover:bg-white/5 glass-card sleek-shadow"
                onClick={handleScrollToContact}
              >
                Contact Me
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      {/* Floating decorative elements */}
      <motion.div
        className="absolute left-10 top-40 w-4 h-4 rounded-full bg-purple-500/30 float-animation"
        style={{ animationDelay: '0s', willChange: "transform" }}
      />
      <motion.div
        className="absolute right-20 top-60 w-3 h-3 rounded-full bg-blue-500/30 float-animation"
        style={{ animationDelay: '1s', willChange: "transform" }}
      />
      <motion.div
        className="absolute left-1/4 bottom-40 w-5 h-5 rounded-full bg-cyan-500/30 float-animation"
        style={{ animationDelay: '2s', willChange: "transform" }}
      />
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7, y: [0, 10, 0] }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }}
        style={{ willChange: "transform, opacity" }}
        onClick={handleScrollToAbout}
      >
        <div className="h-14 w-8 rounded-full border border-white/10 flex justify-center pt-2 cursor-pointer glass-effect sleek-shadow">
          <div className="h-2 w-1 rounded-full bg-gradient-to-b from-indigo-400/80 to-blue-500/80 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
} 