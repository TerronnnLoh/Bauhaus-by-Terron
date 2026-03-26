/**
 * Skills Section
 * Geometric Constructivism Design System
 */

import React from 'react';
import { BauhausCard } from './BauhausCard';

interface SkillCategory {
  title: string;
  skills: string[];
  color: 'red' | 'blue' | 'yellow' | 'black';
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['Java', 'Python', 'Javascript', 'HTML', 'CSS'],
    color: 'red',
  },
  {
    title: 'DevOps & Infrastructure',
    skills: ['Docker', 'Red Hat Openshift', 'CI/CD Pipelines', 'Bitbucket'],
    color: 'blue',
  },
  {
    title: 'Backend & APIs',
    skills: ['REST APIs', 'JSON', 'Kafka messaging', 'Database Management'],
    color: 'yellow',
  },
  {
    title: 'Tools & Testing',
    skills: ['Postman', 'Swagger UI', 'Github', 'Kibana', 'Collibra', 'ADA'],
    color: 'black',
  },
];

export const Skills: React.FC = () => {
  return (
    <section className="section-block section-block-yellow">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-black mb-12 uppercase">Tech Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'} ${index % 3 === 0 ? 'grid-break' : ''}`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <BauhausCard color={category.color} className="p-6 h-full">
                <h3 className="font-display font-bold uppercase mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 border-2 border-current text-xs md:text-sm font-body font-semibold"
                    >
                      {skill}
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
