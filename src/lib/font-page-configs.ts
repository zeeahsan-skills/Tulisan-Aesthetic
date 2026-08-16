import {
  FontStyle,
  FIFTY_FONT_STYLES,
  ALL_FONT_STYLES,
  GOTHIC_FONT_STYLES,
  TINY_FONT_STYLES,
  BUBBLE_FONT_STYLES,
  STRIKETHROUGH_FONT_STYLES,
  FLIPPED_FONT_STYLES,
  SPARKLY_FONT_STYLES,
  CONNECTED_FONT_STYLES,
  SQUARE_FONT_STYLES,
  NUMBER_FONT_STYLES,
  CYBER_GLITCH_FONT_STYLES,
  HORROR_SCARY_FONT_STYLES,
  VINTAGE_FONT_STYLES,
} from './unicode-engine';

export interface FontPageConfig {
  slug: string;
  title: string;
  subtitle: string;
  defaultText: string;
  presetCategory: string;
  mainCategoryName: string;
  getStyles: () => FontStyle[];
}

// Helper to assemble exactly 50 unique styles, prioritizing page-specific array first, then filling from FIFTY_FONT_STYLES
function buildCurated50(primaryArray: FontStyle[], fallbackArray: FontStyle[] = FIFTY_FONT_STYLES): FontStyle[] {
  const map = new Map<string, FontStyle>();

  // Add primary page-specific styles first
  for (const style of primaryArray) {
    if (!map.has(style.id)) {
      map.set(style.id, style);
    }
  }

  // Fill up to exactly 50 styles using fallback array
  for (const style of fallbackArray) {
    if (map.size >= 50) break;
    if (!map.has(style.id)) {
      map.set(style.id, style);
    }
  }

  return Array.from(map.values()).slice(0, 50);
}

// 1. Font Tebal Configuration
const tebalPrimary: FontStyle[] = [
  FIFTY_FONT_STYLES[0], // bold-sans
  FIFTY_FONT_STYLES[1], // bold-serif
  FIFTY_FONT_STYLES[3], // bold-italic-serif
  FIFTY_FONT_STYLES[5], // sans-bold-italic
  FIFTY_FONT_STYLES[7], // bold-cursive
  FIFTY_FONT_STYLES[10], // gothic-bold
  FIFTY_FONT_STYLES[13], // dark-bubble
  FIFTY_FONT_STYLES[15], // dark-square
  FIFTY_FONT_STYLES[8], // double-struck
  FIFTY_FONT_STYLES[9], // monospace
  NUMBER_FONT_STYLES[4], // math-bold-numbers
  NUMBER_FONT_STYLES[1], // dark-circled-numbers
  NUMBER_FONT_STYLES[3], // math-double-struck-numbers
  {
    id: 'heavy-royal-crown',
    name: 'Bold Royal Crown 👑',
    category: 'Popular',
    transform: (t) => `👑 ${FIFTY_FONT_STYLES[0].transform(t)} 👑`,
  },
  {
    id: 'heavy-wings-border',
    name: 'Bold Wings Border ꧁༺ ༻꧂',
    category: 'Popular',
    transform: (t) => `꧁༺ ${FIFTY_FONT_STYLES[0].transform(t)} ༻꧂`,
  },
  {
    id: 'heavy-blackletter-swords',
    name: 'Bold Blackletter Swords ⚔️',
    category: 'Gothic',
    transform: (t) => `⚔️ ${FIFTY_FONT_STYLES[10].transform(t)} ⚔️`,
  },
  {
    id: 'heavy-fire-flame',
    name: 'Bold Fire Flame 🔥',
    category: 'Popular',
    transform: (t) => `🔥 ${FIFTY_FONT_STYLES[0].transform(t)} 🔥`,
  },
  {
    id: 'heavy-lightning-bolt',
    name: 'Bold Lightning Bolt ⚡',
    category: 'Popular',
    transform: (t) => `⚡ ${FIFTY_FONT_STYLES[0].transform(t)} ⚡`,
  },
  {
    id: 'heavy-dark-brackets',
    name: 'Bold Brackets ⦇ ⦈',
    category: 'Popular',
    transform: (t) => `⦇ ${FIFTY_FONT_STYLES[0].transform(t)} ⦈`,
  },
  {
    id: 'heavy-square-cross',
    name: 'Dark Square Swords ⚔️',
    category: 'Gaming',
    transform: (t) => `⚔️ ${FIFTY_FONT_STYLES[15].transform(t)} ⚔️`,
  },
];

