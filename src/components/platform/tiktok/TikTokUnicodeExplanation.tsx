'use client';

import React from 'react';
import { Cpu, Globe2, Sparkles } from 'lucide-react';

export function TikTokUnicodeExplanation() {
  return (
    <section className="py-20 bg-white dark:bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-purple-800/40">
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-4 border border-cyan-500/30">
                <Globe2 className="w-3.5 h-3.5" />
                Teknologi Rahasia Unicode TikTok
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-poppins leading-tight">
                Mengapa Font Ini Sangat Kompatibel di TikTok?
              </h2>
              <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
                Aplikasi TikTok tidak mengizinkan Anda menginstal file font (`.ttf` / `.otf`) kustom. Alat kami bekerja dengan mengonversi huruf standar menjadi **simbol Unicode resmi**.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 mt-1">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Standar Internasional Unicode</h3>
                    <p className="text-sm text-slate-300 mt-0.5">
                      Karakter yang dihasilkan berasal dari blok matematika Unicode yang didukung oleh jutaan perangkat digital di seluruh dunia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-pink-500/20 text-pink-400 mt-1">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Tanpa Instalasi Aplikasi Tambahan</h3>
                    <p className="text-sm text-slate-300 mt-0.5">
                      Teks dapat langsung di-copy & paste ke TikTok di HP Android, iPhone, iPad, maupun TikTok Web tanpa plugin apapun.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-950/80 p-6 sm:p-8 rounded-2xl border border-purple-800/40 backdrop-blur-xl">
              <h3 className="text-xl font-bold font-poppins text-white mb-4">
                Perbedaan Font Aplikasi vs Karakter Unicode
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="font-semibold text-rose-400 mb-1">❌ File Font Biasa (.ttf / .otf)</div>
                  <p className="text-slate-400">
                    Membutuhkan hak akses root/sistem dan hanya terlihat di perangkat yang telah menginstal file tersebut. Ditolak oleh TikTok.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                  <div className="font-semibold text-emerald-400 mb-1">✓ Karakter Unicode Tulisan Aesthetic</div>
                  <p className="text-slate-400">
                    Terbaca secara universal di semua aplikasi sosial media (TikTok, Instagram, WhatsApp, Facebook) dan terlihat sama bagi semua pengunjung profil Anda.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
