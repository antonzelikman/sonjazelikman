import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PASSWORD } from '../lib/content';

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === PASSWORD) {
      setExiting(true);
      setTimeout(() => onUnlock(), 1200);
    } else {
      setError(true);
      setTimeout(() => { setError(false); setValue(''); }, 1800);
    }
  };

  return (
    <AnimatePresence>
      {!exiting && (
        <motion.div
          data-testid="password-gate"
          key="gate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: 'fixed', inset: 0,
            background: '#080810',
            overflow: 'hidden', zIndex: 9999
          }}
        >
          {/* ── VIDEO BACKGROUND ── */}
          <video
            ref={videoRef}
            src="/landing.mp4"
            autoPlay
            muted
            loop
            playsInline
            onCanPlay={() => setVideoLoaded(true)}
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover', objectPosition: 'center',
              opacity: videoLoaded ? 1 : 0,
              transition: 'opacity 1.5s ease',
              zIndex: 0
            }}
          />

          {/* Dark cinematic overlay — darker at bottom where form lives */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 1,
            background: `
              linear-gradient(to bottom,
                rgba(8,8,16,0.25) 0%,
                rgba(8,8,16,0.1) 30%,
                rgba(8,8,16,0.2) 55%,
                rgba(8,8,16,0.85) 78%,
                rgba(8,8,16,0.97) 100%
              )
            `
          }} />

          {/* Neon scanlines on top of video */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 3px)'
          }} />

          {/* ── CONTENT ── */}
          <div style={{
            position: 'absolute', inset: 0, zIndex: 3,
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'flex-end',
            padding: '0 24px 60px',
            pointerEvents: 'none'
          }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                textAlign: 'center', maxWidth: '420px', width: '100%',
                pointerEvents: 'all'
              }}
            >
              {/* Overline */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '9px', letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,45,149,0.8)',
                  textShadow: '0 0 20px rgba(255,45,149,0.6)',
                  marginBottom: '20px', display: 'block'
                }}
              >
                A Private Gift
              </motion.p>

              {/* Main title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 1.1 }}
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(3.5rem, 14vw, 6.5rem)',
                  fontWeight: 700, color: '#FFFFFF',
                  lineHeight: 0.9, letterSpacing: '-0.03em',
                  marginBottom: '10px',
                  textShadow: '0 0 60px rgba(255,45,149,0.25), 0 0 120px rgba(255,45,149,0.1)'
                }}
              >
                For Sonja
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.8 }}
                style={{
                  fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
                  fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
                  color: 'rgba(255,255,255,0.35)',
                  marginBottom: '44px', lineHeight: 1.7
                }}
              >
                16 years. Seven cities.<br />One story.
              </motion.p>

              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                animate={error ? { x: [-10, 10, -10, 8, 0] } : { x: 0 }}
                transition={{ duration: 0.35 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.7 }}
                >
                  <input
                    ref={inputRef}
                    data-testid="password-gate-input"
                    type="password"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    placeholder="Enter your password..."
                    autoFocus
                    style={{
                      width: '100%', background: 'rgba(255,255,255,0.04)',
                      border: `1px solid ${error ? 'rgba(255,68,68,0.7)' : 'rgba(255,45,149,0.3)'}`,
                      borderRadius: '4px',
                      color: '#FFFFFF', fontSize: '14px',
                      padding: '16px 20px', textAlign: 'center',
                      fontFamily: 'Inter, sans-serif', letterSpacing: '0.2em',
                      outline: 'none', transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                      boxSizing: 'border-box', marginBottom: '12px',
                      backdropFilter: 'blur(8px)',
                      boxShadow: error
                        ? '0 0 20px rgba(255,68,68,0.25)'
                        : value
                          ? '0 0 20px rgba(255,45,149,0.15), inset 0 0 12px rgba(255,45,149,0.04)'
                          : 'none'
                    }}
                    onFocus={e => {
                      e.target.style.borderColor = 'rgba(255,45,149,0.65)';
                      e.target.style.boxShadow = '0 0 24px rgba(255,45,149,0.2)';
                    }}
                    onBlur={e => {
                      if (!error) {
                        e.target.style.borderColor = 'rgba(255,45,149,0.3)';
                        e.target.style.boxShadow = 'none';
                      }
                    }}
                  />

                  <AnimatePresence>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        style={{
                          color: 'rgba(255,68,68,0.9)', fontSize: '10px',
                          marginBottom: '12px', fontFamily: 'Space Mono, monospace',
                          letterSpacing: '0.15em', textTransform: 'uppercase'
                        }}
                      >
                        Wrong password. Try again.
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <button
                    data-testid="password-submit-btn"
                    type="submit"
                    style={{
                      width: '100%', padding: '16px',
                      background: 'transparent',
                      border: '1px solid rgba(255,45,149,0.5)',
                      color: 'rgba(255,45,149,0.9)',
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '10px', letterSpacing: '0.28em',
                      textTransform: 'uppercase', cursor: 'pointer',
                      transition: 'all 0.35s ease', borderRadius: '2px',
                      backdropFilter: 'blur(8px)',
                      position: 'relative', overflow: 'hidden'
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,45,149,0.9)';
                      e.currentTarget.style.boxShadow = '0 0 28px rgba(255,45,149,0.4), inset 0 0 20px rgba(255,45,149,0.06)';
                      e.currentTarget.style.color = '#FF2D95';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,45,149,0.5)';
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.color = 'rgba(255,45,149,0.9)';
                    }}
                  >
                    Enter
                  </button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>

          {/* Top-left logo — faint branding */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            style={{
              position: 'absolute', top: '28px', left: 'clamp(20px, 4vw, 36px)',
              zIndex: 4, pointerEvents: 'none',
              fontFamily: 'Inter, sans-serif', fontWeight: 700,
              fontSize: '11px', letterSpacing: '0.12em',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)'
            }}
          >
            SONJA's{' '}
            <span style={{
              color: 'rgba(255,45,149,0.7)',
              textShadow: '0 0 12px rgba(255,45,149,0.5)'
            }}>
              ADVENTURES
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
