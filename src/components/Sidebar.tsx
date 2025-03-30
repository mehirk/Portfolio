'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  Cog6ToothIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { useState, useEffect, useRef, useMemo, memo, ReactElement } from 'react';

// Define types for the component props
interface NavItem {
  id: string;
  label: string;
  icon: ReactElement;
}

interface DesktopSidebarProps {
  activeSection: string;
  searchValue: string;
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  navItems: NavItem[];
  handleNavClick: (id: string) => void;
}

interface MobileNavbarProps {
  activeSection: string;
  navItems: NavItem[];
  handleNavClick: (id: string) => void;
}

// Memoized sidebar components
const MemoizedDesktopSidebar = memo(({ activeSection, searchValue, handleSearch, navItems, handleNavClick }: DesktopSidebarProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    className="hidden md:flex w-64 fixed top-5 left-5 bottom-5 flex-col bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-2xl shadow-xl z-50"
  >
    {/* Profile Section */}
    <motion.div 
      className="p-6 flex flex-col items-center border-b border-zinc-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <Avatar className="w-20 h-20 mb-3 border-2 border-zinc-700">
        <AvatarFallback className="bg-zinc-800 text-white text-2xl">M</AvatarFallback>
      </Avatar>
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-white font-semibold text-lg"
      >
        Mehir
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-zinc-400 text-sm"
      >
        @mehirdev
      </motion.p>
    </motion.div>
    
    {/* Search */}
    <motion.div 
      className="px-4 py-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className="relative">
        <MagnifyingGlassIcon className="w-4 h-4 absolute top-3 left-3 text-zinc-400" />
        <Input
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearch}
          className="bg-zinc-800/50 border-zinc-700 pl-9 text-white placeholder:text-zinc-500 text-sm focus:border-zinc-600 focus:ring-0"
        />
      </div>
    </motion.div>
    
    {/* Navigation */}
    <nav className="px-3 py-4 flex-1 overflow-y-auto">
      <ul className="space-y-2">
        {navItems.map((item, i) => (
          <motion.li 
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + (i * 0.1), duration: 0.3 }}
          >
            <Button
              variant="ghost"
              className={`w-full justify-start px-3 relative ${
                activeSection === item.id 
                  ? 'text-white bg-zinc-800/80' 
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
              
              {activeSection === item.id && (
                <motion.div 
                  layoutId="activeSection"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-r"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </Button>
          </motion.li>
        ))}
      </ul>
    </nav>
    
    {/* Footer */}
    <motion.div 
      className="p-4 border-t border-zinc-800 flex justify-around"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5 }}
    >
      <motion.a 
        href="https://github.com" 
        target="_blank"
        whileHover={{ y: -3 }}
        className="text-zinc-400 hover:text-white"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.582 9.5 21.27 9.5 21C9.5 20.757 9.492 20.114 9.489 19.313C6.73 19.914 6.139 17.967 6.139 17.967C5.685 16.913 5.029 16.6 5.029 16.6C4.121 16.009 5.098 16.022 5.098 16.022C6.101 16.094 6.639 17.034 6.639 17.034C7.562 18.531 9.046 18.016 9.52 17.757C9.611 17.14 9.875 16.726 10.166 16.491C7.911 16.254 5.544 15.417 5.544 11.612C5.544 10.521 5.951 9.635 6.659 8.947C6.554 8.695 6.196 7.694 6.759 6.273C6.759 6.273 7.629 6 9.5 7.251C10.313 7.007 11.188 6.885 12.062 6.881C12.938 6.885 13.813 7.007 14.625 7.251C16.49 6 17.36 6.273 17.36 6.273C17.923 7.694 17.565 8.695 17.46 8.947C18.169 9.635 18.576 10.521 18.576 11.612C18.576 15.429 16.203 16.251 13.94 16.482C14.306 16.771 14.626 17.346 14.626 18.228C14.626 19.522 14.614 20.671 14.614 21C14.614 21.274 14.771 21.589 15.282 21.487C19.253 20.161 22.115 16.416 22.115 12C22.115 6.477 17.638 2 12.115 2H12Z" fill="currentColor"/>
        </svg>
      </motion.a>
      <motion.a 
        href="https://linkedin.com" 
        target="_blank"
        whileHover={{ y: -3 }}
        className="text-zinc-400 hover:text-white"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/>
        </svg>
      </motion.a>
      <motion.a 
        href="https://twitter.com" 
        target="_blank"
        whileHover={{ y: -3 }}
        className="text-zinc-400 hover:text-white"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.633 7.997C19.633 8.177 19.633 8.358 19.633 8.538C19.633 13.938 15.663 20.068 8.173 20.068C5.883 20.068 3.763 19.318 2 18.067C2.333 18.107 2.672 18.127 3.016 18.127C4.933 18.127 6.682 17.407 8.067 16.207C6.271 16.167 4.76 14.987 4.229 13.327C4.489 13.377 4.759 13.407 5.039 13.407C5.439 13.407 5.83 13.347 6.196 13.237C4.326 12.847 2.927 11.187 2.927 9.207V9.147C3.492 9.467 4.133 9.657 4.816 9.687C3.723 8.967 3.015 7.716 3.015 6.287C3.015 5.547 3.204 4.857 3.546 4.257C5.565 6.727 8.525 8.357 11.833 8.547C11.757 8.227 11.722 7.887 11.722 7.547C11.722 5.267 13.569 3.417 15.847 3.417C17.031 3.417 18.088 3.937 18.819 4.787C19.722 4.587 20.579 4.237 21.349 3.757C21.028 4.747 20.363 5.547 19.498 6.047C20.348 5.947 21.158 5.717 21.898 5.377C21.349 6.187 20.668 6.907 19.867 7.487C19.633 7.657 19.633 7.827 19.633 7.997Z" fill="currentColor"/>
        </svg>
      </motion.a>
      <motion.button 
        whileHover={{ rotate: 180 }}
        transition={{ duration: 0.5 }}
        className="text-zinc-400 hover:text-white"
      >
        <Cog6ToothIcon className="w-5 h-5" />
      </motion.button>
    </motion.div>
  </motion.div>
));

const MemoizedMobileNavbar = memo(({ activeSection, navItems, handleNavClick }: MobileNavbarProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="md:hidden fixed bottom-5 left-4 right-4 bg-zinc-900/90 backdrop-blur-md border border-zinc-800 rounded-full flex justify-around items-center py-3 px-3 z-50 shadow-xl"
  >
    {navItems.map((item, i) => (
      <motion.button
        key={item.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 + (i * 0.1), duration: 0.3 }}
        className={`p-2 rounded-full ${
          activeSection === item.id 
            ? 'text-emerald-400 bg-zinc-800/80' 
            : 'text-zinc-400'
        }`}
        onClick={() => handleNavClick(item.id)}
        whileTap={{ scale: 0.9 }}
      >
        {item.icon}
        {activeSection === item.id && (
          <motion.div 
            layoutId="activeMobileSection"
            className="absolute inset-0 rounded-full bg-zinc-800 -z-10"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
      </motion.button>
    ))}
  </motion.div>
));

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchValue, setSearchValue] = useState('');
  const [isMobile, setIsMobile] = useState(false);
  
  // Create a ref to store the observer
  const observerRef = useRef<IntersectionObserver | null>(null);
  const currentSectionRef = useRef('home');
  
  // Check if we're on a mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Set up intersection observer for scroll spy
    const sections = document.querySelectorAll('section[id]');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Only update state if the section actually changed
          if (currentSectionRef.current !== entry.target.id) {
            currentSectionRef.current = entry.target.id;
            // Use requestAnimationFrame to limit state updates
            requestAnimationFrame(() => {
              setActiveSection(entry.target.id);
            });
          }
        }
      });
    };
    
    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);
    
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });
    
    // Clean up
    return () => {
      window.removeEventListener('resize', checkIfMobile);
      if (observerRef.current) {
        sections.forEach((section) => {
          observerRef.current?.unobserve(section);
        });
      }
    };
  }, []);

  // Navigation items
  const navItems = useMemo<NavItem[]>(() => [
    { id: 'home', label: 'Home', icon: <HomeIcon className="w-5 h-5" /> },
    { id: 'about', label: 'About', icon: <UserIcon className="w-5 h-5" /> },
    { id: 'skills', label: 'Skills', icon: <CodeBracketIcon className="w-5 h-5" /> },
    { id: 'projects', label: 'Projects', icon: <BriefcaseIcon className="w-5 h-5" /> },
    { id: 'testimonials', label: 'Testimonials', icon: <ChatBubbleLeftRightIcon className="w-5 h-5" /> },
    { id: 'contact', label: 'Contact', icon: <EnvelopeIcon className="w-5 h-5" /> },
  ], []);

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    
    // Filter navigation based on search
    if (e.target.value) {
      const targetSection = navItems.find(item => 
        item.label.toLowerCase().includes(e.target.value.toLowerCase())
      );
      
      if (targetSection) {
        document.getElementById(targetSection.id)?.scrollIntoView({ behavior: 'smooth' });
        setSearchValue('');
      }
    }
  };

  // Handle navigation click
  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <MemoizedDesktopSidebar 
        activeSection={activeSection}
        searchValue={searchValue}
        handleSearch={handleSearch}
        navItems={navItems}
        handleNavClick={handleNavClick}
      />
      {isMobile && 
        <MemoizedMobileNavbar 
          activeSection={activeSection}
          navItems={navItems}
          handleNavClick={handleNavClick}
        />
      }
    </>
  );
}