'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface BubbleHeroProps {
  onCopy: (msg: string) => void;
}

export function BubbleHero({ onCopy }: BubbleHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Bubble Font Generator - Tulisan Gelembung Unicode"
        subtitle="Ubah teks biasa menjadi font gelembung melingkar (bubble outline, solid, dan 50 gaya font Unicode aesthetic lainnya) secara instan."
        defaultText="Ahsan Stylish"
        presetCategory="Cute"
        pageSlug="gelembung"
        onCopy={onCopy}
      />
    </div>
  );
}
