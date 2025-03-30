'use client';

<<<<<<< HEAD
import { LazyMotion, domAnimation } from 'framer-motion';
=======
import { useScroll, LazyMotion, domAnimation } from 'framer-motion';
>>>>>>> b603b3d7bcfea45d0ff809368faa0154a02447f6
import dynamic from 'next/dynamic';
import { Suspense, useRef, useState, useEffect } from 'react';

// Dynamically import components with optimized loading
const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const HeroSection = dynamic(() => import('@/components/sections/HeroSection').then(mod => ({ default: mod.HeroSection })), { ssr: false });
const AboutSection = dynamic(() => import('@/components/sections/AboutSection').then(mod => ({ default: mod.AboutSection })), { ssr: false });
const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection').then(mod => ({ default: mod.SkillsSection })), { ssr: false });
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection').then(mod => ({ default: mod.ProjectsSection })), { ssr: false });
const TestimonialsSection = dynamic(() => import('@/components/sections/TestimonialsSection').then(mod => ({ default: mod.TestimonialsSection })), { ssr: false });
const ContactSection = dynamic(() => import('@/components/sections/ContactSection').then(mod => ({ default: mod.ContactSection })), { ssr: false });

// Loading fallback component
const LoadingSkeleton = () => (
  <div className="animate-pulse flex flex-col w-full gap-8 p-8">
    <div className="h-96 bg-zinc-800/30 rounded-lg"></div>
    <div className="h-80 bg-zinc-800/30 rounded-lg"></div>
    <div className="h-80 bg-zinc-800/30 rounded-lg"></div>
  </div>
);

// Main Page Component
export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Set up scroll handler after component mounts
  useEffect(() => {
    setIsMounted(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Create a simple MotionValue-like object
  const scrollMotionValue = {
    get: () => scrollY,
    onChange: () => undefined  // Simple mock to match the interface
  };
  
  // Avoid hydration issues by only rendering motion components on client
  if (!isMounted) {
    return (
      <div className="flex min-h-screen">
        <div className="w-72 bg-zinc-900"></div>
        <div className="flex-1 pl-72 relative">
          <main className="min-h-screen bg-deep-dark">
            <LoadingSkeleton />
          </main>
        </div>
      </div>
    );
  }
  
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex min-h-screen">
        <Suspense fallback={<div className="w-72 bg-zinc-900"></div>}>
          <Sidebar />
        </Suspense>
        <div className="flex-1 pl-72 relative">
          <main className="min-h-screen bg-deep-dark" ref={containerRef}>
            <div className="absolute inset-0 animated-gradient-bg color-shift-multi opacity-40"></div>
            <div className="absolute inset-0 star-bg opacity-30 pointer-events-none"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none"></div>
            <div className="relative z-10">
              <Suspense fallback={<LoadingSkeleton />}>
                <HeroSection scrollY={scrollMotionValue} />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <TestimonialsSection />
                <ContactSection />
                <Footer />
              </Suspense>
            </div>
          </main>
        </div>
      </div>
    </LazyMotion>
  );
}