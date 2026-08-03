'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { PlatformPillarHero } from '@/components/platform-hub/PlatformPillarHero';
import { PlatformOverview } from '@/components/platform-hub/PlatformOverview';
import { PlatformComparisonGrid } from '@/components/platform-hub/PlatformComparisonGrid';
import { PlatformUseCases } from '@/components/platform-hub/PlatformUseCases';
import { PlatformTipsGuide } from '@/components/platform-hub/PlatformTipsGuide';
import { PlatformPillarFAQ } from '@/components/platform-hub/PlatformPillarFAQ';
import { PlatformPillarArticles } from '@/components/platform-hub/PlatformPillarArticles';
import { PlatformPillarCTA } from '@/components/platform-hub/PlatformPillarCTA';

export default function PlatformClientPage() {
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
        <PlatformPillarHero onCopy={showToast} />
        <PlatformOverview />
        <PlatformComparisonGrid />
        <PlatformUseCases />
        <PlatformTipsGuide />
        <PlatformPillarFAQ />
        <PlatformPillarArticles />
        <PlatformPillarCTA />
      </main>

      <Footer />
    </div>
  );
}
