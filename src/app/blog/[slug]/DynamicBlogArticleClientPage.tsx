'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { ReadingProgressBar } from '@/components/blog/article/ReadingProgressBar';
import { BlogPost } from '@/lib/blog-posts';
import {
  Clock,
  User,
  Calendar,
  ChevronRight,
  ArrowLeft,
  Share2,
  Sparkles,
  Check,
  Copy,
  BookOpen,
  Zap,
} from 'lucide-react';

interface Props {
  post: BlogPost;
}

export default function DynamicBlogArticleClientPage({ post }: Props) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedSample, setCopiedSample] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleShare = async () => {
    if (typeof window !== 'undefined' && navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.description,
          url: window.location.href,
        });
        showToast('Berhasil membagikan artikel!');
      } catch {
        // user cancelled
      }
    } else if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      showToast('Tautan artikel disalin ke clipboard!');
    }
  };

  const handleCopySample = (text: string) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(text);
      setCopiedSample(text);
      showToast(`Teks "${text}" disalin!`);
      setTimeout(() => setCopiedSample(null), 2000);
    }
  };

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-slate-950 text-white font-sans">
      <ReadingProgressBar />
      <Toast message={toastMessage} />
      <Navbar />

      <main className="flex-1">
        {/* Hero Header */}
        <section className="pt-10 pb-12 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 text-white relative border-b border-slate-800">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-64 bg-purple-500/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
            {/* Breadcrumb Navigation */}
            <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6 flex-wrap" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-purple-400 transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <Link href="/blog" className="hover:text-purple-400 transition-colors">
                Blog
              </Link>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-purple-300 font-semibold truncate max-w-[200px] sm:max-w-none">
                {post.title}
              </span>
            </nav>

            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 hover:text-purple-300 mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Blog Hub</span>
            </Link>

            {/* Category Pill */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                {post.category}
              </span>
            </div>

            {/* Main Title H1 */}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4 leading-tight text-white font-poppins">
              {post.title}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-slate-300 text-base sm:text-lg mb-8 leading-relaxed">
              {post.description}
            </p>

            {/* Metadata Strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-4 flex-wrap">
                <span className="flex items-center gap-1.5 font-semibold text-slate-200">
                  <User className="w-4 h-4 text-purple-400" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  {post.publishDate}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-500" />
                  {post.readingTime}
                </span>
              </div>

              <button
                onClick={handleShare}
                className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold border border-slate-700/60 transition-colors"
              >
                <Share2 className="w-3.5 h-3.5 text-purple-400" />
                <span>Bagikan</span>
              </button>
            </div>
          </div>
        </section>

        {/* Article Body Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-slate-300 space-y-6 leading-relaxed">
            <h2 className="text-2xl font-bold text-white font-poppins">
              Pengantar & Panduan Lengkap
            </h2>
            <p>
              Dalam era komunikasi digital saat ini, tampilan visual teks menjadi salah satu faktor kunci dalam membangun identitas online yang unik. Baik untuk kebutuhan profil media sosial seperti Instagram, TikTok, WhatsApp, mau pun untuk username game esport.
            </p>
            <p>
              {post.description}
            </p>

            {/* Interactive Preview Box */}
            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-400">
                Contoh Teks Siap Salin:
              </span>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 font-mono text-sm">
                <span className="text-white">✨ 𝒯𝓊𝓁𝒾𝓈𝒶𝓃 𝒜𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸 ✨</span>
                <button
                  onClick={() => handleCopySample('✨ 𝒯𝓊𝓁𝒾𝓈𝒶𝓃 𝒜𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸 ✨')}
                  className="p-1.5 text-slate-400 hover:text-purple-400 transition"
                >
                  {copiedSample === '✨ 𝒯𝓊𝓁𝒾𝓈𝒶𝓃 𝒜𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸 ✨' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white font-poppins pt-4">
              Langkah-Langkah Pembuatan
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-slate-300">
              <li>Buka platform generator font online gratis di website kami.</li>
              <li>Ketik kata atau kalimat pilihan Anda di kolom input utama.</li>
              <li>Sistem akan secara otomatis mengubah teks biasa ke dalam 50+ gaya Unicode estetik.</li>
              <li>Klik tombol salin pada style pilihan Anda dan tempel di platform tujuan.</li>
            </ol>
          </div>

          {/* Related Tools & Internal Links */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
            <h3 className="text-lg font-bold text-white font-poppins flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-400" />
              Alat Generator Terkait & Navigasi
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold">
              <Link href="/font/huruf-keren" className="p-3 rounded-xl bg-slate-950 hover:bg-purple-900/30 text-purple-300 border border-slate-800 text-center">
                Huruf Keren
              </Link>
              <Link href="/font/tebal" className="p-3 rounded-xl bg-slate-950 hover:bg-purple-900/30 text-purple-300 border border-slate-800 text-center">
                Font Tebal
              </Link>
              <Link href="/simbol" className="p-3 rounded-xl bg-slate-950 hover:bg-purple-900/30 text-purple-300 border border-slate-800 text-center">
                Katalog Simbol
              </Link>
              <Link href="/platform/whatsapp" className="p-3 rounded-xl bg-slate-950 hover:bg-purple-900/30 text-purple-300 border border-slate-800 text-center">
                Platform WA
              </Link>
            </div>
          </div>

          {/* Back to Blog CTA */}
          <div className="text-center pt-4">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm shadow-lg transition"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Lihat Semua Artikel di Blog Hub</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
