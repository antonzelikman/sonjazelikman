import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NeonAirplane from './NeonAirplane';
import { CITY_CARDS, QUOTES, HERO, ORIGIN_STORY } from '../lib/content';

const CITY_NODES = [
  { name: 'NYC', x: 12, y: 58, color: '#2D9CFF' },
  { name: 'LDN', x: 44, y: 26, color: '#7B61FF' },
  { name: 'PAR', x: 47, y: 34, color: '#FF2D95' },
  { name: 'BCN', x: 45, y: 42, color: '#FF6B35' },
  { name: 'IST', x: 59, y: 40, color: '#00E5FF' },
  { name: 'TLV', x: 61, y: 50, color: '#FFD700' },
];

// Route arcs between cities [fromIndex, toIndex]
const ROUTES = [
  [0, 1, 'M12,58 C22,38 36,26 44,26'],     // NYC → London
  [1, 2, 'M44,26 L47,34'],                  // London → Paris
  [2, 3, 'M47,34 L45,42'],                  // Paris → Barcelona
  [3, 4, 'M45,42 C52,38 56,40 59,40'],      // Barcelona → Istanbul
  [4, 5, 'M59,40 L61,50'],                  // Istanbul → Tel Aviv
];

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.4 } }
};
const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } }
};

function CityCard({ card, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['6%', '-6%']);
  const isReversed = index % 2 !== 0;

  return (
    <motion.article
      ref={ref}
      data-testid={`city-card-${card.id}`}
      className="city-portrait-card"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ '--accent': card.accent, borderTop: `3px solid ${card.accent}` }}
    >
      <div className={`portrait-panel ${isReversed ? 'portrait-right' : 'portrait-left'}`}>
        <motion.img
          src={card.image}
          alt={`Sonja in ${card.city}`}
          loading="lazy"
          style={{ y }}
        />
        <div className="portrait-neon-overlay" style={{
          background: `linear-gradient(135deg, ${card.accent}20 0%, transparent 55%),
            linear-gradient(to ${isReversed ? 'left' : 'right'}, #080810 0%, transparent 28%)`
        }} />
        <div className="portrait-glow-halo" style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 90%, ${card.accent}35, transparent)`
        }} />
      </div>

      <div className={`city-text-panel ${isReversed ? 'text-left' : 'text-right'}`}>
        <motion.span
          className="city-year-tag"
          initial={{ opacity: 0, x: isReversed ? -24 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          style={{ color: card.accent, borderColor: `${card.accent}55` }}
        >
          {card.year}
        </motion.span>

        <motion.h2
          className="city-name-editorial"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          style={{ textShadow: `0 0 100px ${card.accent}55` }}
        >
          {card.city}
        </motion.h2>

        <div className="city-accent-rule" style={{
          background: `linear-gradient(to right, ${card.accent}, transparent)`
        }} />

        <motion.p
          className="city-caption-editorial"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          {card.caption.split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}
        </motion.p>

        <motion.p
          className="city-quote-editorial"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          style={{ color: `${card.accent}aa`, borderLeftColor: `${card.accent}55` }}
        >
          "{card.quote}"
        </motion.p>
      </div>
    </motion.article>
  );
}

function QuoteMoment({ quote }) {
  return (
    <motion.div
      className="quote-moment"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="quote-line-left" />
      <p className="quote-text">{quote}</p>
      <div className="quote-line-right" />
    </motion.div>
  );
}

function OriginPanel({ panel, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);
  const isRight = panel.align === 'right';

  return (
    <motion.div
      ref={ref}
      className={`origin-panel ${isRight ? 'origin-panel-right' : 'origin-panel-left'}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.1, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      data-testid={`origin-panel-${panel.id}`}
    >
      {/* Photo */}
      <div className="origin-photo-wrap">
        <motion.img
          src={panel.image}
          alt=""
          loading="lazy"
          className="origin-photo"
          style={{ y }}
        />
        <div className="origin-photo-overlay" />
        <div className="origin-photo-glow" />
      </div>

      {/* Text */}
      <div className="origin-text">
        <motion.span
          className="origin-year"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          {panel.year}
        </motion.span>
        <motion.p
          className="origin-caption"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.45 }}
        >
          {panel.caption.split('\n').map((l, i) => <span key={i}>{l}<br /></span>)}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function YouTab() {
  const scrollToCards = () => {
    document.getElementById('you-city-cards')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="you-tab" data-testid="you-tab">

      {/* ══════════════ HERO ══════════════ */}
      <section className="you-hero">

        {/* Background bloom layers */}
        <div className="hero-bloom-field" aria-hidden="true">
          <div className="bloom bloom-pink" />
          <div className="bloom bloom-cyan" />
          <div className="bloom bloom-violet" />
        </div>

        {/* Ghost "16" — enormous, behind all */}
        <div className="ghost-16" aria-hidden="true">16</div>

        {/* Scanline texture */}
        <div className="scanline-overlay" aria-hidden="true" />

        {/* Route lines SVG */}
        <svg
          className="route-lines-svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <filter id="routeGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur stdDeviation="0.8" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          {ROUTES.map(([, , d], i) => (
            <path
              key={i}
              d={d}
              fill="none"
              strokeWidth="0.5"
              stroke={CITY_NODES[i < ROUTES.length ? i + 1 : i].color}
              filter="url(#routeGlow)"
              className="route-path"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
          ))}
        </svg>

        {/* AIRPLANE — dominant, orbiting */}
        <NeonAirplane />

        {/* City nodes */}
        <div className="city-constellation" aria-hidden="true">
          {CITY_NODES.map((c, i) => (
            <motion.div
              key={c.name}
              className="constellation-node"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 3 + i * 0.3 }}
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
            >
              <motion.div
                className="node-dot"
                style={{ background: c.color, boxShadow: `0 0 12px ${c.color}, 0 0 28px ${c.color}55` }}
                animate={{ scale: [1, 1.8, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4 }}
              />
              <span className="node-label" style={{ color: c.color, textShadow: `0 0 10px ${c.color}` }}>
                {c.name}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Hero text — on top of everything */}
        <motion.div
          className="you-hero-text"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="overline neon-pink" style={{ marginBottom: '20px' }}>
            {HERO.overline}
          </motion.p>

          <motion.h1 variants={item} className="you-hero-name">
            {HERO.name}
          </motion.h1>

          <motion.p variants={item} className="you-hero-age neon-pink">
            {HERO.age}
          </motion.p>

          <motion.p variants={item} className="you-hero-tagline">
            {HERO.tagline}<br />
            <span style={{ color: 'rgba(255,255,255,0.5)', fontStyle: 'normal', fontSize: '0.8em' }}>
              {HERO.tagline2}
            </span>
          </motion.p>

          <motion.div variants={item} style={{ marginTop: '40px' }}>
            <button
              data-testid="begin-journey-btn"
              className="btn-neon btn-pulse"
              onClick={scrollToCards}
            >
              Your Story Below
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
        >
          <motion.div
            className="scroll-line"
            animate={{ scaleY: [0.2, 1, 0.2], opacity: [0.2, 0.9, 0.2] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* ══════════════ ORIGIN STORY ══════════════ */}
      <section className="origin-section" data-testid="origin-story">
        <motion.div
          className="origin-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <p className="overline neon-pink" style={{ display: 'block', textAlign: 'center', marginBottom: '12px' }}>
            Origin
          </p>
          <h2 className="origin-title">
            Where it<br /><em>all began.</em>
          </h2>
        </motion.div>

        <div className="origin-panels">
          {ORIGIN_STORY.map((panel, i) => (
            <OriginPanel key={panel.id} panel={panel} index={i} />
          ))}
        </div>

        {/* Bridge to cities */}
        <motion.div
          className="origin-bridge"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="divider-h" style={{ maxWidth: '120px', margin: '0 auto 32px' }} />
          <p style={{
            fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
            fontSize: 'clamp(1rem, 3vw, 1.4rem)',
            color: 'rgba(255,255,255,0.3)', textAlign: 'center',
            lineHeight: 1.8
          }}>
            And then — you started going places.
          </p>
          <div className="divider-h" style={{ maxWidth: '120px', margin: '32px auto 0' }} />
        </motion.div>
      </section>

      {/* ══════════════ SECTION INTRO ══════════════ */}
      <motion.div
        className="section-intro"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="divider-h" style={{ maxWidth: '180px', margin: '0 auto 36px' }} />
        <p className="overline neon-cyan" style={{ textAlign: 'center', marginBottom: '20px', display: 'block' }}>
          WHO YOU ARE
        </p>
        <p style={{
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          fontSize: 'clamp(1rem, 3.2vw, 1.5rem)',
          color: 'rgba(255,255,255,0.4)', textAlign: 'center',
          maxWidth: '520px', margin: '0 auto',
          lineHeight: 1.7
        }}>
          Six cities. Six versions of you.<br />All of them real.
        </p>
        <div className="divider-h" style={{ maxWidth: '180px', margin: '36px auto 0' }} />
      </motion.div>

      {/* ══════════════ CITY CARDS ══════════════ */}
      <div id="you-city-cards" className="city-cards-stack">
        {CITY_CARDS.map((card, i) => (
          <div key={card.id}>
            <CityCard card={card} index={i} />
            {(i === 1 || i === 3) && <QuoteMoment quote={QUOTES[Math.floor(i / 2)]} />}
          </div>
        ))}
      </div>

      {/* ══════════════ CLOSING ══════════════ */}
      <motion.section
        className="you-closing"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
      >
        <p className="overline neon-pink" style={{ display: 'block', textAlign: 'center', marginBottom: '32px' }}>
          16 years in the making
        </p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.2rem, 9vw, 5.5rem)',
          color: '#fff', textAlign: 'center',
          lineHeight: 1.08, fontWeight: 700,
          textShadow: '0 0 80px rgba(255,45,149,0.3)',
          marginBottom: '28px'
        }}>
          The best is<br />
          <span className="neon-pink">yet to come.</span>
        </h2>
        <p style={{
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)',
          color: 'rgba(255,255,255,0.35)', textAlign: 'center',
          maxWidth: '400px', margin: '0 auto 72px'
        }}>
          Pappa &amp; Mamma
        </p>
        <div className="divider-h" style={{ maxWidth: '140px', margin: '0 auto' }} />
        <div style={{ height: '80px' }} />
      </motion.section>
    </div>
  );
}
