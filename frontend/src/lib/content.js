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
    image: '/avatars/paris.png',
    caption: 'Quiet confidence. You didn\'t need to be loud here.\nYou already had presence.',
    quote: 'Elegance is not about being noticed. It\'s about being remembered.',
    accent: '#FF2D95'
  },
  {
    id: 'barcelona',
    city: 'Barcelona',
    year: '2023 · Age 13',
    image: '/avatars/barcelona.png',
    caption: 'Freedom, color, energy.\nA version of you that lets go a little more.',
    quote: 'Some cities give you permission to be more alive.',
    accent: '#FF6B35'
  },
  {
    id: 'london',
    city: 'London',
    year: '2024 · Age 14',
    image: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/149a5ckz_72BCCCE6-553C-4D94-ABB4-70B11369F418_1_105_c.jpeg',
    caption: 'Sharp, observant, composed.\nYou see more than you say.',
    quote: 'The sharpest minds move quietly.',
    accent: '#7B61FF'
  },
  {
    id: 'istanbul',
    city: 'Istanbul',
    year: '2024 · Age 14',
    image: 'https://images.unsplash.com/photo-1611403907861-e7b22ad9c3fa?crop=entropy&cs=srgb&fm=jpg&q=85',
    caption: 'Depth, contrast, mystery.\nA place that mirrors your complexity.',
    quote: 'There are places that hold you before you even know their name.',
    accent: '#00E5FF'
  },
  {
    id: 'newyork',
    city: 'New York',
    year: '2025 · Age 15',
    image: '/avatars/newyork.png',
    caption: 'Big energy. Big dreams.\nA version of you that dares to take space.',
    quote: 'This city belongs to anyone brave enough to claim it.',
    accent: '#2D9CFF'
  },
  {
    id: 'telaviv',
    city: 'Tel Aviv',
    year: '2019 – 2025',
    image: 'https://images.unsplash.com/photo-1695910410678-6731d8577dc5?crop=entropy&cs=srgb&fm=jpg&q=85',
    caption: 'Warmth, light, belonging.\nA place where you can always just be.',
    quote: 'Home is not always a place. Sometimes it is a feeling.',
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
