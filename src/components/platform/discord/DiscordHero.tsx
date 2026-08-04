'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface DiscordHeroProps {
  onCopy: (msg: string) => void;
}

export function DiscordHero({ onCopy }: DiscordHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Discord Font Generator - Username & Role Tag 2026"
        subtitle="Ubah tulisan untuk Username Discord, Nama Server, Channel, About Me, dan Role Tag dengan 50 gaya font Unicode unik."
        defaultText="Discord Role Pro"
        presetCategory="Gaming"
        onCopy={onCopy}
      />
    </div>
  );
}
