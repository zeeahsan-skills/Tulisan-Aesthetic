'use client';

import React from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight } from 'lucide-react';

export function PlatformPillarCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold uppercase tracking-wider text-pink-300 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" /> Start Customizing Your Bio
        </span>
        <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold font-poppins leading-tight">
          Siap Mengubah Tampilan Bio & Profil Media Sosial Anda?
        </h2>
        <p className="mt-4 text-base sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Gunakan generator font aesthetic gratis sekarang. Hasilkan ribuan gaya tulisan unik hanya dalam 1 klik!
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#featured-platforms"
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-purple-500/25 transition-all flex items-center gap-2"
          >
            <span>Pilih Generator Platform</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <Link
            href="/"
            className="px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </section>
  );
}
