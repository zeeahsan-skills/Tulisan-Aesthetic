'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface ArrowHeroProps {
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  onCopy: (msg: string) => void;
}

export function ArrowHero({ onCopy }: ArrowHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Simbol Panah & Border Font Generator 2026"
        subtitle="Ragam simbol panah (➼, ➸, ➔, ➲) dan 50 gaya font Unicode aesthetic untuk hiasan pesan."
        defaultText="Panah Border"
        presetCategory="Simple"
        onCopy={onCopy}
      />
    </div>
  );
}
