"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Github, Image as ImageIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Project data type
interface Project {
  title: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  images: string[];
  githubLink: string;
}

// Projects data array
const projects: Project[] = [
  {
    title: "Money_plus",
    location: "Brawijaya University",
    period: "June 2025",
    description: "This is my portfolio website include my professional experience, project, education and some articel",
    technologies: ["Tailwind CSS","JavaScript","PHP","Laravel"],
    images: [
      "/money1.jpeg", 
      "/money2.jpeg", 
      "/money3.jpeg",
      "/money4.jpeg",
      "/money5.jpeg"
    ],
    githubLink: "https://github.com/RifqiCah/money_plus.git"
  },
  {
    title: "Healthcare",
    location: "Brawijaya University",
    period: "Mey 2025 - June 2025",
    description: "This is my portfolio website include my professional experience, project, education and some articel",
    technologies: ["Tailwind CSS","JavaScript","TypeScript","NextJs","ReactJs"],
    images: [
      "/1-portfolio.jpg", 
      "/2-portfolio.jpg", 
      "/3-portfolio.jpg",
      "/4-portfolio.jpg"
    ],
    githubLink: "https://github.com/RifqiCah/PengembanganAplikasiWeb.git"
  },
  {
    title: "My Portfolio Website",
    location: "Brawijaya University",
    period: "August 2023 - December 2023",
    description: "This is my portfolio website include my professional experience, project, education and some articel",
    technologies: ["Tailwind CSS","JavaScript","TypeScript","NextJs","ReactJs"],
    images: [
      "/1-portfolio.jpg", 
      "/2-portfolio.jpg", 
      "/3-portfolio.jpg",
      "/4-portfolio.jpg"
    ],
    githubLink: "https://github.com/RifqiCah/PengembanganAplikasiWeb.git"
  },
  {
    title: "Frontend Project",
    location: "Brawijaya University",
    period: "August 2023 - December 2023",
    description: "This is an educational project created as part of my studies, where I replicated the design of Medium.com using HTML and CSS",
    technologies: ["CSS","HTML"],
    images: [
      "/1-medium.jpg", 
      "/2-medium.jpg", 
      "/3-medium.jpg"
    ],
    githubLink: "https://github.com/RifqiCah/PengembanganAplikasiWeb.git"
  },
  {
    title: "UNITE: Innovative Pokémon game",
    location: "Brawijaya University",
    period: "August 2023 - December 2023",
    description: "UNITE is an innovative Pokémon game. This game features various elements, including the ability to save and load progress, and battle ",
    technologies: ["Java", "GUI"],
    images: [
      "/1-unite.jpg", 
      "/2-unite.jpg", 
      "/3-unite.jpg"
    ],
    githubLink: "https://github.com/yourusername/portfolio"
  }
];

