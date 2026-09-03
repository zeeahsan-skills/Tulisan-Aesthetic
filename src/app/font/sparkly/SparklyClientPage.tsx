'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { SparklyHero } from '@/components/sparkly/SparklyHero';
import { SparklyExamples } from '@/components/sparkly/SparklyExamples';
import { SparklyAbout } from '@/components/sparkly/SparklyAbout';
import { SparklyTutorial } from '@/components/sparkly/SparklyTutorial';
import { SparklyPlatforms } from '@/components/sparkly/SparklyPlatforms';
import { SparklyGaming } from '@/components/sparkly/SparklyGaming';
import { SparklyRelated } from '@/components/sparkly/SparklyRelated';
import { SparklyFAQ } from '@/components/sparkly/SparklyFAQ';
import { SparklyCTA } from '@/components/sparkly/SparklyCTA';

export default function SparklyClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Toast Notification */}
      <Toast message={toastMessage} />

      {/* Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero & Dedicated Sparkly Font Generator */}
        <SparklyHero onCopy={showToast} />

        {/* Section 2: Contoh Gaya Sparkly */}
        <SparklyExamples onCopy={showToast} />

        {/* Section 3: Apa Itu Sparkly Font? */}
        <SparklyAbout />

        {/* Section 4: Cara Membuat Font Sparkly */}
        <SparklyTutorial />

        {/* Section 5: Sparkly Font untuk Platform Media Sosial */}
        <SparklyPlatforms />

        {/* Section 6: Sparkly Font untuk Nickname Game */}
        <SparklyGaming />

        {/* Section 7: Gaya Font & Generator Terkait */}
        <SparklyRelated />

        {/* Section 8: FAQ Sparkly Font */}
        <SparklyFAQ />

        {/* Section 9: Call To Action */}
        <SparklyCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
