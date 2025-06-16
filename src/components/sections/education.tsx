'use client';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Tipe data untuk pendidikan
interface EducationItem {
  degree: string;
  university: string;
  period: string;
  description: string;
}

// Data pendidikan
const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Computer Science",
    university: "Brawijaya University",
    period: "August 2023 - present",
    description: "Actively pursuing a comprehensive computer science degree with a focus on full-stack web development and machine learning."
  },
  {
    degree: "High School Natural Science",
    university: "SMA Negeri 2 Jombang",
    period: "July 2021 - June 2023",
    description: "Active in organizing scientific papers."
  }
];

export default function EducationSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    // (Logika animasi tidak diubah)
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    educationData.forEach((_, index) => {
      setTimeout(() => {
        setVisibleItems(prev => [...prev, index]);
      }, 300 + (index * 200));
    });

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="education"
      // Ganti #1A1A1D -> #0f172a
      className="w-full min-h-screen flex items-center justify-center bg-[#0f172a] p-4 sm:p-6 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Ganti #00ADB5 -> #3b82f6 (Biru) */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#3b82f6] rounded-full opacity-[0.03] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-[#3b82f6] rounded-full opacity-[0.02] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#3b82f6] rounded-full opacity-[0.01] animate-ping delay-2000"></div>
      </div>

      <div className="max-w-4xl w-full relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 
            // Ganti text-[#00ADB5] -> text-[#60a5fa] (Biru lebih terang untuk teks)
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[#60a5fa] relative transform transition-all duration-1000 ease-out ${
              isVisible 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{
              textShadow: '0 0 20px rgba(59, 130, 246, 0.3)', // Ganti shadow ke warna biru
              transitionDelay: '0.2s'
            }}
          >
            Education
            <div 
              // Ganti via-[#00ADB5] -> via-[#3b82f6]
              className={`absolute -bottom-2 left-1/2 h-1 bg-gradient-to-r from-transparent via-[#3b82f6] to-transparent transform -translate-x-1/2 transition-all duration-1000 ease-out ${
                isVisible ? 'w-32 opacity-100' : 'w-0 opacity-0'
              }`}
              style={{ transitionDelay: '0.8s' }}
            ></div>
          </h2>
        </div>
        
        <div className="relative">
          <div 
            // Ganti via-[#00ADB5] -> via-[#3b82f6]
            className={`absolute left-6 sm:left-8 top-0 w-0.5 bg-gradient-to-b from-transparent via-[#3b82f6] to-transparent transform transition-all duration-1500 ease-out ${
              isVisible ? 'h-full opacity-100 scale-y-100' : 'h-0 opacity-0 scale-y-0'
            }`}
            style={{ 
              transformOrigin: 'top',
              transitionDelay: '0.5s',
              boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)' // Ganti shadow ke warna biru
            }}
          ></div>

          <ol className="relative space-y-8 sm:space-y-12">
            {educationData.map((edu, index) => (
              <li 
                key={index} 
                className={`relative transform transition-all duration-800 ease-out ${
                  visibleItems.includes(index) ? 'translate-x-0 translate-y-0 opacity-100 scale-100' : 'translate-x-8 translate-y-4 opacity-0 scale-95'
                }`}
                style={{ transitionDelay: `${0.3 + (index * 0.2)}s` }}
              >
                <div 
                  className={`absolute left-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transform transition-all duration-600 ease-out ${
                    visibleItems.includes(index) ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-45 opacity-0'
                  }`}
                  style={{ transitionDelay: `${0.5 + (index * 0.2)}s` }}
                >
                  <div className="w-4 h-4 bg-[#3b82f6] rounded-full relative">
                    <div className="absolute inset-0 bg-[#3b82f6] rounded-full animate-ping opacity-75"></div>
                    <div className="absolute inset-0 bg-[#3b82f6] rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                <div 
                  className={`ml-16 sm:ml-20 group cursor-pointer transform transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-2 ${
                    visibleItems.includes(index) ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${0.7 + (index * 0.2)}s` }}
                >
                  {/* Ganti bg, border */}
                  <div className="bg-[#1e293b] backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-[#3b82f6]/10 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
                         style={{
                            backgroundImage: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
                            backgroundSize: '200% 200%',
                            animation: 'shimmer 2s ease-in-out infinite'
                          }}>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-start mb-4 group-hover:transform group-hover:translate-x-1 transition-transform duration-300">
                        {/* Ganti bg, text */}
                        <div className="mr-3 mt-1 p-2 bg-[#3b82f6]/10 rounded-lg group-hover:bg-[#3b82f6]/20 transition-colors duration-300">
                          <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-[#60a5fa]" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-[#60a5fa] leading-tight transition-colors duration-300">
                          {edu.degree}
                        </h3>
                      </div>
                      
                      {/* Ganti text, bg */}
                      <div className="flex items-center mb-3 text-white group-hover:transform group-hover:translate-x-1 transition-transform duration-300 delay-75">
                        <div className="mr-3 p-1.5 bg-white/10 rounded-lg">
                          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <span className="text-base sm:text-lg font-medium">{edu.university}</span>
                      </div>
                      
                      {/* Ganti text, bg */}
                      <div className="flex items-center mb-5 text-white/70 group-hover:transform group-hover:translate-x-1 transition-transform duration-300 delay-100">
                        <div className="mr-3 p-1.5 bg-white/5 rounded-lg">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-white/70" />
                        </div>
                        <span className="text-sm sm:text-base italic">{edu.period}</span>
                      </div>
                      
                      {/* Ganti text */}
                      <p className="text-[#cbd5e1] text-sm sm:text-base leading-relaxed ml-10 sm:ml-12 group-hover:text-white transition-colors duration-300">
                        {edu.description}
                      </p>
                    </div>

                    <div className="absolute top-4 right-4 w-2 h-2 bg-[#60a5fa] rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300"></div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="absolute top-20 right-10 w-1 h-1 bg-[#3b82f6] rounded-full animate-ping opacity-60 hidden sm:block"></div>
        <div className="absolute bottom-20 left-10 w-1.5 h-1.5 bg-[#3b82f6] rounded-full animate-pulse opacity-40 delay-1000 hidden sm:block"></div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% -200%; }
          100% { background-position: 200% 200%; }
        }
      `}</style>
    </section>
  );
}