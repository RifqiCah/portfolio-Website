'use client';

import React, { useEffect, useRef } from 'react';
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
    // { name: 'Django', icon: '/icons/django.svg' },
    
    // Database
    { name: 'MySQL', icon: '/icons/mysql.svg' },
  ];

  const scrollerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Duplicate items for infinite scroll
    const scrollerInner = scroller.querySelector('.scroller-inner') as HTMLElement;
    if (!scrollerInner) return;

    const scrollerContent = Array.from(scrollerInner.children);
    
    // Clone items for seamless loop
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true) as HTMLElement;
      duplicatedItem.setAttribute('aria-hidden', 'true');
      scrollerInner.appendChild(duplicatedItem);
    });

    // Auto scroll animation
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // Adjust speed here

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= scrollerInner.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollerInner.style.transform = `translateX(-${scrollPosition}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };

    const handleMouseLeave = () => {
      animationRef.current = requestAnimationFrame(animate);
    };

    scroller.addEventListener('mouseenter', handleMouseEnter);
    scroller.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      scroller.removeEventListener('mouseenter', handleMouseEnter);
      scroller.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

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

        {/* Infinite Scroll Skills */}
        <div className="relative overflow-hidden">
          {/* First Row */}
          <div 
            ref={scrollerRef}
            className="scroller mb-8 overflow-hidden"
            style={{ maskImage: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)' }}
          >
            <div className="scroller-inner flex gap-8 w-max animate-none">
              {skills.slice(0, 6).map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex flex-col items-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:scale-105 min-w-[120px]"
                >
                  <div className="w-12 h-12 mb-3 relative">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                  <span className="text-sm text-gray-300 text-center whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row (Reverse Direction) */}
          <div 
            className="scroller overflow-hidden"
            style={{ 
              maskImage: 'linear-gradient(90deg, transparent, white 20%, white 80%, transparent)',
              animation: 'scroll-reverse 20s linear infinite'
            }}
          >
            <div className="scroller-inner flex gap-8 w-max">
              {[...skills.slice(6), ...skills.slice(6)].map((skill, index) => (
                <div
                  key={`${skill.name}-row2-${index}`}
                  className="flex flex-col items-center p-6 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 hover:scale-105 min-w-[120px]"
                >
                  <div className="w-12 h-12 mb-3 relative">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      fill
                      className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
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

        {/* Touch Instructions */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            Hover to pause • Touch and drag on mobile
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
        
        .scroller:hover .scroller-inner {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SkillSection;