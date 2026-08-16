'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Terminal, Zap } from 'lucide-react';

interface GlitchExamplesProps {
  onCopy: (msg: string) => void;
}

export function GlitchExamples({ onCopy }: GlitchExamplesProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const presets = [
    {
      title: 'Zalgo Ringan (Cyber Text)',
      text: 'G̸l̸i̸t̸c̸h̸ ̸C̸y̸b̸e̸r̸',
      category: 'Glitch Cyber',
    },
    {
      title: 'Zalgo Distorted Heavy',
      text: 'G̸̡͐l̵̡̈i̵̧̓ţ̴͒ç̴̂h̵̡̀ ̴̢̂Ḩ̸̈ó̴̧ŗ̴̈r̸̡̀ó̸̧r̸̡̈',
      category: 'Zalgo Heavy',
    },
    {
      title: 'Flipped Glitch Cyber Wings',
      text: '꧁༺ G̸l̸i̸t̸c̸h̸ ̸W̸i̸n̸g̸s̸ ༻꧂',
      category: 'Gaming Clan',
    },
    {
      title: 'Demon Skull Horror Glitch',
      text: '💀 G̸̡͐l̵̡̈i̵̧̓ţ̴͒ç̴̂h̵̡̀ 💀',
      category: 'Creepy Horror',
    },
    {
      title: 'Dark Glitch Fraktur Gothic',
      text: '𝕲̸𝖑̸𝖎̸𝖙̸𝖈̸𝖍̸ ̸𝕲̸𝖔̸𝖙̸𝖍̸𝖎̸𝖈̸',
      category: 'Gothic Glitch',
    },
    {
      title: 'Japanese Cyber Brackets',
      text: '『 G̸l̸i̸t̸c̸h̸ ̸T̸e̸x̸t̸ 』',
      category: 'Japanese Style',
    },
  ];

  const handleCopy = (text: string, idx: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(idx);
    onCopy('Contoh Font Glitch berhasil disalin!');
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="contoh-tulisan-glitch" className="py-16 sm:py-24 bg-slate-50 dark:bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Presets & Variations
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Contoh Tulisan Glitch & Zalgo Siap Salin
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Klik tombol salin pada salah satu preset font glitch di bawah ini untuk langsung menempelkannya di Nickname Game atau Media Sosial.
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
                    <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-purple-500/10 text-purple-700 dark:text-pink-300 border border-purple-500/20">
                      {item.category}
                    </span>
                    <Zap className="w-4 h-4 text-emerald-500" />
                  </div>

                  <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                    {item.title}
                  </h3>

                  <div className="mt-3 p-4 rounded-xl bg-slate-900 text-emerald-400 font-mono text-lg break-all min-h-[64px] flex items-center border border-slate-800">
                    {item.text}
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(item.text, idx)}
                  className={`mt-4 w-full py-2.5 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    isCopied
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-purple-600 hover:text-white dark:hover:bg-purple-600 text-slate-800 dark:text-slate-200'
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
