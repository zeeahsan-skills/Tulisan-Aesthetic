'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface FontTebalHeroProps {
  onCopy: (msg: string) => void;
}

export function FontTebalHero({ onCopy }: FontTebalHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Generator Tulisan Tebal Aesthetic (Bold Unicode)"
        subtitle="Ubah teks biasa menjadi berbagai variasi font tebal aesthetic dan tulisan tebal (Bold Unicode) yang siap disalin (copy-paste) untuk Bio Instagram, WhatsApp, TikTok, Facebook, Discord, dan Nickname Game."
        defaultText="Font Tebal Aesthetic"
        presetCategory="Popular"
        isH1={true}
        pageSlug="tebal"
        onCopy={onCopy}
      />
    </div>
  );
}
