'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface FreeFireHeroProps {
  onCopy: (msg: string) => void;
}

export function FreeFireHero({ onCopy }: FreeFireHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Free Fire (FF) Font Generator - Nickname Keren"
        subtitle="Buat Nickname FF pro player, nama Guild Free Fire, dan bio game dengan 50 gaya font Unicode gaming dan simbol mahkota."
        defaultText="Nick FF Pro"
        presetCategory="Gaming"
        onCopy={onCopy}
      />
    </div>
  );
}