export default function ProjectSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(projects[0]);

  return (
    <section 
      id="projects" 
      className="w-full min-h-screen flex items-center justify-center bg-[#1A1A1D] p-4 sm:p-6 lg:p-8"
    >
      <div className="max-w-7xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 sm:mb-10 lg:mb-12 text-center text-[#00ADB5]"
        >
          My Projects
        </motion.h2>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Project List */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-2 lg:order-1"
            
          
          >
            {/* Mobile/Tablet Horizontal Scroll */}
            <div className="lg:hidden" data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-delay="200"
                    data-aos-anchor-placement="top-bottom">
              <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-[#00ADB5] scrollbar-track-[#393E46]">
                {projects.map((project, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
                      cursor-pointer p-4 rounded-xl transition-all duration-300 min-w-[250px] sm:min-w-[300px]
                      ${selectedProject === project 
                        ? 'bg-[#00ADB5] text-[#222831]' 
                        : 'bg-[#393E46] text-[#EEEEEE] hover:bg-[#00ADB5]/20'}
                    `}
                    onClick={() => setSelectedProject(project)}
                    
                  >
                    <div className="flex items-center mb-2">
                      <ImageIcon className="mr-2 w-5 h-5" />
                      <h3 className="text-lg font-semibold truncate">{project.title}</h3>
                    </div>
                    <p className="text-sm opacity-80 line-clamp-2">{project.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Desktop Vertical List */}
            <div className="hidden lg:block space-y-4">
              {projects.map((project, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    cursor-pointer p-6 rounded-xl transition-all duration-300
                    ${selectedProject === project 
                      ? 'bg-[#00ADB5] text-[#222831]' 
                      : 'bg-[#393E46] text-[#EEEEEE] hover:bg-[#00ADB5]/20'}
                  `}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="flex items-center mb-2">
                    <ImageIcon className="mr-3 w-6 h-6" />
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <p className="text-sm opacity-80 line-clamp-2">{project.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Project Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#393E46] rounded-xl p-4 sm:p-6 lg:p-8 order-1 lg:order-2"
          >
            <AnimatePresence mode="wait">
              {selectedProject ? (
                <motion.div
                  key={selectedProject.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#00ADB5] mb-2">
                      {selectedProject.title}
                    </h3>
                    <div className="text-sm text-[#EEEEEE]">
                      <p>{selectedProject.location}</p>
                      <p className="text-[#EEEEEE]/70">{selectedProject.period}</p>
                    </div>
                  </div>

                  {/* Project Image Carousel - IMPROVED */}
                  <div className="mb-4 sm:mb-6 rounded-xl overflow-hidden shadow-2xl relative bg-gradient-to-br from-gray-900 to-gray-800 p-2">
                    <div className="relative group">
                      <Swiper
                        modules={[Navigation, Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        navigation={{
                          prevEl: '.custom-swiper-button-prev',
                          nextEl: '.custom-swiper-button-next',
                        }}
                        pagination={{ 
                          clickable: true,
                          dynamicBullets: true,
                          el: '.custom-pagination',
                        }}
                        className="w-full rounded-lg overflow-hidden"
                      >
                        {selectedProject.images.map((img, index) => (
                          <SwiperSlide key={index}>
                            {/* IMPROVED IMAGE CONTAINER */}
                            <div className="relative bg-white rounded-lg overflow-hidden shadow-lg">
                              <div className="aspect-[16/9] relative">
                                <Image 
                                  src={img} 
                                  alt={`${selectedProject.title} screenshot ${index + 1}`}
                                  fill
                                  className="object-contain bg-white"
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                />
                              </div>
                              {/* Image overlay with subtle gradient */}
                              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                      
                      {/* IMPROVED CUSTOM NAVIGATION BUTTONS */}
                      <button className="custom-swiper-button-prev absolute top-1/2 left-4 z-20 -translate-y-1/2 w-12 h-12 bg-[#00ADB5]/90 hover:bg-[#00ADB5] backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg border-2 border-white/20">
                        <ChevronLeft className="text-white w-6 h-6" />
                      </button>
                      <button className="custom-swiper-button-next absolute top-1/2 right-4 z-20 -translate-y-1/2 w-12 h-12 bg-[#00ADB5]/90 hover:bg-[#00ADB5] backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 shadow-lg border-2 border-white/20">
                        <ChevronRight className="text-white w-6 h-6" />
                      </button>
                      
                      {/* IMPROVED CUSTOM PAGINATION */}
                      <div className="custom-pagination absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center space-x-2 z-10"></div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-[#EEEEEE] mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-[#00ADB5]/20 text-[#00ADB5] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm border border-[#00ADB5]/30 hover:bg-[#00ADB5]/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* GitHub Link */}
                  <Link 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-[#00ADB5] text-[#222831] px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#00ADB5]/80 transition-all duration-300 text-sm sm:text-base font-medium hover:scale-105 shadow-lg"
                  >
                    <Github className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                    View on GitHub
                  </Link>
                </motion.div>
              ) : (
                <div className="text-center text-[#EEEEEE] opacity-50 py-8">
                  <p className="text-sm sm:text-base">Click on a project to view details</p>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx>{`
        .custom-pagination .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.4);
          opacity: 1;
          transition: all 0.3s ease;
        }
        
        .custom-pagination .swiper-pagination-bullet-active {
          background: #00ADB5;
          transform: scale(1.2);
          box-shadow: 0 0 10px rgba(0, 173, 181, 0.5);
        }
        
        .custom-pagination .swiper-pagination-bullet:hover {
          background: rgba(0, 173, 181, 0.7);
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}