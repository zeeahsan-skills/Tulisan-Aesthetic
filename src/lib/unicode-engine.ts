// Unicode Text Generator Engine for Tulisan Aesthetic

export interface FontStyle {
  id: string;
  name: string;
  category: 'Popular' | 'Cute' | 'Gothic' | 'Gaming' | 'Fancy' | 'Simple';
  previewText?: string;
  transform: (text: string) => string;
}

// Maps standard charsets to unicode char ranges
function mapChars(text: string, charMap: Record<string, string>): string {
  return text
    .split('')
    .map((char) => charMap[char] || char)
    .join('');
}

const ALPHABET_LOWER = 'abcdefghijklmnopqrstuvwxyz';
const ALPHABET_UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function createCharMap(upperTarget: string[], lowerTarget: string[]): Record<string, string> {
  const map: Record<string, string> = {};
  for (let i = 0; i < 26; i++) {
    if (upperTarget[i]) map[ALPHABET_UPPER[i]] = upperTarget[i];
    if (lowerTarget[i]) map[ALPHABET_LOWER[i]] = lowerTarget[i];
  }
  return map;
}

// 1. Small Caps
const SMALL_CAPS_MAP = createCharMap(
  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  ['ᴀ', 'ʙ', 'ᴄ', 'ᴅ', 'ᴇ', 'ғ', 'ɢ', 'ʜ', 'ɪ', 'ᴊ', 'ᴋ', 'ʟ', 'ᴍ', 'ɴ', 'ᴏ', 'ᴘ', 'ǫ', 'ʀ', 's', 'ᴛ', 'ᴜ', 'ᴠ', 'ᴡ', 'x', 'ʏ', 'ᴢ']
);

// 2. Bubble / Circled (Outline)
const BUBBLE_MAP = createCharMap(
  ['Ⓐ', 'Ⓑ', 'Ⓒ', 'Ⓓ', 'Ⓔ', 'Ⓕ', 'Ⓖ', 'Ⓗ', 'Ⓘ', 'Ⓙ', 'Ⓚ', 'Ⓛ', 'Ⓜ', 'Ⓝ', 'Ⓞ', 'Ⓟ', 'Ⓠ', 'Ⓡ', 'Ⓢ', 'Ⓣ', 'Ⓤ', 'Ⓥ', 'Ⓦ', 'Ⓧ', 'Ⓨ', 'Ⓩ'],
  ['ⓐ', 'ⓑ', 'ⓒ', 'ⓓ', 'ⓔ', 'ⓕ', 'ⓖ', 'ⓗ', 'ⓘ', 'ⓙ', 'ⓚ', 'ⓛ', 'ⓜ', 'ⓝ', 'ⓞ', 'ⓟ', 'ⓠ', 'ⓡ', 'ⓢ', 'ⓣ', 'ⓤ', 'ⓥ', 'ⓦ', 'ⓧ', 'ⓨ', 'ⓩ']
);

// 3. Dark Bubble / Circled (Solid)
const DARK_BUBBLE_MAP = createCharMap(
  ['🅐', '🅑', '🅒', '🅓', '🅔', '🅕', '🅖', '🅗', '🅘', '🅙', '🅚', '🅛', '🅜', '🅝', '🅞', '🅟', '🅠', '🅡', '🅢', '🅣', '🅤', '🅥', '🅦', '🅧', '🅨', '🅩'],
  ['🅐', '🅑', '🅒', '🅓', '🅔', '🅕', '🅖', '🅗', '🅘', '🅙', '🅚', '🅛', '🅜', '🅝', '🅞', '🅟', '🅠', '🅡', '🅢', '🅣', '🅤', '🅥', '🅦', '🅧', '🅨', '🅩']
);

// 4. Gothic / Fraktur Bold
const GOTHIC_BOLD_MAP = createCharMap(
  ['𝕬', '𝕭', '𝕮', '𝕯', '𝕰', '𝕱', '𝕲', '𝕳', '𝕴', '𝕵', '𝕶', '𝕷', '𝕸', '𝕹', '𝕺', '𝕻', '𝕼', '𝕽', '𝕾', '𝕿', '𝖀', '𝖁', '𝖂', '𝖃', '𝖄', '𝖅'],
  ['𝖆', '𝖇', '𝖈', '𝖉', '𝖊', '𝖋', '𝖌', '𝖍', '𝖎', '𝖏', '𝖐', '𝖑', '𝖒', '𝖓', '𝖔', '𝖕', '𝖖', '𝖗', '𝖘', '𝖙', '𝖚', '𝖛', '𝖜', '𝖝', '𝖞', '𝖟']
);

// 4b. Gothic / Fraktur Regular (Blackletter)
const FRAKTUR_REGULAR_MAP = createCharMap(
  ['𝔄', '𝔅', 'ℭ', '𝔇', '𝔈', '𝔉', '𝔊', 'ℌ', 'ℑ', '𝔍', '𝔎', '𝔏', '𝔐', '𝔑', '𝔒', '𝔓', '𝔔', 'ℜ', '𝔖', '𝔗', '𝔘', '𝔙', '𝔚', '𝔛', '𝔜', 'ℨ'],
  ['𝔞', '𝔟', '𝔠', '𝔡', '𝔢', '𝔣', '𝔤', '𝔥', '𝔦', '𝔧', '𝔨', '𝔩', '𝔪', '𝔫', '𝔬', '𝔭', '𝔮', '𝔯', '𝔰', '𝔱', '𝔲', '𝔳', '𝔴', '𝔵', '𝔶', '𝔷']
);

