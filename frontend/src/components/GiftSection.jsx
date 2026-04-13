import useInView from '../hooks/useInView';

function BoardingPass() {
  const [ref, inView] = useInView(0.2);

  return (
    <div
      ref={ref}
      data-testid="boarding-pass-card"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
        transition: 'opacity 1.2s ease 0.2s, transform 1.2s ease 0.2s',
        maxWidth: '540px',
        margin: '0 auto',
        fontFamily: 'Space Mono, monospace'
      }}
    >
      <div style={{
        background: 'linear-gradient(135deg, #141414 0%, #1a1a1a 100%)',
        border: '1px solid rgba(212,175,55,0.45)',
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: '0 0 60px rgba(212,175,55,0.08), 0 20px 60px rgba(0,0,0,0.5)'
      }}>
        {/* Header */}
        <div style={{
          background: 'rgba(212,175,55,0.07)',
          padding: '20px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottom: '1px solid rgba(212,175,55,0.2)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                fill="#D4AF37"/>
            </svg>
            <div>
              <div style={{ fontSize: '13px', letterSpacing: '0.18em', color: '#D4AF37', fontWeight: 700 }}>
                ZELIKMAN AIRLINES
              </div>
              <div style={{ fontSize: '8px', letterSpacing: '0.15em', color: 'rgba(212,175,55,0.5)', marginTop: '2px' }}>
                ZL · PREMIUM EXPERIENCE
              </div>
            </div>
          </div>
          <div style={{
            fontSize: '10px', letterSpacing: '0.2em',
            color: 'rgba(253,251,247,0.5)', textAlign: 'right'
          }}>
            BOARDING<br />PASS
          </div>
        </div>

        {/* Main body */}
        <div style={{ padding: '28px 28px 0' }}>
          {/* Passenger */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontSize: '8px', letterSpacing: '0.2em', color: '#71717A', marginBottom: '6px' }}>
              PASSENGER NAME
            </div>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
              color: '#FDFBF7',
              fontWeight: 400,
              letterSpacing: '0.08em',
              lineHeight: 1
            }}>
              SONJA
            </div>
          </div>

          {/* Route row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '28px'
          }}>
            <div>
              <div style={{ fontSize: '7px', letterSpacing: '0.2em', color: '#71717A', marginBottom: '6px' }}>FROM</div>
              <div style={{ fontSize: 'clamp(12px, 3vw, 16px)', color: '#FDFBF7', letterSpacing: '0.12em' }}>CHILDHOOD</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '60px', height: '1px', background: 'linear-gradient(to right, rgba(212,175,55,0.3), rgba(212,175,55,0.7), rgba(212,175,55,0.3))' }} />
              <svg width="16" height="10" viewBox="0 0 24 16" fill="none">
                <path d="M21 8v-2l-8-4V0.5C13 0.22 12.78 0 12.5 0S12 0.22 12 0.5V2l-8 4v2l8-2.5V9l-2 1V11l3.5-1L17 11v-1l-2-1V5.5l8 2.5z"
                  fill="rgba(212,175,55,0.8)"/>
              </svg>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '7px', letterSpacing: '0.2em', color: '#71717A', marginBottom: '6px' }}>TO</div>
              <div style={{ fontSize: 'clamp(12px, 3vw, 16px)', color: '#D4AF37', letterSpacing: '0.12em' }}>EVERYTHING</div>
            </div>
          </div>

          {/* Flight details row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px',
            paddingBottom: '24px',
            borderBottom: '1px dashed rgba(212,175,55,0.25)'
          }}>
            {[
              { label: 'FLIGHT', value: 'ZL-16' },
              { label: 'CLASS', value: 'FIRST', gold: true },
              { label: 'GATE', value: 'OPEN' },
              { label: 'SEAT', value: 'WINDOW' },
            ].map(f => (
              <div key={f.label}>
                <div style={{ fontSize: '7px', letterSpacing: '0.15em', color: '#71717A', marginBottom: '5px' }}>
                  {f.label}
                </div>
                <div style={{
                  fontSize: 'clamp(9px, 2.5vw, 12px)', letterSpacing: '0.1em',
                  color: f.gold ? '#D4AF37' : '#FDFBF7', fontWeight: f.gold ? 700 : 400
                }}>
                  {f.value}
                </div>
              </div>
            ))}
          </div>

          {/* Destination */}
          <div style={{ padding: '18px 0 0' }}>
            <div style={{ fontSize: '7px', letterSpacing: '0.2em', color: '#71717A', marginBottom: '6px' }}>
              DESTINATION
            </div>
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontStyle: 'italic',
              fontSize: 'clamp(1rem, 3.5vw, 1.4rem)',
              color: '#D4AF37',
              letterSpacing: '0.08em'
            }}>
              Unknown — and that's the point.
            </div>
          </div>
        </div>

        {/* Perforation tear line */}
        <div style={{
          position: 'relative',
          margin: '24px 0 0',
          height: '1px',
          display: 'flex',
          alignItems: 'center'
        }}>
          <div style={{
            position: 'absolute', left: '-1px',
            width: '14px', height: '14px', borderRadius: '50%',
            background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.45)'
          }} />
          <div style={{
            flex: 1, marginLeft: '13px', marginRight: '13px',
            borderTop: '1px dashed rgba(212,175,55,0.3)'
          }} />
          <div style={{
            position: 'absolute', right: '-1px',
            width: '14px', height: '14px', borderRadius: '50%',
            background: '#0a0a0a', border: '1px solid rgba(212,175,55,0.45)'
          }} />
        </div>

        {/* Stub */}
        <div style={{
          padding: '16px 28px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          <span style={{ fontSize: '8px', color: 'rgba(212,175,55,0.6)', letterSpacing: '0.15em' }}>ZL-16</span>
          <span style={{ fontSize: '8px', color: '#FDFBF7', letterSpacing: '0.15em' }}>SONJA</span>
          <span style={{ fontSize: '8px', color: 'rgba(212,175,55,0.8)', letterSpacing: '0.15em' }}>FIRST CLASS</span>
          <span style={{ fontSize: '8px', color: '#71717A', letterSpacing: '0.1em' }}>DEST: UNKNOWN</span>
        </div>

        {/* Barcode decorative */}
        <div style={{ padding: '0 28px 20px', display: 'flex', gap: '2px', alignItems: 'flex-end', height: '32px' }}>
          {Array.from({ length: 45 }, (_, i) => (
            <div key={i} style={{
              flex: 1,
              height: `${8 + Math.sin(i * 1.3) * 10 + (i % 3 === 0 ? 8 : 0)}px`,
              background: `rgba(212,175,55,${0.15 + Math.random() * 0.25})`,
              minWidth: '2px'
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

function GiftText() {
  const [ref, inView] = useInView(0.25);
  return (
    <div
      ref={ref}
      style={{
        maxWidth: '580px',
        margin: '60px auto 0',
        textAlign: 'center',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 1s ease 0.3s, transform 1s ease 0.3s'
      }}
    >
      <div style={{
        border: '1px solid rgba(212,175,55,0.2)',
        padding: '40px 32px',
        position: 'relative'
      }}>
        {/* Corner accents */}
        {['topLeft', 'topRight', 'botLeft', 'botRight'].map(corner => {
          const isTop = corner.includes('top');
          const isLeft = corner.includes('Left');
          return (
            <div key={corner} style={{
              position: 'absolute',
              [isTop ? 'top' : 'bottom']: '-1px',
              [isLeft ? 'left' : 'right']: '-1px',
              width: '16px', height: '16px',
              borderTop: isTop ? '2px solid #D4AF37' : 'none',
              borderBottom: !isTop ? '2px solid #D4AF37' : 'none',
              borderLeft: isLeft ? '2px solid #D4AF37' : 'none',
              borderRight: !isLeft ? '2px solid #D4AF37' : 'none',
            }} />
          );
        })}

        <p style={{
          fontFamily: 'Space Mono, monospace',
          fontSize: '9px',
          letterSpacing: '0.25em',
          color: '#D4AF37',
          textTransform: 'uppercase',
          marginBottom: '24px'
        }}>
          This is real. This is now. This is yours.
        </p>

        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1rem, 3vw, 1.25rem)',
          color: '#FDFBF7',
          lineHeight: 1.8,
          fontStyle: 'italic',
          marginBottom: '20px'
        }}>
          "Happy Birthday Sonja – 16 years old
        </p>

        <p style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '14px',
          color: '#A1A1AA',
          lineHeight: 2,
          marginBottom: '28px',
          fontWeight: 300
        }}>
          This is your ticket.<br />
          Not to a place — but to everything that's waiting for you.<br /><br />
          For experiences.<br />
          For memories.<br />
          For moments that stay with you.<br /><br />
          <span style={{ color: '#FDFBF7', fontStyle: 'italic' }}>Not for things that fade.</span>
        </p>

        <div style={{ width: '40px', height: '1px', background: 'rgba(212,175,55,0.4)', margin: '0 auto 28px' }} />

        <p style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '14px',
          color: '#A1A1AA',
          lineHeight: 2,
          marginBottom: '28px',
          fontWeight: 300
        }}>
          No pressure. No deadlines.<br />
          Just possibilities.<br /><br />
          Use it when you're ready.
        </p>

        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
          color: '#D4AF37',
          fontStyle: 'italic'
        }}>
          Pappa &amp; Mamma ❤️"
        </p>
      </div>
    </div>
  );
}

