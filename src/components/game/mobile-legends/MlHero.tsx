'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface MlHeroProps {
  onCopy: (msg: string) => void;
}

export function MlHero({ onCopy }: MlHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Mobile Legends (MLBB) Font Generator"
        subtitle="Buat Nickname MLBB Mythic Glory, Nama Squad, dan Bio ML dengan 50 gaya font Unicode unik dan simbol gaming."
        defaultText="MLBB Mythic"
        presetCategory="Gaming"
        onCopy={onCopy}
      />
    </div>
  );
}
