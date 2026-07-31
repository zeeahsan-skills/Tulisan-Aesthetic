'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { MlHero } from '@/components/game/mobile-legends/MlHero';
import { MlFontStyles } from '@/components/game/mobile-legends/MlFontStyles';
import { MlCategories } from '@/components/game/mobile-legends/MlCategories';
import { MlExamples } from '@/components/game/mobile-legends/MlExamples';
import { MlTips } from '@/components/game/mobile-legends/MlTips';
import { MlHowItWorks } from '@/components/game/mobile-legends/MlHowItWorks';
import { MlUnicodeExplanation } from '@/components/game/mobile-legends/MlUnicodeExplanation';
import { MlRelatedPages } from '@/components/game/mobile-legends/MlRelatedPages';
import { MlFAQ } from '@/components/game/mobile-legends/MlFAQ';
import { MlCTA } from '@/components/game/mobile-legends/MlCTA';

export default function MlClientPage() {
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
        {/* Section 1: Hero & Live MLBB Generator */}
        <MlHero onCopy={showToast} />

        {/* Section 2: Stylish Mobile Legends Names (Font Grid with Preview, Copy, Favorite, Share) */}
        <MlFontStyles onCopy={showToast} />

        {/* Section 3: Popular Categories Cards (Assassin, Marksman, Mage, Tank, Fighter, Support, Squad, VIP, Anime, Pro Player) */}
        <MlCategories />

        {/* Section 4: Popular Examples (Shadow, Lancelot, Dragon, Legend, Alpha, Phantom, King, Queen, Titan, Immortal) */}
        <MlExamples onCopy={showToast} />

        {/* Section 5: Mobile Legends Tips */}
        <MlTips />

        {/* Section 6: How It Works Timeline */}
        <MlHowItWorks />

        {/* Section 7: Technical Unicode Explanation */}
        <MlUnicodeExplanation />

        {/* Section 8: Related Font & Game Pages */}
        <MlRelatedPages />

        {/* Section 9: 10 Mobile Legends FAQs with Schema */}
        <MlFAQ />

        {/* Section 10: Call To Action */}
        <MlCTA />
      </main>

      {/* Section 11: Shared Footer */}
      <Footer />
    </div>
  );
}
