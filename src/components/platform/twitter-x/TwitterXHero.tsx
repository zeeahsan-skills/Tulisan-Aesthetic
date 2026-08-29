'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface TwitterXHeroProps {
  onCopy: (msg: string) => void;
}

export function TwitterXHero({ onCopy }: TwitterXHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Twitter X Font Generator - Convert Teks Bio & Tweet Aesthetic"
        subtitle="Ubah teks biasa menjadi font Unicode estetik untuk Bio Twitter (X), Display Name, Tweet, dan Handle 100% gratis secara instan."
        defaultText="Twitter X Bio Aesthetic"
        presetCategory="Popular"
        onCopy={onCopy}
      />
    </div>
  );
}
