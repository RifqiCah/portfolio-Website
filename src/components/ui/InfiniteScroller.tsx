// components/InfiniteScroller.tsx (Versi Final dengan Logika Eksplisit)

"use client";

import { motion, useSpring, useAnimationFrame } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface InfiniteScrollerProps {
  children: React.ReactNode;
  speed?: number;
}

export function InfiniteScroller({ children, speed = 40 }: InfiniteScrollerProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [scrollerWidth, setScrollerWidth] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Default spring dimulai dari 0
  const x = useSpring(0, {
    stiffness: 100,
    damping: 40,
    restDelta: 0.001
  });

  const direction = useRef(speed < 0 ? -1 : 1);
  const target = useRef(0);

  useEffect(() => {
    if (scrollerRef.current) {
      const contentWidth = scrollerRef.current.querySelector('span')?.offsetWidth || 0;
      setScrollerWidth(contentWidth);

      // ===== BLOK LOGIKA YANG DIPERBARUI SESUAI PERMINTAAN =====

      // Jika speed positif, atur titik awalnya di ujung kiri.
      if (speed > 0) {
        const startPos = -contentWidth;
        target.current = startPos;
        x.set(startPos, false); // `false` mencegah animasi spring saat set posisi awal
      } 
      // Jika speed negatif, secara eksplisit atur titik awalnya di ujung kanan (x=0).
      else if (speed < 0) {
        const startPos = 0;
        target.current = startPos;
        x.set(startPos, false);
      }
      
      // ========================================================
    }
  }, [children, speed, x]);

  useAnimationFrame((time, delta) => {
    if (isHovering || !scrollerWidth) return;
    
    const boundaryLeft = -scrollerWidth;
    const boundaryRight = 0;

    if (direction.current === -1 && target.current < boundaryLeft) {
      direction.current = 1;
    } else if (direction.current === 1 && target.current > boundaryRight) {
      direction.current = -1;
    }

    const moveBy = direction.current * (delta / 1000) * Math.abs(speed);
    target.current += moveBy;

    x.set(target.current);
  });

  return (
    <div 
      className="overflow-hidden cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        ref={scrollerRef}
        className="flex gap-5 whitespace-nowrap"
        style={{ x }}
        drag="x"
        dragConstraints={{ 
          left: -scrollerWidth, 
          right: 0 
        }}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 25 }}
      >
        <span className="flex gap-5">{children}</span>
        <span className="flex gap-5">{children}</span>
      </motion.div>
    </div>
  );
}