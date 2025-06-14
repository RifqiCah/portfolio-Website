"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, Code, ChevronDown } from 'lucide-react';

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
    company: "HMDTIF",
    date: "March 2024 - December 2024",
    description: [
      "Secretary Business Expo for Entrepreneur",
      "Vice Head of Event Division Entrepreneur Sharing Center",
      "Vice Head of Mentor Division (INTRIVIA 2024)",
      "Coordinator of Daily Official Attire (PDH)",
      "Committee Member - Cohort Leader Incubation Program",
      "Mentor - Junior Business Staff"
    ],
    technologies: ["Teamwork", "Problem Solving", "Decision Making", "Communication", "Management"]
  },
  {
    title: "Professional MC and Guest Speaker",
    company: "Faculty of Computer Science",
    date: "Jul 2023 - August 2024",
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
  const [mobileExpanded, setMobileExpanded] = useState<number | null>(0);

  const toggleMobileExpansion = (index: number) => {
    setMobileExpanded(mobileExpanded === index ? null : index);
    setSelectedExperience(experiences[index]);
  };

  return (
    <section 
      id="experience" 
      className="w-full min-h-screen flex items-center justify-center bg-[#222831] px-4 py-8 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl w-full">
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 text-center text-[#00ADB5]"
        >
          Professional Experience
        </motion.h2>

        {/* Desktop and Tablet Layout */}
        <div className="hidden md:grid md:grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Experience List */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4 lg:space-y-6"
          >
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  cursor-pointer p-4 lg:p-6 rounded-xl transition-all duration-300
                  ${selectedExperience === exp 
                    ? 'bg-[#00ADB5] text-[#222831]' 
                    : 'bg-[#393E46] text-[#EEEEEE] hover:bg-[#00ADB5]/20'}
                `}
                onClick={() => setSelectedExperience(exp)}
              >
                <div className="flex items-start mb-3">
                  <Briefcase className="mr-3 w-5 h-5 lg:w-6 lg:h-6 mt-0.5 flex-shrink-0" />
                  <h3 className={`text-lg lg:text-xl font-semibold leading-tight ${selectedExperience === exp ? 'text-[#222831]' : 'text-[#00ADB5]'}`}>
                    {exp.title}
                  </h3>
                </div>
                <div className="flex items-start ml-8">
                  <Calendar className="mr-3 w-4 h-4 lg:w-5 lg:h-5 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-medium">{exp.company}</p>
                    <p className={`${selectedExperience === exp ? 'text-[#222831]/70' : 'text-[#EEEEEE]/70'}`}>
                      {exp.date}
                    </p>
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
            className="bg-[#393E46] rounded-xl p-6 lg:p-8 lg:sticky lg:top-8"
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
                  <h3 className="text-xl lg:text-2xl font-bold text-[#00ADB5] mb-4">
                    {selectedExperience.title}
                  </h3>
                  <div className="text-sm text-[#EEEEEE] mb-6">
                    <p className="font-medium">{selectedExperience.company}</p>
                    <p className="text-[#EEEEEE]/70">{selectedExperience.date}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {selectedExperience.description.map((desc, index) => (
                      <li key={index} className="flex items-start">
                        <Code className="mr-3 mt-1 w-4 h-4 text-[#00ADB5] flex-shrink-0" />
                        <span className="text-[#EEEEEE] leading-relaxed">{desc}</span>
                      </li>
                    ))}
                  </ul>

                  {selectedExperience.technologies && (
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.technologies.map((tech, index) => (
                        <span 
                          key={index} 
                          className="bg-[#00ADB5]/20 text-[#00ADB5] px-3 py-1 rounded-full text-xs font-medium"
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

        {/* Mobile Layout - Accordion Style */}
        <div className="md:hidden space-y-4">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#393E46] rounded-xl overflow-hidden"
            >
              {/* Accordion Header */}
              <div 
                className="p-4 cursor-pointer flex items-center justify-between"
                onClick={() => toggleMobileExpansion(index)}
              >
                <div className="flex items-start flex-1">
                  <Briefcase className="mr-3 w-5 h-5 mt-0.5 text-[#00ADB5] flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-[#00ADB5] leading-tight mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-[#EEEEEE] truncate">{exp.company}</p>
                    <p className="text-xs text-[#EEEEEE]/70">{exp.date}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: mobileExpanded === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-[#00ADB5]" />
                </motion.div>
              </div>

              {/* Accordion Content */}
              <AnimatePresence>
                {mobileExpanded === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-4 pb-4 border-t border-[#222831]/20">
                      <ul className="space-y-2 mt-4 mb-4">
                        {exp.description.map((desc, descIndex) => (
                          <li key={descIndex} className="flex items-start">
                            <Code className="mr-2 mt-1 w-3 h-3 text-[#00ADB5] flex-shrink-0" />
                            <span className="text-sm text-[#EEEEEE] leading-relaxed">{desc}</span>
                          </li>
                        ))}
                      </ul>

                      {exp.technologies && (
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="bg-[#00ADB5]/20 text-[#00ADB5] px-2 py-1 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}