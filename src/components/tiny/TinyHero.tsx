'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface TinyHeroProps {
  onCopy: (msg: string) => void;
}

export function TinyHero({ onCopy }: TinyHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Tiny Font Generator - Tulisan Kecil Aesthetic"
        subtitle="Ubah teks biasa menjadi huruf kecil Superscript, Subscript, Small Caps, dan 50 gaya font Unicode aesthetic lainnya secara instan."
        defaultText="Tulisan Kecil"
        presetCategory="Cute"
        onCopy={onCopy}
      />
    </div>
  );
}
