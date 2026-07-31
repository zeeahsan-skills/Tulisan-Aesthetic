'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { CrownHero } from '@/components/symbols-hub/crowns/CrownHero';
import { CrownCategories } from '@/components/symbols-hub/crowns/CrownCategories';
import { CrownGrid } from '@/components/symbols-hub/crowns/CrownGrid';
import { CrownPopularUses } from '@/components/symbols-hub/crowns/CrownPopularUses';
import { CrownUnicodeExplanation } from '@/components/symbols-hub/crowns/CrownUnicodeExplanation';
import { CrownRelatedPages } from '@/components/symbols-hub/crowns/CrownRelatedPages';
import { CrownFAQ } from '@/components/symbols-hub/crowns/CrownFAQ';
import { CrownCTA } from '@/components/symbols-hub/crowns/CrownCTA';

export default function CrownClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All Crowns');

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
        <CrownHero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onCopy={showToast}
        />

        {/* Section 2: Categories Pills */}
        <div className="pt-8 bg-slate-950">
          <CrownCategories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        {/* Section 3: 150+ Crown Symbols Grid (Copy, Favorite, Share) */}
        <CrownGrid
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          onCopy={showToast}
        />

        {/* Section 4: Popular Uses Grid */}
        <CrownPopularUses />

        {/* Section 5: Technical Unicode Explanation */}
        <CrownUnicodeExplanation />

        {/* Section 6: Related Pages */}
        <CrownRelatedPages />

        {/* Section 7: 10 FAQs with JSON-LD Schema */}
        <CrownFAQ />

        {/* Section 8: Call To Action */}
        <CrownCTA />
      </main>

      {/* Section 9: Shared Footer */}
      <Footer />
    </div>
  );
}
