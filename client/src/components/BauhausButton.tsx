/**
 * BauhausButton Component
 * Geometric Constructivism Design System
 * 
 * Features:
 * - Physical feedback (press effect: move down + shadow removed)
 * - Thick borders with hard shadows
 * - Primary color support
 * - Mechanical, intentional interactions
 */

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface BauhausButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  color?: 'red' | 'blue' | 'yellow' | 'black' | 'dark-red';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline';
  className?: string;
}

const colorMap = {
  red: {
    solid: 'bg-[#FF0000] text-white border-[#FF0000]',
    outline: 'bg-white text-[#FF0000] border-[#FF0000]',
  },
  'dark-red': {
    solid: 'bg-[#D02020] text-white border-[#000000]',
    outline: 'bg-white text-[#D02020] border-[#D02020]',
  },
  blue: {
    solid: 'bg-[#0000FF] text-white border-[#0000FF]',
    outline: 'bg-white text-[#0000FF] border-[#0000FF]',
  },
  yellow: {
    solid: 'bg-[#FFFF00] text-black border-[#FFFF00]',
    outline: 'bg-white text-[#FFFF00] border-[#FFFF00]',
  },
  black: {
    solid: 'bg-[#000000] text-white border-[#000000]',
    outline: 'bg-white text-[#000000] border-[#000000]',
  },
};

const sizeMap = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export const BauhausButton = React.forwardRef<
  HTMLButtonElement,
  BauhausButtonProps
>(
  (
    {
      children,
      color = 'black',
      size = 'md',
      variant = 'solid',
      className,
      ...props
    },
    ref
  ) => {
    const [isPressed, setIsPressed] = useState(false);

    return (
      <button
        ref={ref}
        className={cn(
          'font-display font-bold uppercase tracking-wider',
          'border-4 transition-all duration-200 ease-out',
          'active:translate-y-1 active:shadow-none',
          colorMap[color][variant],
          sizeMap[size],
          !isPressed && 'shadow-[4px_4px_0px_rgba(0,0,0,0.4)]',
          className
        )}
        style={{
          borderWidth: '4px',
          boxShadow: isPressed
            ? 'none'
            : '4px 4px 0px rgba(0,0,0,0.4)',
          transform: isPressed ? 'translateY(4px)' : 'translateY(0)',
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
        onMouseLeave={() => setIsPressed(false)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

BauhausButton.displayName = 'BauhausButton';
