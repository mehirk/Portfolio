'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FadeInView } from '@/components/FadeInView';
import { AnimatedText } from '@/components/AnimatedText';
import { TiltCard } from '@/components/TiltCard';
import { MagneticButton } from '@/components/MagneticButton';
import { Button } from '@/components/ui/button';

// Handwriting text effect
const HandwritingText = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Check on resize
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Simplified version for mobile
  if (isMobile) {
    return (
      <div className="h-40 flex flex-col items-center justify-center">
        <div className="text-blue-400 text-xl font-medium mb-4">Handwriting Effect</div>
        <div className="text-sm text-zinc-500">Simplified for mobile performance</div>
      </div>
    );
  }
  
  // Full version for desktop
  return (
    <div className="h-40 flex flex-col items-center justify-center">
      <svg 
        width="300" 
        height="100" 
        viewBox="0 0 300 100" 
        className="overflow-visible"
      >
        <motion.path
          d="M10,50 C20,30 30,10 50,20 C70,30 80,60 100,70 S120,50 140,40 S160,30 180,40 S200,60 220,70 S240,50 260,40 S280,50 290,60"
          fill="transparent"
          stroke="url(#gradient)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ 
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
            repeatType: "reverse"
          }}
        />
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#818cf8" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="text-sm text-zinc-500 mt-4">Handwriting Effect</div>
    </div>
  );
};

// 3D Card Flip
const FlipCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Check on resize
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Use a simplified version for mobile with fewer animations
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div className="relative w-64 h-96 mx-auto perspective-1000">
      <motion.div 
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ 
          rotateY: isFlipped ? 180 : 0 
        }}
        transition={{ 
          duration: isMobile ? 0.4 : 0.6, 
          type: "spring", 
          stiffness: isMobile ? 300 : 200, 
          damping: isMobile ? 30 : 20 
        }}
        onClick={handleClick}
      >
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-blue-600/30 to-indigo-600/30 border border-white/10 p-6 flex flex-col items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 7L13 15L9 11L3 17M21 7H15M21 7V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Front Side</h3>
          <p className="text-sm text-white/70 text-center">Click to flip this card and see the other side.</p>
        </div>
        <div className="absolute w-full h-full backface-hidden rounded-xl bg-gradient-to-br from-purple-600/30 to-fuchsia-600/30 border border-white/10 p-6 flex flex-col items-center justify-center rotate-y-180">
          <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8L7 13H17L12 8Z" fill="white"/>
              <path d="M12 16L17 11H7L12 16Z" fill="white"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">Back Side</h3>
          <p className="text-sm text-white/70 text-center">This is the back of the card. Click to flip back.</p>
        </div>
      </motion.div>
    </div>
  );
};

