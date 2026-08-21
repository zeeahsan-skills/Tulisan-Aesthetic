'use client';

import React from 'react';
import { Cpu, ShieldCheck } from 'lucide-react';

export function TwitterXUnicodeExplanation() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-600 dark:text-pink-400">
            <Cpu className="w-5 h-5" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
            Bagaimana Font Twitter (X) Bekerja?
          </h2>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed space-y-3">
          <p>
            Generator font Twitter (X) ini tidak memasang atau mendownload file font tambahan ke aplikasi Twitter Anda. Sebaliknya, alat ini memanfaatkan karakter simbol <strong>Unicode 15.1</strong> yang diakui oleh standar web internasional.
          </p>
          <p>
            Saat Anda mengetik kata pada kolom generator, setiap huruf latin biasa dipetakan secara real-time ke karakter alfabet matematika atau simbol khusus Unicode. Karena karakter tersebut adalah bagian resmi dari standar teks global, hasilnya bisa langsung dibaca oleh aplikasi Twitter / X di iOS, Android, maupun Web Desktop.
          </p>
          <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-purple-600 dark:text-pink-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>100% Client-Side Processing — Bebas Aplikasi & Aman Tanpa Login Account.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
