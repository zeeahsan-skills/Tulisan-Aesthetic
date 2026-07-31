'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { BlogHero } from '@/components/blog/BlogHero';
import { BlogCategories } from '@/components/blog/BlogCategories';
import { PopularArticles } from '@/components/blog/PopularArticles';
import { BlogArticleGrid } from '@/components/blog/BlogArticleGrid';
import { BlogNewsletterCTA } from '@/components/blog/BlogNewsletterCTA';
import { BlogFAQ } from '@/components/blog/BlogFAQ';

export default function BlogClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeCategory, setActiveCategory] = useState<string>('All Articles');

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
        <BlogHero
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Section 2: Categories Pills */}
        <div className="pt-8 bg-slate-950">
          <BlogCategories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        {/* Section 3: Popular & Trending Articles */}
        {activeCategory === 'All Articles' && !searchQuery && (
          <PopularArticles />
        )}

        {/* Section 4: Latest Articles Grid with Pagination */}
        <BlogArticleGrid
          searchQuery={searchQuery}
          activeCategory={activeCategory}
        />

        {/* Section 5: Newsletter CTA */}
        <BlogNewsletterCTA onCopy={showToast} />

        {/* Section 6: 10 FAQs with JSON-LD Schema */}
        <BlogFAQ />
      </main>

      {/* Section 7: Shared Footer */}
      <Footer />
    </div>
  );
}
