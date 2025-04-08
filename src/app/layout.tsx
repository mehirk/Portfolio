import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google';
import { HydrationSuppressionProvider } from '@/components/HydrationSuppressionProvider';
import dynamic from 'next/dynamic';

// Dynamically import CustomCursor with no SSR
const CustomCursor = dynamic(() => import('@/components/CustomCursor').then(mod => ({ default: mod.CustomCursor })), { ssr: false });
const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground').then(mod => ({ default: mod.AnimatedBackground })), { ssr: false });

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
        <HydrationSuppressionProvider>
          <div className="relative min-h-screen flex flex-col">
            <AnimatedBackground />
            <CustomCursor />
            {children}
          </div>
        </HydrationSuppressionProvider>
      </body>
    </html>
  );
} 