'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Heart, Share2 } from 'lucide-react';
import { ALL_FONT_STYLES } from '@/lib/unicode-engine';

interface ValorantFontStylesProps {
  onCopy: (msg: string) => void;
}

export function ValorantFontStyles({ onCopy }: ValorantFontStylesProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const sampleText = 'VALORANT RADIANT 🎯';

  const handleCopy = (transformedText: string, styleId: string) => {
    navigator.clipboard.writeText(transformedText);
    setCopiedId(styleId);
    onCopy('Nickname Valorant disalin ke clipboard!');
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
          title: `Valorant IGN: ${styleName}`,
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
          <span className="px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            Katalog Nickname Valorant
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Pilihan Gaya Nickname & Riot ID
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pilih variasi font clean aesthetic, gaya Small Caps, kurung bracket VCT, aksen katakana Jepang, dan simbol gaming minimalis.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_FONT_STYLES.slice(0, 18).map((style, idx) => {
            const transformed = style.transform(sampleText);
            const isCopied = copiedId === style.id;
            const isFav = !!favorites[style.id];

            return (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (idx % 6) * 0.04 }}
                className="group relative p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-rose-500/50 hover:shadow-xl hover:shadow-rose-500/5 transition-all duration-300"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    {style.name}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => toggleFavorite(style.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        isFav
                          ? 'text-rose-500 bg-rose-50 dark:bg-rose-950/30'
                          : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                      }`}
                      title={isFav ? 'Hapus favorit' : 'Simpan favorit'}
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500' : ''}`} />
                    </button>
                    <button
                      onClick={() => handleShare(transformed, style.name)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                      title="Bagikan style ini"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="py-6 min-h-[90px] flex items-center justify-center text-center">
                  <p className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-100 break-all select-all font-mono leading-relaxed">
                    {transformed}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex justify-end">
                  <button
                    onClick={() => handleCopy(transformed, style.id)}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold transition-all ${
                      isCopied
                        ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                        : 'bg-rose-600 hover:bg-rose-500 text-white shadow-md shadow-rose-600/20'
                    }`}
                  >
                    {isCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span>{isCopied ? 'Tersalin ke Clipboard' : 'Salin Nickname'}</span>
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
