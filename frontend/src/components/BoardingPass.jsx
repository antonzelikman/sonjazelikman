import { motion } from 'framer-motion';
import { BOARDING_PASS } from '../lib/content';

export default function BoardingPass() {
  const fields = [
    { label: 'FLIGHT', value: BOARDING_PASS.flight },
    { label: 'CLASS', value: BOARDING_PASS.class, accent: true },
    { label: 'GATE', value: BOARDING_PASS.gate },
    { label: 'SEAT', value: BOARDING_PASS.seat },
  ];

  return (
    <motion.div
      data-testid="boarding-pass-card"
      initial={{ opacity: 0, y: 60, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        maxWidth: '560px', margin: '0 auto',
        fontFamily: 'Space Mono, monospace',
        perspective: '1000px'
      }}
    >
      <motion.div
        animate={{ boxShadow: ['0 0 30px rgba(255,45,149,0.1), 0 0 80px rgba(255,45,149,0.05)', '0 0 50px rgba(255,45,149,0.2), 0 0 100px rgba(255,45,149,0.08)', '0 0 30px rgba(255,45,149,0.1), 0 0 80px rgba(255,45,149,0.05)'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          background: 'linear-gradient(135deg, #141418 0%, #1a1a22 100%)',
          border: '1px solid rgba(255,45,149,0.3)',
          borderRadius: '8px', overflow: 'hidden'
        }}
      >
        {/* Header */}
        <div style={{
          background: 'rgba(255,45,149,0.06)',
          padding: '20px 28px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          borderBottom: '1px solid rgba(255,45,149,0.15)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="#FF2D95"/>
            </svg>
            <div>
              <div style={{ fontSize: '13px', letterSpacing: '0.18em', color: '#FF2D95', fontWeight: 700 }}>
                {BOARDING_PASS.airline}
              </div>
              <div style={{ fontSize: '7px', letterSpacing: '0.15em', color: 'rgba(255,45,149,0.4)', marginTop: '2px' }}>
                NEON FIRST CLASS EXPERIENCE
              </div>
            </div>
          </div>
          <div style={{ fontSize: '9px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.35)', textAlign: 'right' }}>
            BOARDING<br />PASS
          </div>
        </div>

        {/* Main */}
        <div style={{ padding: '28px 28px 0' }}>
          {/* Passenger */}
          <div style={{ marginBottom: '28px' }}>
            <div style={{ fontSize: '7px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '6px' }}>PASSENGER NAME</div>
            <div style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(2rem, 7vw, 3rem)',
              color: '#FFFFFF', fontWeight: 400, letterSpacing: '0.06em', lineHeight: 1
            }}>
              {BOARDING_PASS.passenger}
            </div>
          </div>

          {/* Route */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center', gap: '12px', marginBottom: '28px' }}>
            <div>
              <div style={{ fontSize: '7px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '5px' }}>FROM</div>
              <div style={{ fontSize: 'clamp(11px, 2.5vw, 14px)', color: '#FFFFFF', letterSpacing: '0.1em' }}>{BOARDING_PASS.from}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
              <div style={{ width: '50px', height: '1px', background: 'linear-gradient(to right, rgba(255,45,149,0.3), rgba(255,45,149,0.8), rgba(255,45,149,0.3))' }} />
              <svg width="14" height="10" viewBox="0 0 24 16" fill="none">
                <path d="M21 8v-2l-8-4V0.5C13 0.22 12.78 0 12.5 0S12 0.22 12 0.5V2l-8 4v2l8-2.5V9l-2 1V11l3.5-1L17 11v-1l-2-1V5.5l8 2.5z" fill="rgba(255,45,149,0.8)"/>
              </svg>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '7px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '5px' }}>TO</div>
              <div style={{ fontSize: 'clamp(11px, 2.5vw, 14px)', color: '#FF2D95', letterSpacing: '0.1em' }}>{BOARDING_PASS.to}</div>
            </div>
          </div>

          {/* Flight details */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '8px', paddingBottom: '20px',
            borderBottom: '1px dashed rgba(255,45,149,0.2)'
          }}>
            {fields.map(f => (
              <div key={f.label}>
                <div style={{ fontSize: '6px', letterSpacing: '0.15em', color: 'var(--muted)', marginBottom: '5px' }}>{f.label}</div>
                <div style={{ fontSize: 'clamp(9px, 2vw, 11px)', letterSpacing: '0.08em', color: f.accent ? '#FF2D95' : '#FFFFFF', fontWeight: f.accent ? 700 : 400 }}>
                  {f.value}
                </div>
              </div>
            ))}
          </div>

          {/* Amount */}
          <div style={{ padding: '16px 0 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingBottom: '20px', borderBottom: '1px dashed rgba(255,45,149,0.2)' }}>
            <div>
              <div style={{ fontSize: '7px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '5px' }}>ACCOUNT LOADED</div>
              <div style={{
                fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
                fontSize: 'clamp(1.2rem, 4vw, 1.8rem)', color: '#FF2D95',
                letterSpacing: '0.06em'
              }}>
                {BOARDING_PASS.amount}
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: '7px', letterSpacing: '0.2em', color: 'var(--muted)', marginBottom: '5px' }}>DESTINATION</div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>
                {BOARDING_PASS.destination}
              </div>
            </div>
          </div>
        </div>

        {/* Perforation */}
        <div style={{ position: 'relative', margin: '0', height: '1px', display: 'flex', alignItems: 'center' }}>
          <div style={{ position: 'absolute', left: '-1px', width: '14px', height: '14px', borderRadius: '50%', background: '#0B0B0F', border: '1px solid rgba(255,45,149,0.3)' }} />
          <div style={{ flex: 1, margin: '0 13px', borderTop: '1px dashed rgba(255,45,149,0.25)' }} />
          <div style={{ position: 'absolute', right: '-1px', width: '14px', height: '14px', borderRadius: '50%', background: '#0B0B0F', border: '1px solid rgba(255,45,149,0.3)' }} />
        </div>

        {/* Stub */}
        <div style={{ padding: '14px 28px 18px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{ fontSize: '7px', color: 'rgba(255,45,149,0.6)', letterSpacing: '0.15em' }}>{BOARDING_PASS.flight}</span>
          <span style={{ fontSize: '7px', color: '#FFFFFF', letterSpacing: '0.15em' }}>{BOARDING_PASS.passenger}</span>
          <span style={{ fontSize: '7px', color: 'rgba(255,45,149,0.8)', letterSpacing: '0.12em' }}>FIRST CLASS</span>
          <span style={{ fontSize: '7px', color: 'var(--muted)', letterSpacing: '0.1em' }}>{BOARDING_PASS.amount}</span>
        </div>

        {/* Decorative barcode */}
        <div style={{ padding: '0 28px 18px', display: 'flex', gap: '2px', alignItems: 'flex-end', height: '28px' }}>
          {Array.from({ length: 50 }, (_, i) => (
            <div key={i} style={{
              flex: 1, minWidth: '2px',
              height: `${6 + Math.sin(i * 1.5) * 8 + (i % 4 === 0 ? 6 : 0)}px`,
              background: `rgba(255,45,149,${0.12 + Math.abs(Math.sin(i * 0.7)) * 0.25})`
            }} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
