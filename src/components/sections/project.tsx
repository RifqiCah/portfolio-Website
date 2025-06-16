// Ganti seluruh isi file Anda dengan kode di bawah ini
"use client";
import { useState, useEffect, useRef } from 'react';
import { Github, ChevronLeft, ChevronRight, ExternalLink, Calendar, MapPin, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Tipe Data dan Data Proyek (Tidak Berubah) ---
interface Project {
  title: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  images: string[];
  githubLink: string;
}

const projects: Project[] = [
    {
        title: "RupiTrack",
        location: "Brawijaya University",
        period: "June 2025 - Present",
        description: "Financial management application with comprehensive budgeting tools, expense tracking, and financial analytics dashboard for personal finance management.",
        technologies: ["Bootstrap ", "JavaScript", "PHP", "Laravel"],
        images: [
          "/images/rupitrack/berandarupi.png",
          "/images/rupitrack/fitur.png",
          "/images/rupitrack/dashboard.png",
          "/images/rupitrack/transaction.png"
          
        ],
        githubLink: "https://github.com/RifqiCah/money_plus.git"
    },
    {
        title: "Healthcare Platform",
        location: "Brawijaya University",
        period: "May 2025 - June 2025",
        description: "Modern healthcare management system with patient records, appointment scheduling, and telemedicine capabilities built with cutting-edge web technologies.",
        technologies: ["Tailwind CSS", "JavaScript", "PHP", "Laravel", "Pyhton"],
        images: [
            "/images/healthcare/tentang.png",
            "/images/healthcare/tim.png",
            "/images/healthcare/home.png",
            "/images/healthcare/pakar.png",
            "/images/healthcare/rumahsakit.png",
            "/images/healthcare/artikel.png"
        ],
        githubLink: "https://github.com/RifqiCah/PengembanganAplikasiWeb.git"
    },
    {
        title: "Portfolio Website",
        location: "Brawijaya University",
        period: "March 2025 - June 2025",
        description: "Personal portfolio showcasing professional experience, projects, education, and technical articles with modern responsive design and smooth animations.",
        technologies: ["Tailwind CSS", "JavaScript", "TypeScript", "NextJs", "ReactJs"],
        images: [
          "/images/portfolio/port1.png",
          "/images/portfolio/port2.png",
          "/images/portfolio/port3.png"
        ],
        githubLink: "https://github.com/RifqiCah/PengembanganAplikasiWeb.git"
    },
    {
    title: "Medium Clone",
    location: "Brawijaya University",
    period: "August 2023 - December 2023",
    description: "Educational project replicating Medium.com's design and functionality using pure HTML and CSS, focusing on responsive design principles and modern UI patterns.",
    technologies: ["CSS","HTML"],
    images: [
      "/images/medium/1-medium.jpg",
      "/images/medium/2-medium.jpg",
      "/images/medium/3-medium.jpg"
    ],
    githubLink: "https://github.com/RifqiCah/PengembanganAplikasiWeb.git"
  },
  {
    title: "UNITE: Pokémon Game",
    location: "Brawijaya University",
    period: "August 2023 - December 2023",
    description: "Innovative Pokémon-inspired game featuring battle mechanics, save/load functionality, and comprehensive GUI built with Java for desktop gaming experience.",
    technologies: ["Java", "GUI", "Swing"],
    images: [
      "/images/unite/1-unite.jpg",
      "/images/unite/2-unite.jpg",
      "/images/unite/3-unite.jpg",
    ],
    githubLink: "https://github.com/yourusername/portfolio"
  }
];



// --- Komponen Tombol Magnetik (Refined Magnetic System) ---
const MagneticButton = ({ children, href }: { children: React.ReactNode; href: string }) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x, y });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.a
            ref={ref}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="group w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 text-base font-semibold relative overflow-hidden hover:scale-105"
        >
            <Github className="mr-3 w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            <span className="relative z-10">{children}</span>
            <ExternalLink className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </motion.a>
    );
};

