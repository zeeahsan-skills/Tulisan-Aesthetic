'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { TerhubungHero } from '@/components/terhubung/TerhubungHero';
import { PopularTerhubungStyles } from '@/components/terhubung/PopularTerhubungStyles';
import { TerhubungBestUses } from '@/components/terhubung/TerhubungBestUses';
import { TerhubungExamples } from '@/components/terhubung/TerhubungExamples';
import { TerhubungHowItWorks } from '@/components/terhubung/TerhubungHowItWorks';
import { TerhubungUnicodeExplanation } from '@/components/terhubung/TerhubungUnicodeExplanation';
import { RelatedFonts } from '@/components/terhubung/RelatedFonts';
import { TerhubungFAQ } from '@/components/terhubung/TerhubungFAQ';
import { TerhubungCTA } from '@/components/terhubung/TerhubungCTA';

export default function TerhubungClientPage() {
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
        {/* Section 1: Hero & Live Terhubung Generator */}
        <TerhubungHero onCopy={showToast} />

        {/* Section 2: Popular Terhubung Styles */}
        <PopularTerhubungStyles onCopy={showToast} />

        {/* Section 3: Best Uses */}
        <TerhubungBestUses />

        {/* Section 4: Copyable Presets & Examples */}
        <TerhubungExamples onCopy={showToast} />

        {/* Section 5: Timeline - How It Works */}
        <TerhubungHowItWorks />

        {/* Section 6: Unicode Explanation (Mathematical Script) */}
        <TerhubungUnicodeExplanation />

        {/* Section 7: Related Font Categories */}
        <RelatedFonts />

        {/* Section 8: Terhubung Specific FAQs */}
        <TerhubungFAQ />

        {/* Section 9: Call to Action */}
        <TerhubungCTA />
      </main>

      {/* Reused Footer */}
      <Footer />

    </div>
  );
}
