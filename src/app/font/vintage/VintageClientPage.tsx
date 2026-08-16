'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { VintageHero } from '@/components/vintage/VintageHero';
import { VintageExamples } from '@/components/vintage/VintageExamples';
import { VintageAbout } from '@/components/vintage/VintageAbout';
import { VintageTutorial } from '@/components/vintage/VintageTutorial';
import { VintagePlatforms } from '@/components/vintage/VintagePlatforms';
import { VintageRelated } from '@/components/vintage/VintageRelated';
import { VintageFAQ } from '@/components/vintage/VintageFAQ';
import { VintageCTA } from '@/components/vintage/VintageCTA';

export default function VintageClientPage() {
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
        {/* Hero & Generator */}
        <VintageHero onCopy={showToast} />

        {/* Examples */}
        <VintageExamples onCopy={showToast} />

        {/* About & Typography History */}
        <VintageAbout />

        {/* Tutorial */}
        <VintageTutorial />

        {/* Platforms (Bio IG & Design) */}
        <VintagePlatforms />

        {/* Related Fonts */}
        <VintageRelated />

        {/* FAQ */}
        <VintageFAQ />

        {/* CTA */}
        <VintageCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
