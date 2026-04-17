export const PASSWORD = 'Snusen123';

// ──────────────────────────────────────────────
// AUDIO — replace each MP3 in /public/audio/
// ──────────────────────────────────────────────
export const TRACKS = {
  you: '/audio/you.mp3',
  gift: '/audio/gift.mp3',
  things: '/audio/things.mp3',
  adventures: '/audio/adventures.mp3'
};

// ──────────────────────────────────────────────
// HERO
// ──────────────────────────────────────────────
export const HERO = {
  overline: 'Happy Birthday',
  name: 'Sonja',
  age: '16 years old',
  tagline: 'The world is bigger than you think.',
  tagline2: 'And so are you.',
  cta: 'Begin the journey'
};

// ──────────────────────────────────────────────
// CITY CARDS — replace image URLs with Sonja's photos
// ──────────────────────────────────────────────
export const CITY_CARDS = [
  {
    id: 'paris',
    city: 'Paris',
    year: '2023 · Age 13',
    image: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/oexez4d5_PARTY.png',
    caption: 'Quiet confidence. You didn\'t need to be loud here.\nYou already had presence.',
    quote: 'Elegance is not about being noticed. It\'s about being remembered.',
    accent: '#FF2D95'
  },
  {
    id: 'barcelona',
    city: 'Barcelona',
    year: '2022 · Age 12',
    image: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/ufasv5qv_PARTY%20%22.png',
    caption: 'Freedom, color, energy.\nA version of you that lets go a little more.',
    quote: 'Some cities give you permission to be more alive.',
    accent: '#FF6B35'
  },
  {
    id: 'london',
    city: 'London',
    year: '2023 · Age 13',
    image: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/39oe01gw_LONDON.png',
    caption: 'Sharp, observant, composed.\nYou see more than you say.',
    quote: 'The sharpest minds move quietly.',
    accent: '#7B61FF'
  },
  {
    id: 'istanbul',
    city: 'Istanbul',
    year: '2024 · Age 14',
    image: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/lu4w03r5_ISTANBUL.png',
    caption: 'Depth, contrast, mystery.\nA place that mirrors your complexity.',
    quote: 'There are places that hold you before you even know their name.',
    accent: '#00E5FF'
  },
  {
    id: 'newyork',
    city: 'New York',
    year: '2025 · Age 15',
    image: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/i680y6eu_DRINK.png',
    caption: 'Big energy. Big dreams.\nA version of you that dares to take space.',
    quote: 'This city belongs to anyone brave enough to claim it.',
    accent: '#2D9CFF'
  },
  {
    id: 'telaviv',
    city: 'Tel Aviv',
    year: '2019 – 2025',
    image: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/jrokzk8d_MOUNTAIN.png',
    caption: 'Warmth, light, belonging.\nA place where you can always just be.',
    quote: 'Home is not always a place. Sometimes it is a feeling.',
    accent: '#FFD700'
  },
  {
    id: 'budapest',
    city: 'Budapest',
    year: '2025 · Age 15',
    image: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/cd4a7obv_TELAVIV.png',
    caption: 'Synagogues, river views, late nights.\nA place that knows something you\'re still learning.',
    quote: 'Some places call to you before you know why.',
    accent: '#E8A838'
  }
];

export const QUOTES = [
  'You are allowed to become.',
  'The world is not asking you to be perfect.\nOnly open.',
  'Some adventures begin the moment\nyou believe you are allowed to go.',
  'Your life is bigger than this moment.'
];

// ──────────────────────────────────────────────
// ORIGIN STORY — panels before the city cards
// ──────────────────────────────────────────────
export const ORIGIN_STORY = [];

