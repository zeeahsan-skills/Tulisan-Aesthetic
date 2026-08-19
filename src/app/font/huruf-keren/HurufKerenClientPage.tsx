'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { HurufKerenHero } from '@/components/huruf-keren/HurufKerenHero';
import { HurufKerenExamples } from '@/components/huruf-keren/HurufKerenExamples';
import { HurufKerenAbout } from '@/components/huruf-keren/HurufKerenAbout';
import { HurufKerenTutorial } from '@/components/huruf-keren/HurufKerenTutorial';
import { HurufKerenPlatforms } from '@/components/huruf-keren/HurufKerenPlatforms';
import { HurufKerenGaming } from '@/components/huruf-keren/HurufKerenGaming';
import { HurufKerenRelated } from '@/components/huruf-keren/HurufKerenRelated';
import { HurufKerenFAQ } from '@/components/huruf-keren/HurufKerenFAQ';
import { HurufKerenCTA } from '@/components/huruf-keren/HurufKerenCTA';
import { HurufKerenArticleSection } from '@/components/huruf-keren/HurufKerenArticleSection';

export default function HurufKerenClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      
      {/* Toast Notification Alert */}
      <Toast message={toastMessage} />

      {/* Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Section: Hero & Live 50-Style Huruf Keren Generator */}
        <HurufKerenHero onCopy={showToast} />

        {/* Section: Contoh Huruf Keren (Category Highlights) */}
        <HurufKerenExamples onCopy={showToast} />

        {/* Section: Complete Article & Guide for Huruf Keren Online */}
        <HurufKerenArticleSection onCopy={showToast} />

        {/* Section: Apa Itu Huruf Keren? & Unicode Explanation */}
        <HurufKerenAbout />

        {/* Section: Cara Membuat Huruf Keren & Cara Copy-Paste */}
        <HurufKerenTutorial />

        {/* Section: Huruf Keren untuk Instagram, TikTok, WhatsApp */}
        <HurufKerenPlatforms />

        {/* Section: Huruf Keren untuk Game Online */}
        <HurufKerenGaming />

        {/* Section: Kategori Font Terkait (Internal Linking) */}
        <HurufKerenRelated />

        {/* Section: FAQ Huruf Keren */}
        <HurufKerenFAQ />

        {/* Section: Call to Action */}
        <HurufKerenCTA />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
