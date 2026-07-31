export interface CodCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  example: string;
}

export interface CodExample {
  baseName: string;
  styledName: string;
  category: string;
  description: string;
}

export const COD_CATEGORIES: CodCategory[] = [
  {
    id: 'sniper',
    name: 'Sniper',
    iconName: 'Crosshair',
    description: 'Style penembak jitu tajam & stealth untuk user DL Q33 & Locus.',
    example: '🎯Ѕ𝒩ℐ𝒫ℰℛ🎯',
  },
  {
    id: 'assault',
    name: 'Assault',
    iconName: 'Zap',
    description: 'Style agresif & pejuang garda depan untuk user AK117 & M4.',
    example: '⚡𝒜𝒮𝒮𝒜𝒰ℒ𝒯⚡',
  },
  {
    id: 'elite',
    name: 'Elite',
    iconName: 'Shield',
    description: 'Style pasukan khusus berkelas dengan tampilan clean.',
    example: '🛡️ℰℒℐ𝒯ℰ🛡️',
  },
  {
    id: 'clan',
    name: 'Clan',
    iconName: 'Users',
    description: 'Format tag clan esports pro berornamen kurung siku khas CODM.',
    example: '『CODM』𝒞ℒ𝒜𝒩',
  },
  {
    id: 'pro',
    name: 'Pro',
    iconName: 'Trophy',
    description: 'Style pro player turnamen kejuaraan dunia CODM.',
    example: '🏆𝒫ℛ𝒪🏆',
  },
  {
    id: 'dark',
    name: 'Dark',
    iconName: 'Ghost',
    description: 'Style militer misterius berornamen tengkorak & bayangan.',
    example: '💀𝒟𝒜ℛ𝒦💀',
  },
  {
    id: 'vip',
    name: 'VIP',
    iconName: 'Crown',
    description: 'Style mewah dengan ornamen mahkota emas & aura Legendary.',
    example: '👑𝒱ℐ𝒫👑',
  },
  {
    id: 'military',
    name: 'Military',
    iconName: 'Target',
    description: 'Style nama taktis khas pasukan komando militer.',
    example: '⦇ℳℐℒℐ𝒯𝒜ℛ𝒴⦈',
  },
  {
    id: 'tactical',
    name: 'Tactical',
    iconName: 'Radio',
    description: 'Style operasi khusus penuh strategi & koordinasi.',
    example: '乂𝒯𝒜𝒞𝒯ℐ𝒞𝒜ℒ乂',
  },
  {
    id: 'legendary',
    name: 'Legendary',
    iconName: 'Flame',
    description: 'Style kejuaraan tertinggi bertema kobaran api & bintang.',
    example: '★彡[ℒℰ𝒢ℰ𝒩𝒟]彡★',
  },
];

export const COD_POPULAR_EXAMPLES: CodExample[] = [
  {
    baseName: 'Ghost',
    styledName: '💀𝒢ℋ𝒪𝒮𝒯💀',
    category: 'Dark / Elite',
    description: 'Style agen taktis legendaris ikonik Call of Duty.',
  },
  {
    baseName: 'Soap',
    styledName: '⚡𝒮𝒪𝒜𝒫⚡',
    category: 'Assault / Tactical',
    description: 'Style pasukan komando MacTavish penuh petir.',
  },
  {
    baseName: 'Price',
    styledName: '👑𝒫ℛℐ𝒞ℰ👑',
    category: 'Military / VIP',
    description: 'Style Kapten Price sang pemimpin operasi khusus.',
  },
  {
    baseName: 'Shadow',
    styledName: '꧁⚔️Ѕℋ𝒜𝒟𝒪𝒲⚔️꧂',
    category: 'Tactical / Dark',
    description: 'Style pasukan bayangan stealth paling populer di CODM.',
  },
  {
    baseName: 'Hunter',
    styledName: '🎯ℋ𝒰𝒩𝒯ℰℛ🎯',
    category: 'Sniper / Pro',
    description: 'Style pemburu jitu berornamen target sasaran.',
  },
  {
    baseName: 'Sniper',
    styledName: '🎯Ѕ𝒩ℐ𝒫ℰℛ🎯',
    category: 'Sniper',
    description: 'Style khusus spesialis tembakan jarak jauh.',
  },
  {
    baseName: 'Legend',
    styledName: '★彡[ℒℰ𝒢ℰ𝒩𝒟]彡★',
    category: 'Legendary',
    description: 'Style nama legenda bertabur bintang simetris.',
  },
  {
    baseName: 'Reaper',
    styledName: '☠️ℛℰ𝒜𝒫ℰℛ☠️',
    category: 'Dark / Assault',
    description: 'Style pencabut nyawa bertema tengkorak silang.',
  },
  {
    baseName: 'Titan',
    styledName: '🛡️𝒯ℐ𝒯𝒜𝒩🛡️',
    category: 'Elite / Military',
    description: 'Style benteng pertahanan raksasa terkuat.',
  },
  {
    baseName: 'Phantom',
    styledName: '✨𝒫ℋ𝒜𝒩𝒯𝒪ℳ✨',
    category: 'Tactical',
    description: 'Style siluman kasat mata berornamen kilau bintang.',
  },
];
