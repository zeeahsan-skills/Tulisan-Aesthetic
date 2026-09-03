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
        title="Font Berkilau Bintang Generator"
        subtitle="Hiasi teks biasa Anda dengan bintang ✨, kilauan stardust ✧･ﾟ:*, dan ornamen simbol cahaya Unicode estetik yang bisa langsung disalin dan ditempel (copy-paste) untuk Bio Instagram, TikTok, WhatsApp, dan profil media sosial."
        defaultText="Teks Berkilau Bintang"
        presetCategory="Sparkly"
        isH1={true}
        pageSlug="berkilau"
        onCopy={onCopy}
      />
    </div>
  );
}
