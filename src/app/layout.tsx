import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google';
import React from 'react';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Mehir's Portfolio",
  description: 'Professional portfolio showcasing skills, projects, and experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body 
        className={`${inter.variable} ${raleway.variable} font-sans antialiased`} 
        suppressHydrationWarning
      >
        <div className="relative min-h-screen flex flex-col">
          <div className="fixed inset-0 bg-zinc-950 pointer-events-none -z-10"></div>
          <div className="fixed inset-0 star-bg opacity-10 pointer-events-none -z-10"></div>
          {children}
        </div>
      </body>
    </html>
  );
} 