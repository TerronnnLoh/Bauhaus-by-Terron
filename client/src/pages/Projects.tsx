/**
 * Projects Page - Full Page Showcase
 * Geometric Constructivism Design System
 */

import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { BauhausCard } from '@/components/BauhausCard';
import { Footer } from '@/components/Footer';
import { ExternalLink, Github, Globe } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'web' | 'automation' | 'security' | 'software';
  color: 'red' | 'blue' | 'yellow' | 'black' | 'grey';
  year: number;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Workflow Automation',
    description: 'Automated repetitive workflows to reduce manual effort',
    longDescription: 'Developed automated workflows using UiPath to eliminate repetitive manual tasks. Implemented data extraction from multiple sources and automated report generation, reducing processing time by 70%.',
    tags: ['UiPath', 'Automation', 'Data Extraction', 'RPA'],
    category: 'automation',
    color: 'grey',
    year: 2024,
  },
  {
    id: 2,
    title: 'Java Menu Console App',
    description: 'Menu-driven Java console application demonstrating fundamental programming concepts',
    longDescription: 'Built a comprehensive menu-driven console application showcasing object-oriented programming principles. Features include user authentication, data management, and file I/O operations.',
    tags: ['Java', 'OOP', 'Console', 'Data Management'],
    category: 'software',
    color: 'grey',
    year: 2023,
  },
  {
    id: 3,
    title: 'Secure System',
    description: 'Built a secure system with role-based access and data protection',
    longDescription: 'Designed and implemented a secure web application with role-based access control (RBAC). Features include user authentication, authorization, encrypted data storage, and audit logging.',
    tags: ['Python', 'Django', 'Security', 'RBAC'],
    category: 'security',
    color: 'grey',
    year: 2024,
  },
  {
    id: 4,
    title: 'EcoWheels',
    description: 'Secure electric vehicle e-commerce web application implementing OWASP principles',
    longDescription: 'Developed a full-stack e-commerce platform for electric vehicles with security-first approach. Implemented OWASP security guidelines, secure payment processing, and user data protection measures.',
    tags: ['Python', 'Django', 'OWASP', 'E-commerce', 'Security'],
    category: 'web',
    color: 'grey',
    year: 2024,
    link: 'https://example.com/ecowheels',
    github: 'https://github.com/example/ecowheels',
  },
  {
    id: 5,
    title: 'API Integration Platform',
    description: 'RESTful API integration platform for seamless data exchange',
    longDescription: 'Created a robust API integration platform enabling seamless data exchange between multiple services. Implemented rate limiting, authentication, and comprehensive error handling.',
    tags: ['Node.js', 'REST API', 'Express', 'Integration'],
    category: 'web',
    color: 'grey',
    year: 2025,
  },
  {
    id: 6,
    title: 'Data Pipeline Automation',
    description: 'Automated ETL pipeline for data processing and analytics',
    longDescription: 'Built an automated ETL pipeline for processing large datasets. Implemented data validation, transformation rules, and scheduled jobs with monitoring and alerting capabilities.',
    tags: ['Python', 'ETL', 'Data Pipeline', 'Automation'],
    category: 'automation',
    color: 'grey',
    year: 2025,
  },
];

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'web', label: 'Web Development' },
  { value: 'automation', label: 'Automation' },
  { value: 'security', label: 'Security' },
  { value: 'software', label: 'Software' },
];

const categoryColors = {
  web: 'bg-[#1040C0] text-white',
  automation: 'bg-[#D02020] text-white',
  security: 'bg-[#F0C020] text-black',
  software: 'bg-[#121212] text-white',
};

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-block section-block-blue pt-32 pb-16 border-b-4 border-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">Projects</h1>
            <p className="text-white text-lg md:text-xl font-body leading-relaxed">
              A collection of my work showcasing expertise in web development, 
              automation, security, and software engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="section-block section-block-off-white border-b-4 border-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 font-display font-bold uppercase text-sm border-2 border-black transition-all duration-150 ease-out ${
                  selectedCategory === category.value
                    ? categoryColors[category.value as keyof typeof categoryColors]
                    : 'bg-white text-black hover:bg-gray-100'
                } ${
                  selectedCategory === category.value
                    ? 'shadow-[4px_4px_0px_0px_black]'
                    : 'shadow-[2px_2px_0px_0px_black]'
                }`}
                style={{
                  transform: selectedCategory === category.value ? 'translate(2px, 2px)' : undefined,
                  boxShadow: selectedCategory === category.value ? '2px 2px 0px 0px black' : '2px 2px 0px 0px black',
                }}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-block section-block-white border-b-4 border-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="scroll-reveal-up"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <BauhausCard 
                  color={project.color} 
                  className="p-6 h-full flex flex-col sink-hover-child"
                >
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className={`inline-block px-2 py-1 text-xs font-display font-bold uppercase ${categoryColors[project.category as keyof typeof categoryColors]}`}>
                      {project.category}
                    </span>
                    <span className="ml-2 text-xs font-body text-gray-600">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-display font-bold uppercase mb-3 text-lg md:text-xl">
                    {project.title}
                  </h3>
                  
                  <p className="font-body text-sm mb-4 flex-grow leading-relaxed">
                    {project.longDescription}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t-2 border-current">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-body font-semibold bg-white text-black border-2 border-black whitespace-nowrap shadow-[2px_2px_0px_0px_black] transition-all duration-150 ease-out sink-hover-child"
                        style={{
                          transform: hoveredProject === project.id ? 'translate(2px, 2px)' : undefined,
                          boxShadow: hoveredProject === project.id ? 'none' : '2px 2px 0px 0px black',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  {(project.link || project.github) && (
                    <div className="flex gap-3 mt-4 pt-4 border-t-2 border-current">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm font-bold uppercase hover:underline"
                        >
                          <Globe className="w-4 h-4" />
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm font-bold uppercase hover:underline"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>
                  )}
                </BauhausCard>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="font-body text-lg text-gray-600">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-block section-block-off-white border-b-4 border-black">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="mb-4 uppercase">Interested in My Work?</h2>
          <p className="font-body mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or 
            opportunities to be part of your vision.
          </p>
          <a
            href="/#contact"
            className="inline-block btn-bauhaus-primary px-8 py-3"
          >
            Get In Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
