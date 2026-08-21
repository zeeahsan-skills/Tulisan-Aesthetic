'use client';

import React from 'react';
import { Lightbulb, AlertCircle, CheckCircle2 } from 'lucide-react';

export function TwitterXTips() {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
            <Lightbulb className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white font-poppins">
              Tips Menggunakan Font Aesthetic di Twitter / X
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Optimalisasi penayangan teks agar nama dan bio Anda tetap mudah dibaca.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Jaga Keterbacaan Display Name
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Display Name Twitter / X dibatasi 50 karakter. Pilih gaya tebal modern (Bold Sans) atau Small Caps agar followers tetap dapat mengenali nama Anda saat muncul di timeline.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-purple-900/30 space-y-2">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-purple-600 dark:text-pink-400" /> Batasan Username Handle (@handle)
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Ingat bahwa Handle Twitter / X (@username) hanya mendukung karakter huruf latin biasa dan angka. Gunakan font Unicode pada <strong>Display Name</strong> dan <strong>Bio</strong> saja.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
