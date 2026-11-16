'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { weddingData } from '@/lib/weddingData';
import { Calendar, MapPin, ExternalLink, Navigation } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EventDetails() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.event-element', {
        opacity: 0,
        y: 30,
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

  const { event } = weddingData;

  // Google Calendar Link generator
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Reception+of+Nesmin+%26+Ribin&dates=20261129T053000Z/20261129T143000Z&details=Wedding+Reception+celebration+of+Nesmin+.+CP+and+Ribin+.+P+at+Maharaja+Convention+Centre,+Nilambur,+Kerala.&location=Maharaja+Convention+Centre,+Nilambur,+Malappuram,+Kerala`;

  return (
    <section
      id="details"
      ref={sectionRef}
      className="relative py-20 sm:py-28 px-4 sm:px-6 md:px-12 bg-[#FCFAF6] overflow-hidden"
    >
      <div className="section-container">
        {/* Section Heading */}
        <div className="event-element text-center max-w-xl mx-auto mb-16 sm:mb-20">
          <p className="text-[11px] sm:text-xs tracking-[0.3em] uppercase text-[#85846C] font-medium mb-2">
            Save The Date
          </p>
          <h2
            className="text-3xl sm:text-5xl text-[#55432F] font-normal italic tracking-wide mb-3"
            style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
          >
            JOIN US FOR THE CELEBRATION
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

        {/* Cards Grid: Date & Venue */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto mb-12">
          {/* Date Card */}
          <div className="event-element stationery-card p-8 sm:p-10 rounded-sm text-center flex flex-col items-center justify-between">
            <div className="absolute inset-2 border border-[#A58B61]/25 pointer-events-none" />

            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#EAE4D9]/60 border border-[#A58B61]/40 flex items-center justify-center mb-6 text-[#A58B61]">
                <Calendar className="w-6 h-6" />
              </div>

              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-[#85846C] uppercase font-semibold">
                Event Date
              </span>

              <h3
                className="text-2xl sm:text-3xl text-[#55432F] font-normal my-2"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                {event.dateDisplay}
              </h3>

              <div className="w-10 h-0.5 bg-[#A58B61]/30 my-2" />

              <p
                className="text-sm text-[#887B6B] tracking-wider uppercase font-medium mb-6"
                style={{ fontFamily: 'var(--font-playfair), serif' }}
              >
                {event.type}
              </p>

              <a
                href={googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-widest text-[#A58B61] hover:text-[#55432F] uppercase font-medium transition-colors border-b border-[#A58B61]/40 pb-0.5"
              >
                <span>Add to Calendar</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Venue Card */}
          <div className="event-element stationery-card p-8 sm:p-10 rounded-sm text-center flex flex-col items-center justify-between">
            <div className="absolute inset-2 border border-[#A58B61]/25 pointer-events-none" />

            <div className="relative z-10 w-full flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#EAE4D9]/60 border border-[#A58B61]/40 flex items-center justify-center mb-6 text-[#A58B61]">
                <MapPin className="w-6 h-6" />
              </div>

              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-[#85846C] uppercase font-semibold">
                Reception Venue
              </span>

              <h3
                className="text-2xl sm:text-3xl text-[#55432F] font-normal my-2"
                style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
              >
                {event.venue}
              </h3>

              <div className="w-10 h-0.5 bg-[#A58B61]/30 my-2" />

              <p
                className="text-sm text-[#887B6B] tracking-wide font-light mb-6"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                {event.location}
              </p>

              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold text-xs"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Map Card */}
        <div className="event-element max-w-4xl mx-auto stationery-card p-3 sm:p-4 rounded-sm">
          <div className="relative w-full h-[320px] sm:h-[400px] rounded-xs overflow-hidden border border-[#A58B61]/30 bg-[#EAE4D9]">
            <iframe
              title="Maharaja Convention Centre Location"
              src={event.embedMapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-[0.85] contrast-[1.05]"
            />

            {/* Overlaid Location Badge */}
            <div className="absolute top-3 left-3 bg-[#FCFAF6]/95 backdrop-blur-xs border border-[#A58B61]/40 px-3.5 py-2 rounded-xs shadow-md">
              <p
                className="text-xs sm:text-sm font-semibold text-[#55432F]"
                style={{ fontFamily: 'var(--font-cormorant), serif' }}
              >
                Maharaja Convention Centre
              </p>
              <p className="text-[10px] text-[#887B6B]">Nilambur, Malappuram, Kerala</p>
            </div>
          </div>

          <div className="text-center pt-3 pb-1">
            <a
              href={event.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] sm:text-xs text-[#887B6B] hover:text-[#55432F] tracking-wider uppercase inline-flex items-center gap-1 transition-colors"
            >
              <span>Open in Google Maps Application</span>
              <ExternalLink className="w-3 h-3 text-[#A58B61]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
