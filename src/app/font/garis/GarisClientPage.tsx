'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { GarisHero } from '@/components/garis/GarisHero';
import { PopularGarisStyles } from '@/components/garis/PopularGarisStyles';
import { GarisBestUses } from '@/components/garis/GarisBestUses';
import { GarisExamples } from '@/components/garis/GarisExamples';
import { GarisHowItWorks } from '@/components/garis/GarisHowItWorks';
import { GarisUnicodeExplanation } from '@/components/garis/GarisUnicodeExplanation';
import { RelatedFonts } from '@/components/garis/RelatedFonts';
import { GarisFAQ } from '@/components/garis/GarisFAQ';
import { GarisCTA } from '@/components/garis/GarisCTA';

export default function GarisClientPage() {
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
        {/* Section 1: Hero & Live Garis Strikethrough Generator */}
        <GarisHero onCopy={showToast} />

        {/* Section 2: Popular Garis Styles */}
        <PopularGarisStyles onCopy={showToast} />

        {/* Section 3: Best Uses */}
        <GarisBestUses />

        {/* Section 4: Copyable Presets & Examples */}
        <GarisExamples onCopy={showToast} />

        {/* Section 5: Timeline - How It Works */}
        <GarisHowItWorks />

        {/* Section 6: Unicode Explanation (Combining Characters) */}
        <GarisUnicodeExplanation />

        {/* Section 7: Related Font Categories */}
        <RelatedFonts />

        {/* Section 8: Garis Specific FAQs */}
        <GarisFAQ />

        {/* Section 9: Call to Action */}
        <GarisCTA />
      </main>

      {/* Reused Footer */}
      <Footer />

    </div>
  );
}
