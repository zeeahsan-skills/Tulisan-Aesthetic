'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toast } from '@/components/Toast';
import { FontGenerator } from '@/components/FontGenerator';
import {
  Sparkles,
  Search,
  ArrowRight,
  Copy,
  Check,
  Layers,
  HelpCircle,
  Smartphone,
  ShieldCheck,
  Zap,
} from 'lucide-react';

interface FontStyleCard {
  slug: string;
  title: string;
  category: 'Populer' | 'Tebal & Miring' | 'Unik & Simbol' | 'Gothic & Vintage';
  sample: string;
  desc: string;
}

const ALL_FONT_STYLES: FontStyleCard[] = [
  {
    slug: 'huruf-keren',
    title: 'Huruf Keren (Fancy Text)',
    category: 'Populer',
    sample: 'ᵀᵁᴸᴵˢᴬᴺ ᴴᵁᴿᵁᶠ ᴷᴱᴿᴱᴺ',
    desc: 'Gaya huruf keren aesthetic, small caps, dan ornamen sayap untuk bio media sosial.',
  },
  {
    slug: 'tebal',
    title: 'Font Tebal (Bold Text)',
    category: 'Tebal & Miring',
    sample: '𝗧𝗲𝗸𝘀 𝗧𝗲𝗯𝗮𝗹 𝗕𝗼𝗹𝗱',
    desc: 'Huruf cetak tebal sans-serif dan serif Unicode yang menonjol di feed dan bio.',
  },
  {
    slug: 'miring-kursif',
    title: 'Font Miring & Kursif (Cursive)',
    category: 'Tebal & Miring',
    sample: '𝒯𝓊𝓁𝒾𝓈𝒶𝓃 𝒦𝓊𝓇𝓈𝒾𝒻 ℰ𝓁ℯℊ𝒶𝓃',
    desc: 'Tulisan sambung tangan halus dan huruf miring italic berkesan mewah & estetik.',
  },
  {
    slug: 'gelembung',
    title: 'Font Gelembung (Bubble Text)',
    category: 'Populer',
    sample: 'Ⓣⓤⓛⓘⓢⓐⓝ Ⓑⓤⓑⓑⓛⓔ',
    desc: 'Teks bulat lingkaran outline & solid hitam imut untuk nama profil dan status.',
  },
  {
    slug: 'gothic-fraktur',
    title: 'Font Gothic & Fraktur',
    category: 'Gothic & Vintage',
    sample: '𝕲𝖔𝖙𝖍𝖎𝖈 𝕱𝔯𝔞𝔨𝔱𝔲𝔯 𝕭𝖔𝖑𝖉',
    desc: 'Huruf Medieval Blackletter Jerman kuno bergaya dark aesthetic & nickname esport.',
  },
  {
    slug: 'tiny',
    title: 'Font Tiny & Small Text',
    category: 'Populer',
    sample: 'ᵀᶦⁿʸ ˢᵐᵃˡˡ ᵀᵉˣᵗ ᴬᵉˢᵗʰᵉᵗᶦᶜ',
    desc: 'Huruf kecil mini superscript dan subscript yang clean & minimalis.',
  },
  {
    slug: 'angka',
    title: 'Angka Keren (Cool Numbers)',
    category: 'Unik & Simbol',
    sample: '① ② ③ ➊ ➋ ➌ Ⅰ Ⅱ Ⅲ',
    desc: 'Variasi angka lingkaran, angka romawi, dan superscript untuk tanggal bio & nomor squad.',
  },
  {
    slug: 'berkilau',
    title: 'Font Berkilau Bintang',
    category: 'Unik & Simbol',
    sample: '✧･ﾟ: * Teks Berkilau * :･ﾟ✧',
    desc: 'Hiasan teks dengan ornamen bintang bercahaya, stardust, dan kilau Unicode.',
  },
  {
    slug: 'sparkly',
    title: 'Sparkly & Glitter Font',
    category: 'Unik & Simbol',
    sample: 'ੈ✩‧₊˚ Sparkly Glitter ˚₊‧✩ੈ',
    desc: 'Gaya font gemerlap glitter dan kaomoji bintang imut untuk bio TikTok & IG.',
  },
  {
    slug: 'garis',
    title: 'Font Garis & Monospace',
    category: 'Tebal & Miring',
    sample: '𝚃𝚞𝚕𝚒𝚜𝚊𝚗 𝙼𝚘𝚗𝚘𝚜𝚙𝚊𝚌𝚎 𝚃𝚢𝚙𝚎',
    desc: 'Huruf mesin tik monospace dan teks tercoret (strikethrough) rapi.',
  },
  {
    slug: 'glitch',
    title: 'Font Glitch (Zalgo Cyber)',
    category: 'Unik & Simbol',
    sample: 'T̷u̷l̷i̷s̷a̷n̷ G̷l̷i̷t̷c̷h̷',
    desc: 'Efek teks rusak, glitch cyber, dan gelombang distorsi zalgo menyeramkan.',
  },
  {
    slug: 'kotak',
    title: 'Font Kotak (Square Box)',
    category: 'Populer',
    sample: '🅃🅄🄻🄸🅂🄰🄽 🄺🄾🅃🄰🄺',
    desc: 'Karakter huruf dalam bingkai kotak outline dan kotak solid hitam tegas.',
  },
  {
    slug: 'memutar',
    title: 'Font Memutar & Terbalik',
    category: 'Unik & Simbol',
    sample: 'uɐsᴉln┴ ʞᴉlɐqɹǝ┴',
    desc: 'Teks terbalik 180 derajat (upside down) dan efek tulisan cermin unik.',
  },
  {
    slug: 'menakutkan',
    title: 'Font Menakutkan (Scary Zalgo)',
    category: 'Gothic & Vintage',
    sample: 'T̶u̶l̶i̶s̶a̶n̶ S̶c̶a̶r̶y̶',
    desc: 'Kombinasi diakritik menyeramkan bertema horor dan misterius.',
  },
  {
    slug: 'nama-keren',
    title: 'Generator Nama Keren Medsos',
    category: 'Populer',
    sample: '꧁༺ 𝒩𝒶𝓂𝒶 𝒦ℯ𝓇ℯ𝓃 ༻꧂',
    desc: 'Format nama akun dan username estetik berhiaskan sayap & mahkota elegan.',
  },
  {
    slug: 'random',
    title: 'Font Random (Mix Styles)',
    category: 'Unik & Simbol',
    sample: 'Tυℓιѕαи Rαиԃσм Uиιк',
    desc: 'Acak dan padukan puluhan variasi font Unicode secara instan dalam 1 klik.',
  },
  {
    slug: 'terhubung',
    title: 'Font Terhubung (Connected Script)',
    category: 'Tebal & Miring',
    sample: '𝒯𝓊𝓁𝒾𝓈𝒶𝓃 𝒯ℯ𝓇𝒽𝓊𝒷𝓊𝓃ℊ',
    desc: 'Gaya tulisan tangan sambung kaligrafi indah berkesan natural dan artistik.',
  },
  {
    slug: 'vintage',
    title: 'Font Vintage & Retro Klasik',
    category: 'Gothic & Vintage',
    sample: '𝑉𝑖𝑛𝑡𝑎𝑔𝑒 𝐶𝑙𝑎𝑠𝑠𝑖𝑐 𝑆𝑒𝑟𝑖𝑓',
    desc: 'Gaya huruf retro era 70-an/80-an, typewriter klasik, dan serif nostalgia.',
  },
];

