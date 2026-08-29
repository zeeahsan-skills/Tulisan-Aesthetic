'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface MemutarHeroProps {
  onCopy: (msg: string) => void;
}

export function MemutarHero({ onCopy }: MemutarHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Font Terbalik & Upside Down Generator"
        subtitle="Putar dan balikkan tulisan Anda (Upside Down & Mirror Text) dan dapatkan 50 variasi font Unicode unik."
        defaultText="Tulisan Terbalik"
        presetCategory="Simple"
        pageSlug="memutar"
        onCopy={onCopy}
      />
    </div>
  );
}
