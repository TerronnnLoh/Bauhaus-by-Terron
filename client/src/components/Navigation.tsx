/**
 * Navigation Component
 * Geometric Constructivism Design System
 */

import React, { useState } from 'react';
import { BauhausButton } from './BauhausButton';
import { GeometricShape } from './GeometricShape';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
      <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <GeometricShape type="circle" color="red" size={20} borderColor="#000000" borderWidth={3} />
            <GeometricShape type="square" color="blue" size={20} borderColor="#000000" borderWidth={3} />
            <GeometricShape type="square" color="yellow" size={20} className="rotate-45" borderColor="#000000" borderWidth={3} />
            <span className="font-display font-bold text-xl uppercase">TL</span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleScroll(item.href)}
              className="font-display font-bold uppercase text-sm hover:text-red-600 transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden font-display font-bold uppercase text-sm border-2 border-black px-3 py-1 shadow-[4px_4px_0px_rgba(0,0,0,0.4)] hover:shadow-[6px_6px_0px_rgba(0,0,0,0.6)]"
          style={{ backgroundColor: '#D02020', color: 'white' }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t-4 border-black bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleScroll(item.href)}
                className="font-display font-bold uppercase text-left py-2 hover:text-red-600 transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
