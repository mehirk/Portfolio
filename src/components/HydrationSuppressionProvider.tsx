'use client';

import { useEffect, type ReactNode } from 'react';
import { suppressHydrationWarnings } from '@/lib/utils';

export function HydrationSuppressionProvider({ 
  children 
}: { 
  children: ReactNode 
}) {
  // Suppress hydration warnings
  useEffect(() => {
    suppressHydrationWarnings();
  }, []);

  return <>{children}</>;
} 