'use client';

import { useState, useEffect } from 'react';

export type DeviceType = 'mobile' | 'tablet' | 'desktop';

export interface DeviceInfo {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  deviceType: DeviceType;
}

/**
 * Hook to detect device type based on screen width
 * Mobile: < 768px
 * Tablet: 768px - 1024px
 * Desktop: > 1024px
 */
export function useDeviceDetect(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    deviceType: 'desktop',
  });

  useEffect(() => {
    // Function to determine the device type
    const updateDeviceType = () => {
      const width = window.innerWidth;
      
      // Detect device type based on screen width
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      const isDesktop = width >= 1024;
      
      // Get device type as string
      let deviceType: DeviceType = 'desktop';
      if (isMobile) deviceType = 'mobile';
      else if (isTablet) deviceType = 'tablet';
      
      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        deviceType,
      });
    };

    // Set device type on mount
    updateDeviceType();
    
    // Update on resize
    window.addEventListener('resize', updateDeviceType);
    
    // Clean up
    return () => window.removeEventListener('resize', updateDeviceType);
  }, []);

  return deviceInfo;
}

/**
 * Helper to detect reduced motion preference
 * This can be used to disable animations for users who prefer reduced motion
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    // Check if the browser supports matchMedia
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      
      // Add listener for changes
      const handleChange = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };
      
      // Modern browsers
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
      }
      // Older browsers
      else if (mediaQuery.addListener) {
        mediaQuery.addListener(handleChange);
        return () => mediaQuery.removeListener(handleChange);
      }
    }
  }, []);
  
  return prefersReducedMotion;
}

/**
 * Performance detection for low-end devices
 * This uses a simple heuristic based on device memory and hardwareConcurrency
 */
export function useLowPerformanceMode(): boolean {
  const [isLowPerformance, setIsLowPerformance] = useState(false);
  const { isMobile } = useDeviceDetect();
  
  useEffect(() => {
    // Only check on client side
    if (typeof window !== 'undefined') {
      // Check for device memory API (Chrome only)
      const lowMemory = ('deviceMemory' in navigator) && 
        // @ts-ignore - deviceMemory exists but TypeScript doesn't know about it
        (navigator.deviceMemory < 4);
        
      // Check for CPU cores
      const lowCPU = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
      
      // Mobile devices are more likely to have performance issues
      setIsLowPerformance((lowMemory || lowCPU || isMobile));
    }
  }, [isMobile]);
  
  return isLowPerformance;
}