'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { GothicHero } from '@/components/gothic/GothicHero';
import { PopularGothicStyles } from '@/components/gothic/PopularGothicStyles';
import { GothicBestUses } from '@/components/gothic/GothicBestUses';
import { GothicExamples } from '@/components/gothic/GothicExamples';
import { GothicHowItWorks } from '@/components/gothic/GothicHowItWorks';
import { GothicUnicodeExplanation } from '@/components/gothic/GothicUnicodeExplanation';
import { RelatedFonts } from '@/components/gothic/RelatedFonts';
import { GothicFAQ } from '@/components/gothic/GothicFAQ';
import { GothicCTA } from '@/components/gothic/GothicCTA';

export default function GothicClientPage() {
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
        {/* Section 1: Hero & Live Gothic Generator */}
        <GothicHero onCopy={showToast} />

        {/* Section 2: Popular Gothic Styles */}
        <PopularGothicStyles onCopy={showToast} />

        {/* Section 3: Best Uses */}
        <GothicBestUses />

        {/* Section 4: Copyable Presets & Examples */}
        <GothicExamples onCopy={showToast} />

        {/* Section 5: Timeline - How It Works */}
        <GothicHowItWorks />

        {/* Section 6: Unicode Explanation (Blackletter, Fraktur) */}
        <GothicUnicodeExplanation />

        {/* Section 7: Related Font Categories */}
        <RelatedFonts />

        {/* Section 8: Gothic Specific FAQs */}
        <GothicFAQ />

        {/* Section 9: Call to Action */}
        <GothicCTA />
      </main>

      {/* Reused Footer */}
      <Footer />

    </div>
  );
}
