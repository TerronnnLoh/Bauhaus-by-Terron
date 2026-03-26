/**
 * Projects Section
 * Geometric Constructivism Design System
 */

import React from 'react';
import { BauhausCard } from './BauhausCard';

interface Project {
  title: string;
  description: string;
  tags: string[];
  color: 'red' | 'blue' | 'yellow' | 'black';
}

const projects: Project[] = [
  {
    title: 'Workflow Automation',
    description: 'Automated repetitive workflows to reduce manual effort',
    tags: ['UiPath', 'Automation', 'Data Extraction'],
    color: 'red',
  },
  {
    title: 'Java Menu Console App',
    description:
      'Menu-driven Java console application demonstrating fundamental programming concepts',
    tags: ['Java', 'OOP', 'Core Programming'],
    color: 'blue',
  },
  {
    title: 'Secure System',
    description: 'Built a secure system with role-based access and data protection',
    tags: ['Python', 'Django', 'Security'],
    color: 'yellow',
  },
  {
    title: 'EcoWheels',
    description:
      'Secure electric vehicle e-commerce web application implementing OWASP principles',
    tags: ['Python', 'OWASP', 'E-commerce'],
    color: 'black',
  },
];

export const Projects: React.FC = () => {
  return (
    <section className="section-block section-block-yellow">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-white mb-12 uppercase">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'} ${index % 3 === 0 ? 'grid-break' : ''}`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <BauhausCard color={project.color} className="p-6 h-full flex flex-col">
                <h3 className="font-display font-bold uppercase mb-3 text-base md:text-lg">
                  {project.title}
                </h3>
                <p className="font-body text-xs md:text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-current">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-body font-semibold bg-current bg-opacity-10 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </BauhausCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
