import { useEffect, useRef } from 'react';

/**
 * useReveal
 * Adds 'visible' class to elements matching selector when they enter viewport.
 * @param {string} selector - CSS selector for elements to observe
 * @param {Object} options - IntersectionObserver options
 */
export default function useReveal(selector = '.reveal', options = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }) {
  const optsRef = useRef(options);
  useEffect(() => { optsRef.current = options; }, [options.threshold, options.rootMargin]);
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(selector));
    if (!('IntersectionObserver' in window) || elements.length === 0) {
      elements.forEach(el => el.classList.add('visible'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, optsRef.current);
    elements.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [selector, optsRef]);
}
