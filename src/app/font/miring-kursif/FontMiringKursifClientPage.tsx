'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { FontMiringKursifHero } from '@/components/miring-kursif/FontMiringKursifHero';
import { FontMiringKursifExamples } from '@/components/miring-kursif/FontMiringKursifExamples';
import { FontMiringKursifAbout } from '@/components/miring-kursif/FontMiringKursifAbout';
import { FontMiringKursifTutorial } from '@/components/miring-kursif/FontMiringKursifTutorial';
import { FontMiringKursifPlatforms } from '@/components/miring-kursif/FontMiringKursifPlatforms';
import { FontMiringKursifRelated } from '@/components/miring-kursif/FontMiringKursifRelated';
import { FontMiringKursifFAQ } from '@/components/miring-kursif/FontMiringKursifFAQ';
import { FontMiringKursifCTA } from '@/components/miring-kursif/FontMiringKursifCTA';

export default function FontMiringKursifClientPage() {
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
        {/* Section: Hero & Live 50-Style Cursive Generator */}
        <FontMiringKursifHero onCopy={showToast} />

        {/* Section: Contoh Tulisan Kursif */}
        <FontMiringKursifExamples onCopy={showToast} />

        {/* Section: Apa Itu Font Miring?, Font Kursif, Font Miring vs Kursif, & Unicode Italic/Script */}
        <FontMiringKursifAbout />

        {/* Section: Cara Membuat Tulisan Miring & Cara Copy-Paste */}
        <FontMiringKursifTutorial />

        {/* Section: Font Miring untuk IG, TikTok, WA, Bio */}
        <FontMiringKursifPlatforms />

        {/* Section: Kategori Font Terkait */}
        <FontMiringKursifRelated />

        {/* Section: FAQ Font Miring & Kursif */}
        <FontMiringKursifFAQ />

        {/* Section: Call to Action */}
        <FontMiringKursifCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
