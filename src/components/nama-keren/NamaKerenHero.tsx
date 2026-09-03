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
        title="Generator Nama Keren & Stylish Name"
        subtitle="Buat nama display keren aesthetic untuk profil Instagram, akun TikTok, dan WhatsApp dengan 50 gaya font Unicode unik, sayap, dan ornamen elegan."
        defaultText="Aesthetic Name"
        presetCategory="Cute"
        pageSlug="nama-keren"
        onCopy={onCopy}
      />
    </div>
  );
}
