"use client";
import { FaBars } from "react-icons/fa";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  // Intersection Observer Setup
  useEffect(() => {
    const options = {
      root: null, // viewport sebagai root
      rootMargin: "0px",
      threshold: 0.5, // 50% bagian section terlihat
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set active section berdasarkan id
        }
      });
    }, options);

    const sections = document.querySelectorAll("section"); // Ambil semua section
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section)); // Cleanup observer
    };
  }, []); return (
      <nav className=" fixed z-100 top-0 left-0 w-full text-white p-6 sm:p-4 flex sm:flex-row justify-between items-center"
      style={{ backgroundColor: "var(--secondary-bg)" }} // Tambahkan style inline
      >
        <h1 className="text-xl font-bold self-start md:self-autoft ml-24">Rifqi Cahyono</h1>
        {/* Ikon Bars (Muncul di Mobile, Hilang di Desktop) */}
        <button className="block sm:hidden">
        <FaBars className="text-3xl text-[#EEEEEE] cursor-pointer" />
        </button>

        <ul className="hidden sm:flex gap-4 mr-24">
          <li
          className={`relative cursor-pointer border-2 rounded-xl px-4 py-1
            overflow-hidden transition-colors duration-500 ease-in-out
            before:absolute before:top-0 before:left-0 before:w-0 before:h-full
            before:bg-[#00ADB5] before:transition-all before:duration-700
            hover:before:w-full hover:text-[#222831] hover:border-[#222831]
            ${activeSection === 'home'
              ? 'bg-[#00ADB5] text-[#222831] border-[#222831]'
              : 'bg-white text-[#222831] border-[#222831]'}
          `}
        >
          <a
            href="#home"
            className="relative z-10 "
            onClick={() => setActiveSection('home')}
          >
            Home
          </a>
        </li>



          <li
          className={`relative cursor-pointer border-2 rounded-xl px-4 py-1
            overflow-hidden transition-colors duration-500 ease-in-out
            before:absolute before:top-0 before:left-0 before:w-0 before:h-full
            before:bg-[#00ADB5] before:transition-all before:duration-700
            hover:before:w-full hover:text-[#222831] hover:border-[#222831]
            ${activeSection === 'education'
              ? 'bg-[#00ADB5] text-[#222831] border-[#222831]'
              : 'bg-white text-[#222831] border-[#222831]'}
          `}
        >
          <a
            href="#education"
            className="relative z-10"
            onClick={() => setActiveSection('education')}
          >
            Education
          </a>
        </li>

          <li
          className={`relative cursor-pointer border-2 rounded-xl px-4 py-1
            overflow-hidden transition-colors duration-500 ease-in-out
            before:absolute before:top-0 before:left-0 before:w-0 before:h-full
            before:bg-[#00ADB5] before:transition-all before:duration-700
            hover:before:w-full hover:text-[#222831] hover:border-[#222831]
            ${activeSection === 'experience'
              ? 'bg-[#00ADB5] text-[#222831] border-[#222831]'
              : 'bg-white text-[#222831] border-[#222831]'}
          `}
        >
          <a
            href="#experience"
            className="relative z-10"
            onClick={() => setActiveSection('experience')}
          >
            Experience
          </a>
        </li>

        <li
          className={`relative cursor-pointer border-2 rounded-xl px-4 py-1
            overflow-hidden transition-colors duration-500 ease-in-out
            before:absolute before:top-0 before:left-0 before:w-0 before:h-full
            before:bg-[#00ADB5] before:transition-all before:duration-700
            hover:before:w-full hover:text-[#222831] hover:border-[#222831]
            ${activeSection === 'projects'
              ? 'bg-[#00ADB5] text-[#222831] border-[#222831]'
              : 'bg-white text-[#222831] border-[#222831]'}
          `}
        >
          <a
            href="#projects"
            className="relative z-10"
            onClick={() => setActiveSection('projects')}
          >
            Projects
          </a>
        </li>

        </ul>

      </nav>
    );
  }
  