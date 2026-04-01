'use client';

import { useEffect, useState } from 'react';

export default function ScrollBackground({ imageSrc }: { imageSrc: string }) {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Get the maximum scrollable distance
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPos = window.scrollY;
      
      // Calculate scroll progress (0 to 1) safely
      const progress = docHeight > 0 ? scrollPos / docHeight : 0;
      
      // Map progress to an even slower scrolling percentage (max 15%)
      setTranslateX(progress * 15);
    };

    // Attach scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call to set position correctly on load
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.35] mix-blend-screen overflow-hidden">
      <div 
        className="h-full w-full bg-no-repeat transition-all duration-100 ease-out will-change-auto opacity-80"
        style={{ 
          backgroundImage: `url('${imageSrc}')`,
          backgroundSize: '150vw auto', /* Forces the image width to be 150% of the screen width, guaranteeing horizontal fill and zooming */
          backgroundPosition: `${translateX}% center`
        }}
      />
    </div>
  );
}
