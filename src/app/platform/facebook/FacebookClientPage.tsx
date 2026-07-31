'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { FacebookHero } from '@/components/platform/facebook/FacebookHero';
import { FacebookFontStyles } from '@/components/platform/facebook/FacebookFontStyles';
import { FacebookBestUses } from '@/components/platform/facebook/FacebookBestUses';
import { FacebookExamples } from '@/components/platform/facebook/FacebookExamples';
import { FacebookTips } from '@/components/platform/facebook/FacebookTips';
import { FacebookHowItWorks } from '@/components/platform/facebook/FacebookHowItWorks';
import { FacebookUnicodeExplanation } from '@/components/platform/facebook/FacebookUnicodeExplanation';
import { FacebookRelatedPages } from '@/components/platform/facebook/FacebookRelatedPages';
import { FacebookFAQ } from '@/components/platform/facebook/FacebookFAQ';
import { FacebookCTA } from '@/components/platform/facebook/FacebookCTA';

export default function FacebookClientPage() {
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

      {/* Sticky Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero & Live Facebook Font Converter */}
        <FacebookHero onCopy={showToast} />

        {/* Section 2: Facebook Font Styles Catalog */}
        <FacebookFontStyles onCopy={showToast} />

        {/* Section 3: Best Uses Cards */}
        <FacebookBestUses />

        {/* Section 4: Popular Presets & Examples */}
        <FacebookExamples onCopy={showToast} />

        {/* Section 5: Facebook Optimization Tips */}
        <FacebookTips />

        {/* Section 6: How It Works Timeline */}
        <FacebookHowItWorks />

        {/* Section 7: Technical Unicode Explanation */}
        <FacebookUnicodeExplanation />

        {/* Section 8: Related Font & Platform Pages */}
        <FacebookRelatedPages />

        {/* Section 9: 10 Facebook FAQs with Schema */}
        <FacebookFAQ />

        {/* Section 10: Call To Action */}
        <FacebookCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
