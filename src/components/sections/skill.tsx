// SkillSection.tsx (Versi Baru yang Jauh Lebih Ringkas)

'use client';

import React from 'react';
import Image from 'next/image';

import { InfiniteScroller } from '../ui/InfiniteScroller';



interface Skill {
  name: string;
  icon: string;
  category: string;
}

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

const SkillCard = ({ skill }: { skill: Skill }) => (
  <div
    className="group flex flex-col items-center p-5 rounded-xl bg-[#1e293b] 
               w-[130px] flex-shrink-0 border border-white/10 
               transition-all duration-300 ease-in-out
               hover:scale-105 hover:border-[#3b82f6]/50 hover:shadow-lg hover:shadow-blue-500/10"
  >
    <div className="w-14 h-14 mb-4 relative">
      <Image
        src={skill.icon}
        alt={skill.name}
        fill
        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>
    <span className="text-sm font-medium text-[#cbd5e1] text-center whitespace-nowrap group-hover:text-white transition-colors">
      {skill.name}
    </span>
  </div>
);

const SkillSection: React.FC = () => {
  return (
    <section id="skill" className="min-h-screen bg-[#0f172a] text-white py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#67e8f9]">
            What I Do?
          </h2>
        </div>

        {/* Programming Languages Row */}
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-[#3b82f6] to-[#22d3ee] rounded-full mr-4"></div>
            <h3 className="text-2xl font-semibold text-[#cbd5e1]">Programming Languages</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-6"></div>
          </div>
          
          {/* Menggunakan InfiniteScroller. Kecepatan negatif = ke kiri */}
          <InfiniteScroller speed={30}>
            {programmingLanguages.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </InfiniteScroller>
        </div>

        {/* Frameworks & Tools Row */}
        <div className="mb-8">
          <div className="flex items-center mb-6">
            <div className="w-2 h-8 bg-gradient-to-b from-[#3b82f6] to-[#22d3ee] rounded-full mr-4"></div>
            <h3 className="text-2xl font-semibold text-[#cbd5e1]">Frameworks & Tools</h3>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent ml-6"></div>
          </div>
          
          {/* Menggunakan InfiniteScroller lagi. Kecepatan positif = ke kanan */}
          <InfiniteScroller speed={-30}>
            {frameworksAndTools.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </InfiniteScroller>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;