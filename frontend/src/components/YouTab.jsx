import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import NeonAirplane from './NeonAirplane';
import { CITY_CARDS, QUOTES, HERO, BIRTHDAY_LETTER } from '../lib/content';

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

const LINE_STYLES = {
  name: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
    fontWeight: 700,
    color: '#fff',
    letterSpacing: '0.04em',
    marginBottom: '0.2em',
  },
  sixteen: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 'clamp(3rem, 10vw, 6rem)',
    fontWeight: 700,
    color: '#FF2D95',
    textShadow: '0 0 40px rgba(255,45,149,0.7), 0 0 80px rgba(255,45,149,0.3)',
    letterSpacing: '-0.01em',
    lineHeight: 1,
    display: 'block',
    marginBottom: '0.15em',
  },
  neon: {
    color: '#FF2D95',
    textShadow: '0 0 20px rgba(255,45,149,0.6)',
    fontStyle: 'normal',
  },
  'neon-cyan': {
    color: '#00E5FF',
    textShadow: '0 0 20px rgba(0,229,255,0.6)',
    fontStyle: 'normal',
  },
  hero: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 'clamp(1.6rem, 5vw, 2.6rem)',
    fontWeight: 700,
    color: '#fff',
    textShadow: '0 0 40px rgba(255,255,255,0.2)',
    lineHeight: 1.2,
    fontStyle: 'normal',
  },
  'hero-pink': {
    fontFamily: 'Playfair Display, serif',
    fontSize: 'clamp(1.8rem, 5.5vw, 3rem)',
    fontWeight: 700,
    color: '#FF2D95',
    textShadow: '0 0 50px rgba(255,45,149,0.8), 0 0 100px rgba(255,45,149,0.3)',
    lineHeight: 1.1,
    fontStyle: 'normal',
    letterSpacing: '-0.01em',
  },
  heart: {
    fontSize: 'clamp(1.4rem, 4vw, 2rem)',
    display: 'block',
    marginTop: '0.3em',
  },
  normal: {
    color: 'rgba(255,255,255,0.75)',
    fontStyle: 'normal',
  },
  dim: {
    color: 'rgba(255,255,255,0.35)',
  },
  'family-title': {
    fontFamily: 'Space Mono, monospace',
    fontSize: '0.7rem',
    letterSpacing: '0.18em',
    color: 'rgba(255,45,149,0.6)',
    textTransform: 'uppercase',
    marginBottom: '0.6em',
    fontStyle: 'normal',
  },
  family: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 'clamp(0.78rem, 2vw, 0.9rem)',
    lineHeight: 1.8,
  },
};

function LetterStanza({ stanza, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ marginBottom: stanza.id === 'sixteen' ? '4rem' : '2.4rem' }}
    >
      {stanza.lines.map((line, i) => {
        const isSpecialDisplay = ['sixteen'].includes(line.type);
        const baseStyle = {
          display: 'block',
          fontFamily: 'Playfair Display, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1.2rem, 3.5vw, 1.65rem)',
          lineHeight: 1.95,
          ...(LINE_STYLES[line.type] || LINE_STYLES.normal),
        };

        if (isSpecialDisplay) {
          return (
            <motion.span
              key={i}
              style={baseStyle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.12 }}
            >
              {line.text}
            </motion.span>
          );
        }

        return (
          <motion.span
            key={i}
            style={baseStyle}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 + i * 0.1 }}
          >
            {line.text}
          </motion.span>
        );
      })}
    </motion.div>
  );
}

function BirthdayLetter() {
  return (
    <section
      data-testid="birthday-letter"
      style={{
        position: 'relative',
        padding: 'clamp(80px, 12vw, 140px) 24px',
        overflow: 'hidden',
      }}
    >
      {/* Ambient neon glow blobs */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '10%', left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(700px, 120vw)', height: '500px',
        background: 'radial-gradient(ellipse at center, rgba(255,45,149,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '15%', left: '30%',
        width: '400px', height: '400px',
        background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Ghost "16" watermark */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(260px, 40vw, 480px)',
        fontWeight: 900,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(255,45,149,0.04)',
        lineHeight: 1,
        pointerEvents: 'none',
        userSelect: 'none',
        whiteSpace: 'nowrap',
      }}>16</div>

      {/* Top overline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: 'clamp(48px, 8vw, 80px)' }}
      >
        <span style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '0.65rem',
          letterSpacing: '0.25em',
          color: 'rgba(255,45,149,0.7)',
          textTransform: 'uppercase',
          display: 'block',
          marginBottom: '20px',
        }}>A Letter For You</span>
        <div style={{
          width: '60px', height: '1px',
          background: 'linear-gradient(to right, transparent, #FF2D95, transparent)',
          margin: '0 auto',
        }} />
      </motion.div>

      {/* Letter content */}
      <div style={{
        maxWidth: '640px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
      }}>
        {BIRTHDAY_LETTER.map((stanza, i) => (
          <LetterStanza key={stanza.id} stanza={stanza} index={i} />
        ))}
      </div>

      {/* Bottom divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.3 }}
        style={{
          width: '120px', height: '1px',
          background: 'linear-gradient(to right, transparent, rgba(255,45,149,0.5), transparent)',
          margin: 'clamp(48px, 8vw, 80px) auto 0',
        }}
      />
    </section>
  );
}

export default function YouTab({ onTabChange }) {
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

      {/* ══════════════ BIRTHDAY LETTER ══════════════ */}
      <BirthdayLetter />

      {/* Bridge to cities */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        style={{ textAlign: 'center', padding: '0 24px 60px' }}
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
          maxWidth: '400px', margin: '0 auto 56px'
        }}>
          Pappa &amp; Mamma
        </p>

        {/* YOUR GIFT CTA */}
        <motion.div
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '72px' }}
          initial={{ opacity: 0, scale: 0.88, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <button
            data-testid="your-gift-cta-btn"
            onClick={() => onTabChange?.('gift')}
            style={{
              fontFamily: 'Playfair Display, serif',
              fontWeight: 700,
              fontSize: 'clamp(1.4rem, 4vw, 2.2rem)',
              letterSpacing: '0.04em',
              color: '#fff',
              background: 'linear-gradient(135deg, #FF2D9520 0%, #7B61FF20 100%)',
              border: '2px solid #FF2D95',
              borderRadius: '4px',
              padding: 'clamp(18px, 3vw, 28px) clamp(40px, 8vw, 90px)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden',
              textShadow: '0 0 30px #FF2D95, 0 0 60px #FF2D9555',
              boxShadow: '0 0 40px #FF2D9540, 0 0 80px #FF2D9520, inset 0 0 40px #FF2D9510',
              transition: 'box-shadow 0.3s ease, transform 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.boxShadow = '0 0 70px #FF2D9570, 0 0 120px #FF2D9540, inset 0 0 60px #FF2D9520';
              e.currentTarget.style.transform = 'scale(1.04)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.boxShadow = '0 0 40px #FF2D9540, 0 0 80px #FF2D9520, inset 0 0 40px #FF2D9510';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            YOUR GIFT
            <span style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,45,149,0.08) 50%, transparent 100%)',
              transform: 'skewX(-20deg)',
              pointerEvents: 'none'
            }} />
          </button>
        </motion.div>

        <div className="divider-h" style={{ maxWidth: '140px', margin: '0 auto' }} />
        <div style={{ height: '80px' }} />
      </motion.section>
    </div>
  );
}
