'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const InstagramIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.3 1.54-1.28 2.55.01.89.47 1.76 1.2 2.27.81.57 1.87.69 2.8.34 1.02-.37 1.74-1.32 1.83-2.41.04-2.82.01-5.64.02-8.46 0-1.48.01-2.96 0-4.44z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.127 4.12 4.17-1.093z"/>
  </svg>
);

export function HurufKerenPlatforms() {
  const platformList = [
    {
      id: 'instagram',
      title: 'Huruf Keren untuk Instagram',
      subtitle: 'Tingkatkan estetika Bio IG, Caption, & Highlight Stories',
      icon: InstagramIcon,
      color: 'from-pink-500 via-purple-500 to-amber-500',
      link: '/platform/instagram',
      content:
        'Bio Instagram adalah hal pertama yang dilihat oleh pengunjung profil Anda. Menggunakan huruf keren seperti Small Caps atau Script Cursive membuat tampilan profil terlihat profesional, aesthetic, dan berkesan.',
      tips: [
        'Gunakan font Small Caps untuk headline Bio IG agar tampak rapi.',
        'Manfaatkan gaya Cursive / Script untuk nama panggilan estetis.',
        'Gunakan simbol border untuk merapikan link di bio.',
      ],
    },
    {
      id: 'tiktok',
      title: 'Huruf Keren untuk TikTok',
      subtitle: 'Buat Username unik & Caption video yang FYP-friendly',
      icon: TikTokIcon,
      color: 'from-cyan-500 via-slate-900 to-pink-500',
      link: '/platform/tiktok',
      content:
        'Di TikTok, nama tampilan (Display Name) dan caption video dengan gaya font unik membantu konten Anda lebih menonjol di feed FYP. Kombinasi teks bold dan simbol unik menarik perhatian pemirsa.',
      tips: [
        'Gunakan Font Bold Sans untuk menonjolkan judul video TikTok.',
        'Tambahkan gaya Bubble pada username agar lebih ramah & imut.',
        'Salin teks keren untuk komentar menonjol di video viral.',
      ],
    },
    {
      id: 'whatsapp',
      title: 'Huruf Keren untuk WhatsApp',
      subtitle: 'Variasi font menarik untuk Status WA & Nama Kontak',
      icon: WhatsAppIcon,
      color: 'from-emerald-500 to-teal-600',
      link: '/platform/whatsapp',
      content:
        'WhatsApp mendukung penuh pengiriman karakter Unicode keren. Anda dapat memakai huruf tebal, miring, monospace, serta simbol dekoratif untuk mempercantik Info Profil (About) dan Pembaruan Status WA.',
      tips: [
        'Gunakan gaya Monospace untuk pesan teks bertema teknis/kode.',
        'Buat Status WA yang menyentuh dengan Font Script Sambung.',
        'Gunakan garis miring dan strike-through untuk daftar belanja atau tugas.',
      ],
    },
  ];

  return (
    <section id="huruf-keren-platform" className="py-16 sm:py-24 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-pink-400">
            Penggunaan Media Sosial
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Huruf Keren untuk Media Sosial
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Pelajari cara memanfaatkan font keren untuk memaksimalkan profil dan engagement di platform favorit Anda.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platformList.map((platform, idx) => {
            const IconComp = platform.icon;
            return (
              <motion.div
                key={platform.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-purple-900/30 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className={`p-3.5 w-fit rounded-2xl bg-gradient-to-r ${platform.color} text-white mb-6 shadow-md`}>
                    <IconComp />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {platform.title}
                  </h3>
                  <p className="text-xs font-semibold text-purple-600 dark:text-pink-400 mt-1 mb-4">
                    {platform.subtitle}
                  </p>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {platform.content}
                  </p>

                  <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl border border-slate-200/60 dark:border-slate-700/50 mb-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                      💡 Tips Terbaik:
                    </span>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      {platform.tips.map((tip, tipIdx) => (
                        <li key={tipIdx} className="flex items-start gap-2">
                          <span className="text-purple-500 dark:text-pink-400 font-bold">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <Link
                  href={platform.link}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 dark:border-slate-800 font-semibold text-sm text-purple-600 dark:text-pink-400 hover:text-purple-700 dark:hover:text-pink-300 transition-colors group"
                >
                  <span>Panduan Khusus {platform.title.split(' ')[3]}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
