'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { EmojiHero } from '@/components/symbols-hub/emojis/EmojiHero';
import { EmojiCategories } from '@/components/symbols-hub/emojis/EmojiCategories';
import { EmojiGrid } from '@/components/symbols-hub/emojis/EmojiGrid';
import { EmojiPopularCollections } from '@/components/symbols-hub/emojis/EmojiPopularCollections';
import { EmojiUnicodeExplanation } from '@/components/symbols-hub/emojis/EmojiUnicodeExplanation';
import { EmojiRelatedPages } from '@/components/symbols-hub/emojis/EmojiRelatedPages';
import { EmojiFAQ } from '@/components/symbols-hub/emojis/EmojiFAQ';
import { EmojiCTA } from '@/components/symbols-hub/emojis/EmojiCTA';

export default function EmojiClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All Emojis');
  const [activeCollection, setActiveCollection] = useState<string | null>(null);

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
        <EmojiHero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onCopy={showToast}
        />

        {/* Section 2: Categories Pills */}
        <div className="pt-8 bg-slate-950">
          <EmojiCategories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        {/* Section 3: 250+ Emoji Grid (Copy, Favorite, Share) */}
        <EmojiGrid
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          activeCollection={activeCollection}
          onCopy={showToast}
        />

        {/* Section 4: Popular Collections Grid */}
        <EmojiPopularCollections
          activeCollection={activeCollection}
          setActiveCollection={setActiveCollection}
          onCopy={showToast}
        />

        {/* Section 5: Technical Unicode Explanation */}
        <EmojiUnicodeExplanation />

        {/* Section 6: Related Pages */}
        <EmojiRelatedPages />

        {/* Section 7: 10 FAQs with JSON-LD Schema */}
        <EmojiFAQ />

        {/* Section 8: Call To Action */}
        <EmojiCTA />
      </main>

      {/* Section 9: Shared Footer */}
      <Footer />
    </div>
  );
}
