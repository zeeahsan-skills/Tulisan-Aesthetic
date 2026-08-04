'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface InstagramHeroProps {
  onCopy: (msg: string) => void;
}

export function InstagramHero({ onCopy }: InstagramHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Instagram Font Generator - Teks Bio & Caption IG 2026"
        subtitle="Ubah teks biasa menjadi font aesthetic untuk Bio Instagram, Username, Caption, dan Story dengan 50 gaya font Unicode unik."
        defaultText="Bio Instagram Aesthetic"
        presetCategory="Popular"
        onCopy={onCopy}
      />
    </div>
  );
}
