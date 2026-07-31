'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, Shuffle, Trash2, Wand2, Check, Heart, Share2, RefreshCw } from 'lucide-react';
import { FLIPPED_FONT_STYLES } from '@/lib/unicode-engine';

interface MemutarHeroProps {
  onCopy: (msg: string) => void;
}

export function MemutarHero({ onCopy }: MemutarHeroProps) {
  const [inputText, setInputText] = useState('Ahsan Stylish');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const handleCopySingle = (transformedText: string, styleId: string) => {
    navigator.clipboard.writeText(transformedText);
    setCopiedId(styleId);
    onCopy('Font Memutar Terbalik berhasil disalin!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAll = () => {
    const allFormatted = FLIPPED_FONT_STYLES
      .map((s) => `${s.name}:\n${s.transform(inputText || 'Ahsan Stylish')}`)
      .join('\n\n');
    navigator.clipboard.writeText(allFormatted);
    onCopy('Semua gaya Font Memutar berhasil disalin!');
  };

  const handleRandomize = () => {
    const randomMemutarPhrases = [
      'Hello World',
      'Stylish Name',
      'Gaming Pro',
      'Funny Text',
      'Top Secret',
      'Crazy Mind',
      'Reverse Mode',
      'Magic Mirror',
    ];
    const randomText = randomMemutarPhrases[Math.floor(Math.random() * randomMemutarPhrases.length)];
    setInputText(randomText);
  };

  const toggleFavorite = (styleId: string) => {
    setFavorites((prev) => {
      const nextState = !prev[styleId];
      onCopy(nextState ? 'Disimpan ke favorit!' : 'Dihapus dari favorit');
      return { ...prev, [styleId]: nextState };
    });
  };

  const handleShare = (text: string, title: string) => {
    if (navigator.share) {
      navigator
        .share({
          title: `Font Memutar: ${title}`,
          text: text,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(`${title}: ${text}\nGenerated via https://tulisanaesthetic.id/font/memutar`);
      onCopy('Teks & Link berhasil disalin untuk dibagikan!');
    }
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/20 via-blue-500/20 to-purple-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border border-cyan-500/20 text-xs sm:text-sm font-semibold text-cyan-700 dark:text-cyan-300 backdrop-blur-md shadow-sm">
            <RefreshCw className="w-4 h-4 text-cyan-500 animate-spin" />
            <span>Upside Down & Flipped Text Generator 2026</span>
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
            Font Memutar /{' '}
            <span className="bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Upside Down
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Convert normal text into upside-down Unicode text instantly for Instagram, TikTok, Discord, WhatsApp, Facebook, and gaming.
          </p>
        </motion.div>

        {/* Converter Box Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl p-6 sm:p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/80 dark:border-purple-900/40 shadow-2xl shadow-cyan-500/10">
            
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-cyan-300 flex items-center gap-2">
                <Wand2 className="w-4 h-4 text-cyan-600 dark:text-pink-400" />
                Input Teks Memutar Anda:
              </label>
              {inputText && (
                <button
                  onClick={() => setInputText('')}
                  className="text-xs font-semibold text-rose-500 hover:text-rose-600 dark:text-rose-400 flex items-center gap-1 hover:underline"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  Hapus Teks
                </button>
              )}
            </div>

            <div className="relative">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Tulis teks terbalik di sini..."
                rows={3}
                className="w-full px-5 py-4 text-lg sm:text-2xl font-medium rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-purple-900/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 transition-all resize-none shadow-inner"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleCopySingle(inputText, 'main')}
                className="flex-1 min-w-[140px] px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-600 via-blue-500 to-purple-500 hover:from-cyan-500 hover:to-purple-400 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                Generate Upside Down Text
              </button>

              <button
                onClick={handleCopyAll}
                className="px-5 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all duration-200 flex items-center gap-2 border border-slate-200/60 dark:border-slate-700"
              >
                <Copy className="w-4 h-4 text-cyan-600 dark:text-pink-400" />
                Salin Semua
              </button>

              <button
                onClick={handleRandomize}
                className="px-5 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition-all duration-200 flex items-center gap-2 border border-slate-200/60 dark:border-slate-700"
              >
                <Shuffle className="w-4 h-4 text-pink-500" />
                Gaya Acak
              </button>
            </div>

          </div>
        </motion.div>

        {/* Live Font Previews Grid */}
        <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          {FLIPPED_FONT_STYLES.map((style, idx) => {
            const transformed = style.transform(inputText || 'Ahsan Stylish');
            const isCopied = copiedId === style.id;
            const isFav = !!favorites[style.id];

            return (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.03 * idx }}
                className="group relative rounded-2xl p-5 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/70 dark:border-purple-900/30 hover:border-cyan-500/50 dark:hover:border-cyan-500/50 shadow-md hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
                      {style.name}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 font-medium">
                      Unicode Flip
                    </span>
                  </div>

                  <p className="text-xl sm:text-2xl font-normal text-slate-900 dark:text-white break-words py-3 select-all font-mono leading-relaxed">
                    {transformed}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => toggleFavorite(style.id)}
                      title="Favoritkan"
                      className={`p-2 rounded-xl text-xs transition ${
                        isFav
                          ? 'bg-rose-500/10 text-rose-500 border border-rose-500/30'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-rose-500'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isFav ? 'fill-rose-500' : ''}`} />
                    </button>

                    <button
                      onClick={() => handleShare(transformed, style.name)}
                      title="Bagikan"
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-pink-400 transition"
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => handleCopySingle(transformed, style.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all duration-200 ${
                      isCopied
                        ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                        : 'bg-cyan-50 dark:bg-cyan-950/50 hover:bg-cyan-600 hover:text-white text-cyan-600 dark:text-cyan-300 dark:hover:bg-cyan-600 border border-cyan-200 dark:border-cyan-800/50'
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
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
