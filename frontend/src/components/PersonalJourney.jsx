import { motion } from 'framer-motion';
import { PERSONAL_PHOTOS } from '../lib/content';

function PhotoItem({ photo, index }) {
  const isRight = index % 2 === 1;
  const accent = ['#FF2D95', '#2D9CFF', '#7B61FF', '#00E5FF', '#FF2D95', '#2D9CFF', '#7B61FF', '#00E5FF', '#FF2D95'][index];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      data-testid={`timeline-photo-${index + 1}`}
      style={{
        display: 'flex', flexDirection: 'column',
        alignItems: isRight ? 'flex-end' : 'flex-start',
        padding: '0 0 72px 0'
      }}
    >
      <p style={{
        fontFamily: 'Space Mono, monospace', fontSize: '9px',
        letterSpacing: '0.25em', color: accent,
        textTransform: 'uppercase', marginBottom: '14px',
        textAlign: isRight ? 'right' : 'left'
      }}>
        {photo.year} · {photo.age}
      </p>

      {/* Photo */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'relative', width: '100%', maxWidth: '500px',
          aspectRatio: '4/5', overflow: 'hidden',
          border: `1px solid ${accent}33`
        }}
      >
        <img
          src={photo.url}
          alt={photo.caption}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            objectPosition: 'center top',
            filter: 'brightness(0.8) contrast(1.1) saturate(0.85)',
            transform: photo.rotate ? `rotate(${photo.rotate})` : 'none',
            display: 'block', transition: 'transform 0.5s ease'
          }}
        />
        {/* Vignette */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(11,11,15,0.6) 100%)'
        }} />
        {/* Neon corner accent */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px',
          background: `linear-gradient(to right, ${accent}00, ${accent}80, ${accent}00)`
        }} />
      </motion.div>

      {/* Caption */}
      <div style={{ marginTop: '18px', maxWidth: '500px', textAlign: isRight ? 'right' : 'left' }}>
        <p style={{
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          fontSize: 'clamp(1.05rem, 3vw, 1.35rem)', color: '#FFFFFF',
          fontWeight: 400, margin: '0 0 6px', lineHeight: 1.35
        }}>
          {photo.caption}
        </p>
        {photo.sub && (
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'var(--muted)', margin: 0, letterSpacing: '0.04em' }}>
            {photo.sub}
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default function PersonalJourney() {
  return (
    <section
      data-testid="photo-timeline"
      id="journey"
      style={{ background: '#0B0B0F', padding: 'clamp(80px, 12vw, 130px) 24px' }}
    >
      <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, transparent, rgba(255,45,149,0.4))', margin: '0 auto 60px' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ textAlign: 'center', marginBottom: '72px' }}
      >
        <p className="overline" style={{ color: 'var(--pink)', marginBottom: '16px', display: 'block' }}>Your Story</p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.2rem, 7vw, 4rem)', fontWeight: 400,
          color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.1
        }}>
          Sixteen Years
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'var(--muted)', marginTop: '14px', maxWidth: '380px', margin: '14px auto 0', lineHeight: 1.7, fontWeight: 300 }}>
          A life already full of beauty, wonder, and becoming.
        </p>
      </motion.div>

      <div style={{ maxWidth: '580px', margin: '0 auto' }}>
        {PERSONAL_PHOTOS.map((photo, i) => (
          <PhotoItem key={i} photo={photo} index={i} />
        ))}
      </div>

      <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, rgba(255,45,149,0.4), transparent)', margin: '0 auto' }} />
    </section>
  );
}
