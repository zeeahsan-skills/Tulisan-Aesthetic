'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Heart, Share2, Check } from 'lucide-react';
import { EMOJI_SYMBOLS_DATA, EmojiSymbolItem } from '@/lib/emoji-symbols';

interface EmojiGridProps {
  searchQuery: string;
  activeCategory: string;
  activeCollection: string | null;
  onCopy: (msg: string) => void;
}

export const EmojiGrid: React.FC<EmojiGridProps> = ({
  searchQuery,
  activeCategory,
  activeCollection,
  onCopy,
}) => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [copiedSymbol, setCopiedSymbol] = useState<string | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('emoji_fav_symbols');
      if (stored) setFavorites(JSON.parse(stored));
    } catch {
      // Ignore
    }
  }, []);

  const toggleFavorite = (symbol: string) => {
    let updated: string[];
    if (favorites.includes(symbol)) {
      updated = favorites.filter((s) => s !== symbol);
      onCopy('Dihapus dari Favorit');
    } else {
      updated = [...favorites, symbol];
      onCopy('Ditambahkan ke Favorit ❤️');
    }
    setFavorites(updated);
    try {
      localStorage.setItem('emoji_fav_symbols', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handleCopy = (symbol: string) => {
    navigator.clipboard.writeText(symbol);
    setCopiedSymbol(symbol);
    onCopy(`Emoji "${symbol}" berhasil disalin!`);
    setTimeout(() => setCopiedSymbol(null), 1500);
  };

  const handleShare = async (symbol: string, name: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Emoji ${name}`,
          text: `Salin emoji ${symbol} (${name}): ${window.location.href}`,
          url: window.location.href,
        });
        onCopy('Berhasil dibagikan!');
      } catch {
        // User cancelled
      }
    } else {
      navigator.clipboard.writeText(symbol);
      onCopy(`Emoji ${symbol} disalin ke clipboard!`);
    }
  };

  // Filter items based on category, collection, and search query
  const filteredItems = EMOJI_SYMBOLS_DATA.filter((item) => {
    if (activeCategory !== 'All Emojis' && item.category !== activeCategory) {
      return false;
    }
    if (activeCollection && (!item.collections || !item.collections.includes(activeCollection))) {
      return false;
    }
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.symbol.toLowerCase().includes(q) ||
      item.name.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q)
    );
  });

  return (
    <section className="py-12 bg-slate-950 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800">
          <div className="text-sm font-semibold text-slate-400">
            Menampilkan <span className="text-amber-400 font-bold">{filteredItems.length}</span> Emoji
          </div>
          <div className="flex items-center gap-2">
            {activeCategory !== 'All Emojis' && (
              <span className="text-xs font-bold text-amber-300 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                {activeCategory}
              </span>
            )}
            {activeCollection && (
              <span className="text-xs font-bold text-pink-300 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/30 capitalize">
                Collection: {activeCollection}
              </span>
            )}
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <p className="text-slate-400 text-sm">Tidak ada emoji yang cocok dengan kriteria pencarian Anda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {filteredItems.map((item, idx) => {
              const isFav = favorites.includes(item.symbol);
              const isCopied = copiedSymbol === item.symbol;

              return (
                <motion.div
                  key={`${item.symbol}-${idx}`}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: (idx % 12) * 0.02 }}
                  className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-4 shadow-lg flex flex-col justify-between group transition-all"
                >
                  {/* Card Header (Category Badge & Favorite) */}
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-[10px] font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 truncate max-w-[90px]">
                      {item.category}
                    </span>
                    <button
                      onClick={() => toggleFavorite(item.symbol)}
                      className={`p-1 rounded-lg transition-colors ${
                        isFav
                          ? 'text-pink-500 bg-pink-500/10'
                          : 'text-slate-400 hover:text-pink-400'
                      }`}
                      title={isFav ? 'Hapus Favorit' : 'Simpan Favorit'}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-pink-500' : ''}`} />
                    </button>
                  </div>

                  {/* Big Symbol Display */}
                  <div
                    onClick={() => handleCopy(item.symbol)}
                    className="my-2 py-3 bg-slate-950 rounded-xl border border-slate-800/80 flex items-center justify-center text-4xl sm:text-5xl font-mono cursor-pointer hover:bg-amber-950/40 hover:border-amber-500/40 transition-all select-all shadow-inner min-h-[75px]"
                    title="Klik untuk menyalin"
                  >
                    {item.symbol}
                  </div>

                  {/* Unicode Name & Actions */}
                  <div>
                    <div className="text-[11px] font-semibold text-slate-300 text-center mb-3 truncate px-1" title={item.name}>
                      {item.name}
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 text-xs">
                      <button
                        onClick={() => handleShare(item.symbol, item.name)}
                        className="flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors border border-slate-700/60"
                        title="Bagikan"
                      >
                        <Share2 className="w-3 h-3 text-cyan-400" />
                        <span className="text-[11px]">Share</span>
                      </button>

                      <button
                        onClick={() => handleCopy(item.symbol)}
                        className={`flex items-center justify-center gap-1 py-1.5 px-2 rounded-lg font-semibold transition-all ${
                          isCopied
                            ? 'bg-emerald-600 text-white'
                            : 'bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md shadow-amber-400/20'
                        }`}
                      >
                        {isCopied ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
                        <span className="text-[11px]">{isCopied ? 'Copied' : 'Copy'}</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
