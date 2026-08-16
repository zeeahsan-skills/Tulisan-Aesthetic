'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface TinyTextHeroProps {
  onCopy: (msg: string) => void;
}

export function TinyTextHero({ onCopy }: TinyTextHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Tiny Text Generator"
        subtitle="Ubah teks biasa Anda menjadi berbagai variasi tulisan kecil (Small Caps), huruf mini atas (Superscript), dan huruf mini bawah (Subscript) yang bisa langsung disalin dan ditempel (copy-paste) untuk Bio Instagram, WhatsApp, TikTok, serta Nickname Game."
        defaultText="Tiny Text Small Caps"
        presetCategory="Popular"
        isH1={true}
        pageSlug="tiny"
        onCopy={onCopy}
      />
    </div>
  );
}
