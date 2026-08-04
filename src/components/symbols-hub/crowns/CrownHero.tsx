'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface CrownHeroProps {
  searchQuery?: string;
  setSearchQuery?: React.Dispatch<React.SetStateAction<string>>;
  onCopy: (msg: string) => void;
}

export function CrownHero({ onCopy }: CrownHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="Simbol Mahkota & King Font Generator 2026"
        subtitle="Simbol mahkota raja & ratu (👑, ♛, ♔) dipadu dengan 50 gaya font Unicode gaming dan aesthetic."
        defaultText="King Crown 👑"
        presetCategory="Gaming"
        onCopy={onCopy}
      />
    </div>
  );
}
