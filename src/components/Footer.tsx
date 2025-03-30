'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="glass-effect border-t border-zinc-800/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold dark-text-gradient">Mehir.dev</span>
            </Link>
            <p className="text-zinc-400 max-w-xs">
              Creating elegant digital experiences with precision and attention to detail.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 hover:bg-zinc-800/50">
                <Github className="h-5 w-5 text-zinc-400 hover:text-white" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 hover:bg-zinc-800/50">
                <Linkedin className="h-5 w-5 text-zinc-400 hover:text-white" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 hover:bg-zinc-800/50">
                <Twitter className="h-5 w-5 text-zinc-400 hover:text-white" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-10 w-10 hover:bg-zinc-800/50">
                <Mail className="h-5 w-5 text-zinc-400 hover:text-white" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-zinc-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-zinc-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-zinc-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <address className="not-italic text-zinc-400 space-y-2">
              <p>India</p>
              <p>
                <a href="mailto:contact@mehir.dev" className="hover:text-white transition-colors">
                  contact@mehir.dev
                </a>
              </p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-zinc-800/50 text-center">
          <p className="text-zinc-500 text-sm">
            &copy; {currentYear} Mehir.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 