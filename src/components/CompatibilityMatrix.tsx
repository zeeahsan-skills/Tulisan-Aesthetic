'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Check, AlertTriangle, Monitor, Sparkles } from 'lucide-react';

export function CompatibilityMatrix() {
  const compatibilityData = [
    {
      platform: 'Instagram Bio & Story',
      status: 'Sangat Didukung (100%)',
      badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      icon: Check,
      recommended: 'Small Caps, Bubble, Cursive, Bold, Sparkles',
      note: 'Dukungan penuh untuk iOS & Android modern.',
    },
    {
      platform: 'TikTok Caption & Profil',
      status: 'Sangat Didukung (100%)',
      badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      icon: Check,
      recommended: 'Bold Sans, Glitch Zalgo, Kaomoji, Tiny Upper',
      note: 'Meningkatkan impresi visual di FYP.',
    },
    {
      platform: 'WhatsApp Chat & Status',
      status: 'Sangat Didukung (100%)',
      badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      icon: Check,
      recommended: 'Tebal, Miring, Monospace, Bubble Circled',
      note: 'Mudah dibaca di pesan broadcast & status.',
    },
    {
      platform: 'Free Fire (FF) Nickname',
      status: 'Didukung dengan Simbol (98%)',
      badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
      icon: Check,
      recommended: 'Gothic Fraktur, Mahkota ꧁༺ ༻꧂, Small Caps',
      note: 'Gunakan karakter tanpa spasi terlarang.',
    },
    {
      platform: 'Mobile Legends (MLBB)',
      status: 'Didukung (95%)',
      badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
      icon: Check,
      recommended: 'Bold Script, Simbol Bintang, Tiny Caps',
      note: 'Dukungan nickname hingga 20 karakter.',
    },
    {
      platform: 'Android Lama (< Android 8.0)',
      status: 'Parsial (Kotak ☒ Mungkinkah)',
      badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
      icon: AlertTriangle,
      recommended: 'Gunakan style Simple / Bold standar',
      note: 'Simbol khusus memerlukan font sistem Unicode terbaru.',
    },
  ];

  return (
    <section id="kompatibilitas" className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 inline-flex items-center gap-1.5">
            <Smartphone className="w-3.5 h-3.5" />
            Matriks Kompatibilitas Perangkat
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Uji Kompatibilitas Platform & Game
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Berikut adalah panduan kecocokan font aesthetic hasil salinan generator kami di berbagai aplikasi sosial media dan game populer.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {compatibilityData.map((item, idx) => {
            const IconComponent = item.icon;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 hover:border-purple-500/40 shadow-lg hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`text-xs font-extrabold px-3 py-1 rounded-full border inline-flex items-center gap-1 ${item.badge}`}
                    >
                      <IconComponent className="w-3.5 h-3.5 shrink-0" />
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {item.platform}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.note}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Gaya Direkomendasikan:
                  </span>
                  <span className="text-xs font-semibold text-purple-700 dark:text-pink-300 font-mono">
                    {item.recommended}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
