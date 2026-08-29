'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface SparklyHeroProps {
  onCopy: (msg: string) => void;
}

export function SparklyHero({ onCopy }: SparklyHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Sparkly Font Generator - Tulisan Berkilau Aesthetic"
        subtitle="Hias teks Anda dengan bintang berkilau ✨, simbol kilau, dan 50 gaya font Unicode aesthetic lainnya."
        defaultText="Sparkle Aesthetic"
        presetCategory="Cute"
        onCopy={onCopy}
      />
    </div>
  );
}
