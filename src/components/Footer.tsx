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
  { href: '#interactions-demo', label: 'Playground' },
  { href: '#contact', label: 'Contact' }
];

const socialIcons = [
  { icon: <Github />, href: "https://github.com/mehirk", label: "GitHub" },
  { icon: <Linkedin />, href: "https://linkedin.com/in/mehirkumar", label: "LinkedIn" },
  { icon: <Twitter />, href: "https://twitter.com/mehirkumar", label: "Twitter" },
  { icon: <Mail />, href: "mailto:mehirk28@gmail.com", label: "Email" }
];

// Memoized components
const SocialLinks = memo(() => (
  <div className="flex space-x-3 mt-4">
    {socialIcons.map((social, index) => (
      <Button 
        key={index}
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 sm:h-9 sm:w-9 rounded-full hover:bg-zinc-800/50"
        aria-label={social.label}
        asChild
      >
        <a href={social.href} target="_blank" rel="noopener noreferrer">
          <span className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-200 hover:text-white">
            {social.icon}
          </span>
          <span className="sr-only">{social.label}</span>
        </a>
      </Button>
    ))}
  </div>
));

const NavLinks = memo(() => (
  <nav className="grid grid-cols-2 sm:flex sm:flex-col gap-2 sm:space-y-2">
    {navItems.map((item) => (
      <Button 
        key={item.href}
        variant="link" 
        asChild 
        className="justify-start p-0 h-auto text-xs sm:text-sm text-zinc-200 hover:text-white"
      >
        <Link href={item.href}>{item.label}</Link>
      </Button>
    ))}
  </nav>
));

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="glass-effect border-t border-zinc-800/50 pt-16 pb-8 sm:py-12 mb-16 md:mb-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl font-bold dark-text-gradient">Mehir.dev</span>
            </Link>
            <p className="text-zinc-200 text-sm sm:text-base max-w-xs">
              Creating elegant digital experiences with precision and attention to detail.
            </p>
            <SocialLinks />
          </div>
          
          <div className="flex flex-col space-y-3 sm:space-y-4">
            <h3 className="text-base sm:text-lg font-semibold text-white">Navigation</h3>
            <NavLinks />
          </div>
          
          <div className="flex flex-col space-y-3 sm:space-y-4 sm:col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-white">Contact</h3>
            <address className="not-italic text-zinc-200 text-sm sm:text-base space-y-2">
              <p>India</p>
              <Button 
                variant="link" 
                asChild 
                className="justify-start p-0 h-auto text-zinc-200 hover:text-white"
              >
                <a href="mailto:mehirk28@gmail.com">mehirk28@gmail.com</a>
              </Button>
            </address>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12">
          <Separator className="bg-zinc-800/50 mb-4 sm:mb-6" />
          <p className="text-zinc-300 text-xs sm:text-sm text-center">
            &copy; {currentYear} Mehir.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 