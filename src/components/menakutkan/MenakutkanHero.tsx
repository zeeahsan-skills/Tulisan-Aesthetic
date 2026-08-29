'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface MenakutkanHeroProps {
  onCopy: (msg: string) => void;
}

export function MenakutkanHero({ onCopy }: MenakutkanHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Scary & Horror Font Generator"
        subtitle="Ubah teks biasa menjadi gaya font seram, Zalgo heavy, horror gothic, dan 50 gaya font Unicode aesthetic siap pakai."
        defaultText="Demon Horror"
        presetCategory="Gothic"
        pageSlug="menakutkan"
        onCopy={onCopy}
      />
    </div>
  );
}
