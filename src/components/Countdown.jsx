'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useCountdown } from '@/hooks/useCountdown';
import { weddingData } from '@/lib/weddingData';
import { Clock } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Countdown() {
  const { days, hours, minutes, seconds, isPassed, isLoaded } = useCountdown(
    weddingData.event.targetDate
  );

  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.countdown-box', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const timeUnits = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds }
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-[#F4F1EA] overflow-hidden"
    >
      <div className="section-container max-w-4xl">
        <div className="stationery-card p-8 sm:p-12 text-center rounded-sm">
          {/* Inner border */}
          <div className="absolute inset-2 sm:inset-3 border border-[#A58B61]/25 pointer-events-none" />

          {/* Section Heading */}
          <div className="relative z-10 mb-8 sm:mb-12">
            <div className="flex items-center justify-center gap-2 mb-2 text-[#85846C]">
              <Clock className="w-3.5 h-3.5" />
              <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-medium">
                Counting Down The Moments
              </p>
            </div>
            <h2
              className="text-2xl sm:text-4xl text-[#55432F] font-normal italic tracking-wide"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              Until We Celebrate
            </h2>
            <div className="w-28 sm:w-36 h-4 mx-auto relative opacity-70 mt-2">
              <Image
                src="/decorations/botanical-divider.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Countdown Display */}
          {isLoaded && isPassed ? (
            <div className="py-6">
              <p
                className="text-2xl sm:text-3xl text-[#A58B61] italic font-normal tracking-wide"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                The Celebration Begins — A Day to Remember
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 relative z-10">
              {timeUnits.map((unit, index) => (
                <div
                  key={unit.label}
                  className="countdown-box relative p-4 sm:p-6 bg-[#FAF7F2] border border-[#A58B61]/20 rounded-xs flex flex-col items-center justify-center shadow-xs"
                >
                  <span
                    className="text-3xl sm:text-5xl md:text-6xl text-[#55432F] font-light leading-tight"
                    style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
                  >
                    {isLoaded ? String(unit.value).padStart(2, '0') : '00'}
                  </span>
                  <div className="w-6 h-0.5 bg-[#A58B61]/30 my-2" />
                  <span className="text-[10px] sm:text-xs text-[#887B6B] tracking-[0.2em] uppercase font-medium">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Date note */}
          <p
            className="text-xs sm:text-sm text-[#887B6B] mt-8 tracking-wider font-light"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Sunday, 29 November 2026 • Nilambur, Kerala
          </p>
        </div>
      </div>
    </section>
  );
}
