/**
 * BauhausCard Component
 * Geometric Constructivism Design System
 *
 * Features:
 * - Thick borders (2px mobile, 4px desktop) with hard shadows
 * - Primary color support (red #D02020, blue #1040C0, yellow #F0C020, black #121212)
 * - Small geometric corner decoration
 * - Hover sink effect
 */

import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface BauhausCardProps {
  children: React.ReactNode;
  color?: 'red' | 'blue' | 'yellow' | 'black' | 'white' | 'grey';
  className?: string;
  cornerDecoration?: boolean;
  rotated?: boolean;
  onClick?: () => void;
}

const colorMap = {
  red: 'bg-[#D02020] text-white',
  blue: 'bg-[#1040C0] text-white',
  yellow: 'bg-[#F0C020] text-black',
  black: 'bg-[#121212] text-white',
  white: 'bg-white text-black',
  grey: 'bg-[#ebebeb] text-black',
};

export const BauhausCard = React.forwardRef<HTMLDivElement, BauhausCardProps>(
  (
    {
      children,
      color = 'white',
      className,
      cornerDecoration = false,
      rotated = false,
      onClick,
    },
    ref
  ) => {
    const [isHovered, setIsHovered] = useState(false);
    const isColored = color !== 'white' && color !== 'black';
    const showCornerDecoration = cornerDecoration && !isColored;

    return (
      <div
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          'relative border-2 lg:border-4 border-black transition-all duration-200 ease-out',
          colorMap[color],
          rotated && 'rotate-45',
          className
        )}
        style={{
          transform: isHovered ? 'translate(4px, 4px)' : undefined,
          boxShadow: isHovered ? 'none' : '4px 4px 0px 0px black',
        }}
      >
        {showCornerDecoration && (
          <div className="absolute top-0 right-0 w-3 h-3 lg:w-4 lg:h-4 bg-[#D02020] border-b-2 lg:border-b-4 border-l-2 lg:border-l-4 border-black" />
        )}
        {showCornerDecoration && (
          <div className="absolute top-0 right-4 lg:right-5 w-3 h-3 lg:w-4 lg:h-4 bg-[#1040C0] border-b-2 lg:border-b-4 border-l-2 lg:border-l-4 border-black" />
        )}
        {showCornerDecoration && (
          <div className="absolute top-0 right-8 lg:right-6 w-3 h-3 lg:w-4 lg:h-4 bg-[#F0C020] border-b-2 lg:border-b-4 border-l-2 lg:border-l-4 border-black" />
        )}
        {children}
      </div>
    );
  }
);

BauhausCard.displayName = 'BauhausCard';
