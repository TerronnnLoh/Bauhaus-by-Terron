/**
 * Contact Section
 * Geometric Constructivism Design System
 */

import React, { useState } from 'react';
import { BauhausButton } from './BauhausButton';

interface ContactLinkProps {
  href: string;
  label: string;
  value: string;
  external?: boolean;
}

const ContactLink: React.FC<ContactLinkProps> = ({ href, label, value, external }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="block"
    >
      <div
        className="border-4 border-black p-4 md:p-6 bg-white h-full flex flex-col justify-center transition-all duration-200 ease-out"
        style={{
          transform: isHovered ? 'translate(4px, 4px)' : undefined,
          boxShadow: isHovered ? 'none' : '4px 4px 0px 0px black',
        }}
      >
        <p className="font-display font-bold uppercase mb-2 text-sm md:text-base">{label}</p>
        <p className="font-body text-xs md:text-sm break-all">{value}</p>
      </div>
    </a>
  );
};

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
            <ContactLink
              href="mailto:terronlohanderson@gmail.com"
              label="Email"
              value="terronlohanderson@gmail.com"
            />

            <ContactLink
              href="https://github.com/TerronnnLoh"
              label="GitHub"
              value="TerronnnLoh"
              external
            />

            <ContactLink
              href="https://www.linkedin.com/in/terron-loh-a19b922b3/"
              label="LinkedIn"
              value="Terron Loh"
              external
            />
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
