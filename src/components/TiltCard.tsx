"use client";

import React, { memo, useRef, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useDeviceDetect, usePrefersReducedMotion } from "@/lib/device-utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  tiltFactor?: number;
  glareEnabled?: boolean;
  perspective?: number;
  glareOpacity?: number;
  scale?: number;
}

export const TiltCard = memo(
  ({
    children,
    className,
    tiltFactor = 5,
    glareEnabled = true,
    perspective = 1000,
    glareOpacity = 0.2,
    scale = 1.02,
  }: TiltCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const glareRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    const tiltRef = useRef({ x: 0, y: 0 });

    // Use device detection hooks
    const { isMobile } = useDeviceDetect();
    const prefersReducedMotion = usePrefersReducedMotion();

    // Determine if effects should be disabled
    const shouldDisableEffects = isMobile || prefersReducedMotion;

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current || shouldDisableEffects) return;

        // Get the card dimensions and position
        const rect = cardRef.current.getBoundingClientRect();

        // Calculate the mouse position relative to the card
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Calculate the tilt values
        const tiltX = ((y / rect.height) * 2 - 1) * tiltFactor;
        const tiltY = ((x / rect.width) * 2 - 1) * -tiltFactor;

        tiltRef.current = { x: tiltX, y: tiltY };

        if (cardRef.current) {
          cardRef.current.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${
            isHovering ? scale : 1
          })`;
        }

        if (glareEnabled && glareRef.current) {
          const glareX = (x / rect.width) * 100;
          const glareY = (y / rect.height) * 100;
          glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,${glareOpacity}), transparent 60%)`;
        }
      },
      [
        tiltFactor,
        shouldDisableEffects,
        perspective,
        isHovering,
        scale,
        glareEnabled,
        glareOpacity,
      ]
    );

    const handleMouseEnter = useCallback(() => {
      if (shouldDisableEffects) return;
      setIsHovering(true);

      if (cardRef.current) {
        cardRef.current.style.transition = "transform 0.2s ease";
      }
    }, [shouldDisableEffects]);

    const handleMouseLeave = useCallback(() => {
      setIsHovering(false);

      // Reset the tilt when the mouse leaves
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`;
      }

      tiltRef.current = { x: 0, y: 0 };
    }, [perspective]);

    return (
      <div
        ref={cardRef}
        className={cn("relative overflow-hidden", className)}
        style={{
          perspective: `${perspective}px`,
          transformStyle: "preserve-3d",
          transition: "transform 0.2s ease",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Main content */}
        {children}

        {/* Glare effect - disabled when effects should be disabled */}
        {glareEnabled && !shouldDisableEffects && (
          <div
            ref={glareRef}
            className="absolute inset-0 pointer-events-none z-10"
            style={{
              background: `radial-gradient(circle at 50% 50%, rgba(255,255,255,${glareOpacity}), transparent 60%)`,
              opacity: isHovering ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          />
        )}
      </div>
    );
  }
);
