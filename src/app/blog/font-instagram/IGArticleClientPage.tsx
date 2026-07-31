'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { ReadingProgressBar } from '@/components/blog/article/ReadingProgressBar';
import { IGHeroHeader } from '@/components/blog/instagram-article/IGHeroHeader';
import { IGTOC } from '@/components/blog/instagram-article/IGTOC';
import { IGContentBody } from '@/components/blog/instagram-article/IGContentBody';
import { IGRelatedLinks } from '@/components/blog/instagram-article/IGRelatedLinks';
import { IGFAQ } from '@/components/blog/instagram-article/IGFAQ';
import { IGCTA } from '@/components/blog/instagram-article/IGCTA';

export default function IGArticleClientPage() {
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
        <IGHeroHeader onCopy={showToast} />

        {/* Section 2: Article Main Layout (Table of Contents + Content Body) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Sticky Sidebar Table of Contents */}
            <aside className="lg:col-span-4 hidden lg:block">
              <IGTOC />
            </aside>

            {/* Main Article Content Column */}
            <div className="lg:col-span-8">
              <IGContentBody onCopy={showToast} />

              {/* Section 3: Related Articles & Tools */}
              <IGRelatedLinks />

              {/* Section 4: 10 FAQs with JSON-LD Schema */}
              <IGFAQ />
            </div>
          </div>
        </div>

        {/* Section 5: Call To Action */}
        <IGCTA />
      </main>

      {/* Section 6: Shared Footer */}
      <Footer />
    </div>
  );
}