const CATEGORIES = ['Semua Gaya', 'Populer', 'Tebal & Miring', 'Unik & Simbol', 'Gothic & Vintage'] as const;

export default function FontHubClientPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua Gaya');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleCopySample = (sample: string, slug: string) => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(sample);
      setCopiedSlug(slug);
      showToast(`Teks "${sample}" disalin ke clipboard!`);
      setTimeout(() => setCopiedSlug(null), 2000);
    }
  };

  const filteredStyles = useMemo(() => {
    return ALL_FONT_STYLES.filter((style) => {
      const matchCategory =
        selectedCategory === 'Semua Gaya' || style.category === selectedCategory;
      const matchSearch =
        style.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        style.slug.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [searchQuery, selectedCategory]);

  const faqs = [
    {
      q: 'Apa itu Generator Font Aesthetic di Tulisan Aesthetic?',
      a: 'Generator Font Aesthetic adalah alat online gratis yang mengubah teks ketikan biasa menjadi puluhan variasi gaya tulisan keren berbasis standar karakter Unicode resmi. Teks hasil generator bukan gambar atau file font terinstal, sehingga dapat disalin dan ditempel langsung ke aplikasi apa pun.',
    },
    {
      q: 'Apakah gaya tulisan di direktori ini bisa dibaca di semua HP?',
      a: 'Ya, lebih dari 99% perangkat modern (Android, iPhone iOS, iPad, PC Windows, dan Mac) mendukung karakter Unicode yang kami gunakan. Karakter ini didukung secara bawaan oleh sistem operasi sehingga tidak akan berubah menjadi kotak tanda tanya (tofu).',
    },
    {
      q: 'Bagaimana cara menggunakan font ini untuk Bio Instagram dan WhatsApp?',
      a: 'Cukup pilih kategori font yang Anda sukai di direktori ini, klik untuk membuka generator khususnya, ketik teks yang diinginkan, lalu tekan tombol Salin. Buka profil Instagram, bio WhatsApp, atau caption TikTok Anda, lalu tempel (paste).',
    },
    {
      q: 'Apakah semua font di katalog ini 100% gratis digunakan?',
      a: 'Ya, seluruh alat generator font, koleksi simbol, dan konverter teks di Tulisan Aesthetic disediakan secara 100% gratis tanpa perlu registrasi akun atau mengunduh aplikasi tambahan.',
    },
  ];

  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden bg-slate-950 text-white font-sans">
      <Toast message={toastMessage} />
      <Navbar />

      <main className="flex-1">
        {/* Hero & Live Generator */}
        <section className="relative pt-6 pb-12 bg-gradient-to-b from-slate-900 via-slate-900/80 to-slate-950 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <FontGenerator
              title="Direktori Font Generator Aesthetic"
              subtitle="Pusat konversi teks Unicode terlengkap di Indonesia. Jelajahi 18+ variasi gaya huruf keren, tulisan tebal, miring kursif, gelembung, gothic, dan font berkilau yang siap disalin untuk Bio Instagram, TikTok, WhatsApp & Game."
              defaultText="Tulisan Aesthetic"
              isH1={true}
              onCopy={showToast}
            />
          </div>
        </section>

        {/* Directory Explorer Section */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-bold uppercase tracking-wider text-purple-400 inline-flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              Katalog Lengkap Gaya Huruf
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-white font-poppins">
              Pilih Koleksi Font Sesuai Karaktermu
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              Setiap kategori font di bawah ini memiliki generator khusus dengan opsi kustomisasi lengkap. Temukan gaya tulisan yang paling pas untuk kebutuhan profil Anda.
            </p>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Cari gaya font (tebal, gothic, tiny)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition"
              />
            </div>

            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of 18 Font Styles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStyles.map((item) => (
              <div
                key={item.slug}
                className="group p-6 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/5 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20">
                      {item.category}
                    </span>
                    <button
                      onClick={() => handleCopySample(item.sample, item.slug)}
                      title="Salin contoh teks"
                      className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition"
                    >
                      {copiedSlug === item.slug ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <h3 className="text-lg font-bold text-white font-poppins group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>

                  {/* Sample box */}
                  <div className="my-3.5 p-3 rounded-xl bg-slate-950 border border-slate-800/80 font-mono text-sm text-purple-300 truncate">
                    {item.sample}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-400 group-hover:text-slate-300">
                    Buka Generator
                  </span>
                  <Link
                    href={`/font/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 group-hover:text-purple-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Eksplorasi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredStyles.length === 0 && (
            <div className="text-center py-16 text-slate-400">
              <p className="text-base font-semibold">Tidak ada gaya font yang cocok dengan pencarian Anda.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Semua Gaya');
                }}
                className="mt-3 px-4 py-2 rounded-xl bg-purple-600 text-white text-xs font-bold"
              >
                Reset Filter
              </button>
            </div>
          )}
        </section>

        {/* SEO Educational Guide Section */}
        <section className="py-14 bg-slate-900/60 border-t border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-poppins">
                Panduan Memilih & Menggunakan Font Aesthetic
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                Pahami cara kerja teknologi Unicode dan tips memaksimalkan gaya teks pada profil online Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="p-3 w-fit rounded-xl bg-purple-500/10 text-purple-400">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Standar Unicode Resmi</h3>
                <p className="text-slate-400 leading-relaxed text-xs">
                  Semua tulisan yang dihasilkan berasal dari blok <em>Mathematical Alphanumeric Symbols</em> standar Unicode konsorsium internasional, bukan font TTF/OTF. Hasilnya bisa dicopy-paste layaknya teks biasa.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="p-3 w-fit rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Kompatibel Semua Platform</h3>
                <p className="text-slate-400 leading-relaxed text-xs">
                  Dapat digunakan di bio & caption Instagram, TikTok, nama grup WhatsApp, deskripsi server Discord, postingan Facebook, hingga nickname game seperti Free Fire dan Mobile Legends.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
                <div className="p-3 w-fit rounded-xl bg-pink-500/10 text-pink-400">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">100% Aman & Tanpa Aplikasi</h3>
                <p className="text-slate-400 leading-relaxed text-xs">
                  Tidak memerlukan install aplikasi tambahan yang memakan memori ponsel. Akses langsung melalui browser web secara cepat, ringan, aman, dan tanpa iklan pop-up yang mengganggu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-xs font-bold uppercase tracking-wider text-purple-400 inline-flex items-center gap-1.5">
              <HelpCircle className="w-3.5 h-3.5" />
              Pertanyaan Umum
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white font-poppins">
              FAQ Seputar Direktori Font
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden transition"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white">
                    {faq.q}
                  </span>
                  <span className="text-purple-400 text-lg font-bold">
                    {openFaqIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openFaqIndex === index && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Navigation Hub Links */}
        <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-3xl bg-gradient-to-r from-purple-900/40 via-slate-900 to-pink-900/40 border border-purple-800/40 text-center space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white font-poppins">
              Ingin Menjelajahi Lebih Banyak Alat?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
              Kunjungi juga pusat generator font khusus media sosial, direktori simbol & kaomoji, atau generator nama game favorit Anda.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="/platform"
                className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition"
              >
                Font Media Sosial →
              </Link>
              <Link
                href="/game"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition"
              >
                Generator Game Hub →
              </Link>
              <Link
                href="/simbol"
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition"
              >
                Katalog Simbol Keren →
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
