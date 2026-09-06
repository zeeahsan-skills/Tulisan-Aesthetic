'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { FlowerHero } from '@/components/symbols-hub/flowers/FlowerHero';
import { FlowerCategories } from '@/components/symbols-hub/flowers/FlowerCategories';
import { FlowerGrid } from '@/components/symbols-hub/flowers/FlowerGrid';
import { FlowerPopularUses } from '@/components/symbols-hub/flowers/FlowerPopularUses';
import { FlowerUnicodeExplanation } from '@/components/symbols-hub/flowers/FlowerUnicodeExplanation';
import { FlowerRelatedPages } from '@/components/symbols-hub/flowers/FlowerRelatedPages';
import { RelatedBlogCallout } from '@/components/RelatedBlogCallout';
import { FlowerFAQ } from '@/components/symbols-hub/flowers/FlowerFAQ';
import { FlowerCTA } from '@/components/symbols-hub/flowers/FlowerCTA';

export default function FlowerClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All Flowers');

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
        <FlowerHero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onCopy={showToast}
        />

        {/* Section 2: Categories Pills */}
        <div className="pt-8 bg-slate-950">
          <FlowerCategories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        {/* Section 3: 150+ Flower Symbols Grid (Copy, Favorite, Share) */}
        <FlowerGrid
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          onCopy={showToast}
        />

        {/* Section 4: Popular Uses Grid */}
        <FlowerPopularUses />

        {/* Section 5: Technical Unicode Explanation */}
        <FlowerUnicodeExplanation />

        {/* Section 6: Related Pages */}
        <FlowerRelatedPages />

        {/* Section 6b: Contextual Related Blog Guide */}
        <RelatedBlogCallout
          title="Panduan Simbol Bunga & Desain Bio Aesthetic"
          subtitle="Pelajari makna simbol bunga mekar (sakura, mawar, blossom), inspirasi penataan bio media sosial, dan tips estetika."
          articles={[
            {
              slug: 'simbol-bintang-dan-bunga-untuk-desain-bio',
              title: 'Makna & Cara Pakai Simbol Bintang & Bunga Estetik untuk Bio Medsos',
              desc: 'Jelajahi variasi simbol Unicode bintang (★, ✦, ✨) dan bunga (🌸, 🌹, 🌺) untuk dekorasi bio Instagram dan postingan blog.',
              category: 'Symbols',
              badge: 'Panduan Simbol',
            },
          ]}
        />

        {/* Section 7: 10 FAQs with JSON-LD Schema */}
        <FlowerFAQ />

        {/* Section 8: Call To Action */}
        <FlowerCTA />
      </main>

      {/* Section 9: Shared Footer */}
      <Footer />
    </div>
  );
}
