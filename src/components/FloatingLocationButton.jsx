'use client';

import { useState, useEffect } from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { weddingData } from '@/lib/weddingData';

export default function FloatingLocationButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show floating button once user scrolls past 200px
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2 animate-fadeIn select-none">
      {/* Tooltip on hover */}
      {isHovered && (
        <div className="hidden sm:block px-3 py-1.5 bg-[#FCFAF6] border border-[#A58B61]/40 rounded-xs shadow-lg text-xs text-[#55432F] font-medium tracking-wide animate-fadeIn">
          <span>Maharaja Convention Centre • Nilambur</span>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={weddingData.event.mapUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Open Venue Location on Google Maps"
        title="Open Venue Location in Google Maps"
        className="group relative flex items-center gap-2.5 px-4 py-3 sm:px-5 sm:py-3.5 bg-[#FCFAF6] border border-[#A58B61] text-[#55432F] rounded-full shadow-xl hover:bg-[#A58B61] hover:text-[#FFFFFF] transition-all duration-300 hover:scale-105 active:scale-95"
        style={{
          boxShadow: '0 10px 25px -5px rgba(165, 139, 97, 0.4), 0 4px 10px rgba(85, 67, 47, 0.1)'
        }}
      >
        {/* Pulsing subtle radar ring */}
        <span className="absolute -inset-1 rounded-full bg-[#A58B61]/20 animate-ping pointer-events-none group-hover:hidden" />

        {/* Location Pin Icon */}
        <div className="relative flex items-center justify-center">
          <MapPin className="w-4 h-4 text-[#A58B61] group-hover:text-[#FFFFFF] transition-colors" />
        </div>

        {/* Label */}
        <span
          className="text-xs tracking-[0.15em] uppercase font-semibold text-[#55432F] group-hover:text-[#FFFFFF] transition-colors"
          style={{ fontFamily: 'var(--font-sans), sans-serif' }}
        >
          Venue Location
        </span>

        <ExternalLink className="w-3 h-3 text-[#A58B61] group-hover:text-[#FFFFFF] opacity-80 group-hover:opacity-100 transition-colors" />
      </a>
    </div>
  );
}
