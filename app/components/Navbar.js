"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
  }, []);

  // Close mobile menu when clicking on a link
  const handleMobileMenuClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
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
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' }
  ];

  return (
    <nav 
      className="fixed z-50 top-0 left-0 w-full text-white p-4 sm:p-6 flex justify-between items-center"
      style={{ backgroundColor: "var(--secondary-bg)" }}
    >
      {/* Logo/Brand - Responsive positioning */}
      <h1 className="text-xl font-bold ml-4 sm:ml-8 md:ml-16 lg:ml-24">
        Rifqi Cahyono
      </h1>

      {/* Mobile Menu Button */}
      <button 
        className="block sm:hidden mr-4 z-60"
        onClick={toggleMobileMenu}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? (
          <FaTimes className="text-3xl text-[#EEEEEE] cursor-pointer transition-transform duration-300" />
        ) : (
          <FaBars className="text-3xl text-[#EEEEEE] cursor-pointer transition-transform duration-300" />
        )}
      </button>

      {/* Desktop Navigation */}
      <ul className="hidden sm:flex gap-2 md:gap-3 lg:gap-4 mr-4 sm:mr-8 md:mr-16 lg:mr-24">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`relative cursor-pointer border-2 rounded-xl px-3 md:px-4 py-1
              overflow-hidden transition-colors duration-500 ease-in-out
              before:absolute before:top-0 before:left-0 before:w-0 before:h-full
              before:bg-[#00ADB5] before:transition-all before:duration-700
              hover:before:w-full hover:text-[#222831] hover:border-[#222831]
              ${activeSection === item.id
                ? 'bg-[#00ADB5] text-[#222831] border-[#222831]'
                : 'bg-white text-[#222831] border-[#222831]'}
            `}
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

      {/* Mobile Navigation Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 sm:hidden transform transition-transform duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ backgroundColor: "var(--secondary-bg)" }}
      >
        {/* Mobile menu content */}
        <div className="flex flex-col pt-20 px-6">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`relative cursor-pointer border-2 rounded-xl px-4 py-3
                  overflow-hidden transition-colors duration-500 ease-in-out
                  before:absolute before:top-0 before:left-0 before:w-0 before:h-full
                  before:bg-[#00ADB5] before:transition-all before:duration-700
                  hover:before:w-full hover:text-[#222831] hover:border-[#222831]
                  ${activeSection === item.id
                    ? 'bg-[#00ADB5] text-[#222831] border-[#222831]'
                    : 'bg-white text-[#222831] border-[#222831]'}
                `}
              >
                <a
                  href={item.href}
                  className="relative z-10 block text-center"
                  onClick={() => handleMobileMenuClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu Backdrop - Transparent */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-transparent z-30 sm:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}