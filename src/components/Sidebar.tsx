'use client';

import { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline';

// Types
interface NavItem {
  id: string;
  label: string;
  icon: JSX.Element;
}

// Configuration
const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: <HomeIcon className="w-5 h-5" /> },
  { id: 'about', label: 'About', icon: <UserIcon className="w-5 h-5" /> },
  { id: 'skills', label: 'Skills', icon: <CodeBracketIcon className="w-5 h-5" /> },
  { id: 'projects', label: 'Projects', icon: <BriefcaseIcon className="w-5 h-5" /> },
  { id: 'interactions-demo', label: 'Playground', icon: <PuzzlePieceIcon className="w-5 h-5" /> },
  { id: 'contact', label: 'Contact', icon: <EnvelopeIcon className="w-5 h-5" /> }
];

// Reusable components with memoization
const SocialIcons = memo(({ className = "" }: { className?: string }) => {
  const socialLinks = [
    { href: "https://github.com/mehirk", icon: <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.582 9.5 21.27 9.5 21C9.5 20.757 9.492 20.114 9.489 19.313C6.73 19.914 6.139 17.967 6.139 17.967C5.685 16.913 5.029 16.6 5.029 16.6C4.121 16.009 5.098 16.022 5.098 16.022C6.101 16.094 6.639 17.034 6.639 17.034C7.562 18.531 9.046 18.016 9.52 17.757C9.611 17.14 9.875 16.726 10.166 16.491C7.911 16.254 5.544 15.417 5.544 11.612C5.544 10.521 5.951 9.635 6.659 8.947C6.554 8.695 6.196 7.694 6.759 6.273C6.759 6.273 7.629 6 9.5 7.251C10.313 7.007 11.188 6.885 12.062 6.881C12.938 6.885 13.813 7.007 14.625 7.251C16.49 6 17.36 6.273 17.36 6.273C17.923 7.694 17.565 8.695 17.46 8.947C18.169 9.635 18.576 10.521 18.576 11.612C18.576 15.429 16.203 16.251 13.94 16.482C14.306 16.771 14.626 17.346 14.626 18.228C14.626 19.522 14.614 20.671 14.614 21C14.614 21.274 14.771 21.589 15.282 21.487C19.253 20.161 22.115 16.416 22.115 12C22.115 6.477 17.638 2 12.115 2H12Z" fill="currentColor" /> },
    { href: "https://linkedin.com/in/mehirkumar", icon: <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor" /> }
  ];
  
  return (
    <>
      {socialLinks.map((social, index) => (
        <motion.a 
          key={index}
          href={social.href} 
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          className={`text-zinc-400 hover:text-white ${className}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {social.icon}
          </svg>
        </motion.a>
      ))}
    </>
  );
});

SocialIcons.displayName = 'SocialIcons';

// Logo component
const Logo = () => {
  return (
    <svg 
      width="80" 
      height="80" 
      viewBox="0 0 80 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className="mx-auto"
    >
      <rect width="80" height="80" rx="10" fill="url(#paint0_linear)" />
      <path d="M25 22L40 15L55 22V32C55 42.3 48.68 51.62 40 54C31.32 51.62 25 42.3 25 32V22Z" fill="url(#paint1_linear)" stroke="white" strokeWidth="1.5" />
      <path d="M32 35L38 41L48 31" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 60H60" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 67H52" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      <defs>
        <linearGradient id="paint0_linear" x1="0" y1="0" x2="80" y2="80" gradientUnits="userSpaceOnUse">
          <stop stopColor="#4F46E5" />
          <stop offset="1" stopColor="#7C3AED" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="25" y1="15" x2="55" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8B5CF6" stopOpacity="0.3" />
          <stop offset="1" stopColor="#4F46E5" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Desktop sidebar component
const DesktopSidebar = memo(({ activeSection, handleNavClick }: {
  activeSection: string;
  handleNavClick: (id: string) => void;
}) => {
  return (
    <div className="hidden md:flex w-64 fixed top-5 left-5 bottom-5 flex-col bg-black/90 backdrop-blur-md border border-zinc-800/50 rounded-2xl shadow-lg z-50 overflow-hidden">
      <div className="p-6 flex flex-col items-center border-b border-zinc-800/50">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-4"
        >
          <Logo />
        </motion.div>
        
        <h2 className="text-white font-semibold text-xl font-raleway">
          Mehir Kumar
        </h2>
        <p className="text-zinc-400 text-sm">
          Computer Science Student
        </p>
      </div>
      
      <nav className="px-3 py-4 flex-1 overflow-y-auto scrollbar-thin">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <Button
                variant="ghost"
                className={`w-full justify-start px-3 py-2 relative ${
                  activeSection === item.id 
                    ? 'text-white bg-zinc-800/80' 
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/30'
                }`}
                onClick={() => handleNavClick(item.id)}
              >
                <span className="mr-3">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
                
                {activeSection === item.id && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 rounded-r"></div>
                )}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-zinc-800/50 flex justify-around items-center">
        <SocialIcons />
        <a href="mailto:mehirk28@gmail.com" className="text-zinc-400 hover:text-white transition-colors">
          <EnvelopeIcon className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
});

DesktopSidebar.displayName = 'DesktopSidebar';

// Mobile navigation component
const MobileNavbar = memo(({ activeSection, handleNavClick }: {
  activeSection: string;
  handleNavClick: (id: string) => void;
}) => (
  <div className="md:hidden fixed bottom-5 left-4 right-4 bg-black/90 backdrop-blur-md border border-zinc-800/50 rounded-full flex justify-around items-center py-3 px-3 z-50 shadow-lg">
    {navItems.map((item) => (
      <button
        key={item.id}
        className={`p-2 rounded-full ${
          activeSection === item.id 
            ? 'text-white bg-zinc-800/80' 
            : 'text-zinc-400 hover:text-white'
        }`}
        onClick={() => handleNavClick(item.id)}
      >
        {item.icon}
      </button>
    ))}
  </div>
));

MobileNavbar.displayName = 'MobileNavbar';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Set up intersection observer for scroll spy
  useEffect(() => {
    const currentSectionRef = { current: 'home' };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (currentSectionRef.current !== sectionId) {
            currentSectionRef.current = sectionId;
            setActiveSection(sectionId);
          }
        }
      });
    };
    
    observerRef.current = new IntersectionObserver(
      observerCallback, 
      { root: null, rootMargin: '-10% 0px -70% 0px', threshold: 0.1 }
    );
    
    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observerRef.current?.observe(section);
    });
    
    return () => observerRef.current?.disconnect();
  }, []);
  
  const handleNavClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <DesktopSidebar 
        activeSection={activeSection}
        handleNavClick={handleNavClick}
      />
      <MobileNavbar 
        activeSection={activeSection}
        handleNavClick={handleNavClick}
      />
    </>
  );
}