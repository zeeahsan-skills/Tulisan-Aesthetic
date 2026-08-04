'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface HeroSectionProps {
  onCopy: (text: string) => void;
}

export function HeroSection({ onCopy }: HeroSectionProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="AI-Powered Unicode Generator 2026"
        subtitle="Ubah teks biasa menjadi 50 variasi gaya font Unicode aesthetic, tebal, miring, gothic, bubble, dan simbol gaming 100% gratis secara instan."
        onCopy={onCopy}
      />
    </div>
  );
}
