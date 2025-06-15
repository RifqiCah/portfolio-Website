'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';

interface Skill {
  name: string;
  icon: string;
}

const SkillSection: React.FC = () => {
  const skills: Skill[] = [
    // Programming Languages
    { name: 'Python', icon: '/icons/python.svg' },
    { name: 'Java', icon: '/icons/java.svg' },
    { name: 'PHP', icon: '/icons/php.svg' },
    { name: 'JavaScript', icon: '/icons/javascript.svg' },
    { name: 'TypeScript', icon: '/icons/typescript.svg' },
    
    // Frameworks & Libraries
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Next.js', icon: '/icons/nextdotjs.svg' },
    { name: 'Node.js', icon: '/icons/nodedotjs.svg' },
    { name: 'Laravel', icon: '/icons/laravel.svg' },
    
    // Database
    { name: 'MySQL', icon: '/icons/mysql.svg' },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  // Auto scroll animation
  const animate = useCallback(() => {
    if (!scrollerRef.current || !isAutoScrolling || isDragging) return;
    
    setCurrentTranslate(prev => {
      const newTranslate = prev - 1; // Speed: 1px per frame
      const maxTranslate = -(skills.length * 136); // 120px width + 16px gap
      
      // Reset for infinite loop
      if (newTranslate <= maxTranslate) {
        return 0;
      }
      
      if (scrollerRef.current) {
        scrollerRef.current.style.transform = `translateX(${newTranslate}px)`;
      }
      
      return newTranslate;
    });
    
    animationRef.current = requestAnimationFrame(animate);
  }, [isAutoScrolling, isDragging, skills.length]);

  // Start auto scroll
  useEffect(() => {
    if (isAutoScrolling && !isDragging) {
      animationRef.current = requestAnimationFrame(animate);
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate, isAutoScrolling, isDragging]);

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(currentTranslate);
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current || !scrollerRef.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply for faster scroll
    const newTranslate = scrollLeft + walk;
    
    setCurrentTranslate(newTranslate);
    scrollerRef.current.style.transform = `translateX(${newTranslate}px)`;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    // Resume auto scroll after 2 seconds
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 2000);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!containerRef.current) return;
    
    setIsDragging(true);
    setIsAutoScrolling(false);
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft);
    setScrollLeft(currentTranslate);
    
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current || !scrollerRef.current) return;
    
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    const newTranslate = scrollLeft + walk;
    
    setCurrentTranslate(newTranslate);
    scrollerRef.current.style.transform = `translateX(${newTranslate}px)`;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    // Resume auto scroll after 2 seconds
    setTimeout(() => {
      setIsAutoScrolling(true);
    }, 2000);
  };

  // Pause/Resume on hover
  const handleMouseEnter = () => {
    if (!isDragging) {
      setIsAutoScrolling(false);
    }
  };

  const handleMouseLeave = () => {
    if (!isDragging) {
      setIsAutoScrolling(true);
    }
  };

  return (
    <section id="skill" className="min-h-screen bg-[#222831] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing projects
          </p>
        </div>

        {/* Interactive Slider */}
        <div className="relative">
          {/* Row 1 - Left to Right */}
          <div 
            ref={containerRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing mb-8 select-none"
            style={{ 
              maskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              ref={scrollerRef}
              className="flex gap-4 transition-transform duration-300 ease-out"
              style={{ 
                width: 'max-content',
                transform: `translateX(${currentTranslate}px)`
              }}
            >
              {/* Original skills */}
              {skills.map((skill, index) => (
                <div
                  key={`original-${skill.name}-${index}`}
                  className="flex flex-col items-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:scale-105 min-w-[120px] flex-shrink-0"
                >
                  <div className="w-12 h-12 mb-3 relative">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 pointer-events-none"
                      draggable={false}
                    />
                  </div>
                  <span className="text-sm text-gray-300 text-center whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
              
              {/* Duplicated skills for infinite effect */}
              {skills.map((skill, index) => (
                <div
                  key={`duplicate-${skill.name}-${index}`}
                  className="flex flex-col items-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:scale-105 min-w-[120px] flex-shrink-0"
                >
                  <div className="w-12 h-12 mb-3 relative">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 pointer-events-none"
                      draggable={false}
                    />
                  </div>
                  <span className="text-sm text-gray-300 text-center whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 - Right to Left (Static CSS Animation) */}
          <div 
            className="overflow-hidden mb-8"
            style={{ 
              maskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)'
            }}
          >
            <div className="flex gap-4 animate-scroll-reverse">
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <div
                  key={`row2-${skill.name}-${index}`}
                  className="flex flex-col items-center p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:scale-105 min-w-[120px] flex-shrink-0"
                >
                  <div className="w-12 h-12 mb-3 relative">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      draggable={false}
                    />
                  </div>
                  <span className="text-sm text-gray-300 text-center whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            {isDragging ? "🖱️ Dragging..." : isAutoScrolling ? "✋ Hover to pause • 👆 Drag to control" : "⏸️ Paused - Will resume in 2s"}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-reverse {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-reverse {
          animation: scroll-reverse 25s linear infinite;
        }
        
        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SkillSection;