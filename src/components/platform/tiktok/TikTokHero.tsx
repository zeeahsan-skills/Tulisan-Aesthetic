'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface TikTokHeroProps {
  onCopy: (msg: string) => void;
}

export function TikTokHero({ onCopy }: TikTokHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="TikTok Font Generator - Tulisan Bio & Username 2026"
        subtitle="Buat tulisan keren untuk Bio TikTok, Username, komentar, dan video dengan 50 variasi gaya font Unicode aesthetic."
        defaultText="TikTok Bio Aesthetic"
        presetCategory="Popular"
        onCopy={onCopy}
      />
    </div>
  );
}
