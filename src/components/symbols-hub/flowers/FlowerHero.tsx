'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface FlowerHeroProps {
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  onCopy: (msg: string) => void;
}

export function FlowerHero({ onCopy }: FlowerHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Simbol Bunga & Aesthetic Font Generator"
        subtitle="Koleksi simbol bunga (✿, ❈, 🌸, 🌹) dan 50 variasi gaya font Unicode imut untuk Bio IG & TikTok."
        defaultText="Bunga Aesthetic"
        presetCategory="Cute"
        onCopy={onCopy}
      />
    </div>
  );
}
