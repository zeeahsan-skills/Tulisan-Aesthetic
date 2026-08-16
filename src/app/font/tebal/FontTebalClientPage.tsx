'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { FontTebalHero } from '@/components/tebal/FontTebalHero';
import { FontTebalExamples } from '@/components/tebal/FontTebalExamples';
import { FontTebalAbout } from '@/components/tebal/FontTebalAbout';
import { FontTebalTutorial } from '@/components/tebal/FontTebalTutorial';
import { FontTebalPlatforms } from '@/components/tebal/FontTebalPlatforms';
import { FontTebalGaming } from '@/components/tebal/FontTebalGaming';
import { FontTebalRelated } from '@/components/tebal/FontTebalRelated';
import { FontTebalFAQ } from '@/components/tebal/FontTebalFAQ';
import { FontTebalCTA } from '@/components/tebal/FontTebalCTA';

export default function FontTebalClientPage() {
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
        {/* Section: Hero & Live 50-Style Bold Generator */}
        <FontTebalHero onCopy={showToast} />

        {/* Section: Contoh Font Tebal */}
        <FontTebalExamples onCopy={showToast} />

        {/* Section: Apa Itu Font Tebal? & Unicode Bold vs CSS Bold */}
        <FontTebalAbout />

        {/* Section: Cara Membuat Tulisan Tebal & Cara Copy-Paste */}
        <FontTebalTutorial />

        {/* Section: Font Tebal untuk Instagram, TikTok, WA, FB, Discord */}
        <FontTebalPlatforms />

        {/* Section: Font Tebal untuk Gaming */}
        <FontTebalGaming />

        {/* Section: Kategori Font Terkait */}
        <FontTebalRelated />

        {/* Section: FAQ Font Tebal */}
        <FontTebalFAQ />

        {/* Section: Call to Action */}
        <FontTebalCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
