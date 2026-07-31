'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Search, Sparkles } from 'lucide-react';
import { SYMBOL_CATEGORIES } from '@/lib/symbols';

interface SymbolModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCopy: (msg: string) => void;
}

export function SymbolModal({ isOpen, onClose, onCopy }: SymbolModalProps) {
  const [activeTab, setActiveTab] = useState<string>('stars');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  if (!isOpen) return null;

  const currentCategory = SYMBOL_CATEGORIES.find((c) => c.id === activeTab) || SYMBOL_CATEGORIES[0];

  const filteredItems = currentCategory.items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCopySymbol = (sym: string) => {
    navigator.clipboard.writeText(sym);
    setCopiedItem(sym);
    onCopy(`Simbol "${sym}" disalin ke clipboard!`);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-purple-900/40 shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
        >
          
          {/* Modal Header */}
          <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 text-white shadow-md">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                  Katalog Simbol & Kaomoji Aesthetic
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Klik simbol atau kaomoji apapun untuk menyalin langsung
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Category Tabs & Search Bar */}
          <div className="px-6 pt-4 pb-2 border-b border-slate-100 dark:border-slate-800/80 space-y-4">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari simbol atau kaomoji..."
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {/* Category Filter Buttons */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {SYMBOL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveTab(cat.id);
                    setSearchQuery('');
                  }}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                    activeTab === cat.id
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-500/30'
                      : 'bg-slate-100 dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

          </div>

          {/* Modal Grid Body */}
          <div className="p-6 overflow-y-auto flex-1 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {filteredItems.map((item, idx) => {
              const isCopied = copiedItem === item;

              return (
                <button
                  key={idx}
                  onClick={() => handleCopySymbol(item)}
                  className="group relative p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 hover:border-purple-500/60 dark:hover:border-purple-500/60 hover:bg-purple-500/10 transition flex flex-col items-center justify-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <span className="text-xl sm:text-2xl select-all font-mono text-slate-900 dark:text-white group-hover:scale-110 transition-transform">
                    {item}
                  </span>
                  <span className="text-[10px] font-semibold text-purple-600 dark:text-pink-400 flex items-center gap-1">
                    {isCopied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-500" />
                        Tersalin
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        Salin
                      </>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Total {filteredItems.length} simbol tersedia
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 transition"
            >
              Selesai
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}
