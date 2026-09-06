'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { KaomojiHero } from '@/components/symbols-hub/kaomojis/KaomojiHero';
import { KaomojiCategories } from '@/components/symbols-hub/kaomojis/KaomojiCategories';
import { KaomojiGrid } from '@/components/symbols-hub/kaomojis/KaomojiGrid';
import { KaomojiHowItWorks } from '@/components/symbols-hub/kaomojis/KaomojiHowItWorks';
import { KaomojiUnicodeExplanation } from '@/components/symbols-hub/kaomojis/KaomojiUnicodeExplanation';
import { KaomojiRelatedPages } from '@/components/symbols-hub/kaomojis/KaomojiRelatedPages';
import { RelatedBlogCallout } from '@/components/RelatedBlogCallout';
import { KaomojiFAQ } from '@/components/symbols-hub/kaomojis/KaomojiFAQ';
import { KaomojiCTA } from '@/components/symbols-hub/kaomojis/KaomojiCTA';

export default function KaomojiClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All Kaomoji');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Toast Notification Alert */}
      <Toast message={toastMessage} />

      {/* Sticky Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Hero & Search */}
        <KaomojiHero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onCopy={showToast}
        />

        {/* Section 2: Categories Pills */}
        <div className="pt-8 bg-slate-950">
          <KaomojiCategories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        {/* Section 3: 500+ Kaomoji Grid (Copy, Favorite, Share) */}
        <KaomojiGrid
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          onCopy={showToast}
        />

        {/* Section 4: How It Works Timeline */}
        <KaomojiHowItWorks />

        {/* Section 5: Technical Unicode Explanation */}
        <KaomojiUnicodeExplanation />

        {/* Section 6: Related Pages */}
        <KaomojiRelatedPages />

        {/* Section 6b: Contextual Related Blog Guides */}
        <RelatedBlogCallout
          title="Panduan Kaomoji Jepang & Emotikon Teks"
          subtitle="Pelajari sejarah kaomoji emotikon wajah Jepang, perbedaannya dengan emoji bergambar, serta cara penggunaannya di sosial media."
          articles={[
            {
              slug: 'kumpulan-kaomoji-jepang-lucu-terpopuler',
              title: 'Kumpulan 500+ Kaomoji Jepang Lucu & Ekspresif untuk Bio Social Media',
              desc: 'Mengenal emotikon teks Jepang (Kaomoji) (◕‿◕) dan cara menggunakannya di postingan TikTok, pesan WhatsApp, dan bio Discord.',
              category: 'Kaomoji',
              badge: '500+ Koleksi',
            },
            {
              slug: 'emoji-vs-kaomoji-perbedaan-dan-cara-pakai',
              title: 'Perbedaan Emoji Berwarna vs Kaomoji Teks: Mana yang Lebih Cocok untuk Anda?',
              desc: 'Ulasan perbandingan antara emoji grafis gambar berwarna dan emotikon teks kaomoji klasik dalam komunikasi pesan singkat.',
              category: 'Emoji',
              badge: 'Perbandingan',
            },
          ]}
        />

        {/* Section 7: 10 FAQs with JSON-LD Schema */}
        <KaomojiFAQ />

        {/* Section 8: Call To Action */}
        <KaomojiCTA />
      </main>

      {/* Section 9: Shared Footer */}
      <Footer />
    </div>
  );
}
