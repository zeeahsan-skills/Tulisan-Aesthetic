'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Copy, CheckCircle, Smartphone } from 'lucide-react';

export function HurufKerenTutorial() {
  const stepsMake = [
    {
      step: '01',
      title: 'Ketik Teks Anda',
      desc: 'Masukkan kata, nama, atau kalimat yang ingin diubah pada kotak generator teks di bagian atas halaman ini.',
    },
    {
      step: '02',
      title: 'Pilih Gaya Huruf Keren',
      desc: 'Sistem kami secara otomatis mengubah teks Anda ke dalam 50 variasi gaya Unicode stylish seperti Small Caps, Bold, Script, Gothic, dan Kotak.',
    },
    {
      step: '03',
      title: 'Salin Teks (Copy)',
      desc: 'Klik tombol "Salin" pada kartu font pilihan Anda. Teks akan secara otomatis tersimpan ke papan klip (clipboard) perangkat Anda.',
    },
  ];

  const stepsCopyPaste = [
    {
      icon: Smartphone,
      title: 'Di HP Android & iOS',
      desc: 'Tekan dan tahan pada area input (misalnya Bio Instagram atau Chat WhatsApp), lalu ketuk opsi "Tempel" atau "Paste".',
    },
    {
      icon: Copy,
      title: 'Di Komputer & Laptop',
      desc: 'Klik kanan pada area teks tujuan dan pilih "Paste", atau tekan shortcut keyboard Ctrl + V (Windows) / Cmd + V (Mac).',
    },
    {
      icon: CheckCircle,
      title: 'Dalam Game Online',
      desc: 'Buka menu ganti nama / nickname di Free Fire, MLBB, atau PUBG Mobile, lalu pilih tombol tempel pada keyboard HP Anda.',
    },
  ];

  return (
    <section id="cara-membuat-huruf-keren" className="py-16 sm:py-24 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 2: Cara Membuat Huruf Keren */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400">
            Langkah Praktis
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Cara Membuat Huruf Keren
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Ikuti 3 langkah mudah untuk menghasilkan font keren dan tulisan aesthetic secara instan.
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

        {/* Section 8: Cara Copy dan Paste Huruf Keren */}
        <div id="cara-copy-paste-huruf-keren" className="mt-20 pt-16 border-t border-slate-200/80 dark:border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Salin & Tempel
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
              Cara Copy dan Paste Huruf Keren
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Petunjuk penempelan teks hasil generator di berbagai perangkat dan aplikasi.
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
