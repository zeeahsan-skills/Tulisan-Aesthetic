'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { BubbleHero } from '@/components/bubble/BubbleHero';
import { PopularBubbleStyles } from '@/components/bubble/PopularBubbleStyles';
import { BubbleBestUses } from '@/components/bubble/BubbleBestUses';
import { BubbleExamples } from '@/components/bubble/BubbleExamples';
import { BubbleHowItWorks } from '@/components/bubble/BubbleHowItWorks';
import { BubbleUnicodeExplanation } from '@/components/bubble/BubbleUnicodeExplanation';
import { RelatedFonts } from '@/components/bubble/RelatedFonts';
import { BubbleFAQ } from '@/components/bubble/BubbleFAQ';
import { BubbleCTA } from '@/components/bubble/BubbleCTA';

export default function BubbleClientPage() {
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
        {/* Section 1: Hero & Live Bubble Generator */}
        <BubbleHero onCopy={showToast} />

        {/* Section 2: Popular Bubble Styles */}
        <PopularBubbleStyles onCopy={showToast} />

        {/* Section 3: Best Uses */}
        <BubbleBestUses />

        {/* Section 4: Copyable Presets & Examples */}
        <BubbleExamples onCopy={showToast} />

        {/* Section 5: Timeline - How It Works */}
        <BubbleHowItWorks />

        {/* Section 6: Unicode Explanation (Enclosed Alphanumerics) */}
        <BubbleUnicodeExplanation />

        {/* Section 7: Related Font Categories */}
        <RelatedFonts />

        {/* Section 8: Bubble Specific FAQs */}
        <BubbleFAQ />

        {/* Section 9: Call to Action */}
        <BubbleCTA />
      </main>

      {/* Reused Footer */}
      <Footer />

    </div>
  );
}
