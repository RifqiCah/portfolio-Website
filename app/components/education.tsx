'use client';
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
    description: "Active in organizing scientific papers."
  }
];

export default function Education() {
  return (
    <section
      id="education"
      className="w-full min-h-screen flex items-center justify-center bg-[#1A1A1D] p-6"
    >
      <div className="max-w-4xl w-full">
        {/* Header dengan animasi fade-up */}
        <h2 
          className="text-3xl font-bold mb-10 text-center text-[#00ADB5]"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-anchor-placement="center-bottom"
        >
          Education
        </h2>
        
        {/* Timeline container */}
        <ol 
          className="relative border-l-4 border-[#00ADB5] pl-6 space-y-12"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="200"
          data-aos-anchor-placement="top-bottom"
        >
          {educationData.map((edu, index) => (
            <li 
              key={index} 
              className="relative"
              data-aos="slide-left"
              data-aos-duration="1000"
              data-aos-delay={300 + (index * 150)}
              data-aos-anchor-placement="top-bottom"
            >
              {/* Timeline dot */}
              <span 
                className="absolute w-4 h-4 bg-[#00ADB5] rounded-full -left-2 top-1.5"
                data-aos="scale-in"
                data-aos-duration="600"
                data-aos-delay={450 + (index * 150)}
              ></span>
              
              {/* Education card */}
              <div className="bg-[#393E46] p-5 rounded-xl shadow-md">
                {/* Degree title */}
                <div 
                  className="flex items-center mb-2"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={580 + (index * 150)}
                >
                  <GraduationCap className="mr-2 w-6 h-6 text-[#00ADB5]" />
                  <h3 className="text-xl font-semibold text-[#00ADB5]">{edu.degree}</h3>
                </div>
                
                {/* University */}
                <div 
                  className="flex items-center mb-2 text-sm text-[#EEEEEE]"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={580 + (index * 150)}
                >
                  <MapPin className="mr-2 w-6 h-6 text-[#00ADB5]" />
                  {edu.university}
                </div>
                
                {/* Period */}
                <div 
                  className="flex items-center mb-2 text-sm text-[#EEEEEE]/70"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={660 + (index * 150)}
                >
                  <Calendar className="mr-2 w-6 h-6 text-[#00ADB5]" />
                  {edu.period}
                </div>
                
                {/* Description */}
                <p 
                  className="text-[#EEEEEE] mt-2 ml-8"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={740 + (index * 150)}
                >
                  {edu.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}