import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Utility to suppress common hydration warnings in development
 * Call this function in a useEffect hook in your app layout
 */
export function suppressHydrationWarnings() {
  if (typeof window !== 'undefined') {
    const originalConsoleError = console.error;
    console.error = (...args) => {
      if (
        typeof args[0] === 'string' &&
        (args[0].includes('Warning: Text content did not match') ||
        args[0].includes('Warning: Prop `className` did not match') ||
        args[0].includes('Warning: A tree hydrated but some attributes') ||
        args[0].includes('Hydration failed because'))
      ) {
        return;
      }
      originalConsoleError(...args);
    };
  }
}
