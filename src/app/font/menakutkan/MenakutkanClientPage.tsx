'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { MenakutkanHero } from '@/components/menakutkan/MenakutkanHero';
import { PopularMenakutkanStyles } from '@/components/menakutkan/PopularMenakutkanStyles';
import { MenakutkanBestUses } from '@/components/menakutkan/MenakutkanBestUses';
import { MenakutkanExamples } from '@/components/menakutkan/MenakutkanExamples';
import { MenakutkanHowItWorks } from '@/components/menakutkan/MenakutkanHowItWorks';
import { MenakutkanUnicodeExplanation } from '@/components/menakutkan/MenakutkanUnicodeExplanation';
import { RelatedFonts } from '@/components/menakutkan/RelatedFonts';
import { MenakutkanFAQ } from '@/components/menakutkan/MenakutkanFAQ';
import { MenakutkanCTA } from '@/components/menakutkan/MenakutkanCTA';

export default function MenakutkanClientPage() {
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
        {/* Section 1: Hero & Live Menakutkan Zalgo Generator */}
        <MenakutkanHero onCopy={showToast} />

        {/* Section 2: Popular Menakutkan Styles */}
        <PopularMenakutkanStyles onCopy={showToast} />

        {/* Section 3: Best Uses */}
        <MenakutkanBestUses />

        {/* Section 4: Copyable Presets & Examples */}
        <MenakutkanExamples onCopy={showToast} />

        {/* Section 5: Timeline - How It Works */}
        <MenakutkanHowItWorks />

        {/* Section 6: Unicode Explanation (Combining Characters) */}
        <MenakutkanUnicodeExplanation />

        {/* Section 7: Related Font Categories */}
        <RelatedFonts />

        {/* Section 8: Menakutkan Specific FAQs */}
        <MenakutkanFAQ />

        {/* Section 9: Call to Action */}
        <MenakutkanCTA />
      </main>

      {/* Reused Footer */}
      <Footer />

    </div>
  );
}
