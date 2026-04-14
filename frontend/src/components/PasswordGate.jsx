import { useState } from 'react';
import { motion } from 'framer-motion';
import { PASSWORD } from '../lib/content';

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => { setError(false); setValue(''); }, 1800);
    }
  };

  return (
    <motion.div
      data-testid="password-gate"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: '100vh', background: '#0B0B0F',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden'
      }}
    >
      {/* Pink radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255,45,149,0.06) 0%, transparent 70%)'
      }} />
      {/* Blue glow top */}
      <div style={{
        position: 'absolute', top: 0, left: '30%', width: '40%', height: '40%',
        background: 'radial-gradient(ellipse at center, rgba(45,156,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ zIndex: 1, textAlign: 'center', padding: '0 24px', maxWidth: '420px', width: '100%' }}>
        <motion.p
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="overline" style={{ color: 'var(--pink)', marginBottom: '48px', display: 'block' }}
        >
          A Private Gift
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 1 }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(3rem, 12vw, 5rem)',
            fontWeight: 400, color: '#FFFFFF',
            lineHeight: 0.95, letterSpacing: '-0.02em', marginBottom: '16px'
          }}
        >
          For Sonja
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'var(--muted)', marginBottom: '56px', letterSpacing: '0.04em' }}
        >
          Enter your code to begin
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.8 }}>
        <motion.form
          onSubmit={handleSubmit}
          animate={error ? { x: [-10, 10, -10, 10, 0] } : { x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <input
            data-testid="password-gate-input"
            type="password"
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder="Your password..."
            autoFocus
            style={{
              width: '100%', background: 'transparent', border: 'none',
              borderBottom: `1px solid ${error ? '#FF4444' : 'rgba(255,45,149,0.4)'}`,
              color: '#FFFFFF', fontSize: '18px', padding: '14px 4px',
              textAlign: 'center', fontFamily: 'Playfair Display, serif',
              letterSpacing: '0.15em', outline: 'none', transition: 'border-color 0.3s ease',
              boxSizing: 'border-box'
            }}
          />
          {error && (
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              style={{ color: '#FF4444', fontSize: '11px', marginTop: '10px', fontFamily: 'Space Mono, monospace', letterSpacing: '0.1em' }}
            >
              Try again
            </motion.p>
          )}
          <button
            data-testid="password-submit-btn"
            type="submit"
            className="btn-neon"
            style={{ marginTop: '40px', display: 'block', width: '100%' }}
          >
            Enter
          </button>
        </motion.form>
        </motion.div>
      </div>
    </motion.div>
  );
}
