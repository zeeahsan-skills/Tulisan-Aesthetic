'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface SparklyHeroProps {
  onCopy: (msg: string) => void;
}

export function SparklyHero({ onCopy }: SparklyHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Sparkly Font Generator - Tulisan Berkilau & Glitter Aesthetic"
        subtitle="Hiasi teks biasa Anda dengan stardust ✧･ﾟ:*, kilau kristal ੈ✩‧₊˚, tongkat sihir 🪄, dan 50 gaya font sparkly aesthetic yang langsung bisa disalin (copy-paste) untuk Bio Instagram, TikTok, WhatsApp, Discord, dan nama game."
        defaultText="Sparkly Aesthetic"
        presetCategory="Cute"
        isH1={true}
        pageSlug="sparkly"
        onCopy={onCopy}
      />
    </div>
  );
}
