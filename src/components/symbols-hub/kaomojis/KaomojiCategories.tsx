'use client';

import React from 'react';
import { KAOMOJI_CATEGORIES_LIST } from '@/lib/kaomoji-symbols';

interface KaomojiCategoriesProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export const KaomojiCategories: React.FC<KaomojiCategoriesProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-8 px-4">
      {KAOMOJI_CATEGORIES_LIST.map((cat) => {
        const isActive = activeCategory === cat;

        return (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              isActive
                ? 'bg-teal-400 text-slate-950 shadow-md shadow-teal-400/20 font-bold'
                : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
};
