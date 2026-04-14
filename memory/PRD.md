# Sonja's 16th Birthday — Digital Gift Experience (v2 Neon Redesign)
**Last Updated:** February 2026  
**Status:** Live & Complete

---

## Original Problem Statement
Build a highly emotional, cinematic, mobile-first birthday landing page for Sonja's 16th birthday. A transformational digital gift experience. Central philosophy: "Traveling the world will open your soul." Gift: 5,000 SEK travel account. V2 full neon luxury redesign with Framer Motion.

---

## Architecture
- **Stack:** React + Framer Motion (v12) — no backend
- **Fonts:** Playfair Display (headlines) + Inter (body) + Space Mono (boarding pass)
- **Password:** `Snusen123`
- **Music:** Swedish song "Bara Få Va Mig Själv" via external customer URL

---

## Design System (V2 Neon)
- **bg:** #0B0B0F
- **Pink neon:** #FF2D95
- **Blue neon:** #2D9CFF  
- **Violet:** #7B61FF
- **Cyan:** #00E5FF
- **Text:** #FFFFFF / #8A8A9A

---

## All Sections (V2)

| Section | Component | Status |
|---|---|---|
| Password Gate | PasswordGate.jsx | ✅ Snusen123, shake animation |
| Hero + World Map | HeroSection.jsx | ✅ Animated SVG routes + city nodes |
| Personal Journey | PersonalJourney.jsx | ✅ 9 photos 2009-2025 |
| Cities Explored | CitiesSection.jsx + CityCard.jsx | ✅ 6 cities with glass cards |
| Travel Philosophy | TravelPhilosophy.jsx | ✅ 3 animated philosophy quotes |
| Gift Reveal | GiftReveal.jsx | ✅ Unlock → boarding pass animation |
| Neon Boarding Pass | BoardingPass.jsx | ✅ Full neon luxury, 5,000 SEK |
| Final Message | FinalMessage.jsx | ✅ Stars bg, emotional close |
| Audio Controller | AudioController.jsx | ✅ Vinyl disc, Swedish song |

---

## City Cards
1. Paris 2023 — Unsplash cinematic
2. Barcelona 2023 — Unsplash cinematic
3. London 2024 — Sonja's actual Madame Tussauds photo
4. Istanbul 2024 — Unsplash Hagia Sophia
5. New York 2025 — Sonja's actual Times Square photo
6. Tel Aviv 2019-2025 — Unsplash cinematic

---

## Editable Content
All text in: `/app/frontend/src/lib/content.js`

---

## Boarding Pass Details
- Airline: ZELIKMAN AIRLINES
- Passenger: SONJA
- Route: CHILDHOOD → EVERYTHING
- Flight: ZL-16 | Class: FIRST | Gate: OPEN | Seat: WINDOW
- Amount: 5,000 SEK
- Destination: Unknown — and that's the point.

---

## What's Implemented
- ✅ Password gate with Framer Motion animations
- ✅ Cinematic hero with animated SVG world map (6 city nodes + neon routes)
- ✅ Personal photo journey (9 photos, baby→16)
- ✅ 6 city cards with glass morphism + neon glow borders
- ✅ Framer Motion whileInView scroll reveals throughout
- ✅ Framer Motion "Unlock Your Gift" CTA → boarding pass reveal
- ✅ Neon luxury boarding pass with perforated tear line, 5,000 SEK
- ✅ Gift letter with corner accents
- ✅ Stars background + closing message
- ✅ Floating audio player (vinyl animation) with Swedish music URL
- ✅ Mobile-first (390px optimized)

---

## Files
```
src/
  lib/content.js         ← EDIT ALL TEXT HERE
  App.js
  App.css
  components/
    PasswordGate.jsx
    HeroSection.jsx
    PersonalJourney.jsx
    CitiesSection.jsx
    CityCard.jsx
    TravelPhilosophy.jsx
    GiftReveal.jsx
    BoardingPass.jsx
    FinalMessage.jsx
    AudioController.jsx
```


---

## Original Problem Statement
Build a highly emotional, cinematic, mobile-first birthday landing page for Sonja's 16th birthday. A transformational digital gift experience — not a website. Central philosophy: "Traveling the world will open your soul." The gift includes a real dedicated travel & experience account.

---

## Architecture
- **Stack:** React (frontend only) — no backend needed
- **Host:** Kubernetes container, React on port 3000
- **Password:** `Snusen123`

---

## Core Sections Implemented

| Section | Status | Notes |
|---|---|---|
| Password Gate | ✅ | "Snusen123" — shake animation on wrong password |
| Hero Section | ✅ | Animated text reveals, floating particles, large "Sonja" serif |
| Journey Timeline | ✅ | 9 photos with cinematic CSS filter, alternating layout |
| World / Philosophy | ✅ | City dots + animated SVG routes, 3 key quotes |
| Gift / Boarding Pass | ✅ | Zelikman Airlines, FIRST CLASS, CHILDHOOD→EVERYTHING |
| Emotional Close | ✅ | Gold italic quote, "Happy 16th, Sonja" |
| Audio Player | ✅ | Floating vinyl, requires `/public/music.mp3` |

---

## Photos Used (Chronological)
1. Baby with pink bow — 2009 / Year One
2. Toddler in meadow — 2011 / Age 2
3. Airport with travel hat — 2016 / Age 7
4. Shrek museum adventure — 2019 / Age 10
5. Resort with tropical drink — 2021 / Age 12
6. Times Square NYC — 2023 / Age 14
7. Crumbl cookie hotel corridor — 2024 / Age 15
8. White sweater school photo — 2024 / Age 15
9. Elevator mirror selfie with dad — 2025 / Right Now

---

## Design System
- **Colors:** #0a0a0a bg, #FDFBF7 text, #D4AF37 gold accent
- **Fonts:** Cormorant Garamond (headlines), Outfit (body), Space Mono (boarding pass)
- **Effects:** Film grain CSS overlay, vignette on photos, floating particles

---

## Music Setup
Place `music.mp3` in `/app/frontend/public/music.mp3`
Recommended: *"There Is A Light That Never Goes Out"* or *"How Soon Is Now?"* by The Smiths

---

## What's Implemented
- ✅ Password gate (Snusen123) with shake animation on error
- ✅ Cinematic hero with staggered text reveals and floating gold particles
- ✅ 9-photo timeline with film grain CSS effect + cinematic color filter
- ✅ World philosophy section with animated city dots and route lines
- ✅ Premium digital boarding pass (Zelikman Airlines, perforated design)
- ✅ Full gift reveal message (Pappa & Mamma)
- ✅ Emotional close with replay button
- ✅ Floating audio player (vinyl disc animation)
- ✅ Mobile-first (390px optimized)
- ✅ Intersection Observer scroll reveals throughout

---

## Prioritized Backlog

### P0 (Must Before Launch)
- [ ] Add actual music file to `/app/frontend/public/music.mp3`

### P1 (Nice to Have)
- [ ] Add more recent photos of Sonja if provided by parent
- [ ] Custom background video for hero (optional)
- [ ] Add subtle parallax effect on photo scroll

### P2 (Future)
- [ ] Admin panel to edit text without code
- [ ] Share button to send link to others
- [ ] Print-ready boarding pass PDF export
