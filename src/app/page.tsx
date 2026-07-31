'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { PopularFonts } from '@/components/PopularFonts';
import { PlatformSection } from '@/components/PlatformSection';
import { GamingNicknames } from '@/components/GamingNicknames';
import { SymbolsSection } from '@/components/SymbolsSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { StatsSection } from '@/components/StatsSection';
import { BlogSection } from '@/components/BlogSection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';

export default function Home() {
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

      {/* Section 1: Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Section 2: Hero Section & Text Converter */}
        <HeroSection onCopy={showToast} />

        {/* Section 3: Popular Font Styles */}
        <PopularFonts onCopy={showToast} />

        {/* Section 4: Social Media Platform Section */}
        <PlatformSection />

        {/* Section 5: Gaming Nickname Section */}
        <GamingNicknames onCopy={showToast} />

        {/* Section 6: Symbols & Kaomoji Section */}
        <SymbolsSection onCopy={showToast} />

        {/* Section 7: Why Choose Us Feature Cards */}
        <WhyChooseUs />

        {/* Section 8: Statistics Section */}
        <StatsSection />

        {/* Section 9: Latest Articles / SEO Blog */}
        <BlogSection />

        {/* Section 10: FAQ Accordion with Schema */}
        <FAQSection />

        {/* Section 11: Call To Action (CTA) */}
        <CTASection />
      </main>

      {/* Section 12: Footer */}
      <Footer />

    </div>
  );
}
