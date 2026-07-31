'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Type, Camera, Video, MessageCircle, MessageSquare } from 'lucide-react';

export const WhatsAppRelatedLinks: React.FC = () => {
  const relatedLinks = [
    {
      title: 'Font Instagram Guide',
      path: '/blog/font-instagram',
      desc: 'Panduan lengkap tulisan aesthetic untuk bio, caption, dan Story Instagram.',
      icon: <Camera className="w-5 h-5 text-pink-400" />,
    },
    {
      title: 'Font TikTok Guide',
      path: '/blog/font-tiktok',
      desc: 'Tips membuat teks aesthetic profil & caption video TikTok agar masuk FYP.',
      icon: <Video className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: 'Font Discord Guide',
      path: '/blog/font-discord',
      desc: 'Format teks Discord markdown & generator font nama server.',
      icon: <MessageSquare className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: 'Apa Itu Unicode?',
      path: '/blog/apa-itu-unicode',
      desc: 'Penjelasan teknis standar Unicode dan rahasia generator font aesthetic.',
      icon: <BookOpen className="w-5 h-5 text-purple-400" />,
    },
    {
      title: 'Generator Font WhatsApp',
      path: '/platform/whatsapp',
      desc: 'Alat konversi teks instan khusus nama, bio & pesan WhatsApp.',
      icon: <MessageCircle className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: 'Generator Huruf Keren',
      path: '/font/huruf-keren',
      desc: 'Ubah abjad latin biasa menjadi font estetik 100+ gaya unik.',
      icon: <Type className="w-5 h-5 text-teal-400" />,
    },
  ];

  return (
    <section className="py-12 bg-slate-900/60 text-white border-t border-slate-800 my-12 rounded-3xl p-6 sm:p-8">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-xl sm:text-2xl font-extrabold mb-2 text-slate-100">
          Artikel &amp; Alat Terkait
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mb-8">
          Jelajahi panduan gaya tulisan estetis dan alat pembuat font media sosial lainnya.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedLinks.map((item, idx) => (
            <motion.div
              key={item.path + idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: idx * 0.04 }}
            >
              <Link
                href={item.path}
                className="bg-slate-950/80 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-4 flex flex-col justify-between group transition-all block h-full hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      {item.icon}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-100 group-hover:text-emerald-300 transition-colors mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
