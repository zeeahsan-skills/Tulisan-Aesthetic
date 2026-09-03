'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, UserCheck, KeyRound, CheckCircle2 } from 'lucide-react';

export function ValorantHowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Generate & Salin Nama',
      desc: 'Ketik nama Anda di generator atas, pilih gaya nickname favorit, dan klik tombol "Salin Nickname".',
      icon: <KeyRound className="w-5 h-5 text-rose-400" />,
    },
    {
      step: '02',
      title: 'Buka account.riotgames.com',
      desc: 'Buka browser Anda dan kunjungi situs manajemen akun resmi Riot Games di account.riotgames.com.',
      icon: <Globe className="w-5 h-5 text-blue-400" />,
    },
    {
      step: '03',
      title: 'Login & Masuk Tab Riot ID',
      desc: 'Masuk dengan akun Riot Anda, lalu buka menu "Riot ID" di halaman pengaturan akun.',
      icon: <UserCheck className="w-5 h-5 text-amber-400" />,
    },
    {
      step: '04',
      title: 'Paste & Simpan Perubahan',
      desc: 'Tempel nama baru pada kotak Riot ID dan tentukan Tagline Anda, lalu klik "Save Changes". Selesai!',
      icon: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold font-poppins mb-4">
            Cara Mengganti Nama / Riot ID Valorant
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Ikuti 4 langkah praktis berikut untuk menerapkan nama baru ke akun Valorant Anda secara gratis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 shadow-lg flex flex-col justify-between hover:border-rose-500/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {s.icon}
                  </div>
                  <span className="text-2xl font-extrabold text-rose-500/30 font-mono">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-100 mb-2">{s.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
