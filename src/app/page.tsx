'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen dark-gradient">
        <section className="relative h-screen flex flex-col items-center justify-center">
          {/* Subtle background effects */}
          <div className="absolute inset-0 overflow-hidden opacity-10">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
          </div>
          
          <div className="container px-4 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-7xl font-bold dark-text-gradient mb-6">
                Mehir Portfolio
              </h1>
              <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
                Creating exceptional digital experiences with elegance and precision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-zinc-800 hover:bg-zinc-700 text-white"
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-zinc-300 border-zinc-700 hover:bg-zinc-800/50"
                >
                  Contact Me
                </Button>
              </div>
            </motion.div>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7, y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="h-14 w-8 rounded-full border-2 border-zinc-700 flex justify-center pt-2">
              <div className="h-2 w-1 rounded-full bg-zinc-500 animate-bounce"></div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
} 