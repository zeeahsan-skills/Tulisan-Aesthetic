'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { SymbolsHero } from '@/components/symbols-hub/SymbolsHero';
import { SymbolsCategoriesGrid } from '@/components/symbols-hub/SymbolsCategoriesGrid';
import { PopularSymbolsSection } from '@/components/symbols-hub/PopularSymbolsSection';
import { SymbolsSearchSection } from '@/components/symbols-hub/SymbolsSearchSection';
import { SymbolsHowItWorks } from '@/components/symbols-hub/SymbolsHowItWorks';
import { SymbolsUnicodeExplanation } from '@/components/symbols-hub/SymbolsUnicodeExplanation';
import { SymbolsRelatedPages } from '@/components/symbols-hub/SymbolsRelatedPages';
import { SymbolsFAQ } from '@/components/symbols-hub/SymbolsFAQ';
import { SymbolsCTA } from '@/components/symbols-hub/SymbolsCTA';

export default function SymbolsClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

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
        {/* Section 1: Hero & Search Box */}
        <SymbolsHero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onCopy={showToast}
        />

        {/* Section 2: Symbol Categories (12 Grid Cards) */}
        <SymbolsCategoriesGrid
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Section 3: Popular Copyable Symbols */}
        <PopularSymbolsSection onCopy={showToast} />

        {/* Section 4: Live Search & Category Filter Library */}
        <SymbolsSearchSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          onCopy={showToast}
        />

        {/* Section 5: How It Works Timeline */}
        <SymbolsHowItWorks />

        {/* Section 6: Technical Unicode Explanation */}
        <SymbolsUnicodeExplanation />

        {/* Section 7: Related Pages */}
        <SymbolsRelatedPages />

        {/* Section 8: 10 FAQs with JSON-LD Schema */}
        <SymbolsFAQ />

        {/* Section 9: Call To Action */}
        <SymbolsCTA />
      </main>

      {/* Section 10: Shared Footer */}
      <Footer />
    </div>
  );
}
