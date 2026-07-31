'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { PubgHero } from '@/components/game/pubg-mobile/PubgHero';
import { PubgFontStyles } from '@/components/game/pubg-mobile/PubgFontStyles';
import { PubgCategories } from '@/components/game/pubg-mobile/PubgCategories';
import { PubgExamples } from '@/components/game/pubg-mobile/PubgExamples';
import { PubgTips } from '@/components/game/pubg-mobile/PubgTips';
import { PubgHowItWorks } from '@/components/game/pubg-mobile/PubgHowItWorks';
import { PubgUnicodeExplanation } from '@/components/game/pubg-mobile/PubgUnicodeExplanation';
import { PubgRelatedPages } from '@/components/game/pubg-mobile/PubgRelatedPages';
import { PubgFAQ } from '@/components/game/pubg-mobile/PubgFAQ';
import { PubgCTA } from '@/components/game/pubg-mobile/PubgCTA';

export default function PubgClientPage() {
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
        {/* Section 1: Hero & Live PUBG Mobile Generator */}
        <PubgHero onCopy={showToast} />

        {/* Section 2: PUBG Font Styles Catalog */}
        <PubgFontStyles onCopy={showToast} />

        {/* Section 3: Popular Categories Cards */}
        <PubgCategories />

        {/* Section 4: Popular Presets & Examples */}
        <PubgExamples onCopy={showToast} />

        {/* Section 5: PUBG Mobile Nickname Tips */}
        <PubgTips />

        {/* Section 6: How It Works Timeline */}
        <PubgHowItWorks />

        {/* Section 7: Technical Unicode Explanation */}
        <PubgUnicodeExplanation />

        {/* Section 8: Related Font & Game Pages */}
        <PubgRelatedPages />

        {/* Section 9: 10 PUBG Mobile FAQs with Schema */}
        <PubgFAQ />

        {/* Section 10: Call To Action */}
        <PubgCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
