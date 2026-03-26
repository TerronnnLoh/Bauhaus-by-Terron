/**
 * SectionDivider Component
 * Geometric Constructivism Design System
 * 
 * Creates visual separation between sections with geometric elements
 * Implements grid-break rules by rotating decorative squares
 */

import React from 'react';

interface SectionDividerProps {
  color?: 'red' | 'blue' | 'yellow' | 'black';
  style?: 'rotated-square' | 'line' | 'both';
}

const colorMap = {
  red: '#FF0000',
  blue: '#0000FF',
  yellow: '#FFFF00',
  black: '#000000',
};

export const SectionDivider: React.FC<SectionDividerProps> = ({
  color = 'black',
  style = 'both',
}) => {
  const baseColor = colorMap[color];

  return (
    <div className="relative py-8 md:py-12 flex items-center justify-center overflow-hidden">
      {/* Rotated decorative squares - Grid Break Rule */}
      {(style === 'rotated-square' || style === 'both') && (
        <>
          <div
            className="absolute -left-12 w-24 h-24 rotate-45 opacity-20"
            style={{
              border: `4px solid ${baseColor}`,
            }}
          />
          <div
            className="absolute -right-12 w-24 h-24 rotate-45 opacity-20"
            style={{
              border: `4px solid ${baseColor}`,
            }}
          />
        </>
      )}

      {/* Horizontal line */}
      {(style === 'line' || style === 'both') && (
        <div
          className="w-full h-1 relative z-10"
          style={{
            backgroundColor: baseColor,
          }}
        />
      )}
    </div>
  );
};