// ──────────────────────────────────────────────
// BIRTHDAY LETTER
// ──────────────────────────────────────────────
export const BIRTHDAY_LETTER = [
  {
    id: 'opening',
    lines: [
      { text: 'Sonja,', type: 'name' },
    ]
  },
  {
    id: 'sixteen',
    lines: [
      { text: 'Sixteen.', type: 'neon' },
    ]
  },
  {
    id: 'moment',
    lines: [
      { text: 'There\'s something about this moment…', type: 'normal' },
      { text: 'not loud, not dramatic —', type: 'dim' },
      { text: 'but real.', type: 'normal' },
    ]
  },
  {
    id: 'standing',
    lines: [
      { text: 'You\'re standing in a place where things begin to open.', type: 'normal' },
      { text: 'Where the world feels bigger…', type: 'normal' },
      { text: 'and sometimes you might feel smaller in it.', type: 'dim' },
    ]
  },
  {
    id: 'truth',
    lines: [
      { text: 'But here\'s the truth I want you to carry,', type: 'dim' },
      { text: 'quietly, in your own way:', type: 'dim' },
    ]
  },
  {
    id: 'affirmation',
    lines: [
      { text: 'You are not behind.', type: 'neon' },
      { text: 'You are not missing anything.', type: 'neon' },
      { text: 'You don\'t need to become someone else to belong in this world.', type: 'normal' },
    ]
  },
  {
    id: 'already',
    lines: [
      { text: 'You already are.', type: 'hero' },
    ]
  },
  {
    id: 'everything',
    lines: [
      { text: 'Everything you need…', type: 'normal' },
      { text: 'your strength, your sensitivity, your way of seeing things,', type: 'dim' },
      { text: 'even the parts you question sometimes —', type: 'dim' },
      { text: 'they are not mistakes.', type: 'normal' },
    ]
  },
  {
    id: 'compass',
    lines: [
      { text: 'They are your compass.', type: 'neon-cyan' },
    ]
  },
  {
    id: 'days',
    lines: [
      { text: 'There will be days when things feel confusing, heavy, or uncertain.', type: 'normal' },
      { text: 'That\'s not a sign that something is wrong with you.', type: 'dim' },
      { text: 'It\'s a sign that you\'re growing.', type: 'normal' },
    ]
  },
  {
    id: 'notnow',
    lines: [
      { text: 'And you don\'t have to figure it all out now.', type: 'normal' },
      { text: 'You don\'t have to be perfect.', type: 'normal' },
      { text: 'You don\'t even have to be sure.', type: 'dim' },
    ]
  },
  {
    id: 'stay',
    lines: [
      { text: 'Just stay close to yourself.', type: 'neon' },
      { text: 'Stay honest in the quiet moments.', type: 'normal' },
      { text: 'That\'s where your direction lives.', type: 'dim' },
    ]
  },
  {
    id: 'world',
    lines: [
      { text: 'The world isn\'t something you have to live up to.', type: 'normal' },
      { text: 'It\'s something you will step into —', type: 'normal' },
      { text: 'in your own way, in your own time.', type: 'dim' },
    ]
  },
  {
    id: 'neveralone',
    lines: [
      { text: 'And no matter where you go, or who you become…', type: 'dim' },
      { text: 'You are never alone in it.', type: 'neon' },
    ]
  },
  {
    id: 'loved',
    lines: [
      { text: 'You are deeply loved.', type: 'hero' },
      { text: 'Exactly as you are.', type: 'normal' },
      { text: 'Right here. Right now.', type: 'dim' },
    ]
  },
  {
    id: 'enough',
    lines: [
      { text: 'And that…', type: 'dim' },
      { text: 'is more than enough.', type: 'neon' },
    ]
  },
  {
    id: 'hbd',
    lines: [
      { text: 'Happy 16th, Sonja.', type: 'hero-pink' },
      { text: '❤️', type: 'heart' },
    ]
  },
  {
    id: 'family',
    lines: [
      { text: 'Alla som hejjar på dig!', type: 'family-title' },
      { text: 'Pappa & Mamma, Farmor & Farfar, Baba, Mormor & Morfar,', type: 'family' },
      { text: 'Sophie, Lina & Mikael, Lemmy & Elliot, Jimmy & Maja…och Belle,', type: 'family' },
      { text: 'Nee och Klöver', type: 'family' },
    ]
  }
];

// ──────────────────────────────────────────────
// GIFT
// ──────────────────────────────────────────────
export const GIFT = {
  amount: '5,000 SEK',
  description: 'A real, dedicated travel & experience account — loaded and ready.\nThis is yours to use.'
};

export const BOARDING_PASS = {
  airline: 'ZELIKMAN AIRLINES',
  passenger: 'SONJA',
  from: 'CHILDHOOD',
  to: 'EVERYTHING',
  flight: 'ZL-16',
  class: 'FIRST CLASS',
  gate: 'OPEN',
  seat: 'WINDOW',
  amount: '5,000 SEK',
  destination: 'Unknown — and that\'s the point.'
};

export const GIFT_LETTER = `Happy Birthday Sonja – 16 years old

This is your ticket.

Not to a place – but to everything that's waiting for you.

For experiences.
For memories.
For moments that stay with you.

Not for things that fade.

No pressure. No deadlines.
Just possibilities.

Use it when you're ready.

Pappa & Mamma ❤️`;

// ──────────────────────────────────────────────
// PACKING SMART RESPONSES
// ──────────────────────────────────────────────
export const getSmartResponse = (item) => {
  const l = item.toLowerCase();
  if (l.includes('passport')) return '🛂 Non-negotiable. First thing. Always.';
  if (l.includes('charger') || l.includes('cable')) return '⚡ Future you is already grateful for this.';
  if (l.includes('outfit') || l.includes('dress') || l.includes('clothes')) return '✨ Main character energy activated.';
  if (l.includes('camera') || l.includes('photo')) return '📸 Memories, not just vibes. Smart.';
  if (l.includes('book') || l.includes('journal')) return '📖 A traveller who reflects. The best kind.';
  if (l.includes('shoes') || l.includes('sneakers') || l.includes('boots')) return '👟 Comfortable feet = unlimited adventures.';
  if (l.includes('sunscreen') || l.includes('sun')) return '☀️ Your future skin thanks you.';
  if (l.includes('music') || l.includes('headphone') || l.includes('airpod')) return '🎵 The soundtrack to every memory you\'ll make.';
  if (l.includes('wallet') || l.includes('money') || l.includes('card')) return '💳 The holy trinity: passport, phone, wallet.';
  if (l.includes('phone')) return '📱 Never leave home without it.';
  if (l.includes('hoodie') || l.includes('jacket')) return '🧥 Future you on a cool evening says: yes.';
  const d = [
    'Future you says: excellent call.',
    'Adding to your adventure kit.',
    'This one has main character energy.',
    'Pack two. Trust.',
    'Smart. You always think ahead.',
    'Your adventure just got better.',
    'That\'s the spirit of a born traveller.',
    'This one stays with you forever.'
  ];
  return d[Math.floor(Math.random() * d.length)];
};

export const QUICK_SUGGESTIONS = [
  'Passport', 'Charger', 'Main character outfit', 'Camera',
  'Journal', 'Headphones', 'Sunscreen', 'Travel wallet', 'Hoodie', 'Sneakers'
];
