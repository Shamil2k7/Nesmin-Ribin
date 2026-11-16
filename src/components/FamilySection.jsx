'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { weddingData } from '@/lib/weddingData';
import { Users } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function FamilySection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.family-col', {
        opacity: 0,
        y: 35,
        stagger: 0.2,
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

  const { bride, groom } = weddingData.couple;

  return (
    <section
      id="family"
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#EAE4D9]/40 overflow-hidden"
    >
      <div className="section-container">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-2 mb-2 text-[#85846C]">
            <Users className="w-3.5 h-3.5" />
            <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-medium">
              Cherished Kinship
            </p>
          </div>
          <h2
            className="text-2xl sm:text-4xl md:text-5xl text-[#55432F] font-normal italic tracking-wide mb-3"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            WITH THE BLESSINGS OF OUR FAMILIES
          </h2>
          <div className="w-48 sm:w-64 h-5 mx-auto relative opacity-80 mt-2">
            <Image
              src="/decorations/botanical-divider.svg"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Two Column Layout on Desktop, Stack on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {/* Bride's Family */}
          <div className="family-col stationery-card p-8 sm:p-10 rounded-sm relative text-center">
            {/* Inner Border */}
            <div className="absolute inset-2 border border-[#A58B61]/25 pointer-events-none" />

            {/* Corner botanical accent */}
            <div className="absolute top-2 left-2 w-12 h-12 pointer-events-none opacity-60">
              <Image
                src="/decorations/botanical-corner.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#A58B61] font-semibold">
                Bride&apos;s Lineage
              </span>

              <h3
                className="text-2xl sm:text-3xl text-[#55432F] font-normal italic my-2"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                Bride&apos;s Family
              </h3>

              <div className="w-16 h-0.5 bg-[#A58B61]/30 my-2" />

              {/* Parents */}
              <div className="my-4">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#85846C] font-medium mb-1">
                  Parents
                </p>
                <p
                  className="text-base sm:text-lg text-[#55432F] font-medium tracking-wide"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  {bride.parents}
                </p>
              </div>

              <div className="w-10 h-[1px] bg-[#A58B61]/20 my-2" />

              {/* Brothers */}
              <div className="my-3">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#85846C] font-medium mb-2">
                  Brothers
                </p>
                <ul className="space-y-1.5">
                  {bride.family.brothers.map((brother) => (
                    <li
                      key={brother}
                      className="text-sm sm:text-base text-[#55432F] font-normal tracking-wide"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      {brother}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Groom's Family */}
          <div className="family-col stationery-card p-8 sm:p-10 rounded-sm relative text-center">
            {/* Inner Border */}
            <div className="absolute inset-2 border border-[#A58B61]/25 pointer-events-none" />

            {/* Corner botanical accent */}
            <div className="absolute top-2 right-2 w-12 h-12 pointer-events-none opacity-60 -scale-x-100">
              <Image
                src="/decorations/botanical-corner.svg"
                alt=""
                fill
                className="object-contain"
              />
            </div>

            <div className="relative z-10 flex flex-col items-center">
              <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-[#A58B61] font-semibold">
                Groom&apos;s Lineage
              </span>

              <h3
                className="text-2xl sm:text-3xl text-[#55432F] font-normal italic my-2"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                Groom&apos;s Family
              </h3>

              <div className="w-16 h-0.5 bg-[#A58B61]/30 my-2" />

              {/* Parents */}
              <div className="my-4">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#85846C] font-medium mb-1">
                  Parents
                </p>
                <p
                  className="text-base sm:text-lg text-[#55432F] font-medium tracking-wide"
                  style={{ fontFamily: 'var(--font-cormorant), serif' }}
                >
                  {groom.parents}
                </p>
              </div>

              <div className="w-10 h-[1px] bg-[#A58B61]/20 my-2" />

              {/* Brothers */}
              <div className="my-3">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#85846C] font-medium mb-2">
                  Brothers
                </p>
                <ul className="space-y-1.5">
                  {groom.family.brothers.map((brother) => (
                    <li
                      key={brother}
                      className="text-sm sm:text-base text-[#55432F] font-normal tracking-wide"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      {brother}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sister */}
              <div className="mt-3">
                <p className="text-[11px] tracking-[0.2em] uppercase text-[#85846C] font-medium mb-1">
                  Sister
                </p>
                <ul className="space-y-1">
                  {groom.family.sisters.map((sister) => (
                    <li
                      key={sister}
                      className="text-sm sm:text-base text-[#55432F] font-normal tracking-wide"
                      style={{ fontFamily: 'var(--font-cormorant), serif' }}
                    >
                      {sister}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
