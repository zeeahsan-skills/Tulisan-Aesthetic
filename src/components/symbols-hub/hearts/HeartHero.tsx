'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface HeartHeroProps {
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  onCopy: (msg: string) => void;
}

export function HeartHero({ onCopy }: HeartHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Simbol Hati (Heart Symbols) & Font Generator"
        subtitle="Koleksi simbol hati estetik (♡, ♥, ❥, ʚ♡ɞ, ᰔ) dan 50 variasi gaya font Unicode manis siap salin untuk Bio Instagram, TikTok, WhatsApp & Game."
        defaultText="Simbol Hati Aesthetic"
        presetCategory="Cute"
        onCopy={onCopy}
      />
    </div>
  );
}
