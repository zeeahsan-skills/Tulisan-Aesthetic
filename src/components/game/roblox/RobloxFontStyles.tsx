'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Copy, Heart, Share2, Eye, Check } from 'lucide-react';
import { ALL_FONT_STYLES } from '@/lib/unicode-engine';

interface RobloxFontStylesProps {
  onCopy: (msg: string) => void;
}

export const RobloxFontStyles: React.FC<RobloxFontStylesProps> = ({ onCopy }) => {
  const [baseText, setBaseText] = useState('Roblox');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [previewItem, setPreviewItem] = useState<{ label: string; text: string } | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('roblox_fav_fonts');
      if (stored) setFavorites(JSON.parse(stored));
    } catch {
      // Ignore localStorage errors
    }
  }, []);

  const toggleFavorite = (styleId: string) => {
    let updated: string[];
    if (favorites.includes(styleId)) {
      updated = favorites.filter((id) => id !== styleId);
      onCopy('Dihapus dari Favorit');
    } else {
      updated = [...favorites, styleId];
      onCopy('Ditambahkan ke Favorit ❤️');
    }
    setFavorites(updated);
    try {
      localStorage.setItem('roblox_fav_fonts', JSON.stringify(updated));
    } catch {
      // Ignore
    }
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    onCopy('Variasi nama Roblox berhasil disalin!');
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleShare = async (text: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Roblox Stylish Name',
          text: `Cek Roblox Display Name estetik ini: ${text}`,
          url: window.location.href,
        });
        onCopy('Berhasil dibagikan!');
      } catch {
        // User cancelled or error
      }
    } else {
      navigator.clipboard.writeText(text);
      onCopy('Link & name disalin ke clipboard!');
    }
  };

  const displayStyles = ALL_FONT_STYLES.slice(0, 16);

  return (
    <section className="py-16 bg-slate-950 text-white relative border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
            Roblox Name Styles Catalog
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Pilih variasi font Unicode estetik di bawah ini. Ketuk tombol <strong className="text-emerald-300">Copy</strong>, <strong className="text-pink-400">Favorite</strong>, atau <strong className="text-cyan-400">Share</strong> untuk langsung digunakan pada Roblox Display Name Anda.
          </p>

          {/* Quick Filter Search Input */}
          <div className="mt-6 max-w-md mx-auto">
            <input
              type="text"
              value={baseText}
              onChange={(e) => setBaseText(e.target.value)}
              placeholder="Ubah sampel teks di sini..."
              className="w-full bg-slate-900 border border-slate-700 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-center"
            />
          </div>
        </div>

        {/* Font Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
          {displayStyles.map((style, idx) => {
            const transformed = style.transform(baseText.trim() || 'Roblox');
            const decorated = `꧁⚔️${transformed}⚔️꧂`;
            const isFav = favorites.includes(style.id);
            const isCopied = copiedId === style.id;

            return (
              <motion.div
                key={style.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.03 }}
                className="bg-slate-900/90 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-5 shadow-lg hover:shadow-emerald-500/10 transition-all flex flex-col justify-between group"
              >
                {/* Card Top Header */}
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider bg-slate-800/70 px-2.5 py-1 rounded-md border border-slate-700/50">
                    {style.name}
                  </span>
                  <button
                    onClick={() => toggleFavorite(style.id)}
                    className={`p-1.5 rounded-lg transition-colors ${
                      isFav
                        ? 'text-pink-500 bg-pink-500/10 border border-pink-500/30'
                        : 'text-slate-400 hover:text-pink-400 bg-slate-800/40 hover:bg-slate-800'
                    }`}
                    title={isFav ? 'Hapus Favorit' : 'Simpan ke Favorit'}
                  >
                    <Heart className={`w-4 h-4 ${isFav ? 'fill-pink-500' : ''}`} />
                  </button>
                </div>

                {/* Card Output Preview */}
                <div className="my-2 p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 text-lg sm:text-xl font-medium text-slate-100 font-mono break-all select-all flex items-center justify-between gap-2">
                  <span className="truncate">{decorated}</span>
                </div>

                {/* Card Action Buttons (Preview, Copy, Favorite, Share) */}
                <div className="flex items-center justify-between gap-2 mt-4 pt-3 border-t border-slate-800/60 text-xs">
                  <button
                    onClick={() => setPreviewItem({ label: style.name, text: decorated })}
                    className="flex items-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 transition-colors border border-slate-700/50"
                  >
                    <Eye className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Preview</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleShare(decorated)}
                      className="flex items-center gap-1.5 py-2 px-3 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-300 transition-colors border border-slate-700/50"
                      title="Bagikan name"
                    >
                      <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span className="hidden sm:inline">Share</span>
                    </button>

                    <button
                      onClick={() => handleCopy(decorated, style.id)}
                      className={`flex items-center gap-1.5 py-2 px-4 rounded-lg font-semibold transition-all ${
                        isCopied
                          ? 'bg-teal-600 text-white'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20'
                      }`}
                    >
                      {isCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{isCopied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Preview Dialog */}
        {previewItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-slate-900 border border-emerald-500/40 rounded-2xl p-6 max-w-md w-full shadow-2xl text-center text-white relative"
            >
              <h3 className="text-lg font-bold mb-1 text-emerald-300">{previewItem.label} Preview</h3>
              <p className="text-xs text-slate-400 mb-4">Tampilan Display Name di Game Roblox</p>
              
              <div className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 text-xl font-mono break-all text-emerald-300 mb-6 shadow-inner">
                {previewItem.text}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => {
                    handleCopy(previewItem.text, 'modal');
                    setPreviewItem(null);
                  }}
                  className="flex-1 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-sm transition-all"
                >
                  Copy Name
                </button>
                <button
                  onClick={() => setPreviewItem(null)}
                  className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl text-sm transition-all"
                >
                  Tutup
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};
