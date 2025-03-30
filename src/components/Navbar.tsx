'use client';

import { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Navigation items configuration
const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' }
];

// Memoized navigation components for better performance
const NavLinks = memo(({ isMobile, onNavigate }: { 
  isMobile: boolean; 
  onNavigate?: () => void;
}) => {
  const baseClasses = isMobile 
    ? "flex flex-col space-y-4 px-4" 
    : "hidden md:flex items-center space-x-8";
  
  const linkClasses = isMobile
    ? "text-zinc-200 hover:text-white py-2 text-sm transition-colors"
    : "text-zinc-200 hover:text-white text-sm transition-colors";
    
  return (
    <nav className={baseClasses}>
      {navItems.map((item) => (
        <Link 
          key={item.href}
          href={item.href} 
          className={linkClasses}
          onClick={onNavigate}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
});

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        isScrolled ? "glass-effect border-b border-zinc-800/50" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold dark-text-gradient">Mehir.dev</span>
        </Link>
        
        <NavLinks isMobile={false} />
        
        <Button 
          variant="ghost" 
          className="md:hidden text-white hover:bg-zinc-800/50"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
        
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 glass-effect border-b border-zinc-800/50 py-4 md:hidden"
            >
              <NavLinks isMobile={true} onNavigate={closeMenu} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
} 