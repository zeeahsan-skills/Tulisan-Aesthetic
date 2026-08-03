'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Target, Swords, Gamepad2, Zap, Copy, Check, Sparkles, Shield, Crosshair } from 'lucide-react';
import { GAMING_NICKNAMES } from '@/lib/nicknames';

interface GamePillarHeroProps {
  onCopy: (msg: string) => void;
}

export function GamePillarHero({ onCopy }: GamePillarHeroProps) {
  const [inputText, setInputText] = useState('ProGamer');
  const [activeGame, setActiveGame] = useState('free-fire');
  const [copiedNick, setCopiedNick] = useState<string | null>(null);

  const currentGame = GAMING_NICKNAMES.find((g) => g.id === activeGame) || GAMING_NICKNAMES[0];

  const generatedCustomNicknames = [
    `꧁༺ ${inputText} ༻꧂`,
    `亗 ${inputText.toUpperCase()} 亗`,
    `☂️ ${inputText} ☂️`,
    `⚔️ ${inputText} ⚔️`,
    `帝• ${inputText} •帝`,
    `★彡 ${inputText} 彡★`,
  ];

  const handleCopy = (nick: string) => {
    navigator.clipboard.writeText(nick);
    setCopiedNick(nick);
    onCopy(`Nickname "${nick}" berhasil disalin!`);
    setTimeout(() => setCopiedNick(null), 2000);
  };

  return (
    <section className="relative pt-12 pb-16 md:pt-16 md:pb-24 bg-gradient-to-b from-slate-950 via-slate-900 to-purple-950 text-white overflow-hidden">
      {/* Background Neon Gradients */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[400px] bg-gradient-to-tr from-amber-500/15 via-red-500/20 to-purple-600/20 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 mb-6">
          <a href="/" className="hover:text-amber-400 transition">Home</a>
          <span>/</span>
          <span className="text-amber-300">Game Nicknames</span>
        </nav>

        {/* Header Title */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-bold uppercase tracking-wider text-amber-400">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Central Hub Nickname Game Esports 2026
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight font-poppins leading-tight">
            Gaming Nickname <span className="bg-gradient-to-r from-amber-400 via-rose-400 to-purple-400 bg-clip-text text-transparent">Aesthetic Generator</span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Buat nama akun game keren ala pro player esports untuk Free Fire (FF), PUBG Mobile, Mobile Legends, Roblox & CODM dengan simbol payung, mahkota, sayap, dan spasi kosong transparan.
          </p>
        </div>

        {/* Game Generator Box */}
        <div className="mt-12 max-w-4xl mx-auto rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-amber-500/30 shadow-2xl shadow-amber-500/10 backdrop-blur-xl">
          
          {/* Game Selector Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none border-b border-slate-800">
            {GAMING_NICKNAMES.map((g) => {
              const isActive = activeGame === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => setActiveGame(g.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? `bg-gradient-to-r ${g.color} text-white shadow-lg`
                      : 'bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Gamepad2 className="w-4 h-4" />
                  {g.gameName}
                </button>
              );
            })}
          </div>

          {/* Input Box */}
          <div className="mt-6">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Masukkan Nama Panggilan Game Anda:
            </label>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Contoh: Killer, Sniper, Dragon..."
              className="w-full px-5 py-4 text-lg sm:text-xl font-medium rounded-2xl bg-slate-950 border border-amber-500/30 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition"
            />
          </div>

          {/* Rendered Nickname Presets */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {generatedCustomNicknames.map((nick, idx) => {
              const isCopied = copiedNick === nick;

              return (
                <div
                  key={idx}
                  onClick={() => handleCopy(nick)}
                  className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/50 cursor-pointer transition flex items-center justify-between group"
                >
                  <span className="text-sm font-semibold font-mono text-white group-hover:text-amber-300 transition truncate pr-2">
                    {nick}
                  </span>
                  <button className="p-1 rounded-lg text-slate-400 group-hover:text-amber-300">
                    {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
