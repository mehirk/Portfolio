'use client';

import { useScroll, useTransform, LazyMotion, domAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';
import { Suspense, useRef } from 'react';

// Dynamically import components to avoid hydration issues
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
  const { scrollY } = useScroll();
  const containerRef = useRef<HTMLDivElement>(null);
  
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
                <HeroSection scrollY={scrollY} />
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