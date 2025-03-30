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
        <main className="min-h-screen dark-gradient">
          <HeroSection scrollY={scrollY} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}