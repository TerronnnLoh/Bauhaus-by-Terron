/**
 * Skills Section
 * Geometric Constructivism Design System
 */

import React, { useState } from 'react';
import { BauhausCard } from './BauhausCard';
import { Circle, Square, Triangle } from 'lucide-react';

interface SkillCategory {
  title: string;
  skills: string[];
  color: 'red' | 'blue' | 'yellow' | 'black' | 'grey';
  icon: 'circle' | 'square' | 'triangle' | 'diamond';
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['Java', 'Python', 'Javascript', 'HTML', 'CSS'],
    color: 'grey',
    icon: 'circle',
  },
  {
    title: 'DevOps & Infrastructure',
    skills: ['Docker', 'Red Hat Openshift', 'CI/CD Pipelines', 'Bitbucket'],
    color: 'grey',
    icon: 'square',
  },
  {
    title: 'Backend & APIs',
    skills: ['REST APIs', 'JSON', 'Kafka messaging', 'Database Management'],
    color: 'grey',
    icon: 'triangle',
  },
  {
    title: 'Tools & Testing',
    skills: ['Postman', 'Swagger UI', 'Github', 'Kibana', 'Collibra', 'ADA'],
    color: 'grey',
    icon: 'diamond',
  },
];

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = category.icon === 'circle' ? Circle : category.icon === 'square' || category.icon === 'diamond' ? Square : Triangle;
  const iconColor = category.color === 'red' ? '#D02020' : category.color === 'blue' ? '#1040C0' : category.color === 'yellow' ? '#F0C020' : '#121212';
  const isDiamond = category.icon === 'diamond';
  
  // Icon box background color based on icon type
  const iconBoxColor = category.icon === 'circle' ? '#D02020' : category.icon === 'square' ? '#1040C0' : category.icon === 'triangle' ? '#F0C020' : '#121212';
  const iconBoxTextColor = category.color === 'yellow' || category.icon === 'triangle' ? '#121212' : '#FFFFFF';

  return (
    <div
      className={`${index % 2 === 0 ? 'animate-slide-in-left' : 'animate-slide-in-right'} ${index % 3 === 0 ? 'grid-break' : ''}`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <BauhausCard color={category.color} className="p-6 h-full">
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-10 h-10 lg:w-12 lg:h-12 border-2 lg:border-4 border-black flex items-center justify-center shadow-[3px_3px_0px_0px_black] transition-all duration-200 ease-out"
            style={{
              backgroundColor: iconBoxColor,
              transform: isHovered ? 'translate(3px, 3px)' : undefined,
              boxShadow: isHovered ? 'none' : '3px 3px 0px 0px black',
            }}
          >
            <IconComponent 
              className="w-5 h-5 lg:w-6 lg:h-6" 
              style={{ 
                color: iconBoxTextColor,
                strokeWidth: 3,
                transform: isDiamond ? 'rotate(45deg)' : undefined,
              }} 
            />
          </div>
          <h3 className="font-display font-bold uppercase">
            {category.title}
          </h3>
        </div>
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
  );
};

export const Skills: React.FC = () => {
  return (
    <section className="section-block section-block-red section-block-skills border-4 border-black">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="mb-12 uppercase">Tech Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
