'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { weddingData } from '@/lib/weddingData';
import { MapPin, ExternalLink, Heart } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FinalInvitation() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.final-stagger', {
        opacity: 0,
        y: 25,
        stagger: 0.15,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 px-4 sm:px-6 md:px-12 bg-[#F4F1EA] text-center overflow-hidden"
      style={{
        backgroundImage: 'radial-gradient(circle at 50% 50%, #FCFAF6 0%, #F4F1EA 100%)'
      }}
    >
      {/* Corner Botanicals */}
      <div className="absolute top-0 left-0 w-40 h-40 sm:w-56 sm:h-56 pointer-events-none opacity-50">
        <Image
          src="/decorations/botanical-corner.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-56 sm:h-56 pointer-events-none opacity-50 rotate-180">
        <Image
          src="/decorations/botanical-corner.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="section-container max-w-3xl relative z-10">
        {/* Heart Emblem */}
        <div className="final-stagger w-10 h-10 rounded-full bg-[#EAE4D9]/80 border border-[#A58B61]/40 flex items-center justify-center mx-auto mb-6 text-[#A58B61]">
          <Heart className="w-5 h-5 fill-[#A58B61]/30 stroke-[#A58B61]" />
        </div>

        {/* Heading */}
        <h2
          className="final-stagger text-2xl sm:text-4xl md:text-5xl text-[#55432F] font-normal italic tracking-wide mb-6 leading-snug"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          {weddingData.islamicText.closingTitle}
        </h2>

        {/* Warm invitation paragraph */}
        <p
          className="final-stagger text-base sm:text-xl text-[#887B6B] font-light italic leading-relaxed max-w-2xl mx-auto mb-8"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          &ldquo;{weddingData.islamicText.closingMessage}&rdquo;
        </p>

        {/* Botanical Divider */}
        <div className="final-stagger w-48 sm:w-64 h-5 mx-auto relative opacity-80 mb-8">
          <Image
            src="/decorations/botanical-divider.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Couple Names */}
        <h3
          className="final-stagger text-3xl sm:text-5xl text-[#55432F] font-normal tracking-widest uppercase mb-2"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          {weddingData.couple.combinedNames}
        </h3>

        {/* Event Date */}
        <p
          className="final-stagger text-sm sm:text-base text-[#A58B61] tracking-[0.25em] uppercase font-semibold mb-2"
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          29 NOVEMBER 2026
        </p>

        {/* Venue Location */}
        <p
          className="final-stagger text-xs sm:text-sm text-[#85846C] tracking-[0.2em] uppercase font-medium mb-10"
        >
          MAHARAJA CONVENTION CENTRE • NILAMBUR, KERALA
        </p>

        {/* Google Maps Button */}
        <div className="final-stagger">
          <a
            href={weddingData.event.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xs sm:text-sm"
          >
            <MapPin className="w-4 h-4" />
            <span>View Location on Map</span>
            <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
          </a>
        </div>

        {/* Final Gold Ornamental Divider */}
        <div className="final-stagger w-40 sm:w-56 h-4 mx-auto relative opacity-60 mt-12">
          <Image
            src="/decorations/botanical-divider.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
