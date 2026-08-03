'use client';

import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';

interface GameBestSymbolsGridProps {
  onCopy: (msg: string) => void;
}

export function GameBestSymbolsGrid({ onCopy }: GameBestSymbolsGridProps) {
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);

  const symbolCategories = [
    {
      category: 'Simbol Payung (Umbrella)',
      badge: 'Popular Free Fire',
      items: ['☂️', '☔', '🌂', '☂', '☔︎', '☂︎'],
    },
    {
      category: 'Simbol Mahkota (Crown)',
      badge: 'King & Pro Player',
      items: ['亗', '👑', '♛', '♕', '♔', '🅆'],
    },
    {
      category: 'Simbol Border Sayap (Wings)',
      badge: 'FF & MLBB',
      items: ['꧁༺ ༻꧂', '༺ ༻', '꧁ ꧂', 'ஐ', '༺L E G E N D༻', '꧁[FF]꧂'],
    },
    {
      category: 'Simbol Pedang & Katana (Swords)',
      badge: 'Esports & Clan',
      items: ['⚔️', '🗡️', '🛡️', '⚡', '☠️', '🎯'],
    },
    {
      category: 'Simbol Kanji & Jepang (Japan / Anime)',
      badge: 'PUBG & CODM',
      items: ['帝', '父', '乡', '乂', '『 』', '【 】'],
    },
    {
      category: 'Spasi Kosong Transparan (Invisible Space)',
      badge: 'FF & PUBG Space',
      items: ['ㅤ', 'ㅤㅤ', 'ㅤㅤㅤ'],
    },
  ];

  const handleCopySymbol = (sym: string) => {
    navigator.clipboard.writeText(sym);
    setCopiedSymbol(sym);
    onCopy(`Simbol "${sym}" disalin!`);
    setTimeout(() => setCopiedSymbol(null), 2000);
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Katalog Simbol Nickname Game
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Simbol Paling Hits Untuk Nama Game
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Klik pada simbol manapun di bawah ini untuk langsung menyalinnya ke papan klip ponsel Anda.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {symbolCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-poppins">
                    {cat.category}
                  </h3>
                  <span className="text-[10px] font-bold uppercase px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                    {cat.badge}
                  </span>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((sym, sIdx) => {
                    const isCopied = copiedSymbol === sym;

                    return (
                      <button
                        key={sIdx}
                        onClick={() => handleCopySymbol(sym)}
                        className={`px-3 py-2 rounded-xl text-base font-mono font-bold transition flex items-center gap-1.5 ${
                          isCopied
                            ? 'bg-emerald-500 text-white shadow-md'
                            : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 hover:text-amber-600 dark:hover:text-amber-400'
                        }`}
                      >
                        <span>{sym === 'ㅤ' ? '[Spasi Kosong]' : sym}</span>
                        {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5 opacity-60" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
