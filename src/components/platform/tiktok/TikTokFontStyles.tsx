'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Heart, Share2 } from 'lucide-react';
import { ALL_FONT_STYLES } from '@/lib/unicode-engine';

interface TikTokFontStylesProps {
  onCopy: (msg: string) => void;
}

export function TikTokFontStyles({ onCopy }: TikTokFontStylesProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const sampleText = 'TikTok Bio Aesthetic ✨';

  const handleCopySingle = (transformedText: string, styleId: string) => {
    navigator.clipboard.writeText(transformedText);
    setCopiedId(styleId);
    onCopy('Teks TikTok berhasil disalin!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleFavorite = (styleId: string) => {
    setFavorites((prev) => {
      const nextState = !prev[styleId];
      onCopy(nextState ? 'Disimpan ke favorit!' : 'Dihapus dari favorit');
      return { ...prev, [styleId]: nextState };
    });
  };

  const handleShare = (text: string, title: string) => {
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator
        .share({
          title: `TikTok Style: ${title}`,
          text: text,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(`${title}: ${text}`);
      onCopy('Teks disalin untuk dibagikan!');
    }
  };

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Variasi Font{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              TikTok Unicode
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Koleksi gaya huruf Unicode estetik terlengkap untuk mempercantik nama tampilan, bio, caption video, dan komentar TikTok Anda.
          </p>
        </div>

        {/* Font Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_FONT_STYLES.slice(0, 18).map((style, idx) => {
            const transformed = style.transform(sampleText);
            const isCopied = copiedId === style.id;
            const isFav = !!favorites[style.id];

            return (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-lg hover:shadow-2xl hover:border-cyan-500/30 transition-all flex flex-col justify-between gap-4 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                      {style.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => toggleFavorite(style.id)}
                        className={`p-2 rounded-xl transition-colors ${
                          isFav
                            ? 'text-rose-500 bg-rose-500/10'
                            : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
                        }`}
                        title="Simpan Favorit"
                      >
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                      <button
                        onClick={() => handleShare(transformed, style.name)}
                        className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                        title="Bagikan"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {style.name}
                  </h3>

                  <div className="mt-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 font-mono text-base text-slate-900 dark:text-white break-all select-all border border-slate-100 dark:border-slate-800">
                    {transformed}
                  </div>
                </div>

                <button
                  onClick={() => handleCopySingle(transformed, style.id)}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold transition-all ${
                    isCopied
                      ? 'bg-emerald-500 text-white shadow-md'
                      : 'bg-gradient-to-r from-cyan-500 via-pink-500 to-rose-500 text-white hover:opacity-95 shadow-md shadow-pink-500/15'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      Tersalin!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Salin Font
                    </>
                  )}
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
