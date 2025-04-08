'use client';

import { useState } from 'react';
import { FadeInView } from '@/components/FadeInView';
import { AnimatedText } from '@/components/AnimatedText';
import { TiltCard } from '@/components/TiltCard';
import { MagneticButton } from '@/components/MagneticButton';
import { Button } from '@/components/ui/button';

export function InteractionDemo() {
  const [activeTab, setActiveTab] = useState<'tilt' | 'magnetic' | 'text'>('tilt');
  
  return (
    <section id="interactions-demo" className="py-24 relative overflow-hidden">
      <div className="container px-4 mx-auto">
        <FadeInView>
          <AnimatedText
            text="Interaction Playground"
            className="text-3xl md:text-5xl font-bold text-center mb-4"
          />
          <p className="text-zinc-400 text-center max-w-2xl mx-auto mb-12">
            Explore these interactive elements to experience some of the micro-interactions
            that make this portfolio stand out.
          </p>
        </FadeInView>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            variant={activeTab === 'tilt' ? 'default' : 'outline'}
            onClick={() => setActiveTab('tilt')}
          >
            Tilt Cards
          </Button>
          <Button 
            variant={activeTab === 'magnetic' ? 'default' : 'outline'}
            onClick={() => setActiveTab('magnetic')}
          >
            Magnetic Elements
          </Button>
          <Button 
            variant={activeTab === 'text' ? 'default' : 'outline'}
            onClick={() => setActiveTab('text')}
          >
            Text Animations
          </Button>
        </div>
        
        {activeTab === 'tilt' && (
          <FadeInView className="flex flex-wrap justify-center gap-8">
            <TiltCard className="w-72 h-72 bg-zinc-900/50 rounded-xl p-6 border border-white/5">
              <h3 className="text-xl font-semibold mb-2">Tilt Card</h3>
              <p className="text-zinc-400">Hover over this card to see the tilt effect with a subtle glare.</p>
            </TiltCard>
            
            <TiltCard 
              className="w-72 h-72 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-xl p-6 border border-white/5"
              tiltFactor={10}
              glareOpacity={0.1}
            >
              <h3 className="text-xl font-semibold mb-2">Stronger Tilt</h3>
              <p className="text-zinc-400">This card has a stronger tilt factor and reduced glare.</p>
            </TiltCard>
            
            <TiltCard 
              className="w-72 h-72 bg-zinc-900/50 rounded-xl p-6 border border-white/5"
              glareEnabled={false}
              perspective={2000}
            >
              <h3 className="text-xl font-semibold mb-2">No Glare</h3>
              <p className="text-zinc-400">This card has glare disabled and a different perspective.</p>
            </TiltCard>
          </FadeInView>
        )}
        
        {activeTab === 'magnetic' && (
          <FadeInView className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center gap-8">
              <MagneticButton>
                <div className="px-8 py-4 rounded-xl bg-blue-600 text-white font-medium">
                  Magnetic Button
                </div>
              </MagneticButton>
              
              <MagneticButton strength={40} distance={300}>
                <div className="px-8 py-4 rounded-xl bg-purple-600 text-white font-medium">
                  Strong Magnetic
                </div>
              </MagneticButton>
              
              <MagneticButton strength={15} scale={1.1}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-emerald-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </div>
              </MagneticButton>
            </div>
          </FadeInView>
        )}
        
        {activeTab === 'text' && (
          <FadeInView className="flex flex-col items-center gap-8">
            <AnimatedText
              text="Animated Text Reveal"
              className="text-2xl font-bold"
              once={false}
            />
            
            <div className="flex flex-col gap-4 max-w-md text-center">
              <AnimatedText
                text="Different delay values"
                className="text-xl"
                delay={5}
                once={false}
              />
              
              <AnimatedText
                text="Create staggered animations"
                className="text-md text-zinc-400"
                delay={10}
                once={false}
              />
              
              <p className="text-zinc-500 mt-4">
                Scroll in and out of view to see the animations replay.
              </p>
            </div>
          </FadeInView>
        )}
      </div>
    </section>
  );
} 