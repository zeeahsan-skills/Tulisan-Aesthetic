'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface GamePillarHeroProps {
  onCopy: (msg: string) => void;
}

export function GamePillarHero({ onCopy }: GamePillarHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Generator Font Game & Nickname Keren"
        subtitle="Dapatkan 50 gaya font Unicode gaming aesthetic untuk Free Fire, Mobile Legends, PUBG Mobile, Roblox, COD Mobile, dan Valorant."
        defaultText="Gamer Pro"
        presetCategory="Gaming"
        onCopy={onCopy}
      />
    </div>
  );
}
