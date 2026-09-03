'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { ValorantHero } from '@/components/game/valorant/ValorantHero';
import { ValorantFontStyles } from '@/components/game/valorant/ValorantFontStyles';
import { ValorantCategories } from '@/components/game/valorant/ValorantCategories';
import { ValorantExamples } from '@/components/game/valorant/ValorantExamples';
import { ValorantTips } from '@/components/game/valorant/ValorantTips';
import { ValorantHowItWorks } from '@/components/game/valorant/ValorantHowItWorks';
import { ValorantUnicodeExplanation } from '@/components/game/valorant/ValorantUnicodeExplanation';
import { ValorantRelatedPages } from '@/components/game/valorant/ValorantRelatedPages';
import { ValorantFAQ } from '@/components/game/valorant/ValorantFAQ';
import { ValorantCTA } from '@/components/game/valorant/ValorantCTA';

export default function ValorantClientPage() {
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
        {/* Section 1: Hero & Live Valorant Generator */}
        <ValorantHero onCopy={showToast} />

        {/* Section 2: Valorant Font Styles Catalog */}
        <ValorantFontStyles onCopy={showToast} />

        {/* Section 3: Popular Agent Roles Categories */}
        <ValorantCategories />

        {/* Section 4: 20+ Valorant Presets & Examples */}
        <ValorantExamples onCopy={showToast} />

        {/* Section 5: Riot ID Nickname Tips */}
        <ValorantTips />

        {/* Section 6: How It Works - Step-by-Step */}
        <ValorantHowItWorks />

        {/* Section 7: Technical Unicode & Scoreboard Compatibility */}
        <ValorantUnicodeExplanation />

        {/* Section 8: Related Games & Font Pages */}
        <ValorantRelatedPages />

        {/* Section 9: 10 Valorant FAQs with Schema */}
        <ValorantFAQ />

        {/* Section 10: Call To Action */}
        <ValorantCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
