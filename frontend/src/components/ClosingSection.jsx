import useInView from '../hooks/useInView';

export default function ClosingSection({ onReplay }) {
  const [ref, inView] = useInView(0.2);
  const [replayRef, replayInView] = useInView(0.3);

  return (
    <section
      data-testid="closing-section"
      id="close"
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(80px, 12vw, 140px) 24px',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center'
      }}
    >
      {/* Gold glow background */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)'
      }} />

      {/* Decorative large text bg */}
      <div style={{
        position: 'absolute',
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(100px, 30vw, 280px)',
        fontWeight: 700,
        color: 'rgba(212,175,55,0.025)',
        userSelect: 'none',
        pointerEvents: 'none',
        lineHeight: 1,
        letterSpacing: '-0.05em',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        whiteSpace: 'nowrap'
      }}>
        Go.
      </div>

      <div
        ref={ref}
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '600px',
          opacity: inView ? 1 : 0,
          transform: inView ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 1.2s ease, transform 1.2s ease'
        }}
      >
        <p style={{
          fontFamily: 'Space Mono, monospace', fontSize: '10px',
          letterSpacing: '0.3em', color: '#D4AF37', textTransform: 'uppercase',
          marginBottom: '32px'
        }}>
          Until then
        </p>

        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2.4rem, 8vw, 4.5rem)',
          color: '#FDFBF7',
          fontWeight: 400,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          margin: '0 0 32px 0'
        }}>
          There is a whole world<br />
          <em style={{ color: '#D4AF37' }}>beyond what you see right now.</em>
        </h2>

        <p style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
          color: '#A1A1AA',
          lineHeight: 1.9,
          marginBottom: '20px',
          fontWeight: 300
        }}>
          And it is waiting for you.
        </p>

        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.2rem, 4vw, 1.7rem)',
          color: '#FDFBF7',
          fontStyle: 'italic',
          lineHeight: 1.5,
          marginBottom: '60px'
        }}>
          Go when you're ready.<br />
          We'll be here cheering you on.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <div style={{ width: '60px', height: '1px', background: 'rgba(212,175,55,0.4)' }} />
          <p style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '1.3rem',
            color: '#D4AF37',
            fontStyle: 'italic',
            margin: 0
          }}>
            Happy 16th, Sonja. ❤️
          </p>
          <div style={{ width: '60px', height: '1px', background: 'rgba(212,175,55,0.4)' }} />
        </div>
      </div>

      {/* Replay */}
      <div
        ref={replayRef}
        style={{
          position: 'relative',
          zIndex: 1,
          marginTop: '80px',
          opacity: replayInView ? 1 : 0,
          transform: replayInView ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 1s ease 0.5s, transform 1s ease 0.5s'
        }}
      >
        <button
          data-testid="replay-btn"
          onClick={onReplay}
          style={{
            background: 'transparent',
            border: '1px solid rgba(212,175,55,0.3)',
            color: 'rgba(212,175,55,0.6)',
            padding: '12px 36px',
            fontFamily: 'Space Mono, monospace',
            fontSize: '9px',
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            transition: 'all 0.4s ease',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#D4AF37';
            e.currentTarget.style.color = '#D4AF37';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(212,175,55,0.3)';
            e.currentTarget.style.color = 'rgba(212,175,55,0.6)';
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
          </svg>
          Begin again
        </button>
      </div>
    </section>
  );
}
