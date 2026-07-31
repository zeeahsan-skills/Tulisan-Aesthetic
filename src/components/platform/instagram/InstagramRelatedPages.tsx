'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Type, Circle, Bold, Video, Share2 } from 'lucide-react';

export function InstagramRelatedPages() {
  const relatedLinks = [
    {
      title: 'Font Huruf Keren',
      path: '/font/huruf-keren',
      desc: 'Koleksi font estetik variasi Small Caps & Superscript populer.',
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Font Tebal / Bold',
      path: '/font/tebal',
      desc: 'Teks tebal sans-serif & serif penarik perhatian pembaca.',
      icon: Bold,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Font Kursif / Sambung',
      path: '/font/kursif',
      desc: 'Tulisan tangan indah & kaligrafi anggun untuk bio.',
      icon: Type,
      color: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Font Bubble / Circled',
      path: '/font/bubble',
      desc: 'Huruf dilingkari lingkaran bulat unik dan imut.',
      icon: Circle,
      color: 'from-rose-500 to-amber-500',
    },
    {
      title: 'TikTok Font Generator',
      path: '/platform/tiktok',
      desc: 'Bikin nama akun TikTok & caption konten FYP lebih keren.',
      icon: Video,
      color: 'from-violet-600 to-pink-500',
    },
    {
      title: 'Facebook Font Generator',
      path: '/platform/facebook',
      desc: 'Ubah teks status FB & nama akun dengan Unicode keren.',
      icon: Share2,
      color: 'from-indigo-600 to-blue-500',
    },
  ];

  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-950/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Jelajahi Generator{' '}
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent">
              Teks Lainnya
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Temukan berbagai kategori generator font Unicode dan alat platform media sosial terkait.
          </p>
        </div>

        {/* Links Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedLinks.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link
                  href={item.path}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 shadow-md hover:shadow-2xl hover:border-pink-500/40 transition-all flex flex-col justify-between h-full group"
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-md mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins group-hover:text-pink-500 transition-colors flex items-center justify-between">
                      <span>{item.title}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </h3>

                    <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
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
