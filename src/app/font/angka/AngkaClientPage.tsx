'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { AngkaHero } from '@/components/angka/AngkaHero';
import { PopularAngkaStyles } from '@/components/angka/PopularAngkaStyles';
import { AngkaBestUses } from '@/components/angka/AngkaBestUses';
import { AngkaExamples } from '@/components/angka/AngkaExamples';
import { AngkaHowItWorks } from '@/components/angka/AngkaHowItWorks';
import { AngkaUnicodeExplanation } from '@/components/angka/AngkaUnicodeExplanation';
import { RelatedFonts } from '@/components/angka/RelatedFonts';
import { AngkaFAQ } from '@/components/angka/AngkaFAQ';
import { AngkaCTA } from '@/components/angka/AngkaCTA';

export default function AngkaClientPage() {
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
        {/* Section 1: Hero & Live Angka Keren Generator */}
        <AngkaHero onCopy={showToast} />

        {/* Section 2: Popular Angka Styles */}
        <PopularAngkaStyles onCopy={showToast} />

        {/* Section 3: Best Uses */}
        <AngkaBestUses />

        {/* Section 4: Copyable Presets & Examples */}
        <AngkaExamples onCopy={showToast} />

        {/* Section 5: Timeline - How It Works */}
        <AngkaHowItWorks />

        {/* Section 6: Unicode Explanation (Circled & Mathematical Digits) */}
        <AngkaUnicodeExplanation />

        {/* Section 7: Related Font Categories */}
        <RelatedFonts />

        {/* Section 8: Angka Specific FAQs */}
        <AngkaFAQ />

        {/* Section 9: Call to Action */}
        <AngkaCTA />
      </main>

      {/* Reused Footer */}
      <Footer />

    </div>
  );
}
