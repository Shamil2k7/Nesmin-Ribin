'use client';

import { useState, useEffect } from 'react';
import { weddingData } from '@/lib/weddingData';
import AudioPlayer from '@/components/AudioPlayer';
import { Mail, Menu, X } from 'lucide-react';

export default function Navbar({ onReopenIntro }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Couple', href: '#couple' },
    { label: 'Event Details', href: '#details' },
    { label: 'Families', href: '#family' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F4F1EA]/95 backdrop-blur-md shadow-xs py-3 border-b border-[#A58B61]/20'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Brand / Couple Monogram */}
        <a
          href="#"
          className="text-xl sm:text-2xl text-[#55432F] font-normal tracking-wide italic select-none"
          style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}
        >
          {weddingData.couple.combinedNames}
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs tracking-[0.2em] uppercase text-[#887B6B] hover:text-[#55432F] transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action Tools: Reopen Invitation Card + Audio Player + Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {onReopenIntro && (
            <button
              onClick={onReopenIntro}
              aria-label="View Invitation Card"
              title="View Original Invitation Card"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FCFAF6] border border-[#A58B61]/40 text-[#55432F] hover:bg-[#FAF7F2] transition-colors text-xs font-medium cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#A58B61]" />
              <span className="text-[10px] tracking-wider uppercase text-[#85846C]">Card</span>
            </button>
          )}

          <AudioPlayer />

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-1.5 rounded-sm text-[#55432F] hover:bg-[#EAE4D9]/50 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FCFAF6] border-b border-[#A58B61]/25 px-6 py-6 shadow-xl animate-fadeIn">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm tracking-[0.2em] uppercase text-[#55432F] hover:text-[#A58B61] transition-colors py-1 border-b border-[#A58B61]/10 font-medium"
              >
                {link.label}
              </a>
            ))}

            {onReopenIntro && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onReopenIntro();
                }}
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-[#A58B61] pt-2 font-medium"
              >
                <Mail className="w-4 h-4" />
                <span>Re-open Invitation Card</span>
              </button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
