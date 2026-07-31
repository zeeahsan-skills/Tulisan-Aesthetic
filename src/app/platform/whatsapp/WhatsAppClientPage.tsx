'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { WhatsAppHero } from '@/components/platform/whatsapp/WhatsAppHero';
import { WhatsAppFontStyles } from '@/components/platform/whatsapp/WhatsAppFontStyles';
import { WhatsAppBestUses } from '@/components/platform/whatsapp/WhatsAppBestUses';
import { WhatsAppExamples } from '@/components/platform/whatsapp/WhatsAppExamples';
import { WhatsAppTips } from '@/components/platform/whatsapp/WhatsAppTips';
import { WhatsAppHowItWorks } from '@/components/platform/whatsapp/WhatsAppHowItWorks';
import { WhatsAppUnicodeExplanation } from '@/components/platform/whatsapp/WhatsAppUnicodeExplanation';
import { WhatsAppRelatedPages } from '@/components/platform/whatsapp/WhatsAppRelatedPages';
import { WhatsAppFAQ } from '@/components/platform/whatsapp/WhatsAppFAQ';
import { WhatsAppCTA } from '@/components/platform/whatsapp/WhatsAppCTA';

export default function WhatsAppClientPage() {
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

      {/* Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero & Live WhatsApp Converter */}
        <WhatsAppHero onCopy={showToast} />

        {/* Section 2: Multiple WhatsApp Unicode Font Variations */}
        <WhatsAppFontStyles onCopy={showToast} />

        {/* Section 3: Best Uses Cards */}
        <WhatsAppBestUses />

        {/* Section 4: Popular Copyable Bio Examples & Presets */}
        <WhatsAppExamples onCopy={showToast} />

        {/* Section 5: WhatsApp Optimization Tips */}
        <WhatsAppTips />

        {/* Section 6: How It Works Timeline */}
        <WhatsAppHowItWorks />

        {/* Section 7: Technical Unicode Explanation */}
        <WhatsAppUnicodeExplanation />

        {/* Section 8: Related Font & Platform Pages */}
        <WhatsAppRelatedPages />

        {/* Section 9: 10 Accordion FAQs */}
        <WhatsAppFAQ />

        {/* Section 10: Call To Action */}
        <WhatsAppCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
