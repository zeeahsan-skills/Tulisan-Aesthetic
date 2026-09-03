'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { HeartHero } from '@/components/symbols-hub/hearts/HeartHero';
import { HeartCategories } from '@/components/symbols-hub/hearts/HeartCategories';
import { HeartGrid } from '@/components/symbols-hub/hearts/HeartGrid';
import { HeartPopularUses } from '@/components/symbols-hub/hearts/HeartPopularUses';
import { HeartUnicodeExplanation } from '@/components/symbols-hub/hearts/HeartUnicodeExplanation';
import { HeartRelatedPages } from '@/components/symbols-hub/hearts/HeartRelatedPages';
import { HeartFAQ } from '@/components/symbols-hub/hearts/HeartFAQ';
import { HeartCTA } from '@/components/symbols-hub/hearts/HeartCTA';

export default function HeartClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All Hearts');

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
        {/* Section 1: Hero & Heart Font Generator */}
        <HeartHero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onCopy={showToast}
        />

        {/* Section 2: Categories Pills */}
        <div className="pt-8 bg-slate-950">
          <HeartCategories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        {/* Section 3: 150+ Heart Symbols Grid */}
        <HeartGrid
          searchQuery={searchQuery}
          activeCategory={activeCategory}
          onCopy={showToast}
        />

        {/* Section 4: Popular Uses Grid */}
        <HeartPopularUses />

        {/* Section 5: Technical Unicode Explanation */}
        <HeartUnicodeExplanation />

        {/* Section 6: Related Pages */}
        <HeartRelatedPages />

        {/* Section 7: 10 FAQs with JSON-LD Schema */}
        <HeartFAQ />

        {/* Section 8: Call To Action */}
        <HeartCTA />
      </main>

      {/* Section 9: Shared Footer */}
      <Footer />
    </div>
  );
}
