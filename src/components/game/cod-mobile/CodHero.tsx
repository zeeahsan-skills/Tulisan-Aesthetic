'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface CodHeroProps {
  onCopy: (msg: string) => void;
}

export function CodHero({ onCopy }: CodHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="COD Mobile Font Generator - Call of Duty Nickname 2026"
        subtitle="Buat Nickname COD Mobile Legendary, Tag Clan, dan Bio profile dengan 50 gaya font Unicode gaming gahar."
        defaultText="CODM Legendary"
        presetCategory="Gaming"
        onCopy={onCopy}
      />
    </div>
  );
}
