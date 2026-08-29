'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface SymbolsHeroProps {
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  onCopy: (msg: string) => void;
}

export function SymbolsHero({ onCopy }: SymbolsHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Simbol Aesthetic & Unicode Font Generator"
        subtitle="Salin ribuan simbol aesthetic (Bintang, Hati, Mahkota, Bunga, Panah, Emoji, Kaomoji) serta 50 gaya font Unicode unik."
        defaultText="Simbol Aesthetic"
        presetCategory="Cute"
        onCopy={onCopy}
      />
    </div>
  );
}
