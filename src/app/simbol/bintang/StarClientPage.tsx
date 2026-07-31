'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { StarHero } from '@/components/symbols-hub/stars/StarHero';
import { StarCategories } from '@/components/symbols-hub/stars/StarCategories';
import { StarGrid } from '@/components/symbols-hub/stars/StarGrid';
import { StarPopularUses } from '@/components/symbols-hub/stars/StarPopularUses';
import { StarUnicodeExplanation } from '@/components/symbols-hub/stars/StarUnicodeExplanation';
import { StarRelatedPages } from '@/components/symbols-hub/stars/StarRelatedPages';
import { StarFAQ } from '@/components/symbols-hub/stars/StarFAQ';
import { StarCTA } from '@/components/symbols-hub/stars/StarCTA';

export default function StarClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All Stars');

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
        <StarHero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onCopy={showToast}
        />

        {/* Section 2: Categories Pills */}
        <div className="pt-8 bg-slate-950">
          <StarCategories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        {/* Section 3: 150+ Star Symbols Grid (Copy, Favorite, Share) */}
        <StarGrid
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          onCopy={showToast}
        />

        {/* Section 4: Popular Uses Grid */}
        <StarPopularUses />

        {/* Section 5: Technical Unicode Explanation */}
        <StarUnicodeExplanation />

        {/* Section 6: Related Pages */}
        <StarRelatedPages />

        {/* Section 7: 10 FAQs with JSON-LD Schema */}
        <StarFAQ />

        {/* Section 8: Call To Action */}
        <StarCTA />
      </main>

      {/* Section 9: Shared Footer */}
      <Footer />
    </div>
  );
}
