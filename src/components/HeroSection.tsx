'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface HeroSectionProps {
  onCopy: (text: string) => void;
}

export function HeroSection({ onCopy }: HeroSectionProps) {
  return (
    <div id="hero">
      <FontGenerator
        isH1={true}
        title="Tulisan Aesthetic — Generator Teks & Edit Nama Keren"
        subtitle="Aesthetic text generator gratis Indonesia. Ubah ketikan biasa atau edit nama aesthetic jadi 50 gaya tulisan estetik Unicode untuk bio Instagram, TikTok, WhatsApp, dan nickname game."
        quickPresets={[
          { label: 'Edit Nama Aesthetic', value: 'Nayla Aesthetic ✧' },
          { label: 'Buat Nama Estetik', value: 'Raka Pratama' },
          { label: 'Bio IG Estetik', value: 'Slow living & coffee' },
          { label: 'Nickname Game', value: 'ShadowX Pro' },
        ]}
        onCopy={onCopy}
      />
    </div>
  );
}
