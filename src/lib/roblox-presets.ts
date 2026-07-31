export interface RobloxCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  example: string;
}

export interface RobloxExample {
  baseName: string;
  styledName: string;
  category: string;
  description: string;
}

export const ROBLOX_CATEGORIES: RobloxCategory[] = [
  {
    id: 'gamer',
    name: 'Gamer',
    iconName: 'Gamepad2',
    description: 'Style pro gamer dengan tampilan clean, bold, & cybernetic.',
    example: '⚡𝒢𝒜ℳℰℛ⚡',
  },
  {
    id: 'warrior',
    name: 'Warrior',
    iconName: 'Swords',
    description: 'Style petarung garang untuk pemain Blox Fruits & King Legacy.',
    example: '⚔️𝒲𝒜ℛℛℐ𝒪ℛ⚔️',
  },
  {
    id: 'builder',
    name: 'Builder',
    iconName: 'Hammer',
    description: 'Style arsitek & pencipta map Roblox yang unik.',
    example: '🔨ℬ𝒰ℐℒ𝒟ℰℛ🔨',
  },
  {
    id: 'anime',
    name: 'Anime',
    iconName: 'Sparkles',
    description: 'Style karakter anime lengkap dengan kanji Jepang (乂, 帝, 乡).',
    example: '乂 𝒜𝒩ℐℳℰ 乂',
  },
  {
    id: 'vip',
    name: 'VIP',
    iconName: 'Crown',
    description: 'Style eksklusif dengan mahkota emas & aura sultan Roblox.',
    example: '👑𝒱ℐ𝒫👑',
  },
  {
    id: 'cute',
    name: 'Cute',
    iconName: 'Heart',
    description: 'Style imut berhiaskan boba, bunga, & pita manis.',
    example: '♡ 𝒸𝓊𝓉𝒾ℯ ♡',
  },
  {
    id: 'dark',
    name: 'Dark',
    iconName: 'Moon',
    description: 'Style gothic misterius berornamen tengkorak & bayangan.',
    example: '🖤𝒟𝒜ℛ𝒦🖤',
  },
  {
    id: 'funny',
    name: 'Funny',
    iconName: 'Smile',
    description: 'Style kocak & santai cocok untuk noobmaster & troll vibes.',
    example: '🤪𝒩𝒪𝒪ℬ🤪',
  },
  {
    id: 'fantasy',
    name: 'Fantasy',
    iconName: 'Wand2',
    description: 'Style magis bertema naga, phoenix, & dunia sihir.',
    example: '✨𝒫ℋ𝒪ℰ𝒩ℐ𝒳✨',
  },
  {
    id: 'royal',
    name: 'Royal',
    iconName: 'Shield',
    description: 'Style kerajaan megah berornamen bintang & mahkota.',
    example: '★彡[ℛ𝒪𝒴𝒜ℒ]彡★',
  },
];

export const ROBLOX_POPULAR_EXAMPLES: RobloxExample[] = [
  {
    baseName: 'Shadow',
    styledName: '꧁⚔️Ѕℋ𝒜𝒟𝒪𝒲⚔️꧂',
    category: 'Dark / Gamer',
    description: 'Style bayangan stealth yang sangat populer untuk Blox Fruits & BedWars.',
  },
  {
    baseName: 'NoobMaster',
    styledName: '🤪𝒩𝒪𝒪ℬℳ𝒜𝒮𝒯ℰℛ🤪',
    category: 'Funny / Gamer',
    description: 'Style kocak ikonik ala legenda game Roblox.',
  },
  {
    baseName: 'Dragon',
    styledName: '🐉𝒟ℛ𝒜𝒢𝒪𝒩🐉',
    category: 'Fantasy / Warrior',
    description: 'Style bertema naga garang berornamen api & naga.',
  },
  {
    baseName: 'Phoenix',
    styledName: '✨𝒫ℋ𝒪ℰ𝒩ℐ𝒳✨',
    category: 'Fantasy / Royal',
    description: 'Style burung phoenix emas yang abadi bertabur bintang.',
  },
  {
    baseName: 'Knight',
    styledName: '⚔️𝒦𝒩ℐ𝒢ℋ𝒯⚔️',
    category: 'Warrior',
    description: 'Style ksatria pedang besi untuk petualang RPG Roblox.',
  },
  {
    baseName: 'Builder',
    styledName: '🔨ℬ𝒰ℐℒ𝒟ℰℛ🔨',
    category: 'Builder / Gamer',
    description: 'Style arsitek pembangun kreasi map Roblox.',
  },
  {
    baseName: 'Legend',
    styledName: '★彡[ℒℰ𝒢ℰ𝒩𝒟]彡★',
    category: 'Royal / Gamer',
    description: 'Style nama legenda bertabur bintang & ornamen simetris.',
  },
  {
    baseName: 'Ghost',
    styledName: '👻𝒢ℋ𝒪𝒮𝒯👻',
    category: 'Dark',
    description: 'Style hantu kasat mata cocok untuk game horor Roblox.',
  },
  {
    baseName: 'Titan',
    styledName: '🛡️𝒯ℐ𝒯𝒜𝒩🛡️',
    category: 'Warrior / VIP',
    description: 'Style raksasa benteng pertahanan yang tangguh.',
  },
  {
    baseName: 'Alpha',
    styledName: '⚡𝒜ℒ𝒫ℋ𝒜⚡',
    category: 'Gamer / VIP',
    description: 'Style pemimpin utama bertema petir & aura emas.',
  },
];
