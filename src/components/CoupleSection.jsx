'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { weddingData } from '@/lib/weddingData';
import { Heart } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CoupleSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.couple-card', {
        opacity: 0,
        y: 40,
        stagger: 0.25,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const { bride, groom } = weddingData.couple;

  return (
    <section
      id="couple"
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#EAE4D9]/50 overflow-hidden"
    >
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#85846C] font-medium mb-2">
            The Blessed Union
          </p>
          <h2
            className="text-3xl sm:text-5xl text-[#55432F] font-normal italic tracking-wide mb-3"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            Bride & Groom
          </h2>
          <div className="w-40 h-4 mx-auto relative opacity-70">
            <Image
              src="/decorations/botanical-divider.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Two Column Couple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 max-w-5xl mx-auto">
          {/* Bride Card */}
          <div className="couple-card group flex flex-col items-center">
            {/* Stationery Framed Portrait */}
            <div className="relative w-full max-w-[360px] aspect-[3/4] p-3 bg-[#FCFAF6] border border-[#A58B61]/40 shadow-lg rounded-sm transition-transform duration-500 group-hover:-translate-y-1">
              {/* Inner delicate border */}
              <div className="absolute inset-2 border border-[#A58B61]/25 pointer-events-none z-10" />

              <div className="relative w-full h-full overflow-hidden rounded-xs bg-[#F4F1EA]">
                <Image
                  src={bride.image}
                  alt={`${bride.name} - Bride`}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </div>

              {/* Corner floral accent */}
              <div className="absolute -top-3 -left-3 w-14 h-14 pointer-events-none opacity-80">
                <Image
                  src="/decorations/botanical-corner.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Bride Information */}
            <div className="mt-8 text-center max-w-xs">
              <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] text-[#A58B61] uppercase font-semibold pb-1 border-b border-[#A58B61]/30">
                {bride.role}
              </span>

              <h3
                className="text-3xl sm:text-4xl text-[#55432F] font-normal italic mt-3 mb-1"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                {bride.name}
              </h3>

              <div className="w-12 h-0.5 bg-[#A58B61]/40 mx-auto my-3" />

              <p
                className="text-sm sm:text-base text-[#887B6B] tracking-wide font-light leading-relaxed"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {bride.parents}
              </p>
            </div>
          </div>

          {/* Groom Card */}
          <div className="couple-card group flex flex-col items-center">
            {/* Stationery Framed Portrait */}
            <div className="relative w-full max-w-[360px] aspect-[3/4] p-3 bg-[#FCFAF6] border border-[#A58B61]/40 shadow-lg rounded-sm transition-transform duration-500 group-hover:-translate-y-1">
              {/* Inner delicate border */}
              <div className="absolute inset-2 border border-[#A58B61]/25 pointer-events-none z-10" />

              <div className="relative w-full h-full overflow-hidden rounded-xs bg-[#F4F1EA]">
                <Image
                  src={groom.image}
                  alt={`${groom.name} - Groom`}
                  fill
                  sizes="(max-width: 768px) 100vw, 360px"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </div>

              {/* Corner floral accent */}
              <div className="absolute -top-3 -right-3 w-14 h-14 pointer-events-none opacity-80 -scale-x-100">
                <Image
                  src="/decorations/botanical-corner.svg"
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Groom Information */}
            <div className="mt-8 text-center max-w-xs">
              <span className="inline-block text-[10px] sm:text-[11px] tracking-[0.3em] text-[#A58B61] uppercase font-semibold pb-1 border-b border-[#A58B61]/30">
                {groom.role}
              </span>

              <h3
                className="text-3xl sm:text-4xl text-[#55432F] font-normal italic mt-3 mb-1"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                {groom.name}
              </h3>

              <div className="w-12 h-0.5 bg-[#A58B61]/40 mx-auto my-3" />

              <p
                className="text-sm sm:text-base text-[#887B6B] tracking-wide font-light leading-relaxed"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {groom.parents}
              </p>
            </div>
          </div>
        </div>

        {/* Center Heart Ornament */}
        <div className="flex items-center justify-center gap-4 mt-16 text-[#A58B61]">
          <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#A58B61]/50" />
          <Heart className="w-4 h-4 fill-[#A58B61]/20 stroke-[#A58B61]" />
          <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#A58B61]/50" />
        </div>
      </div>
    </section>
  );
}
