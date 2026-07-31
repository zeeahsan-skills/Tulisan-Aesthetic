'use client';

import React from 'react';
import { EMOJI_CATEGORIES_LIST } from '@/lib/emoji-symbols';

interface EmojiCategoriesProps {
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
}

export const EmojiCategories: React.FC<EmojiCategoriesProps> = ({
  activeCategory,
  setActiveCategory,
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-8 px-4">
      {EMOJI_CATEGORIES_LIST.map((cat) => {
        const isActive = activeCategory === cat;

        return (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`py-2 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              isActive
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20 font-bold'
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
