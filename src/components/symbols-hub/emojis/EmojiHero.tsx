'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface EmojiHeroProps {
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  onCopy: (msg: string) => void;
}

export function EmojiHero({ onCopy }: EmojiHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Simbol Emoji & Font Generator"
        subtitle="Koleksi emoji aesthetic, emotikon lucu, dan 50 gaya font Unicode unik siap salin."
        defaultText="Emoji Aesthetic"
        presetCategory="Cute"
        onCopy={onCopy}
      />
    </div>
  );
}
