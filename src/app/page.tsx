'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { PopularFonts } from '@/components/PopularFonts';
import { PlatformSection } from '@/components/PlatformSection';
import { GamingNicknames } from '@/components/GamingNicknames';
import { SymbolsSection } from '@/components/SymbolsSection';
import { UnicodeExplanation } from '@/components/UnicodeExplanation';
import { CompatibilityMatrix } from '@/components/CompatibilityMatrix';
import { SiloLinksGrid } from '@/components/SiloLinksGrid';
import { EEATAuthorSection } from '@/components/EEATAuthorSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { StatsSection } from '@/components/StatsSection';
import { BlogSection } from '@/components/BlogSection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { SeoGuideSection } from '@/components/SeoGuideSection';

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // SoftwareApplication Schema JSON-LD for Search Engines
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Tulisan Aesthetic Generator',
    operatingSystem: 'All (Web-based, iOS, Android, Windows, macOS)',
    applicationCategory: 'UtilityApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'IDR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '12480',
    },
    description:
      'Generator tulisan aesthetic gratis di Indonesia. Mengubah teks biasa menjadi 50+ gaya font Unicode estetik (Small Caps, Bubble, Bold, Gothic, Glitch) untuk Bio Instagram, TikTok, WhatsApp & Nickname Game.',
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      
      {/* Software Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Toast Notification Alert */}
      <Toast message={toastMessage} />

      {/* Section 1: Sticky Navigation */}
      <Navbar />

      <main className="flex-1">
        {/* Section 2: Hero Section & Interactive Text Converter (50 Styles) */}
        <HeroSection onCopy={showToast} />

        {/* Section 3: Popular Font Styles Showcase */}
        <PopularFonts onCopy={showToast} />

        {/* Section 4: Social Media Platform Live Preview */}
        <PlatformSection />

        {/* Section 5: Gaming Nickname Section & Preset Generator */}
        <GamingNicknames onCopy={showToast} />

        {/* Section 5.5: SEO Guide & Comprehensive Indonesian Copy Section */}
        <SeoGuideSection onCopy={showToast} />

        {/* Section 6: Educational Section on Unicode Standard */}
        <UnicodeExplanation />

        {/* Section 7: Device & Platform Compatibility Matrix */}
        <CompatibilityMatrix />

        {/* Section 8: Symbols & Kaomoji Copy-Paste Grid */}
        <SymbolsSection onCopy={showToast} />

        {/* Section 9: Topic Silo & Internal Links Matrix */}
        <SiloLinksGrid />

        {/* Section 10: Features & Benefits */}
        <WhyChooseUs />

        {/* Section 11: Real-time Statistics */}
        <StatsSection />

        {/* Section 12: E-E-A-T & Trust Assurance */}
        <EEATAuthorSection />

        {/* Section 13: SEO Blog & Tutorials */}
        <BlogSection />

        {/* Section 14: Structured FAQ Accordion with Schema.org */}
        <FAQSection />

        {/* Section 15: Call To Action (CTA) */}
        <CTASection />
      </main>

      {/* Section 16: Footer & Legal Links */}
      <Footer />

    </div>
  );
}
