"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Semua logika useEffect (Scroll Progress, Intersection Observer, dll) tidak diubah
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(scrollPercent);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const options = { root: null, rootMargin: "0px", threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleMobileMenuClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'education', label: 'Education', href: '#education' },
    { id: 'skill', label: 'Skill', href: '#skill' },
    { id: 'project', label: 'Project', href: '#project' }
  ];

  return (
    <>
      <nav 
        // 1. Mengubah Latar Belakang Navbar menjadi lebih modern (glassmorphism)
        className="fixed z-50 top-0 left-0 w-full text-white px-4 sm:px-6 py-3 flex justify-between items-center transition-all duration-300 bg-[#1e293b]/80 backdrop-blur-sm border-b border-white/10"
      >
        <h1 className="text-xl font-bold text-white ml-4 sm:ml-8 md:ml-16 lg:ml-24">
          Rifqi Cahyono
        </h1>

        <button 
          className="block sm:hidden mr-4 z-50" // z-index dinaikkan agar di atas menu
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {/* 2. Mengubah warna ikon hamburger */}
          {isMobileMenuOpen ? (
            <FaTimes className="text-3xl text-[#cbd5e1] cursor-pointer transition-transform duration-300" />
          ) : (
            <FaBars className="text-3xl text-[#cbd5e1] cursor-pointer transition-transform duration-300" />
          )}
        </button>

        {/* 3. Merombak total gaya tombol navigasi agar sesuai tema gelap */}
        <ul className="hidden sm:flex gap-2 md:gap-3 lg:gap-4 mr-4 sm:mr-8 md:mr-16 lg:mr-24">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`relative rounded-lg px-3 md:px-4 py-1.5 font-medium
                transition-colors duration-300 ease-in-out
                ${activeSection === item.id
                  ? 'bg-[#3b82f6] text-white' // Gaya Tombol Aktif
                  : 'text-[#cbd5e1] hover:bg-white/10 hover:text-white' // Gaya Tombol Normal & Hover
                }`}
            >
              <a
                href={item.href}
                className="relative z-10 whitespace-nowrap"
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        
        {/* 4. Mengubah Latar Belakang Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 ">
          <div 
            className="h-full bg-gradient-to-r from-[#3b82f6] to-[#22d3ee] transition-all duration-150 ease-out"
            style={{ 
              width: `${Math.min(scrollProgress, 100)}%`
            }}
          />
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div 
        // Mengubah Latar Belakang Mobile Menu
        className={`fixed top-0 right-0 h-full w-64 sm:hidden transform transition-transform duration-300 ease-in-out z-40 bg-white/10 border-l border-white/10 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col pt-24 px-6">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li
                key={item.id}
                // Menyamakan gaya tombol mobile dengan desktop
                className={`relative rounded-lg px-4 py-3 font-medium text-center
                  transition-colors duration-300 ease-in-out
                  ${activeSection === item.id
                    ? 'bg-[#3b82f6] text-white' // Gaya Tombol Aktif
                    : 'text-[#cbd5e1] hover:bg-white/10 hover:text-white' // Gaya Tombol Normal & Hover
                  }`}
              >
                <a
                  href={item.href}
                  className="relative z-10 block"
                  onClick={() => handleMobileMenuClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}