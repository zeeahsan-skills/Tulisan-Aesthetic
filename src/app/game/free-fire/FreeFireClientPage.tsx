'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { FreeFireHero } from '@/components/game/free-fire/FreeFireHero';
import { FreeFireFontStyles } from '@/components/game/free-fire/FreeFireFontStyles';
import { FreeFireCategories } from '@/components/game/free-fire/FreeFireCategories';
import { FreeFireExamples } from '@/components/game/free-fire/FreeFireExamples';
import { FreeFireTips } from '@/components/game/free-fire/FreeFireTips';
import { FreeFireHowItWorks } from '@/components/game/free-fire/FreeFireHowItWorks';
import { FreeFireUnicodeExplanation } from '@/components/game/free-fire/FreeFireUnicodeExplanation';
import { FreeFireRelatedPages } from '@/components/game/free-fire/FreeFireRelatedPages';
import { FreeFireFAQ } from '@/components/game/free-fire/FreeFireFAQ';
import { FreeFireCTA } from '@/components/game/free-fire/FreeFireCTA';

export default function FreeFireClientPage() {
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
        {/* Section 1: Hero & Live Free Fire Generator */}
        <FreeFireHero onCopy={showToast} />

        {/* Section 2: Free Fire Font Styles Catalog */}
        <FreeFireFontStyles onCopy={showToast} />

        {/* Section 3: Popular Categories Cards */}
        <FreeFireCategories />

        {/* Section 4: Popular Presets & Examples */}
        <FreeFireExamples onCopy={showToast} />

        {/* Section 5: Free Fire Nickname Tips */}
        <FreeFireTips />

        {/* Section 6: How It Works Timeline */}
        <FreeFireHowItWorks />

        {/* Section 7: Technical Unicode Explanation */}
        <FreeFireUnicodeExplanation />

        {/* Section 8: Related Font & Platform Pages */}
        <FreeFireRelatedPages />

        {/* Section 9: 10 Free Fire FAQs with Schema */}
        <FreeFireFAQ />

        {/* Section 10: Call To Action */}
        <FreeFireCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
