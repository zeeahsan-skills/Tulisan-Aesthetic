'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Copy, RefreshCw, Trash2, Dices, ShieldAlert, Check } from 'lucide-react';
import { transformText } from '@/lib/unicode-engine';

interface MlHeroProps {
  onCopy: (msg: string) => void;
}

const RANDOM_NAMES = [
  'Lancelot', 'Shadow', 'Dragon', 'Phantom', 'Immortal',
  'ChouVip', 'FannyGod', 'GusionX', 'MythicKing', 'AngelaLove'
];

export const MlHero: React.FC<MlHeroProps> = ({ onCopy }) => {
  const [inputText, setInputText] = useState('Mobile Legends');
  const [copied, setCopied] = useState(false);

  const activeInput = inputText.trim() || 'Mobile Legends';
  const primaryStyled = transformText(activeInput, 'scriptBold');
  const secondaryStyled = transformText(activeInput, 'gothicBold');

  const handleCopy = () => {
    navigator.clipboard.writeText(`꧁⚔️${primaryStyled}⚔️꧂`);
    setCopied(true);
    onCopy('Nickname Mobile Legends berhasil disalin!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInputText('');
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * RANDOM_NAMES.length);
    setInputText(RANDOM_NAMES[randomIndex]);
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 overflow-hidden bg-gradient-to-b from-slate-900 via-indigo-950/40 to-slate-950 text-white">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-500/10 via-purple-500/15 to-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>MLBB Nickname Generator 2026 Edition</span>
        </motion.div>

        {/* Title & Subtitle */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4"
        >
          Mobile Legends <br className="hidden sm:inline" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400">
            Stylish Name Generator
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Generate stylish Mobile Legends names instantly using Unicode fonts, symbols, and decorative characters.
        </motion.p>

        {/* Live Converter Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md max-w-3xl mx-auto"
        >
          {/* Input Header & Controls */}
          <div className="flex items-center justify-between mb-3 text-xs sm:text-sm text-slate-400 px-1">
            <span className="font-semibold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-indigo-400" /> Input Nama MLBB Anda:
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleRandom}
                className="flex items-center gap-1 hover:text-indigo-300 transition-colors py-1 px-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50"
                title="Acak nama"
              >
                <Dices className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Random</span>
              </button>
              <button
                onClick={handleClear}
                className="flex items-center gap-1 hover:text-red-400 transition-colors py-1 px-2.5 rounded-lg bg-slate-800/60 border border-slate-700/50"
                title="Hapus teks"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Clear</span>
              </button>
            </div>
          </div>

          {/* Input Box */}
          <div className="relative mb-6">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ketik nama MLBB Anda di sini..."
              rows={2}
              maxLength={30}
              className="w-full bg-slate-950/80 border-2 border-indigo-500/40 focus:border-indigo-400 rounded-xl p-3.5 text-lg sm:text-xl font-medium text-white placeholder-slate-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/20 transition-all resize-none"
            />
            <div className="absolute right-3 bottom-3 text-xs text-slate-500">
              {inputText.length}/30
            </div>
          </div>

          {/* Live Preview Display Box */}
          <div className="bg-slate-950/90 border border-indigo-500/30 rounded-xl p-4 mb-6 text-left relative overflow-hidden group">
            <div className="text-xs text-indigo-400 font-semibold uppercase tracking-wider mb-2 flex items-center justify-between">
              <span>Live Preview Result:</span>
              <span className="text-emerald-400 text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                Moonton MLBB Compatible
              </span>
            </div>
            <div className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-purple-200 to-indigo-200 break-all select-all font-mono py-1">
              ꧁⚔️{primaryStyled}⚔️꧂
            </div>
            <div className="text-sm text-slate-400 mt-1 font-mono break-all">
              乂 {secondaryStyled} 乂
            </div>
          </div>

          {/* Hero Action Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <button
              onClick={() => setInputText(inputText || 'Mobile Legends')}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-indigo-600/25 active:scale-[0.98]"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Generate</span>
            </button>

            <button
              onClick={handleCopy}
              className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-sm transition-all shadow-lg active:scale-[0.98] ${
                copied
                  ? 'bg-emerald-600 text-white shadow-emerald-600/25'
                  : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-600/25'
              }`}
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Copied!' : 'Copy'}</span>
            </button>

            <button
              onClick={handleClear}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition-all border border-slate-700"
            >
              <Trash2 className="w-4 h-4 text-slate-400" />
              <span>Clear</span>
            </button>

            <button
              onClick={handleRandom}
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-sm transition-all border border-slate-700"
            >
              <Dices className="w-4 h-4 text-indigo-400" />
              <span>Random</span>
            </button>
          </div>
        </motion.div>

        {/* Feature Highlights Pills */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            100% Free & Unlimited
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-indigo-400" />
            Supports MLBB 20-Character Limit
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            Safe & Anti-Ban
          </span>
        </div>
      </div>
    </section>
  );
};
