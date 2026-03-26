/**
 * About Section
 * Geometric Constructivism Design System
 */

import React from 'react';
import { BauhausCard } from './BauhausCard';

export const About: React.FC = () => {
  return (
    <section className="section-block section-block-white border-4 border-black" id="about">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Decorative Shape - Grid Break */}


          {/* Content */}
          <div className="md:col-span-2 animate-slide-in-right">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">About</h2>
            <p className="text-lg text-black leading-relaxed font-body">
              Motivated IT professional with hands-on experience in backend development, system
              integration, and cloud-native environments. Proficient in Java, Python, REST APIs,
              and modern DevOps workflows. Strong team player with a drive to learn and build
              scalable systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
