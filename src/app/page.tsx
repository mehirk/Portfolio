'use client';

import { useScroll, LazyMotion, domAnimation } from 'framer-motion';
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
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
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
        <Suspense fallback={<div className="w-64 md:w-72 bg-zinc-950/90 shadow-xl"></div>}>
          <Sidebar />
        </Suspense>
        <div className="flex-1 pl-64 md:pl-72 relative">
          <main className="min-h-screen" ref={containerRef}>
            {/* Background effects */}
            <div className="fixed inset-0 animated-gradient-bg color-shift-elegant opacity-20 pointer-events-none"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <Suspense fallback={<LoadingSkeleton />}>
                <HeroSection scrollY={scrollY} />
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