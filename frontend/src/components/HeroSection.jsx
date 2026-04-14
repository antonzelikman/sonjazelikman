import { motion } from 'framer-motion';
import { HERO } from '../lib/content';
import NeonAirplane from './NeonAirplane';

const CITY_NODES = [
  { name: 'NYC', x: '12%', y: '55%', color: '#2D9CFF' },
  { name: 'LONDON', x: '44%', y: '30%', color: '#7B61FF' },
  { name: 'PARIS', x: '46%', y: '38%', color: '#FF2D95' },
  { name: 'BCN', x: '44%', y: '44%', color: '#FF6B35' },
  { name: 'IST', x: '58%', y: '42%', color: '#00E5FF' },
  { name: 'TLV', x: '60%', y: '50%', color: '#FFD700' },
];

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.18, delayChildren: 0.3 } }
};
const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } }
};

export default function HeroSection() {
  return (
    <section className="hero-section" data-testid="hero-section" id="hero">
      {/* Decorative ghost "16" */}
      <div style={{
        position: 'absolute', fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(200px, 45vw, 500px)', fontWeight: 700,
        color: 'rgba(255,45,149,0.03)', lineHeight: 1,
        userSelect: 'none', pointerEvents: 'none',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        letterSpacing: '-0.05em'
      }}>16</div>

      {/* Text content */}
      <motion.div variants={stagger} initial="hidden" animate="show"
        style={{ position: 'relative', zIndex: 2, textAlign: 'center', marginBottom: '40px', maxWidth: '680px' }}>
        <motion.p variants={item} className="overline neon-pink" style={{ marginBottom: '20px' }}>
          {HERO.overline}
        </motion.p>
        <motion.h1 variants={item} style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(5rem, 22vw, 12rem)',
          fontWeight: 700, color: '#FFFFFF',
          lineHeight: 0.88, letterSpacing: '-0.03em',
          textShadow: '0 0 40px rgba(255,45,149,0.25), 0 0 80px rgba(255,45,149,0.12)',
          margin: '0 0 16px'
        }}>
          {HERO.name}
        </motion.h1>
        <motion.p variants={item} style={{
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          fontSize: 'clamp(1rem, 4vw, 1.7rem)',
          color: 'rgba(255,45,149,0.85)', letterSpacing: '0.1em',
          textShadow: '0 0 20px rgba(255,45,149,0.5)', marginBottom: '24px'
        }}>
          {HERO.age}
        </motion.p>
        <motion.p variants={item} style={{
          fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
          color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '420px',
          margin: '0 auto 44px', fontWeight: 300
        }}>
          {HERO.tagline}<br />{HERO.tagline2}
        </motion.p>
        <motion.div variants={item}>
          <button
            data-testid="begin-journey-btn"
            className="btn-neon"
            onClick={() => document.getElementById('city-cards')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {HERO.cta}
          </button>
        </motion.div>
      </motion.div>

      {/* The Neon Airplane */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ position: 'relative', zIndex: 2, width: '100%', maxWidth: '860px' }}
      >
        <NeonAirplane />

        {/* City nodes overlay on the airplane backdrop */}
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          {CITY_NODES.map((c, i) => (
            <motion.div key={c.name}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 3 + i * 0.3 }}
              style={{
                position: 'absolute', left: c.x, top: c.y,
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px'
              }}
            >
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7], boxShadow: [`0 0 6px ${c.color}`, `0 0 14px ${c.color}`, `0 0 6px ${c.color}`] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                style={{ width: '7px', height: '7px', borderRadius: '50%', background: c.color }}
              />
              <span style={{
                fontFamily: 'Space Mono, monospace', fontSize: '7px',
                letterSpacing: '0.12em', color: c.color, whiteSpace: 'nowrap',
                textShadow: `0 0 8px ${c.color}`
              }}>
                {c.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.4 }} transition={{ delay: 5 }}
        style={{
          position: 'absolute', bottom: '28px', left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px'
        }}>
        <div style={{ width: '1px', height: '40px', background: 'linear-gradient(to bottom, transparent, rgba(255,45,149,0.7))' }} />
      </motion.div>
    </section>
  );
}