// 2. Font Miring Kursif Configuration (Pure Mathematical Italic & Slanted Sans)
const miringKursifPrimary: FontStyle[] = [
  FIFTY_FONT_STYLES[2], // italic-serif
  FIFTY_FONT_STYLES[3], // bold-italic-serif
  FIFTY_FONT_STYLES[4], // sans-italic
  FIFTY_FONT_STYLES[5], // sans-bold-italic
  FIFTY_FONT_STYLES[6], // cursive-script
  FIFTY_FONT_STYLES[7], // bold-cursive
  {
    id: 'italic-classic-brackets',
    name: 'Italic Brackets ( )',
    category: 'Fancy',
    transform: (t) => `( ${FIFTY_FONT_STYLES[2].transform(t)} )`,
  },
  {
    id: 'italic-sparkle-border',
    name: 'Italic Sparkle ✧ ✧',
    category: 'Fancy',
    transform: (t) => `✧ ${FIFTY_FONT_STYLES[2].transform(t)} ✧`,
  },
  {
    id: 'italic-star-border',
    name: 'Italic Star ★ ★',
    category: 'Popular',
    transform: (t) => `★ ${FIFTY_FONT_STYLES[4].transform(t)} ★`,
  },
  {
    id: 'italic-bold-border',
    name: 'Bold Italic Wings ꧁༺ ༻꧂',
    category: 'Popular',
    transform: (t) => `꧁༺ ${FIFTY_FONT_STYLES[3].transform(t)} ༻꧂`,
  },
];

// 3. Font Tiny Configuration
const tinyPrimary: FontStyle[] = [
  FIFTY_FONT_STYLES[16], // small-caps
  FIFTY_FONT_STYLES[17], // superscript
  FIFTY_FONT_STYLES[18], // subscript
  ...TINY_FONT_STYLES,
  NUMBER_FONT_STYLES[7], // superscript-numbers
  NUMBER_FONT_STYLES[8], // subscript-numbers
];

// 4. Font Berkilau Configuration
const berkilauPrimary: FontStyle[] = [
  ...SPARKLY_FONT_STYLES,
  FIFTY_FONT_STYLES[34], // sparkle-sparkle
  FIFTY_FONT_STYLES[36], // heart-sides
  FIFTY_FONT_STYLES[40], // flower-blossom
  FIFTY_FONT_STYLES[41], // diamond-sparkle
  FIFTY_FONT_STYLES[46], // rose-blossom
  FIFTY_FONT_STYLES[49], // music-notes
];

// 5. Font Gothic Fraktur Configuration
const gothicPrimary: FontStyle[] = [
  FIFTY_FONT_STYLES[10], // gothic-bold
  FIFTY_FONT_STYLES[11], // fraktur-regular
  ...GOTHIC_FONT_STYLES,
];

// 6. Font Angka Configuration
const angkaPrimary: FontStyle[] = [
  ...NUMBER_FONT_STYLES,
];

// 7. Font Garis Configuration
const garisPrimary: FontStyle[] = [
  FIFTY_FONT_STYLES[27], // single-strikethrough
  FIFTY_FONT_STYLES[28], // double-strikethrough
  FIFTY_FONT_STYLES[29], // single-underline
  FIFTY_FONT_STYLES[30], // double-underline
  FIFTY_FONT_STYLES[31], // dotted-above
  FIFTY_FONT_STYLES[32], // tilde-strike
  FIFTY_FONT_STYLES[33], // slash-strike
  ...STRIKETHROUGH_FONT_STYLES,
];

// 8. Font Gelembung Configuration
const gelembungPrimary: FontStyle[] = [
  FIFTY_FONT_STYLES[12], // bubble-light
  FIFTY_FONT_STYLES[13], // dark-bubble
  ...BUBBLE_FONT_STYLES,
  NUMBER_FONT_STYLES[0], // circled-numbers
  NUMBER_FONT_STYLES[1], // dark-circled-numbers
  NUMBER_FONT_STYLES[2], // double-circled-numbers
];

