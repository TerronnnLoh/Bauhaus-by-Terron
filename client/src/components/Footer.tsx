/**
 * Footer Component
 * Geometric Constructivism Design System
 */

import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t-4 border-black py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display font-bold uppercase">
            Terron Loh
          </div>

          <p className="font-body text-sm text-gray-300">
            © {currentYear} Built with Bauhaus principles
          </p>

          <div className="flex gap-4">
            <a
              href="https://github.com/TerronnnLoh"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm hover:text-red-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/terron-loh-a19b922b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm hover:text-red-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:terronlohanderson@gmail.com"
              className="font-body text-sm hover:text-red-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
