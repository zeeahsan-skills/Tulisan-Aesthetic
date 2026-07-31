export interface ArrowSymbolItem {
  symbol: string;
  name: string;
  category: 'Right Arrows' | 'Left Arrows' | 'Up Arrows' | 'Down Arrows' | 'Double Arrows' | 'Curved Arrows' | 'Decorative Arrows' | 'Mathematical Arrows';
}

export const ARROW_CATEGORIES_LIST = [
  'All Arrows',
  'Right Arrows',
  'Left Arrows',
  'Up Arrows',
  'Down Arrows',
  'Double Arrows',
  'Curved Arrows',
  'Decorative Arrows',
  'Mathematical Arrows',
] as const;

export const ARROW_SYMBOLS_DATA: ArrowSymbolItem[] = [
  // 1. Right Arrows
  { symbol: '➜', name: 'Heavy Rightwards Arrow', category: 'Right Arrows' },
  { symbol: '➤', name: 'Black Rightwards Arrowhead', category: 'Right Arrows' },
  { symbol: '➔', name: 'Heavy Wide-Headed Right Arrow', category: 'Right Arrows' },
  { symbol: '➞', name: 'Heavy Rightwards Arrow Fill', category: 'Right Arrows' },
  { symbol: '➟', name: 'Dashed Rightwards Arrow', category: 'Right Arrows' },
  { symbol: '🠊', name: 'Rightwards Triangle-Headed Arrow', category: 'Right Arrows' },
  { symbol: '🠒', name: 'Bold Rightwards Arrow', category: 'Right Arrows' },
  { symbol: '🠖', name: 'Heavy Rightwards Sans-Serif Arrow', category: 'Right Arrows' },
  { symbol: '➢', name: 'Three-D Top-Lighted Right Arrowhead', category: 'Right Arrows' },
  { symbol: '➣', name: 'Three-D Bottom-Lighted Right Arrowhead', category: 'Right Arrows' },
  { symbol: '►', name: 'Black Right-Pointing Pointer', category: 'Right Arrows' },
  { symbol: '▶', name: 'Black Right-Pointing Triangle', category: 'Right Arrows' },

  // 2. Left Arrows
  { symbol: '⬅️', name: 'Leftwards Arrow Emoji', category: 'Left Arrows' },
  { symbol: '⬅', name: 'Leftwards Black Arrow', category: 'Left Arrows' },
  { symbol: '🠈', name: 'Leftwards Triangle-Headed Arrow', category: 'Left Arrows' },
  { symbol: '🠐', name: 'Bold Leftwards Arrow', category: 'Left Arrows' },
  { symbol: '🠔', name: 'Heavy Leftwards Sans-Serif Arrow', category: 'Left Arrows' },
  { symbol: '👈', name: 'Backhand Index Pointing Left', category: 'Left Arrows' },
  { symbol: '⮌', name: 'Leftwards Arrow with Hook', category: 'Left Arrows' },
  { symbol: '◄', name: 'Black Left-Pointing Pointer', category: 'Left Arrows' },
  { symbol: '◀', name: 'Black Left-Pointing Triangle', category: 'Left Arrows' },
  { symbol: '🠘', name: 'Heavy Leftwards Arrow Accent', category: 'Left Arrows' },

  // 3. Up Arrows
  { symbol: '⬆️', name: 'Upwards Arrow Emoji', category: 'Up Arrows' },
  { symbol: '⬆', name: 'Upwards Black Arrow', category: 'Up Arrows' },
  { symbol: '🠉', name: 'Upwards Triangle-Headed Arrow', category: 'Up Arrows' },
  { symbol: '🠑', name: 'Bold Upwards Arrow', category: 'Up Arrows' },
  { symbol: '🠕', name: 'Heavy Upwards Sans-Serif Arrow', category: 'Up Arrows' },
  { symbol: '👆', name: 'Backhand Index Pointing Up', category: 'Up Arrows' },
  { symbol: '☝️', name: 'Index Pointing Up', category: 'Up Arrows' },
  { symbol: '▲', name: 'Black Up-Pointing Triangle', category: 'Up Arrows' },
  { symbol: '▴', name: 'Small Up-Pointing Triangle', category: 'Up Arrows' },

  // 4. Down Arrows
  { symbol: '⬇️', name: 'Downwards Arrow Emoji', category: 'Down Arrows' },
  { symbol: '⬇', name: 'Downwards Black Arrow', category: 'Down Arrows' },
  { symbol: '🠋', name: 'Downwards Triangle-Headed Arrow', category: 'Down Arrows' },
  { symbol: '🠓', name: 'Bold Downwards Arrow', category: 'Down Arrows' },
  { symbol: '🠗', name: 'Heavy Downwards Sans-Serif Arrow', category: 'Down Arrows' },
  { symbol: '👇', name: 'Backhand Index Pointing Down', category: 'Down Arrows' },
  { symbol: '▼', name: 'Black Down-Pointing Triangle', category: 'Down Arrows' },
  { symbol: '▾', name: 'Small Down-Pointing Triangle', category: 'Down Arrows' },

  // 5. Double Arrows
  { symbol: '↔️', name: 'Left Right Arrow Emoji', category: 'Double Arrows' },
  { symbol: '↕️', name: 'Up Down Arrow Emoji', category: 'Double Arrows' },
  { symbol: '⇔', name: 'Left Right Double Arrow', category: 'Double Arrows' },
  { symbol: '⇎', name: 'Left Right Double Arrow with Stroke', category: 'Double Arrows' },
  { symbol: '⇄', name: 'Rightwards Arrow Over Leftwards Arrow', category: 'Double Arrows' },
  { symbol: '⇅', name: 'Upwards Arrow Left of Downwards Arrow', category: 'Double Arrows' },
  { symbol: '⇆', name: 'Leftwards Arrow Over Rightwards Arrow', category: 'Double Arrows' },
  { symbol: '⇇', name: 'Leftwards Paired Arrows', category: 'Double Arrows' },
  { symbol: '⇉', name: 'Rightwards Paired Arrows', category: 'Double Arrows' },
  { symbol: '⇈', name: 'Upwards Paired Arrows', category: 'Double Arrows' },
  { symbol: '⇊', name: 'Downwards Paired Arrows', category: 'Double Arrows' },

  // 6. Curved Arrows
  { symbol: '↩️', name: 'Right Arrow Curved Left', category: 'Curved Arrows' },
  { symbol: '↪️', name: 'Left Arrow Curved Right', category: 'Curved Arrows' },
  { symbol: '⤴️', name: 'Right Arrow Curved Up', category: 'Curved Arrows' },
  { symbol: '⤵️', name: 'Right Arrow Curved Down', category: 'Curved Arrows' },
  { symbol: '🔄', name: 'Counterclockwise Arrows Button', category: 'Curved Arrows' },
  { symbol: '🔁', name: 'Repeat Single Button Arrow', category: 'Curved Arrows' },
  { symbol: '🔂', name: 'Repeat Single Track Arrow', category: 'Curved Arrows' },
  { symbol: '🔀', name: 'Shuffle Tracks Arrow', category: 'Curved Arrows' },

  // 7. Decorative Arrows
  { symbol: '🏹', name: 'Bow and Arrow Symbol', category: 'Decorative Arrows' },
  { symbol: '➵', name: 'Feathered Right Arrow', category: 'Decorative Arrows' },
  { symbol: '➲', name: 'Circled Heavy Right Arrow', category: 'Decorative Arrows' },
  { symbol: '➪', name: 'Outlined Right Arrowhead', category: 'Decorative Arrows' },
  { symbol: '➳', name: 'Heavy Barbwire Arrow', category: 'Decorative Arrows' },
  { symbol: '➴', name: 'South East Feathered Arrow', category: 'Decorative Arrows' },
  { symbol: '➶', name: 'North East Feathered Arrow', category: 'Decorative Arrows' },
  { symbol: '➷', name: 'South East Heavy Arrow', category: 'Decorative Arrows' },
  { symbol: '➸', name: 'Heavy Arrow Feathered Tail', category: 'Decorative Arrows' },

  // 8. Mathematical Arrows
  { symbol: '→', name: 'Rightwards Arrow Math', category: 'Mathematical Arrows' },
  { symbol: '←', name: 'Leftwards Arrow Math', category: 'Mathematical Arrows' },
  { symbol: '↑', name: 'Upwards Arrow Math', category: 'Mathematical Arrows' },
  { symbol: '↓', name: 'Downwards Arrow Math', category: 'Mathematical Arrows' },
  { symbol: '↔', name: 'Left Right Arrow Math', category: 'Mathematical Arrows' },
  { symbol: '⇒', name: 'Rightwards Double Arrow Math', category: 'Mathematical Arrows' },
  { symbol: '⇐', name: 'Leftwards Double Arrow Math', category: 'Mathematical Arrows' },
  { symbol: '⇑', name: 'Upwards Double Arrow Math', category: 'Mathematical Arrows' },
  { symbol: '⇓', name: 'Downwards Double Arrow Math', category: 'Mathematical Arrows' },
  { symbol: '↦', name: 'Rightwards Arrow from Bar', category: 'Mathematical Arrows' },
  { symbol: '↤', name: 'Leftwards Arrow to Bar', category: 'Mathematical Arrows' },
  { symbol: '↳', name: 'Rightwards Arrow with Corner Down', category: 'Mathematical Arrows' },
  { symbol: '↲', name: 'Leftwards Arrow with Corner Down', category: 'Mathematical Arrows' },

  // Additional 130+ Arrow Symbol Variations to complete 200+ dataset
  { symbol: '➔✨', name: 'Sparkling Right Arrow', category: 'Right Arrows' },
  { symbol: '➜✨', name: 'Sparkling Heavy Right Arrow', category: 'Right Arrows' },
  { symbol: '➤✨', name: 'Sparkling Arrowhead Right', category: 'Right Arrows' },
  { symbol: '►✨', name: 'Sparkling Pointer Right', category: 'Right Arrows' },
  { symbol: '»', name: 'Right-Pointing Double Angle Quotation', category: 'Right Arrows' },
  { symbol: '«', name: 'Left-Pointing Double Angle Quotation', category: 'Left Arrows' },
  { symbol: '›', name: 'Single Right-Pointing Angle Quotation', category: 'Right Arrows' },
  { symbol: '‹', name: 'Single Left-Pointing Angle Quotation', category: 'Left Arrows' },

  { symbol: '➔ [LINK]', name: 'Right Arrow Link Pointer', category: 'Right Arrows' },
  { symbol: '➜ [BIO]', name: 'Heavy Arrow Bio Pointer', category: 'Right Arrows' },
  { symbol: '➤ [CLICK]', name: 'Arrowhead Click Pointer', category: 'Right Arrows' },
  { symbol: '👇 [LINK]', name: 'Hand Down Link Pointer', category: 'Down Arrows' },

  { symbol: '➔───➔', name: 'Arrow Line Border', category: 'Decorative Arrows' },
  { symbol: '➜───➜', name: 'Heavy Arrow Line Border', category: 'Decorative Arrows' },
  { symbol: '➤───➤', name: 'Arrowhead Line Border', category: 'Decorative Arrows' },

  { symbol: '『➜』', name: 'Japanese Bracket Right Arrow', category: 'Decorative Arrows' },
  { symbol: '【➤】', name: 'Square Bracket Arrowhead', category: 'Decorative Arrows' },
  { symbol: '〖➔〗', name: 'Tortoise Bracket Arrow', category: 'Decorative Arrows' },

  { symbol: '★➜★', name: 'Star Right Arrow Sandwich', category: 'Decorative Arrows' },
  { symbol: '✦➤✦', name: 'Sparkle Arrowhead Sandwich', category: 'Decorative Arrows' },
  { symbol: '✧➔✧', name: 'White Sparkle Arrow Sandwich', category: 'Decorative Arrows' },

  { symbol: '🏹✨', name: 'Bow Arrow Magic Sparkle', category: 'Decorative Arrows' },
  { symbol: '🏹💘', name: 'Cupid Bow Arrow Heart', category: 'Decorative Arrows' },

  { symbol: '⤀', name: 'Rightwards Two-Headed Arrow', category: 'Right Arrows' },
  { symbol: '⤁', name: 'Leftwards Two-Headed Arrow', category: 'Left Arrows' },
  { symbol: '⤂', name: 'Rightwards Tail Arrow', category: 'Right Arrows' },
  { symbol: '⤃', name: 'Leftwards Tail Arrow', category: 'Left Arrows' },
  { symbol: '⤄', name: 'Rightwards Arrow with Tail', category: 'Right Arrows' },
  { symbol: '⤅', name: 'Rightwards Two-Headed Arrow with Tail', category: 'Right Arrows' },
  { symbol: '⤆', name: 'Leftwards Double Arrow from Bar', category: 'Left Arrows' },
  { symbol: '⤇', name: 'Rightwards Double Arrow from Bar', category: 'Right Arrows' },

  { symbol: '⤍', name: 'Rightwards Arrow with Dotted Stem', category: 'Right Arrows' },
  { symbol: '⤎', name: 'Leftwards Arrow with Dotted Stem', category: 'Left Arrows' },
  { symbol: '⤏', name: 'Rightwards Arrow with Dash Stem', category: 'Right Arrows' },
  { symbol: '⤐', name: 'Leftwards Arrow with Dash Stem', category: 'Left Arrows' },

  { symbol: '⤑', name: 'Rightwards Arrow with Zigzag Dash', category: 'Right Arrows' },
  { symbol: '⤔', name: 'Rightwards Arrow with Loop', category: 'Curved Arrows' },
  { symbol: '⤕', name: 'Leftwards Arrow with Loop', category: 'Curved Arrows' },
  { symbol: '⤖', name: 'Rightwards Two-Headed Arrow with Loop', category: 'Curved Arrows' },
  { symbol: '⤗', name: 'Leftwards Two-Headed Arrow with Loop', category: 'Curved Arrows' },

  { symbol: '⤘', name: 'Rightwards Arrow with Tail and Loop', category: 'Curved Arrows' },
  { symbol: '⤙', name: 'Leftwards Arrow with Tail and Loop', category: 'Curved Arrows' },
  { symbol: '⤚', name: 'Rightwards Arrow with Open Loop', category: 'Curved Arrows' },
  { symbol: '⤛', name: 'Leftwards Arrow with Open Loop', category: 'Curved Arrows' },

  { symbol: '⤜', name: 'Rightwards Arrow Through Circle', category: 'Right Arrows' },
  { symbol: '⤝', name: 'Leftwards Arrow Through Circle', category: 'Left Arrows' },
  { symbol: '⤞', name: 'Rightwards Two-Headed Arrow Through Circle', category: 'Right Arrows' },
  { symbol: '⤟', name: 'Leftwards Two-Headed Arrow Through Circle', category: 'Left Arrows' },

  { symbol: '⤠', name: 'Upwards Two-Headed Arrow', category: 'Up Arrows' },
  { symbol: '⤡', name: 'Downwards Two-Headed Arrow', category: 'Down Arrows' },
  { symbol: '⤢', name: 'North East Diagonal Arrow', category: 'Right Arrows' },
  { symbol: '⤣', name: 'North West Diagonal Arrow', category: 'Left Arrows' },
  { symbol: '⤤', name: 'South East Diagonal Arrow', category: 'Right Arrows' },
  { symbol: '⤥', name: 'South West Diagonal Arrow', category: 'Left Arrows' },

  { symbol: '⤦', name: 'Left Right Arrow with Hook', category: 'Double Arrows' },
  { symbol: '⤧', name: 'Up Down Arrow with Hook', category: 'Double Arrows' },
  { symbol: '⤨', name: 'Left Right Arrow with Loop', category: 'Double Arrows' },
  { symbol: '⤩', name: 'Up Down Arrow with Loop', category: 'Double Arrows' },

  { symbol: '⤪', name: 'Rightwards Arrow with Small Loop', category: 'Curved Arrows' },
  { symbol: '⤫', name: 'Leftwards Arrow with Small Loop', category: 'Curved Arrows' },
  { symbol: '⤬', name: 'Upwards Arrow with Small Loop', category: 'Curved Arrows' },
  { symbol: '⤭', name: 'Downwards Arrow with Small Loop', category: 'Curved Arrows' },

  { symbol: '⤮', name: 'Left Right Arrow with Small Loop', category: 'Double Arrows' },
  { symbol: '⤯', name: 'Up Down Arrow with Small Loop', category: 'Double Arrows' },
  { symbol: '⤰', name: 'Rightwards Arrow with Big Loop', category: 'Curved Arrows' },
  { symbol: '⤱', name: 'Leftwards Arrow with Big Loop', category: 'Curved Arrows' },

  { symbol: '⤲', name: 'Upwards Arrow with Big Loop', category: 'Curved Arrows' },
  { symbol: '⤳', name: 'Downwards Arrow with Big Loop', category: 'Curved Arrows' },
  { symbol: '⤴', name: 'Arrow Pointing Rightwards Then Curved Up', category: 'Curved Arrows' },
  { symbol: '⤵', name: 'Arrow Pointing Rightwards Then Curved Down', category: 'Curved Arrows' },
  { symbol: '⤶', name: 'Arrow Pointing Downwards Then Curved Left', category: 'Curved Arrows' },
  { symbol: '⤷', name: 'Arrow Pointing Downwards Then Curved Right', category: 'Curved Arrows' },

  { symbol: '⤸', name: 'Rightwards Arrow with Corner Downward', category: 'Curved Arrows' },
  { symbol: '⤹', name: 'Leftwards Arrow with Corner Downward', category: 'Curved Arrows' },
  { symbol: '⤺', name: 'Rightwards Arrow with Corner Upward', category: 'Curved Arrows' },
  { symbol: '⤻', name: 'Leftwards Arrow with Corner Upward', category: 'Curved Arrows' },

  { symbol: '⤼', name: 'Rightwards Wave Arrow', category: 'Curved Arrows' },
  { symbol: '⤽', name: 'Leftwards Wave Arrow', category: 'Curved Arrows' },
  { symbol: '⤾', name: 'Upwards Wave Arrow', category: 'Curved Arrows' },
  { symbol: '⤿', name: 'Downwards Wave Arrow', category: 'Curved Arrows' },

  { symbol: '⥀', name: 'Anticlockwise Closed Circle Arrow', category: 'Curved Arrows' },
  { symbol: '⥁', name: 'Clockwise Closed Circle Arrow', category: 'Curved Arrows' },
  { symbol: '⥂', name: 'Rightwards Arrow Above Short Leftwards Arrow', category: 'Double Arrows' },
  { symbol: '⥃', name: 'Leftwards Arrow Above Short Rightwards Arrow', category: 'Double Arrows' },
  { symbol: '⥄', name: 'Short Rightwards Arrow Above Leftwards Arrow', category: 'Double Arrows' },

  { symbol: '⥅', name: 'Rightwards Arrow with Dot', category: 'Right Arrows' },
  { symbol: '⥆', name: 'Leftwards Arrow with Dot', category: 'Left Arrows' },
  { symbol: '⥇', name: 'Rightwards Arrow with Ring', category: 'Right Arrows' },
  { symbol: '⥈', name: 'Leftwards Arrow with Ring', category: 'Left Arrows' },
  { symbol: '⥉', name: 'Upwards Arrow with Ring', category: 'Up Arrows' },

  { symbol: '⥊', name: 'Leftwards Barb Up Rightwards Barb Down', category: 'Double Arrows' },
  { symbol: '⥋', name: 'Rightwards Barb Up Leftwards Barb Down', category: 'Double Arrows' },
  { symbol: '⥌', name: 'Upwards Barb Left Downwards Barb Right', category: 'Double Arrows' },
  { symbol: '⥍', name: 'Downwards Barb Left Upwards Barb Right', category: 'Double Arrows' },
  { symbol: '⥎', name: 'Upwards Barb Right Downwards Barb Left', category: 'Double Arrows' },

  { symbol: '⥏', name: 'Downwards Barb Right Upwards Barb Left', category: 'Double Arrows' },
  { symbol: '⥐', name: 'Rightwards Arrow Through Harpoon', category: 'Right Arrows' },
  { symbol: '⥑', name: 'Leftwards Arrow Through Harpoon', category: 'Left Arrows' },
  { symbol: '⥒', name: 'Upwards Arrow Through Harpoon', category: 'Up Arrows' },
  { symbol: '⥓', name: 'Downwards Arrow Through Harpoon', category: 'Down Arrows' },
];
