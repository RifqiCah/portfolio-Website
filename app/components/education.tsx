'use client';
import { useEffect, useRef } from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

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
    description: "."
  }
];

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("animate-fade-in-up");
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      ref={sectionRef}
      className="w-full min-h-screen flex items-center justify-center bg-[#1A1A1D] p-6 opacity-0 transition-opacity duration-1000"
    >
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-10 text-center text-[#00ADB5]">Education</h2>
        <ol className="relative border-l-4 border-[#00ADB5] pl-6 space-y-12">
          {educationData.map((edu, index) => (
            <li key={index} className="relative">
              <span className="absolute w-4 h-4 bg-[#00ADB5] rounded-full -left-2 top-1.5"></span>
              <div className="bg-[#393E46] p-5 rounded-xl shadow-md">
                <div className="flex items-center mb-2">
                  <GraduationCap className="mr-2 w-6 h-6 text-[#00ADB5]" />
                  <h3 className="text-xl font-semibold text-[#00ADB5] ">{edu.degree}</h3>
                </div>
                <div className="flex items-center mb-2 text-sm text-[#EEEEEE]">
                  <MapPin className="mr-2 w-6 h-6 text-[#00ADB5]" />
                  {edu.university}
                </div>
                <div className="flex items-center mb-2 text-sm text-[#EEEEEE]/70">
                  <Calendar className="mr-2 w-6 h-6 text-[#00ADB5]" />
                  {edu.period}
                </div>
                <p className="text-[#EEEEEE] mt-2 ml-8">{edu.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}