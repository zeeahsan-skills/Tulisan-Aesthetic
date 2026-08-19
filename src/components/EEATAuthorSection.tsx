'use client';

import React from 'react';
import { ShieldCheck, Lock, Award, FileCheck, CheckCircle } from 'lucide-react';

export function EEATAuthorSection() {
  return (
    <section id="eeat-trust" className="py-16 bg-slate-50/50 dark:bg-slate-950/50 border-t border-b border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Factor 1: 100% Browser Client-Side & Zero Logging Privacy */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-purple-900/30">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-pink-400 shrink-0">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-poppins">
                Privasi 100% Terjamin
              </h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Seluruh proses konversi teks dilakukan langsung di browser perangkat Anda (Client-side JavaScript). Kami tidak pernah menyimpan atau merekam teks pribadi Anda.
              </p>
            </div>
          </div>

          {/* Factor 2: Official Unicode Standard Compliance */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-purple-900/30">
            <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-poppins">
                Standar Unicode 15.1
              </h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Engine generator kami dipetakan secara presisi sesuai spesifikasi resmi Konsorsium Unicode dunia untuk menjamin kecocokan lintas platform.
              </p>
            </div>
          </div>

          {/* Factor 3: Editorial & Technical Integrity */}
          <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-purple-900/30">
            <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white font-poppins">
                Tim Pengembang Dedicated
              </h3>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Dikelola oleh tim pengembang antarmuka web Indonesia dengan pengujian berkala pada iOS, Android, Instagram, TikTok, dan game esports.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
