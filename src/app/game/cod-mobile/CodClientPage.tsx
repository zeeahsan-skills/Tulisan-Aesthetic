'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { CodHero } from '@/components/game/cod-mobile/CodHero';
import { CodFontStyles } from '@/components/game/cod-mobile/CodFontStyles';
import { CodCategories } from '@/components/game/cod-mobile/CodCategories';
import { CodExamples } from '@/components/game/cod-mobile/CodExamples';
import { CodTips } from '@/components/game/cod-mobile/CodTips';
import { CodHowItWorks } from '@/components/game/cod-mobile/CodHowItWorks';
import { CodUnicodeExplanation } from '@/components/game/cod-mobile/CodUnicodeExplanation';
import { CodRelatedPages } from '@/components/game/cod-mobile/CodRelatedPages';
import { CodFAQ } from '@/components/game/cod-mobile/CodFAQ';
import { CodCTA } from '@/components/game/cod-mobile/CodCTA';

export default function CodClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Toast Notification Alert */}
      <Toast message={toastMessage} />

      {/* Sticky Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero & Live CODM Generator */}
        <CodHero onCopy={showToast} />

        {/* Section 2: COD Mobile Name Styles (Font Grid with Preview, Copy, Favorite, Share) */}
        <CodFontStyles onCopy={showToast} />

        {/* Section 3: Popular Categories Cards */}
        <CodCategories />

        {/* Section 4: Popular Examples */}
        <CodExamples onCopy={showToast} />

        {/* Section 5: COD Mobile Name Tips */}
        <CodTips />

        {/* Section 6: How It Works Timeline */}
        <CodHowItWorks />

        {/* Section 7: Technical Unicode Explanation */}
        <CodUnicodeExplanation />

        {/* Section 8: Related Font & Game Pages */}
        <CodRelatedPages />

        {/* Section 9: 10 CODM FAQs with Schema */}
        <CodFAQ />

        {/* Section 10: Call To Action */}
        <CodCTA />
      </main>

      {/* Section 11: Shared Footer */}
      <Footer />
    </div>
  );
}
