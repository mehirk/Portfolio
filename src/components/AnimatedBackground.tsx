'use client';

import { useCallback, useEffect, useState } from 'react';
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  const [color, setColor] = useState({
    r: 100,
    g: 50,
    b: 255,
    dir: 1
  });

  // Slowly shift colors over time
  useEffect(() => {
    const interval = setInterval(() => {
      setColor(prev => {
        // Create slight color shifts over time
        const newR = prev.r + (Math.random() * 0.5 - 0.25);
        const newG = prev.g + (Math.random() * 0.5 - 0.25);
        const newB = prev.b + (Math.random() * 0.5 - 0.25);
        
        return {
          r: Math.max(50, Math.min(150, newR)),
          g: Math.max(20, Math.min(100, newG)),
          b: Math.max(150, Math.min(255, newB)),
          dir: prev.dir
        };
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <>
      {/* Gradient background with animation */}
      <motion.div 
        className="fixed inset-0 pointer-events-none -z-20"
        animate={{
          background: [
            `radial-gradient(circle, rgba(${color.r},${color.g},${color.b},0.08) 0%, rgba(10,10,20,0.95) 70%)`,
            `radial-gradient(circle, rgba(${color.r+20},${color.g-10},${color.b-30},0.08) 0%, rgba(10,10,20,0.95) 70%)`,
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      
      {/* Stars overlay */}
      <div className="fixed inset-0 star-bg opacity-15 pointer-events-none -z-10"></div>
      
      {/* Particles */}
      <Particles
        className="fixed inset-0 -z-15 pointer-events-none"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          particles: {
            number: {
              value: 40,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: `rgb(${color.r}, ${color.g}, ${color.b})`
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.3,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: `rgb(${color.r}, ${color.g}, ${color.b})`,
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 150,
                line_linked: {
                  opacity: 0.3
                }
              }
            }
          },
          retina_detect: true
        }}
      />
    </>
  );
};

export default AnimatedBackground; 