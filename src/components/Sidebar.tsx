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
  Twitter,
  Search,
  PanelLeft,
  Cog
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
    { id: 'projects', label: 'Projects', icon: <FolderKanban size={18} /> },
    { id: 'testimonials', label: 'Testimonials', icon: <MessageSquareQuote size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={18} /> }
  ];
  
  // Only show the sidebar on desktop, mobile will use a different navigation
  if (isMobile) {
    return <MobileNavigation navItems={navItems} activeSection={activeSection} />;
  }
  
  return (
    <div className="fixed top-0 left-0 h-screen flex items-start p-6 z-40">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-60 h-[calc(100vh-3rem)] bg-zinc-900/90 backdrop-blur-md rounded-xl overflow-hidden flex flex-col border border-zinc-800/50 shadow-xl"
      >
        {/* Profile Area */}
        <div className="p-6 flex flex-col items-center text-center">
          <Avatar className="h-20 w-20 mb-4 border-2 border-zinc-700">
            <AvatarFallback className="bg-zinc-800 text-zinc-200">M</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h2 className="text-xl font-bold dark-text-gradient">Mehir</h2>
            <p className="text-sm text-zinc-400">@mehirdev</p>
          </div>
        </div>
        
        <Separator className="bg-zinc-800/70" />
        
        {/* Search */}
        <div className="px-3 py-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="w-full bg-zinc-800/50 border border-zinc-700/50 rounded-md py-2 pl-9 pr-4 text-sm text-zinc-300 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-zinc-600"
            />
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={cn(
                "w-full justify-start mb-1 font-normal text-sm",
                activeSection === item.id 
                  ? "bg-zinc-800/80 text-white" 
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800/40"
              )}
              onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Button>
          ))}
        </nav>
        
        <Separator className="bg-zinc-800/70" />
        
        {/* Footer */}
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-800/60">
                <Github size={16} className="text-zinc-400 hover:text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-800/60">
                <Twitter size={16} className="text-zinc-400 hover:text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-800/60">
                <Linkedin size={16} className="text-zinc-400 hover:text-white" />
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-zinc-800/60">
              <Cog size={16} className="text-zinc-400 hover:text-white" />
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Mobile navigation component
function MobileNavigation({ navItems, activeSection }) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex bg-zinc-900/90 backdrop-blur-md rounded-full border border-zinc-800/50 shadow-xl py-2 px-1"
      >
        {navItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            size="icon"
            className={cn(
              "h-10 w-10 rounded-full mx-1", 
              activeSection === item.id 
                ? "bg-zinc-800/80 text-white" 
                : "text-zinc-400 hover:text-white"
            )}
            onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
          >
            {item.icon}
          </Button>
        ))}
      </motion.div>
    </div>
  );
}