import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter, Raleway } from 'next/font/google';
import { HydrationSuppressionProvider } from '@/components/HydrationSuppressionProvider';

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
            <div className="fixed inset-0 bg-zinc-950 pointer-events-none -z-10"></div>
            <div className="fixed inset-0 star-bg opacity-10 pointer-events-none -z-10"></div>
            {children}
          </div>
        </HydrationSuppressionProvider>
      </body>
    </html>
  );
} 