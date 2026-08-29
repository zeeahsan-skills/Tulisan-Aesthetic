'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface StarHeroProps {
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  onCopy: (msg: string) => void;
}

export function StarHero({ onCopy }: StarHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Simbol Bintang & Font Generator"
        subtitle="Koleksi lengkap simbol bintang (★, ✧, ✨, ✦) dan 50 gaya font Unicode aesthetic siap salin."
        defaultText="Bintang Aesthetic"
        presetCategory="Cute"
        onCopy={onCopy}
      />
    </div>
  );
}
