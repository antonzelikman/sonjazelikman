import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GIFT } from '../lib/content';
import BoardingPass from './BoardingPass';

function GiftLetter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.3 }}
      style={{ maxWidth: '560px', margin: '56px auto 0' }}
    >
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,45,149,0.15)',
        borderRadius: '4px',
        padding: 'clamp(28px, 6vw, 48px)',
        position: 'relative'
      }}>
        {/* Gold corner accents */}
        {[['top', 'left'], ['top', 'right'], ['bottom', 'left'], ['bottom', 'right']].map(([v, h]) => (
          <div key={`${v}-${h}`} style={{
            position: 'absolute',
            [v]: '-1px', [h]: '-1px',
            width: '18px', height: '18px',
            borderTop: v === 'top' ? '2px solid rgba(255,45,149,0.6)' : 'none',
            borderBottom: v === 'bottom' ? '2px solid rgba(255,45,149,0.6)' : 'none',
            borderLeft: h === 'left' ? '2px solid rgba(255,45,149,0.6)' : 'none',
            borderRight: h === 'right' ? '2px solid rgba(255,45,149,0.6)' : 'none',
          }} />
        ))}

        <p style={{
          fontFamily: 'Space Mono, monospace', fontSize: '8px',
          letterSpacing: '0.22em', color: 'var(--pink)', textTransform: 'uppercase',
          marginBottom: '24px', opacity: 0.9
        }}>
          This is real. This is now. This is yours.
        </p>

        {GIFT.letter.split('\n\n').map((block, i) => (
          <p key={i} style={{
            fontFamily: i === 0 ? 'Playfair Display, serif' : 'Inter, sans-serif',
            fontStyle: i === 0 ? 'italic' : 'normal',
            fontSize: i === 0 ? 'clamp(1rem, 2.8vw, 1.2rem)' : '14px',
            color: i === 0 ? '#FFFFFF' : 'rgba(255,255,255,0.65)',
            lineHeight: 1.9, marginBottom: '16px',
            fontWeight: 300, whiteSpace: 'pre-line'
          }}>
            {block}
          </p>
        ))}

        <p style={{
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: 'var(--pink)',
          marginTop: '8px', marginBottom: 0
        }}>
          Pappa &amp; Mamma ❤️
        </p>
      </div>
    </motion.div>
  );
}

export default function GiftReveal() {
  const [revealed, setRevealed] = useState(false);

  return (
    <section
      data-testid="gift-section"
      id="gift"
      style={{
        background: '#0f0f14', padding: 'clamp(80px, 12vw, 140px) 24px',
        position: 'relative', overflow: 'hidden'
      }}
    >
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 40% at 50% 40%, rgba(255,45,149,0.07) 0%, transparent 70%)'
      }} />

      <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, transparent, rgba(255,45,149,0.4))', margin: '0 auto 60px' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ textAlign: 'center', marginBottom: '60px' }}
      >
        <p className="overline" style={{ color: 'var(--pink)', marginBottom: '16px', display: 'block' }}>
          {GIFT.title}
        </p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.2rem, 7vw, 4rem)', fontWeight: 400,
          color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.1, margin: '0 0 20px'
        }}>
          {GIFT.subtitle}
        </h2>

        {/* Amount pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ display: 'inline-block', marginBottom: '20px' }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '8px 24px',
            border: '1px solid rgba(255,45,149,0.4)',
            borderRadius: '100px',
            background: 'rgba(255,45,149,0.08)',
            boxShadow: '0 0 30px rgba(255,45,149,0.1)'
          }}>
            <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.5)' }}>LOADED</span>
            <span style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.4rem', color: 'var(--pink)' }}>{GIFT.amount}</span>
          </div>
        </motion.div>

        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'var(--muted)', maxWidth: '440px', margin: '0 auto 40px', lineHeight: 1.8, fontWeight: 300 }}>
          {GIFT.description}
        </p>

        {/* CTA to reveal */}
        <AnimatePresence>
          {!revealed && (
            <motion.button
              data-testid="unlock-gift-btn"
              exit={{ opacity: 0, y: -20 }}
              className="btn-neon"
              onClick={() => setRevealed(true)}
              style={{ fontSize: '11px' }}
            >
              {GIFT.cta}
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Boarding pass reveal */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <BoardingPass />
            <GiftLetter />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Philosophy */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        style={{ textAlign: 'center', marginTop: '72px', maxWidth: '500px', margin: '72px auto 0' }}
      >
        <p style={{
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          fontSize: 'clamp(1.1rem, 3.5vw, 1.6rem)', color: '#FFFFFF',
          lineHeight: 1.6, marginBottom: '16px'
        }}>
          "This is not for things that fade.<br />
          This is for the life you will live."
        </p>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--muted)', lineHeight: 1.8 }}>
          This is freedom. This is trust.<br />
          This is responsibility. This is a doorway into life.
        </p>
      </motion.div>

      <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, rgba(255,45,149,0.4), transparent)', margin: '60px auto 0' }} />
    </section>
  );
}
