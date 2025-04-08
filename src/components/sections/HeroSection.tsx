'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AnimatedText } from '@/components/AnimatedText';
import { HandwritingText } from '@/components/HandwritingText';

interface HeroSectionProps {
  scrollY: number | { get: () => number; onChange: any };
}

export function HeroSection({ scrollY }: HeroSectionProps) {
  // Get scroll value depending on the type passed
  const getScrollValue = () => {
    if (typeof scrollY === 'number') {
      return scrollY;
    }
    return scrollY.get();
  };
  
  // Calculate opacity and scale based on scroll position
  const calculateOpacity = () => {
    const scrollValue = getScrollValue();
    return Math.max(0, 1 - scrollValue / 200);
  };
  
  const calculateScale = () => {
    const scrollValue = getScrollValue();
    return Math.max(0.9, 1 - (scrollValue / 200) * 0.1);
  };
  
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
      <div className="container px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div 
            style={{ 
              opacity: calculateOpacity(), 
              scale: calculateScale(), 
              willChange: "transform, opacity" 
            }}
            className="mb-6"
          >
            <AnimatedText
              text="Mehir Kumar"
              className="text-5xl md:text-7xl font-bold mb-2 text-white justify-center"
              once={true}
            />
            <div className="h-1 w-32 mx-auto bg-gradient-to-r from-indigo-400/70 via-blue-400/70 to-cyan-400/70 rounded-full glow-effect"></div>
          </motion.div>
          
          <div className="text-xl text-zinc-200 mb-10 leading-relaxed text-readability-shadow text-center">
            <HandwritingText
              text="  Computer Science Student at Acadia University!"
              speed={50}
              delay={1000}
            />
          </div>
          
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
        className="absolute left-10 top-40 w-4 h-4 rounded-full bg-white/10 float-animation"
        style={{ animationDelay: '0s', willChange: "transform" }}
      />
      <motion.div
        className="absolute right-20 top-60 w-3 h-3 rounded-full bg-white/10 float-animation"
        style={{ animationDelay: '1s', willChange: "transform" }}
      />
      <motion.div
        className="absolute left-1/4 bottom-40 w-5 h-5 rounded-full bg-white/10 float-animation"
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
          <div className="h-2 w-1 rounded-full bg-white/70 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}
