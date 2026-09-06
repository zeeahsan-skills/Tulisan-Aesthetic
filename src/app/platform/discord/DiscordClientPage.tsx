'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { DiscordHero } from '@/components/platform/discord/DiscordHero';
import { DiscordFontStyles } from '@/components/platform/discord/DiscordFontStyles';
import { DiscordBestUses } from '@/components/platform/discord/DiscordBestUses';
import { DiscordExamples } from '@/components/platform/discord/DiscordExamples';
import { DiscordTips } from '@/components/platform/discord/DiscordTips';
import { DiscordHowItWorks } from '@/components/platform/discord/DiscordHowItWorks';
import { DiscordUnicodeExplanation } from '@/components/platform/discord/DiscordUnicodeExplanation';
import { DiscordRelatedPages } from '@/components/platform/discord/DiscordRelatedPages';
import { RelatedBlogCallout } from '@/components/RelatedBlogCallout';
import { DiscordFAQ } from '@/components/platform/discord/DiscordFAQ';
import { DiscordCTA } from '@/components/platform/discord/DiscordCTA';

export default function DiscordClientPage() {
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

      {/* Sticky Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero & Live Discord Font Converter */}
        <DiscordHero onCopy={showToast} />

        {/* Section 2: Discord Font Styles Catalog */}
        <DiscordFontStyles onCopy={showToast} />

        {/* Section 3: Best Uses Cards */}
        <DiscordBestUses />

        {/* Section 4: Popular Presets & Examples */}
        <DiscordExamples onCopy={showToast} />

        {/* Section 5: Discord Optimization Tips */}
        <DiscordTips />

        {/* Section 6: How It Works Timeline */}
        <DiscordHowItWorks />

        {/* Section 7: Technical Unicode Explanation */}
        <DiscordUnicodeExplanation />

        {/* Section 8: Related Font & Platform Pages */}
        <DiscordRelatedPages />

        {/* Section 8b: Contextual Related Blog Guide */}
        <RelatedBlogCallout
          title="Panduan Format Teks Markdown & Font Discord"
          subtitle="Pelajari cara mempercantik tampilan chat server, channel topic, nama role, dan profil Discord dengan Markdown & Unicode."
          articles={[
            {
              slug: 'cara-format-teks-discord-markdown-font',
              title: 'Panduan Format Teks Discord: Bold, Italic, Codeblock & Font Unicode',
              desc: 'Trik mempercantik tampilan chat server Discord dan deskripsi profil menggunakan sintaks Markdown serta karakter generator font.',
              category: 'Discord',
              badge: 'Panduan Discord',
            },
          ]}
        />

        {/* Section 9: 10 Discord FAQs with Schema */}
        <DiscordFAQ />

        {/* Section 10: Call To Action */}
        <DiscordCTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
