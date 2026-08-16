'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface GothicHeroProps {
  onCopy: (msg: string) => void;
}

export function GothicHero({ onCopy }: GothicHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Gothic & Fraktur Font Generator 2026"
        subtitle="Ubah teks biasa menjadi tulisan Gothic, Fraktur, Blackletter, dan 50 gaya font Unicode aesthetic lainnya secara instan."
        defaultText="Gothic Blackletter"
        presetCategory="Gothic"
        pageSlug="gothic-fraktur"
        onCopy={onCopy}
      />
    </div>
  );
}
