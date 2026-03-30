/**
 * Hero Section
 * Geometric Constructivism Design System
 * 
 * Features:
 * - Animated geometric composition (circle, square, triangle)
 * - Asymmetric layout (text left, shapes right)
 * - Assembly animation on load
 * - CTA buttons with mechanical feedback
 */

import React, { useState, useEffect } from 'react';
import { BauhausButton } from './BauhausButton';
import { GeometricShape } from './GeometricShape';

interface HeroProps {
  onViewWork?: () => void;
  onContact?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewWork, onContact }) => {
  const [animateShapes, setAnimateShapes] = useState(false);

  useEffect(() => {
    // Trigger animations on mount
    setAnimateShapes(true);
  }, []);

  return (
    <section className="min-h-screen bg-gray-100 flex items-center overflow-hidden relative">
      {/* Decorative background element - Grid Break */}
      <div className="absolute top-0 right-0 w-64 h-64 border-4 border-yellow-400 rotate-45 opacity-10 -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10">
          {/* Left Panel: Text Content */}
          <div
            className="animate-slide-in-left"
            style={{
              animationDuration: '400ms',
              animationDelay: '200ms',
              animationFillMode: 'both',
            }}
          >
            <div className="flex items-start gap-3 mb-4">
              <span className="block w-1 h-80 md:h-69 bg-black rounded-sm flex-shrink-0" />
              <div>
                <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tighter leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
                  BUILT,
                  <br />
                  <span className="text-[#D02020]">BROKEN,</span>
                  <br />
                  REBUILT
                </h1>
                <span className="block h-1 w-52 md:w-80 bg-black mt-4" />
              </div>
            </div>

            <div className="mb-8 space-y-2">
              <p className="text-lg md:text-xl font-body text-gray-700">
                Diploma in Cybersecurity & Digital Forensics
              </p>
              <p className="text-lg md:text-xl font-body font-semibold text-black">
                Backend Engineer @ DBS Bank
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <BauhausButton
                color="dark-red"
                size="md"
                variant="solid"
                onClick={onViewWork}
                className="w-full sm:w-auto"
              >
                VIEW WORK
              </BauhausButton>
              <BauhausButton
                color="black"
                size="md"
                variant="outline"
                onClick={onContact}
                className="w-full sm:w-auto"
              >
                CONTACT
              </BauhausButton>
            </div>
          </div>

          {/* Right Panel: Animated Bauhaus Geometric Composition */}
          <div className="relative h-80 md:h-96 w-full max-w-md mx-auto animate-slide-in-right" style={{
            animationDuration: '500ms',
            animationDelay: '400ms',
            animationFillMode: 'both',
          }}>
            {/* Large Yellow L-shape (composed of two rectangles) */}
            <div className="absolute top-0 left-1/4 animate-float">
              {animateShapes && (
                <GeometricShape
                  type="square"
                  color="yellow"
                  size={140}
                  animated
                  delay={0}
                  className="opacity-90"
                />
              )}
            </div>
            <div className="absolute top-[140px] left-1/4 animate-float" style={{ animationDelay: '650ms' }}>
              {animateShapes && (
                <GeometricShape
                  type="square"
                  color="yellow"
                  size={70}
                  animated
                  delay={50}
                  className="opacity-90"
                />
              )}
            </div>

            {/* Red Circle - Left */}
            <div className="absolute top-8 left-0 animate-float" style={{ animationDelay: '700ms' }}>
              {animateShapes && (
                <GeometricShape
                  type="circle"
                  color="red"
                  size={60}
                  animated
                  delay={100}
                />
              )}
            </div>

            {/* Blue Circle - Top Right */}
            <div className="absolute top-0 right-4 animate-float" style={{ animationDelay: '750ms' }}>
              {animateShapes && (
                <GeometricShape
                  type="circle"
                  color="blue"
                  size={70}
                  animated
                  delay={150}
                />
              )}
            </div>

            {/* Red Rectangle - Horizontal */}
            <div className="absolute top-[70px] right-0 animate-float" style={{ animationDelay: '800ms' }}>
              {animateShapes && (
                <div
                  className="animate-snap-in"
                  style={{
                    animationDelay: '200ms',
                    animationDuration: '600ms',
                    animationFillMode: 'both',
                  }}
                >
                  <div
                    className="bg-[#D02020]"
                    style={{ width: '120px', height: '50px' }}
                  />
                </div>
              )}
            </div>

            {/* Black Rectangle - Vertical */}
            <div className="absolute top-[120px] right-8 animate-float" style={{ animationDelay: '850ms' }}>
              {animateShapes && (
                <div
                  className="animate-snap-in"
                  style={{
                    animationDelay: '250ms',
                    animationDuration: '600ms',
                    animationFillMode: 'both',
                  }}
                >
                  <div
                    className="bg-[#121212]"
                    style={{ width: '60px', height: '100px' }}
                  />
                </div>
              )}
            </div>

            {/* Blue Square - Bottom Left */}
            <div className="absolute bottom-8 left-4 animate-float" style={{ animationDelay: '900ms' }}>
              {animateShapes && (
                <GeometricShape
                  type="square"
                  color="blue"
                  size={55}
                  animated
                  delay={300}
                />
              )}
            </div>

            {/* Red Circle - Bottom Center */}
            <div className="absolute bottom-8 left-1/3 animate-float" style={{ animationDelay: '950ms' }}>
              {animateShapes && (
                <GeometricShape
                  type="circle"
                  color="red"
                  size={55}
                  animated
                  delay={350}
                />
              )}
            </div>

            {/* Red Square - Center */}
            <div className="absolute top-[180px] right-16 animate-float" style={{ animationDelay: '880ms' }}>
              {animateShapes && (
                <GeometricShape
                  type="square"
                  color="red"
                  size={50}
                  animated
                  delay={280}
                />
              )}
            </div>

            {/* Black Square - Bottom Right */}
            <div className="absolute bottom-0 right-12 animate-float" style={{ animationDelay: '1000ms' }}>
              {animateShapes && (
                <GeometricShape
                  type="square"
                  color="black"
                  size={55}
                  animated
                  delay={400}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
