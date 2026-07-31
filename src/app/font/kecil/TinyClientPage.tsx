'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { TinyHero } from '@/components/tiny/TinyHero';
import { PopularTinyStyles } from '@/components/tiny/PopularTinyStyles';
import { TinyBestUses } from '@/components/tiny/TinyBestUses';
import { TinyExamples } from '@/components/tiny/TinyExamples';
import { TinyHowItWorks } from '@/components/tiny/TinyHowItWorks';
import { TinyUnicodeExplanation } from '@/components/tiny/TinyUnicodeExplanation';
import { RelatedFonts } from '@/components/tiny/RelatedFonts';
import { TinyFAQ } from '@/components/tiny/TinyFAQ';
import { TinyCTA } from '@/components/tiny/TinyCTA';

export default function TinyClientPage() {
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
        {/* Section 1: Hero & Live Tiny Font Generator */}
        <TinyHero onCopy={showToast} />

        {/* Section 2: Popular Tiny Styles */}
        <PopularTinyStyles onCopy={showToast} />

        {/* Section 3: Best Uses */}
        <TinyBestUses />

        {/* Section 4: Copyable Presets & Examples */}
        <TinyExamples onCopy={showToast} />

        {/* Section 5: Timeline - How It Works */}
        <TinyHowItWorks />

        {/* Section 6: Unicode Explanation (Superscript, Small Caps) */}
        <TinyUnicodeExplanation />

        {/* Section 7: Related Font Categories */}
        <RelatedFonts />

        {/* Section 8: Tiny Specific FAQs */}
        <TinyFAQ />

        {/* Section 9: Call to Action */}
        <TinyCTA />
      </main>

      {/* Reused Footer */}
      <Footer />

    </div>
  );
}
