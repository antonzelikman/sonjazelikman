import { useEffect, useState, useRef } from 'react';

export default function HeroSection({ onBegin }) {
  const [step, setStep] = useState(0);
  const particlesRef = useRef([]);

  useEffect(() => {
    particlesRef.current = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 5 + Math.random() * 8,
      delay: Math.random() * 6,
      size: 1 + Math.random() * 2
    }));
    const timers = [
      setTimeout(() => setStep(1), 300),
      setTimeout(() => setStep(2), 900),
      setTimeout(() => setStep(3), 1500),
      setTimeout(() => setStep(4), 2200),
      setTimeout(() => setStep(5), 3000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const fadeStyle = (show, delay = 0) => ({
    opacity: show ? 1 : 0,
    transform: show ? 'translateY(0)' : 'translateY(28px)',
    transition: `opacity 1.1s ease ${delay}s, transform 1.1s ease ${delay}s`,
  });

  return (
    <section
      data-testid="hero-section"
      id="hero"
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
        padding: '0 24px'
      }}
    >
      {/* Radial glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)'
      }} />

      {/* Particles */}
      {particlesRef.current.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          bottom: '-10px',
          left: `${p.left}%`,
          width: `${p.size}px`,
          height: `${p.size}px`,
          borderRadius: '50%',
          background: 'rgba(212,175,55,0.7)',
          animation: `floatUp ${p.duration}s ${p.delay}s infinite ease-in-out`,
          pointerEvents: 'none'
        }} />
      ))}

      {/* Decorative large 16 */}
      <div style={{
        position: 'absolute',
        fontSize: 'clamp(220px, 40vw, 420px)',
        fontFamily: 'Cormorant Garamond, serif',
        fontWeight: 700,
        color: 'rgba(212,175,55,0.04)',
        lineHeight: 1,
        userSelect: 'none',
        pointerEvents: 'none',
        letterSpacing: '-0.05em',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        16
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px' }}>
        <p style={{
          ...fadeStyle(step >= 1),
          fontFamily: 'Space Mono, monospace',
          fontSize: '11px',
          letterSpacing: '0.28em',
          color: '#D4AF37',
          textTransform: 'uppercase',
          marginBottom: '24px'
        }}>
          Happy Birthday
        </p>

        <h1 style={{
          ...fadeStyle(step >= 2),
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(5rem, 18vw, 10rem)',
          fontWeight: 400,
          color: '#FDFBF7',
          lineHeight: 0.9,
          letterSpacing: '-0.03em',
          margin: '0 0 16px 0'
        }}>
          Sonja
        </h1>

        <p style={{
          ...fadeStyle(step >= 3),
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1rem, 3.5vw, 1.5rem)',
          color: 'rgba(212,175,55,0.8)',
          letterSpacing: '0.12em',
          fontStyle: 'italic',
          marginBottom: '36px'
        }}>
          16 years old
        </p>

        <p style={{
          ...fadeStyle(step >= 4),
          fontFamily: 'Outfit, sans-serif',
          fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
          color: '#A1A1AA',
          lineHeight: 1.7,
          maxWidth: '480px',
          margin: '0 auto 52px',
          fontWeight: 300
        }}>
          The world is bigger than you think.
          <br />And so are you.
        </p>

        <div style={fadeStyle(step >= 5)}>
          <button
            data-testid="begin-journey-btn"
            onClick={onBegin}
            style={{
              background: 'transparent',
              border: '1px solid rgba(212,175,55,0.5)',
              color: '#D4AF37',
              padding: '16px 52px',
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              transition: 'all 0.4s ease'
            }}
            onMouseEnter={e => {
              e.target.style.background = 'rgba(212,175,55,0.08)';
              e.target.style.borderColor = '#D4AF37';
            }}
            onMouseLeave={e => {
              e.target.style.background = 'transparent';
              e.target.style.borderColor = 'rgba(212,175,55,0.5)';
            }}
          >
            Begin the journey
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        opacity: step >= 5 ? 0.5 : 0,
        transition: 'opacity 1s ease 1s'
      }}>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.6))',
          animation: 'scrollPulse 2s ease infinite'
        }} />
      </div>

      <style>{`
        @keyframes floatUp {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 1; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-100vh) scale(0.5); opacity: 0; }
        }
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(1); }
          50% { opacity: 0.8; transform: scaleY(1.2); }
        }
      `}</style>
    </section>
  );
}
