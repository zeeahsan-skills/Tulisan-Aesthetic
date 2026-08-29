'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface KaomojiHeroProps {
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  onCopy: (msg: string) => void;
}

export function KaomojiHero({ onCopy }: KaomojiHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Kaomoji & Emotikon Jepang Generator"
        subtitle="Ragam emotikon Kaomoji Jepang (⁠✿⁠ ⁠♡⁠), emosi imut, dan 50 gaya font Unicode aesthetic."
        defaultText="Kaomoji Cute"
        presetCategory="Cute"
        onCopy={onCopy}
      />
    </div>
  );
}
