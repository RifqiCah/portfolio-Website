'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      // Durasi animasi (ms)
      duration: 1000,
      
      // Animasi berulang setiap scroll (false = berulang, true = sekali saja)
      once: false,
      
      // Offset trigger - animasi mulai 100px sebelum element terlihat
      offset: 100,
      
      // Easing function untuk animasi yang smooth
      easing: 'ease-out-cubic',
      
      // Delay default (bisa di-override per element)
      delay: 0,
      
      // Disable AOS di device/screen tertentu (false = aktif di semua device)
      disable: false,
      
      // Mirror - reverse animation saat scroll up (true = ada reverse effect)
      mirror: true,
      
      // Kapan animasi trigger - 'top-bottom' paling natural
      anchorPlacement: 'top-bottom',
      
      // Performance optimization
      debounceDelay: 50,
      throttleDelay: 99,
      
      // Disable animasi saat prefers-reduced-motion (accessibility)
      disableMutationObserver: false,
    });

    // Cleanup function
    return () => {
      AOS.refresh();
    };
  }, []);

  return null;
}