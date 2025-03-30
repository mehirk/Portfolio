'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
      isScrolled ? "glass-effect border-b border-zinc-800/50" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold dark-text-gradient">Mehir.dev</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#home" className="text-zinc-200 hover:text-white text-sm transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-zinc-200 hover:text-white text-sm transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-zinc-200 hover:text-white text-sm transition-colors">
            Skills
          </Link>
          <Link href="#projects" className="text-zinc-200 hover:text-white text-sm transition-colors">
            Projects
          </Link>
          <Link href="#testimonials" className="text-zinc-200 hover:text-white text-sm transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="text-zinc-200 hover:text-white text-sm transition-colors">
            Contact
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <Button 
          variant="ghost" 
          className="md:hidden text-white hover:bg-zinc-800/50"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </Button>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-effect border-b border-zinc-800/50 py-4 md:hidden"
          >
            <nav className="flex flex-col space-y-4 px-4">
              <Link 
                href="#home" 
                className="text-zinc-200 hover:text-white py-2 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="#about" 
                className="text-zinc-200 hover:text-white py-2 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#skills" 
                className="text-zinc-200 hover:text-white py-2 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </Link>
              <Link 
                href="#projects" 
                className="text-zinc-200 hover:text-white py-2 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="#testimonials" 
                className="text-zinc-200 hover:text-white py-2 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="#contact" 
                className="text-zinc-200 hover:text-white py-2 text-sm transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  );
} 