// 5. Cursive / Script
const CURSIVE_MAP = createCharMap(
  ['𝒜', 'ℬ', '𝒞', '𝒟', 'ℰ', 'ℱ', '𝒢', 'ℋ', 'ℐ', '𝒥', '𝒦', 'ℒ', 'ℳ', '𝒩', '𝒪', '𝒫', '𝒬', 'ℛ', '𝒮', '𝒯', '𝒰', '𝒱', '𝒲', '𝒳', '𝒴', '𝒵'],
  ['𝒶', '𝒷', '𝒸', '𝒹', 'ℯ', '𝒻', 'ℊ', '𝒽', '𝒾', '𝒿', '𝓀', '𝓁', '𝓂', '𝓃', 'ℴ', '𝓅', '𝓆', '𝓇', '𝓈', '𝓉', '𝓊', '𝓋', '𝓌', '𝓍', '𝓎', '𝓏']
);

// 5b. Bold Cursive / Script
const BOLD_CURSIVE_MAP = createCharMap(
  ['𝓐', '𝓑', '𝓒', '𝓓', '𝓔', '𝓕', '𝓖', '𝓗', '𝓘', '𝓙', '𝓚', '𝓛', '𝓜', '𝓝', '𝓞', '𝓟', '𝓠', '𝓡', '𝓢', '𝓣', '𝓤', '𝓥', '𝓦', '𝓧', '𝓨', '𝓩'],
  ['𝒶', '𝒷', '𝒸', '𝒹', 'ℯ', '𝒻', 'ℊ', '𝒽', '𝒾', '𝒿', '𝓀', '𝓁', '𝓂', '𝓃', 'ℴ', '𝓅', '𝓆', '𝓇', '𝓈', '𝓉', '𝓊', '𝓋', '𝓌', '𝓍', '𝓎', '𝓏']
);

// 6. Bold Sans
const BOLD_SANS_MAP = createCharMap(
  Array.from({ length: 26 }, (_, i) => String.fromCodePoint(0x1D5D4 + i)),
  Array.from({ length: 26 }, (_, i) => String.fromCodePoint(0x1D5EE + i))
);

// 7. Double Struck / Blackboard
const DOUBLE_STRUCK_MAP = createCharMap(
  ['𝔸', '𝔹', 'ℂ', '𝔻', '𝔼', '𝔽', '𝔾', 'ℍ', '𝕀', '𝕁', '𝕂', '𝕃', '𝕄', 'ℕ', '𝕆', 'ℙ', 'ℚ', 'ℝ', '𝕊', '𝕋', '𝕌', '𝕍', '𝕎', '𝕏', '𝕐', 'ℤ'],
  ['𝕒', '𝕓', '𝕔', '𝕕', '𝕖', '𝕗', '𝕘', '𝕙', '𝕚', '𝕛', '𝕜', '𝕝', '𝕞', '𝕟', '𝕠', '𝕡', '𝕢', '𝕣', '𝕤', '𝕥', '𝕦', '𝕧', '𝕨', '𝕩', '𝕪', '𝕫']
);

// 8. Square Outline
// 8. Square Outline
const SQUARE_MAP = createCharMap(
  Array.from({ length: 26 }, (_, i) => String.fromCodePoint(0x1F130 + i)),
  Array.from({ length: 26 }, (_, i) => String.fromCodePoint(0x1F130 + i))
);

// 8b. Dark Square / Solid Box
const DARK_SQUARE_MAP = createCharMap(
  Array.from({ length: 26 }, (_, i) => String.fromCodePoint(0x1F170 + i)),
  Array.from({ length: 26 }, (_, i) => String.fromCodePoint(0x1F170 + i))
);

// 9. Fullwidth / Vaporwave
const FULLWIDTH_MAP = createCharMap(
  ['Ａ', 'Ｂ', 'Ｃ', 'Ｄ', 'Ｅ', 'Ｆ', 'Ｇ', 'Ｈ', 'Ｉ', 'Ｊ', 'Ｋ', 'Ｌ', 'Ｍ', 'Ｎ', 'Ｏ', 'Ｐ', 'Ｑ', 'Ｒ', 'Ｓ', 'Ｔ', 'Ｕ', 'Ｖ', 'Ｗ', 'Ｘ', 'Ｙ', 'Ｚ'],
  ['ａ', 'ｂ', 'ｃ', 'ｄ', 'ｅ', 'ｆ', 'ｇ', 'ｈ', 'ｉ', 'ｊ', 'ｋ', 'ｌ', 'ｍ', 'ｎ', 'ｏ', 'ｐ', 'ｑ', 'ｒ', 'ｓ', 'ｔ', 'ｕ', 'ｖ', 'ｗ', 'ｘ', 'ｙ', 'ｚ']
);

// 10. Superscript
const SUPERSCRIPT_MAP = createCharMap(
  ['ᴬ', 'ᴮ', 'ᶜ', 'ᴰ', 'ᴱ', 'ᶠ', 'ᴳ', 'ᴴ', 'ᴵ', 'ᴶ', 'ᴷ', 'ᴸ', 'ᴹ', 'ᴺ', 'ᴼ', 'ᴾ', 'Q', 'ᴿ', 'ˢ', 'ᵀ', 'ᵁ', 'ⱽ', 'ᵂ', 'ˣ', 'ʸ', 'ᶻ'],
  ['ᵃ', 'ᵇ', 'ᶜ', 'ᵈ', 'ᵉ', 'ᶠ', 'ᵍ', 'ʰ', 'ⁱ', 'ʲ', 'ᵏ', 'ˡ', 'ᵐ', 'ⁿ', 'ᵒ', 'ᵖ', 'ᑫ', 'ʳ', 'ˢ', 'ᵗ', 'ᵘ', 'ᵛ', 'ʷ', 'ˣ', 'ʸ', 'ᶻ']
);

// 10b. Subscript
const SUBSCRIPT_MAP = createCharMap(
  ['ₐ', 'b', 'c', 'd', 'ₑ', 'f', 'g', 'ₕ', 'ᵢ', 'ⱼ', 'ₖ', 'ₗ', 'ₘ', 'ₙ', 'ₒ', 'ₚ', 'q', 'ᵣ', 'ₛ', 'ₜ', 'ᵤ', 'ᵥ', 'w', 'ₓ', 'y', 'z'],
  ['ₐ', 'b', 'c', 'd', 'ₑ', 'f', 'g', 'ₕ', 'ᵢ', 'ⱼ', 'ₖ', 'ₗ', 'ₘ', 'ₙ', 'ₒ', 'ₚ', 'q', 'ᵣ', 'ₛ', 'ₜ', 'ᵤ', 'ᵥ', 'w', 'ₓ', 'y', 'z']
);

