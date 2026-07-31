'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { RobloxHero } from '@/components/game/roblox/RobloxHero';
import { RobloxFontStyles } from '@/components/game/roblox/RobloxFontStyles';
import { RobloxCategories } from '@/components/game/roblox/RobloxCategories';
import { RobloxExamples } from '@/components/game/roblox/RobloxExamples';
import { RobloxTips } from '@/components/game/roblox/RobloxTips';
import { RobloxHowItWorks } from '@/components/game/roblox/RobloxHowItWorks';
import { RobloxUnicodeExplanation } from '@/components/game/roblox/RobloxUnicodeExplanation';
import { RobloxRelatedPages } from '@/components/game/roblox/RobloxRelatedPages';
import { RobloxFAQ } from '@/components/game/roblox/RobloxFAQ';
import { RobloxCTA } from '@/components/game/roblox/RobloxCTA';

export default function RobloxClientPage() {
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
        {/* Section 1: Hero & Live Roblox Generator */}
        <RobloxHero onCopy={showToast} />

        {/* Section 2: Roblox Name Styles (Font Grid with Preview, Copy, Favorite, Share) */}
        <RobloxFontStyles onCopy={showToast} />

        {/* Section 3: Popular Categories Cards */}
        <RobloxCategories />

        {/* Section 4: Popular Examples */}
        <RobloxExamples onCopy={showToast} />

        {/* Section 5: Roblox Username Tips */}
        <RobloxTips />

        {/* Section 6: How It Works Timeline */}
        <RobloxHowItWorks />

        {/* Section 7: Technical Unicode Explanation */}
        <RobloxUnicodeExplanation />

        {/* Section 8: Related Font & Game Pages */}
        <RobloxRelatedPages />

        {/* Section 9: 10 Roblox FAQs with Schema */}
        <RobloxFAQ />

        {/* Section 10: Call To Action */}
        <RobloxCTA />
      </main>

      {/* Section 11: Shared Footer */}
      <Footer />
    </div>
  );
}
