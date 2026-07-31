'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { BerkilauHero } from '@/components/berkilau/BerkilauHero';
import { PopularBerkilauStyles } from '@/components/berkilau/PopularBerkilauStyles';
import { BerkilauBestUses } from '@/components/berkilau/BerkilauBestUses';
import { BerkilauExamples } from '@/components/berkilau/BerkilauExamples';
import { BerkilauHowItWorks } from '@/components/berkilau/BerkilauHowItWorks';
import { BerkilauUnicodeExplanation } from '@/components/berkilau/BerkilauUnicodeExplanation';
import { RelatedFonts } from '@/components/berkilau/RelatedFonts';
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

      {/* Reused Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero & Live Berkilau Sparkly Generator */}
        <BerkilauHero onCopy={showToast} />

        {/* Section 2: Popular Berkilau Styles */}
        <PopularBerkilauStyles onCopy={showToast} />

        {/* Section 3: Best Uses */}
        <BerkilauBestUses />

        {/* Section 4: Copyable Presets & Examples */}
        <BerkilauExamples onCopy={showToast} />

        {/* Section 5: Timeline - How It Works */}
        <BerkilauHowItWorks />

        {/* Section 6: Unicode Explanation (Decorative Symbols) */}
        <BerkilauUnicodeExplanation />

        {/* Section 7: Related Font Categories */}
        <RelatedFonts />

        {/* Section 8: Berkilau Specific FAQs */}
        <BerkilauFAQ />

        {/* Section 9: Call to Action */}
        <BerkilauCTA />
      </main>

      {/* Reused Footer */}
      <Footer />

    </div>
  );
}
