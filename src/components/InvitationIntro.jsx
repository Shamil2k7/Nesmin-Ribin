'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { weddingData } from '@/lib/weddingData';
import { MailOpen, Sparkles } from 'lucide-react';

export default function InvitationIntro({ onOpen, isOpened }) {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const sealRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        scale: 0.94,
        opacity: 0,
        y: 20,
        duration: 1.3,
        ease: 'power3.out'
      });
      gsap.from('.intro-stagger', {
        opacity: 0,
        y: 12,
        stagger: 0.1,
        duration: 0.9,
        delay: 0.3,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleOpenClick = () => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          if (onOpen) onOpen();
        }
      });

      tl.to(sealRef.current, {
        scale: 1.15,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in'
      })
      .to(cardRef.current, {
        y: -30,
        opacity: 0,
        scale: 1.02,
        duration: 0.8,
        ease: 'power3.inOut'
      }, '-=0.15')
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.inOut'
      }, '-=0.2');
    }, containerRef);
  };

  if (isOpened) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-[#F4F1EA] overflow-hidden"
      style={{
        backgroundColor: '#F4F1EA',
        backgroundImage: 'radial-gradient(circle at 50% 50%, #FCFAF6 0%, #F4F1EA 100%)'
      }}
    >
      {/* Corner Botanicals */}
      <div className="absolute top-0 left-0 w-28 h-28 sm:w-48 sm:h-48 md:w-64 md:h-64 pointer-events-none opacity-80">
        <Image
          src="/decorations/botanical-corner.svg"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      <div className="absolute bottom-0 right-0 w-28 h-28 sm:w-48 sm:h-48 md:w-64 md:h-64 pointer-events-none opacity-80 rotate-180">
        <Image
          src="/decorations/botanical-corner.svg"
          alt=""
          fill
          priority
          className="object-contain"
        />
      </div>

      {/* Main Invitation Envelope Card */}
      <div
        ref={cardRef}
        className="relative w-full max-w-[560px] max-h-[92vh] overflow-y-auto bg-[#FCFAF6] border border-[#A58B61]/40 rounded-sm p-5 sm:p-8 md:p-10 text-center shadow-2xl"
        style={{
          boxShadow: '0 25px 60px -15px rgba(85, 67, 47, 0.18), 0 0 0 1px rgba(165, 139, 97, 0.25)'
        }}
      >
        {/* Double delicate inner border like physical stationery */}
        <div className="absolute inset-2 sm:inset-3 border border-[#A58B61]/25 pointer-events-none" />
        <div className="absolute inset-3 sm:inset-4 border border-[#A58B61]/15 pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center py-2 sm:py-4">
          {/* Bismillah in Arabic */}
          <div className="intro-stagger mb-1">
            <p
              className="text-xl sm:text-3xl md:text-4xl text-[#55432F] leading-relaxed select-none"
              style={{ fontFamily: 'var(--font-amiri), serif' }}
              dir="rtl"
            >
              {weddingData.islamicText.bismillahArabic}
            </p>
          </div>

          {/* Bismillah Translation */}
          <p
            className="intro-stagger text-[10px] sm:text-xs tracking-wider text-[#887B6B] uppercase italic mb-4 sm:mb-6 font-light max-w-md"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            &ldquo;{weddingData.islamicText.bismillahTranslation}&rdquo;
          </p>

          {/* Invitation Greeting */}
          <p className="intro-stagger text-[9px] sm:text-[11px] tracking-[0.25em] text-[#85846C] uppercase font-medium mb-2">
            {weddingData.islamicText.invitationGreeting}
          </p>

          {/* Wedding Names */}
          <h1
            className="intro-stagger text-3xl sm:text-5xl md:text-6xl text-[#55432F] font-normal tracking-wide mb-1 sm:mb-2 italic"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            {weddingData.couple.combinedNames}
          </h1>

          {/* Event Type */}
          <p
            className="intro-stagger text-xs sm:text-base text-[#A58B61] tracking-[0.2em] uppercase font-normal mb-1"
            style={{ fontFamily: 'var(--font-playfair), serif' }}
          >
            {weddingData.event.type}
          </p>

          {/* Date */}
          <p
            className="intro-stagger text-xs sm:text-sm text-[#55432F] tracking-[0.15em] font-medium mb-4 sm:mb-5"
            style={{ fontFamily: 'var(--font-cormorant), serif' }}
          >
            {weddingData.event.dateDisplay}
          </p>

          {/* Gold Ornamental Divider */}
          <div className="intro-stagger w-40 sm:w-56 h-5 relative mb-5 sm:mb-6 opacity-80">
            <Image
              src="/decorations/botanical-divider.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>

          {/* Open Invitation Button */}
          <div className="intro-stagger pt-1">
            <button
              ref={sealRef}
              onClick={handleOpenClick}
              aria-label="Open Wedding Invitation"
              className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3 sm:px-8 sm:py-3.5 bg-[#A58B61] text-[#FFFFFF] text-xs sm:text-sm tracking-[0.2em] uppercase font-medium rounded-sm border border-[#A58B61] hover:bg-[#8E734D] hover:border-[#8E734D] transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
            >
              <MailOpen className="w-4 h-4 transition-transform group-hover:scale-110" />
              <span>Open Invitation</span>
              <Sparkles className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          <p className="intro-stagger text-[9px] sm:text-[10px] text-[#887B6B]/70 tracking-widest uppercase mt-3">
            Click to enter the celebration
          </p>
        </div>
      </div>
    </div>
  );
}
