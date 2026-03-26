/**
 * Contact Section
 * Geometric Constructivism Design System
 */

import React from 'react';
import { BauhausButton } from './BauhausButton';

export const Contact: React.FC = () => {
  return (
    <section className="section-block section-block-yellow">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-black mb-8 uppercase text-3xl md:text-4xl">Let's Build Something</h2>

          <p className="font-body text-base md:text-lg text-black mb-12 leading-relaxed">
            I'm open to internship and freelance projects. Let's collaborate on something
            meaningful.
          </p>

          {/* Contact Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            <a
              href="mailto:terronlohanderson@gmail.com"
              className="group"
            >
              <div className="border-4 border-black p-4 md:p-6 bg-white hover:bg-black hover:text-white transition-colors duration-200 h-full flex flex-col justify-center">
                <p className="font-display font-bold uppercase mb-2 text-sm md:text-base">Email</p>
                <p className="font-body text-xs md:text-sm break-all">
                  terronlohanderson@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://github.com/terronloh"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="border-4 border-black p-4 md:p-6 bg-white hover:bg-black hover:text-white transition-colors duration-200 h-full flex flex-col justify-center">
                <p className="font-display font-bold uppercase mb-2 text-sm md:text-base">GitHub</p>
                <p className="font-body text-xs md:text-sm">github.com/terronloh</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/terron-loh-a19b922b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="border-4 border-black p-4 md:p-6 bg-white hover:bg-black hover:text-white transition-colors duration-200 h-full flex flex-col justify-center">
                <p className="font-display font-bold uppercase mb-2 text-sm md:text-base">LinkedIn</p>
                <p className="font-body text-xs md:text-sm">Terron Loh</p>
              </div>
            </a>
          </div>

          {/* CTA Button */}
          <BauhausButton
            color="black"
            size="md"
            variant="solid"
            onClick={() => window.location.href = 'mailto:terronlohanderson@gmail.com'}
            className="w-full sm:w-auto"
          >
            Get In Touch
          </BauhausButton>
        </div>
      </div>
    </section>
  );
};
