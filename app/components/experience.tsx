"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, Code } from 'lucide-react';

// Experience data type
interface Experience {
  title: string;
  company: string;
  date: string;
  description: string[];
  technologies?: string[];
}

// Experience data array
const experiences: Experience[] = [
  {
    title: "Expert Staff of the Business Department",
    company: "Himpunan Mahasiswa Departemen Teknik Informatika",
    date: "March 2024 - December 2024",
    description: [
      "Secretary Business Expo for Entrepreneur",
      "Vice Head of Event Division Entrepreneur Sharing Center",
      "Vice Head of Mentor Division (INTRIVIA 2024)",
      "Coordinator of Daily Official Attire (PDH)",
      "Committee Member - Cohort Leader Incubation Program",
      "Mentor - Junior Business Staff"
    ],
    technologies: ["Teamwork", "Problem Solving", "Decision-Making", "Communication", "Management"]
  },
  {
    title: "Professional MC and Guest Speaker",
    company: "Faculty of Computer Science",
    date: "Jul 2023 – Present",
    description: [
      "MC - EQUALOGIC Webinar",
      "MC - Entrepreneur Sharing Center",
      "Guest Speaker - INTRIVIA"
    ],
    technologies: ["Public Speaking"]
  }
];

export default function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState<Experience | null>(experiences[0]);

  return (
    <section 
      id="experience" 
      className="w-full min-h-screen flex items-center justify-center bg-[#222831] p-6"
    >
      <div className="max-w-5xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-12 text-center text-[#00ADB5]"
        >
          Professional Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Experience List */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  cursor-pointer p-6 rounded-xl transition-all duration-300
                  ${selectedExperience === exp 
                    ? 'bg-[#00ADB5] text-[#222831]' 
                    : 'bg-[#393E46] text-[#EEEEEE] hover:bg-[#00ADB5]/20'}
                `}
                onClick={() => setSelectedExperience(exp)}
              >
                <div className="flex items-center mb-2">
                  <Briefcase className="mr-3 w-6 h-6" />
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                </div>
                <div className="flex items-center text-sm mb-2">
                  <Calendar className="mr-3 w-4 h-4" />
                  <div className="text-sm text-[#EEEEEE]">
                    <p>{exp.company}</p>
                    <p className="text-[#EEEEEE]/70">{exp.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience Details */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#393E46] rounded-xl p-8"
          >
            <AnimatePresence mode="wait">
              {selectedExperience ? (
                <motion.div
                  key={selectedExperience.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-[#00ADB5] mb-4">
                    {selectedExperience.title}
                  </h3>
                  <div className="text-sm text-[#EEEEEE] mb-4">
                    <p>{selectedExperience.company}</p>
                    <p className="text-[#EEEEEE]/70">{selectedExperience.date}</p>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {selectedExperience.description.map((desc, index) => (
                      <li key={index} className="flex items-start">
                        <Code className="mr-2 mt-1 w-4 h-4 text-[#00ADB5]" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {selectedExperience.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-[#00ADB5]/20 text-[#00ADB5] px-3 py-1 rounded-full text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ) : (
                <div className="text-center text-[#EEEEEE] opacity-50">
                  Click on an experience to view details
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}