import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BOARDING_PASS, GIFT, GIFT_LETTER } from '../lib/content';

function BoardingPassCard({ visible }) {
  const bp = BOARDING_PASS;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="bp-wrap"
          initial={{ opacity: 0, y: 60, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          data-testid="boarding-pass"
          style={{ perspective: '1000px' }}
        >
          <div className="bp-card">
            {/* Top header band */}
            <motion.div
              className="bp-airline-band"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="bp-airline-name">{bp.airline}</span>
              <span className="bp-class-badge">{bp.class}</span>
            </motion.div>

            {/* Main body */}
            <div className="bp-body">
              {/* Route */}
              <motion.div
                className="bp-route"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.7 }}
              >
                <div className="bp-city-block">
                  <span className="bp-city-code">{bp.from}</span>
                  <span className="bp-city-label">Departure</span>
                </div>

                <div className="bp-route-line-wrap">
                  <motion.div
                    className="bp-route-line"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                  <svg className="bp-plane-icon" viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                  </svg>
                  <div className="bp-route-dest">{bp.destination}</div>
                </div>

                <div className="bp-city-block" style={{ textAlign: 'right' }}>
                  <span className="bp-city-code" style={{ color: 'var(--cyan)' }}>{bp.to}</span>
                  <span className="bp-city-label">Destination</span>
                </div>
              </motion.div>

              {/* Passenger & details */}
              <motion.div
                className="bp-details-grid"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
              >
                <div className="bp-detail-block">
                  <span className="bp-detail-label">PASSENGER</span>
                  <span className="bp-detail-value neon-pink">{bp.passenger}</span>
                </div>
                <div className="bp-detail-block">
                  <span className="bp-detail-label">FLIGHT</span>
                  <span className="bp-detail-value">{bp.flight}</span>
                </div>
                <div className="bp-detail-block">
                  <span className="bp-detail-label">GATE</span>
                  <span className="bp-detail-value neon-cyan">{bp.gate}</span>
                </div>
                <div className="bp-detail-block">
                  <span className="bp-detail-label">SEAT</span>
                  <span className="bp-detail-value">{bp.seat}</span>
                </div>
              </motion.div>
            </div>

            {/* Perforation */}
            <div className="bp-perf">
              <div className="bp-perf-line" />
              <div className="bp-notch" style={{ left: '-8px' }} />
              <div className="bp-notch" style={{ right: '-8px' }} />
            </div>

            {/* Stub */}
            <motion.div
              className="bp-stub"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <div className="bp-amount-display">
                <span className="bp-amount-label">TRAVEL ACCOUNT</span>
                <motion.span
                  className="bp-amount-value"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.6, type: 'spring', bounce: 0.3 }}
                >
                  {bp.amount}
                </motion.span>
                <span className="bp-amount-sub">Yours to use. No rules.</span>
              </div>

              {/* Animated neon barcode + Bank Account link */}
              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '16px' }}>
                <div className="bp-barcode" aria-hidden="true">
                  {Array.from({ length: 28 }, (_, i) => (
                    <motion.div
                      key={i}
                      className="bp-bar"
                      style={{
                        width: `${[2, 4, 2, 6, 2, 4, 2, 2, 6, 2, 4, 2, 6, 2, 2, 4, 2, 6, 2, 4, 2, 2, 6, 4, 2, 2, 4, 6][i] || 3}px`,
                        background: i % 5 === 0 ? 'var(--pink)' : i % 3 === 0 ? 'var(--cyan)' : '#fff'
                      }}
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.04 }}
                    />
                  ))}
                </div>

                <motion.a
                  data-testid="bank-account-link"
                  href="https://www.handelsbanken.se/sv/privat/vardagstjanster/digitala-tjanster/inloggningssatt"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                  style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '10px',
                    letterSpacing: '0.18em',
                    color: 'var(--cyan)',
                    border: '1px solid rgba(0,229,255,0.45)',
                    borderRadius: '4px',
                    padding: '8px 14px',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    textShadow: '0 0 12px rgba(0,229,255,0.6)',
                    boxShadow: '0 0 14px rgba(0,229,255,0.15)',
                    transition: 'all 0.3s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--cyan)';
                    e.currentTarget.style.boxShadow = '0 0 24px rgba(0,229,255,0.4)';
                    e.currentTarget.style.background = 'rgba(0,229,255,0.08)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,229,255,0.45)';
                    e.currentTarget.style.boxShadow = '0 0 14px rgba(0,229,255,0.15)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  BANK ACCOUNT
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function YourGiftTab() {
  const [revealed, setRevealed] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  return (
    <div className="gift-tab" data-testid="gift-tab">
      {/* ── HERO ── */}
      <section className="gift-hero">
        <div className="gift-hero-bg-glow" aria-hidden="true" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '620px' }}
        >
          <motion.p
            className="overline neon-pink"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: 'block', marginBottom: '24px' }}
          >
            Your Gift
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(3rem, 14vw, 7rem)',
              fontWeight: 700, color: '#fff',
              lineHeight: 0.9, letterSpacing: '-0.02em',
              textShadow: '0 0 60px rgba(255,45,149,0.3)',
              marginBottom: '16px'
            }}
          >
            5,000
          </motion.h1>

          <motion.p
            className="neon-cyan"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: 'clamp(1.2rem, 4vw, 2rem)',
              letterSpacing: '0.18em', marginBottom: '28px'
            }}
          >
            SEK
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
            style={{
              fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
              fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
              color: 'rgba(255,255,255,0.5)', lineHeight: 1.8,
              marginBottom: '48px', whiteSpace: 'pre-line'
            }}
          >
            {GIFT.description}
          </motion.p>

          {!revealed ? (
            <motion.button
              data-testid="reveal-boarding-pass-btn"
              className="btn-neon btn-pulse"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setRevealed(true)}
            >
              Reveal Your Boarding Pass
            </motion.button>
          ) : (
            <motion.p
              className="overline neon-cyan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{ display: 'block' }}
            >
              First Class — All the way.
            </motion.p>
          )}
        </motion.div>
      </section>

      {/* ── BOARDING PASS ── */}
      <section className="gift-pass-section">
        <BoardingPassCard visible={revealed} />

        {/* Letter button */}
        <AnimatePresence>
          {revealed && !showLetter && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
              style={{ textAlign: 'center', marginTop: '48px' }}
            >
              <button
                data-testid="read-letter-btn"
                className="btn-neon btn-neon-cyan"
                onClick={() => setShowLetter(true)}
              >
                Read Your Letter
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ── GIFT LETTER ── */}
      <AnimatePresence>
        {showLetter && (
          <>
            <motion.section
              className="gift-letter-section"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              data-testid="gift-letter"
            >
              <div className="gift-letter-card">
                {/* Corner accents */}
                <div className="corner-tl" />
                <div className="corner-tr" />
                <div className="corner-bl" />
                <div className="corner-br" />

                <pre className="gift-letter-text">{GIFT_LETTER}</pre>
              </div>
            </motion.section>

            {/* ── CLOSING VIDEO ── */}
            <motion.section
              data-testid="cosmic-video-section"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                position: 'relative',
                maxWidth: '900px',
                margin: '0 auto 0',
                padding: '0 24px',
                textAlign: 'center'
              }}
            >
              <motion.p
                className="overline neon-pink"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                style={{ display: 'block', marginBottom: '28px' }}
              >
                This is your moment
              </motion.p>

              <div style={{
                position: 'relative',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 0 60px rgba(255,45,149,0.35), 0 0 120px rgba(123,97,255,0.2)',
                border: '1px solid rgba(255,45,149,0.25)'
              }}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', display: 'block' }}
                  src="https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/51gcjguf_Cosmic%20Poise%20%28AI%20Video%20Effect%29.mp4"
                />
                {/* Neon overlay tint */}
                <div style={{
                  position: 'absolute', inset: 0, pointerEvents: 'none',
                  background: 'linear-gradient(to bottom, transparent 60%, rgba(8,8,16,0.7) 100%)'
                }} />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.9 }}
                style={{
                  fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
                  fontSize: 'clamp(1rem, 3vw, 1.4rem)',
                  color: 'rgba(255,255,255,0.35)',
                  marginTop: '40px', lineHeight: 1.7
                }}
              >
                The adventure starts now.
              </motion.p>
            </motion.section>
          </>
        )}
      </AnimatePresence>

      <div style={{ height: '80px' }} />
    </div>
  );
}
