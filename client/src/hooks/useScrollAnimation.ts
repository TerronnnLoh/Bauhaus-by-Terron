/**
 * useScrollAnimation Hook
 * Triggers animations when elements enter viewport
 */

import { useEffect, useRef } from 'react';

export const useScrollAnimation = (className: string = 'animate-slide-in-left') => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [className]);

  return ref;
};

/**
 * useScrollAnimationMultiple Hook
 * Triggers animations on multiple elements when they enter viewport
 * Adds animation on scroll in, removes on scroll out
 */
export const useScrollAnimationMultiple = (
  className: string = 'animate-slide-in-left',
  count: number
) => {
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
          } else {
            entry.target.classList.remove(className);
          }
        });
      },
      {
        threshold: 0.05,
      }
    );

    refs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      refs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, [className, count]);

  return refs;
};
