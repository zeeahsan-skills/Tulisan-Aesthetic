'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Sparkles } from 'lucide-react';

interface WhatsAppExamplesProps {
  onCopy: (msg: string) => void;
}

export function WhatsAppExamples({ onCopy }: WhatsAppExamplesProps) {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Family',
    'Friends',
    'Business',
    'VIP',
    'Love',
    'Gaming',
    'Work',
    'Travel',
    'Cute',
    'Cool',
  ];

  const presets = [
    {
      category: 'Family',
      title: 'Nama Grup Keluarga',
      text: '🅵🅰🅼🅸🅻🆈 • Rumah Ceria Bersama ❤️ ✨\nHome is where the heart is ~',
    },
    {
      category: 'Friends',
      title: 'Grup Sahabat Nongkrong',
      text: '𝔰𝔞𝔥𝔞𝔟𝔞𝔱 𝔰𝔢𝔧𝔞𝔱𝔦 ☕ 💬\nNongkrong & curhat tanpa batas!',
    },
    {
      category: 'Business',
      title: 'WhatsApp Bisnis CS',
      text: '🅱🆄🆂🅸🅽🅴🆂🆂 • Customer Service 🟢\nJam Operasional: 08:00 - 17:00 WIB',
    },
    {
      category: 'VIP',
      title: 'Profil VIP Executive',
      text: '𝒱ℐ𝒫 ℰ𝓍ℯ𝒸𝓊𝓉𝒾𝓋ℯ • Private Contact 💼\nFor urgent inquiries only ⚡',
    },
    {
      category: 'Love',
      title: 'Status Pasangan Romantis',
      text: '𝓈ℴ𝓊𝓁𝓂𝒶𝓉ℯ 𝒶𝓁𝓌𝒶𝓎𝓈 & 𝒻ℴ𝓇ℯ𝓋ℯ𝓇 💖 🌸\nTogether is a wonderful place to be',
    },
    {
      category: 'Gaming',
      title: 'Grup Mabar Squad',
      text: 'ɢᴀᴍɪɴɢ sǫᴜᴀᴅ • ᴍᴀʙᴀʀ ɴɪɢʜᴛ 🎮 ⚡\nPush Rank Legend 20:00 WIB!',
    },
    {
      category: 'Work',
      title: 'Grup Project Kantor',
      text: '🅲🅾🆁🅿🅾🆁🅰🆃🅴 • Project Team 📈\nDeadlines & Daily Updates 📌',
    },
    {
      category: 'Travel',
      title: 'Komunitas Petualang',
      text: '✈️ 𝓉𝓇𝒶𝓋ℯ𝓁 & 𝒶𝒹𝓋ℯ𝓃𝓉𝓊𝓇ℯ 🌍 🏔️\nNext Destination: Labuan Bajo',
    },
    {
      category: 'Cute',
      title: 'Bio WA Imut',
      text: '𝓈ℴ𝒻𝓉 & 𝒸𝓊𝓉ℯ 𝓋𝒾𝒷ℯ𝓈 🎀 ✨\nbe kind & stay happy always 🍓',
    },
    {
      category: 'Cool',
      title: 'Status WA Keren',
      text: 'ℂ𝕠𝕠𝕝 & 𝕊𝕚𝕝𝕖𝕟𝕥 𝔸𝕔𝕙𝕚𝕖𝕧𝕖𝕣 ⚡ 🕶️\nAction speaks louder than words.',
    },
  ];

  const filtered = activeCategory === 'All'
    ? presets
    : presets.filter((p) => p.category === activeCategory);

  const handleCopyPreset = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIdx(index);
    onCopy('Teks WhatsApp berhasil disalin!');
    setTimeout(() => setCopiedIdx(null), 2000);
  };

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Preset Info & Nama Siap Pakai
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Contoh Teks WhatsApp{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 bg-clip-text text-transparent">
              Populer 2026
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Salin kombinasi nama profil, grup, dan status WhatsApp estetik untuk berbagai kebutuhan dalam 1-klik.
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
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20'
                  : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-emerald-900/30'
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
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-emerald-900/30 shadow-md hover:shadow-xl transition-all flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
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
                        ? 'bg-emerald-600 text-white shadow-md'
                        : 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:opacity-95 shadow-sm'
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
                        Salin Contoh Teks
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
