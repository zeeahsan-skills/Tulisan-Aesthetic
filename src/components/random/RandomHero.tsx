'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface RandomHeroProps {
  onCopy: (msg: string) => void;
}

export function RandomHero({ onCopy }: RandomHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Font Random & Acak Generator"
        subtitle="Acak gaya font dan ornamen teks Unicode secara otomatis (Mix & Match Styles) untuk menemukan kombinasi paling unik dan aesthetic."
        defaultText="Random Mix"
        presetCategory="All"
        onCopy={onCopy}
        isH1={true}
      />
    </div>
  );
}
