'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { GamingNicknames } from '@/components/GamingNicknames';
import { HeroSection } from '@/components/HeroSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';

export default function GameClientPage() {
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
        <HeroSection onCopy={showToast} />
        <GamingNicknames onCopy={showToast} />
        <WhyChooseUs />
        <FAQSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
