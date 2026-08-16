'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Shuffle } from 'lucide-react';

interface RandomExamplesProps {
  onCopy: (msg: string) => void;
}

export function RandomExamples({ onCopy }: RandomExamplesProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const presets = [
    {
      title: 'Mix Wings & Small Caps',
      text: '꧁༺ ʀᴀɴᴅᴏᴍ ᴍɪx ༻꧂',
      category: 'Random Wings',
    },
    {
      title: 'Mix Sparkle & Cursive',
      text: '✨ ℛ𝒶𝓃𝒹𝑜𝓂 ℛ𝒶𝓇ℯ ✨',
      category: 'Sparkle Mix',
    },
    {
      title: 'Mix Square & Dark Box',
      text: '🄰🄷🅂🄰🄽 🅰🅷🆂🅰🅽',
      category: 'Square Mix',
    },
    {
      title: 'Mix Crown & Bold Sans',
      text: '👑 𝗥𝗮𝗻𝗱𝗼𝗺 𝗞𝗶𝗻𝗴 👑',
      category: 'Royal Mix',
    },
    {
      title: 'Mix Gothic Swords',
      text: '⚔️ 𝕽𝖆𝖓𝖉𝖔𝖒 𝕲𝖔𝖙𝖍𝖎𝖈 ⚔️',
      category: 'Gothic Mix',
    },
    {
      title: 'Mix Kaomoji & Tiny Superscript',
      text: '(⁠✿⁠ ⁠♡⁠) ᴿᵃⁿᵈᵒᵐ ᵀⁱⁿʸ (⁠♡⁠ ⁠✿⁠)',
      category: 'Cute Mix',
    },
  ];

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    onCopy('Contoh Font Random berhasil disalin!');
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="contoh-tulisan-random" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Presets & Random Combos
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Contoh Kombinasi Font Random Siap Salin
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Klik tombol salin pada salah satu contoh kombinasi acak di bawah ini untuk langsung menggunakannya.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presets.map((item, idx) => {
            const isCopied = copiedIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-white dark:bg-slate-950 rounded-2xl p-6 border border-slate-200 dark:border-purple-900/30 shadow-md hover:shadow-xl transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-500/20">
                      {item.category}
                    </span>
                    <Shuffle className="w-4 h-4 text-blue-500" />
                  </div>

                  <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {item.title}
                  </h3>

                  <div className="mt-3 p-4 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-blue-300 font-mono text-lg break-all min-h-[64px] flex items-center border border-slate-200 dark:border-slate-800">
                    {item.text}
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(item.text, idx)}
                  className={`mt-4 w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    isCopied
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Tersalin!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Salin Preset</span>
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
