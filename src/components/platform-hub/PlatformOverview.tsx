'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Palette, ShieldCheck, Zap } from 'lucide-react';

export function PlatformOverview() {
  const overviewFeatures = [
    {
      icon: Palette,
      title: 'Identitas Visual Profil',
      desc: 'Membuat tampilan bio Instagram & profil TikTok Anda menonjol di antara jutaan pengguna lain dengan gaya tulisan Small Caps, Cursive, dan Circled.',
    },
    {
      icon: Layout,
      title: 'Struktur Teks Rapi',
      desc: 'Format tulisan unik memudahkan pembaca membedakan judul, poin utama, dan call-to-action pada caption postingan bisnis atau status WhatsApp.',
    },
    {
      icon: ShieldCheck,
      title: 'Kompatibilitas Standar Unicode',
      desc: 'Semua font dihasilkan dari karakter standar Unicode internasional yang aman digunakan tanpa risiko pembatasan atau sanksi akun.',
    },
    {
      icon: Zap,
      title: '100% Bebas Aplikasi',
      desc: 'Dapat diakses langsung dari browser HP (Android/iOS) dan laptop tanpa perlu mengunduh aplikasi Keyboard tambahan.',
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
            Platform Typography Overview
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Mengapa Tipografi Media Sosial Penting?
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Aplikasi media sosial modern membatasi pengaturan font bawaan. Dengan memanfaat sistem karakter Unicode, Anda memiliki kebebasan mengekspresikan kepribadian, gaya estetika, dan branding profesional di setiap platform.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {overviewFeatures.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-purple-600/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
