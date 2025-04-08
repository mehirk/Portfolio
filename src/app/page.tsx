'use client';

import { useScroll, LazyMotion, domAnimation, motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Suspense, useRef, useState, useEffect } from 'react';

// Dynamically import components with optimized loading
const Sidebar = dynamic(() => import('@/components/Sidebar'), { ssr: false });
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false });
const HeroSection = dynamic(() => import('@/components/sections/HeroSection').then(mod => ({ default: mod.HeroSection })), { ssr: false });
const AboutSection = dynamic(() => import('@/components/sections/AboutSection').then(mod => ({ default: mod.AboutSection })), { ssr: false });
const SkillsSection = dynamic(() => import('@/components/sections/SkillsSection').then(mod => ({ default: mod.SkillsSection })), { ssr: false });
const ProjectsSection = dynamic(() => import('@/components/sections/ProjectsSection').then(mod => ({ default: mod.ProjectsSection })), { ssr: false });
const ContactSection = dynamic(() => import('@/components/sections/ContactSection').then(mod => ({ default: mod.ContactSection })), { ssr: false });

// Custom cursor component
const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      const target = e.target as HTMLElement;
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null || 
        target.closest('a') !== null
      );
    };

    window.addEventListener('mousemove', mouseMove);
    return () => window.removeEventListener('mousemove', mouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full mix-blend-difference pointer-events-none z-50"
      style={{ 
        backgroundColor: 'rgb(var(--accent-purple))',
        opacity: 0.7
      }}
      animate={{
        x: mousePosition.x - 12,
        y: mousePosition.y - 12,
        scale: isPointer ? 1.5 : 1,
      }}
      transition={{
        type: "spring",
        mass: 0.1,
        stiffness: 800,
        damping: 20,
      }}
    />
  );
};

// Floating particles effect
const FloatingElements = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: Math.random() * 10 + 5,
            height: Math.random() * 10 + 5,
            backgroundColor: `rgba(var(--accent-${
              ['purple', 'blue', 'cyan', 'teal'][Math.floor(Math.random() * 4)]
            }), ${Math.random() * 0.2 + 0.1})`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50],
            x: [0, Math.random() * 60 - 30],
            rotate: [0, Math.random() * 360],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Loading fallback component
const LoadingSkeleton = () => (
  <div className="animate-pulse flex flex-col w-full gap-10 p-8">
    <div className="h-96 bg-zinc-800/20 rounded-2xl"></div>
    <div className="h-80 bg-zinc-800/20 rounded-2xl"></div>
    <div className="h-80 bg-zinc-800/20 rounded-2xl"></div>
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
        <div className="w-64 md:w-72 bg-zinc-950/90 shadow-2xl"></div>
        <div className="flex-1 pl-64 md:pl-72 relative">
          <main className="min-h-screen">
            <LoadingSkeleton />
          </main>
        </div>
      </div>
    );
  }
  
  return (
    <LazyMotion features={domAnimation}>
      <div className="flex min-h-screen">
        {/* Custom cursor effect */}
        <CustomCursor />
        
        {/* Floating elements */}
        <FloatingElements />
        
        <Suspense fallback={<div className="w-64 md:w-72 bg-zinc-950/90 shadow-xl"></div>}>
          <Sidebar />
        </Suspense>
        <div className="flex-1 pl-64 md:pl-72 relative">
          <main className="min-h-screen" ref={containerRef}>
            {/* Content */}
            <div className="relative z-10">
              <Suspense fallback={<LoadingSkeleton />}>
                <HeroSection scrollY={scrollMotionValue} />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
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