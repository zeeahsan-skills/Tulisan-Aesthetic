'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface TerhubungHeroProps {
  onCopy: (msg: string) => void;
}

export function TerhubungHero({ onCopy }: TerhubungHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Font Sambung & Cursive Generator 2026"
        subtitle="Konversi teks menjadi tulisan sambung indah, kaligrafi Cursive, Script, dan 50 gaya font Unicode aesthetic lainnya secara instan."
        defaultText="Tulisan Sambung"
        presetCategory="Fancy"
        onCopy={onCopy}
      />
    </div>
  );
}
