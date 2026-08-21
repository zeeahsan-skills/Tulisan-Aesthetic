'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Flame, Target, Swords, Crosshair, Gamepad2, Zap, Copy, Check, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GAMING_NICKNAMES } from '@/lib/nicknames';

interface GamingNicknamesProps {
  onCopy: (msg: string) => void;
}

export function GamingNicknames({ onCopy }: GamingNicknamesProps) {
  const { t } = useLanguage();
  const [copiedNick, setCopiedNick] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return Flame;
      case 'Target': return Target;
      case 'Swords': return Swords;
      case 'Crosshair': return Crosshair;
      case 'Gamepad2': return Gamepad2;
      case 'Zap': return Zap;
      default: return Gamepad2;
    }
  };

  const handleCopyNick = (nick: string) => {
    navigator.clipboard.writeText(nick);
    setCopiedNick(nick);
    onCopy(`Nickname "${nick}" disalin!`);
    setTimeout(() => setCopiedNick(null), 2000);
  };

  return (
    <section id="gaming-nicknames" className="py-12 sm:py-16 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400">
            {t.games.tag}
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            {t.games.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {t.games.subtitle}
          </p>
        </div>

        {/* Game Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAMING_NICKNAMES.map((game, idx) => {
            const Icon = getIcon(game.icon);

            return (
              <motion.div
                key={game.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 hover:border-purple-500/50 dark:hover:border-purple-500/50 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-2xl bg-gradient-to-tr ${game.color} text-white shadow-md`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                          {game.gameName}
                        </h3>
                        <span className="text-[10px] font-semibold text-purple-600 dark:text-pink-400 uppercase tracking-wide">
                          {game.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {game.description}
                  </p>

                  {/* Sample Nicknames list */}
                  <div className="mt-4 space-y-2 max-h-56 overflow-y-auto pr-1 scrollbar-thin">
                    {game.samples.slice(0, 5).map((nick, nIdx) => {
                      const isCopied = copiedNick === nick;

                      return (
                        <div
                          key={nIdx}
                          onClick={() => handleCopyNick(nick)}
                          className="group/nick p-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800 hover:border-purple-500/50 dark:hover:border-purple-500/50 flex items-center justify-between cursor-pointer transition"
                        >
                          <span className="text-sm font-semibold font-mono text-slate-800 dark:text-slate-200 group-hover/nick:text-purple-600 dark:group-hover/nick:text-pink-400 transition truncate pr-2">
                            {nick}
                          </span>
                          <button
                            aria-label="Salin Nickname"
                            className="p-1 rounded-lg text-slate-400 group-hover/nick:text-purple-600 dark:group-hover/nick:text-pink-400 transition"
                          >
                            {isCopied ? (
                              <Check className="w-4 h-4 text-emerald-500" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-2">
                  <Link
                    href={game.href || '/#hero'}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xs font-bold transition-all shadow-md flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Custom Nick Generator
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
