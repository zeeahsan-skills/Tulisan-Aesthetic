'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { GlitchHero } from '@/components/glitch/GlitchHero';
import { GlitchExamples } from '@/components/glitch/GlitchExamples';
import { GlitchAbout } from '@/components/glitch/GlitchAbout';
import { GlitchTutorial } from '@/components/glitch/GlitchTutorial';
import { GlitchPlatforms } from '@/components/glitch/GlitchPlatforms';
import { GlitchRelated } from '@/components/glitch/GlitchRelated';
import { GlitchFAQ } from '@/components/glitch/GlitchFAQ';
import { GlitchCTA } from '@/components/glitch/GlitchCTA';

export default function GlitchClientPage() {
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
        <GlitchHero onCopy={showToast} />

        {/* Examples */}
        <GlitchExamples onCopy={showToast} />

        {/* About & Unicode Zalgo Explanation */}
        <GlitchAbout />

        {/* Tutorial */}
        <GlitchTutorial />

        {/* Platforms (Game & Discord) */}
        <GlitchPlatforms />

        {/* Related Fonts */}
        <GlitchRelated />

        {/* FAQ */}
        <GlitchFAQ />

        {/* CTA */}
        <GlitchCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
