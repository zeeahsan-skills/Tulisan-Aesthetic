'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ROBLOX_CATEGORIES } from '@/lib/roblox-presets';
import {
  Gamepad2,
  Swords,
  Hammer,
  Sparkles,
  Crown,
  Heart,
  Moon,
  Smile,
  Wand2,
  Shield,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Gamepad2: <Gamepad2 className="w-6 h-6 text-emerald-400" />,
  Swords: <Swords className="w-6 h-6 text-red-400" />,
  Hammer: <Hammer className="w-6 h-6 text-amber-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-purple-400" />,
  Crown: <Crown className="w-6 h-6 text-yellow-400" />,
  Heart: <Heart className="w-6 h-6 text-pink-400" />,
  Moon: <Moon className="w-6 h-6 text-indigo-400" />,
  Smile: <Smile className="w-6 h-6 text-cyan-400" />,
  Wand2: <Wand2 className="w-6 h-6 text-teal-400" />,
  Shield: <Shield className="w-6 h-6 text-blue-400" />,
};

export const RobloxCategories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories =
    activeTab === 'all'
      ? ROBLOX_CATEGORIES
      : ROBLOX_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Popular Roblox Name Categories
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Temukan gaya Roblox Display Name khusus sesuai persona bermain Anda: dari Gamer pro, Anime, Builder, hingga Cute boba vibes.
          </p>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`py-1.5 px-3.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60'
              }`}
            >
              Semua Kategori
            </button>
            {ROBLOX_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`py-1.5 px-3.5 rounded-full text-xs font-semibold transition-all ${
                  activeTab === cat.id
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                    : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {filteredCategories.map((cat, idx) => {
            const icon = ICON_MAP[cat.iconName] || <Sparkles className="w-6 h-6 text-emerald-400" />;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-slate-950/80 border border-slate-800/80 hover:border-emerald-500/50 rounded-2xl p-5 shadow-lg transition-all flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 inline-block mb-3 group-hover:scale-110 transition-transform">
                    {icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-100 mb-1.5 flex items-center justify-between">
                    <span>{cat.name}</span>
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/60">
                  <div className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold mb-1">
                    Contoh Format:
                  </div>
                  <div className="text-xs font-mono text-emerald-300 truncate bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-800">
                    {cat.example}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
