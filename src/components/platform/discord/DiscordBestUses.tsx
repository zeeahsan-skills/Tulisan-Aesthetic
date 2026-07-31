'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, Shield, Hash, Server, Award, Info, Send } from 'lucide-react';

export function DiscordBestUses() {
  const useCases = [
    {
      title: 'Username',
      icon: User,
      desc: 'Bikin identitas utama akun Discord Anda terlihat unik dengan perpaduan karakter Unicode modern.',
      gradient: 'from-indigo-600 to-purple-600',
    },
    {
      title: 'Nickname Server',
      icon: Shield,
      desc: 'Ubah nama panggilan khusus di tiap server Discord tempat Anda bergabung agar menonjol di member list.',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      title: 'Display Name',
      icon: Award,
      desc: 'Nama tampilan publik di profil Discord yang fleksibel mendukung font Gothic, Small Caps, dan Symbol.',
      gradient: 'from-blue-600 to-indigo-700',
    },
    {
      title: 'Server Name',
      icon: Server,
      desc: 'Hiasi judul server komunitas atau gaming Anda dengan font tebal dan dekorasi mahkota agar berkesan VIP.',
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      title: 'Channel Name',
      icon: Hash,
      desc: 'Organisasi nama channel teks (#welcome, #announcement) dan voice channel dengan huruf kapital mini rapi.',
      gradient: 'from-amber-500 to-rose-600',
    },
    {
      title: 'Role Name',
      icon: Award,
      desc: 'Bikin tingkatan Role (Owner, Admin, Moderator, VIP, Bot) terlihat eksklusif dengan gaya font Blackletter.',
      gradient: 'from-fuchsia-600 to-purple-600',
    },
    {
      title: 'About Me Profil',
      icon: Info,
      desc: 'Tingkatkan estetika bio profil Discord Anda dengan perpaduan kata motivasi dan font miring cursive.',
      gradient: 'from-indigo-500 to-cyan-600',
    },
    {
      title: 'Chat Messages',
      icon: Send,
      desc: 'Kirim pesan berformat khusus atau pengumuman server di chat publik dan DM pribadi.',
      gradient: 'from-teal-500 to-emerald-600',
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Penggunaan Terbaik
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-poppins">
            Penggunaan Terbaik Font di Discord
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Maksimalkan estetika tampilan akun dan server Discord Anda di semua fitur utama platform.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((uc, idx) => {
            const Icon = uc.icon;

            return (
              <motion.div
                key={uc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.04 }}
                className="group relative rounded-3xl p-6 bg-slate-50/70 dark:bg-slate-950/70 border border-slate-200/80 dark:border-indigo-900/20 hover:border-indigo-500/50 transition duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`p-3 w-12 h-12 rounded-2xl bg-gradient-to-tr ${uc.gradient} text-white shadow-md flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white font-poppins">
                    {uc.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {uc.desc}
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
