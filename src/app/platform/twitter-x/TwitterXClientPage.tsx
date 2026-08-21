'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { TwitterXHero } from '@/components/platform/twitter-x/TwitterXHero';
import { TwitterXFontStyles } from '@/components/platform/twitter-x/TwitterXFontStyles';
import { TwitterXBestUses } from '@/components/platform/twitter-x/TwitterXBestUses';
import { TwitterXExamples } from '@/components/platform/twitter-x/TwitterXExamples';
import { TwitterXTips } from '@/components/platform/twitter-x/TwitterXTips';
import { TwitterXHowItWorks } from '@/components/platform/twitter-x/TwitterXHowItWorks';
import { TwitterXUnicodeExplanation } from '@/components/platform/twitter-x/TwitterXUnicodeExplanation';
import { TwitterXRelatedPages } from '@/components/platform/twitter-x/TwitterXRelatedPages';
import { TwitterXFAQ } from '@/components/platform/twitter-x/TwitterXFAQ';
import { TwitterXCTA } from '@/components/platform/twitter-x/TwitterXCTA';

export default function TwitterXClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <Toast message={toastMessage} />
      <Navbar />

      <main className="flex-1">
        <TwitterXHero onCopy={showToast} />
        <TwitterXFontStyles onCopy={showToast} />
        <TwitterXBestUses />
        <TwitterXExamples onCopy={showToast} />
        <TwitterXTips />
        <TwitterXHowItWorks />
        <TwitterXUnicodeExplanation />
        <TwitterXRelatedPages />
        <TwitterXFAQ />
        <TwitterXCTA />
      </main>

      <Footer />
    </div>
  );
}
