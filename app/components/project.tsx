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
    title: "Healthcare - Symptomps Website",
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
    description: "UNITE is an innovative Pokémon game. This game features various exciting elements, including the ability to save and load progress, battle with Pokémon, level them up, evolve them, and use different items to enhance their strength",
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
      className="w-full min-h-screen flex items-center justify-center bg-[#1A1A1D] p-6"
    >
      <div className="max-w-5xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-[#00ADB5]"
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Project List */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
              </motion.div>
            ))}
          </motion.div>

          {/* Project Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#393E46] rounded-xl p-8"
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
                  <div>
                    <h3 className="text-2xl font-bold text-[#00ADB5] mb-1">
                      {selectedProject.title}
                    </h3>
                    <div className="text-sm text-[#EEEEEE] mb-4">
                      <p>{selectedProject.location}</p>
                      <p className="text-[#EEEEEE]/70">{selectedProject.period}</p>
                    </div>
                  </div>

                  
                  {/* Project Image Carousel */}
                  <div className="mb-6 rounded-xl overflow-hidden shadow-lg relative">
                    <Swiper
                      modules={[Navigation, Pagination]}
                      spaceBetween={10}
                      slidesPerView={1}
                      navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                      }}
                      pagination={{ 
                        clickable: true,
                        dynamicBullets: true,
                      }}
                      className="w-full"
                    >
                      {selectedProject.images.map((img, index) => (
                        <SwiperSlide key={index}>
                          <Image 
                            src={img} 
                            alt={`${selectedProject.title} screenshot ${index + 1}`}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                          />
                        </SwiperSlide>
                      ))}
                      
                      {/* Custom Navigation */}
                      <div className="swiper-button-prev absolute top-1/2 left-2 z-10 bg-[#00ADB5]/50 rounded-full p-1 -translate-y-1/2">
                        <ChevronLeft className="text-white" />
                      </div>
                      <div className="swiper-button-next absolute top-1/2 right-2 z-10 bg-[#00ADB5]/50 rounded-full p-1 -translate-y-1/2">
                        <ChevronRight className="text-white" />
                      </div>
                    </Swiper>
                  </div>

                  {/* Project Description */}
                  <p className="text-[#EEEEEE] mb-6">
                    {selectedProject.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-[#00ADB5]/20 text-[#00ADB5] px-3 py-1 rounded-full text-xs"
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
                    className="flex items-center justify-center bg-[#00ADB5] text-[#222831] px-4 py-2 rounded-full hover:bg-[#00ADB5]/80 transition-colors"
                  >
                    <Github className="mr-2" />
                    View on GitHub
                  </Link>
                </motion.div>
              ) : (
                <div className="text-center text-[#EEEEEE] opacity-50">
                  Click on a project to view details
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}