// 9. Font Kotak Configuration
const kotakPrimary: FontStyle[] = [
  FIFTY_FONT_STYLES[14], // square-box
  FIFTY_FONT_STYLES[15], // dark-square
  ...SQUARE_FONT_STYLES,
];

// 10. Font Memutar Configuration
const memutarPrimary: FontStyle[] = [
  FIFTY_FONT_STYLES[24], // upside-down
  FIFTY_FONT_STYLES[25], // flipped-text
  FIFTY_FONT_STYLES[26], // mirror-text
  ...FLIPPED_FONT_STYLES,
];

// 11. Font Menakutkan Configuration (Horror Skull & Demon Heavy Zalgo)
const menakutkanPrimary: FontStyle[] = [
  ...HORROR_SCARY_FONT_STYLES,
];

// 12. Font Nama Keren Configuration
const namaKerenPrimary: FontStyle[] = [
  FIFTY_FONT_STYLES[37], // border-wings
  FIFTY_FONT_STYLES[35], // star-borders
  FIFTY_FONT_STYLES[39], // bracket-style
  FIFTY_FONT_STYLES[42], // royal-crown
  FIFTY_FONT_STYLES[43], // demon-skull
  FIFTY_FONT_STYLES[44], // fire-flame
  FIFTY_FONT_STYLES[45], // lightning-bolt
  FIFTY_FONT_STYLES[47], // target-scope
  FIFTY_FONT_STYLES[48], // king-emperor
];

// 13. Font Terhubung Configuration (Continuous Ligatures & Signature Swashes)
const terhubungPrimary: FontStyle[] = [
  CONNECTED_FONT_STYLES[0], // script-regular
  CONNECTED_FONT_STYLES[1], // connected-bold-script
  CONNECTED_FONT_STYLES[2], // elegant-handwriting
  CONNECTED_FONT_STYLES[3], // signature-style
  CONNECTED_FONT_STYLES[4], // flowing-script
  CONNECTED_FONT_STYLES[5], // signature-wings
  CONNECTED_FONT_STYLES[6], // connected-hearts
  CONNECTED_FONT_STYLES[7], // connected-sparkles
  CONNECTED_FONT_STYLES[8], // connected-stars
  CONNECTED_FONT_STYLES[9], // connected-royal
];

// 14. Huruf Keren Configuration (Aesthetic Small Caps, Cursive, Vaporwave & Sparkles)
const hurufKerenPrimary: FontStyle[] = [
  TINY_FONT_STYLES[7],   // small-caps-wings ꧁༺ ༻꧂
  SPARKLY_FONT_STYLES[0], // sparkle-sparkle ✨
  FIFTY_FONT_STYLES[16], // small-caps
  FIFTY_FONT_STYLES[6],  // cursive-script
  FIFTY_FONT_STYLES[19], // vaporwave
  FIFTY_FONT_STYLES[12], // bubble-light
  FIFTY_FONT_STYLES[38], // japanese-style 『 』
  FIFTY_FONT_STYLES[17], // superscript
  SPARKLY_FONT_STYLES[8], // galaxy-stars ★彡 彡★
  SPARKLY_FONT_STYLES[6], // sparkle-hearts ♡ ♡
  FIFTY_FONT_STYLES[8],  // double-struck
  FIFTY_FONT_STYLES[13], // dark-bubble
  FIFTY_FONT_STYLES[14], // square-box
];

// 15. Font Glitch Configuration (Cyber Distorted Noise & Code Brackets)
const glitchPrimary: FontStyle[] = [
  ...CYBER_GLITCH_FONT_STYLES,
];

// 16. Font Vintage Configuration (Victorian Classic, Retro Serif, Typewriter)
const vintagePrimary: FontStyle[] = [
  ...VINTAGE_FONT_STYLES,
];

