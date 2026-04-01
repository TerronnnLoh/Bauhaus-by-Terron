/**
 * Experience Section
 * Bauhaus Geometric Constructivism Design System
 */

import React from 'react';
import { BauhausCard } from './BauhausCard';
import { useScrollAnimationMultiple } from '@/hooks/useScrollAnimation';

export const Experience: React.FC = () => {
  // Scroll animation refs for DBS cards (3 cards) - slide in from right
  const dbsCardRefs = useScrollAnimationMultiple('in-view', 3);
  // Scroll animation refs for Makerspace cards (2 cards) - slide in from right
  const makerspaceCardRefs = useScrollAnimationMultiple('in-view', 2);
  // Scroll animation refs for skill cards (4 cards) - slide up
  const skillCardRefs = useScrollAnimationMultiple('in-view', 4);

  return (
    <section className="section-block section-block-off-white border-b-4 border-black">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-tight mb-8">
          Experience
        </h2>

        <div className="space-y-12 lg:space-y-16">
          {/* DBS Bank */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-2">
                DBS Bank
              </h3>
              <p className="text-lg font-bold uppercase text-gray-700 mb-2">
                Backend Software Engineer
              </p>
              <p className="text-sm font-medium uppercase tracking-widest text-gray-600">
                Apr 2025 – Mar 2026
              </p>
            </div>

            <div className="space-y-4">
              <div ref={(el) => { dbsCardRefs.current[0] = el; }} className="scroll-reveal-right">
                <BauhausCard color="white" cornerDecoration className="p-6">
                  <h4 className="font-bold uppercase mb-3 text-base sm:text-lg">What I Built</h4>
                  <ul className="font-medium text-sm space-y-2">
                    <li>• Kafka producer testing functions</li>
                    <li>• Java API POC deployed on OpenShift</li>
                  </ul>
                </BauhausCard>
              </div>

              <div ref={(el) => { dbsCardRefs.current[1] = el; }} className="scroll-reveal-right" style={{ transitionDelay: '100ms' }}>
                <BauhausCard color="white" cornerDecoration className="p-6">
                  <h4 className="font-bold uppercase mb-3 text-base sm:text-lg">Technologies</h4>
                  <p className="font-medium text-sm leading-relaxed">
                    Kafka, REST APIs, Docker, OpenShift, Unscrambl, Unica, DRONE CI/CD,
                    Swagger, Kibana, Bitbucket, Jenkins, Collibra
                  </p>
                </BauhausCard>
              </div>

              <div ref={(el) => { dbsCardRefs.current[2] = el; }} className="scroll-reveal-right" style={{ transitionDelay: '200ms' }}>
                <BauhausCard color="white" cornerDecoration className="p-6">
                  <h4 className="font-bold uppercase mb-3 text-base sm:text-lg">What I Improved</h4>
                  <ul className="font-medium text-sm space-y-2">
                    <li>• SOPs for TWS job failures</li>
                    <li>• Payload processing structures</li>
                  </ul>
                </BauhausCard>
              </div>
            </div>
          </div>

          <div className="border-t-4 border-black pt-12 lg:pt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="animate-slide-in-left">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tighter mb-2">
                  Makerspace NYP
                </h3>
                <p className="text-lg font-bold uppercase text-gray-700 mb-3">
                  Student Assistant Coach
                </p>
                <p className="text-sm font-medium uppercase tracking-widest text-gray-600">
                  Apr 2024 – Aug 2024
                </p>
              </div>

              <div className="space-y-4">
                <div ref={(el) => { makerspaceCardRefs.current[0] = el; }} className="scroll-reveal-right">
                  <BauhausCard color="white" cornerDecoration className="p-6">
                    <h4 className="font-bold uppercase mb-3 text-base sm:text-lg">What I Do</h4>
                    <ul className="font-medium text-sm space-y-2">
                      <li>• Events</li>
                      <li>• Workshops</li>
                      <li>• Equipment Maintenance</li>
                    </ul>
                  </BauhausCard>
                </div>

                <div ref={(el) => { makerspaceCardRefs.current[1] = el; }} className="scroll-reveal-right" style={{ transitionDelay: '100ms' }}>
                  <BauhausCard color="white" cornerDecoration className="p-6">
                    <h4 className="font-bold uppercase mb-3 text-base sm:text-lg">Skills</h4>
                    <p className="font-medium text-sm leading-relaxed">
                      Leathercraft, Laser Painting, Woodworking, 3D Printing, Tufting, Sewing, Cardboard Modelling, Machinery Maintenance
                    </p>
                  </BauhausCard>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="border-t-4 border-black pt-12 lg:pt-16">
            <div className="grid grid-cols-2 gap-4 px-2">
              {[
                { name: 'Leathercraft', color: 'red' as const },
                { name: '3D Printing', color: 'blue' as const },
                { name: 'Laser Cutting', color: 'yellow' as const },
                { name: 'Woodworking', color: 'black' as const },
              ].map((skill, index) => (
                <div
                  key={skill.name}
                  ref={(el) => { skillCardRefs.current[index] = el; }}
                  className="scroll-reveal-up"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <BauhausCard
                    color={skill.color}
                    className="p-4 text-center flex items-center justify-center min-h-[80px]"
                  >
                    <p className="font-bold uppercase text-xs sm:text-sm tracking-wider">
                      {skill.name}
                    </p>
                  </BauhausCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
