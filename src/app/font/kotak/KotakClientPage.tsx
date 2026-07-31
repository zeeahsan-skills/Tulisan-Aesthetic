'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { KotakHero } from '@/components/kotak/KotakHero';
import { PopularKotakStyles } from '@/components/kotak/PopularKotakStyles';
import { KotakBestUses } from '@/components/kotak/KotakBestUses';
import { KotakExamples } from '@/components/kotak/KotakExamples';
import { KotakHowItWorks } from '@/components/kotak/KotakHowItWorks';
import { KotakUnicodeExplanation } from '@/components/kotak/KotakUnicodeExplanation';
import { RelatedFonts } from '@/components/kotak/RelatedFonts';
import { KotakFAQ } from '@/components/kotak/KotakFAQ';
import { KotakCTA } from '@/components/kotak/KotakCTA';

export default function KotakClientPage() {
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
        {/* Section 1: Hero & Live Kotak Generator */}
        <KotakHero onCopy={showToast} />

        {/* Section 2: Popular Kotak Styles */}
        <PopularKotakStyles onCopy={showToast} />

        {/* Section 3: Best Uses */}
        <KotakBestUses />

        {/* Section 4: Copyable Presets & Examples */}
        <KotakExamples onCopy={showToast} />

        {/* Section 5: Timeline - How It Works */}
        <KotakHowItWorks />

        {/* Section 6: Unicode Explanation (Enclosed Squared) */}
        <KotakUnicodeExplanation />

        {/* Section 7: Related Font Categories */}
        <RelatedFonts />

        {/* Section 8: Kotak Specific FAQs */}
        <KotakFAQ />

        {/* Section 9: Call to Action */}
        <KotakCTA />
      </main>

      {/* Reused Footer */}
      <Footer />

    </div>
  );
}
