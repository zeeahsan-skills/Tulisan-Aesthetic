'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface BerkilauHeroProps {
  onCopy: (msg: string) => void;
}

export function BerkilauHero({ onCopy }: BerkilauHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Font Berkilau / Sparkly Generator"
        subtitle="Hiasi teks biasa Anda dengan bintang ✨, kilauan glitter, dan ornamen simbol Unicode estetik yang bisa langsung disalin dan ditempel (copy-paste) untuk Bio Instagram, TikTok, WhatsApp, Discord, dan profil game."
        defaultText="Font Berkilau Sparkly"
        presetCategory="Sparkly"
        isH1={true}
        onCopy={onCopy}
      />
    </div>
  );
}
