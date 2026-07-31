// Aesthetic Symbols, Kaomoji, Emojis database

export interface SymbolCategory {
  id: string;
  name: string;
  icon: string;
  count: number;
  items: string[];
}

export interface PopularSymbol {
  symbol: string;
  name: string;
  category: string;
  description: string;
}

export const POPULAR_SYMBOLS_LIST: PopularSymbol[] = [
  { symbol: '★', name: 'Black Star', category: 'Stars', description: 'Simbol bintang hitam solid estetik untuk bio & nickname.' },
  { symbol: '☆', name: 'White Star', category: 'Stars', description: 'Simbol bintang garis transparan modern.' },
  { symbol: '♡', name: 'White Heart', category: 'Hearts', description: 'Simbol hati garis manis favorit pengguna Instagram & TikTok.' },
  { symbol: '♥', name: 'Black Heart', category: 'Hearts', description: 'Simbol hati solid klasik untuk bio & status.' },
  { symbol: '♛', name: 'Black Queen Crown', category: 'Crowns', description: 'Simbol mahkota ratu anggun untuk akun VIP & squad.' },
  { symbol: '♔', name: 'White King Crown', category: 'Crowns', description: 'Simbol mahkota raja mewah untuk PUBG & MLBB.' },
  { symbol: '✿', name: 'Black Florette Flower', category: 'Flowers', description: 'Simbol bunga aesthetic kelopak mekar.' },
  { symbol: '❀', name: 'White Florette Flower', category: 'Flowers', description: 'Simbol bunga sakura jepang imut.' },
  { symbol: '➜', name: 'Heavy Right Arrow', category: 'Arrows', description: 'Simbol panah tebal penunjuk arah penegas link bio.' },
  { symbol: '➤', name: 'Black Right Arrowhead', category: 'Arrows', description: 'Simbol panah segitiga tegas modern.' },
];