// Number Digit Maps
const CIRCLED_DIGIT_MAP: Record<string, string> = { '0':'⓪', '1':'①', '2':'②', '3':'③', '4':'④', '5':'⑤', '6':'⑥', '7':'⑦', '8':'⑧', '9':'⑨' };
const DARK_CIRCLED_DIGIT_MAP: Record<string, string> = { '0':'⓿', '1':'❶', '2':'❷', '3':'❸', '4':'❹', '5':'❺', '6':'❻', '7':'❼', '8':'❽', '9':'❾' };
const DOUBLE_CIRCLED_DIGIT_MAP: Record<string, string> = { '0':'⓿', '1':'⓵', '2':'⓶', '3':'⓷', '4':'⓸', '5':'⓹', '6':'⓺', '7':'⓻', '8':'⓼', '9':'⓽' };
const DOUBLE_STRUCK_DIGIT_MAP: Record<string, string> = { '0':'𝟘', '1':'𝟙', '2':'𝟚', '3':'𝟛', '4':'𝟜', '5':'𝟝', '6':'𝟞', '7':'𝟟', '8':'𝟠', '9':'𝟡' };
const BOLD_DIGIT_MAP: Record<string, string> = { '0':'𝟬', '1':'𝟭', '2':'𝟮', '3':'𝟯', '4':'𝟰', '5':'𝟱', '6':'𝟲', '7':'𝟳', '8':'𝟴', '9':'𝟵' };
const MONOSPACE_DIGIT_MAP: Record<string, string> = { '0':'𝟶', '1':'𝟷', '2':'𝟸', '3':'𝟹', '4':'𝟺', '5':'𝟻', '6':'𝟼', '7':'𝟽', '8':'𝟾', '9':'𝟿' };
const PARENTHESIZED_DIGIT_MAP: Record<string, string> = { '0':'⓪', '1':'⑴', '2':'⑵', '3':'⑶', '4':'⑷', '5':'⑸', '6':'⑹', '7':'⑺', '8':'⑻', '9':'⑼' };
const SUPERSCRIPT_DIGIT_MAP: Record<string, string> = { '0':'⁰', '1':'¹', '2':'²', '3':'³', '4':'⁴', '5':'⁵', '6':'⁶', '7':'⁷', '8':'⁸', '9':'⁹' };
const SUBSCRIPT_DIGIT_MAP: Record<string, string> = { '0':'₀', '1':'₁', '2':'₂', '3':'₃', '4':'₄', '5':'₅', '6':'₆', '7':'₇', '8':'₈', '9':'₉' };
const FULLWIDTH_DIGIT_MAP: Record<string, string> = { '0':'０', '1':'１', '2':'２', '3':'３', '4':'４', '5':'５', '6':'６', '7':'７', '8':'８', '9':'９' };

function mapDigits(text: string, map: Record<string, string>): string {
  return text.split('').map((c) => map[c] || c).join('');
}

// 11. Inverted / Upside Down
const UPSIDE_DOWN_MAP: Record<string, string> = {
  a: 'ɐ', b: 'q', c: 'ɔ', d: 'p', e: 'ǝ', f: 'ɟ', g: 'ƃ', h: 'ɥ', i: 'ı', j: 'ɾ',
  k: 'ʞ', l: 'l', m: 'ɯ', n: 'u', o: 'o', p: 'd', q: 'b', r: 'ɹ', s: 's', t: 'ʇ',
  u: 'n', v: 'ʌ', w: 'ʍ', x: 'x', y: 'ʎ', z: 'z',
  A: '∀', B: '𐐒', C: 'Ɔ', D: '◖', E: 'Ǝ', F: 'Ⅎ', G: '⅁', H: 'H', I: 'I', J: 'ſ',
  K: 'ʞ', L: '˥', M: 'W', N: 'N', O: 'O', P: 'Ԁ', Q: 'Ò', R: 'ᴚ', S: 'S', T: '┴',
  U: '∩', V: 'Λ', W: 'M', X: 'X', Y: '⅄', Z: 'Z',
  '0': '0', '1': '⇂', '2': 'ᄅ', '3': 'Ɛ', '4': 'ㄣ', '5': 'ϛ', '6': '9', '7': 'ㄥ', '8': '8', '9': '6',
  '!': '¡', '?': '¿', '.': '˙', ',': '\'', '"': '„', '\'': ',', '<': '>', '>': '<', '(': ')', ')': '(', '[': ']', ']': '[', '{': '}', '}': '{', '_': '‾'
};

export function flipText(text: string): string {
  return text.split('').reverse().map((c) => UPSIDE_DOWN_MAP[c] || c).join('');
}

export function reverseFlipText(text: string): string {
  return text.split('').map((c) => UPSIDE_DOWN_MAP[c] || c).join('');
}

export function mirrorText(text: string): string {
  return text.split('').reverse().join('');
}

