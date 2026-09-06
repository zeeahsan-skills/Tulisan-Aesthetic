'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { TikTokHero } from '@/components/platform/tiktok/TikTokHero';
import { TikTokFontStyles } from '@/components/platform/tiktok/TikTokFontStyles';
import { TikTokBestUses } from '@/components/platform/tiktok/TikTokBestUses';
import { TikTokExamples } from '@/components/platform/tiktok/TikTokExamples';
import { TikTokTips } from '@/components/platform/tiktok/TikTokTips';
import { TikTokHowItWorks } from '@/components/platform/tiktok/TikTokHowItWorks';
import { TikTokUnicodeExplanation } from '@/components/platform/tiktok/TikTokUnicodeExplanation';
import { TikTokRelatedPages } from '@/components/platform/tiktok/TikTokRelatedPages';
import { RelatedBlogCallout } from '@/components/RelatedBlogCallout';
import { TikTokFAQ } from '@/components/platform/tiktok/TikTokFAQ';
import { TikTokCTA } from '@/components/platform/tiktok/TikTokCTA';

export default function TikTokClientPage() {
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
        {/* Section 1: Hero & Live TikTok Converter */}
        <TikTokHero onCopy={showToast} />

        {/* Section 2: Multiple TikTok Unicode Font Variations */}
        <TikTokFontStyles onCopy={showToast} />

        {/* Section 3: Best Uses Cards */}
        <TikTokBestUses />

        {/* Section 4: Popular Copyable Bio Examples & Presets */}
        <TikTokExamples onCopy={showToast} />

        {/* Section 5: TikTok Optimization Tips */}
        <TikTokTips />

        {/* Section 6: How It Works Timeline */}
        <TikTokHowItWorks />

        {/* Section 7: Technical Unicode Explanation */}
        <TikTokUnicodeExplanation />

        {/* Section 8: Related Font & Platform Pages */}
        <TikTokRelatedPages />

        {/* Section 8b: Contextual Related Blog Guides */}
        <RelatedBlogCallout
          title="Panduan Font TikTok & Tips Masuk FYP"
          subtitle="Pelajari cara mengoptimalkan font estetik untuk profil, username, dan teknik penulisan caption agar video masuk FYP."
          articles={[
            {
              slug: 'font-tiktok',
              title: 'Font TikTok: Cara Membuat Tulisan Aesthetic untuk Profil & Caption',
              desc: 'Pelajari cara menggunakan font TikTok dengan Unicode untuk membuat profil, username, bio, caption, dan komentar menjadi lebih menarik.',
              category: 'TikTok',
              badge: 'Panduan Dasar',
            },
            {
              slug: 'tulisan-aesthetic-tiktok-caption-fyp',
              title: 'Cara Membuat Tulisan Aesthetic di Caption TikTok Agar Masuk FYP',
              desc: 'Tips mengoptimalkan teks caption TikTok dengan kombinasi font miring, emoji berwarna, dan hashtag estetik untuk menaikkan engagement.',
              category: 'TikTok',
              badge: 'Tips FYP',
            },
          ]}
        />

        {/* Section 9: 10 Accordion FAQs */}
        <TikTokFAQ />

        {/* Section 10: Call To Action */}
        <TikTokCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
