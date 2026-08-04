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
        title="Glitch & Zalgo Text Generator 2026"
        subtitle="Ubah teks biasa menjadi font Glitch, Zalgo cyber, distorsi horor, dan 50 gaya font Unicode aesthetic lainnya secara instan."
        defaultText="Glitch Cyberpunk"
        presetCategory="Gaming"
        onCopy={onCopy}
      />
    </div>
  );
}
