'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { weddingData } from '@/lib/weddingData';
import { Calendar, MapPin, ChevronDown, ZoomIn, X } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef(null);
  const imageFrameRef = useRef(null);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.from('.hero-fade', {
        opacity: 0,
        y: 25,
        stagger: 0.14,
        duration: 1.1,
        delay: 0.2
      })
      .from(imageFrameRef.current, {
        opacity: 0,
        scale: 0.96,
        y: 30,
        duration: 1.3,
        ease: 'power3.out'
      }, '-=0.7');

      gsap.to('.hero-parallax-bg', {
        y: 50,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-between items-center pt-24 pb-12 px-4 sm:px-6 md:px-12 bg-[#F4F1EA] overflow-hidden"
        style={{
          backgroundImage: 'radial-gradient(ellipse at 50% 15%, #FCFAF6 0%, #F4F1EA 70%)'
        }}
      >
        {/* Botanical Corner Linework */}
        <div className="absolute top-0 left-0 w-36 h-36 sm:w-64 sm:h-64 pointer-events-none opacity-60 hero-parallax-bg">
          <Image
            src="/decorations/botanical-corner.svg"
            alt=""
            fill
            priority
            className="object-contain"
          />
        </div>

        <div className="absolute top-0 right-0 w-36 h-36 sm:w-64 sm:h-64 pointer-events-none opacity-60 -scale-x-100 hero-parallax-bg">
          <Image
            src="/decorations/botanical-corner.svg"
            alt=""
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Top Bismillah Accent */}
        <div className="hero-fade text-center pt-2 z-10">
          <p
            className="text-xl sm:text-2xl text-[#55432F]/90 select-none"
            style={{ fontFamily: 'var(--font-amiri), serif' }}
            dir="rtl"
          >
            {weddingData.islamicText.bismillahArabic}
          </p>
          <p
            className="text-[10px] sm:text-[11px] text-[#887B6B] uppercase tracking-[0.2em] font-light mt-1"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            {weddingData.islamicText.bismillahTranslation}
          </p>
        </div>

        {/* Main Center Editorial Composition */}
        <div className="relative z-10 max-w-4xl w-full my-auto text-center flex flex-col items-center">
          {/* Subtle Arch / Floral Crest */}
          <div className="hero-fade w-20 h-10 relative mb-2 opacity-75">
            <Image
              src="/decorations/floral-crest.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Cordially Invite */}
          <p className="hero-fade text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[#85846C] font-medium mb-2">
            We cordially invite you to celebrate the
          </p>

          {/* Event Title */}
          <p
            className="hero-fade text-sm sm:text-base text-[#A58B61] tracking-[0.25em] uppercase font-normal mb-1"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            {weddingData.event.type}
          </p>

          {/* Wedding Names: Editorial Calligraphy Style */}
          <h1
            className="hero-fade text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#55432F] font-normal tracking-wide italic my-2"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              lineHeight: 1.15
            }}
          >
            {weddingData.couple.combinedNames}
          </h1>

          {/* Tagline */}
          <p
            className="hero-fade text-base sm:text-xl text-[#887B6B] italic font-light tracking-wider mb-5"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            &ldquo;{weddingData.couple.tagline}&rdquo;
          </p>

          {/* Botanical Divider */}
          <div className="hero-fade w-48 sm:w-64 h-5 relative mb-6 opacity-80">
            <Image
              src="/decorations/botanical-divider.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Full Official Wedding Invitation Card Presentation */}
          <div
            ref={imageFrameRef}
            className="relative w-full max-w-[340px] sm:max-w-[420px] md:max-w-[460px] mx-auto my-4 p-2 sm:p-3 bg-[#FCFAF6] border border-[#A58B61]/40 shadow-2xl rounded-sm transition-transform duration-500 hover:scale-[1.01]"
            style={{
              boxShadow: '0 20px 45px -10px rgba(85, 67, 47, 0.18), 0 0 0 1px rgba(165, 139, 97, 0.25)'
            }}
          >
            {/* Stationery inner border */}
            <div className="absolute inset-1.5 sm:inset-2.5 border border-[#A58B61]/25 pointer-events-none z-10" />

            <div
              onClick={() => setIsCardModalOpen(true)}
              className="relative w-full aspect-[682/1024] overflow-hidden rounded-xs bg-[#FAF7F2] cursor-pointer group"
            >
              <Image
                src="/images/card/invitation-card.jpg"
                alt="Nesmin & Ribin - Wedding Reception Invitation Card"
                fill
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 460px"
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              {/* Tap to expand badge */}
              <div className="absolute bottom-3 right-3 bg-[#FCFAF6]/95 backdrop-blur-xs border border-[#A58B61]/40 px-3 py-1.5 rounded-xs shadow-md flex items-center gap-1.5 text-[#55432F] text-[10px] sm:text-xs tracking-wider uppercase font-medium group-hover:bg-[#A58B61] group-hover:text-[#FFFFFF] transition-colors">
                <ZoomIn className="w-3.5 h-3.5 text-[#A58B61] group-hover:text-[#FFFFFF]" />
                <span>Tap to Expand</span>
              </div>
            </div>
          </div>

          {/* Event Quick Details Banner */}
          <div className="hero-fade flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 mt-6 text-[#55432F]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#A58B61]" />
              <span
                className="text-sm sm:text-base tracking-wider font-medium"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {weddingData.event.dateDisplay}
              </span>
            </div>

            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-[#A58B61]/60" />

            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#A58B61]" />
              <span
                className="text-sm sm:text-base tracking-wider font-medium"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {weddingData.event.venue}, {weddingData.event.location}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Prompt */}
        <div className="relative z-10 pt-8 pb-2 flex flex-col items-center">
          <a
            href="#couple"
            aria-label="Scroll to couple section"
            className="flex flex-col items-center text-[#887B6B] hover:text-[#55432F] transition-colors group cursor-pointer"
          >
            <span className="text-[10px] tracking-[0.25em] uppercase mb-1 font-medium">
              Discover Our Story
            </span>
            <ChevronDown className="w-4 h-4 text-[#A58B61] animate-bounce" />
          </a>
        </div>
      </section>

      {/* Fullscreen Invitation Card Modal */}
      {isCardModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Full Invitation Card"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B231B]/95 backdrop-blur-md p-3 sm:p-6 md:p-8 select-none animate-fadeIn"
        >
          {/* Header */}
          <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between text-[#FCFAF6] z-50">
            <span
              className="text-xs sm:text-sm tracking-[0.2em] uppercase font-light text-[#D8C8A9]"
              style={{ fontFamily: 'var(--font-cormorant), serif' }}
            >
              Official Wedding Invitation Card
            </span>

            <button
              onClick={() => setIsCardModalOpen(false)}
              aria-label="Close Invitation Card"
              className="p-2 sm:p-2.5 rounded-full bg-[#FCFAF6]/15 hover:bg-[#FCFAF6]/30 text-[#FCFAF6] transition-all hover:scale-105 cursor-pointer border border-[#FCFAF6]/25"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Full Image */}
          <div className="relative w-full h-full max-w-2xl max-h-[88vh] flex items-center justify-center">
            <div className="relative w-full h-full">
              <Image
                src="/images/card/invitation-card.jpg"
                alt="Official Wedding Invitation Card"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 800px"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
