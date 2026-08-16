'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle, Smartphone } from 'lucide-react';

export function FontTebalTutorial() {
  const stepsMake = [
    {
      step: '01',
      title: 'Ketik Teks',
      desc: 'Ketik kata atau kalimat yang ingin Anda tebalkan pada kolom input generator di bagian atas halaman ini.',
    },
    {
      step: '02',
      title: 'Pilih Gaya Bold',
      desc: 'Sistem generator kami akan otomatis mengonversi teks Anda menjadi variasi Bold Sans, Bold Serif, Bold Italic, Fraktur Bold, dan Box Solid.',
    },
    {
      step: '03',
      title: 'Klik Salin',
      desc: 'Ketuk tombol "Salin" pada gaya tulisan tebal yang Anda inginkan. Teks tebal langsung tersimpan di clipboard perangkat Anda.',
    },
  ];

  const stepsCopyPaste = [
    {
      icon: Smartphone,
      title: 'Di HP Android & iPhone',
      desc: 'Buka aplikasi tujuan (Bio IG, Status WA, atau TikTok), tekan dan tahan pada bidang teks, lalu pilih menu "Tempel" / "Paste".',
    },
    {
      icon: Copy,
      title: 'Di PC & Laptop',
      desc: 'Buka situs atau aplikasi tujuan, lalu gunakan shortcut keyboard Ctrl + V (Windows) / Cmd + V (Mac) untuk menempelkan font tebal.',
    },
    {
      icon: CheckCircle,
      title: 'Di Game & Discord',
      desc: 'Pada kolom ganti nickname game (FF, MLBB, PUBG) atau nama server Discord, tekan tombol tempel pada keyboard virtual Anda.',
    },
  ];

  return (
    <section id="cara-membuat-tulisan-tebal" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 2: Cara Membuat Tulisan Tebal */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400">
            Panduan Penggunaan
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Cara Membuat Tulisan Tebal
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Dapatkan huruf tebal aesthetic tanpa aplikasi hanya dalam 3 langkah mudah.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {stepsMake.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative bg-slate-50 dark:bg-slate-800/60 rounded-3xl p-8 border border-slate-200/80 dark:border-purple-900/30 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-4xl font-black text-purple-600/30 dark:text-pink-400/30 font-poppins">
                {item.step}
              </span>
              <h3 className="mt-2 text-xl font-bold text-slate-900 dark:text-white font-poppins">
                {item.title}
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Section 11: Cara Copy Paste Font Tebal */}
        <div id="cara-copy-paste-font-tebal" className="mt-20 pt-16 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Salin & Tempel
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Cara Copy Paste Font Tebal
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Panduan menempelkan tulisan tebal di berbagai aplikasi dan platform.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stepsCopyPaste.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-800/80 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-700/60"
                >
                  <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400 mb-4">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
