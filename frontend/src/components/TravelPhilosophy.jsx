import { motion } from 'framer-motion';
import { PHILOSOPHY } from '../lib/content';

export default function TravelPhilosophy() {
  return (
    <section
      data-testid="philosophy-section"
      id="philosophy"
      style={{
        background: '#0B0B0F', padding: 'clamp(80px, 12vw, 140px) 24px',
        position: 'relative', overflow: 'hidden'
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(123,97,255,0.06) 0%, transparent 70%)'
      }} />

      {/* Animated background lines */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.12, pointerEvents: 'none' }} preserveAspectRatio="none">
        {[0.15, 0.35, 0.55, 0.75, 0.9].map((y, i) => (
          <motion.line key={i}
            x1="0" y1={`${y * 100}%`} x2="100%" y2={`${y * 100}%`}
            stroke="rgba(123,97,255,0.8)" strokeWidth="0.5"
            strokeDasharray="40 20"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: i % 2 === 0 ? -200 : 200 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear', delay: i * 0.8 }}
          />
        ))}
      </svg>

      <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, transparent, rgba(123,97,255,0.4))', margin: '0 auto 60px' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ textAlign: 'center', marginBottom: '80px' }}
      >
        <p className="overline" style={{ color: 'var(--violet)', marginBottom: '16px', display: 'block' }}>What Travel Gives You</p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.2rem, 7vw, 4rem)', fontWeight: 400,
          color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.1
        }}>
          Travel opens everything.
        </h2>
      </motion.div>

      {/* Philosophy quotes */}
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        {PHILOSOPHY.map((quote, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1, delay: i * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              textAlign: 'center',
              padding: 'clamp(32px, 6vw, 56px) 0',
              borderBottom: i < PHILOSOPHY.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
              position: 'relative'
            }}
          >
            {/* Number */}
            <span style={{
              position: 'absolute', top: '28px', left: '50%', transform: 'translateX(-50%)',
              fontFamily: 'Space Mono, monospace', fontSize: '9px',
              color: 'var(--violet)', letterSpacing: '0.2em', opacity: 0.6
            }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <p style={{
              fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
              fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', color: '#FFFFFF',
              fontWeight: 400, lineHeight: 1.3, whiteSpace: 'pre-line', margin: 0
            }}>
              {quote}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Central philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ textAlign: 'center', marginTop: '72px', maxWidth: '600px', margin: '72px auto 0' }}
      >
        <p style={{
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          fontSize: 'clamp(1rem, 3vw, 1.3rem)', color: 'rgba(255,255,255,0.45)',
          lineHeight: 1.8, letterSpacing: '0.02em'
        }}>
          "Traveling the world will open your soul. And only when you are open,<br />
          can life truly come in and move through you."
        </p>
      </motion.div>

      <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, rgba(123,97,255,0.4), transparent)', margin: '60px auto 0' }} />
    </section>
  );
}
