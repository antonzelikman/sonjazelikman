import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CLOSING } from '../lib/content';

export default function FinalMessage({ onReplay }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    setStars(Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 0.5 + Math.random() * 1.5,
      dur: 2 + Math.random() * 4,
      delay: Math.random() * 4
    })));
  }, []);

  return (
    <section
      data-testid="closing-section"
      id="close"
      style={{
        background: '#0B0B0F', minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: 'clamp(80px, 12vw, 140px) 24px',
        position: 'relative', overflow: 'hidden', textAlign: 'center'
      }}
    >
      {/* Stars */}
      {stars.map(s => (
        <div key={s.id} className="star" style={{
          left: `${s.left}%`, top: `${s.top}%`,
          width: `${s.size}px`, height: `${s.size}px`,
          '--dur': `${s.dur}s`, '--delay': `${s.delay}s`
        }} />
      ))}

      {/* Glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(123,97,255,0.07) 0%, transparent 70%)'
      }} />

      {/* Ghost text */}
      <div style={{
        position: 'absolute', fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(100px, 28vw, 280px)', fontWeight: 700,
        color: 'rgba(255,45,149,0.025)', userSelect: 'none', pointerEvents: 'none',
        lineHeight: 1, top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        whiteSpace: 'nowrap', letterSpacing: '-0.05em'
      }}>
        Go.
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ position: 'relative', zIndex: 1, maxWidth: '640px' }}
      >
        <p className="overline" style={{ color: 'var(--violet)', marginBottom: '32px', display: 'block' }}>
          {CLOSING.overline}
        </p>

        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.4rem, 8vw, 5rem)',
          color: '#FFFFFF', fontWeight: 400,
          letterSpacing: '-0.02em', lineHeight: 1.1,
          margin: '0 0 8px'
        }}>
          {CLOSING.title}
        </h2>
        <h2 style={{
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          fontSize: 'clamp(2.4rem, 8vw, 5rem)',
          color: 'var(--pink)', fontWeight: 400,
          letterSpacing: '-0.02em', lineHeight: 1.1,
          margin: '0 0 40px',
          textShadow: '0 0 30px rgba(255,45,149,0.4)'
        }}>
          {CLOSING.titleGold}
        </h2>

        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, marginBottom: '16px', fontWeight: 300 }}>
          {CLOSING.sub}
        </p>

        <p style={{
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          fontSize: 'clamp(1.1rem, 3.5vw, 1.6rem)', color: '#FFFFFF',
          lineHeight: 1.6, marginBottom: '60px', whiteSpace: 'pre-line'
        }}>
          {CLOSING.body}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div className="divider" />
          <p style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--pink)', margin: 0, textShadow: '0 0 20px rgba(255,45,149,0.4)' }}>
            {CLOSING.love}
          </p>
          <div className="divider" />
        </div>
      </motion.div>

      {/* Replay */}
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ position: 'relative', zIndex: 1, marginTop: '80px' }}
      >
        <button
          data-testid="replay-btn"
          onClick={onReplay}
          style={{
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.12)',
            color: 'rgba(255,255,255,0.3)',
            padding: '12px 36px',
            fontFamily: 'Space Mono, monospace', fontSize: '9px',
            letterSpacing: '0.22em', textTransform: 'uppercase',
            cursor: 'pointer', transition: 'all 0.4s ease',
            display: 'flex', alignItems: 'center', gap: '10px', borderRadius: '2px'
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,45,149,0.4)'; e.currentTarget.style.color = 'rgba(255,45,149,0.7)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.3)'; }}
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
          </svg>
          Begin again
        </button>
      </motion.div>
    </section>
  );
}
