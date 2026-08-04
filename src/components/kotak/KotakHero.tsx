'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface KotakHeroProps {
  onCopy: (msg: string) => void;
}

export function KotakHero({ onCopy }: KotakHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Square Box Font Generator - Tulisan Kotak 2026"
        subtitle="Ubah teks biasa menjadi huruf kotak (Square Outline & Solid Box) serta 50 gaya font Unicode aesthetic siap salin."
        defaultText="Tulisan Kotak"
        presetCategory="Gaming"
        onCopy={onCopy}
      />
    </div>
  );
}
