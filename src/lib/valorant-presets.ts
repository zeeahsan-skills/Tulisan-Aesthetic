export interface ValorantCategory {
  id: string;
  name: string;
  iconName: string;
  description: string;
  example: string;
}

export interface ValorantExample {
  baseName: string;
  styledName: string;
  category: string;
  description: string;
}

export const VALORANT_CATEGORIES: ValorantCategory[] = [
  {
    id: 'duelist',
    name: 'Duelist Main',
    iconName: 'Flame',
    description: 'Style agresif & tajam terinspirasi dari Jett, Reyna, Raze & Phoenix.',
    example: 'J E T T // 01',
  },
  {
    id: 'initiator',
    name: 'Initiator Recon',
    iconName: 'Target',
    description: 'Style intel & pemburu taktis terinspirasi dari Sova, Fade & Gekko.',
    example: 'S O V A • 𝟢𝟩',
  },
  {
    id: 'controller',
    name: 'Controller Smoke',
    iconName: 'Cloud',
    description: 'Style misterius bernuansa gelap terinspirasi dari Omen, Viper & Clove.',
    example: 'O M E N . 𝟩𝟩',
  },
  {
    id: 'sentinel',
    name: 'Sentinel Anchor',
    iconName: 'Shield',
    description: 'Style penjaga kokoh & defensif terinspirasi dari Sage, Chamber & Cypher.',
    example: 'Chamber 亗 01',
  },
  {
    id: 'radiant',
    name: 'Radiant & Esports',
    iconName: 'Trophy',
    description: 'Format pro player VCT minimalis, clean spasi, & tag clan resmi.',
    example: '『VCT』S H R O U D',
  },
  {
    id: 'cyberpunk',
    name: 'Cyber Minimalist',
    iconName: 'Zap',
    description: 'Style modern beraksen slash //, crosshair ╳, dan angka romawi/subscript.',
    example: '╳ S I L E N T ╳',
  },
  {
    id: 'japanese',
    name: 'Japanese Aesthetic',
    iconName: 'Sparkles',
    description: 'Nickname bergaya anime jepang dengan karakter katakana & kanji.',
    example: 'Y O R U • 夜',
  },
  {
    id: 'soft',
    name: 'Aesthetic & Soft',
    iconName: 'Heart',
    description: 'Gaya manis dan santai dengan aksen hati kecil, pita, & bintang halus.',
    example: 'Sage ♡ ʚɞ',
  },
];

export const VALORANT_EXAMPLES: ValorantExample[] = [
  {
    baseName: 'Jett',
    styledName: 'J E T T // 01',
    category: 'Duelist',
    description: 'Gaya duel entry clean dengan spasi ganda dan nomor unit.',
  },
  {
    baseName: 'Reaper',
    styledName: '⚡R E A P E R⚡',
    category: 'Duelist',
    description: 'Aksen kilatan petir simetris untuk fragger agresif.',
  },
  {
    baseName: 'Omen',
    styledName: 'O M E N . 𝟩𝟩',
    category: 'Controller',
    description: 'Format misterius dengan titik pemisah dan angka subscript math.',
  },
  {
    baseName: 'Silent',
    styledName: '╳ S I L E N T ╳',
    category: 'Cyberpunk',
    description: 'Simbol silang crosshair minimalis ala pro player Radiant.',
  },
  {
    baseName: 'Apex',
    styledName: '✧A P E X✧',
    category: 'Radiant',
    description: 'Bintang berkilau 4 sudut untuk pemuncak leaderboard.',
  },
  {
    baseName: 'Viper',
    styledName: 'V I P E R - 𝟢𝟫',
    category: 'Controller',
    description: 'Gaya kode laboratorium kimia toksik modern.',
  },
  {
    baseName: 'Phoenix',
    styledName: 'P H O E N I X • 𝟢𝟨',
    category: 'Duelist',
    description: 'Bullet divider dengan nomor agen protokol Valorant.',
  },
  {
    baseName: 'Raze',
    styledName: 'R A Z E ⚡ X',
    category: 'Duelist',
    description: 'Kombinasi energi eksplosif khas roket & granat.',
  },
  {
    baseName: 'Reyna',
    styledName: 'Reyna ᯓ★',
    category: 'Duelist',
    description: 'Gaya bintang modern meluncur yang sedang viral.',
  },
  {
    baseName: 'Sova',
    styledName: 'S O V A // 𝟩',
    category: 'Initiator',
    description: 'Gaya pemanah hunter presisi tinggi dengan slash tactical.',
  },
  {
    baseName: 'Chamber',
    styledName: 'Chamber 亗',
    category: 'Sentinel',
    description: 'Simbol mahkota modern elegan penembak jitu berkelas.',
  },
  {
    baseName: 'Yoru',
    styledName: 'Y O R U • 夜',
    category: 'Japanese',
    description: 'Karakter kanji malam (夜) yang merepresentasikan arti nama Yoru.',
  },
  {
    baseName: 'Sage',
    styledName: 'Sage ♡ ʚɞ',
    category: 'Soft',
    description: 'Aksen hati dan sayap malaikat untuk healer terfavorit.',
  },
  {
    baseName: 'Kayo',
    styledName: 'KAY/O [01]',
    category: 'Initiator',
    description: 'Format robot mekanik perang futuristik.',
  },
  {
    baseName: 'Neon',
    styledName: 'Neon ⚡ 𝟣𝟣',
    category: 'Duelist',
    description: 'Kilat elektrik cepat dengan nomor skuad Filipina.',
  },
  {
    baseName: 'Cypher',
    styledName: 'Cypher 👁️ [CAM]',
    category: 'Sentinel',
    description: 'Spy surveillance camera taktis pemantau musuh.',
  },
  {
    baseName: 'Killjoy',
    styledName: 'KJ ⚙️ 𝟢𝟦',
    category: 'Sentinel',
    description: 'Sentuhan mekanik nanoteknologi jenius Berlin.',
  },
  {
    baseName: 'Simple',
    styledName: 's0mple ッ',
    category: 'Japanese',
    description: 'Smiley katakana Jepang (tsu ッ) khas pemain FPS legendaris.',
  },
  {
    baseName: 'Fade',
    styledName: 'F A D E ☾ 𝟢𝟪',
    category: 'Initiator',
    description: 'Bulan sabit bayangan mimpi buruk bertema gelap.',
  },
  {
    baseName: 'Iso',
    styledName: 'I S O // 🛡️',
    category: 'Duelist',
    description: 'Format perisai pelindung peluru modern.',
  },
];