export const SYMBOL_CATEGORIES: SymbolCategory[] = [
  {
    id: 'hearts',
    name: 'Heart Symbols',
    icon: 'Heart',
    count: 35,
    items: [
      '♡', '♥', '❥', '❣', '❦', '❧', '🎔', '🎕', '☙', '🎗', '❤', '💓',
      '💔', '💕', '💖', '💗', '💘', '💙', '💚', '💛', '💜', '💝', '💞',
      '💟', '❣️', '🤎', '🤍', '🧡', '🫀', '🫁', '🫀', '💔', '🏩', '💌', '💒'
    ],
  },
  {
    id: 'stars',
    name: 'Star Symbols',
    icon: 'Star',
    count: 36,
    items: [
      '★', '☆', '✦', '✧', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰',
      '⁂', '⁎', '⁑', '✵', '✶', '✷', '✸', '✹', '✺', '🟌', '✨',
      '🌟', '💫', '⭐', '🌠', '🔯', '⚡', '🌌', '✴️', '🌃', '❇️', '❇', '❈', '🎆'
    ],
  },
  {
    id: 'crowns',
    name: 'Crown Symbols',
    icon: 'Crown',
    count: 16,
    items: [
      '♛', '♔', '♕', '♚', '👑', '亗', '帝', '🏆', '🥇', '🎖️', '🎗️', '⚜️', '🏅', '🔱', '👑', '🤴'
    ],
  },
  {
    id: 'flowers',
    name: 'Flower Symbols',
    icon: 'Flower2',
    count: 28,
    items: [
      '✿', '❀', '❁', '❂', '❃', '❇', '❈', '❉', '❊', '❋', '✽', '✾',
      '🌿', '🌸', '🌹', '🌺', '🌻', '🌼', '🌷', '🌱', '🍃', '🍁', '🍀', '🏵️',
      '🪷', '🌾', '🌴', '🌲'
    ],
  },
  {
    id: 'arrows',
    name: 'Arrow Symbols',
    icon: 'ArrowRight',
    count: 32,
    items: [
      '➜', '➤', '➔', '➘', '➙', '➚', '➛', '➜', '➝', '➞', '➟', '🠊',
      '🠋', '🠌', '🠍', '🠎', '🠏', '🠐', '🠑', '🠒', '🠓', '🠔', '🠕', '🠖',
      '🠗', '🠘', '🠙', '🏹', '💘', '➵', '➲', '➪'
    ],
  },
  {
    id: 'music',
    name: 'Music Symbols',
    icon: 'Music',
    count: 20,
    items: [
      '♪', '♫', '♬', '♭', '♮', '♯', '🎵', '🎶', '🎷', '🎸',
      '🎹', '🎺', '🎻', '🪕', '🥁', '🎧', '🎙️', '🎚️', '🎛️', '📻'
    ],
  },
  {
    id: 'currency',
    name: 'Currency Symbols',
    icon: 'Coins',
    count: 24,
    items: [
      '$', '€', '£', '¥', '₹', '₱', '₩', '฿', '₫', '₴',
      '₦', '₲', '₵', '₡', '💷', '💶', '💵', '💴', '💰', '🪙',
      '💎', '💳', '🧾', '💲'
    ],
  },
  {
    id: 'math',
    name: 'Mathematical Symbols',
    icon: 'Calculator',
    count: 30,
    items: [
      '+', '−', '×', '÷', '=', '≠', '≈', '≡', '≤', '≥',
      '±', '∞', '∫', '∑', '∏', '√', '∂', '∇', '∆', '∈',
      '∉', '⊂', '⊃', '∪', '∩', '⊥', '∠', '°', 'π', 'Ω'
    ],
  },
  {
    id: 'zodiac',
    name: 'Zodiac Symbols',
    icon: 'Compass',
    count: 14,
    items: [
      '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓', '⛎', '🌌'
    ],
  },
  {
    id: 'emojis',
    name: 'Emoji Symbols',
    icon: 'Sparkles',
    count: 30,
    items: [
      '🎀', '🧸', '☁️', '🕊️', '🍰', '☕', '🍓', '🍒', '🎨', '🕯️',
      '🌙', '🧋', '🍡', '🍙', '🪄', '🛸', '🪐', '🎮', '🎧', '🎟️',
      '🔮', '🪞', '🧸', '🍧', '🧁', '🍨', '🍿', '🍩', '🍪', '🥞'
    ],
  },
  {
    id: 'kaomoji',
    name: 'Kaomoji',
    icon: 'Smile',
    count: 24,
    items: [
      '(⁠っ⁠.⁠❛⁠ ⁠.⁠❛⁠)⁠っ', '(⁠⌐⁠■⁠-⁠■⁠)', '(⁠◕⁠ᴗ⁠◕⁠✿⁠)', '(⁠◠⁠‿⁠◕⁠)',
      'ʕ⁠·⁠ᴥ⁠·⁠ʔ', '(⁠•⁠‿⁠•⁠)', '(⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧', '(⁠ʃ⁠ƪ⁠＾⁠3⁠＾⁠)',
      '¯⁠\⁠_⁠(⁠ツ⁠)⁠_⁠/⁠¯', '(⁠;⁠ŏ⁠﹏⁠ŏ⁠)', '(⁠o⁠_⁠O⁠)', '(⁠-⁠_⁠-⁠;⁠)',
      '(⁠ﾉ⁠◕⁠ヮ⁠◕⁠)⁠ﾉ⁠*⁠.⁠✧', '(⁠´⁠ε⁠｀⁠ ⁠)', 'ᶠᶠᵒʳᵉᵛᵉʳ', '(⁠⁠•⁠ө⁠•⁠⁠)',
      '(⁠/⁠¯⁠◡⁠o⁠)⁠/⁠¯', '(⁠ ⁠T⁠_⁠T⁠ ⁠)', '٩(◕‿◕｡)۶', '(⁠-⁠_⁠-⁠)⁠v',
      '(⁠人⁠•͈⁠ᴗ⁠•͈⁠)', 'UwU', 'OwO', '(⁠•⁠ө⁠•⁠)♡'
    ],
  },
  {
    id: 'borders',
    name: 'Decorative Borders',
    icon: 'SquareDashed',
    count: 24,
    items: [
      '꧁', '꧂', '༺', '༻', '★彡', '彡★', '『', '』', '【', '】',
      '〖', '〗', '〘', '〙', '⚔️', '亗', '帝', '乡', '父', '⦇',
      '⦈', '«', '»', '‹'
    ],
  },
];
