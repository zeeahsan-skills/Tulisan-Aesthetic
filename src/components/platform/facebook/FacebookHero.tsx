'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface FacebookHeroProps {
  onCopy: (msg: string) => void;
}

export function FacebookHero({ onCopy }: FacebookHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Facebook Font Generator - Status & Profile 2026"
        subtitle="Ubah teks biasa menjadi font aesthetic untuk postingan FB, Bio Profil, dan Nama Grup dengan 50 gaya font Unicode unik."
        defaultText="Postingan FB Aesthetic"
        presetCategory="Popular"
        onCopy={onCopy}
      />
    </div>
  );
}
