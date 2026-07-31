'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SYMBOL_CATEGORIES } from '@/lib/symbols';
import {
  Heart,
  Star,
  Crown,
  Flower2,
  ArrowRight,
  Music,
  Coins,
  Calculator,
  Compass,
  Sparkles,
  Smile,
  SquareDashed,
} from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Heart: <Heart className="w-6 h-6 text-pink-400" />,
  Star: <Star className="w-6 h-6 text-amber-400" />,
  Crown: <Crown className="w-6 h-6 text-yellow-400" />,
  Flower2: <Flower2 className="w-6 h-6 text-rose-400" />,
  ArrowRight: <ArrowRight className="w-6 h-6 text-cyan-400" />,
  Music: <Music className="w-6 h-6 text-purple-400" />,
  Coins: <Coins className="w-6 h-6 text-emerald-400" />,
  Calculator: <Calculator className="w-6 h-6 text-blue-400" />,
  Compass: <Compass className="w-6 h-6 text-indigo-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-teal-400" />,
  Smile: <Smile className="w-6 h-6 text-amber-300" />,
  SquareDashed: <SquareDashed className="w-6 h-6 text-slate-300" />,
};

interface SymbolsCategoriesGridProps {
  activeCategory: string;
  setActiveCategory: (catId: string) => void;
}

export const SymbolsCategoriesGrid: React.FC<SymbolsCategoriesGridProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <section className="py-16 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Kategori Simbol Aesthetic & Unicode
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Pilih dari 12 koleksi kategori simbol estetik terlengkap di bawah ini. Ketuk kartu kategori untuk memfilter secara instan.
          </p>
        </div>

        {/* 12 Categories Grid Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {SYMBOL_CATEGORIES.map((cat, idx) => {
            const icon = ICON_MAP[cat.icon] || <Sparkles className="w-6 h-6 text-purple-400" />;
            const isActive = activeCategory === cat.id;

            return (
              <motion.button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(isActive ? 'all' : cat.id);
                  const el = document.getElementById('search-symbols-section');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className={`p-5 rounded-2xl border text-left transition-all flex flex-col justify-between group ${
                  isActive
                    ? 'bg-purple-950/60 border-purple-500/80 shadow-lg shadow-purple-500/20'
                    : 'bg-slate-900/80 border-slate-800 hover:border-purple-500/50 hover:bg-slate-900'
                }`}
              >
                <div>
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 inline-block mb-3 group-hover:scale-110 transition-transform">
                    {icon}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-slate-100 mb-1 group-hover:text-purple-300 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {cat.count}+ Unicode items
                  </p>
                </div>

                <div className="mt-4 text-xs font-semibold text-purple-400 flex items-center justify-between">
                  <span>{isActive ? 'Active Filter' : 'Jelajahi Simbol'}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
