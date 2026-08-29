'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface RobloxHeroProps {
  onCopy: (msg: string) => void;
}

export function RobloxHero({ onCopy }: RobloxHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Roblox Font Generator - Display Name & Bio"
        subtitle="Ubah Display Name Roblox, Nama Group, dan deskripsi profil dengan 50 gaya font Unicode aesthetic dan gaming."
        defaultText="Roblox Gamer"
        presetCategory="Gaming"
        onCopy={onCopy}
      />
    </div>
  );
}
