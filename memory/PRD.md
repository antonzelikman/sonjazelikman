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
| Paris | 2023 · Age 13 | /avatars/paris.png (AI generated neon portrait) |
| Barcelona | 2023 · Age 13 | /avatars/barcelona.png (AI generated neon portrait) |
| London | 2024 · Age 14 | Customer asset — real Sonja photo |
| Istanbul | 2024 · Age 14 | Unsplash cinematic |
| New York | 2025 · Age 15 | /avatars/newyork.png (AI generated neon portrait) |
| Tel Aviv | 2019–2025 | Unsplash cinematic |

---

## Boarding Pass (Tab 2 — YOUR GIFT)
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
