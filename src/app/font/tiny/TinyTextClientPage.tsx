'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { TinyTextHero } from '@/components/tiny/TinyTextHero';
import { TinyTextExamples } from '@/components/tiny/TinyTextExamples';
import { TinyTextAbout } from '@/components/tiny/TinyTextAbout';
import { TinyTextTutorial } from '@/components/tiny/TinyTextTutorial';
import { TinyTextPlatforms } from '@/components/tiny/TinyTextPlatforms';
import { TinyTextRelated } from '@/components/tiny/TinyTextRelated';
import { TinyTextFAQ } from '@/components/tiny/TinyTextFAQ';
import { TinyTextCTA } from '@/components/tiny/TinyTextCTA';

export default function TinyTextClientPage() {
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
        {/* Section: Hero & Live 50-Style Small Text Generator */}
        <TinyTextHero onCopy={showToast} />

        {/* Section: Contoh Tiny Text */}
        <TinyTextExamples onCopy={showToast} />

        {/* Section: Apa Itu Tiny Text?, Small Caps vs Tiny Text, Unicode Small Text, & Keterbatasan */}
        <TinyTextAbout />

        {/* Section: Cara Membuat Tulisan Kecil & Cara Copy-Paste */}
        <TinyTextTutorial />

        {/* Section: Tiny Text untuk IG, TikTok, Bio, & Gaming */}
        <TinyTextPlatforms />

        {/* Section: Kategori Font Terkait */}
        <TinyTextRelated />

        {/* Section: FAQ Tiny Text */}
        <TinyTextFAQ />

        {/* Section: Call to Action */}
        <TinyTextCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
