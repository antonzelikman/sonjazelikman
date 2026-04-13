import { useState } from 'react';

const CORRECT_PASSWORD = 'Snusen123';

export default function PasswordGate({ onUnlock }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value === CORRECT_PASSWORD) {
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 600);
      setTimeout(() => setError(false), 2000);
      setValue('');
    }
  };

  return (
    <div
      data-testid="password-gate"
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Outfit, sans-serif',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Subtle background glow */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 60%, rgba(212,175,55,0.04) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div style={{ textAlign: 'center', zIndex: 1, padding: '0 24px', maxWidth: '400px', width: '100%' }}>
        {/* Logo / overline */}
        <p style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '10px',
          letterSpacing: '0.3em',
          color: '#D4AF37',
          textTransform: 'uppercase',
          marginBottom: '48px',
          opacity: 0.8
        }}>
          A Private Gift
        </p>

        <h1 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2rem, 8vw, 3.5rem)',
          color: '#FDFBF7',
          fontWeight: 400,
          lineHeight: 1.1,
          marginBottom: '16px',
          letterSpacing: '-0.02em'
        }}>
          For Sonja
        </h1>

        <p style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '14px',
          color: '#71717A',
          marginBottom: '56px',
          letterSpacing: '0.05em'
        }}>
          Enter your code to begin
        </p>

        <form onSubmit={handleSubmit}>
          <div style={{
            animation: shake ? 'shake 0.6s ease' : 'none'
          }}>
            <input
              data-testid="password-gate-input"
              type="password"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Your password..."
              autoFocus
              style={{
                width: '100%',
                background: 'transparent',
                border: 'none',
                borderBottom: `1px solid ${error ? '#ff6b6b' : 'rgba(212,175,55,0.4)'}`,
                color: '#FDFBF7',
                fontSize: '18px',
                padding: '12px 4px',
                textAlign: 'center',
                fontFamily: 'Cormorant Garamond, serif',
                letterSpacing: '0.15em',
                outline: 'none',
                transition: 'border-color 0.3s ease',
                boxSizing: 'border-box'
              }}
            />
          </div>

          {error && (
            <p style={{
              color: '#ff6b6b', fontSize: '12px', marginTop: '12px',
              fontFamily: 'Outfit, sans-serif', letterSpacing: '0.05em'
            }}>
              That's not quite right
            </p>
          )}

          <button
            data-testid="password-submit-btn"
            type="submit"
            style={{
              marginTop: '40px',
              background: 'transparent',
              border: '1px solid rgba(212,175,55,0.5)',
              color: '#D4AF37',
              padding: '14px 48px',
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={e => {
              e.target.style.background = 'rgba(212,175,55,0.1)';
              e.target.style.borderColor = '#D4AF37';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = 'rgba(212,175,55,0.5)';
            }}
          >
            Enter
          </button>
        </form>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20%, 60% { transform: translateX(-8px); }
          40%, 80% { transform: translateX(8px); }
        }
      `}</style>
    </div>
  );
}
