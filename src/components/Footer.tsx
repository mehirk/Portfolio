'use client';

import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { memo } from 'react';

// Configuration
const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' }
];

const socialIcons = [
  { icon: <Github />, label: "GitHub" },
  { icon: <Linkedin />, label: "LinkedIn" },
  { icon: <Twitter />, label: "Twitter" },
  { icon: <Mail />, label: "Email" }
];

// Memoized components
const SocialLinks = memo(() => (
  <div className="flex space-x-4 mt-4">
    {socialIcons.map((social, index) => (
      <Button 
        key={index}
        variant="ghost" 
        size="icon" 
        className="h-9 w-9 rounded-full hover:bg-zinc-800/50"
        aria-label={social.label}
      >
        <span className="h-5 w-5 text-zinc-200 hover:text-white">
          {social.icon}
        </span>
        <span className="sr-only">{social.label}</span>
      </Button>
    ))}
  </div>
));

const NavLinks = memo(() => (
  <nav className="flex flex-col space-y-2">
    {navItems.map((item) => (
      <Button 
        key={item.href}
        variant="link" 
        asChild 
        className="justify-start p-0 h-auto text-zinc-200 hover:text-white"
      >
        <Link href={item.href}>{item.label}</Link>
      </Button>
    ))}
  </nav>
));

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="glass-effect border-t border-zinc-800/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold dark-text-gradient">Mehir.dev</span>
            </Link>
            <p className="text-zinc-200 max-w-xs">
              Creating elegant digital experiences with precision and attention to detail.
            </p>
            <SocialLinks />
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Navigation</h3>
            <NavLinks />
          </div>
          
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact</h3>
            <address className="not-italic text-zinc-200 space-y-2">
              <p>India</p>
              <Button 
                variant="link" 
                asChild 
                className="justify-start p-0 h-auto text-zinc-200 hover:text-white"
              >
                <a href="mailto:contact@mehir.dev">contact@mehir.dev</a>
              </Button>
            </address>
          </div>
        </div>
        
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