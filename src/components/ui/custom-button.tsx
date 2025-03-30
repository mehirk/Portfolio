import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg hover:shadow-xl",
        "gradient-subtle": "bg-gradient-to-r from-purple-500/90 to-blue-500/90 text-white border-0 shadow-md hover:shadow-lg",
        glassmorphic: "backdrop-blur-md bg-white/10 border border-white/20 text-white shadow-glass hover:bg-white/15",
        elegant: "bg-zinc-900 text-white border border-zinc-700/40 shadow-elegant hover:shadow-xl hover:bg-zinc-800",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-lg px-8",
        xl: "h-12 rounded-xl px-10 text-base",
        icon: "h-10 w-10",
      },
      animation: {
        none: "",
        slideUp: "transition-transform hover:-translate-y-1",
        scale: "transition-transform hover:scale-105 active:scale-95",
        glow: "transition-shadow hover:shadow-[0_0_15px_rgba(168,132,252,0.5)]",
        pulse: "animate-pulse",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "slideUp",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  isAnimated?: boolean;
}

const CustomButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, animation, isAnimated = true, isLoading, children, ...props },
    ref
  ) => {
    const buttonContent = (
      <>
        {isLoading && (
          <svg 
            className="mr-2 h-4 w-4 animate-spin" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
            ></circle>
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        )}
        {children}
      </>
    );

    if (isAnimated) {
      return (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(buttonVariants({ variant, size, animation, className }))}
          ref={ref}
          disabled={isLoading}
          {...props}
        >
          {buttonContent}
        </motion.button>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, animation, className }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {buttonContent}
      </button>
    );
  }
);

CustomButton.displayName = "CustomButton";

export { CustomButton, buttonVariants }; 