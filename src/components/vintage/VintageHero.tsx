'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface VintageHeroProps {
  onCopy: (msg: string) => void;
}

export function VintageHero({ onCopy }: VintageHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Font Vintage & Klasik Generator"
        subtitle="Ubah teks biasa menjadi tulisan Vintage klasik, Old English, Fraktur Blackletter, dan 50 gaya font Unicode aesthetic lainnya secara instan."
        defaultText="Vintage Classic"
        presetCategory="Gothic"
        onCopy={onCopy}
        isH1={true}
      />
    </div>
  );
}
