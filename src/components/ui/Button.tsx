'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', href, children, ...props }, ref) => {
    const baseStyles =
      'inline-flex items-center justify-center font-heading uppercase tracking-wider transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-mp-neon focus-visible:ring-offset-2 focus-visible:ring-offset-mp-black disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
      primary:
        'neon-button text-mp-white rounded-full hover:shadow-neon-lg active:scale-[0.98]',
      secondary:
        'bg-transparent border-2 border-mp-neon text-mp-white rounded-full hover:bg-mp-neon/10 hover:shadow-neon active:scale-[0.98]',
      ghost:
        'bg-transparent text-mp-white hover:text-mp-neon underline-offset-4 hover:underline',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    if (href) {
      return (
        <a
          href={href}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
