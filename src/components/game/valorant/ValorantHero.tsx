'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface ValorantHeroProps {
  onCopy: (msg: string) => void;
}

export function ValorantHero({ onCopy }: ValorantHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Valorant Nickname Generator - Riot ID & IGN Keren"
        subtitle="Buat nama in-game (IGN) Valorant keren ala pro player VCT & rank Radiant. Konversi nama biasa menjadi gaya clean minimalis, spasi teratur, simbol crosshair ╳, petir ⚡, dan aksen Jepang yang siap disalin."
        defaultText="Radiant Jett"
        presetCategory="Gaming"
        isH1={true}
        onCopy={onCopy}
      />
    </div>
  );
}
