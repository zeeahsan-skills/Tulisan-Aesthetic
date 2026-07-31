'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, UserCheck, Server, AlertCircle } from 'lucide-react';

export function DiscordTips() {
  const tipsList = [
    {
      title: 'Kompatibilitas Unicode di Discord',
      icon: ShieldCheck,
      desc: 'Discord mendukung pustaka Unicode versi terbaru secara menyeluruh di iOS, Android, Windows, macOS, dan Linux. Semua font estetik yang Anda salin dari situs ini dapat ditampilkan dengan sempurna.',
    },
    {
      title: 'Font Terbaik untuk Keterbacaan',
      icon: Eye,
      desc: 'Untuk nama channel dan role server, gunakan gaya Small Caps atau Bold Sans-Serif. Gaya ini menjaga keterbacaan tetap tinggi sehingga anggota server tidak kesulitan menyebutkan (mention) nama akun Anda.',
    },
    {
      title: 'Kustomisasi Nickname Per Server',
      icon: UserCheck,
      desc: 'Gunakan fitur "Edit Server Profile" untuk menggunakan nickname estetik yang berbeda di tiap server Discord tanpa perlu mengubah nama akun utama Anda.',
    },
    {
      title: 'Branding Server & Struktur Channel',
      icon: Server,
      desc: 'Manfaatkan simbol estetika dan font kapital mini di nama channel teks dan suara agar susunan kategori server Discord Anda terlihat rapi, eksklusif, dan profesional.',
    },
    {
      title: 'Batasan Username & Display Name',
      icon: AlertCircle,
      desc: 'Display Name Discord mengizinkan hingga 32 karakter termasuk simbol Unicode. Untuk Username utama (@username), gunakan huruf standar atau angka sesuai aturan validasi sistem Discord.',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Panduan & Tips
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Tips Penggunaan Font Aesthetic di Discord
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pelajari aturan terbaik dalam mengustomisasi nama profil dan susunan server Discord Anda.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tipsList.map((tip, idx) => {
            const Icon = tip.icon;

            return (
              <motion.div
                key={tip.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="rounded-3xl p-6 bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-indigo-900/20 hover:border-indigo-500/50 transition flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shadow-sm flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {tip.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {tip.desc}
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
