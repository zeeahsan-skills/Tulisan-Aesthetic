'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Type, Bold, Italic, User, Camera, Share2 } from 'lucide-react';

export function TikTokRelatedPages() {
  const pages = [
    {
      title: 'Font Huruf Keren',
      desc: 'Generator huruf keren aesthetic serbaguna untuk postingan & pesan.',
      href: '/font/huruf-keren',
      icon: Type,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Font Tebal (Bold)',
      desc: 'Ubah teks biasa menjadi huruf tebal bercetak tebal Unicode.',
      href: '/font/tebal',
      icon: Bold,
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Font Miring & Kursif',
      desc: 'Tulisan miring sambung aesthetic untuk bio & caption indah.',
      href: '/font/miring-kursif',
      icon: Italic,
      color: 'from-purple-500 to-indigo-500',
    },
    {
      title: 'Generator Nama Keren',
      desc: 'Buat nama panggilan & nick game unik dengan kombinasi simbol.',
      href: '/font/nama-keren',
      icon: User,
      color: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Instagram Font Generator',
      desc: 'Generator font aesthetic khusus untuk bio & caption Instagram.',
      href: '/platform/instagram',
      icon: Camera,
      color: 'from-purple-600 to-pink-500',
    },
    {
      title: 'Facebook Font Generator',
      desc: 'Ubah gaya huruf postingan & bio Facebook menjadi lebih estetik.',
      href: '/platform/facebook',
      icon: Share2,
      color: 'from-blue-600 to-cyan-500',
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Alat Font Aesthetic{' '}
            <span className="bg-gradient-to-r from-cyan-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Lainnya
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Jelajahi koleksi generator font dan alat optimasi platform sosial media lainnya di Tulisan Aesthetic.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-md hover:shadow-xl hover:border-cyan-500/40 transition-all flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-poppins group-hover:text-cyan-500 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform">
                    <span>Coba Generator</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
