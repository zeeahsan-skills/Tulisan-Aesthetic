'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, FileText, Smartphone, MessageSquare, Users, Radio } from 'lucide-react';

export function WhatsAppBestUses() {
  const uses = [
    {
      title: 'Profile Name',
      titleId: 'Nama Profil WhatsApp',
      description: 'Hias nama profil kontak Anda dengan gaya font tebal atau Small Caps agar tampil beda dan mudah dikenali di daftar chat teman.',
      icon: UserCheck,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'About / Bio',
      titleId: 'Info & Bio WhatsApp',
      description: 'Tulis kalimat bijak, kutipan favorit, atau status ketersediaan bisnis pada kolom Info akun dengan teks miring sambung estetik.',
      icon: FileText,
      color: 'from-teal-500 to-cyan-500',
    },
    {
      title: 'WhatsApp Status',
      titleId: 'WhatsApp Status Teks',
      description: 'Bagikan pemikiran harian di WA Status menggunakan variasi font dilingkari atau tulisan tebal agar menarik perhatian penonton.',
      icon: Smartphone,
      color: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Chat Messages',
      titleId: 'Pesan Chat Obrolan',
      description: 'Kirim pesan ucapan selamat ulang tahun, pengumuman penting, atau obrolan santai yang berkesan bagi penerima.',
      icon: MessageSquare,
      color: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'Group Name',
      titleId: 'Nama Grup WhatsApp',
      description: 'Bikin judul grup keluarga, grup alumni, atau obrolan komunitas terlihat rapi, unik, dan profesional.',
      icon: Users,
      color: 'from-amber-500 to-emerald-500',
    },
    {
      title: 'Channel Name',
      titleId: 'Nama Saluran WhatsApp',
      description: 'Gunakan font aesthetic pada nama Saluran (WhatsApp Channel) dan deskripsi siaran Anda untuk menarik lebih banyak pengikut.',
      icon: Radio,
      color: 'from-purple-500 to-emerald-500',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Penggunaan Terbaik{' '}
            <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 bg-clip-text text-transparent">
              Font WhatsApp
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Tempat-tempat utama di WhatsApp di mana huruf Unicode estetik memberikan tampilan visual menarik & berkesan.
          </p>
        </div>

        {/* Use Case Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {uses.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-8 rounded-3xl bg-slate-50/80 dark:bg-slate-950/80 border border-slate-200/80 dark:border-emerald-900/20 hover:border-emerald-500/40 transition-all hover:shadow-xl group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                  {item.title} <span className="text-sm font-normal text-slate-500 font-sans">({item.titleId})</span>
                </h3>
                <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
