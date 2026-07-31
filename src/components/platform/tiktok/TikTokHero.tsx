'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Shuffle, Trash2, Wand2, Check, Heart, Share2, Video } from 'lucide-react';
import { ALL_FONT_STYLES } from '@/lib/unicode-engine';

interface TikTokHeroProps {
  onCopy: (msg: string) => void;
}

export function TikTokHero({ onCopy }: TikTokHeroProps) {
  const [inputText, setInputText] = useState('TikTok Bio Aesthetic ✨');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const handleCopySingle = (transformedText: string, styleId: string) => {
    navigator.clipboard.writeText(transformedText);
    setCopiedId(styleId);
    onCopy('Font TikTok berhasil disalin!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAll = () => {
    const allFormatted = ALL_FONT_STYLES.slice(0, 10)
      .map((s) => `${s.name}:\n${s.transform(inputText || 'TikTok Bio Aesthetic ✨')}`)
      .join('\n\n');
    navigator.clipboard.writeText(allFormatted);
    onCopy('Semua gaya font TikTok berhasil disalin!');
  };

  const handleRandomize = () => {
    const randomPhrases = [
      'Content Creator 🎬',
      'FYP Everyday 🚀',
      'Aesthetic Vibe 🌸',
      'Daily Vlog & Tech 📱',
      'Gaming & Livestreaming 🎮',
      'Fashion & Beauty Tips 💄',
      'Music & Dance Covers 🎵',
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
          title: `TikTok Font: ${title}`,
          text: text,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(`${title}: ${text}\nGenerated via https://tulisanaesthetic.id/platform/tiktok`);
      onCopy('Teks & Link berhasil disalin untuk dibagikan!');
    }
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 via-pink-500/20 to-purple-600/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-pink-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 via-pink-500/10 to-purple-500/10 border border-pink-500/20 text-xs sm:text-sm font-semibold text-slate-800 dark:text-pink-300 backdrop-blur-md shadow-sm">
            <Video className="w-4 h-4 text-cyan-500" />
            <span>TikTok Font Generator 2026</span>
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-center mt-6 max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white font-poppins leading-[1.15]">
            TikTok Font{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Generator
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Generate stylish TikTok fonts instantly for usernames, bios, captions, comments, and profile names using Unicode text.
          </p>
        </motion.div>

        {/* Converter Box Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 max-w-4xl mx-auto"
        >
          <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200/80 dark:border-purple-900/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/5">
            
            {/* Input Label & Clear Action */}
            <div className="flex items-center justify-between mb-3">
              <label htmlFor="tiktok-font-input" className="text-xs sm:text-sm font-semibold tracking-wider text-slate-500 dark:text-slate-400 uppercase flex items-center gap-2">
                <Wand2 className="w-4 h-4 text-cyan-500" />
                Input Teks TikTok Anda:
              </label>
              {inputText && (
                <button
                  onClick={handleClear}
                  className="text-xs text-rose-500 hover:text-rose-600 dark:text-rose-400 flex items-center gap-1 font-medium transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Hapus Teks
                </button>
              )}
            </div>

            {/* Input Field */}
            <div className="relative">
              <textarea
                id="tiktok-font-input"
                rows={3}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ketik nama, bio, atau caption TikTok di sini..."
                className="w-full px-5 py-4 text-lg sm:text-xl rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none shadow-inner"
              />
            </div>

            {/* Main Action Control Buttons */}
            <div className="flex flex-wrap gap-3 mt-4">
              <button
                onClick={() => onCopy('Siap! Pilih variasi font TikTok di bawah.')}
                className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-pink-500 to-rose-500 text-white font-semibold shadow-lg shadow-pink-500/20 hover:shadow-pink-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Sparkles className="w-4 h-4" />
                <span>Generate Font</span>
              </button>

              <button
                onClick={handleCopyAll}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Copy className="w-4 h-4" />
                <span>Salin Semua</span>
              </button>

              <button
                onClick={handleRandomize}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                <Shuffle className="w-4 h-4 text-cyan-500" />
                <span>Gaya Acak</span>
              </button>
            </div>

          </div>
        </motion.div>

        {/* Live Font Results Grid */}
        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {ALL_FONT_STYLES.slice(0, 10).map((style) => {
            const transformed = style.transform(inputText || 'TikTok Bio Aesthetic ✨');
            const isCopied = copiedId === style.id;
            const isFav = !!favorites[style.id];

            return (
              <div
                key={style.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/20 shadow-md hover:shadow-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between gap-4 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      {style.name}
                    </span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => toggleFavorite(style.id)}
                        className={`p-1.5 rounded-lg transition-colors ${
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
                        className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                        title="Bagikan Font"
                      >
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 font-mono text-base sm:text-lg text-slate-900 dark:text-slate-100 break-all select-all">
                    {transformed}
                  </div>
                </div>

                <div className="flex items-center justify-end">
                  <button
                    onClick={() => handleCopySingle(transformed, style.id)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isCopied
                        ? 'bg-emerald-500 text-white shadow-md'
                        : 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white hover:opacity-95 shadow-sm'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Tersalin!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Salin Teks
                      </>
                    )}
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
