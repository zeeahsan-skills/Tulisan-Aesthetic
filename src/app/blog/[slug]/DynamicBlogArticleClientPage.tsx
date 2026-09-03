'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { ReadingProgressBar } from '@/components/blog/article/ReadingProgressBar';
import { BlogPost } from '@/lib/blog-posts';
import { RICH_BLOG_ARTICLES } from '@/lib/blog-articles-data';
import {
  User,
  ChevronRight,
  ArrowLeft,
  Share2,
  Sparkles,
  Check,
  Copy,
  BookOpen,
  Zap,
  HelpCircle,
  CheckCircle2,
  AlertCircle,
  Lightbulb,
  ListOrdered,
} from 'lucide-react';

interface Props {
  post: BlogPost;
}

export default function DynamicBlogArticleClientPage({ post }: Props) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedSample, setCopiedSample] = useState<string | null>(null);

  const richData = RICH_BLOG_ARTICLES[post.slug];

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-10">
          {richData ? (
            <>
              {/* Direct Answer Box */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-purple-950/40 via-slate-900 to-slate-900 border border-purple-500/30 shadow-lg">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Jawaban Praktis & Ringkasan Cepat</span>
                </div>
                <p className="text-slate-200 text-base sm:text-lg font-medium leading-relaxed">
                  {richData.directAnswer}
                </p>
              </div>

              {/* Introduction Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-slate-300 space-y-4 leading-relaxed">
                <h2 className="text-2xl font-bold text-white font-poppins">
                  Pengantar & Latar Belakang
                </h2>
                {richData.introParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-slate-300 text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Cheatsheet / Reference Table if available */}
              {richData.table && (
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
                  <h2 className="text-xl font-bold text-white font-poppins flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    Tabel Referensi & Panduan Sintaks
                  </h2>
                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm text-slate-300 border-collapse">
                      <thead>
                        <tr className="border-b border-slate-800 bg-slate-950/70 text-purple-300 font-semibold">
                          {richData.table.headers.map((header, hIdx) => (
                            <th key={hIdx} className="p-3.5">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/60">
                        {richData.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-purple-950/20 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3.5 font-mono text-xs sm:text-sm">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* In-depth Sections */}
              {richData.sections.map((section, sIdx) => (
                <div
                  key={sIdx}
                  className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-slate-300 space-y-5 leading-relaxed"
                >
                  <h2 className="text-2xl font-bold text-white font-poppins">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="text-slate-300 text-base leading-relaxed">
                      {para}
                    </p>
                  ))}

                  {section.bullets && (
                    <ul className="space-y-2.5 pt-2">
                      {section.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-slate-300">
                          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.proTip && (
                    <div className="p-4 rounded-2xl bg-purple-950/40 border border-purple-500/30 flex items-start gap-3 mt-4 text-purple-200 text-sm leading-relaxed">
                      <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-purple-300 font-bold block mb-1">Tips Tambahan:</strong>
                        <span>{section.proTip}</span>
                      </div>
                    </div>
                  )}

                  {section.commonMistakes && (
                    <div className="p-4 rounded-2xl bg-rose-950/30 border border-rose-500/30 flex items-start gap-3 mt-4 text-rose-200 text-sm leading-relaxed">
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-rose-300 font-bold block mb-1">Kesalahan yang Harus Dihindari:</strong>
                        <ul className="list-disc list-inside space-y-1">
                          {section.commonMistakes.map((mistake, mIdx) => (
                            <li key={mIdx}>{mistake}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              ))}

              {/* Copyable Presets Section */}
              {richData.copyablePresets && richData.copyablePresets.length > 0 && (
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-5">
                  <h2 className="text-2xl font-bold text-white font-poppins flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-purple-400" />
                    Preset & Contoh Teks Siap Salin (1-Klik)
                  </h2>
                  <p className="text-slate-400 text-sm">
                    Klik tombol salin di samping teks untuk langsung menempelkannya ke aplikasi atau media sosial pilihan Anda:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {richData.copyablePresets.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-between gap-3 hover:border-purple-500/40 transition-colors"
                      >
                        <div className="min-w-0 flex-1">
                          <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block mb-1">
                            {item.label}
                          </span>
                          <span className="text-white font-mono text-sm block truncate">
                            {item.text}
                          </span>
                        </div>
                        <button
                          onClick={() => handleCopySample(item.text)}
                          className="p-2.5 rounded-xl bg-slate-900 hover:bg-purple-600 text-slate-300 hover:text-white border border-slate-700/60 transition-colors shrink-0"
                          title="Salin ke clipboard"
                        >
                          {copiedSample === item.text ? (
                            <Check className="w-4 h-4 text-emerald-400" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Step-by-Step Tutorial */}
              {richData.stepByStep && richData.stepByStep.length > 0 && (
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-5">
                  <h2 className="text-2xl font-bold text-white font-poppins flex items-center gap-2">
                    <ListOrdered className="w-6 h-6 text-purple-400" />
                    Panduan Langkah demi Langkah
                  </h2>
                  <div className="space-y-3.5">
                    {richData.stepByStep.map((stepItem, idx) => (
                      <div
                        key={idx}
                        className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 flex items-start gap-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-purple-600/30 text-purple-300 border border-purple-500/40 flex items-center justify-center font-bold text-sm shrink-0">
                          {stepItem.step}
                        </div>
                        <div className="space-y-1">
                          <h3 className="text-base font-bold text-white">
                            {stepItem.title}
                          </h3>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {stepItem.instruction}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* FAQ Section */}
              {richData.faqs && richData.faqs.length > 0 && (
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-5">
                  <h2 className="text-2xl font-bold text-white font-poppins flex items-center gap-2">
                    <HelpCircle className="w-6 h-6 text-purple-400" />
                    Pertanyaan yang Sering Diajukan (FAQ)
                  </h2>
                  <div className="space-y-3.5">
                    {richData.faqs.map((faq, idx) => (
                      <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                        <h3 className="text-base font-bold text-white flex items-center gap-2">
                          <span className="text-purple-400">Q:</span> {faq.q}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed pl-6">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Contextual Recommended Tools */}
              {richData.recommendedTools && richData.recommendedTools.length > 0 && (
                <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-4">
                  <h3 className="text-lg font-bold text-white font-poppins flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" />
                    Alat Generator Rekomendasi Terkait
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {richData.recommendedTools.map((tool, idx) => (
                      <Link
                        key={idx}
                        href={tool.href}
                        className="p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 hover:bg-purple-950/20 transition-all group"
                      >
                        <span className="text-sm font-bold text-purple-300 group-hover:text-purple-200 block mb-1">
                          {tool.label} →
                        </span>
                        <span className="text-xs text-slate-400 leading-relaxed block">
                          {tool.desc}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Fallback generic layout if no rich data */
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 text-slate-300 space-y-6 leading-relaxed">
              <h2 className="text-2xl font-bold text-white font-poppins">
                Pengantar & Panduan Lengkap
              </h2>
              <p>{post.description}</p>
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
                    {copiedSample === '✨ 𝒯𝓊𝓁𝒾𝓈𝒶𝓃 𝒜𝑒𝓈𝓉𝒽𝑒𝓉𝒾𝒸 ✨' ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Back to Blog Hub CTA */}
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
