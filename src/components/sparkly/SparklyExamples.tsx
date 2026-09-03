'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Sparkles } from 'lucide-react';

interface SparklyExamplesProps {
  onCopy: (msg: string) => void;
}

export function SparklyExamples({ onCopy }: SparklyExamplesProps) {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const presets = [
    {
      name: 'Stardust Shimmer',
      preview: '✧･ﾟ: *✧･ﾟ:* sᴘᴀʀᴋʟᴇ *:･ﾟ✧*:･ﾟ✧',
      useCase: 'Bio Instagram & Aesthetic Story',
    },
    {
      name: 'Starlight Halo',
      preview: 'ੈ✩‧₊˚ 𝓈𝓅𝒶𝓇𝓀𝓁𝓎 ˚₊‧✩ੈ',
      useCase: 'Username TikTok & Pinterest',
    },
    {
      name: 'Magic Wand Twinkle',
      preview: '🪄₊˚⊹♡ 𝓼𝓹𝓪𝓻𝓴𝓵𝓮 ♡⊹˚₊🪄',
      useCase: 'Caption aesthetic & Status WA',
    },
    {
      name: 'Coquette Sparkle Bow',
      preview: '୨୧ ₊˚. 𝓈𝓅𝒶𝓇𝓀𝓁𝓎 .˚₊ ୨୧',
      useCase: 'Bio Coquette & Soft Girl Profile',
    },
    {
      name: 'Celestial Moon Sparkle',
      preview: '⋆⁺₊⋆ ☾ 𝓈𝓅𝒶𝓇𝓀𝓁𝓎 ⋆⁺₊⋆ ☁️',
      useCase: 'Header Catatan Notion & Bio X',
    },
    {
      name: 'Twinkling Glow',
      preview: '⋆｡°✩ sᴘᴀʀᴋʟᴇ ✩°｡⋆',
      useCase: 'Nickname Game Roblox & Discord',
    },
    {
      name: 'Crystal Diamond Glitter',
      preview: '💎✨ 𝗦𝗣𝗔𝗥𝗞𝗟𝗘 ✨💎',
      useCase: 'Highlight Judul & Event VIP',
    },
    {
      name: 'Golden Aura Starlight',
      preview: '*ੈ✩‧₊˚ 𝓼𝓹𝓪𝓻𝓴𝓵𝔂 ˚₊‧✩*',
      useCase: 'Nickname Esport & Squad Tag',
    },
    {
      name: 'Shooting Star Burst',
      preview: '彡☆ sᴘᴀʀᴋʟᴇ ☆彡',
      useCase: 'Nama Channel & Server Role',
    },
    {
      name: 'Angel Wings Sparkle',
      preview: '˚ʚ♡ɞ˚ ✨ 𝓈𝓅𝒶𝓇𝓀𝓁𝓎 ✨ ˚ʚ♡ɞ˚',
      useCase: 'Profil Pasangan & Nickname Imut',
    },
    {
      name: 'Glittering Dots',
      preview: '✦ . ⁺ . ✦ sᴘᴀʀᴋʟᴇ ✦ . ⁺ . ✦',
      useCase: 'Border Teks & Kutipan Aesthetic',
    },
    {
      name: 'Celestial Crescent',
      preview: '☽︎✧ sᴘᴀʀᴋʟᴇ ✧☾︎',
      useCase: 'Bio Twitter/X & Tumblr',
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    onCopy(`Contoh font sparkly "${text}" disalin!`);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  return (
    <section className="py-16 bg-slate-900/90 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-semibold mb-4">
            <Sparkles className="w-4 h-4" />
            <span>Inspirasi Siap Salin</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Contoh Gaya Font Sparkly Populer
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Klik tombol salin di bawah untuk langsung menyalin gaya font sparkly favorit Anda ke clipboard.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {presets.map((preset, idx) => {
            const isCopied = copiedIndex === idx;

            return (
              <motion.div
                key={preset.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: (idx % 6) * 0.03 }}
                className="bg-slate-950/80 border border-slate-800 hover:border-teal-500/50 rounded-2xl p-5 shadow-lg flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-semibold text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                      {preset.name}
                    </span>
                    <span className="text-[11px] text-slate-500">{preset.useCase}</span>
                  </div>

                  <div
                    onClick={() => handleCopy(preset.preview, idx)}
                    className="my-3 py-4 px-3 bg-slate-900 rounded-xl border border-slate-800/80 text-center text-lg sm:text-xl font-mono text-teal-200 cursor-pointer hover:bg-teal-950/40 hover:border-teal-500/40 transition-all select-all shadow-inner"
                    title="Klik untuk menyalin"
                  >
                    {preset.preview}
                  </div>
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => handleCopy(preset.preview, idx)}
                    className={`flex items-center gap-1.5 py-1.5 px-4 rounded-xl text-xs font-semibold transition-all ${
                      isCopied
                        ? 'bg-emerald-600 text-white'
                        : 'bg-teal-600 hover:bg-teal-500 text-white shadow-md shadow-teal-600/20'
                    }`}
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Tersalin' : 'Salin Teks'}</span>
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
