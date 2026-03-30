/**
 * Home Page - Terron Loh's Portfolio
 * Geometric Constructivism Design System
 */

import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Experience } from '@/components/Experience';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Education } from '@/components/Education';
import { CCA } from '@/components/CCA';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import React from 'react';

export default function Home() {
  const handleViewWork = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <Hero onViewWork={handleViewWork} onContact={handleContact} />
      </div>
      <div id="about">
        <About />
      </div>
      <Experience />
      <Skills />
      <div id="projects">
        <Projects />
      </div>
      <Education />
      <CCA />
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
