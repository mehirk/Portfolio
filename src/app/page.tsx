'use client';

import { useScroll, useTransform } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
// Split components into their own files
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

// Main Page Component
export default function Home() {
  const { scrollY } = useScroll();
  
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 pl-72 relative">
        <main className="min-h-screen bg-deep-dark">
          <div className="absolute inset-0 animated-gradient-bg color-shift-multi opacity-40"></div>
          <div className="absolute inset-0 star-bg opacity-30 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none"></div>
          <div className="relative z-10">
            <HeroSection scrollY={scrollY} />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <TestimonialsSection />
            <ContactSection />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
}