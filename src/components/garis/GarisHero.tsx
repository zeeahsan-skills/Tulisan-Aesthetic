'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface GarisHeroProps {
  onCopy: (msg: string) => void;
}

export function GarisHero({ onCopy }: GarisHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Font Strikethrough & Garis Coret Generator 2026"
        subtitle="Buat teks dengan garis coret tengah (strikethrough), garis bawah (underline), tilde, dan 50 gaya font Unicode aesthetic lainnya."
        defaultText="Garis Coret"
        presetCategory="Simple"
        pageSlug="garis"
        onCopy={onCopy}
      />
    </div>
  );
}
