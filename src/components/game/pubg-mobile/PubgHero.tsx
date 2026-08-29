'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface PubgHeroProps {
  onCopy: (msg: string) => void;
}

export function PubgHero({ onCopy }: PubgHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="PUBG Mobile Font Generator - IGN & Clan Tag"
        subtitle="Buat Nickname PUBG Mobile Conqueror, Nama Clan, dan Bio game dengan 50 gaya font Unicode gaming dan simbol taktis."
        defaultText="PUBG Conqueror"
        presetCategory="Gaming"
        onCopy={onCopy}
      />
    </div>
  );
}
