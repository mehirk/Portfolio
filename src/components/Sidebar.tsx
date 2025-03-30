'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Home, 
  User, 
  Code, 
  FolderKanban, 
  MessageSquareQuote, 
  Mail, 
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial state
    checkMobile();
    
    // Add listener for window resize
    window.addEventListener('resize', checkMobile);
    
    // Handle scroll to set active section
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const navItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={20} /> },
    { id: 'projects', label: 'Projects', icon: <FolderKanban size={20} /> },
    { id: 'testimonials', label: 'Testimonials', icon: <MessageSquareQuote size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> }
  ];
  
  // Only show the sidebar on desktop, mobile will use a different navigation
  if (isMobile) {
    return <MobileNavigation navItems={navItems} activeSection={activeSection} />;
  }
  
  return (
    <div className="w-64 fixed top-0 left-0 h-full glass-effect border-r border-zinc-800/50 z-40 flex flex-col">
      {/* Logo Area */}
      <div className="p-6 border-b border-zinc-800/50">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold dark-text-gradient">Mehir.dev</span>
        </Link>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-6 px-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.id}>
              <Button
                variant={activeSection === item.id ? "secondary" : "ghost"}
                size="sm"
                className={cn(
                  "w-full justify-start font-normal",
                  activeSection === item.id 
                    ? "bg-zinc-800/80 text-white" 
                    : "text-zinc-200 hover:text-white hover:bg-zinc-800/60"
                )}
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Social Links */}
      <div className="p-6 border-t border-zinc-800/50">
        <div className="flex justify-center space-x-3">
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-zinc-800/80">
            <Github size={18} className="text-zinc-200 hover:text-white" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-zinc-800/80">
            <Linkedin size={18} className="text-zinc-200 hover:text-white" />
          </Button>
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-zinc-800/80">
            <Twitter size={18} className="text-zinc-200 hover:text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}

// Mobile navigation component
function MobileNavigation({ navItems, activeSection }) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 glass-effect border-t border-zinc-800/50">
      <div className="flex justify-around py-3">
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="icon"
            className={cn(
              "h-12 w-12 rounded-md", 
              activeSection === item.id 
                ? "bg-zinc-800/80 text-white" 
                : "text-zinc-200 hover:text-white"
            )}
            onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
          >
            {item.icon}
          </Button>
        ))}
      </div>
    </div>
  );
}