export function InteractionDemo() {
  const [activeTab, setActiveTab] = useState<'tilt' | 'magnetic' | 'text' | 'handwriting' | 'flip'>('tilt');
  const [isMobile, setIsMobile] = useState(false);
  
  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Check on resize
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  return (
    <section id="interactions-demo" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* This view doesn't need to change for mobile */}
        <FadeInView>
          <div className="text-center">
            <AnimatedText
              text="Interaction Playground"
              className="text-3xl md:text-4xl font-bold mb-4 text-white justify-center"
              once={true}
            />
          </div>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-400/60 to-indigo-400/60 rounded-full mb-12"></div>
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
            Explore these interactive elements to experience some of the micro-interactions
            that make this portfolio stand out.
          </p>
        </FadeInView>
        
        {/* Use flex-wrap for better mobile layout */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          <Button 
            variant={activeTab === 'tilt' ? 'default' : 'outline'}
            onClick={() => setActiveTab('tilt')}
            className="text-sm"
          >
            Tilt Cards
          </Button>
          <Button 
            variant={activeTab === 'magnetic' ? 'default' : 'outline'}
            onClick={() => setActiveTab('magnetic')}
            className="text-sm"
          >
            Magnetic
          </Button>
          <Button 
            variant={activeTab === 'text' ? 'default' : 'outline'}
            onClick={() => setActiveTab('text')}
            className="text-sm"
          >
            Text
          </Button>
          <Button 
            variant={activeTab === 'handwriting' ? 'default' : 'outline'}
            onClick={() => setActiveTab('handwriting')}
            className="text-sm"
          >
            Handwriting
          </Button>
          <Button 
            variant={activeTab === 'flip' ? 'default' : 'outline'}
            onClick={() => setActiveTab('flip')}
            className="text-sm"
          >
            3D Flip
          </Button>
        </div>
        
        {activeTab === 'tilt' && (
          <FadeInView className="flex flex-wrap justify-center gap-8">
            {/* For mobile, we show fewer cards to improve performance */}
            <TiltCard className="w-72 h-72 bg-zinc-900/50 rounded-xl p-6 border border-white/5">
              <h3 className="text-xl font-semibold mb-2">Tilt Card</h3>
              <p className="text-zinc-400">Hover over this card to see the tilt effect with a subtle glare.</p>
            </TiltCard>
            
            {!isMobile && (
              <>
                <TiltCard 
                  className="w-72 h-72 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-xl p-6 border border-white/5"
                  tiltFactor={10}
                  glareOpacity={0.1}
                >
                  <h3 className="text-xl font-semibold mb-2">Stronger Tilt</h3>
                  <p className="text-zinc-400">This card has a stronger tilt factor and reduced glare.</p>
                </TiltCard>
                
                <TiltCard 
                  className="w-72 h-72 bg-zinc-900/50 rounded-xl p-6 border border-white/5"
                  glareEnabled={false}
                  perspective={2000}
                >
                  <h3 className="text-xl font-semibold mb-2">No Glare</h3>
                  <p className="text-zinc-400">This card has glare disabled and a different perspective.</p>
                </TiltCard>
              </>
            )}
          </FadeInView>
        )}
        
        {activeTab === 'magnetic' && (
          <FadeInView className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center gap-8">
              <MagneticButton>
                <div className="px-8 py-4 rounded-xl bg-blue-600 text-white font-medium">
                  Magnetic Button
                </div>
              </MagneticButton>
              
              {/* Show fewer elements on mobile */}
              {!isMobile && (
                <>
                  <MagneticButton strength={40} distance={300}>
                    <div className="px-8 py-4 rounded-xl bg-purple-600 text-white font-medium">
                      Strong Magnetic
                    </div>
                  </MagneticButton>
                  
                  <MagneticButton strength={15} scale={1.1}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center bg-emerald-600">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </div>
                  </MagneticButton>
                </>
              )}
            </div>
          </FadeInView>
        )}
        
        {activeTab === 'text' && (
          <FadeInView className="flex flex-col items-center gap-8">
            <AnimatedText
              text="Animated Text Reveal"
              className="text-2xl font-bold"
              once={isMobile} // On mobile, only animate once to save performance
            />
            
            {/* Show fewer elements on mobile */}
            {!isMobile && (
              <div className="flex flex-col gap-4 max-w-md text-center">
                <AnimatedText
                  text="Different delay values"
                  className="text-xl"
                  delay={5}
                  once={false}
                />
                
                <AnimatedText
                  text="Create staggered animations"
                  className="text-md text-zinc-400"
                  delay={10}
                  once={false}
                />
                
                <p className="text-zinc-500 mt-4">
                  Scroll in and out of view to see the animations replay.
                </p>
              </div>
            )}
          </FadeInView>
        )}

        {activeTab === 'handwriting' && (
          <FadeInView className="flex flex-col items-center gap-8">
            <HandwritingText />
            <p className="text-zinc-500 mt-4">
              {isMobile 
                ? "Simplified for better mobile performance."
                : "Text animation that simulates handwriting."
              }
            </p>
          </FadeInView>
        )}

        {activeTab === 'flip' && (
          <FadeInView className="flex flex-col items-center gap-8">
            <FlipCard />
            <p className="text-zinc-500 mt-4">
              Click the card to see the 3D flip animation.
            </p>
          </FadeInView>
        )}
      </div>
    </section>
  );
}