// --- Komponen Utama ---
export default function ProjectSection() {
    const [selectedProject, setSelectedProject] = useState<Project>(projects[0]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [direction, setDirection] = useState(0); // For image slider animation direction

    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);


    // Auto slide images
    useEffect(() => {
        const interval = setInterval(() => {
            changeImage(1); // Next image
        }, 5000);
        return () => clearInterval(interval);
    }, [selectedProject.images.length]);

    const changeImage = (newDirection: number) => {
        setDirection(newDirection);
        if (newDirection > 0) {
            setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
        } else {
            setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
    };
    
    const selectProject = (project: Project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const imageVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0,
        }),
    };

    return (
        <section ref={sectionRef} id="project" className="w-full min-h-screen bg-slate-900 py-16 px-4 md:px-8 overflow-hidden">
            <div className="max-w-screen-xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                        Featured Projects
                    </h2>
                    <div className="mx-auto h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                </motion.div>

                {/* --- Layout Utama: Desktop (2 kolom) & Mobile (1 kolom) --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-12">

                    {/* --- Kolom Kiri (Detail Proyek) - 7/12 di Desktop --- */}
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="lg:col-span-7 mb-12 lg:mb-0"
                    >
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl border border-slate-700/50 sticky top-24">
                            {/* Header Detail */}
                            <div className="mb-4">
                                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400">
                                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-blue-400"/> {selectedProject.location}</span>
                                    <span className="flex items-center"><Calendar className="w-4 h-4 mr-2 text-blue-400"/> {selectedProject.period}</span>
                                </div>
                            </div>
                            
                            {/* Image Slider */}
                            <div className="relative h-64 md:h-96 mb-6 rounded-lg overflow-hidden group">
                                <AnimatePresence initial={false} custom={direction}>
                                    <motion.img
                                        key={currentImageIndex}
                                        src={selectedProject.images[currentImageIndex]}
                                        alt={`${selectedProject.title} preview ${currentImageIndex + 1}`}
                                        className="absolute w-full h-full object-cover"
                                        variants={imageVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        custom={direction}
                                        transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                                    />
                                </AnimatePresence>
                                <button onClick={() => changeImage(-1)} className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 hover:bg-black/60"><ChevronLeft /></button>
                                <button onClick={() => changeImage(1)} className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/40 rounded-full transition-opacity duration-300 opacity-0 group-hover:opacity-100 hover:bg-black/60"><ChevronRight /></button>
                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                                    {selectedProject.images.map((_, index) => (
                                        <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`} />
                                    ))}
                                </div>
                            </div>

                            {/* Deskripsi & Teknologi */}
                            <p className="text-slate-300 mb-6 leading-relaxed">{selectedProject.description}</p>
                            <div className="mb-6">
                                <h4 className="font-semibold text-blue-300 mb-3">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.technologies.map((tech) => (
                                        <span key={tech} className="bg-blue-900/50 text-blue-300 px-3 py-1 text-sm rounded-full border border-blue-800/60">{tech}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Tombol Aksi dengan Efek Magnetik */}
                            <MagneticButton href={selectedProject.githubLink}>
                                View on GitHub
                            </MagneticButton>
                        </div>
                    </motion.div>

                    {/* --- Kolom Kanan (Daftar Proyek) - 5/12 di Desktop --- */}
                    <motion.div 
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="lg:col-span-5"
                    >
                        {/* Untuk Mobile & Tablet: Horizontal Scroll 
                          Untuk Desktop: Vertical Scroll
                        */}
                        <div className="lg:max-h-[85vh] flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:pr-2 pb-4 lg:pb-0 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-slate-800/50">
                            {projects.map((project) => (
                                <div
                                    key={project.title}
                                    onClick={() => selectProject(project)}
                                    className={`group relative cursor-pointer p-4 rounded-xl border-2 transition-all duration-300 ease-in-out flex-shrink-0 w-80 lg:w-full
                                    ${selectedProject.title === project.title 
                                        ? 'bg-slate-700/80 border-blue-500' 
                                        : 'bg-slate-800/50 border-transparent hover:border-slate-600'
                                    }`}
                                >
                                    <div className="flex gap-4">
                                        <div className="w-24 h-24 flex-shrink-0 rounded-md overflow-hidden">
                                            <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h4 className={`font-bold transition-colors ${selectedProject.title === project.title ? 'text-blue-400' : 'text-white'}`}>{project.title}</h4>
                                            <p className="text-sm text-slate-400 line-clamp-2 mt-1">{project.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}