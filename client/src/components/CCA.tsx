/**
 * CCA Section - Events & Community Involvement
 * Geometric Constructivism Design System
 */

import React, { useRef, useEffect } from 'react';
import { Circle, Square, Triangle } from 'lucide-react';

interface Event {
  name: string;
  role: string;
  impact: string;
  year: number;
  color: 'red' | 'blue' | 'yellow';
  bgColor: string;
  icon: 'circle' | 'square' | 'triangle';
}

const events: Event[] = [
  {
    name: 'National Day Carnival',
    role: 'Event Lead',
    impact: 'Led custom leather bookmark activity inspired by National Library theme',
    year: 2024,
    color: 'red',
    bgColor: '#FDE8E8',
    icon: 'circle',
  },
  {
    name: 'Frightnight',
    role: 'Event Co-Lead',
    impact: 'Organized and built Haunted House utilizing makerspace resources',
    year: 2024,
    color: 'blue',
    bgColor: '#E8EAF6',
    icon: 'square',
  },
  {
    name: 'EcoFest',
    role: 'Event Co-Lead',
    impact: 'Repurposed recycled Taekwondo wood into customized keychains',
    year: 2024,
    color: 'yellow',
    bgColor: '#FEF9C3',
    icon: 'triangle',
  },
  {
    name: 'Adopt a Block',
    role: 'Event Co-Lead',
    impact: 'Personalized keychains from recycled wood with creative upcycling',
    year: 2024,
    color: 'red',
    bgColor: '#FDE8E8',
    icon: 'circle',
  },
  {
    name: 'Open House',
    role: 'Event Lead',
    impact: 'Constructed NYP and I&E structures with interactive messaging experience',
    year: 2025,
    color: 'blue',
    bgColor: '#E8EAF6',
    icon: 'square',
  },
  {
    name: 'Alumni Day',
    role: 'Event Co-Lead',
    impact: 'Hosted mini activities with hand-cut leather bookmarks and stamps',
    year: 2025,
    color: 'yellow',
    bgColor: '#FEF9C3',
    icon: 'triangle',
  },
];

const iconMap = {
  circle: Circle,
  square: Square,
  triangle: Triangle,
};

const iconColorMap = {
  red: '#D02020',
  blue: '#1040C0',
  yellow: '#F0C020',
};

export const CCA: React.FC = () => {
  const eventRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          } else {
            entry.target.classList.remove('in-view');
          }
        });
      },
      {
        threshold: 0.05,
      }
    );

    eventRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      eventRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <section className="section-block section-block-white border-b-4 border-black">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="mb-4 uppercase">Community & Events</h2>
        <p className="font-body mb-12 max-w-2xl">
          Makers Innovators Tribe (MiT) — A CCA in MakerspaceNYP where we host and assist in
          various events combining creativity, sustainability, and community engagement.
        </p>

        <div className="space-y-4">
          {events.map((event, index) => {
            const IconComponent = iconMap[event.icon];
            const iconColor = iconColorMap[event.color];

            return (
              <div
                key={event.name}
                ref={(el) => { eventRefs.current[index] = el; }}
                className="scroll-reveal-up sink-hover-parent"
                style={{
                  transitionDelay: `${index * 80}ms`,
                }}
              >
                <div
                  className="sink-hover-child border-4 border-black p-4 flex items-center gap-4 shadow-[4px_4px_0px_0px_black] cursor-pointer transition-all duration-150 ease-out"
                  style={{
                    backgroundColor: event.bgColor,
                  }}
                >
                  <div
                    className="sink-hover-child w-12 h-12 border-2 border-black flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0px_0px_black] transition-all duration-150 ease-out"
                    style={{
                      backgroundColor: iconColor,
                    }}
                  >
                    <IconComponent
                      className="w-6 h-6"
                      style={{
                        color: '#FFFFFF',
                        strokeWidth: 3,
                        transform: event.icon === 'square' ? 'rotate(45deg)' : undefined,
                      }}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-display font-bold uppercase text-base md:text-lg mb-1">
                      {event.name}
                    </h3>
                    <p className="font-body text-sm font-semibold mb-1">
                      {event.role}
                    </p>
                    <p className="font-body text-sm leading-relaxed">
                      {event.impact}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="font-display font-bold text-sm bg-black text-white px-2 py-1">
                      {event.year}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
