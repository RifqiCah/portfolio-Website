"use client";

import { Github, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/RifqiCah', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/rifqicahyono', icon: Linkedin },
    { name: 'Instagram', href: 'https://www.instagram.com/rif_qifiki/', icon: Instagram },
  ];

  return (
    <footer 
      // 1. Mengganti style dengan kelas Tailwind untuk latar & border atas
      className="w-full bg-[#1e293b] text-white py-6 px-4 sm:px-8 border-t border-white/10"
    >
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-5 max-w-7xl">
        
        {/* Copyright - dengan warna teks lebih lembut */}
        <div className="text-center sm:text-left">
          <p className="text-sm text-[#94a3b8]"> 
            &copy; {new Date().getFullYear()} Rifqi Cahyono. 
          </p>
          <p className="text-xs text-[#475569]">
            Designed & Built in Malang, Indonesia.
          </p>
        </div>

        {/* 2. Mengganti link teks dengan ikon yang lebih bersih */}
        <div className="flex items-center space-x-5">
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={link.name}
              // 3. Memberi warna ikon dan efek hover yang serasi
              className="text-[#94a3b8] hover:text-[#3b82f6] transition-colors duration-300"
            >
              <link.icon className="w-6 h-6" />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}