export const FLIPPED_FONT_STYLES: FontStyle[] = [
  {
    id: 'upside-down',
    name: 'Upside Down (Terbalik & Reversed)',
    category: 'Popular',
    transform: (t) => flipText(t),
  },
  {
    id: 'flipped-text',
    name: 'Flipped Text (Terbalik Saja)',
    category: 'Popular',
    transform: (t) => reverseFlipText(t),
  },
  {
    id: 'reverse-flip',
    name: 'Reverse Mirror (Cermin Urutan)',
    category: 'Fancy',
    transform: (t) => mirrorText(t),
  },
  {
    id: 'decorative-flip-wings',
    name: 'Flipped Wings ꧁༺ ༻꧂',
    category: 'Gaming',
    transform: (t) => `꧁༺ ${flipText(t)} ༻꧂`,
  },
  {
    id: 'decorative-flip-hearts',
    name: 'Flipped Hearts ♡ ♡',
    category: 'Cute',
    transform: (t) => `♡ ${flipText(t)} ♡`,
  },
  {
    id: 'decorative-flip-sparkles',
    name: 'Flipped Sparkle ✧ ✧',
    category: 'Cute',
    transform: (t) => `✧･ﾟ: * ${flipText(t)} *:･ﾟ✧`,
  },
  {
    id: 'decorative-flip-stars',
    name: 'Flipped Stars ★彡 彡★',
    category: 'Gaming',
    transform: (t) => `★彡 ${flipText(t)} 彡★`,
  },
  {
    id: 'decorative-flip-japanese',
    name: 'Flipped Japanese 『 』',
    category: 'Fancy',
    transform: (t) => `『 ${flipText(t)} 』`,
  },
  {
    id: 'flipped-kaomoji',
    name: 'Flipped Kaomoji (⁠✿⁠ ⁠♡⁠)',
    category: 'Cute',
    transform: (t) => `(⁠✿⁠ ⁠♡⁠) ${flipText(t)} (⁠♡⁠ ⁠✿⁠)`,
  },
  {
    id: 'flipped-glitch',
    name: 'Flipped Zalgo Cyber',
    category: 'Gaming',
    transform: (t) => glitchText(flipText(t)),
  },
];

// Glitch & Zalgo Generator helpers
const ZALGO_UP = ['̍', '̎', '̄', '̅', '̿', '̑', '̆', '̐', '͒', '͗', '͑', '̇', '̈', '͐', '̀', '́', '̋', '̂', '̌', '͐'];
const ZALGO_DOWN = ['̖', '̗', '̘', '̙', '̜', '̝', '̞', '̟', '̠', '̤', '̥', '̦', '̩', '̪', '̫', '̬', '̭', '̮', '̯', '̰', '̱', '̲'];
const ZALGO_MID = ['̕', '̛', '̀', '́', '͘', '̡', '̢', '̧', '̨', '̴', '̵', '̶', '͜', '͝'];

function glitchText(text: string): string {
  return text
    .split('')
    .map((char, index) => {
      if (char === ' ') return ' ';
      const zalgoIdx = (char.charCodeAt(0) + index * 7) % ZALGO_UP.length;
      return char + ZALGO_UP[zalgoIdx];
    })
    .join('');
}

function zalgoHeavyText(text: string): string {
  return text
    .split('')
    .map((char, index) => {
      if (char === ' ') return ' ';
      const upIdx = (char.charCodeAt(0) + index * 11) % ZALGO_UP.length;
      const midIdx = (char.charCodeAt(0) + index * 13) % ZALGO_MID.length;
      const downIdx = (char.charCodeAt(0) + index * 17) % ZALGO_DOWN.length;
      return char + ZALGO_UP[upIdx] + ZALGO_MID[midIdx] + ZALGO_DOWN[downIdx];
    })
    .join('');
}

export const SCARY_FONT_STYLES: FontStyle[] = [
  {
    id: 'glitch-text',
    name: 'Glitch Text (Zalgo Ringan)',
    category: 'Gaming',
    transform: (t) => glitchText(t),
  },
  {
    id: 'zalgo-heavy',
    name: 'Zalgo Text (Distorted Heavy)',
    category: 'Gaming',
    transform: (t) => zalgoHeavyText(t),
  },
  {
    id: 'horror-gothic',
    name: 'Horror Gothic (Fraktur Bold)',
    category: 'Gothic',
    transform: (t) => mapChars(t, GOTHIC_BOLD_MAP),
  },
  {
    id: 'creepy-blackletter',
    name: 'Creepy Blackletter (Fraktur)',
    category: 'Gothic',
    transform: (t) => mapChars(t, FRAKTUR_REGULAR_MAP),
  },
  {
    id: 'demon-skull',
    name: 'Demon Skull 💀 💀',
    category: 'Gaming',
    transform: (t) => `💀 ${glitchText(t)} 💀`,
  },
  {
    id: 'horror-crosses',
    name: 'Horror Crosses ✝️ ✝️',
    category: 'Gothic',
    transform: (t) => `✝️ ${zalgoHeavyText(t)} ✝️`,
  },
  {
    id: 'creepy-wings',
    name: 'Creepy Wings ꧁༺ ༻꧂',
    category: 'Gaming',
    transform: (t) => `꧁༺ ${glitchText(t)} ༻꧂`,
  },
  {
    id: 'zalgo-brackets',
    name: 'Zalgo Brackets ⦇ ⦈',
    category: 'Gaming',
    transform: (t) => `⦇ ${zalgoHeavyText(t)} ⦈`,
  },
  {
    id: 'creepy-japanese',
    name: 'Creepy Japanese 『 』',
    category: 'Fancy',
    transform: (t) => `『 ${glitchText(t)} 』`,
  },
  {
    id: 'demon-clan',
    name: 'Demon Clan Tag 帝',
    category: 'Gaming',
    transform: (t) => `帝• ${glitchText(mapChars(t, GOTHIC_BOLD_MAP))} •帝`,
  },
];

