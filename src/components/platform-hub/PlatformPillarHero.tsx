'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface PlatformPillarHeroProps {
  onCopy: (msg: string) => void;
}

export function PlatformPillarHero({ onCopy }: PlatformPillarHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Font Generator Media Sosial & Platform 2026"
        subtitle="Generator font Unicode lengkap untuk Instagram, TikTok, WhatsApp, Facebook, Discord, dan Twitter X. Salin 50 gaya font aesthetic secara gratis."
        defaultText="Media Sosial Aesthetic"
        presetCategory="Popular"
        onCopy={onCopy}
      />
    </div>
  );
}
