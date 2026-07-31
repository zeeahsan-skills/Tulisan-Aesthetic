'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Eye, UserCheck, MessageSquare, AlertCircle } from 'lucide-react';

export function FacebookTips() {
  const tipsList = [
    {
      title: 'Kompatibilitas Unicode di Facebook',
      icon: ShieldCheck,
      desc: 'Facebook mendukung standar Unicode internasional dengan sangat baik di semua sistem operasi (iOS, Android, Windows, Mac). Karakter tebal, miring, dan simbol yang Anda salin akan tampil konsisten tanpa terubah menjadi karakter acak.',
    },
    {
      title: 'Font Terbaik untuk Keterbacaan (Readability)',
      icon: Eye,
      desc: 'Gunakan gaya font Sans-Serif Bold (Tebal) atau Small Caps untuk teks yang panjang. Hindari gaya Zalgo Glitch yang terlalu berlebihan agar pembaca dan pengikut Facebook Anda tidak mengalami kesulitan membaca pesan.',
    },
    {
      title: 'Tips untuk Nama Profil Facebook',
      icon: UserCheck,
      desc: 'Jika Anda menggunakan font estetik untuk nama tampilan profil Facebook, kombinasikan huruf kapital standar untuk inisial agar nama profil Anda tetap mudah dicari di bilah pencarian Facebook.',
    },
    {
      title: 'Tips untuk Status & Postingan Beranda',
      icon: MessageSquare,
      desc: 'Gunakan font Bold/Tebal hanya pada judul atau paragraf pertama status Anda untuk menciptakan penekanan visual (headline) yang efektif dan meningkatkan keterlibatan (engagement) netizen.',
    },
    {
      title: 'Tips untuk Kolom Komentar',
      icon: CheckCircle2,
      desc: 'Penggunaan font Bubble atau Cursive miring di kolom komentar postingan publik terbukti efektif menarik perhatian pembuat konten dan netizen lainnya untuk membalas tanggapan Anda.',
    },
    {
      title: 'Batas Karakter & Optimasi Teks',
      icon: AlertCircle,
      desc: 'Bio profil Facebook dibatasi hingga 101 karakter. Pastikan kalimat Anda padat, jelas, dan memadukan 1–2 simbol estetik agar terlihat rapi dan tidak terpotong di tampilan seluler.',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            Panduan & Tips
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Tips Memaksimalkan Font Aesthetic di Facebook
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Pelajari panduan terbaik agar tulisan Anda di Facebook tampil optimal, mudah dibaca, dan berkesan profesional.
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
                className="rounded-3xl p-6 bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-blue-900/20 hover:border-blue-500/50 transition flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shadow-sm flex items-center justify-center mb-5">
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