export const SPARKLY_FONT_STYLES: FontStyle[] = [
  {
    id: 'sparkle-sparkle',
    name: 'Sparkle Sparkle ✨ ✨',
    category: 'Cute',
    transform: (t) => `✨ ${t} ✨`,
  },
  {
    id: 'star-sparkle',
    name: 'Star Sparkle ✧ ✧',
    category: 'Cute',
    transform: (t) => `✧ ${mapChars(t, SMALL_CAPS_MAP)} ✧`,
  },
  {
    id: 'little-stars',
    name: 'Little Stars ⋆ ⋆',
    category: 'Cute',
    transform: (t) => `⋆ ${t} ⋆`,
  },
  {
    id: 'flower-blossom',
    name: 'Flower Blossom ❈ ❈',
    category: 'Fancy',
    transform: (t) => `❈ ${mapChars(t, CURSIVE_MAP)} ❈`,
  },
  {
    id: 'four-star',
    name: 'Four Star ✦ ✦',
    category: 'Popular',
    transform: (t) => `✦ ${mapChars(t, SMALL_CAPS_MAP)} ✦`,
  },
  {
    id: 'sparkle-wings',
    name: 'Sparkle Wings ꧁༺ ✨ ༻꧂',
    category: 'Gaming',
    transform: (t) => `꧁༺ ✨ ${t} ✨ ༻꧂`,
  },
  {
    id: 'sparkle-hearts',
    name: 'Sparkle Hearts ♡ ✨ ♡',
    category: 'Cute',
    transform: (t) => `♡ ✨ ${t} ✨ ♡`,
  },
  {
    id: 'diamond-sparkle',
    name: 'Diamond Sparkle ♦ ✧ ♦',
    category: 'Fancy',
    transform: (t) => `♦ ✧ ${mapChars(t, SMALL_CAPS_MAP)} ✧ ♦`,
  },
  {
    id: 'galaxy-stars',
    name: 'Galaxy Stars ★彡 彡★',
    category: 'Gaming',
    transform: (t) => `★彡 ✧ ${mapChars(t, SMALL_CAPS_MAP)} ✧ 彡★`,
  },
  {
    id: 'luxury-japanese',
    name: 'Luxury Japanese 『 ✨ 』',
    category: 'Fancy',
    transform: (t) => `『 ✨ ${mapChars(t, CURSIVE_MAP)} ✨ 』`,
  },
];

export const CONNECTED_FONT_STYLES: FontStyle[] = [
  {
    id: 'script-regular',
    name: 'Script Regular (Tulisan Sambung)',
    category: 'Fancy',
    transform: (t) => mapChars(t, CURSIVE_MAP),
  },
  {
    id: 'connected-bold-script',
    name: 'Connected Bold Script (Sambung Tebal)',
    category: 'Fancy',
    transform: (t) => mapChars(t, BOLD_CURSIVE_MAP),
  },
  {
    id: 'elegant-handwriting',
    name: 'Elegant Handwriting (Kaligrafi Halus)',
    category: 'Fancy',
    transform: (t) => mapChars(t, CURSIVE_MAP),
  },
  {
    id: 'signature-style',
    name: 'Signature Style (Tanda Tangan)',
    category: 'Fancy',
    transform: (t) => mapChars(t, BOLD_CURSIVE_MAP),
  },
  {
    id: 'flowing-script',
    name: 'Flowing Script (Sambung Mengalir)',
    category: 'Fancy',
    transform: (t) => mapChars(t, CURSIVE_MAP),
  },
  {
    id: 'signature-wings',
    name: 'Signature Wings ꧁༺ ༻꧂',
    category: 'Gaming',
    transform: (t) => `꧁༺ ${mapChars(t, CURSIVE_MAP)} ༻꧂`,
  },
  {
    id: 'connected-hearts',
    name: 'Connected Hearts ♡ ♡',
    category: 'Cute',
    transform: (t) => `♡ ${mapChars(t, CURSIVE_MAP)} ♡`,
  },
  {
    id: 'connected-sparkles',
    name: 'Connected Sparkle ✧ ✧',
    category: 'Cute',
    transform: (t) => `✧･ﾟ: * ${mapChars(t, CURSIVE_MAP)} *:･ﾟ✧`,
  },
  {
    id: 'connected-stars',
    name: 'Connected Stars ★彡 彡★',
    category: 'Gaming',
    transform: (t) => `★彡 ${mapChars(t, CURSIVE_MAP)} 彡★`,
  },
  {
    id: 'connected-royal',
    name: 'Connected Royal Crown 👑',
    category: 'Fancy',
    transform: (t) => `👑 ${mapChars(t, BOLD_CURSIVE_MAP)} 👑`,
  },
];

export const SQUARE_FONT_STYLES: FontStyle[] = [
  {
    id: 'square-outline',
    name: 'Square Outline 🄰🄷🅂🄰🄽',
    category: 'Popular',
    transform: (t) => mapChars(t, SQUARE_MAP),
  },
  {
    id: 'dark-square',
    name: 'Dark Box 🅰🅷🆂🅰🅽',
    category: 'Popular',
    transform: (t) => mapChars(t, DARK_SQUARE_MAP),
  },
  {
    id: 'squared-small-caps',
    name: 'Squared Small Caps 🄰ʜsᴀɴ',
    category: 'Fancy',
    transform: (t) => mapChars(t, SQUARE_MAP),
  },
  {
    id: 'square-wings',
    name: 'Square Wings ꧁༺ 🄰🄷🅂🄰🄽 ༻꧂',
    category: 'Gaming',
    transform: (t) => `꧁༺ ${mapChars(t, SQUARE_MAP)} ༻꧂`,
  },
  {
    id: 'square-hearts',
    name: 'Square Hearts ♡ 🄰🄷🅂🄰🄽 ♡',
    category: 'Cute',
    transform: (t) => `♡ ${mapChars(t, SQUARE_MAP)} ♡`,
  },
  {
    id: 'square-sparkles',
    name: 'Square Sparkle ✧ 🄰🄷🅂🄰🄽 ✧',
    category: 'Cute',
    transform: (t) => `✧ ${mapChars(t, SQUARE_MAP)} ✧`,
  },
  {
    id: 'square-stars',
    name: 'Square Stars ★彡 🄰🄷🅂🄰🄽 彡★',
    category: 'Gaming',
    transform: (t) => `★彡 ${mapChars(t, SQUARE_MAP)} 彡★`,
  },
  {
    id: 'square-japanese',
    name: 'Square Japanese 『 🄰🄷🅂🄰🄽 』',
    category: 'Fancy',
    transform: (t) => `『 ${mapChars(t, SQUARE_MAP)} 』`,
  },
  {
    id: 'square-royal',
    name: 'Square Royal Crown 👑',
    category: 'Gaming',
    transform: (t) => `👑 ${mapChars(t, SQUARE_MAP)} 👑`,
  },
  {
    id: 'square-crosses',
    name: 'Square Crosses ⚔️ 🄰🄷🅂🄰🄽 ⚔️',
    category: 'Gaming',
    transform: (t) => `⚔️ ${mapChars(t, SQUARE_MAP)} ⚔️`,
  },
];

