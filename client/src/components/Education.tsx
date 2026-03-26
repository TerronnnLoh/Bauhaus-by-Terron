/**
 * Education Section
 * Geometric Constructivism Design System
 */

import React from 'react';
import { BauhausCard } from './BauhausCard';

export const Education: React.FC = () => {
  const coursework = [
    'Software Engineering',
    'Database Management Systems',
    'Infocomm Security',
    'Network Technologies',
    'Data Analysis & Visualization',
  ];

  return (
    <section className="section-block section-block-white">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-black mb-12 uppercase">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Primary Education */}
          <div className="animate-slide-in-left grid-break-left">
            <BauhausCard color="blue" className="p-6 md:p-8 h-full">
              <h3 className="font-display font-bold uppercase mb-2 text-white text-lg md:text-xl">
                Nanyang Polytechnic
              </h3>
              <p className="font-body text-white mb-4 text-sm md:text-base">
                Diploma in Cybersecurity & Digital Forensics
              </p>
              <p className="font-body text-xs md:text-sm text-blue-100">2021 – 2026</p>
            </BauhausCard>

            <div className="mt-6">
              <h4 className="font-display font-bold uppercase mb-4 text-sm md:text-base">Relevant Coursework</h4>
              <div className="grid grid-cols-1 gap-2">
                {coursework.map((course) => (
                  <div
                    key={course}
                    className="flex items-center gap-3 font-body text-xs md:text-sm text-gray-700"
                  >
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-black flex-shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Secondary Education */}
          <div className="animate-slide-in-right space-y-4 grid-break">
            <BauhausCard color="red" className="p-6 h-full flex items-center justify-center">
              <h3 className="font-display font-bold uppercase mb-2 text-center text-sm md:text-base">
                Anderson Secondary School
              </h3>
            </BauhausCard>

            <BauhausCard color="yellow" className="p-6 h-full flex items-center justify-center">
              <h3 className="font-display font-bold uppercase mb-2 text-center text-sm md:text-base">
                Chong Fu Primary School
              </h3>
            </BauhausCard>

            <div className="border-4 border-black p-6 bg-white">
              <p className="font-body text-xs md:text-sm text-gray-600 leading-relaxed">
                Focus on primary diploma education in Cybersecurity & Digital Forensics
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
