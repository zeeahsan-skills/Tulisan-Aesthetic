export interface HeartSymbolItem {
  symbol: string;
  name: string;
  category:
    | 'Simple Hearts'
    | 'Outline Hearts'
    | 'Colored Heart Emoji'
    | 'Cute Heart Combinations'
    | 'Aesthetic Heart Borders'
    | 'Decorative Hearts';
}

export const HEART_CATEGORIES_LIST = [
  'All Hearts',
  'Simple Hearts',
  'Outline Hearts',
  'Colored Heart Emoji',
  'Cute Heart Combinations',
  'Aesthetic Heart Borders',
  'Decorative Hearts',
] as const;

export const HEART_SYMBOLS_DATA: HeartSymbolItem[] = [
  // 1. Simple Hearts
  { symbol: '♥', name: 'Black Heart Suit', category: 'Simple Hearts' },
  { symbol: '♡', name: 'White Heart Outline', category: 'Simple Hearts' },
  { symbol: '❥', name: 'Rotated Heavy Black Heart Bullet', category: 'Simple Hearts' },
  { symbol: '❣', name: 'Heavy Heart Exclamation Mark Ornament', category: 'Simple Hearts' },
  { symbol: '❦', name: 'Floral Heart Hedera', category: 'Simple Hearts' },
  { symbol: '❧', name: 'Rotated Floral Heart Hedera', category: 'Simple Hearts' },
  { symbol: 'ᰔ', name: 'Cute Korean Dot Heart', category: 'Simple Hearts' },
  { symbol: 'დ', name: 'Georgian Letter Heart Shape', category: 'Simple Hearts' },
  { symbol: 'ღ', name: 'Georgian Letter Soft Heart', category: 'Simple Hearts' },
  { symbol: '🎔', name: 'Heart with Floral Tip', category: 'Simple Hearts' },
  { symbol: '🎕', name: 'Bouquet Heart Floret', category: 'Simple Hearts' },
  { symbol: '☙', name: 'Reversed Rotated Floral Heart', category: 'Simple Hearts' },
  { symbol: '𓆩♡𓆪', name: 'Winged Outline Heart', category: 'Simple Hearts' },
  { symbol: 'ʚ♡ɞ', name: 'Angel Wings Heart', category: 'Simple Hearts' },
  { symbol: '౨ৎ', name: 'Cute Coquette Ribbon Bow', category: 'Simple Hearts' },

  // 2. Outline Hearts
  { symbol: '♡', name: 'Classic Hollow Heart', category: 'Outline Hearts' },
  { symbol: 'ᰔ', name: 'Minimalist Micro Outline Heart', category: 'Outline Hearts' },
  { symbol: '♡♡', name: 'Twin Outline Hearts', category: 'Outline Hearts' },
  { symbol: '♡♡♡', name: 'Triple Hollow Hearts', category: 'Outline Hearts' },
  { symbol: '˗ˏˋ ♡ ˎˊ˗', name: 'Radiant Sparkling Outline Heart', category: 'Outline Hearts' },
  { symbol: '꒰ ♡ ꒱', name: 'Embraced Soft Heart', category: 'Outline Hearts' },
  { symbol: '₍ᐢ. ̫.ᐢ₎ ♡', name: 'Bunny Offering Heart', category: 'Outline Hearts' },
  { symbol: 'ദ', name: 'Rounded Petite Heart Curve', category: 'Outline Hearts' },
  { symbol: 'ෆ', name: 'Korean Heart Font Syllable', category: 'Outline Hearts' },
  { symbol: '˚୨୧⋆｡˚ ♡', name: 'Ribbon Princess Heart', category: 'Outline Hearts' },
  { symbol: '⋆˚🐾˖° ♡', name: 'Puppy Paw Heart Accent', category: 'Outline Hearts' },
  { symbol: '⋆⁺₊⋆ ♡ ⋆⁺₊⋆', name: 'Dreamy Star Hollow Heart', category: 'Outline Hearts' },
  { symbol: '˙ᵕ˙ ♡', name: 'Smiley Cute Outline Heart', category: 'Outline Hearts' },

  // 3. Colored Heart Emoji
  { symbol: '❤️', name: 'Red Heart Emoji', category: 'Colored Heart Emoji' },
  { symbol: '🧡', name: 'Orange Heart Emoji', category: 'Colored Heart Emoji' },
  { symbol: '💛', name: 'Yellow Heart Emoji', category: 'Colored Heart Emoji' },
  { symbol: '💚', name: 'Green Heart Emoji', category: 'Colored Heart Emoji' },
  { symbol: '💙', name: 'Blue Heart Emoji', category: 'Colored Heart Emoji' },
  { symbol: '💜', name: 'Purple Heart Emoji', category: 'Colored Heart Emoji' },
  { symbol: '🖤', name: 'Black Heart Emoji', category: 'Colored Heart Emoji' },
  { symbol: '🤍', name: 'White Heart Emoji', category: 'Colored Heart Emoji' },
  { symbol: '🤎', name: 'Brown Heart Emoji', category: 'Colored Heart Emoji' },
  { symbol: '💔', name: 'Broken Heart Emoji', category: 'Colored Heart Emoji' },
  { symbol: '❤️‍🔥', name: 'Heart on Fire', category: 'Colored Heart Emoji' },
  { symbol: '❤️‍🩹', name: 'Mending Bandaged Heart', category: 'Colored Heart Emoji' },
  { symbol: '💕', name: 'Two Hearts Floating', category: 'Colored Heart Emoji' },
  { symbol: '💞', name: 'Revolving Hearts', category: 'Colored Heart Emoji' },
  { symbol: '💓', name: 'Beating Heart Pulse', category: 'Colored Heart Emoji' },
  { symbol: '💗', name: 'Growing Pink Heart', category: 'Colored Heart Emoji' },
  { symbol: '💖', name: 'Sparkling Heart with Glints', category: 'Colored Heart Emoji' },
  { symbol: '💘', name: 'Heart with Cupid Arrow', category: 'Colored Heart Emoji' },
  { symbol: '💝', name: 'Heart with Gift Ribbon', category: 'Colored Heart Emoji' },
  { symbol: '💟', name: 'Heart Decoration Purple Stamp', category: 'Colored Heart Emoji' },
  { symbol: '❣️', name: 'Heart Exclamation Mark Emoji', category: 'Colored Heart Emoji' },
  { symbol: '🫀', name: 'Anatomical Medical Heart', category: 'Colored Heart Emoji' },

  // 4. Cute Heart Combinations
  { symbol: '♡(>ᴗ<)♡', name: 'Excited Happy Heart Face', category: 'Cute Heart Combinations' },
  { symbol: '(˶ᵔ ᵕ ᵔ˶) ♡', name: 'Blushing Soft Heart Kaomoji', category: 'Cute Heart Combinations' },
  { symbol: '( ˘ ³˘)♥', name: 'Blowing Kisses Heart', category: 'Cute Heart Combinations' },
  { symbol: '♡⸜(˶˃ ᵕ ˂˶)⸝♡', name: 'Joyful Hugging Heart Kaomoji', category: 'Cute Heart Combinations' },
  { symbol: '(♡´౪`♡)', name: 'Silly Lovestruck Face', category: 'Cute Heart Combinations' },
  { symbol: '( ｡•́‿•̀｡)♡', name: 'Tender Sweet Gentle Heart', category: 'Cute Heart Combinations' },
  { symbol: '♡*(^o^)/*♡', name: 'Cheering Double Hearts', category: 'Cute Heart Combinations' },
  { symbol: '(♡˙︶˙♡)', name: 'Peaceful Smiling Heart', category: 'Cute Heart Combinations' },
  { symbol: '(´｡• ᵕ •｡`) ♡', name: 'Adoring Shy Lovestruck Face', category: 'Cute Heart Combinations' },
  { symbol: '（*´▽｀*）♥', name: 'Happy In Love Smile', category: 'Cute Heart Combinations' },
  { symbol: '(灬♥ω♥灬)', name: 'Blushing Cat Heart Face', category: 'Cute Heart Combinations' },
  { symbol: '(✿ ♥‿♥)', name: 'Flower Lovestruck Eyes', category: 'Cute Heart Combinations' },
  { symbol: '♡〜٩( ˃▿˂ )۶〜♡', name: 'Dance of Love Kaomoji', category: 'Cute Heart Combinations' },
  { symbol: '૮ ˶ᵔ ᵕ ᵔ˶ ა ♡', name: 'Cute Puppy with Heart', category: 'Cute Heart Combinations' },
  { symbol: '₍ᐢ. ̫.ᐢ₎ ♡', name: 'Bunny Love Face', category: 'Cute Heart Combinations' },
  { symbol: '(๑ > ᴗ < ๑)♡', name: 'Sparkling Cute Heart Girl', category: 'Cute Heart Combinations' },
  { symbol: '( ๑ ❛ ڡ ❛ ๑ )❤', name: 'Wink Love Tongue Kaomoji', category: 'Cute Heart Combinations' },
  { symbol: '♡(◡‿◡✿)', name: 'Sweet Dreaming Heart', category: 'Cute Heart Combinations' },
  { symbol: '(ღ˘⌣˘ღ)', name: 'Warm Cozy Heart Hug', category: 'Cute Heart Combinations' },
  { symbol: '♡(੭´͈ ᐜ `͈)੭', name: 'Sending Warm Hearts', category: 'Cute Heart Combinations' },

  // 5. Aesthetic Heart Borders
  { symbol: '♡ ─────── ♡', name: 'Clean Solid Line Heart Border', category: 'Aesthetic Heart Borders' },
  { symbol: 'ﮩ٨ـﮩﮩ٨ـ♡ﮩ٨ـﮩﮩ٨ـ', name: 'Heartbeat Lifeline Electrocardiogram', category: 'Aesthetic Heart Borders' },
  { symbol: '୨୧ ₊˚. ♡ .˚₊ ୨୧', name: 'Coquette Bow Ribbon Heart Divider', category: 'Aesthetic Heart Borders' },
  { symbol: '‧͙⁺˚*･༓☾♡☽༓･*˚⁺‧͙', name: 'Celestial Moon Star Heart Border', category: 'Aesthetic Heart Borders' },
  { symbol: '✧･ﾟ: *✧･ﾟ:* ♡ *:･ﾟ✧*:･ﾟ✧', name: 'Stardust Sparkle Shimmer Heart', category: 'Aesthetic Heart Borders' },
  { symbol: '♡ ─── ୨୧ ─── ♡', name: 'Ribbon Center Heart Line', category: 'Aesthetic Heart Borders' },
  { symbol: '*ੈ✩‧₊˚ ♡ ˚₊‧✩*', name: 'Galaxy Star Halo Heart', category: 'Aesthetic Heart Borders' },
  { symbol: 'ʚɞ ♡ ʚɞ', name: 'Butterfly Wings Double Border', category: 'Aesthetic Heart Borders' },
  { symbol: '꧁༺ ♡ ༻꧂', name: 'Royal Wings Emblem Heart', category: 'Aesthetic Heart Borders' },
  { symbol: '★彡 ♡ 彡★', name: 'Shooting Star Pair Heart', category: 'Aesthetic Heart Borders' },
  { symbol: '『 ♡ 』', name: 'Japanese Corner Bracket Heart', category: 'Aesthetic Heart Borders' },
  { symbol: '【 ♡ 】', name: 'Bold Japanese Enclosed Heart', category: 'Aesthetic Heart Borders' },
  { symbol: '« ♡ »', name: 'French Guilloche Quotation Heart', category: 'Aesthetic Heart Borders' },
  { symbol: '─── ⋆⋅☆⋅⋆ ── ♡', name: 'Constellation Line Heart Finisher', category: 'Aesthetic Heart Borders' },
  { symbol: '°˖✧◝(⁰▿⁰)◜✧˖° ♡', name: 'Triumphant Glowing Heart Banner', category: 'Aesthetic Heart Borders' },
  { symbol: '˗ˏˋ ★ ♡ ★ ˎˊ˗', name: 'Triple Starlight Heart Banner', category: 'Aesthetic Heart Borders' },
  { symbol: '♡̷̷̷', name: 'Stacked Mini Hearts Accent', category: 'Aesthetic Heart Borders' },
  { symbol: '♡ ｡˚ ❀ ｡˚ ♡', name: 'Floral Garden Heart Line', category: 'Aesthetic Heart Borders' },

  // 6. Decorative Hearts
  { symbol: '❦', name: 'Floral Heart Leaf (Hedera)', category: 'Decorative Hearts' },
  { symbol: '❧', name: 'Rotated Hedera Heart Flourish', category: 'Decorative Hearts' },
  { symbol: '☙', name: 'Reversed Hedera Floral Heart', category: 'Decorative Hearts' },
  { symbol: '🎔', name: 'Ornamental Heart Calligraphy Tip', category: 'Decorative Hearts' },
  { symbol: '🎕', name: 'Decorative Floral Heart Stem', category: 'Decorative Hearts' },
  { symbol: 'დ', name: 'Georgian Enclosed Heart Flourish', category: 'Decorative Hearts' },
  { symbol: 'ღ', name: 'Georgian Open Curled Heart', category: 'Decorative Hearts' },
  { symbol: 'ෆ', name: 'Korean Rounded Heart Glyph', category: 'Decorative Hearts' },
  { symbol: '౨ৎ', name: 'Coquette Lacy Ribbon Loop', category: 'Decorative Hearts' },
  { symbol: 'ꕥ', name: 'Five Petaled Floral Heart Rosette', category: 'Decorative Hearts' },
  { symbol: '𓆩♥𓆪', name: 'Dark Gothic Winged Solid Heart', category: 'Decorative Hearts' },
  { symbol: 'ʚ♥ɞ', name: 'Angel Winged Solid Black Heart', category: 'Decorative Hearts' },
  { symbol: '♡*:.｡. .｡.:*♡', name: 'Decorative Shimmer Dotted Heart Border', category: 'Decorative Hearts' },
  { symbol: '𓍢ִ໋🌷͙֒ ♡', name: 'Tulip Bouquet Heart Cluster', category: 'Decorative Hearts' },
  { symbol: '˚ʚ♡ɞ˚', name: 'Mini Fairy Wings Heart Motif', category: 'Decorative Hearts' },
  { symbol: '˙ᵕ˙ 🤍', name: 'Soft Smile Pure White Heart', category: 'Decorative Hearts' },
  { symbol: 'ೀ', name: 'Sinhala Aesthetic Ribbon Curlicue', category: 'Decorative Hearts' },
  { symbol: '𑁍', name: 'Tibetan Lotus Heart Petal', category: 'Decorative Hearts' },
];
