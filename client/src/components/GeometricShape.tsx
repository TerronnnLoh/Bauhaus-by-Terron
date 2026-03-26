/**
 * GeometricShape Component
 * Geometric Constructivism Design System
 * 
 * Features:
 * - Pure geometric shapes: circle, square, triangle
 * - Assembly animation (border → fill → rotate)
 * - Primary color support
 * - Responsive sizing
 */

import React from 'react';
import { cn } from '@/lib/utils';

interface GeometricShapeProps {
  type: 'circle' | 'square' | 'triangle';
  color: 'red' | 'blue' | 'yellow' | 'black';
  size: number; // in pixels
  animated?: boolean;
  delay?: number; // in ms
  borderColor?: string; // custom border color
  borderWidth?: number; // border width in pixels, default 4
  className?: string;
}

const colorMap = {
  red: '#FF0000',
  blue: '#0000FF',
  yellow: '#FFFF00',
  black: '#000000',
};

export const GeometricShape: React.FC<GeometricShapeProps> = ({
  type,
  color,
  size,
  animated = false,
  delay = 0,
  borderColor,
  borderWidth = 4,
  className,
}) => {
  const baseColor = colorMap[color];
  const finalBorderColor = borderColor || baseColor;

  // Circle
  if (type === 'circle') {
    return (
      <div
        className={cn(
          'rounded-full',
          animated && 'animate-assembly-circle',
          className
        )}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderWidth: `${borderWidth}px`,
          borderStyle: 'solid',
          borderColor: finalBorderColor,
          backgroundColor: animated ? 'transparent' : baseColor,
          animationDelay: `${delay}ms`,
          animationDuration: '600ms',
        }}
      />
    );
  }

  // Square
  if (type === 'square') {
    return (
      <div
        className={cn(
          animated && 'animate-assembly-square',
          className
        )}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          borderWidth: `${borderWidth}px`,
          borderStyle: 'solid',
          borderColor: finalBorderColor,
          backgroundColor: animated ? 'transparent' : baseColor,
          animationDelay: `${delay}ms`,
          animationDuration: '600ms',
        }}
      />
    );
  }

  // Triangle (using SVG for precision)
  if (type === 'triangle') {
    const points = `${size / 2},0 ${size},${size} 0,${size}`;
    return (
      <svg
        width={size}
        height={size}
        className={cn(animated && 'animate-assembly-triangle', className)}
        style={{
          animationDelay: `${delay}ms`,
          animationDuration: '600ms',
        }}
      >
        <polygon
          points={points}
          fill={animated ? 'none' : baseColor}
          stroke={finalBorderColor}
          strokeWidth={borderWidth}
        />
      </svg>
    );
  }

  return null;
};
