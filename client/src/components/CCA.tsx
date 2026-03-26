/**
 * CCA Section - Events & Community Involvement
 * Geometric Constructivism Design System
 */

import React from 'react';
import { BauhausCard } from './BauhausCard';

interface Event {
  name: string;
  role: string;
  impact: string;
  year: number;
  color: 'red' | 'blue' | 'yellow' | 'black';
}

const events: Event[] = [
  {
    name: 'National Day Carnival',
    role: 'Event Lead',
    impact: 'Led custom leather bookmark activity inspired by National Library theme',
    year: 2024,
    color: 'red',
  },
  {
    name: 'Frightnight',
    role: 'Event Co-Lead',
    impact: 'Organized and built Haunted House utilizing makerspace resources',
    year: 2024,
    color: 'blue',
  },
  {
    name: 'EcoFest',
    role: 'Event Co-Lead',
    impact: 'Repurposed recycled Taekwondo wood into customized keychains',
    year: 2024,
    color: 'yellow',
  },
  {
    name: 'Adopt a Block',
    role: 'Event Co-Lead',
    impact: 'Personalized keychains from recycled wood with creative upcycling',
    year: 2024,
    color: 'black',
  },
  {
    name: 'Open House',
    role: 'Event Lead',
    impact: 'Constructed NYP and I&E structures with interactive messaging experience',
    year: 2025,
    color: 'red',
  },
  {
    name: 'Alumni Day',
    role: 'Event Co-Lead',
    impact: 'Hosted mini activities with hand-cut leather bookmarks and stamps',
    year: 2025,
    color: 'blue',
  },
];

export const CCA: React.FC = () => {
  return (
    <section className="section-block section-block-blue">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-white mb-4 uppercase">Community & Events</h2>
        <p className="text-white font-body mb-12 max-w-2xl">
          Makers Innovators Tribe (MiT) — A CCA in MakerspaceNYP where I lead and assist in
          various events combining creativity, sustainability, and community engagement.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div
              key={event.name}
              className={`animate-snap-in ${index % 3 === 0 ? 'grid-break' : ''}`}
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <BauhausCard color={event.color} className="p-4 md:p-6 h-full flex flex-col">
                <div className="flex items-start justify-between mb-3 gap-2">
                  <h3 className="font-display font-bold uppercase text-xs md:text-sm flex-grow">
                    {event.name}
                  </h3>
                  <span className="text-xs font-body font-semibold ml-2 whitespace-nowrap flex-shrink-0">
                    {event.year}
                  </span>
                </div>

                <p className="font-body text-xs font-semibold mb-3 opacity-75">
                  {event.role}
                </p>

                <p className="font-body text-xs md:text-sm flex-grow mb-4 leading-relaxed">
                  {event.impact}
                </p>

                <div className="border-t-2 border-current pt-3">
                  <span className="text-xs font-body font-semibold whitespace-nowrap">
                    Makers Innovators Tribe
                  </span>
                </div>
              </BauhausCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
