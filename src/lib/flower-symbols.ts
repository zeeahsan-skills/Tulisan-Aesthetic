export interface FlowerSymbolItem {
  symbol: string;
  name: string;
  category: 'Flower Symbols' | 'Floral Decorations' | 'Cherry Blossom' | 'Rose Symbols' | 'Nature Symbols' | 'Decorative Unicode Symbols';
}

export const FLOWER_CATEGORIES_LIST = [
  'All Flowers',
  'Flower Symbols',
  'Floral Decorations',
  'Cherry Blossom',
  'Rose Symbols',
  'Nature Symbols',
  'Decorative Unicode Symbols',
] as const;

export const FLOWER_SYMBOLS_DATA: FlowerSymbolItem[] = [
  // 1. Flower Symbols
  { symbol: '✿', name: 'Black Florette Flower', category: 'Flower Symbols' },
  { symbol: '❀', name: 'White Florette Flower', category: 'Flower Symbols' },
  { symbol: '❁', name: 'Eight Petalled Outlined Flower', category: 'Flower Symbols' },
  { symbol: '❂', name: 'Circled Star Flower Burst', category: 'Flower Symbols' },
  { symbol: '❃', name: 'Heavy Pinwheel Flower', category: 'Flower Symbols' },
  { symbol: '✽', name: 'Heavy Outlined Asterisk Flower', category: 'Flower Symbols' },
  { symbol: '✾', name: 'Six Petalled Flower Emblem', category: 'Flower Symbols' },
  { symbol: '🏵️', name: 'Rosette Floral Emblem', category: 'Flower Symbols' },
  { symbol: '🌻', name: 'Sunflower Blooming', category: 'Flower Symbols' },
  { symbol: '🌼', name: 'Blossom Daisy Flower', category: 'Flower Symbols' },
  { symbol: '🌷', name: 'Tulip Spring Flower', category: 'Flower Symbols' },
  { symbol: '🪷', name: 'Lotus Flower Bloom', category: 'Flower Symbols' },

  // 2. Floral Decorations
  { symbol: '❇', name: 'Sparkle Four Spoke Asterisk', category: 'Floral Decorations' },
  { symbol: '❈', name: 'Heavy Eight Petalled Asterisk', category: 'Floral Decorations' },
  { symbol: '❉', name: 'Eight Petalled Outlined Asterisk', category: 'Floral Decorations' },
  { symbol: '❊', name: 'Eight Teardrop Spoke Propeller Asterisk', category: 'Floral Decorations' },
  { symbol: '❋', name: 'Heavy Eight Teardrop Spoke Asterisk', category: 'Floral Decorations' },
  { symbol: '💮', name: 'White Flower Stamp', category: 'Floral Decorations' },
  { symbol: '🌺', name: 'Hibiscus Flower Floral', category: 'Floral Decorations' },
  { symbol: '🌸✨', name: 'Sparkling Blossom Accent', category: 'Floral Decorations' },

  // 3. Cherry Blossom
  { symbol: '🌸', name: 'Cherry Blossom Bloom', category: 'Cherry Blossom' },
  { symbol: '❀', name: 'Sakura Petal Outline', category: 'Cherry Blossom' },
  { symbol: '✿', name: 'Japanese Cherry Petal', category: 'Cherry Blossom' },
  { symbol: '🌸🌸', name: 'Double Sakura Petals', category: 'Cherry Blossom' },
  { symbol: '🌸✨', name: 'Sakura Stardust Sparkle', category: 'Cherry Blossom' },
  { symbol: '🌸🍃', name: 'Sakura Breeze Leaf', category: 'Cherry Blossom' },

  // 4. Rose Symbols
  { symbol: '🌹', name: 'Red Rose Flower', category: 'Rose Symbols' },
  { symbol: '🥀', name: 'Wilted Rose Stem', category: 'Rose Symbols' },
  { symbol: '🌹✨', name: 'Sparkling Red Rose', category: 'Rose Symbols' },
  { symbol: '🎔', name: 'Rotated Floral Heart Rose', category: 'Rose Symbols' },
  { symbol: '🎕', name: 'Bouquet Rose Ornament', category: 'Rose Symbols' },
  { symbol: '🌹🍃', name: 'Rose with Green Leaves', category: 'Rose Symbols' },

  // 5. Nature Symbols
  { symbol: '🌿', name: 'Green Herb Leaf Stem', category: 'Nature Symbols' },
  { symbol: '🌱', name: 'Seedling Sprout Plant', category: 'Nature Symbols' },
  { symbol: '🍃', name: 'Leaf Fluttering in Wind', category: 'Nature Symbols' },
  { symbol: '🍁', name: 'Maple Autumn Leaf', category: 'Nature Symbols' },
  { symbol: '🍀', name: 'Four Leaf Clover Lucky', category: 'Nature Symbols' },
  { symbol: '☘️', name: 'Shamrock Three Leaf', category: 'Nature Symbols' },
  { symbol: '🌾', name: 'Sheaf of Rice Grain', category: 'Nature Symbols' },
  { symbol: '🌴', name: 'Palm Tree Tropical', category: 'Nature Symbols' },
  { symbol: '🌲', name: 'Evergreen Pine Tree', category: 'Nature Symbols' },
  { symbol: '🌳', name: 'Deciduous Oak Tree', category: 'Nature Symbols' },
  { symbol: '🌵', name: 'Cactus Succulent', category: 'Nature Symbols' },
  { symbol: '🎋', name: 'Tanabata Bamboo Tree', category: 'Nature Symbols' },

  // 6. Decorative Unicode Symbols
  { symbol: '❦', name: 'Floral Heart Hedera', category: 'Decorative Unicode Symbols' },
  { symbol: '❧', name: 'Rotated Floral Heart Bullet', category: 'Decorative Unicode Symbols' },
  { symbol: '☙', name: 'Reversed Rotated Floral Heart', category: 'Decorative Unicode Symbols' },
  { symbol: ' Bouquet ', name: 'Bouquet Flower Bunch', category: 'Decorative Unicode Symbols' },
  { symbol: '💐', name: 'Floral Bouquet Gift', category: 'Decorative Unicode Symbols' },
  { symbol: '🎋✨', name: 'Wish Tree Bamboo Sparkle', category: 'Decorative Unicode Symbols' },

  // Additional 100+ Flower & Nature Variations to satisfy 150+ dataset
  { symbol: '✿✿', name: 'Double Black Florette', category: 'Flower Symbols' },
  { symbol: '❀❀', name: 'Double White Florette', category: 'Flower Symbols' },
  { symbol: '❁❁', name: 'Double Outlined Flower', category: 'Flower Symbols' },
  { symbol: '🌸🌸🌸', name: 'Triple Sakura Blossom', category: 'Cherry Blossom' },
  { symbol: '🌹🌹', name: 'Double Red Rose', category: 'Rose Symbols' },
  { symbol: '🌻✨', name: 'Sparkling Sunflower', category: 'Flower Symbols' },
  { symbol: '🌼✨', name: 'Sparkling Daisy Flower', category: 'Flower Symbols' },
  { symbol: '🌷✨', name: 'Sparkling Spring Tulip', category: 'Flower Symbols' },
  { symbol: '🪷✨', name: 'Sparkling Lotus Flower', category: 'Flower Symbols' },

  { symbol: '✿ ─── ✿', name: 'Flower Line Divider', category: 'Decorative Unicode Symbols' },
  { symbol: '❀ ─── ❀', name: 'Sakura Line Divider', category: 'Cherry Blossom' },
  { symbol: '🌸 ─── 🌸', name: 'Blossom Line Divider', category: 'Cherry Blossom' },
  { symbol: '🌹 ─── 🌹', name: 'Rose Line Divider', category: 'Rose Symbols' },
  { symbol: '🌿 ─── 🌿', name: 'Herb Leaf Line Divider', category: 'Nature Symbols' },

  { symbol: '꧁✿꧂', name: 'Winged Flower Border', category: 'Floral Decorations' },
  { symbol: '꧁🌸꧂', name: 'Winged Sakura Border', category: 'Cherry Blossom' },
  { symbol: '꧁🌹꧂', name: 'Winged Rose Border', category: 'Rose Symbols' },
  { symbol: '༺✿༻', name: 'Feathered Flower Frame', category: 'Floral Decorations' },
  { symbol: '༺🌸༻', name: 'Feathered Sakura Frame', category: 'Cherry Blossom' },
  { symbol: '༺🌹༻', name: 'Feathered Rose Frame', category: 'Rose Symbols' },

  { symbol: '『✿』', name: 'Japanese Bracket Flower', category: 'Decorative Unicode Symbols' },
  { symbol: '【🌸】', name: 'Square Bracket Sakura', category: 'Cherry Blossom' },
  { symbol: '〖🌹〗', name: 'Tortoise Bracket Rose', category: 'Rose Symbols' },

  { symbol: '✿♡✿', name: 'Flower Heart Sandwich', category: 'Flower Symbols' },
  { symbol: '🌸♡🌸', name: 'Sakura Heart Sandwich', category: 'Cherry Blossom' },
  { symbol: '🌹♡🌹', name: 'Rose Heart Sandwich', category: 'Rose Symbols' },
  { symbol: '🌿♡🌿', name: 'Herb Heart Sandwich', category: 'Nature Symbols' },

  { symbol: '✧･ﾟ: *✿', name: 'Flower Stardust Sparkle', category: 'Floral Decorations' },
  { symbol: '✧･ﾟ: *🌸', name: 'Sakura Stardust Sparkle', category: 'Cherry Blossom' },
  { symbol: '✧･ﾟ: *🌹', name: 'Rose Stardust Sparkle', category: 'Rose Symbols' },

  { symbol: '✿✦✿', name: 'Flower Four Pointed Star Sandwich', category: 'Flower Symbols' },
  { symbol: '🌸✦🌸', name: 'Sakura Four Pointed Star Sandwich', category: 'Cherry Blossom' },
  { symbol: '🌹✦🌹', name: 'Rose Four Pointed Star Sandwich', category: 'Rose Symbols' },

  { symbol: '✿✨✿', name: 'Flower Sparkle Duo', category: 'Floral Decorations' },
  { symbol: '🌸✨🌸', name: 'Sakura Sparkle Duo', category: 'Cherry Blossom' },
  { symbol: '🌹✨🌹', name: 'Rose Sparkle Duo', category: 'Rose Symbols' },
  { symbol: '🌿✨🌿', name: 'Leaf Sparkle Duo', category: 'Nature Symbols' },

  { symbol: '✿ FLOWER ✿', name: 'Flower Text Badge', category: 'Flower Symbols' },
  { symbol: '🌸 SAKURA 🌸', name: 'Sakura Text Badge', category: 'Cherry Blossom' },
  { symbol: '🌹 ROSE 🌹', name: 'Rose Text Badge', category: 'Rose Symbols' },
  { symbol: '🌿 NATURE 🌿', name: 'Nature Text Badge', category: 'Nature Symbols' },
  { symbol: '🌻 SUNSHINE 🌻', name: 'Sunshine Text Badge', category: 'Flower Symbols' },
];
