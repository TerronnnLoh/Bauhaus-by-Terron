/**
 * Hobbies Page - Creative Projects Showcase
 * Geometric Constructivism Design System
 */

import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { BauhausCard } from '@/components/BauhausCard';
import { Footer } from '@/components/Footer';
import { ExternalLink, Github, Globe } from 'lucide-react';

interface HobbyProject {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: 'aquascaping' | 'crafts' | 'art' | 'diy';
  color: 'red' | 'blue' | 'yellow' | 'black' | 'grey';
  year: number;
  image?: string;
  link?: string;
  github?: string;
}

const projects: HobbyProject[] = [
  {
    id: 1,
    title: 'Planted Aquascape Design',
    description: 'High-tech planted aquarium with intricate hardscape and plant composition',
    longDescription: 'Designed and maintained a 60cm planted aquascape featuring a layered rock formation, precision planted aquatic flora, and specialized CO2 injection system. The design showcases aquatic landscaping principles with careful attention to plant growth rates and visual composition.',
    tags: ['Aquascaping', 'Aquatic Plants', 'Hardscape Design', 'Aqua Techniques'],
    category: 'aquascaping',
    color: 'blue',
    year: 2024,
    image: '/images/testphoto1.png',
  },
  {
    id: 2,
    title: 'Minimalist Aquatic Setup',
    description: 'Serene aquascape with minimalist design and slow-growing plants',
    longDescription: 'Created a minimalist 40cm aquascape with carefully selected low-light aquatic plants and driftwood. This design emphasizes negative space and natural balance, creating a peaceful focal point with low-maintenance requirements.',
    tags: ['Aquascaping', 'Minimalism', 'Low-Tech Setup', 'Plant Care'],
    category: 'aquascaping',
    color: 'blue',
    year: 2025,
  },
  {
    id: 3,
    title: 'Handcrafted Ceramic Pieces',
    description: 'Collection of hand-thrown pottery and ceramic decorative items',
    longDescription: 'Hand-crafted ceramic collection including functional pottery, decorative bowls, and sculptural pieces. Each piece demonstrates traditional pottery techniques with contemporary design aesthetics.',
    tags: ['Ceramics', 'Pottery', 'Hand-Crafted', 'Sculpture'],
    category: 'crafts',
    color: 'red',
    year: 2025,
  },
  {
    id: 4,
    title: 'DIY Furniture Restoration',
    description: 'Restoration and upcycling of vintage wooden furniture',
    longDescription: 'Restored and upcycled vintage wooden furniture pieces, combining traditional woodworking techniques with modern design elements. Each project includes refinishing, structural repairs, and custom modifications.',
    tags: ['Woodworking', 'Furniture', 'Restoration', 'Upcycling'],
    category: 'diy',
    color: 'yellow',
    year: 2024,
  },
  {
    id: 5,
    title: 'Abstract Mixed Media Art',
    description: 'Contemporary abstract artwork combining various media and techniques',
    longDescription: 'Created a series of abstract mixed media pieces using acrylic, collage, and found materials. The collection explores color theory, composition, and textural contrast through experimental artistic methods.',
    tags: ['Mixed Media', 'Abstract Art', 'Collage', 'Contemporary'],
    category: 'art',
    color: 'red',
    year: 2024,
  },
  {
    id: 6,
    title: 'Terrarium Ecosystem Design',
    description: 'Closed-system terrarium with living plants and natural materials',
    longDescription: 'Designed and assembled multiple closed-system terrariums featuring layered substrates, plant selections, and moss ecosystems. These living displays require minimal maintenance while maintaining a balanced environmental ecosystem.',
    tags: ['Terrarium', 'Plant Design', 'Ecosystem', 'Nature DIY'],
    category: 'crafts',
    color: 'blue',
    year: 2025,
  },
];

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'aquascaping', label: 'Aquascaping' },
  { value: 'crafts', label: 'Crafts' },
  { value: 'art', label: 'Art' },
  { value: 'diy', label: 'DIY' },
];

const categoryColors = {
  aquascaping: 'bg-[#1040C0] text-white',
  crafts: 'bg-[#D02020] text-white',
  art: 'bg-[#F0C020] text-black',
  diy: 'bg-[#121212] text-white',
};

export default function HobbiesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="section-block section-block-red pt-32 pb-16 border-b-4 border-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl">
            <h1 className="text-white mb-6">Creative Projects</h1>
            <p className="text-white text-lg md:text-xl font-body leading-relaxed">
              A showcase of my creative hobbies and personal projects, including aquascaping, 
              crafts, art, and DIY creations that reflect my passion for design and creativity.
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
                className="scroll-reveal-up in-view"
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

                  {/* Project Image */}
                  {project.image && (
                    <div className="mb-4 -mx-6 -mt-6">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover border-b-2 border-current"
                      />
                    </div>
                  )}
                  
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
                          View
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
                          Details
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
          <h2 className="mb-4 uppercase">Want to Chat About Creative Projects?</h2>
          <p className="font-body mb-8 max-w-2xl mx-auto">
            I'm passionate about sharing my creative journey and collaborating with 
            others who share interests in design, craftsmanship, and artistic expression.
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