export const NUMBER_FONT_STYLES: FontStyle[] = [
  {
    id: 'circled-numbers',
    name: 'Circled Numbers ①②③④⑤',
    category: 'Popular',
    transform: (t) => mapDigits(t, CIRCLED_DIGIT_MAP),
  },
  {
    id: 'dark-circled-numbers',
    name: 'Dark Circled Numbers ➊➋➌➍➎',
    category: 'Popular',
    transform: (t) => mapDigits(t, DARK_CIRCLED_DIGIT_MAP),
  },
  {
    id: 'double-circled-numbers',
    name: 'Double Circled Numbers ⓵⓶⓷⓸⓹',
    category: 'Fancy',
    transform: (t) => mapDigits(t, DOUBLE_CIRCLED_DIGIT_MAP),
  },
  {
    id: 'math-double-struck-numbers',
    name: 'Mathematical Double Struck 𝟙𝟚𝟛𝟜𝟝',
    category: 'Fancy',
    transform: (t) => mapDigits(t, DOUBLE_STRUCK_DIGIT_MAP),
  },
  {
    id: 'math-bold-numbers',
    name: 'Mathematical Bold 𝟭𝟮𝟯𝟰𝟱',
    category: 'Popular',
    transform: (t) => mapDigits(t, BOLD_DIGIT_MAP),
  },
  {
    id: 'monospace-numbers',
    name: 'Monospace Numbers 𝟷𝟸𝟹𝟺𝟻',
    category: 'Fancy',
    transform: (t) => mapDigits(t, MONOSPACE_DIGIT_MAP),
  },
  {
    id: 'parenthesized-numbers',
    name: 'Parenthesized Numbers ⑴⑵⑶⑷⑸',
    category: 'Fancy',
    transform: (t) => mapDigits(t, PARENTHESIZED_DIGIT_MAP),
  },
  {
    id: 'superscript-numbers',
    name: 'Superscript Numbers ¹²³⁴⁵',
    category: 'Cute',
    transform: (t) => mapDigits(t, SUPERSCRIPT_DIGIT_MAP),
  },
  {
    id: 'subscript-numbers',
    name: 'Subscript Numbers ₁₂₃₄₅',
    category: 'Cute',
    transform: (t) => mapDigits(t, SUBSCRIPT_DIGIT_MAP),
  },
  {
    id: 'fullwidth-numbers',
    name: 'Fullwidth Numbers １２３４５',
    category: 'Fancy',
    transform: (t) => mapDigits(t, FULLWIDTH_DIGIT_MAP),
  },
];

// Strikethrough Combining Functions
function strikethroughText(text: string): string {
  return text.split('').map((char) => char + '\u0336').join('');
}

function doubleStrikethroughText(text: string): string {
  return text.split('').map((char) => char + '\u0336\u0336').join('');
}

function slashText(text: string): string {
  return text.split('').map((char) => char + '\u0337').join('');
}

function tildeText(text: string): string {
  return text.split('').map((char) => char + '\u0334').join('');
}

function crossHatchText(text: string): string {
  return text.split('').map((char) => char + '\u0335').join('');
}

export const STRIKETHROUGH_FONT_STYLES: FontStyle[] = [
  {
    id: 'single-strikethrough',
    name: 'Single Strikethrough (Garis Coret Single)',
    category: 'Popular',
    transform: (t) => strikethroughText(t),
  },
  {
    id: 'double-strikethrough',
    name: 'Double Strikethrough (Garis Coret Ganda)',
    category: 'Popular',
    transform: (t) => doubleStrikethroughText(t),
  },
  {
    id: 'slash-style',
    name: 'Slash Style (Coret Miring /)',
    category: 'Fancy',
    transform: (t) => slashText(t),
  },
  {
    id: 'tilde-strike',
    name: 'Tilde Strike (Garis Gelombang ~)',
    category: 'Fancy',
    transform: (t) => tildeText(t),
  },
  {
    id: 'cross-hatch',
    name: 'Cross Hatch Strike (Short Stroke)',
    category: 'Fancy',
    transform: (t) => crossHatchText(t),
  },
  {
    id: 'strike-wings',
    name: 'Strike Wings ꧁༺ ༻꧂',
    category: 'Gaming',
    transform: (t) => `꧁༺ ${strikethroughText(t)} ༻꧂`,
  },
  {
    id: 'strike-hearts',
    name: 'Strike Hearts ♡ ♡',
    category: 'Cute',
    transform: (t) => `♡ ${strikethroughText(t)} ♡`,
  },
  {
    id: 'strike-sparkles',
    name: 'Strike Sparkle ✧ ✧',
    category: 'Cute',
    transform: (t) => `✧･ﾟ: * ${strikethroughText(t)} *:･ﾟ✧`,
  },
  {
    id: 'strike-stars',
    name: 'Strike Stars ★彡 彡★',
    category: 'Gaming',
    transform: (t) => `★彡 ${strikethroughText(t)} 彡★`,
  },
  {
    id: 'strike-japanese',
    name: 'Strike Japanese 『 』',
    category: 'Fancy',
    transform: (t) => `『 ${strikethroughText(t)} 』`,
  },
];

