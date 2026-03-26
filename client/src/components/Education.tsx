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
    <section className="section-block section-block-blue border-b-4 border-black">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-white mb-12 uppercase">Education</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primary Education */}
          <div className="space-y-4">
            <BauhausCard color="white" className="p-6">
              <h3 className="font-display font-bold uppercase mb-2 text-lg md:text-xl">
                Nanyang Polytechnic
              </h3>
              <p className="font-body text-black mb-2">
                Diploma in Cybersecurity & Digital Forensics
              </p>
              <p className="font-body text-sm text-black">2021 – 2026</p>
            </BauhausCard>
          </div>

          {/* Secondary Education */}
                    <div className="space-y-4">
            <BauhausCard color="white" className="p-6">
              <h3 className="font-display font-bold uppercase mb-2 text-lg md:text-xl">
                Anderson Secondary
              </h3>
              <p className="font-body text-black mb-2">
                N'Level Certificate
              </p>
              <p className="font-body text-sm text-black">2017 – 2021</p>
            </BauhausCard>
          </div>

          {/* Primary Education */}
                    <div className="space-y-4">
            <BauhausCard color="white" className="p-6">
              <h3 className="font-display font-bold uppercase mb-2 text-lg md:text-xl">
                ChongFu Primary
              </h3>
              <p className="font-body text-black mb-2">
                PSLE Certificate
              </p>
              <p className="font-body text-sm text-black">2011 – 2017</p>
            </BauhausCard>
            
          </div>
                      <div className="bg-[#1040C0] p-4 border-2 border-black shadow-[4px_4px_0px_0px_black]">
              <h4 className="font-display font-bold uppercase mb-3 text-white text-sm md:text-base">Relevant Coursework</h4>
              <div className="space-y-2">
                {coursework.map((course) => (
                  <div
                    key={course}
                    className="flex items-center gap-3 font-body text-sm text-white"
                  >
                    <div className="w-2 h-2 bg-white flex-shrink-0" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
