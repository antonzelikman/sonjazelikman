import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NeonAirplane from './NeonAirplane';
import { CITY_CARDS, QUOTES, HERO } from '../lib/content';

const CITY_NODES = [
  { name: 'NYC', x: '12%', y: '55%', color: '#2D9CFF' },
  { name: 'LONDON', x: '44%', y: '28%', color: '#7B61FF' },
  { name: 'PARIS', x: '46%', y: '36%', color: '#FF2D95' },
  { name: 'BCN', x: '44%', y: '44%', color: '#FF6B35' },
  { name: 'IST', x: '58%', y: '40%', color: '#00E5FF' },
  { name: 'TLV', x: '60%', y: '50%', color: '#FFD700' },
];

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } }
};

function CityCard({ card, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['4%', '-4%']);
  const isReversed = index % 2 !== 0;

  return (
    <motion.article
      ref={ref}
      data-testid={`city-card-${card.id}`}
      className="city-portrait-card"
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ borderTop: `3px solid ${card.accent}`, boxShadow: `0 0 0 0 ${card.accent}00` }}
      whileHover={{ boxShadow: `0 0 60px ${card.accent}22, inset 0 0 40px ${card.accent}08` }}
    >
      {/* Portrait */}
      <div
        className={`portrait-panel ${isReversed ? 'portrait-right' : 'portrait-left'}`}
        style={{ '--accent': card.accent }}
      >
        <motion.img
          src={card.image}
          alt={`Sonja in ${card.city}`}
          loading="lazy"
          style={{ y }}
        />
        <div className="portrait-neon-overlay" style={{
          background: `linear-gradient(135deg, ${card.accent}18 0%, transparent 60%), linear-gradient(to right, #080810 0%, transparent 30%)`
        }} />
        <div className="portrait-glow-halo" style={{
          background: `radial-gradient(ellipse 80% 60% at 50% 80%, ${card.accent}30, transparent)`
        }} />
      </div>

      {/* Text */}
      <div className={`city-text-panel ${isReversed ? 'text-left' : 'text-right'}`}>
        <motion.span
          className="city-year-tag"
          initial={{ opacity: 0, x: isReversed ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: card.accent, borderColor: `${card.accent}50` }}
        >
          {card.year}
        </motion.span>

        <motion.h2
          className="city-name-editorial"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ textShadow: `0 0 80px ${card.accent}44` }}
        >
          {card.city}
        </motion.h2>

        <div className="city-accent-rule" style={{ background: `linear-gradient(to right, ${card.accent}, transparent)` }} />

        <motion.p
          className="city-caption-editorial"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          {card.caption.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}
        </motion.p>

        <motion.p
          className="city-quote-editorial"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.65 }}
          style={{ color: `${card.accent}99` }}
        >
          "{card.quote}"
        </motion.p>
      </div>
    </motion.article>
  );
}

function QuoteMoment({ quote, index }) {
  return (
    <motion.div
      className="quote-moment"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="quote-line-left" />
      <p className="quote-text">{quote}</p>
      <div className="quote-line-right" />
    </motion.div>
  );
}

export default function YouTab() {
  const heroRef = useRef(null);

  const scrollToCards = () => {
    document.getElementById('you-city-cards')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="you-tab" data-testid="you-tab">
      {/* ── HERO ── */}
      <section className="you-hero" ref={heroRef}>
        {/* Ghost 16 */}
        <div className="ghost-16" aria-hidden="true">16</div>

        {/* Scanline overlay */}
        <div className="scanline-overlay" aria-hidden="true" />

        {/* Text content */}
        <motion.div
          className="you-hero-text"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="overline neon-pink" style={{ marginBottom: '24px' }}>
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
            <span style={{ color: 'rgba(255,255,255,0.7)' }}>{HERO.tagline2}</span>
          </motion.p>
          <motion.div variants={item}>
            <button
              data-testid="begin-journey-btn"
              className="btn-neon btn-pulse"
              onClick={scrollToCards}
            >
              Your Story Below
            </button>
          </motion.div>
        </motion.div>

        {/* Neon Airplane + constellation */}
        <motion.div
          className="hero-airplane-wrap"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, delay: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <NeonAirplane />
          {/* City nodes overlay */}
          <div className="city-constellation" aria-hidden="true">
            {CITY_NODES.map((c, i) => (
              <motion.div
                key={c.name}
                className="constellation-node"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 2.5 + i * 0.25 }}
                style={{ left: c.x, top: c.y }}
              >
                <motion.div
                  className="node-dot"
                  style={{ background: c.color, boxShadow: `0 0 10px ${c.color}` }}
                  animate={{ scale: [1, 1.6, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.35 }}
                />
                <span className="node-label" style={{ color: c.color, textShadow: `0 0 8px ${c.color}` }}>
                  {c.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <motion.div
            className="scroll-line"
            animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </section>

      {/* ── SECTION HEADER ── */}
      <motion.div
        className="section-intro"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <div className="divider-h" style={{ maxWidth: '200px', margin: '0 auto 32px' }} />
        <p className="overline neon-cyan" style={{ marginBottom: '16px', display: 'block', textAlign: 'center' }}>
          WHO YOU ARE
        </p>
        <p style={{
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          fontSize: 'clamp(1rem, 3vw, 1.4rem)',
          color: 'rgba(255,255,255,0.45)', textAlign: 'center',
          maxWidth: '500px', margin: '0 auto'
        }}>
          Six cities. Six versions of you.<br />All of them real.
        </p>
        <div className="divider-h" style={{ maxWidth: '200px', margin: '32px auto 0' }} />
      </motion.div>

      {/* ── CITY PORTRAIT CARDS ── */}
      <div id="you-city-cards" className="city-cards-stack">
        {CITY_CARDS.map((card, i) => (
          <div key={card.id}>
            <CityCard card={card} index={i} />
            {(i === 1 || i === 3) && <QuoteMoment quote={QUOTES[Math.floor(i / 2)]} index={i} />}
          </div>
        ))}
      </div>

      {/* ── CLOSING ── */}
      <motion.section
        className="you-closing"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1 }}
      >
        <p className="overline neon-pink" style={{ display: 'block', textAlign: 'center', marginBottom: '28px' }}>
          16 years in the making
        </p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2rem, 8vw, 5rem)',
          color: '#fff', textAlign: 'center',
          lineHeight: 1.1, fontWeight: 700,
          textShadow: '0 0 60px rgba(255,45,149,0.25)',
          marginBottom: '24px'
        }}>
          The best is<br />
          <span className="neon-pink">yet to come.</span>
        </h2>
        <p style={{
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          fontSize: 'clamp(0.9rem, 2.5vw, 1.15rem)',
          color: 'rgba(255,255,255,0.4)', textAlign: 'center',
          maxWidth: '400px', margin: '0 auto 60px'
        }}>
          Pappa &amp; Mamma ❤️
        </p>
        <div className="divider-h" style={{ maxWidth: '160px', margin: '0 auto' }} />
        <div style={{ height: '80px' }} />
      </motion.section>
    </div>
  );
}