export const BUBBLE_FONT_STYLES: FontStyle[] = [
  {
    id: 'bubble-light',
    name: 'Circle Outline (Bulat)',
    category: 'Cute',
    transform: (t) => mapChars(t, BUBBLE_MAP),
  },
  {
    id: 'dark-bubble',
    name: 'Filled Circle (Lingkaran Hitam)',
    category: 'Cute',
    transform: (t) => mapChars(t, DARK_BUBBLE_MAP),
  },
  {
    id: 'square-box',
    name: 'Square Outline (Kotak)',
    category: 'Cute',
    transform: (t) => mapChars(t, SQUARE_MAP),
  },
  {
    id: 'bubble-hearts',
    name: 'Bubble Hearts ♡ ♡',
    category: 'Cute',
    transform: (t) => `♡ ${mapChars(t, BUBBLE_MAP)} ♡`,
  },
  {
    id: 'bubble-sparkles',
    name: 'Bubble Sparkle ✧ ✧',
    category: 'Cute',
    transform: (t) => `✧･ﾟ: * ${mapChars(t, BUBBLE_MAP)} *:･ﾟ✧`,
  },
  {
    id: 'bubble-wings',
    name: 'Bubble Wings ꧁༺ ༻꧂',
    category: 'Cute',
    transform: (t) => `꧁༺ ${mapChars(t, BUBBLE_MAP)} ༻꧂`,
  },
  {
    id: 'bubble-stars',
    name: 'Bubble Stars ★彡 彡★',
    category: 'Cute',
    transform: (t) => `★彡 ${mapChars(t, BUBBLE_MAP)} 彡★`,
  },
  {
    id: 'bubble-japanese',
    name: 'Bubble Japanese 『 』',
    category: 'Cute',
    transform: (t) => `『 ${mapChars(t, BUBBLE_MAP)} 』`,
  },
  {
    id: 'bubble-cute-kaomoji',
    name: 'Bubble Kaomoji (⁠✿⁠ ⁠♡⁠)',
    category: 'Cute',
    transform: (t) => `(⁠✿⁠ ⁠♡⁠) ${mapChars(t, BUBBLE_MAP)} (⁠♡⁠ ⁠✿⁠)`,
  },
  {
    id: 'bubble-dark-stars',
    name: 'Filled Circle Stars ★ ★',
    category: 'Cute',
    transform: (t) => `★ ${mapChars(t, DARK_BUBBLE_MAP)} ★`,
  },
];

export const GOTHIC_FONT_STYLES: FontStyle[] = [
  {
    id: 'gothic-bold',
    name: 'Gothic Bold (Fraktur)',
    category: 'Gothic',
    transform: (t) => mapChars(t, GOTHIC_BOLD_MAP),
  },
  {
    id: 'fraktur-regular',
    name: 'Fraktur Normal (Blackletter)',
    category: 'Gothic',
    transform: (t) => mapChars(t, FRAKTUR_REGULAR_MAP),
  },
  {
    id: 'gothic-wings',
    name: 'Gothic Wings ꧁༺ ༻꧂',
    category: 'Gothic',
    transform: (t) => `꧁༺ ${mapChars(t, GOTHIC_BOLD_MAP)} ༻꧂`,
  },
  {
    id: 'blackletter-swords',
    name: 'Blackletter Swords ⚔️',
    category: 'Gothic',
    transform: (t) => `⚔️ ${mapChars(t, FRAKTUR_REGULAR_MAP)} ⚔️`,
  },
  {
    id: 'dark-gothic-brackets',
    name: 'Dark Gothic Brackets ⦇ ⦈',
    category: 'Gothic',
    transform: (t) => `⦇ ${mapChars(t, GOTHIC_BOLD_MAP)} ⦈`,
  },
  {
    id: 'royal-gothic-crown',
    name: 'Royal Gothic Crown ♛',
    category: 'Gothic',
    transform: (t) => `♛ ${mapChars(t, FRAKTUR_REGULAR_MAP)} ♛`,
  },
  {
    id: 'gothic-skull-deco',
    name: 'Gothic Skull 💀',
    category: 'Gothic',
    transform: (t) => `💀 ${mapChars(t, GOTHIC_BOLD_MAP)} 💀`,
  },
  {
    id: 'gothic-japanese-brackets',
    name: 'Medieval Japanese 『 』',
    category: 'Gothic',
    transform: (t) => `『 ${mapChars(t, FRAKTUR_REGULAR_MAP)} 』`,
  },
  {
    id: 'gothic-cross-clan',
    name: 'Gothic Clan Tag 帝',
    category: 'Gothic',
    transform: (t) => `帝• ${mapChars(t, GOTHIC_BOLD_MAP)} •帝`,
  },
  {
    id: 'gothic-glitch',
    name: 'Dark Glitch Fraktur',
    category: 'Gothic',
    transform: (t) => glitchText(mapChars(t, GOTHIC_BOLD_MAP)),
  },
];

export const TINY_FONT_STYLES: FontStyle[] = [
  {
    id: 'superscript',
    name: 'Superscript (Tiny Raised)',
    category: 'Cute',
    transform: (t) => mapChars(t, SUPERSCRIPT_MAP),
  },
  {
    id: 'small-caps',
    name: 'Small Caps (Kapital Mini)',
    category: 'Popular',
    transform: (t) => mapChars(t, SMALL_CAPS_MAP),
  },
  {
    id: 'subscript',
    name: 'Subscript (Tiny Low)',
    category: 'Cute',
    transform: (t) => mapChars(t, SUBSCRIPT_MAP),
  },
  {
    id: 'tiny-wings',
    name: 'Tiny Wings ꧁༺ ༻꧂',
    category: 'Cute',
    transform: (t) => `꧁༺ ${mapChars(t, SUPERSCRIPT_MAP)} ༻꧂`,
  },
  {
    id: 'tiny-hearts',
    name: 'Tiny Hearts ♡ ♡',
    category: 'Cute',
    transform: (t) => `♡ ${mapChars(t, SUPERSCRIPT_MAP)} ♡`,
  },
  {
    id: 'tiny-sparkles',
    name: 'Tiny Sparkle ✧ ✧',
    category: 'Cute',
    transform: (t) => `✧･ﾟ: * ${mapChars(t, SUPERSCRIPT_MAP)} *:･ﾟ✧`,
  },
  {
    id: 'tiny-stars',
    name: 'Tiny Stars ★彡 彡★',
    category: 'Cute',
    transform: (t) => `★彡 ${mapChars(t, SUPERSCRIPT_MAP)} 彡★`,
  },
  {
    id: 'tiny-small-caps-wings',
    name: 'Small Caps Wings ꧁༺ ༻꧂',
    category: 'Popular',
    transform: (t) => `꧁༺ ${mapChars(t, SMALL_CAPS_MAP)} ༻꧂`,
  },
  {
    id: 'tiny-japanese',
    name: 'Tiny Japanese 『 』',
    category: 'Cute',
    transform: (t) => `『 ${mapChars(t, SUPERSCRIPT_MAP)} 』`,
  },
  {
    id: 'tiny-kaomoji',
    name: 'Tiny Kaomoji (⁠✿⁠ ⁠♡⁠)',
    category: 'Cute',
    transform: (t) => `(⁠✿⁠ ⁠♡⁠) ${mapChars(t, SUPERSCRIPT_MAP)} (⁠♡⁠ ⁠✿⁠)`,
  },
];

