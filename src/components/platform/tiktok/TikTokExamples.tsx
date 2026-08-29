'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Sparkles } from 'lucide-react';

interface TikTokExamplesProps {
  onCopy: (msg: string) => void;
}

export function TikTokExamples({ onCopy }: TikTokExamplesProps) {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Creator',
    'Viral',
    'Trend',
    'Lifestyle',
    'Beauty',
    'Gaming',
    'Music',
    'Travel',
    'Food',
    'Anime',
  ];

  const presets = [
    {
      category: 'Creator',
      title: 'Short Form Creator',
      text: '🅲🆁🅴🅰🆃🅾🆁 • Daily Vlogs & Tech Reviews 🎬\n📍 Jakarta | Business: collab@creator.id',
    },
    {
      category: 'Viral',
      title: 'FYP Trend Setter',
      text: '𝔉𝔜𝔓 𝔈𝔳𝔢𝔯𝔶𝔡𝔞𝔶 🚀 ✨\nTurn notifications ON! 🔔 New video 19.00 WIB',
    },
    {
      category: 'Trend',
      title: 'Aesthetic Mood',
      text: '𝓈ℴ𝒻𝓉 𝓋𝒾𝒷ℯ𝓈 𝓅ℴ𝓋 🌸 ☕\ncreating memories 15s at a time ~',
    },
    {
      category: 'Lifestyle',
      title: 'Daily Inspiration',
      text: 'ʟɪғᴇsᴛʏʟᴇ & ᴍɪɴᴅғᴜʟɴᴇss 🌿 ✨\nconsistency > perfection 🧘‍♂️',
    },
    {
      category: 'Beauty',
      title: 'Beauty & Skincare',
      text: '𝒷ℯ𝒶𝓊𝓉𝓎 𝑔𝓊𝓇𝓊 💄 ✨\nHonest Reviews & Makeup Tutorials 🎀',
    },
    {
      category: 'Gaming',
      title: 'Pro Streamer',
      text: 'ɢᴀᴍᴇʀ & ʟɪᴠᴇsᴛʀᴇᴀᴍᴇʀ 🎮 ⚡\nLive every night 20:00 WIB 🔴',
    },
    {
      category: 'Music',
      title: 'Indie Musician',
      text: '𝓂𝓊𝓈𝒾𝒸 & 𝒸ℴ𝓋ℯ𝓇𝓈 🎵 🎸\nStream my latest single on Spotify 🎧',
    },
    {
      category: 'Travel',
      title: 'Wanderlust Explorer',
      text: '✈️ 𝓉𝓇𝒶𝓋ℯ𝓁 𝒹𝒾𝒶𝓇𝒾ℯ𝓈 🌍\nExploring hidden gems in Indonesia 🏔️',
    },
    {
      category: 'Food',
      title: 'Kuliner & Recipe',
      text: '🅵🅾🅾🅳🅸🅴 • Resep Simpel & Enak 🍳 🍔\nTag me to recreate! 🍜',
    },
    {
      category: 'Anime',
      title: 'Otaku & Cosplay',
      text: '𝔸𝕟𝕚𝕞𝕖 & ℂ𝕠𝕤𝕡𝕝𝕒𝕪 𝕍𝕚𝕓𝕖𝕤 ⛩️ ✨\nWeekly cosplay transformations 🦊',
    },
  ];

  const filtered = activeCategory === 'All'
    ? presets
    : presets.filter((p) => p.category === activeCategory);

  const handleCopyPreset = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(index);
    onCopy('Teks bio TikTok berhasil disalin!');
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Preset Bio Siap Pakai
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Contoh Bio TikTok{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Populer
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Salin contoh kombinasi font & emoji estetik untuk berbagai kategori profil TikTok dalam 1-klik.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-md shadow-pink-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-purple-900/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Examples Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item, idx) => {
            const isCopied = copiedIdx === idx;
            return (
              <motion.div
                key={item.title + idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-md hover:shadow-xl transition-all flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-600 dark:text-pink-400 border border-pink-500/20">
                      {item.category}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {item.title}
                    </span>
                  </div>
                  <pre className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 font-sans text-sm sm:text-base text-slate-800 dark:text-slate-200 whitespace-pre-wrap break-words border border-slate-100 dark:border-slate-800">
                    {item.text}
                  </pre>
                </div>

                <div className="flex items-center justify-end">
                  <button
                    onClick={() => handleCopyPreset(item.text, idx)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
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
                        Salin Contoh Bio
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