// 17. Font Random Configuration (Dynamic Decor Mix & Emblems)
const randomPrimary: FontStyle[] = [
  FIFTY_FONT_STYLES[37], // border-wings ꧁༺ ༻꧂
  FIFTY_FONT_STYLES[35], // star-borders ★彡 彡★
  FIFTY_FONT_STYLES[42], // royal-crown 👑
  FIFTY_FONT_STYLES[44], // fire-flame 🔥
  FIFTY_FONT_STYLES[45], // lightning-bolt ⚡
  FIFTY_FONT_STYLES[39], // bracket-style ⚔️
  FIFTY_FONT_STYLES[40], // flower-blossom ❈
  FIFTY_FONT_STYLES[41], // diamond-sparkle ♦
  FIFTY_FONT_STYLES[43], // demon-skull 💀
  FIFTY_FONT_STYLES[48], // king-emperor ♔
  FIFTY_FONT_STYLES[49], // music-notes 🎵
  FIFTY_FONT_STYLES[46], // rose-blossom 🌹
  FIFTY_FONT_STYLES[47], // target-scope 🎯
  ...FIFTY_FONT_STYLES,
];

export const FONT_PAGE_CONFIGS: Record<string, FontPageConfig> = {
  'huruf-keren': {
    slug: 'huruf-keren',
    title: 'Huruf Keren Generator 2026',
    subtitle: 'Konversi teks biasa menjadi 50 gaya huruf keren, aesthetic, dan stylish yang siap di-copy paste.',
    defaultText: 'Huruf Keren',
    presetCategory: 'Popular',
    mainCategoryName: 'Huruf Keren Aesthetic',
    getStyles: () => buildCurated50(hurufKerenPrimary),
  },
  tebal: {
    slug: 'tebal',
    title: 'Font Tebal / Bold Generator 2026',
    subtitle: 'Buat tulisan tebal hitam Unicode Sans, Serif, Bold Script, dan Dark Bubble secara instan.',
    defaultText: 'Tulisan Tebal',
    presetCategory: 'Popular',
    mainCategoryName: 'Bold & Heavy Fonts',
    getStyles: () => buildCurated50(tebalPrimary),
  },
  'miring-kursif': {
    slug: 'miring-kursif',
    title: 'Font Miring & Kursif Generator 2026',
    subtitle: 'Konversi teks menjadi tulisan miring Italic, Cursive Script, dan handwriting aesthetic.',
    defaultText: 'Tulisan Miring',
    presetCategory: 'Fancy',
    mainCategoryName: 'Italic & Cursive Script',
    getStyles: () => buildCurated50(miringKursifPrimary),
  },
  tiny: {
    slug: 'tiny',
    title: 'Tiny Text & Small Caps Generator 2026',
    subtitle: 'Ubah teks biasa menjadi huruf kecil mini di atas (superscript), di bawah (subscript), dan kapital mini.',
    defaultText: 'Tiny Text',
    presetCategory: 'Cute',
    mainCategoryName: 'Tiny & Small Caps',
    getStyles: () => buildCurated50(tinyPrimary),
  },
  berkilau: {
    slug: 'berkilau',
    title: 'Font Berkilau / Sparkly Generator 2026',
    subtitle: 'Hiasi teks Anda dengan bintang ✨, glitter, dan ornamen berkilau aesthetic.',
    defaultText: 'Font Berkilau',
    presetCategory: 'Cute',
    mainCategoryName: 'Sparkling & Star Deco',
    getStyles: () => buildCurated50(berkilauPrimary),
  },
  angka: {
    slug: 'angka',
    title: 'Generator Angka Keren 2026',
    subtitle: 'Ubah angka biasa menjadi nomor melingkar, angka tebal math, dan digit monospace aesthetic.',
    defaultText: '2026',
    presetCategory: 'Popular',
    mainCategoryName: 'Circled & Math Digits',
    getStyles: () => buildCurated50(angkaPrimary),
  },
  garis: {
    slug: 'garis',
    title: 'Font Strikethrough & Garis Coret Generator 2026',
    subtitle: 'Buat teks dengan garis coret tengah (strikethrough), garis bawah (underline), tilde, dan slash.',
    defaultText: 'Garis Coret',
    presetCategory: 'Simple',
    mainCategoryName: 'Strikethrough & Underline',
    getStyles: () => buildCurated50(garisPrimary),
  },
  gelembung: {
    slug: 'gelembung',
    title: 'Bubble Font Generator - Tulisan Gelembung 2026',
    subtitle: 'Ubah teks biasa menjadi font gelembung melingkar (bubble outline dan solid black circle).',
    defaultText: 'Bubble Text',
    presetCategory: 'Cute',
    mainCategoryName: 'Bubble & Enclosed Circles',
    getStyles: () => buildCurated50(gelembungPrimary),
  },
  'gothic-fraktur': {
    slug: 'gothic-fraktur',
    title: 'Gothic & Fraktur Font Generator 2026',
    subtitle: 'Ubah teks biasa menjadi tulisan Gothic, Fraktur, Blackletter, dan Old English abad pertengahan.',
    defaultText: 'Gothic Blackletter',
    presetCategory: 'Gothic',
    mainCategoryName: 'Blackletter & Fraktur',
    getStyles: () => buildCurated50(gothicPrimary),
  },
  kotak: {
    slug: 'kotak',
    title: 'Square Box Font Generator - Tulisan Kotak 2026',
    subtitle: 'Ubah teks biasa menjadi huruf kotak outline dan solid square box aesthetic.',
    defaultText: 'Tulisan Kotak',
    presetCategory: 'Gaming',
    mainCategoryName: 'Square Boxed Fonts',
    getStyles: () => buildCurated50(kotakPrimary),
  },
  memutar: {
    slug: 'memutar',
    title: 'Font Terbalik & Upside Down Generator 2026',
    subtitle: 'Putar dan balikkan tulisan Anda (Upside Down & Mirror Text) secara otomatis.',
    defaultText: 'Tulisan Terbalik',
    presetCategory: 'Simple',
    mainCategoryName: 'Flipped & Upside Down',
    getStyles: () => buildCurated50(memutarPrimary),
  },
  menakutkan: {
    slug: 'menakutkan',
    title: 'Scary & Horror Font Generator 2026',
    subtitle: 'Ubah teks biasa menjadi gaya font seram, Zalgo heavy, horror gothic, dan demon skull.',
    defaultText: 'Demon Horror',
    presetCategory: 'Gothic',
    mainCategoryName: 'Scary & Zalgo Horror',
    getStyles: () => buildCurated50(menakutkanPrimary),
  },
  'nama-keren': {
    slug: 'nama-keren',
    title: 'Generator Nama Keren & Bio Aesthetic 2026',
    subtitle: 'Buat nama keren aesthetic untuk akun game dan media sosial dengan bingkai wings, mahkota, dan pedang.',
    defaultText: 'Pro Gamer',
    presetCategory: 'Gaming',
    mainCategoryName: 'Embellished Gaming Names',
    getStyles: () => buildCurated50(namaKerenPrimary),
  },
  terhubung: {
    slug: 'terhubung',
    title: 'Font Sambung & Cursive Generator 2026',
    subtitle: 'Konversi teks menjadi tulisan sambung indah, kaligrafi Cursive, Script, dan signature style.',
    defaultText: 'Tulisan Sambung',
    presetCategory: 'Fancy',
    mainCategoryName: 'Connected Script & Signature',
    getStyles: () => buildCurated50(terhubungPrimary),
  },
  glitch: {
    slug: 'glitch',
    title: 'Font Glitch & Zalgo Generator 2026',
    subtitle: 'Ubah teks biasa menjadi tulisan distorted, Zalgo cyber, horror creepy, dan cyber wings.',
    defaultText: 'Zalgo Cyber',
    presetCategory: 'Gaming',
    mainCategoryName: 'Glitch & Zalgo Cyber',
    getStyles: () => buildCurated50(glitchPrimary),
  },
  vintage: {
    slug: 'vintage',
    title: 'Font Vintage & Klasik Generator 2026',
    subtitle: 'Ubah teks biasa menjadi tulisan Vintage klasik, Old English, Fraktur Blackletter, dan Serif Retro.',
    defaultText: 'Vintage Classic',
    presetCategory: 'Gothic',
    mainCategoryName: 'Vintage & Retro Classic',
    getStyles: () => buildCurated50(vintagePrimary),
  },
  random: {
    slug: 'random',
    title: 'Font Random & Acak Generator 2026',
    subtitle: 'Acak gaya font dan ornamen teks Unicode secara otomatis (Mix & Match Styles).',
    defaultText: 'Random Mix',
    presetCategory: 'All',
    mainCategoryName: 'Random Mix & Match',
    getStyles: () => buildCurated50(randomPrimary),
  },
};

export function getFontPageConfig(pageSlug: string): FontPageConfig | undefined {
  return FONT_PAGE_CONFIGS[pageSlug];
}
