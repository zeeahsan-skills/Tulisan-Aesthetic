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
        subtitle="Ubah teks biasa menjadi tulisan Vintage retro era 70-an/80-an, mesin tik klasik, serif nostalgia, dan gaya font retro aesthetic lainnya secara instan."
        defaultText="Vintage Classic"
        presetCategory="Gothic"
        pageSlug="vintage"
        onCopy={onCopy}
        isH1={true}
      />
    </div>
  );
}
