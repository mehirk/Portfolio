import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google';
import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import the AnimatedBackground component with no SSR
const AnimatedBackground = dynamic(
  () => import('@/components/AnimatedBackground'),
  { ssr: false }
);

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
  title: "Mehir Kumar | Portfolio",
  description: 'Professional portfolio showcasing skills, projects, and experience of Mehir Kumar, a Computer Science student at Acadia University',
  icons: {
    icon: '/logo/logo.svg'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/logo/logo.svg" sizes="any" />
      </head>
      <body 
        className={`${inter.variable} ${raleway.variable} font-sans antialiased`} 
        suppressHydrationWarning
      >
        <div className="relative min-h-screen flex flex-col">
          {/* Replace the static background with the animated background */}
          <AnimatedBackground />
          {children}
        </div>
      </body>
    </html>
  );
} 