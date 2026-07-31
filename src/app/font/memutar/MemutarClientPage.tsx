'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { MemutarHero } from '@/components/memutar/MemutarHero';
import { PopularMemutarStyles } from '@/components/memutar/PopularMemutarStyles';
import { MemutarBestUses } from '@/components/memutar/MemutarBestUses';
import { MemutarExamples } from '@/components/memutar/MemutarExamples';
import { MemutarHowItWorks } from '@/components/memutar/MemutarHowItWorks';
import { MemutarUnicodeExplanation } from '@/components/memutar/MemutarUnicodeExplanation';
import { RelatedFonts } from '@/components/memutar/RelatedFonts';
import { MemutarFAQ } from '@/components/memutar/MemutarFAQ';
import { MemutarCTA } from '@/components/memutar/MemutarCTA';

export default function MemutarClientPage() {
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

      {/* Reused Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero & Live Memutar Upside Down Generator */}
        <MemutarHero onCopy={showToast} />

        {/* Section 2: Popular Memutar Styles */}
        <PopularMemutarStyles onCopy={showToast} />

        {/* Section 3: Best Uses */}
        <MemutarBestUses />

        {/* Section 4: Copyable Presets & Examples */}
        <MemutarExamples onCopy={showToast} />

        {/* Section 5: Timeline - How It Works */}
        <MemutarHowItWorks />

        {/* Section 6: Unicode Explanation (IPA Turned Characters) */}
        <MemutarUnicodeExplanation />

        {/* Section 7: Related Font Categories */}
        <RelatedFonts />

        {/* Section 8: Memutar Specific FAQs */}
        <MemutarFAQ />

        {/* Section 9: Call to Action */}
        <MemutarCTA />
      </main>

      {/* Reused Footer */}
      <Footer />

    </div>
  );
}
