'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { GamePillarHero } from '@/components/game-hub/GamePillarHero';
import { GameImportanceSection } from '@/components/game-hub/GameImportanceSection';
import { GameFeaturedGrid } from '@/components/game-hub/GameFeaturedGrid';
import { GameBestSymbolsGrid } from '@/components/game-hub/GameBestSymbolsGrid';
import { GameUnicodeCompatibility } from '@/components/game-hub/GameUnicodeCompatibility';
import { GameNicknameTips } from '@/components/game-hub/GameNicknameTips';
import { GamePillarFAQ } from '@/components/game-hub/GamePillarFAQ';
import { GamePillarArticles } from '@/components/game-hub/GamePillarArticles';
import { GamePillarCTA } from '@/components/game-hub/GamePillarCTA';

export default function GameClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden">
      <Toast message={toastMessage} />
      <Navbar />

      <main className="flex-1">
        <GamePillarHero onCopy={showToast} />
        <GameImportanceSection />
        <GameFeaturedGrid />
        <GameBestSymbolsGrid onCopy={showToast} />
        <GameUnicodeCompatibility />
        <GameNicknameTips />
        <GamePillarFAQ />
        <GamePillarArticles />
        <GamePillarCTA />
      </main>

      <Footer />
    </div>
  );
}
