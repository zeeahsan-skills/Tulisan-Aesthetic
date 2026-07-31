'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Heart, Share2 } from 'lucide-react';
import { ALL_FONT_STYLES } from '@/lib/unicode-engine';

interface FreeFireFontStylesProps {
  onCopy: (msg: string) => void;
}

export function FreeFireFontStyles({ onCopy }: FreeFireFontStylesProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const sampleText = 'FREE FIRE ⚔️';

  const handleCopy = (transformedText: string, styleId: string) => {
    navigator.clipboard.writeText(transformedText);
    setCopiedId(styleId);
    onCopy('Nickname FF disalin ke clipboard!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleFavorite = (styleId: string) => {
    setFavorites((prev) => {
      const nextState = !prev[styleId];
      onCopy(nextState ? 'Disimpan ke favorit!' : 'Dihapus dari favorit');
      return { ...prev, [styleId]: nextState };
    });
  };

  const handleShare = (text: string, styleName: string) => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator
        .share({
          title: `Free Fire Name: ${styleName}`,
          text: text,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(text);
      onCopy('Teks disalin untuk dibagikan!');
    }
  };

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Katalog Nickname FF
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Koleksi Style Nickname Free Fire Aesthetic
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pilih variasi simbol sayap, mahkota, font Small Caps, Gothic Fraktur, hingga simbol spasi transparan FF.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_FONT_STYLES.map((style, idx) => {
            const transformed = `꧁༺ ${style.transform(sampleText)} ༻꧂`;
            const isCopied = copiedId === style.id;
            const isFav = !!favorites[style.id];

            return (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 6) * 0.05 }}
                className="group relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-amber-900/20 hover:border-amber-500/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 font-poppins">
                      {style.name}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => toggleFavorite(style.id)}
                        className={`p-1.5 rounded-lg transition ${
                          isFav
                            ? 'text-rose-500 bg-rose-50 dark:bg-rose-950/50'
                            : 'text-slate-400 hover:text-rose-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                        title="Favorit"
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                      <button
                        onClick={() => handleShare(transformed, style.name)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                        title="Bagikan"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 font-mono text-lg font-medium text-slate-900 dark:text-white break-all select-all">
                    {transformed}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400">100% Free Fire Ready</span>
                  <button
                    onClick={() => handleCopy(transformed, style.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                      isCopied
                        ? 'bg-emerald-500 text-white'
                        : 'bg-amber-600 text-white hover:bg-amber-500 shadow-md shadow-amber-500/20'
                    }`}
                  >
                    {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{isCopied ? 'Tersalin!' : 'Salin Nickname'}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
