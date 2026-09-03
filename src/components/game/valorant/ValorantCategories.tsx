'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Target, Cloud, Shield, Trophy, Zap, Sparkles, Heart } from 'lucide-react';
import { VALORANT_CATEGORIES } from '@/lib/valorant-presets';

const ICON_MAP: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-5 h-5 text-rose-500" />,
  Target: <Target className="w-5 h-5 text-amber-500" />,
  Cloud: <Cloud className="w-5 h-5 text-purple-400" />,
  Shield: <Shield className="w-5 h-5 text-cyan-400" />,
  Trophy: <Trophy className="w-5 h-5 text-yellow-400" />,
  Zap: <Zap className="w-5 h-5 text-emerald-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-pink-400" />,
  Heart: <Heart className="w-5 h-5 text-rose-400" />,
};

export function ValorantCategories() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
            Kategori Style Karakter
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Kategori Nickname Sesuai Role Agen
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Sesuaikan nama akun Anda dengan spesialisasi peran agen di Valorant: Duelist, Initiator, Controller, hingga Sentinel.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALORANT_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="p-6 bg-slate-50 dark:bg-slate-950/80 rounded-2xl border border-slate-200/80 dark:border-slate-800 hover:border-rose-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 inline-block mb-4 shadow-sm">
                  {ICON_MAP[cat.iconName] || <Flame className="w-5 h-5 text-rose-500" />}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {cat.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {cat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-200/80 dark:border-slate-800">
                <span className="text-[10px] uppercase font-bold text-slate-400 dark:text-slate-500">Contoh Style:</span>
                <div className="text-xs font-mono font-bold text-rose-600 dark:text-rose-400 mt-1 truncate bg-white dark:bg-slate-900 p-2 rounded-lg border border-slate-200 dark:border-slate-800">
                  {cat.example}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
