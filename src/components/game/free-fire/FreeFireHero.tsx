'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Shuffle, Trash2, Check, Heart, Share2, Gamepad2 } from 'lucide-react';
import { ALL_FONT_STYLES } from '@/lib/unicode-engine';

interface FreeFireHeroProps {
  onCopy: (msg: string) => void;
}

export function FreeFireHero({ onCopy }: FreeFireHeroProps) {
  const [inputText, setInputText] = useState('AHSAN PRO ⚔️');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const handleCopySingle = (transformedText: string, styleId: string) => {
    navigator.clipboard.writeText(transformedText);
    setCopiedId(styleId);
    onCopy('Nickname Free Fire berhasil disalin!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAll = () => {
    const allFormatted = ALL_FONT_STYLES.slice(0, 10)
      .map((s) => `꧁༺ ${s.transform(inputText || 'AHSAN PRO')} ༻꧂`)
      .join('\n\n');
    navigator.clipboard.writeText(allFormatted);
    onCopy('Semua nickname Free Fire berhasil disalin!');
  };

  const handleRandomize = () => {
    const randomPhrases = [
      'SHADOW KILLER ☠️',
      'DARK KING 👑',
      'DEVIL SNIPER 🎯',
      'ROYAL VVIP 💎',
      'ALPHA SQUAD 🛡️',
      'GHOST HUNTER 👻',
      'LEGEND PLAYER 🏆',
    ];
    const randomText = randomPhrases[Math.floor(Math.random() * randomPhrases.length)];
    setInputText(randomText);
  };

  const handleClear = () => {
    setInputText('');
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
          title: `Free Fire Name: ${title}`,
          text: text,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(`${title}: ${text}\nGenerated via https://tulisanaesthetic.id/game/free-fire`);
      onCopy('Teks & Link berhasil disalin untuk dibagikan!');
    }
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-amber-600/20 via-orange-500/20 to-red-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-orange-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 border border-amber-500/20 text-xs sm:text-sm font-semibold text-amber-700 dark:text-amber-300 backdrop-blur-md shadow-sm">
            <Gamepad2 className="w-4 h-4 text-amber-500" />
            <span>Free Fire Stylish Name Generator 2026</span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mt-6 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white font-poppins leading-[1.15]">
            Free Fire Stylish Name /{' '}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Generator Nickname FF Keren
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Buat nama akun Free Fire (FF) estetik bergaya pro player esports dengan kombinasi simbol sayap, mahkota, bintang, dan font Unicode keren secara instan.
          </p>
        </motion.div>

        {/* Converter Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 max-w-4xl mx-auto rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/80 dark:border-amber-900/30 p-6 sm:p-8 shadow-2xl shadow-amber-500/10"
        >
          <div className="relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Tulis nickname FF di sini... (contoh: Ahsan Pro)"
              rows={3}
              className="w-full px-5 py-4 text-lg sm:text-xl rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 resize-none font-sans shadow-inner transition"
            />

            {inputText && (
              <button
                onClick={handleClear}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-200/80 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-red-500 transition"
                title="Hapus Teks"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleRandomize}
                className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-950/50 text-slate-700 dark:text-slate-200 hover:text-amber-600 text-xs sm:text-sm font-semibold transition flex items-center gap-2"
              >
                <Shuffle className="w-4 h-4 text-amber-500" />
                <span>Acak Nama FF</span>
              </button>

              <button
                onClick={handleClear}
                className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-red-50 dark:hover:bg-red-950/50 text-slate-700 dark:text-slate-200 hover:text-red-500 text-xs sm:text-sm font-semibold transition flex items-center gap-2"
              >
                <Trash2 className="w-4 h-4" />
                <span>Hapus Teks</span>
              </button>
            </div>

            <button
              onClick={handleCopyAll}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700 text-white font-bold text-sm shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Copy className="w-4 h-4" />
              <span>Salin Semua Nickname FF</span>
            </button>
          </div>
        </motion.div>

        {/* Live Font Results Grid */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {ALL_FONT_STYLES.slice(0, 8).map((style) => {
            const baseTransformed = style.transform(inputText || 'AHSAN PRO');
            const transformed = `꧁༺ ${baseTransformed} ༻꧂`;
            const isCopied = copiedId === style.id;
            const isFav = !!favorites[style.id];

            return (
              <div
                key={style.id}
                className="group relative rounded-2xl p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-amber-900/20 hover:border-amber-500/50 dark:hover:border-amber-500/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
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

                  <p className="mt-3 text-xl sm:text-2xl font-mono font-medium text-slate-900 dark:text-white break-all select-all leading-snug">
                    {transformed}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">100% In-Game Compatible</span>
                  <button
                    onClick={() => handleCopySingle(transformed, style.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                      isCopied
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : 'bg-amber-600/10 text-amber-600 dark:text-amber-400 hover:bg-amber-600 hover:text-white'
                    }`}
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Tersalin!' : 'Salin Nama'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
