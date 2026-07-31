'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { COD_CATEGORIES } from '@/lib/cod-mobile-presets';
import {
  Crosshair,
  Zap,
  Shield,
  Users,
  Trophy,
  Ghost,
  Crown,
  Target,
  Radio,
  Flame,
  Sparkles,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Crosshair: <Crosshair className="w-6 h-6 text-orange-400" />,
  Zap: <Zap className="w-6 h-6 text-amber-400" />,
  Shield: <Shield className="w-6 h-6 text-blue-400" />,
  Users: <Users className="w-6 h-6 text-cyan-400" />,
  Trophy: <Trophy className="w-6 h-6 text-yellow-400" />,
  Ghost: <Ghost className="w-6 h-6 text-rose-400" />,
  Crown: <Crown className="w-6 h-6 text-amber-300" />,
  Target: <Target className="w-6 h-6 text-red-400" />,
  Radio: <Radio className="w-6 h-6 text-emerald-400" />,
  Flame: <Flame className="w-6 h-6 text-orange-500" />,
};

export const CodCategories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filteredCategories =
    activeTab === 'all'
      ? COD_CATEGORIES
      : COD_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section className="py-16 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Popular COD Mobile Name Categories
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Temukan gaya nickname khusus sesuai role bermain Anda di CODM: dari Sniper tembakan jitu hingga komando Assault & Tag Clan esports.
          </p>

          {/* Quick Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveTab('all')}
              className={`py-1.5 px-3.5 rounded-full text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
                  : 'bg-slate-800/80 text-slate-400 hover:text-white border border-slate-700/60'
              }`}
            >
              Semua Kategori
            </button>
            {COD_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`py-1.5 px-3.5 rounded-full text-xs font-semibold transition-all ${
                  activeTab === cat.id
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30'
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
            const icon = ICON_MAP[cat.iconName] || <Sparkles className="w-6 h-6 text-orange-400" />;

            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="bg-slate-950/80 border border-slate-800/80 hover:border-orange-500/50 rounded-2xl p-5 shadow-lg transition-all flex flex-col justify-between group hover:-translate-y-1"
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
                  <div className="text-xs font-mono text-orange-300 truncate bg-slate-900 px-2.5 py-1.5 rounded-lg border border-slate-800">
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
