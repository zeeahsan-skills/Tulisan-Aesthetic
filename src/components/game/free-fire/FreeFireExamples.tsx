'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

interface FreeFireExamplesProps {
  onCopy: (msg: string) => void;
}

export function FreeFireExamples({ onCopy }: FreeFireExamplesProps) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const presets = [
    {
      category: 'Shadow',
      title: 'Shadow Assassin FF',
      preview: '꧁⚔️ 𝕊𝕙𝕒𝕕𝕠𝕨 ⚔️꧂',
    },
    {
      category: 'Demon',
      title: 'Demon Lord Esports',
      preview: '꧁༺ 𝕯𝖊𝖒𝖔𝖓 ༻꧂',
    },
    {
      category: 'Alpha',
      title: 'Alpha Leader Squad',
      preview: '🛡️ 𝔸𝕝𝕡𝕙𝕒 𝕊𝕢𝕦𝕒𝕕 👑',
    },
    {
      category: 'Ghost',
      title: 'Ghost Hunter Stealth',
      preview: '👻 𝔾𝕙𝕠𝕤𝕥 𝔽𝔽 ☠️',
    },
    {
      category: 'Hunter',
      title: 'Headshot Hunter',
      preview: '🎯 𝐻𝓊𝓃𝓉ℯ𝓇 𝒫𝓇ℴ ⚡',
    },
    {
      category: 'Legend',
      title: 'Legendary Warrior',
      preview: '꧁༺ 𝕷𝖊𝖌𝖊𝖓𝖉 ༻꧂',
    },
    {
      category: 'Dragon',
      title: 'Dragon Fire Esports',
      preview: '🔥 𝔻𝕣𝕒𝕘𝕠𝕟 🐉',
    },
    {
      category: 'King',
      title: 'King Royal Esports',
      preview: '👑 𝙺𝚒𝚗𝚐 𝙵𝙵 💎',
    },
    {
      category: 'Queen',
      title: 'Queen Girl Gamer',
      preview: '🌸 𝒬𝓊ℯℯ𝓃 💖',
    },
    {
      category: 'Sniper',
      title: 'AWM One Shot Sniper',
      preview: '🎯 𝕊𝕟𝕚𝕡𝕖𝕣 𝔸𝕎𝕄 💥',
    },
  ];

  const handleCopyPreset = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    onCopy('Nama FF berhasil disalin!');
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            Preset & Contoh Populer
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Template Nama Free Fire Siap Pakai
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Klik salin di bawah ini untuk langsung menggunakan preset nickname Free Fire populer di dalam game.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {presets.map((preset, idx) => {
            const isCopied = copiedText === preset.preview;

            return (
              <motion.div
                key={preset.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="rounded-3xl p-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-amber-900/20 hover:border-amber-500/50 shadow-md transition flex flex-col justify-between"
              >
                <div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-[10px] font-bold uppercase tracking-wider">
                    {preset.category}
                  </span>

                  <h3 className="mt-3 text-sm font-bold text-slate-900 dark:text-white font-poppins">
                    {preset.title}
                  </h3>

                  <div className="mt-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 font-mono text-sm font-medium text-slate-800 dark:text-slate-200 break-all select-all text-center">
                    {preset.preview}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-center">
                  <button
                    onClick={() => handleCopyPreset(preset.preview)}
                    className={`w-full py-2 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                      isCopied
                        ? 'bg-emerald-500 text-white'
                        : 'bg-amber-600 text-white hover:bg-amber-500 shadow-md shadow-amber-500/20'
                    }`}
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Tersalin!' : 'Salin Nama'}</span>
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
