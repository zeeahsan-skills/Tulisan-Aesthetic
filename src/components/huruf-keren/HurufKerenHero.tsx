'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface HurufKerenHeroProps {
  onCopy: (msg: string) => void;
}

export function HurufKerenHero({ onCopy }: HurufKerenHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Huruf Keren Generator"
        subtitle="Ubah teks biasa Anda menjadi berbagai pilihan karakter Unicode stylish dan font keren aesthetic yang bisa langsung disalin dan ditempel (copy paste) untuk Bio Instagram, status WhatsApp, caption TikTok, serta Nickname Game."
        defaultText="Huruf Keren"
        presetCategory="Popular"
        isH1={true}
        pageSlug="huruf-keren"
        onCopy={onCopy}
      />
    </div>
  );
}
