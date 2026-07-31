'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export function DiscordCTA() {
  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-indigo-600/30 via-purple-600/20 to-indigo-600/30 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Instant & 100% Gratis</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-poppins tracking-tight">
          Buat Font Discord Keren Sekarang Juga!
        </h2>

        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Ubah nama akun, Display Name, nickname server, role VIP, dan pesan obrolan Discord Anda menjadi lebih estetik dalam hitungan detik secara gratis.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="#hero"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-bold text-base shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 transition hover:scale-105"
          >
            <Sparkles className="w-5 h-5" />
            <span>Generate Font Discord</span>
          </Link>

          <Link
            href="/#popular-fonts"
            className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-bold text-base transition flex items-center justify-center gap-2"
          >
            <span>Lihat Semua Font Styles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
