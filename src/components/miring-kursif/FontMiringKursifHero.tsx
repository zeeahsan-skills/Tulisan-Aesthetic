'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface FontMiringKursifHeroProps {
  onCopy: (msg: string) => void;
}

export function FontMiringKursifHero({ onCopy }: FontMiringKursifHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Font Miring & Kursif Generator"
        subtitle="Ubah teks biasa Anda menjadi variasi tulisan miring (Italic Unicode) dan tulisan tangan sambung (Cursive Script) aesthetic yang bisa langsung disalin dan ditempel (copy-paste) untuk Bio Instagram, WhatsApp, TikTok, serta profil media sosial."
        defaultText="Tulisan Miring Kursif"
        presetCategory="Fancy"
        isH1={true}
        onCopy={onCopy}
      />
    </div>
  );
}
