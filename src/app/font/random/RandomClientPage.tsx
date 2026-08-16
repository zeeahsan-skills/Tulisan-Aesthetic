'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { RandomHero } from '@/components/random/RandomHero';
import { RandomExamples } from '@/components/random/RandomExamples';
import { RandomAbout } from '@/components/random/RandomAbout';
import { RandomTutorial } from '@/components/random/RandomTutorial';
import { RandomPlatforms } from '@/components/random/RandomPlatforms';
import { RandomRelated } from '@/components/random/RandomRelated';
import { RandomFAQ } from '@/components/random/RandomFAQ';
import { RandomCTA } from '@/components/random/RandomCTA';

export default function RandomClientPage() {
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

      {/* Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero & Generator */}
        <RandomHero onCopy={showToast} />

        {/* Examples */}
        <RandomExamples onCopy={showToast} />

        {/* About & Randomizer Algorithm */}
        <RandomAbout />

        {/* Tutorial */}
        <RandomTutorial />

        {/* Platforms (Game & Bio IG) */}
        <RandomPlatforms />

        {/* Related Fonts */}
        <RandomRelated />

        {/* FAQ */}
        <RandomFAQ />

        {/* CTA */}
        <RandomCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
