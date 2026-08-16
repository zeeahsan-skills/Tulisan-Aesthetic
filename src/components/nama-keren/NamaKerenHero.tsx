'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface NamaKerenHeroProps {
  onCopy: (msg: string) => void;
}

export function NamaKerenHero({ onCopy }: NamaKerenHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Generator Nama Keren & Bio Aesthetic 2026"
        subtitle="Buat nama keren aesthetic untuk akun game dan media sosial dengan 50 gaya font Unicode unik, mahkota, dan simbol gaming."
        defaultText="Pro Gamer"
        presetCategory="Gaming"
        pageSlug="nama-keren"
        onCopy={onCopy}
      />
    </div>
  );
}
