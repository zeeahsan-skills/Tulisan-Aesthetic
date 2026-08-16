'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { BerkilauHero } from '@/components/berkilau/BerkilauHero';
import { BerkilauExamples } from '@/components/berkilau/BerkilauExamples';
import { BerkilauAbout } from '@/components/berkilau/BerkilauAbout';
import { BerkilauTutorial } from '@/components/berkilau/BerkilauTutorial';
import { BerkilauPlatforms } from '@/components/berkilau/BerkilauPlatforms';
import { BerkilauGaming } from '@/components/berkilau/BerkilauGaming';
import { BerkilauRelated } from '@/components/berkilau/BerkilauRelated';
import { BerkilauFAQ } from '@/components/berkilau/BerkilauFAQ';
import { BerkilauCTA } from '@/components/berkilau/BerkilauCTA';

export default function BerkilauClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      
      {/* Toast Notification Alert */}
      <Toast message={toastMessage} />

      {/* Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Section: Hero & Live Sparkly Generator */}
        <BerkilauHero onCopy={showToast} />

        {/* Section: Contoh Tulisan Sparkly */}
        <BerkilauExamples onCopy={showToast} />

        {/* Section: Apa Itu Font Berkilau?, 3 Elemen, Kode Simbol, & Unicode vs Emoji */}
        <BerkilauAbout />

        {/* Section: Cara Membuat Tulisan Berkilau & Cara Copy-Paste */}
        <BerkilauTutorial />

        {/* Section: Font Berkilau untuk IG, TikTok, WA, Discord */}
        <BerkilauPlatforms />

        {/* Section: Font Berkilau untuk Nickname Game */}
        <BerkilauGaming />

        {/* Section: Kategori Font Terkait */}
        <BerkilauRelated />

        {/* Section: FAQ Font Berkilau */}
        <BerkilauFAQ />

        {/* Section: Call to Action */}
        <BerkilauCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
