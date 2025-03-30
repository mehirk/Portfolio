'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

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
            <p className="text-zinc-200 max-w-xs">
              Creating elegant digital experiences with precision and attention to detail.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-zinc-800/50">
                <Github className="h-5 w-5 text-zinc-200 hover:text-white" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-zinc-800/50">
                <Linkedin className="h-5 w-5 text-zinc-200 hover:text-white" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-zinc-800/50">
                <Twitter className="h-5 w-5 text-zinc-200 hover:text-white" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-zinc-800/50">
                <Mail className="h-5 w-5 text-zinc-200 hover:text-white" />
                <span className="sr-only">Email</span>
              </Button>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Button variant="link" asChild className="justify-start p-0 h-auto text-zinc-200 hover:text-white">
                <Link href="#home">Home</Link>
              </Button>
              <Button variant="link" asChild className="justify-start p-0 h-auto text-zinc-200 hover:text-white">
                <Link href="#about">About</Link>
              </Button>
              <Button variant="link" asChild className="justify-start p-0 h-auto text-zinc-200 hover:text-white">
                <Link href="#skills">Skills</Link>
              </Button>
              <Button variant="link" asChild className="justify-start p-0 h-auto text-zinc-200 hover:text-white">
                <Link href="#projects">Projects</Link>
              </Button>
              <Button variant="link" asChild className="justify-start p-0 h-auto text-zinc-200 hover:text-white">
                <Link href="#testimonials">Testimonials</Link>
              </Button>
              <Button variant="link" asChild className="justify-start p-0 h-auto text-zinc-200 hover:text-white">
                <Link href="#contact">Contact</Link>
              </Button>
            </nav>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <address className="not-italic text-zinc-200 space-y-2">
              <p>India</p>
              <Button variant="link" asChild className="justify-start p-0 h-auto text-zinc-200 hover:text-white">
                <a href="mailto:contact@mehir.dev">contact@mehir.dev</a>
              </Button>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12">
          <Separator className="bg-zinc-800/50 mb-6" />
          <p className="text-zinc-300 text-sm text-center">
            &copy; {currentYear} Mehir.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 