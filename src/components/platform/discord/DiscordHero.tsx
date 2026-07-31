'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Shuffle, Trash2, Check, Heart, Share2 } from 'lucide-react';
import { ALL_FONT_STYLES } from '@/lib/unicode-engine';

const DiscordIcon = () => (
  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.793 8.18 1.793 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.077.077 0 0 1-.006.127c-.598.348-1.22.648-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

interface DiscordHeroProps {
  onCopy: (msg: string) => void;
}

export function DiscordHero({ onCopy }: DiscordHeroProps) {
  const [inputText, setInputText] = useState('Discord Server & Bio Aesthetic 🎮');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});

  const handleCopySingle = (transformedText: string, styleId: string) => {
    navigator.clipboard.writeText(transformedText);
    setCopiedId(styleId);
    onCopy('Font Discord berhasil disalin!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleCopyAll = () => {
    const allFormatted = ALL_FONT_STYLES.slice(0, 10)
      .map((s) => `${s.name}:\n${s.transform(inputText || 'Discord Server & Bio Aesthetic 🎮')}`)
      .join('\n\n');
    navigator.clipboard.writeText(allFormatted);
    onCopy('Semua gaya font Discord berhasil disalin!');
  };

  const handleRandomize = () => {
    const randomPhrases = [
      'Cyber Shadow 🎮',
      'VIP Server Owner 👑',
      'Moderator Squad 🛡️',
      'Night Owls Club 🦉',
      'Esports Pro League 🏆',
      'Chill Lounge & Music 🎧',
      'Dev & Code Realm 💻',
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
          title: `Discord Font: ${title}`,
          text: text,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(`${title}: ${text}\nGenerated via https://tulisanaesthetic.id/platform/discord`);
      onCopy('Teks & Link berhasil disalin untuk dibagikan!');
    }
  };

  return (
    <section id="hero" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-indigo-600/20 via-purple-500/20 to-indigo-700/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 border border-indigo-500/20 text-xs sm:text-sm font-semibold text-indigo-700 dark:text-indigo-300 backdrop-blur-md shadow-sm">
            <DiscordIcon />
            <span>Discord Font Generator Pro 2026</span>
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
            Discord Font Generator /{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 bg-clip-text text-transparent">
              Teks Server & Profil Keren
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Buat nama pengguna, Display Name, nickname server, nama channel, role VIP, About Me profil, dan pesan chat Discord terlihat aesthetic, gothic & profesional secara instan.
          </p>
        </motion.div>

        {/* Converter Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-10 max-w-4xl mx-auto rounded-3xl bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl border border-slate-200/80 dark:border-indigo-900/30 p-6 sm:p-8 shadow-2xl shadow-indigo-500/10"
        >
          <div className="relative">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Tulis nama server, role, atau bio Discord di sini..."
              rows={3}
              className="w-full px-5 py-4 text-lg sm:text-xl rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none font-sans shadow-inner transition"
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
                className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 text-slate-700 dark:text-slate-200 hover:text-indigo-600 text-xs sm:text-sm font-semibold transition flex items-center gap-2"
              >
                <Shuffle className="w-4 h-4 text-indigo-500" />
                <span>Acak Contoh Teks</span>
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
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
            >
              <Copy className="w-4 h-4" />
              <span>Salin Semua Hasil (Top 10)</span>
            </button>
          </div>
        </motion.div>

        {/* Live Font Results Grid */}
        <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {ALL_FONT_STYLES.slice(0, 8).map((style) => {
            const transformed = style.transform(inputText || 'Discord Server Aesthetic');
            const isCopied = copiedId === style.id;
            const isFav = !!favorites[style.id];

            return (
              <div
                key={style.id}
                className="group relative rounded-2xl p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-indigo-900/20 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 font-poppins">
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
                        className="p-1.5 rounded-lg text-slate-400 hover:text-indigo-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
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
                  <span className="text-[11px] text-slate-400">Support Server, Role & DM</span>
                  <button
                    onClick={() => handleCopySingle(transformed, style.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
                      isCopied
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : 'bg-indigo-600/10 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-600 hover:text-white'
                    }`}
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Tersalin!' : 'Salin Font'}</span>
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
