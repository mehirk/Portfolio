'use client';

import { useScroll, LazyMotion, domAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Suspense, useRef, useState, useEffect } from 'react';

// Dynamically import components with optimized loading
const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const HeroSection = dynamic(() => import('@/components/sections/HeroSection').then(mod => ({ default: mod.HeroSection })), { 
  ssr: false,
  loading: () => <LoadingSkeleton />
});
const AboutSection = dynamic(() => import('@/components/sections/AboutSection').then(mod => ({ default: mod.AboutSection })), { 
  ssr: false 
});
const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection').then(mod => ({ default: mod.SkillsSection })), { 
  ssr: false 
});
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection').then(mod => ({ default: mod.ProjectsSection })), { 
  ssr: false 
});
const ContactSection = dynamic(() => import('@/components/sections/ContactSection').then(mod => ({ default: mod.ContactSection })), { 
  ssr: false 
});
// Interactive demo - conditionally loaded on mobile for performance
const InteractionDemo = dynamic(() => import('@/components/sections/InteractionDemo').then(mod => ({ default: mod.InteractionDemo })), { 
  ssr: false,
  loading: () => <div className="py-20 md:py-32"><div className="container mx-auto px-4 text-center text-zinc-500">Loading interactive components...</div></div>
});

// Loading fallback component
const LoadingSkeleton = () => (
  <div className="animate-pulse flex flex-col w-full gap-10 p-4 sm:p-8">
    <div className="h-64 sm:h-96 bg-zinc-800/20 rounded-2xl"></div>
    <div className="h-56 sm:h-80 bg-zinc-800/20 rounded-2xl"></div>
    <div className="h-56 sm:h-80 bg-zinc-800/20 rounded-2xl"></div>
  </div>
);

// Main Page Component
export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [shouldLoadInteractive, setShouldLoadInteractive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Set mounted state after component mounts to avoid hydration issues
  useEffect(() => {
    setIsMounted(true);
    
    // Detect if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkMobile();
    
    // Check on resize
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Delayed loading of interactive components on mobile
  // This ensures the core content loads first
  useEffect(() => {
    if (isMobile) {
      // On mobile, delay loading interactive components
      const timer = setTimeout(() => {
        setShouldLoadInteractive(true);
      }, 2000); // 2-second delay
      
      return () => clearTimeout(timer);
    } else {
      // On desktop, load immediately
      setShouldLoadInteractive(true);
    }
  }, [isMobile]);
  
  // Avoid hydration issues by only rendering motion components on client
  if (!isMounted) {
    return (
      <div className="min-h-screen">
        {/* Mobile view doesn't show sidebar in skeleton */}
        <div className="hidden md:block w-64 md:w-72 bg-zinc-950/90 shadow-2xl fixed top-5 left-5 bottom-5 rounded-2xl"></div>
        <main className="min-h-screen md:pl-80">
          <LoadingSkeleton />
        </main>
      </div>
    );
  }
  
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen">
        <Suspense fallback={<div className="hidden md:block w-64 md:w-72 bg-zinc-950/90 shadow-xl fixed top-5 left-5 bottom-5 rounded-2xl"></div>}>
          <Sidebar />
        </Suspense>
        
        {/* Main content - uses padding only on desktop */}
        <main className="min-h-screen md:pl-80" ref={containerRef}>
          <div className="relative z-10 px-4 sm:px-6 md:px-8">
            <Suspense fallback={<LoadingSkeleton />}>
              <HeroSection scrollY={scrollY} />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              {/* Only render interactive demo if it should be loaded */}
              {shouldLoadInteractive && (
                <InteractionDemo />
              )}
              <ContactSection />
              <Footer />
            </Suspense>
          </div>
        </main>
      </div>
    </LazyMotion>
  );
}