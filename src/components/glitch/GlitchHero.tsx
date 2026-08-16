'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface GlitchHeroProps {
  onCopy: (msg: string) => void;
}

export function GlitchHero({ onCopy }: GlitchHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Font Glitch & Zalgo Generator"
        subtitle="Ubah teks biasa menjadi tulisan distorted, Zalgo cyber, horror creepy, dan 50 gaya font Unicode aesthetic lainnya secara instan."
        defaultText="Zalgo Cyber"
        presetCategory="Gaming"
        onCopy={onCopy}
        isH1={true}
      />
    </div>
  );
}