function PhilosophyBlock() {
  const [ref, inView] = useInView(0.25);
  return (
    <div
      ref={ref}
      style={{
        maxWidth: '500px',
        margin: '64px auto 0',
        textAlign: 'center',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(30px)',
        transition: 'opacity 1s ease 0.2s, transform 1s ease 0.2s'
      }}
    >
      <p style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 'clamp(1.3rem, 4vw, 1.9rem)',
        color: '#FDFBF7',
        fontStyle: 'italic',
        lineHeight: 1.6,
        marginBottom: '20px'
      }}>
        "This is not for things that fade.<br />
        This is for the life you will live."
      </p>
      <p style={{
        fontFamily: 'Outfit, sans-serif',
        fontSize: '13px',
        color: '#71717A',
        lineHeight: 1.8,
        letterSpacing: '0.04em'
      }}>
        This is freedom. This is trust.<br />
        This is responsibility. This is a doorway into life.
      </p>
    </div>
  );
}

export default function GiftSection() {
  const [headerRef, headerVisible] = useInView(0.3);

  return (
    <section
      data-testid="gift-section"
      id="gift"
      style={{
        background: '#0a0a0a',
        padding: 'clamp(80px, 12vw, 140px) 24px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 40% at 50% 40%, rgba(212,175,55,0.07) 0%, transparent 70%)'
      }} />

      <div style={{ width: '1px', height: '80px', background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.4))', margin: '0 auto 60px' }} />

      <div
        ref={headerRef}
        style={{
          textAlign: 'center',
          marginBottom: '64px',
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s ease, transform 1s ease'
        }}
      >
        <p style={{
          fontFamily: 'Space Mono, monospace', fontSize: '10px',
          letterSpacing: '0.3em', color: '#D4AF37', textTransform: 'uppercase', marginBottom: '16px'
        }}>
          Your Gift
        </p>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2.2rem, 7vw, 4rem)',
          color: '#FDFBF7', fontWeight: 400,
          letterSpacing: '-0.02em', margin: '0 0 20px 0', lineHeight: 1.1
        }}>
          Moments, not things.
        </h2>
        <p style={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '15px',
          color: '#A1A1AA',
          maxWidth: '460px',
          margin: '0 auto',
          lineHeight: 1.8,
          fontWeight: 300
        }}>
          You have been given a real, dedicated travel &amp; experience account —
          funded and ready. This is yours.
        </p>
      </div>

      <BoardingPass />
      <GiftText />
      <PhilosophyBlock />

      <div style={{ width: '1px', height: '80px', background: 'linear-gradient(to bottom, rgba(212,175,55,0.4), transparent)', margin: '60px auto 0' }} />
    </section>
  );
}
