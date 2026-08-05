import { useEffect, useState } from 'react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 260);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full text-slate-700 border border-black transition-all duration-150 ease-out bg-slate-200 ${
        isVisible ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
      style={{
        backgroundColor: 'var(--bauhaus-muted)',
        transform: isHovered ? 'translate(4px, 4px)' : 'translate(0, 0)',
        boxShadow: isHovered ? 'none' : '4px 4px 0px rgba(0,0,0,0.8)',
      }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="12,3 21,20 3,20"
          fill="transparent"
          stroke="#000000"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}
