'use client';

import { useEffect, useRef } from 'react';

const ParallaxBackground = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parallaxBg = parallaxRef.current;
    if (!parallaxBg) return;

    let ticking = false;

    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.2; // Reduced rate for subtler effect
      parallaxBg.style.transform = `translateY(${rate}px) scale(1.01)`;
      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    // Add event listeners
    window.addEventListener('scroll', requestTick, { passive: true });
    window.addEventListener('resize', requestTick, { passive: true });

    // Initial call
    requestTick();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', requestTick);
      window.removeEventListener('resize', requestTick);
    };
  }, []);

  return (
    <div 
      ref={parallaxRef}
      className="parallax-bg"
      style={{
        transform: 'translateY(0px) scale(1.01)',
        minHeight: '300vh' // Ensure background covers extended content
      }}
    />
  );
};

export default ParallaxBackground; 