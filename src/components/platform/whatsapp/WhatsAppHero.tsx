'use client';

import React from 'react';
import { FontGenerator } from '@/components/FontGenerator';

interface WhatsAppHeroProps {
  onCopy: (msg: string) => void;
}

export function WhatsAppHero({ onCopy }: WhatsAppHeroProps) {
  return (
    <div id="hero">
      <FontGenerator
        title="WhatsApp Font Generator - Tulisan Unik WA 2026"
        subtitle="Ubah tulisan pesan WA, Nama Kontak, Status, dan Info Bio WhatsApp dengan 50 gaya font Unicode unik 100% terbaca."
        defaultText="Status WhatsApp Keren"
        presetCategory="Popular"
        onCopy={onCopy}
      />
    </div>
  );
}