export const ALL_FONT_STYLES: FontStyle[] = [
  {
    id: 'huruf-keren',
    name: 'Huruf Keren (Aesthetic)',
    category: 'Popular',
    transform: (t) => mapChars(t, SMALL_CAPS_MAP),
  },
  {
    id: 'bubble-light',
    name: 'Bubble Text (Melingkar)',
    category: 'Cute',
    transform: (t) => mapChars(t, BUBBLE_MAP),
  },
  {
    id: 'dark-bubble',
    name: 'Dark Bubble (Lingkaran Hitam)',
    category: 'Cute',
    transform: (t) => mapChars(t, DARK_BUBBLE_MAP),
  },
  {
    id: 'gothic-bold',
    name: 'Gothic / Fraktur',
    category: 'Gothic',
    transform: (t) => mapChars(t, GOTHIC_BOLD_MAP),
  },
  {
    id: 'fraktur-regular',
    name: 'Fraktur Normal (Blackletter)',
    category: 'Gothic',
    transform: (t) => mapChars(t, FRAKTUR_REGULAR_MAP),
  },
  {
    id: 'cursive-script',
    name: 'Cursive (Tulisan Tangan)',
    category: 'Fancy',
    transform: (t) => mapChars(t, CURSIVE_MAP),
  },
  {
    id: 'bold-sans',
    name: 'Bold / Tebal',
    category: 'Popular',
    transform: (t) => mapChars(t, BOLD_SANS_MAP),
  },
  {
    id: 'double-struck',
    name: 'Blackboard / Double Struck',
    category: 'Fancy',
    transform: (t) => mapChars(t, DOUBLE_STRUCK_MAP),
  },
  {
    id: 'square-box',
    name: 'Kotak (Square)',
    category: 'Gaming',
    transform: (t) => mapChars(t, SQUARE_MAP),
  },
  {
    id: 'vaporwave',
    name: 'Vaporwave (Fullwidth)',
    category: 'Simple',
    transform: (t) => mapChars(t, FULLWIDTH_MAP),
  },
  {
    id: 'superscript',
    name: 'Small Superscript (Kecil)',
    category: 'Cute',
    transform: (t) => mapChars(t, SUPERSCRIPT_MAP),
  },
  {
    id: 'glitch-zalgo',
    name: 'Glitch / Zalgo (Cyber)',
    category: 'Gaming',
    transform: (t) => glitchText(t),
  },
  {
    id: 'border-wings',
    name: 'Wings Border ꧁༺ ༻꧂',
    category: 'Gaming',
    transform: (t) => `꧁༺ ${mapChars(t, SMALL_CAPS_MAP)} ༻꧂`,
  },
  {
    id: 'star-borders',
    name: 'Stars Deco ★彡 彡★',
    category: 'Fancy',
    transform: (t) => `★彡 ${t} 彡★`,
  },
  {
    id: 'heart-sides',
    name: 'Heart Deco ♡ ♡',
    category: 'Cute',
    transform: (t) => `♡ ${mapChars(t, CURSIVE_MAP)} ♡`,
  },
  {
    id: 'sparkle-deco',
    name: 'Sparkle ✧ ✧',
    category: 'Cute',
    transform: (t) => `✧･ﾟ: * ${t} *:･ﾟ✧`,
  },
  {
    id: 'upside-down',
    name: 'Terbalik (Inverted)',
    category: 'Simple',
    transform: (t) => t.split('').reverse().map((c) => UPSIDE_DOWN_MAP[c] || c).join(''),
  },
  {
    id: 'japanese-style',
    name: 'Japanese Aesthetic',
    category: 'Gaming',
    transform: (t) => `『${t}』`,
  },
  {
    id: 'bracket-style',
    name: 'Cross Bracket ⚔️',
    category: 'Gaming',
    transform: (t) => `⚔️ ${mapChars(t, SMALL_CAPS_MAP)} ⚔️`,
  },
];

export function transformText(text: string, styleId: string): string {
  const style =
    ALL_FONT_STYLES.find((s) => s.id === styleId) ||
    GOTHIC_FONT_STYLES.find((s) => s.id === styleId) ||
    BUBBLE_FONT_STYLES.find((s) => s.id === styleId) ||
    TINY_FONT_STYLES.find((s) => s.id === styleId) ||
    STRIKETHROUGH_FONT_STYLES.find((s) => s.id === styleId) ||
    FLIPPED_FONT_STYLES.find((s) => s.id === styleId) ||
    SCARY_FONT_STYLES.find((s) => s.id === styleId) ||
    SPARKLY_FONT_STYLES.find((s) => s.id === styleId) ||
    CONNECTED_FONT_STYLES.find((s) => s.id === styleId) ||
    SQUARE_FONT_STYLES.find((s) => s.id === styleId) ||
    NUMBER_FONT_STYLES.find((s) => s.id === styleId);
  if (!style) return text;
  return style.transform(text);
}
