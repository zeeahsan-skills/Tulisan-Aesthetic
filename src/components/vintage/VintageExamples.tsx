'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Feather } from 'lucide-react';

interface VintageExamplesProps {
  onCopy: (msg: string) => void;
}

export function VintageExamples({ onCopy }: VintageExamplesProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const presets = [
    {
      title: 'Fraktur Blackletter (Jerman Kuno)',
      text: '𝔙𝔦𝔫𝔱𝔞𝔤𝔢 𝔅𝔩𝔞𝔠𝔨𝔩𝔢𝔱𝔱𝔢𝔯',
      category: 'Blackletter',
    },
    {
      title: 'Gothic Bold Vintage',
      text: '𝖁𝖎𝖓𝖙𝖆𝖌𝖊 𝕲𝖔𝖙𝖍𝖎𝖈',
      category: 'Gothic Bold',
    },
    {
      title: 'Bold Serif Vintage Klasik',
      text: '𝐕𝐢𝐧𝐭𝐚𝐠𝐞 𝐒𝐞𝐫𝐢𝐟',
      category: 'Classic Serif',
    },
    {
      title: 'Italic Serif Retro',
      text: '𝑉𝑖𝑛𝑡𝑎𝑔𝑒 𝐼𝑡𝑎𝑙𝑖𝑐',
      category: 'Serif Italic',
    },
    {
      title: 'Bold Cursive Kaligrafi Vintage',
      text: '𝓱𝓲𝓷𝓽𝓪𝓰𝓮 𝓒𝓪𝓵𝓵𝓲𝓰𝓻𝓪𝓹𝓱𝔂',
      category: 'Calligraphy',
    },
    {
      title: 'Royal Crown Vintage',
      text: '♔ 𝔙𝔦𝔫𝔱𝔞𝔤𝔢 ℜ𝔬𝔶𝔞𝔩 ♔',
      category: 'Royal Vintage',
    },
  ];

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    onCopy('Contoh Font Vintage berhasil disalin!');
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="contoh-tulisan-vintage" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Presets & Typography
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Contoh Tulisan Vintage & Blackletter Siap Salin
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Klik tombol salin pada salah satu preset font vintage klasik di bawah ini untuk langsung menempelkannya di Bio IG, Undangan, atau Desain.
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
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20">
                      {item.category}
                    </span>
                    <Feather className="w-4 h-4 text-amber-500" />
                  </div>

                  <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {item.title}
                  </h3>

                  <div className="mt-3 p-4 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-amber-300 font-serif text-xl break-all min-h-[64px] flex items-center border border-slate-200 dark:border-slate-800">
                    {item.text}
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(item.text, idx)}
                  className={`mt-4 w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    isCopied
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-amber-600 hover:text-white dark:hover:bg-amber-600 text-slate-800 dark:text-slate-200'
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
