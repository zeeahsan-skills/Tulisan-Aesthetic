export interface MLCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  example: string;
}

export interface MLExample {
  baseName: string;
  styledName: string;
  role: string;
  description: string;
}

export const ML_CATEGORIES: MLCategory[] = [
  {
    id: 'assassin',
    name: 'Assassin',
    iconName: 'Zap',
    description: 'Style lincah & mematikan untuk user Fanny, Gusion, Ling, Lancelot & Hayabusa.',
    example: '꧁⚔️Ѕℋ𝒜𝒟𝒪𝒲⚔️꧂',
  },
  {
    id: 'marksman',
    name: 'Marksman',
    iconName: 'Target',
    description: 'Style sniper & finisher tajam untuk user Granger, Beatrix, Claude & Lesley.',
    example: '🎯L𝒜𝒩𝒞ℰℒ𝒪𝒯🎯',
  },
  {
    id: 'mage',
    name: 'Mage',
    iconName: 'Sparkles',
    description: 'Style magis & mistis untuk user Kagura, Lunox, Pharsa, Xavier & Cecilion.',
    example: '✨𝒫ℋ𝒜𝒩𝒯𝒪ℳ✨',
  },
  {
    id: 'tank',
    name: 'Tank',
    iconName: 'Shield',
    description: 'Style tangguh & tak terkalahkan untuk user Tigreal, Khufra, Atlas & Franco.',
    example: '🛡️𝒯ℐ𝒯𝒜𝒩🛡️',
  },
  {
    id: 'fighter',
    name: 'Fighter',
    iconName: 'Swords',
    description: 'Style brawler & solo laner garang untuk user Chou, Yu Zhong, Paquito & Ruby.',
    example: '⚔️𝒟ℛ𝒜𝒢𝒪𝒩⚔️',
  },
  {
    id: 'support',
    name: 'Support',
    iconName: 'HeartHandshake',
    description: 'Style penyelamat & roamer elegan untuk user Angela, Estes, Floryn & Diggie.',
    example: '🕊️ℒℰ𝒢ℰ𝒩𝒟🕊️',
  },
  {
    id: 'squad',
    name: 'Squad',
    iconName: 'Users',
    description: 'Format tag squad pro & clan esports (MPL / MDL Style).',
    example: 'RRQ • 𝒜ℒ𝒫ℋ𝒜',
  },
  {
    id: 'vip',
    name: 'VIP',
    iconName: 'Crown',
    description: 'Style mewah dengan ornamen mahkota emas & aura Mythic Immortal.',
    example: '👑𝒦ℐ𝒩𝒢👑',
  },
  {
    id: 'anime',
    name: 'Anime',
    iconName: 'Flame',
    description: 'Style karakter anime populer lengkap dengan kanji Jepang (乂, 帝, 乡).',
    example: '乂 𝒬𝒰ℰℰ𝒩 乂',
  },
  {
    id: 'pro-player',
    name: 'Pro Player',
    iconName: 'Trophy',
    description: 'Style nama ala pro player dunia dengan tampilan clean & berkelas.',
    example: 'ℐℳℳ𝒪ℛ𝒯𝒜ℒ',
  },
];

export const ML_POPULAR_EXAMPLES: MLExample[] = [
  {
    baseName: 'Shadow',
    styledName: '꧁⚔️Ѕℋ𝒜𝒟𝒪𝒲⚔️꧂',
    role: 'Assassin',
    description: 'Nickname gaya bayangan stealth cocok untuk user Hayabusa & Helcurt.',
  },
  {
    baseName: 'Lancelot',
    styledName: '🎯ℒ𝒜𝒩𝒞ℰℒ𝒪𝒯🎯',
    role: 'Marksman / Assassin',
    description: 'Gaya anggun sang ksatria pedang berornamen target & bintang.',
  },
  {
    baseName: 'Dragon',
    styledName: '🐉𝒟ℛ𝒜𝒢𝒪𝒩🐉',
    role: 'Fighter',
    description: 'Style bertema naga garang untuk user Yu Zhong & Chou.',
  },
  {
    baseName: 'Legend',
    styledName: '★彡[ℒℰ𝒢ℰ𝒩𝒟]彡★',
    role: 'All Roles',
    description: 'Gaya nama legenda bertabur bintang & ornamen simetris.',
  },
  {
    baseName: 'Alpha',
    styledName: '⚡𝒜ℒ𝒫ℋ𝒜⚡',
    role: 'Fighter / Tank',
    description: 'Style pemimpin kawanan bertema kilat & petir.',
  },
  {
    baseName: 'Phantom',
    styledName: '✨𝒫ℋ𝒜𝒩𝒯𝒪ℳ✨',
    role: 'Mage / Assassin',
    description: 'Gaya mistis kasat mata ideal untuk user Gusion & Kagura.',
  },
  {
    baseName: 'King',
    styledName: '👑𝒦ℐ𝒩𝒢👑',
    role: 'VIP / Squad Leader',
    description: 'Gaya raja sejati dengan simbol mahkota kerajaan.',
  },
  {
    baseName: 'Queen',
    styledName: '꧁༺𝒬𝒰ℰℰ𝒩༻꧂',
    role: 'Mage / Support',
    description: 'Gaya ratu cantik berornamen sayap malaikat.',
  },
  {
    baseName: 'Titan',
    styledName: '🛡️𝒯ℐ𝒯𝒜𝒩🛡️',
    role: 'Tank / Roamer',
    description: 'Style raksasa tangguh untuk pemegang benteng pertahanan team.',
  },
  {
    baseName: 'Immortal',
    styledName: '🏆ℐℳℳ𝒪ℛ𝒯𝒜ℒ🏆',
    role: 'Mythic Immortal',
    description: 'Style bintang tertinggi Mythic Immortal dengan trophy kejuaraan.',
  },
];
