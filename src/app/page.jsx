'use client';

import { useState } from 'react';
import InvitationIntro from '@/components/InvitationIntro';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import CoupleSection from '@/components/CoupleSection';
import Countdown from '@/components/Countdown';
import EventDetails from '@/components/EventDetails';
import FamilySection from '@/components/FamilySection';
import FinalInvitation from '@/components/FinalInvitation';
import Footer from '@/components/Footer';
import FloatingLocationButton from '@/components/FloatingLocationButton';

export default function Home() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#F4F1EA]">
      {/* Cinematic Opening Fullscreen Invitation Card */}
      {!isOpened && (
        <InvitationIntro
          isOpened={isOpened}
          onOpen={() => setIsOpened(true)}
        />
      )}

      {/* Main Wedding Website Experience */}
      <div className={`transition-opacity duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar onReopenIntro={() => setIsOpened(false)} />
        <Hero />
        <CoupleSection />
        <Countdown />
        <EventDetails />
        <FamilySection />
        <FinalInvitation />
        <Footer />
        <FloatingLocationButton />
      </div>
    </main>
  );
}
