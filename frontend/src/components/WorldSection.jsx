import useInView from '../hooks/useInView';

const cities = [
  { name: 'London', x: '44%', y: '28%', delay: 0 },
  { name: 'Paris', x: '46%', y: '33%', delay: 0.3 },
  { name: 'New York', x: '23%', y: '34%', delay: 0.6 },
  { name: 'Dubai', x: '59%', y: '42%', delay: 0.9 },
  { name: 'Tokyo', x: '78%', y: '37%', delay: 1.2 },
  { name: 'Sydney', x: '81%', y: '67%', delay: 1.5 },
  { name: 'Cape Town', x: '51%', y: '68%', delay: 1.8 },
  { name: 'Rio', x: '30%', y: '62%', delay: 2.1 },
  { name: 'Bangkok', x: '71%', y: '46%', delay: 2.4 },
  { name: 'Reykjavik', x: '38%', y: '20%', delay: 2.7 },
];

const quotes = [
  { text: 'When you open your world,', emphasis: 'your soul opens too.' },
  { text: 'New places change', emphasis: 'how you see everything.' },
  { text: 'Life flows through', emphasis: 'those who are open to it.' },
];

function QuoteItem({ quote, index }) {
  const [ref, inView] = useInView(0.3);
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.9s ease ${index * 0.2}s, transform 0.9s ease ${index * 0.2}s`,
        textAlign: 'center',
        padding: '32px 0'
      }}
    >
      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(1.4rem, 4.5vw, 2.2rem)',
        color: '#FDFBF7',
        fontStyle: 'italic',
        fontWeight: 400,
        lineHeight: 1.3,
        margin: 0
      }}>
        {quote.text}<br />
        <em style={{ color: '#D4AF37' }}>{quote.emphasis}</em>
      </p>
    </div>
  );
}

export default function WorldSection() {
  const [headerRef, headerVisible] = useInView(0.3);
  const [mapRef, mapVisible] = useInView(0.2);

  return (
    <section
      data-testid="philosophy-section"
      id="world"
      style={{
        background: '#0c0c0c',
        padding: 'clamp(80px, 12vw, 140px) 24px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background radial */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 50% at 50% 50%, rgba(212,175,55,0.05) 0%, transparent 70%)'
      }} />

      {/* Section header */}
      <div
        ref={headerRef}
        style={{
          textAlign: 'center',
          marginBottom: '80px',
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s ease, transform 1s ease'
        }}
      >
        <p style={{
          fontFamily: 'Space Mono, monospace', fontSize: '10px',
          letterSpacing: '0.3em', color: '#D4AF37', textTransform: 'uppercase', marginBottom: '16px'
        }}>
          What the World Gives You
        </p>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2.2rem, 7vw, 4rem)',
          color: '#FDFBF7', fontWeight: 400,
          letterSpacing: '-0.02em', margin: 0, lineHeight: 1.1
        }}>
          Travel opens everything.
        </h2>
        <p style={{
          fontFamily: 'Outfit, sans-serif', fontSize: '15px',
          color: '#A1A1AA', marginTop: '20px', maxWidth: '500px',
          margin: '20px auto 0', lineHeight: 1.8, fontWeight: 300
        }}>
          Traveling the world will open your soul.<br />
          And only when you are open, can life truly come in and move through you.
        </p>
      </div>

      {/* World map dots */}
      <div
        ref={mapRef}
        style={{
          position: 'relative',
          maxWidth: '700px',
          margin: '0 auto 80px',
          height: '240px',
          opacity: mapVisible ? 1 : 0,
          transition: 'opacity 1.5s ease'
        }}
      >
        {/* Subtle globe grid lines */}
        <svg width="100%" height="100%" viewBox="0 0 700 240" style={{ position: 'absolute', inset: 0 }}>
          {/* Horizontal latitude lines */}
          {[60, 100, 140, 180, 220].map(y => (
            <line key={y} x1="0" y1={y} x2="700" y2={y} stroke="rgba(212,175,55,0.06)" strokeWidth="1"/>
          ))}
          {/* Vertical longitude lines */}
          {[100, 200, 300, 400, 500, 600].map(x => (
            <line key={x} x1={x} y1="0" x2={x} y2="240" stroke="rgba(212,175,55,0.06)" strokeWidth="1"/>
          ))}
          {/* Animated route lines */}
          <path d="M 161 81 Q 230 40 350 83" stroke="rgba(212,175,55,0.25)" strokeWidth="1" fill="none" strokeDasharray="4 4">
            <animate attributeName="strokeDashoffset" from="20" to="0" dur="3s" repeatCount="indefinite"/>
          </path>
          <path d="M 350 83 Q 460 50 546 97" stroke="rgba(212,175,55,0.25)" strokeWidth="1" fill="none" strokeDasharray="4 4">
            <animate attributeName="strokeDashoffset" from="20" to="0" dur="4s" repeatCount="indefinite"/>
          </path>
          <path d="M 546 97 Q 620 70 672 88" stroke="rgba(212,175,55,0.2)" strokeWidth="1" fill="none" strokeDasharray="4 4">
            <animate attributeName="strokeDashoffset" from="20" to="0" dur="2.5s" repeatCount="indefinite"/>
          </path>
          <path d="M 161 81 Q 180 140 210 149" stroke="rgba(212,175,55,0.15)" strokeWidth="1" fill="none" strokeDasharray="4 4">
            <animate attributeName="strokeDashoffset" from="20" to="0" dur="5s" repeatCount="indefinite"/>
          </path>
        </svg>

        {/* City dots */}
        {cities.map((city, i) => (
          <div key={city.name} style={{
            position: 'absolute',
            left: city.x,
            top: city.y,
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            opacity: mapVisible ? 1 : 0,
            transition: `opacity 0.8s ease ${city.delay + 0.5}s`
          }}>
            <div style={{
              width: '5px', height: '5px', borderRadius: '50%',
              background: '#D4AF37',
              boxShadow: '0 0 8px rgba(212,175,55,0.7)',
              animation: 'cityPulse 2.5s ease infinite',
              animationDelay: `${city.delay}s`
            }} />
            <span style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '8px',
              color: 'rgba(212,175,55,0.7)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap'
            }}>
              {city.name}
            </span>
          </div>
        ))}
      </div>

      {/* Quotes */}
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        {quotes.map((q, i) => <QuoteItem key={i} quote={q} index={i} />)}
      </div>

      <style>{`
        @keyframes cityPulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); box-shadow: 0 0 14px rgba(212,175,55,0.9); }
        }
      `}</style>
    </section>
  );
}
