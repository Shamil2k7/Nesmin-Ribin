'use client';

import Image from 'next/image';
import { weddingData } from '@/lib/weddingData';
import { ArrowUp, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-14 sm:py-16 px-4 sm:px-6 md:px-12 bg-[#EAE4D9]/70 border-t border-[#A58B61]/25 text-center overflow-hidden">
      <div className="section-container max-w-3xl flex flex-col items-center">
        {/* Subtle Arch Ornament */}
        <div className="w-20 h-10 relative mb-3 opacity-60">
          <Image
            src="/decorations/floral-crest.svg"
            alt=""
            fill
            className="object-contain"
          />
        </div>

        {/* Islamic Du'a for Marriage */}
        <p
          className="text-lg sm:text-xl md:text-2xl text-[#55432F] mb-1 select-none"
          style={{ fontFamily: 'var(--font-amiri), serif' }}
          dir="rtl"
        >
          بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ
        </p>
        <p
          className="text-xs sm:text-sm text-[#887B6B] italic font-light tracking-wide max-w-lg mb-6"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          &ldquo;May Allah bless you both and shower His blessings upon you and unite you in goodness.&rdquo;
        </p>

        {/* Names */}
        <p
          className="text-2xl sm:text-3xl text-[#55432F] italic font-normal tracking-wide mb-1"
          style={{ fontFamily: 'var(--font-cormorant), serif' }}
        >
          {weddingData.couple.combinedNames}
        </p>

        <p className="text-xs text-[#85846C] tracking-[0.2em] uppercase font-medium mb-6">
          Wedding Reception • 29 November 2026 • Nilambur, Kerala
        </p>

        <div className="w-32 h-[1px] bg-[#A58B61]/30 my-2" />

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="mt-4 p-2.5 rounded-full bg-[#FCFAF6] border border-[#A58B61]/40 text-[#55432F] hover:bg-[#FAF7F2] transition-transform hover:-translate-y-1 shadow-xs cursor-pointer"
        >
          <ArrowUp className="w-4 h-4 text-[#A58B61]" />
        </button>

        <p className="text-[10px] text-[#887B6B]/70 tracking-widest uppercase mt-6">
          With prayers and warm wishes from both families
        </p>
      </div>
    </footer>
  );
}
