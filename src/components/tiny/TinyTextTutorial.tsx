'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle, Smartphone } from 'lucide-react';

export function TinyTextTutorial() {
  const stepsMake = [
    {
      step: '01',
      title: 'Ketik Teks Anda',
      desc: 'Ketik kata atau kalimat yang ingin diubah menjadi tulisan kecil pada kotak generator di bagian atas.',
    },
    {
      step: '02',
      title: 'Pilih Gaya Tiny Text',
      desc: 'Sistem generator kami akan otomatis mengonversi teks Anda menjadi Small Caps, Superscript (mini atas), dan Subscript (mini bawah).',
    },
    {
      step: '03',
      title: 'Klik Salin (Copy)',
      desc: 'Tekan tombol "Salin" pada variasi huruf kecil yang Anda inginkan. Teks kecil siap digunakan.',
    },
  ];

  const stepsCopyPaste = [
    {
      icon: Smartphone,
      title: 'Di HP Android & iPhone',
      desc: 'Tekan dan tahan pada kolom teks Bio Instagram, Status WA, atau TikTok, lalu pilih menu "Tempel" / "Paste".',
    },
    {
      icon: Copy,
      title: 'Di PC & Laptop',
      desc: 'Klik kanan pada area input teks tujuan lalu pilih "Paste", atau gunakan shortcut keyboard Ctrl + V (Windows) / Cmd + V (Mac).',
    },
    {
      icon: CheckCircle,
      title: 'Dalam Game Online',
      desc: 'Tempelkan teks kecil hasil generator pada menu ganti nama nickname game (FF, MLBB, PUBG) untuk membuat tag pemain yang unik.',
    },
  ];

  return (
    <section id="cara-membuat-tulisan-kecil" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 2: Cara Membuat Tulisan Kecil */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400">
            Langkah Praktis
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Cara Membuat Tulisan Kecil
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Dapatkan huruf kecil aesthetic tanpa aplikasi hanya dalam 3 langkah mudah.
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

        {/* Section 9: Cara Copy Paste Tiny Text */}
        <div id="cara-copy-paste-tiny-text" className="mt-20 pt-16 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Salin & Tempel
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Cara Copy Paste Tiny Text
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Panduan menempelkan tulisan kecil di berbagai perangkat dan aplikasi.
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
