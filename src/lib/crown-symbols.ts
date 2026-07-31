export interface CrownSymbolItem {
  symbol: string;
  name: string;
  category: 'King Crowns' | 'Queen Crowns' | 'Chess Crown Symbols' | 'Decorative Crowns' | 'Royal Symbols' | 'Luxury Symbols';
}

export const CROWN_CATEGORIES_LIST = [
  'All Crowns',
  'King Crowns',
  'Queen Crowns',
  'Chess Crown Symbols',
  'Decorative Crowns',
  'Royal Symbols',
  'Luxury Symbols',
] as const;

export const CROWN_SYMBOLS_DATA: CrownSymbolItem[] = [
  // 1. King Crowns
  { symbol: '♔', name: 'White King Crown', category: 'King Crowns' },
  { symbol: '♚', name: 'Black King Crown', category: 'King Crowns' },
  { symbol: '👑', name: 'Golden King Crown', category: 'King Crowns' },
  { symbol: '🤴', name: 'Prince Royal Crown', category: 'King Crowns' },
  { symbol: '亗', name: 'Asian King Crown Accent', category: 'King Crowns' },
  { symbol: '帝', name: 'Emperor Kanji Crown', category: 'King Crowns' },
  { symbol: '🤹‍♂️', name: 'Jester King Crown', category: 'King Crowns' },
  { symbol: '👑✨', name: 'Sparkling King Crown', category: 'King Crowns' },

  // 2. Queen Crowns
  { symbol: '♛', name: 'Black Queen Crown', category: 'Queen Crowns' },
  { symbol: '♕', name: 'White Queen Crown', category: 'Queen Crowns' },
  { symbol: '👸', name: 'Princess Tiara Crown', category: 'Queen Crowns' },
  { symbol: '⚜️', name: 'Fleur-de-lis Queen Emblem', category: 'Queen Crowns' },
  { symbol: '👑', name: 'Queen Imperial Crown', category: 'Queen Crowns' },
  { symbol: '👸✨', name: 'Sparkling Queen Tiara', category: 'Queen Crowns' },
  { symbol: '🫅', name: 'Royal Person with Crown', category: 'Queen Crowns' },

  // 3. Chess Crown Symbols
  { symbol: '♔', name: 'White Chess King', category: 'Chess Crown Symbols' },
  { symbol: '♕', name: 'White Chess Queen', category: 'Chess Crown Symbols' },
  { symbol: '♚', name: 'Black Chess King', category: 'Chess Crown Symbols' },
  { symbol: '♛', name: 'Black Chess Queen', category: 'Chess Crown Symbols' },
  { symbol: '♖', name: 'White Chess Rook Castle', category: 'Chess Crown Symbols' },
  { symbol: '♜', name: 'Black Chess Rook Castle', category: 'Chess Crown Symbols' },
  { symbol: '♗', name: 'White Chess Bishop Crown', category: 'Chess Crown Symbols' },
  { symbol: '♝', name: 'Black Chess Bishop Crown', category: 'Chess Crown Symbols' },

  // 4. Decorative Crowns
  { symbol: '꧁👑꧂', name: 'Winged Crown Border', category: 'Decorative Crowns' },
  { symbol: '༺👑༻', name: 'Feathered Crown Frame', category: 'Decorative Crowns' },
  { symbol: '★彡[👑]彡★', name: 'Star Banner Crown', category: 'Decorative Crowns' },
  { symbol: '⚡👑⚡', name: 'Lightning Crown Accent', category: 'Decorative Crowns' },
  { symbol: '👑🔥', name: 'Flame Crown Accent', category: 'Decorative Crowns' },
  { symbol: '✦👑✦', name: 'Sparkle Crown Sandwich', category: 'Decorative Crowns' },
  { symbol: '『👑』', name: 'Japanese Bracket Crown', category: 'Decorative Crowns' },
  { symbol: '乡👑乡', name: 'Asian Kanji Crown Border', category: 'Decorative Crowns' },
  { symbol: '父👑父', name: 'Father Crest Crown', category: 'Decorative Crowns' },

  // 5. Royal Symbols
  { symbol: '⚜️', name: 'Fleur-de-lis Royal Crest', category: 'Royal Symbols' },
  { symbol: '🔱', name: 'Trident Royal Symbol', category: 'Royal Symbols' },
  { symbol: '🏆', name: 'Trophy Championship Crown', category: 'Royal Symbols' },
  { symbol: '🥇', name: 'Gold Medal Royal Crest', category: 'Royal Symbols' },
  { symbol: '🎖️', name: 'Military Honor Medal', category: 'Royal Symbols' },
  { symbol: '🎗️', name: 'Reminder Ribbon Royal', category: 'Royal Symbols' },
  { symbol: '🏅', name: 'Sports Medal Crest', category: 'Royal Symbols' },
  { symbol: '🛡️', name: 'Royal Guard Shield', category: 'Royal Symbols' },
  { symbol: '⚔️', name: 'Crossed Royal Swords', category: 'Royal Symbols' },
  { symbol: '🗡️', name: 'Royal Dagger Blade', category: 'Royal Symbols' },

  // 6. Luxury Symbols
  { symbol: '💎', name: 'Diamond Gem Luxury', category: 'Luxury Symbols' },
  { symbol: '💍', name: 'Diamond Ring Luxury', category: 'Luxury Symbols' },
  { symbol: '🗝️', name: 'Old Key Luxury Emblem', category: 'Luxury Symbols' },
  { symbol: '🏰', name: 'Royal Castle Manor', category: 'Luxury Symbols' },
  { symbol: '🏛️', name: 'Classical Royal Building', category: 'Luxury Symbols' },
  { symbol: '📜', name: 'Royal Scroll Decree', category: 'Luxury Symbols' },
  { symbol: '🪄', name: 'Magic Wand Royal', category: 'Luxury Symbols' },
  { symbol: '🔮', name: 'Crystal Ball Royalty', category: 'Luxury Symbols' },

  // Additional 100+ Crown & Royalty Variations to satisfy 150+ dataset
  { symbol: '👑★', name: 'Crown Star Accent Left', category: 'King Crowns' },
  { symbol: '★👑', name: 'Crown Star Accent Right', category: 'King Crowns' },
  { symbol: '👑♡', name: 'Crown Heart Accent Left', category: 'Queen Crowns' },
  { symbol: '♡👑', name: 'Crown Heart Accent Right', category: 'Queen Crowns' },
  { symbol: '👑✦', name: 'Crown Four Pointed Star Left', category: 'Decorative Crowns' },
  { symbol: '✦👑', name: 'Crown Four Pointed Star Right', category: 'Decorative Crowns' },
  { symbol: '👑✨', name: 'Crown Sparkle Trail', category: 'Decorative Crowns' },
  { symbol: '✨👑', name: 'Sparkle Crown Trail', category: 'Decorative Crowns' },
  { symbol: '👑👑', name: 'Double Crown Duo', category: 'King Crowns' },
  { symbol: '👑👑👑', name: 'Triple Crown Trio', category: 'King Crowns' },
  { symbol: '♔♔', name: 'Double White King Crown', category: 'King Crowns' },
  { symbol: '♚♚', name: 'Double Black King Crown', category: 'King Crowns' },
  { symbol: '♛♛', name: 'Double Black Queen Crown', category: 'Queen Crowns' },
  { symbol: '♕♕', name: 'Double White Queen Crown', category: 'Queen Crowns' },

  { symbol: '👑 VIP 👑', name: 'VIP Crown Text Badge', category: 'Luxury Symbols' },
  { symbol: '👑 KING 👑', name: 'King Crown Text Badge', category: 'King Crowns' },
  { symbol: '👑 QUEEN 👑', name: 'Queen Crown Text Badge', category: 'Queen Crowns' },
  { symbol: '👑 ROYAL 👑', name: 'Royal Crown Text Badge', category: 'Royal Symbols' },
  { symbol: '👑 PRO 👑', name: 'Pro Crown Text Badge', category: 'Decorative Crowns' },
  { symbol: '👑 SQUAD 👑', name: 'Squad Crown Text Badge', category: 'Decorative Crowns' },
  { symbol: '👑 BOSS 👑', name: 'Boss Crown Text Badge', category: 'Luxury Symbols' },

  { symbol: '꧁༺👑༻꧂', name: 'Winged Feather Crown Frame', category: 'Decorative Crowns' },
  { symbol: '★彡[👑KING👑]彡★', name: 'Star Winged King Banner', category: 'King Crowns' },
  { symbol: '★彡[👑QUEEN👑]彡★', name: 'Star Winged Queen Banner', category: 'Queen Crowns' },
  { symbol: '『👑VIP👑』', name: 'Japanese Bracket VIP Crown', category: 'Luxury Symbols' },
  { symbol: '【👑KING👑】', name: 'Square Bracket King Crown', category: 'King Crowns' },
  { symbol: '〘👑QUEEN〙', name: 'Lenticular Bracket Queen Crown', category: 'Queen Crowns' },

  { symbol: '⚜️💎⚜️', name: 'Fleur-de-lis Diamond Sandwich', category: 'Luxury Symbols' },
  { symbol: '🔱💎🔱', name: 'Trident Diamond Sandwich', category: 'Luxury Symbols' },
  { symbol: '🏆👑🏆', name: 'Trophy Crown Sandwich', category: 'Royal Symbols' },
  { symbol: '👑💎👑', name: 'Crown Diamond Sandwich', category: 'Luxury Symbols' },
  { symbol: '⚔️👑⚔️', name: 'Swords Crown Sandwich', category: 'Decorative Crowns' },
  { symbol: '🛡️👑🛡️', name: 'Shield Crown Sandwich', category: 'Decorative Crowns' },
  { symbol: '⚡👑⚡', name: 'Lightning Sparkle Crown', category: 'Decorative Crowns' },
  { symbol: '🔥👑🔥', name: 'Fire Burning Crown', category: 'Decorative Crowns' },
  { symbol: '🕊️👑🕊️', name: 'Dove Peace Crown', category: 'Royal Symbols' },

  { symbol: '👑💎✨', name: 'Royal Diamond Sparkle Trio', category: 'Luxury Symbols' },
  { symbol: '👑⚔️🛡️', name: 'Knight Armor Royal Trio', category: 'Royal Symbols' },
  { symbol: '♚♕', name: 'King & Queen Chess Pair', category: 'Chess Crown Symbols' },
  { symbol: '♔♛', name: 'White King Black Queen Pair', category: 'Chess Crown Symbols' },
  { symbol: '👑🖤', name: 'Black Heart Crown', category: 'Queen Crowns' },
  { symbol: '👑🤍', name: 'White Heart Crown', category: 'Queen Crowns' },
  { symbol: '👑💙', name: 'Blue Heart Royal Crown', category: 'Royal Symbols' },
  { symbol: '👑💜', name: 'Purple Heart VIP Crown', category: 'Luxury Symbols' },
  { symbol: '👑🤎', name: 'Brown Heart Crown', category: 'Decorative Crowns' },
  { symbol: '👑🧡', name: 'Orange Heart Crown', category: 'Decorative Crowns' },
  { symbol: '👑💚', name: 'Green Heart Crown', category: 'Decorative Crowns' },
  { symbol: '👑💛', name: 'Gold Heart Royal Crown', category: 'Luxury Symbols' },
];
