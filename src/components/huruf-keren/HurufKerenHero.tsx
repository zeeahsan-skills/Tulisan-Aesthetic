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
        title="Generator Huruf Keren & Huruf Cantik Aesthetic"
        subtitle="Buat huruf keren, huruf cantik, dan tulisan font keren online secara instan. Ubah teks biasa menjadi karakter Unicode stylish untuk copy paste di Bio Instagram, status WhatsApp, caption TikTok, dan Nickname Game."
        defaultText="Huruf Cantik"
        presetCategory="Popular"
        isH1={true}
        pageSlug="huruf-keren"
        onCopy={onCopy}
      />
    </div>
  );
}
