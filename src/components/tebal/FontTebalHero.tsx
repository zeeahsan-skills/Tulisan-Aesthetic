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
        title="Font Tebal Generator"
        subtitle="Ubah teks biasa Anda menjadi berbagai variasi tulisan tebal (Bold Unicode) aesthetic yang bisa langsung disalin dan ditempel (copy-paste) untuk Bio Instagram, WhatsApp, TikTok, Facebook, Discord, serta Nickname Game."
        defaultText="Font Tebal Bold"
        presetCategory="Popular"
        isH1={true}
        onCopy={onCopy}
      />
    </div>
  );
}
