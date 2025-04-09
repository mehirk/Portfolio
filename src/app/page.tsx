"use client";

import { useScroll, LazyMotion, domAnimation } from "framer-motion";
import { useRef } from "react";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

import dynamic from "next/dynamic";
const InteractionDemo = dynamic(() =>
  import("@/components/sections/InteractionDemo").then(
    (mod) => mod.InteractionDemo
  )
);

// Main Page Component
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen">
        <Sidebar />

        <main className="min-h-screen md:pl-80" ref={containerRef}>
          <div className="relative z-10 px-4 sm:px-6 md:px-8">
            <HeroSection scrollY={scrollY} />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <InteractionDemo />
            <ContactSection />
            <Footer />
          </div>
        </main>
      </div>
    </LazyMotion>
  );
}
