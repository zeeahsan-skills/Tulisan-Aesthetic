'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { ReadingProgressBar } from '@/components/blog/article/ReadingProgressBar';
import { ArticleHeroHeader } from '@/components/blog/article/ArticleHeroHeader';
import { TableOfContents } from '@/components/blog/article/TableOfContents';
import { ArticleContentBody } from '@/components/blog/article/ArticleContentBody';
import { ArticleRelatedLinks } from '@/components/blog/article/ArticleRelatedLinks';
import { ArticleFAQ } from '@/components/blog/article/ArticleFAQ';
import { ArticleCTA } from '@/components/blog/article/ArticleCTA';

export default function UnicodeArticleClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-slate-950 text-white">
      {/* Top Reading Progress Bar */}
      <ReadingProgressBar />

      {/* Toast Notification Alert */}
      <Toast message={toastMessage} />

      {/* Sticky Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* Section 1: Article Hero Header */}
        <ArticleHeroHeader onCopy={showToast} />

        {/* Section 2: Article Main Layout (Table of Contents + Content Body) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sticky Sidebar Table of Contents */}
            <aside className="lg:col-span-4 hidden lg:block">
              <TableOfContents />
            </aside>

            {/* Main Article Content Column */}
            <div className="lg:col-span-8">
              <ArticleContentBody onCopy={showToast} />

              {/* Section 3: Related Articles & Tools */}
              <ArticleRelatedLinks />

              {/* Section 4: 10 FAQs with JSON-LD Schema */}
              <ArticleFAQ />
            </div>
          </div>
        </div>

        {/* Section 5: Call To Action */}
        <ArticleCTA />
      </main>

      {/* Section 6: Shared Footer */}
      <Footer />
    </div>
  );
}
