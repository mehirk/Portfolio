import { AnimatedBackground } from "@/components/AnimatedBackground";
import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import dynamic from "next/dynamic";

// Dynamically import the cursor component with no SSR to avoid hydration issues
const CustomCursor = dynamic(() => import("@/components/CustomCursor"), {
  ssr: false,
});

// Optimize font loading
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mehir Kumar | Portfolio",
  description:
    "Professional portfolio showcasing skills, projects, and experience of Mehir Kumar, a Computer Science student at Acadia University",
  icons: {
    icon: "/logo/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <script src="https://unpkg.com/react-scan/dist/auto.global.js" /> */}
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="relative min-h-screen flex flex-col">
          <AnimatedBackground />
          {children}
          <CustomCursor />
        </div>
      </body>
    </html>
  );
}
