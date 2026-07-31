'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { NamaKerenHero } from '@/components/nama-keren/NamaKerenHero';
import { PopularNamaKerenCategories } from '@/components/nama-keren/PopularNamaKerenCategories';
import { NamaKerenBestUses } from '@/components/nama-keren/NamaKerenBestUses';
import { NamaKerenExamples } from '@/components/nama-keren/NamaKerenExamples';
import { NamaKerenHowItWorks } from '@/components/nama-keren/NamaKerenHowItWorks';
import { NamaKerenUnicodeExplanation } from '@/components/nama-keren/NamaKerenUnicodeExplanation';
import { RelatedFonts } from '@/components/nama-keren/RelatedFonts';
import { NamaKerenFAQ } from '@/components/nama-keren/NamaKerenFAQ';
import { NamaKerenCTA } from '@/components/nama-keren/NamaKerenCTA';

export default function NamaKerenClientPage() {
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
        {/* Section 1: Hero & Live Nama Keren Generator */}
        <NamaKerenHero onCopy={showToast} />

        {/* Section 2: Popular Nama Keren Categories */}
        <PopularNamaKerenCategories onCopy={showToast} />

        {/* Section 3: Best Uses */}
        <NamaKerenBestUses />

        {/* Section 4: Copyable Presets & Examples */}
        <NamaKerenExamples onCopy={showToast} />

        {/* Section 5: Timeline - How It Works */}
        <NamaKerenHowItWorks />

        {/* Section 6: Unicode Explanation */}
        <NamaKerenUnicodeExplanation />

        {/* Section 7: Related Font Categories */}
        <RelatedFonts />

        {/* Section 8: Nama Keren Specific FAQs */}
        <NamaKerenFAQ />

        {/* Section 9: Call to Action */}
        <NamaKerenCTA />
      </main>

      {/* Reused Footer */}
      <Footer />

    </div>
  );
}
