export const PASSWORD = 'Snusen123';

// ──────────────────────────────────────────────
// AUDIO — replace each MP3 in /public/audio/
// ──────────────────────────────────────────────
export const TRACKS = {
  you: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/djlvg2d0_10.Bara_Fa%CC%8A_Va_Mig_Sja%CC%88lv.mp3',
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
    year: '2023',
    image: 'https://images.unsplash.com/photo-1589662402993-0bfcfa2f6169?w=900&q=80',
    caption: 'Quiet confidence. You didn\'t need to be loud here.\nYou already had presence.',
    accent: '#FF2D95'
  },
  {
    id: 'barcelona',
    city: 'Barcelona',
    year: '2023',
    image: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/49dh4q9c_D778ABDE-4D74-4AEF-A5AB-C294B5E100CB_1_105_c.jpeg',
    caption: 'Freedom, color, energy.\nA version of you that lets go a little more.',
    accent: '#FF6B35'
  },
  {
    id: 'london',
    city: 'London',
    year: '2024',
    image: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/149a5ckz_72BCCCE6-553C-4D94-ABB4-70B11369F418_1_105_c.jpeg',
    caption: 'Sharp, observant, composed.\nYou see more than you say.',
    accent: '#7B61FF'
  },
  {
    id: 'istanbul',
    city: 'Istanbul',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1714903229316-7ed7e3764a34?w=900&q=80',
    caption: 'Depth, contrast, mystery.\nA place that mirrors your complexity.',
    accent: '#00E5FF'
  },
  {
    id: 'newyork',
    city: 'New York',
    year: '2025',
    image: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/pmjv7cjw_98B29047-C7A4-4855-BA94-1957EFE70AB7_1_105_c.jpeg',
    caption: 'Big energy. Big dreams.\nA version of you that dares to take space.',
    accent: '#2D9CFF'
  },
  {
    id: 'telaviv',
    city: 'Tel Aviv',
    year: '2019 – 2025',
    image: 'https://images.unsplash.com/photo-1547483042-9a94090e13a4?w=900&q=80',
    caption: 'Warmth, light, belonging.\nA place where you can just be.',
    accent: '#FFD700'
  }
];

export const QUOTES = [
  'You are allowed to become.',
  'The world is not asking you to be perfect.\nOnly open.',
  'Some adventures begin the moment\nyou believe you are allowed to go.',
  'Your life is bigger than this moment.'
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
