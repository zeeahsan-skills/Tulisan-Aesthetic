'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { ArrowHero } from '@/components/symbols-hub/arrows/ArrowHero';
import { ArrowCategories } from '@/components/symbols-hub/arrows/ArrowCategories';
import { ArrowGrid } from '@/components/symbols-hub/arrows/ArrowGrid';
import { ArrowPopularUses } from '@/components/symbols-hub/arrows/ArrowPopularUses';
import { ArrowUnicodeExplanation } from '@/components/symbols-hub/arrows/ArrowUnicodeExplanation';
import { ArrowRelatedPages } from '@/components/symbols-hub/arrows/ArrowRelatedPages';
import { ArrowFAQ } from '@/components/symbols-hub/arrows/ArrowFAQ';
import { ArrowCTA } from '@/components/symbols-hub/arrows/ArrowCTA';

export default function ArrowClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All Arrows');

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
        <ArrowHero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onCopy={showToast}
        />

        {/* Section 2: Categories Pills */}
        <div className="pt-8 bg-slate-950">
          <ArrowCategories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        {/* Section 3: 200+ Arrow Symbols Grid (Copy, Favorite, Share) */}
        <ArrowGrid
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          onCopy={showToast}
        />

        {/* Section 4: Popular Uses Grid */}
        <ArrowPopularUses />

        {/* Section 5: Technical Unicode Explanation */}
        <ArrowUnicodeExplanation />

        {/* Section 6: Related Pages */}
        <ArrowRelatedPages />

        {/* Section 7: 10 FAQs with JSON-LD Schema */}
        <ArrowFAQ />

        {/* Section 8: Call To Action */}
        <ArrowCTA />
      </main>

      {/* Section 9: Shared Footer */}
      <Footer />
    </div>
  );
}
