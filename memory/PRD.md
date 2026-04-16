# Sonja's Adventures — 16th Birthday Portal
**Last Updated:** February 2026  
**Status:** V3 Live & Complete — 4-Tab Cinematic Portal

---

## Original Problem Statement
Build a highly emotional, private, cinematic, neon-immersive birthday website for Sonja turning 16. Must feel like a premium portal/dream experience. Heavy neon glow, high motion, oversized visuals, dark background with floating neon particles. Password protected.

---

## Architecture
- **Stack:** React (CRA) + Framer Motion v12 — no backend
- **Fonts:** Playfair Display (headlines) + Inter (body) + Space Mono (mono/boarding pass)
- **Password:** `Snusen123`
- **Design:** `#080810` bg, `#FF2D95` pink, `#00E5FF` cyan, `#7B61FF` violet, `#FFD700` gold

---

## V3 Tab Architecture

| Tab | Component | Route | Status |
|-----|-----------|-------|--------|
| YOU | YouTab.jsx | activeTab='you' | ✅ |
| YOUR GIFT | YourGiftTab.jsx | activeTab='gift' | ✅ |
| THINGS YOU NEED | ThingsYouNeedTab.jsx | activeTab='things' | ✅ |
| ADVENTURES | AdventuresTab.jsx | activeTab='adventures' | ✅ |

---

## Components (V3 Final)

```
src/
  App.js                  ← Tab state, AnimatePresence routing
  App.css                 ← Full neon design system
  lib/content.js          ← All text + image URLs + audio paths
  components/
    PasswordGate.jsx      ← "Snusen123" gate w/ shake animation
    NavHeader.jsx         ← Pill-tab nav + SONJA's ADVENTURES logo
    ParticleField.jsx     ← Fixed floating neon sparkles (55 + 20)
    AudioManager.jsx      ← Crossfading HTML5 audio per tab
    NeonAirplane.jsx      ← Animated SVG airplane w/ particle trail
    YouTab.jsx            ← Hero + 6 city portrait cards + quotes
    YourGiftTab.jsx       ← 5,000 SEK reveal + boarding pass + letter
    ThingsYouNeedTab.jsx  ← Packing list (localStorage)
    AdventuresTab.jsx     ← Future adventures planner (localStorage)
```

---

## City Cards (Tab 1 — YOU)

| City | Year | Image Source |
|------|------|-------------|
| Paris | 2023 · Age 13 | /avatars/paris_v2.png (AI neon portrait) |
| Barcelona | 2022 · Age 12 | Real Sonja photo — Spanish coast with dad |
| London | 2023 · Age 13 | Real Sonja photo — London Eye + Big Ben |
| Istanbul | 2024 · Age 14 | /avatars/istanbul_v2.png (AI neon portrait) |
| New York | 2025 · Age 15 | /avatars/newyork.png (AI neon portrait) |
| Tel Aviv | 2019–2025 | Real Sonja photo — beach sand |
| **Budapest** | **2025 · Age 15** | **Real photo — Mazel Tov restaurant** |

## Origin Story Section (YouTab — before city cards)
| Panel | Photo | Caption |
|-------|-------|---------|
| Begin | Young Sonja (~4) hiking on dad's shoulders | "Before the passport stamps. Before the cities." |
| Roots | Family waterfront dinner (~age 14) | "The table was always set. The sea was always close." |

## Audio Files (all active)
- `you.mp3` ← "Bara Få Va Mig Själv" ✅
- `gift.mp3` ← "I Gotta Feeling" (Black Eyed Peas) ✅
- `things.mp3` ← "Hard Knock Life" ✅
- `adventures.mp3` ← "Vart jag mig i världen vänder" ✅

## Hero Airplane
- Source: /airplane.png (user's reference neon Boeing PNG, downloaded from assets)
- Animation: 22s CSS orbit loop across full hero, 8 keyframe positions, banking ±24°
- Size: clamp(340px, 52vw, 720px) — dominant visual
- Glow: 4-layer drop-shadow (pink/violet/cyan), animated 3s pulse

## Uploaded Photos Received
### Batch 1 (from user):
- IMG_9626.jpg — Mazel Tov restaurant (Budapest)
- IMG_9641.jpg — Dohány Street Synagogue, Budapest (Sonja + brother)
- IMG_9604.jpg — Hungarian Parliament, Budapest (Sonja + dad)
- e90f9b08.jpeg — Waterfront restaurant, Mediterranean (possibly Malta)
- IMG_4246.jpeg — Young Sonja (~age 4-5) hiking on dad's shoulders

### Batch 2 (from user):
- IMG_2081.jpg — London Eye + Big Ben ✅ Used for London card
- IMG_9579.jpg — Madame Tussauds London (alternate London photo, not used)
- IMG_6245.jpg — Tel Aviv beach sand ✅ Used for Tel Aviv card
- IMG_8327.jpg — Spanish coast with dad ✅ Used for Barcelona card
- image.png — Reference airplane ✅ Used as /airplane.png hero

---

## Landing Page (PasswordGate)
- **Video background**: `/landing.mp4` — neon cyberpunk airplane flying over glowing world map
- **Gradient overlay**: progressive dark-at-bottom to ensure text readability
- **Copy**: "A PRIVATE GIFT" → "For Sonja" (large Playfair) → "16 years. Seven cities. One story."
- **Form**: Password input + Enter button, centered at bottom
- **Password**: `Snusen123`
- **Transition**: Fade + subtle scale-up on correct entry → app slides in
- **Airline:** ZELIKMAN AIRLINES
- **Passenger:** SONJA
- **Route:** CHILDHOOD → EVERYTHING
- **Flight:** ZL-16 | **Class:** FIRST CLASS | **Gate:** OPEN | **Seat:** WINDOW
- **Amount:** 5,000 SEK

---

## Audio Setup
All files go in `/public/audio/`:
- `you.mp3` ← "Bara Få Va Mig Själv" ✅ (already placed)
- `gift.mp3` ← Needs file
- `things.mp3` ← Needs file
- `adventures.mp3` ← Needs file

Crossfade duration: 1.5s. Audio requires user click to start.

---

## What's Implemented (V3)
- ✅ Password gate ("Snusen123") with shake animation
- ✅ Fixed particle field (55 sparkles + 20 rising floaters)
- ✅ 4-tab pill nav with AnimatePresence transitions
- ✅ Crossfading audio manager per tab (HTML5 API)
- ✅ YOU tab: Neon airplane hero + city constellation + 6 portrait cards + quotes
- ✅ YOUR GIFT tab: 5,000 SEK hero + animated boarding pass + gift letter reveal
- ✅ THINGS YOU NEED tab: Packing list with AI responses + suggestion chips (localStorage)
- ✅ ADVENTURES tab: Adventure planner with modal form + chronological cards (localStorage)
- ✅ 3 AI-generated neon city avatars (Paris, Barcelona, New York)
- ✅ Swedish song at /audio/you.mp3
- ✅ Mobile-responsive (pill tabs collapse to short labels below 540px)
- ✅ 100% test pass rate

---

## Prioritized Backlog

### P0 (Before Showing to Sonja)
- [ ] Add 3 more audio files: gift.mp3, things.mp3, adventures.mp3

### P1 (Nice Enhancements)
- [ ] Generate remaining 3 city neon avatars (London, Istanbul, Tel Aviv) — needs key top-up
- [ ] Parallax effect on city card portraits (useScroll transform already wired)
- [ ] Add more photos of Sonja as new card layers

### P2 (Future)
- [ ] Print-ready boarding pass PDF export
- [ ] Share link feature
- [ ] Add personal message recording (audio/video)
