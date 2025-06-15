'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';

interface Skill {
  name: string;
  icon: string;
  category: string;
}

const SkillSection: React.FC = () => {
  const programmingLanguages: Skill[] = [
    { name: 'Python', icon: '/icons/python.svg', category: 'language' },
    { name: 'Java', icon: '/icons/java.svg', category: 'language' },
    { name: 'PHP', icon: '/icons/php.svg', category: 'language' },
    { name: 'JavaScript', icon: '/icons/javascript.svg', category: 'language' },
    { name: 'TypeScript', icon: '/icons/typescript.svg', category: 'language' },
  ];

  const frameworksAndTools: Skill[] = [
    { name: 'React', icon: '/icons/react.svg', category: 'framework' },
    { name: 'Next.js', icon: '/icons/nextdotjs.svg', category: 'framework' },
    { name: 'Node.js', icon: '/icons/nodedotjs.svg', category: 'framework' },
    { name: 'Laravel', icon: '/icons/laravel.svg', category: 'framework' },
    { name: 'MySQL', icon: '/icons/mysql.svg', category: 'database' },
  ];

  // Refs for both rows
  const containerRef1 = useRef<HTMLDivElement>(null);
  const scrollerRef1 = useRef<HTMLDivElement>(null);
  const containerRef2 = useRef<HTMLDivElement>(null);
  const scrollerRef2 = useRef<HTMLDivElement>(null);
  
  const animationRef1 = useRef<number | null>(null);
  const animationRef2 = useRef<number | null>(null);
  
  // States for Row 1 (Programming Languages)
  const [isDragging1, setIsDragging1] = useState(false);
  const [startX1, setStartX1] = useState(0);
  const [scrollLeft1, setScrollLeft1] = useState(0);
  const [currentTranslate1, setCurrentTranslate1] = useState(0);
  const [isAutoScrolling1, setIsAutoScrolling1] = useState(true);

  // States for Row 2 (Frameworks & Tools)
  const [isDragging2, setIsDragging2] = useState(false);
  const [startX2, setStartX2] = useState(0);
  const [scrollLeft2, setScrollLeft2] = useState(0);
  const [currentTranslate2, setCurrentTranslate2] = useState(0);
  const [isAutoScrolling2, setIsAutoScrolling2] = useState(true);

  // Animation for Row 1 (Left to Right) - Seamless infinite scroll
  const animate1 = useCallback(() => {
    if (!scrollerRef1.current || !isAutoScrolling1 || isDragging1) return;
    
    setCurrentTranslate1(prev => {
      const itemWidth = 150; // 130px width + 20px gap
      const singleSetWidth = programmingLanguages.length * itemWidth;
      const newTranslate = prev - 1; // Speed: 1px per frame
      
      // Seamless reset when we've scrolled one full set
      if (newTranslate <= -singleSetWidth) {
        const resetTranslate = newTranslate + singleSetWidth;
        if (scrollerRef1.current) {
          scrollerRef1.current.style.transform = `translateX(${resetTranslate}px)`;
        }
        return resetTranslate;
      }
      
      if (scrollerRef1.current) {
        scrollerRef1.current.style.transform = `translateX(${newTranslate}px)`;
      }
      
      return newTranslate;
    });
    
    animationRef1.current = requestAnimationFrame(animate1);
  }, [isAutoScrolling1, isDragging1, programmingLanguages.length]);

  // Animation for Row 2 (Right to Left) - Seamless infinite scroll
  const animate2 = useCallback(() => {
    if (!scrollerRef2.current || !isAutoScrolling2 || isDragging2) return;
    
    setCurrentTranslate2(prev => {
      const itemWidth = 150; // 130px width + 20px gap
      const singleSetWidth = frameworksAndTools.length * itemWidth;
      const newTranslate = prev + 1; // Speed: 1px per frame (opposite direction)
      
      // Seamless reset when we've scrolled one full set
      if (newTranslate >= 0) {
        const resetTranslate = newTranslate - singleSetWidth;
        if (scrollerRef2.current) {
          scrollerRef2.current.style.transform = `translateX(${resetTranslate}px)`;
        }
        return resetTranslate;
      }
      
      if (scrollerRef2.current) {
        scrollerRef2.current.style.transform = `translateX(${newTranslate}px)`;
      }
      
      return newTranslate;
    });
    
    animationRef2.current = requestAnimationFrame(animate2);
  }, [isAutoScrolling2, isDragging2, frameworksAndTools.length]);

  // Start auto scroll for both rows
  useEffect(() => {
    if (isAutoScrolling1 && !isDragging1) {
      animationRef1.current = requestAnimationFrame(animate1);
    }
    
    return () => {
      if (animationRef1.current) {
        cancelAnimationFrame(animationRef1.current);
      }
    };
  }, [animate1, isAutoScrolling1, isDragging1]);

  useEffect(() => {
    if (isAutoScrolling2 && !isDragging2) {
      animationRef2.current = requestAnimationFrame(animate2);
    }
    
    return () => {
      if (animationRef2.current) {
        cancelAnimationFrame(animationRef2.current);
      }
    };
  }, [animate2, isAutoScrolling2, isDragging2]);

  // Mouse events for Row 1
  const handleMouseDown1 = (e: React.MouseEvent) => {
    if (!containerRef1.current) return;
    
    setIsDragging1(true);
    setIsAutoScrolling1(false);
    setStartX1(e.pageX - containerRef1.current.offsetLeft);
    setScrollLeft1(currentTranslate1);
    
    if (animationRef1.current) {
      cancelAnimationFrame(animationRef1.current);
    }
  };

  const handleMouseMove1 = (e: React.MouseEvent) => {
    if (!isDragging1 || !containerRef1.current || !scrollerRef1.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef1.current.offsetLeft;
    const walk = (x - startX1) * 2;
    let newTranslate = scrollLeft1 + walk;
    
    // Seamless infinite boundaries for manual drag
    const itemWidth = 150;
    const singleSetWidth = programmingLanguages.length * itemWidth;
    
    // If dragged too far left, wrap around to right
    if (newTranslate <= -singleSetWidth) {
      newTranslate = newTranslate + singleSetWidth;
      setScrollLeft1(prev => prev + singleSetWidth);
    }
    // If dragged too far right, wrap around to left  
    else if (newTranslate >= itemWidth) {
      newTranslate = newTranslate - singleSetWidth;
      setScrollLeft1(prev => prev - singleSetWidth);
    }
    
    setCurrentTranslate1(newTranslate);
    scrollerRef1.current.style.transform = `translateX(${newTranslate}px)`;
  };

  const handleMouseUp1 = () => {
    setIsDragging1(false);
    setTimeout(() => {
      setIsAutoScrolling1(true);
    }, 2000);
  };

  // Mouse events for Row 2
  const handleMouseDown2 = (e: React.MouseEvent) => {
    if (!containerRef2.current) return;
    
    setIsDragging2(true);
    setIsAutoScrolling2(false);
    setStartX2(e.pageX - containerRef2.current.offsetLeft);
    setScrollLeft2(currentTranslate2);
    
    if (animationRef2.current) {
      cancelAnimationFrame(animationRef2.current);
    }
  };

  const handleMouseMove2 = (e: React.MouseEvent) => {
    if (!isDragging2 || !containerRef2.current || !scrollerRef2.current) return;
    
    e.preventDefault();
    const x = e.pageX - containerRef2.current.offsetLeft;
    const walk = (x - startX2) * 2;
    let newTranslate = scrollLeft2 + walk;
    
    // Seamless infinite boundaries for manual drag
    const itemWidth = 150;
    const singleSetWidth = frameworksAndTools.length * itemWidth;
    
    // If dragged too far right, wrap around to left
    if (newTranslate >= 0) {
      newTranslate = newTranslate - singleSetWidth;
      setScrollLeft2(prev => prev - singleSetWidth);
    }
    // If dragged too far left, wrap around to right
    else if (newTranslate <= -singleSetWidth * 2) {
      newTranslate = newTranslate + singleSetWidth;
      setScrollLeft2(prev => prev + singleSetWidth);
    }
    
    setCurrentTranslate2(newTranslate);
    scrollerRef2.current.style.transform = `translateX(${newTranslate}px)`;
  };

  const handleMouseUp2 = () => {
    setIsDragging2(false);
    setTimeout(() => {
      setIsAutoScrolling2(true);
    }, 2000);
  };

  // Touch events for Row 1
  const handleTouchStart1 = (e: React.TouchEvent) => {
    if (!containerRef1.current) return;
    
    setIsDragging1(true);
    setIsAutoScrolling1(false);
    setStartX1(e.touches[0].pageX - containerRef1.current.offsetLeft);
    setScrollLeft1(currentTranslate1);
    
    if (animationRef1.current) {
      cancelAnimationFrame(animationRef1.current);
    }
  };

  const handleTouchMove1 = (e: React.TouchEvent) => {
    if (!isDragging1 || !containerRef1.current || !scrollerRef1.current) return;
    
    const x = e.touches[0].pageX - containerRef1.current.offsetLeft;
    const walk = (x - startX1) * 2;
    let newTranslate = scrollLeft1 + walk;
    
    // Seamless infinite boundaries for touch drag
    const itemWidth = 150;
    const singleSetWidth = programmingLanguages.length * itemWidth;
    
    // If dragged too far left, wrap around to right
    if (newTranslate <= -singleSetWidth) {
      newTranslate = newTranslate + singleSetWidth;
      setScrollLeft1(prev => prev + singleSetWidth);
    }
    // If dragged too far right, wrap around to left  
    else if (newTranslate >= itemWidth) {
      newTranslate = newTranslate - singleSetWidth;
      setScrollLeft1(prev => prev - singleSetWidth);
    }
    
    setCurrentTranslate1(newTranslate);
    scrollerRef1.current.style.transform = `translateX(${newTranslate}px)`;
  };

  const handleTouchEnd1 = () => {
    setIsDragging1(false);
    setTimeout(() => {
      setIsAutoScrolling1(true);
    }, 2000);
  };

  // Touch events for Row 2
  const handleTouchStart2 = (e: React.TouchEvent) => {
    if (!containerRef2.current) return;
    
    setIsDragging2(true);
    setIsAutoScrolling2(false);
    setStartX2(e.touches[0].pageX - containerRef2.current.offsetLeft);
    setScrollLeft2(currentTranslate2);
    
    if (animationRef2.current) {
      cancelAnimationFrame(animationRef2.current);
    }
  };

  const handleTouchMove2 = (e: React.TouchEvent) => {
    if (!isDragging2 || !containerRef2.current || !scrollerRef2.current) return;
    
    const x = e.touches[0].pageX - containerRef2.current.offsetLeft;
    const walk = (x - startX2) * 2;
    let newTranslate = scrollLeft2 + walk;
    
    // Seamless infinite boundaries for touch drag
    const itemWidth = 150;
    const singleSetWidth = frameworksAndTools.length * itemWidth;
    
    // If dragged too far right, wrap around to left
    if (newTranslate >= 0) {
      newTranslate = newTranslate - singleSetWidth;
      setScrollLeft2(prev => prev - singleSetWidth);
    }
    // If dragged too far left, wrap around to right
    else if (newTranslate <= -singleSetWidth * 2) {
      newTranslate = newTranslate + singleSetWidth;
      setScrollLeft2(prev => prev + singleSetWidth);
    }
    
    setCurrentTranslate2(newTranslate);
    scrollerRef2.current.style.transform = `translateX(${newTranslate}px)`;
  };

  const handleTouchEnd2 = () => {
    setIsDragging2(false);
    setTimeout(() => {
      setIsAutoScrolling2(true);
    }, 2000);
  };

  // Hover events for Row 1
  const handleMouseEnter1 = () => {
    if (!isDragging1) {
      setIsAutoScrolling1(false);
    }
  };

  const handleMouseLeave1 = () => {
    if (!isDragging1) {
      setIsAutoScrolling1(true);
    }
  };

  // Hover events for Row 2
  const handleMouseEnter2 = () => {
    if (!isDragging2) {
      setIsAutoScrolling2(false);
    }
  };

  const handleMouseLeave2 = () => {
    if (!isDragging2) {
      setIsAutoScrolling2(true);
    }
  };

  const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => (
    <div
      className="flex flex-col items-center p-5 rounded-xl bg-gradient-to-br from-gray-800/60 to-gray-900/60 hover:from-[#00adb5]/50 hover:to-[#00b8c2]/50 transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-[130px] flex-shrink-0 border border-gray-700/50 hover:border-[#00adb5]/40"
    >
      <div className="w-14 h-14 mb-4 relative">
        <Image
          src={skill.icon}
          alt={skill.name}
          fill
          className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 pointer-events-none"
          draggable={false}
        />
      </div>
      <span className="text-sm font-medium text-gray-200 text-center whitespace-nowrap">
        {skill.name}
      </span>
    </div>
  );

  return (
    <section id="skill" className="min-h-screen bg-[#222831] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What I Do?
          </h2>
          
        </div>

        {/* Programming Languages Row */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-4"></div>
            <h3 className="text-2xl font-semibold text-gray-200">Programming Languages</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent ml-6"></div>
          </div>
          
          <div 
            ref={containerRef1}
            className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
            style={{ 
              maskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)'
            }}
            onMouseDown={handleMouseDown1}
            onMouseMove={handleMouseMove1}
            onMouseUp={handleMouseUp1}
            onMouseLeave={handleMouseLeave1}
            onMouseEnter={handleMouseEnter1}
            onTouchStart={handleTouchStart1}
            onTouchMove={handleTouchMove1}
            onTouchEnd={handleTouchEnd1}
          >
            <div 
              ref={scrollerRef1}
              className="flex gap-5 transition-transform duration-300 ease-out"
              style={{ 
                width: 'max-content',
                transform: `translateX(${currentTranslate1}px)`
              }}
            >
              {/* Triple buffer for seamless infinite scroll */}
              {programmingLanguages.map((skill, index) => (
                <SkillCard key={`lang-set1-${skill.name}-${index}`} skill={skill} index={index} />
              ))}
              
              {/* Second set for seamless transition */}
              {programmingLanguages.map((skill, index) => (
                <SkillCard key={`lang-set2-${skill.name}-${index}`} skill={skill} index={index} />
              ))}
              
              {/* Third set for extra smooth infinite effect */}
              {programmingLanguages.map((skill, index) => (
                <SkillCard key={`lang-set3-${skill.name}-${index}`} skill={skill} index={index} />
              ))}
              
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-gray-500 text-xs">
              {isDragging1 ? "Dragging..." : isAutoScrolling1 ? "← Auto-scrolling • Hover to pause • Drag to control" : "⏸Paused - Will resume in 2s"}
            </p>
          </div>
        </div>

        {/* Frameworks & Tools Row */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-teal-600 rounded-full mr-4"></div>
            <h3 className="text-2xl font-semibold text-gray-200">Frameworks & Tools</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-gray-600 to-transparent ml-6"></div>
          </div>
          
          <div 
            ref={containerRef2}
            className="overflow-hidden cursor-grab active:cursor-grabbing select-none"
            style={{ 
              maskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, white 10%, white 90%, transparent 100%)'
            }}
            onMouseDown={handleMouseDown2}
            onMouseMove={handleMouseMove2}
            onMouseUp={handleMouseUp2}
            onMouseLeave={handleMouseLeave2}
            onMouseEnter={handleMouseEnter2}
            onTouchStart={handleTouchStart2}
            onTouchMove={handleTouchMove2}
            onTouchEnd={handleTouchEnd2}
          >
            <div 
              ref={scrollerRef2}
              className="flex gap-5 transition-transform duration-300 ease-out"
              style={{ 
                width: 'max-content',
                transform: `translateX(${currentTranslate2}px)`
              }}
            >
              {/* Triple buffer for seamless infinite scroll */}
              {frameworksAndTools.map((skill, index) => (
                <SkillCard key={`framework-set1-${skill.name}-${index}`} skill={skill} index={index} />
              ))}
              
              {/* Second set for seamless transition */}
              {frameworksAndTools.map((skill, index) => (
                <SkillCard key={`framework-set2-${skill.name}-${index}`} skill={skill} index={index} />
              ))}
              
              {/* Third set for extra smooth infinite effect */}
              {frameworksAndTools.map((skill, index) => (
                <SkillCard key={`framework-set3-${skill.name}-${index}`} skill={skill} index={index} />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-4">
            <p className="text-gray-500 text-xs">
              {isDragging2 ? "Dragging..." : isAutoScrolling2 ? "Auto-scrolling → • Hover to pause • Drag to control" : "⏸Paused - Will resume in 2s"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;