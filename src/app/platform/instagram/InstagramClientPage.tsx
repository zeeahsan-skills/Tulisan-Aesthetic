'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { InstagramHero } from '@/components/platform/instagram/InstagramHero';
import { InstagramFontStyles } from '@/components/platform/instagram/InstagramFontStyles';
import { InstagramBestUses } from '@/components/platform/instagram/InstagramBestUses';
import { InstagramExamples } from '@/components/platform/instagram/InstagramExamples';
import { InstagramTips } from '@/components/platform/instagram/InstagramTips';
import { InstagramHowItWorks } from '@/components/platform/instagram/InstagramHowItWorks';
import { InstagramUnicodeExplanation } from '@/components/platform/instagram/InstagramUnicodeExplanation';
import { InstagramRelatedPages } from '@/components/platform/instagram/InstagramRelatedPages';
import { RelatedBlogCallout } from '@/components/RelatedBlogCallout';
import { InstagramFAQ } from '@/components/platform/instagram/InstagramFAQ';
import { InstagramCTA } from '@/components/platform/instagram/InstagramCTA';

export default function InstagramClientPage() {
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
        {/* Section 1: Hero & Live Instagram Converter */}
        <InstagramHero onCopy={showToast} />

        {/* Section 2: Multiple Instagram Unicode Font Variations */}
        <InstagramFontStyles onCopy={showToast} />

        {/* Section 3: Best Uses Cards */}
        <InstagramBestUses />

        {/* Section 4: Popular Copyable Bio Examples & Presets */}
        <InstagramExamples onCopy={showToast} />

        {/* Section 5: Instagram Optimization Tips */}
        <InstagramTips />

        {/* Section 6: How It Works Timeline */}
        <InstagramHowItWorks />

        {/* Section 7: Technical Unicode Explanation */}
        <InstagramUnicodeExplanation />

        {/* Section 8: Related Font & Platform Pages */}
        <InstagramRelatedPages />

        {/* Section 8b: Contextual Related Blog Guide */}
        <RelatedBlogCallout
          title="Panduan Font Bio & Caption Instagram"
          subtitle="Pelajari teknik optimasi teks estetik, pemilihan font Unicode, dan tips mempercantik profil Instagram Anda."
          articles={[
            {
              slug: 'font-instagram',
              title: 'Cara Membuat Font Aesthetic Bio Instagram yang Menarik & Viral',
              desc: 'Panduan lengkap mengubah teks bio Instagram dengan font aesthetic Unicode, simbol bintang, dan kaomoji unik agar profil terlihat aesthetic.',
              category: 'Instagram',
              badge: 'Panduan Lengkap',
            },
          ]}
        />

        {/* Section 9: 10 Accordion FAQs */}
        <InstagramFAQ />

        {/* Section 10: Call To Action */}
        <InstagramCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
