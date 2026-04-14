import { motion } from 'framer-motion';

export default function CityCard({ city, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="city-card-wrap"
      data-testid={`city-card-${city.id}`}
      style={{ position: 'relative', cursor: 'default' }}
    >
      <motion.div
        whileHover={{ y: -8, boxShadow: `0 0 40px ${city.accent}25, 0 20px 60px rgba(0,0,0,0.5)` }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '8px',
          border: `1px solid ${city.accent}30`,
          background: '#0f0f14',
          aspectRatio: '4/5',
          maxWidth: '100%'
        }}
      >
        {/* Photo */}
        <img
          src={city.image}
          alt={city.city}
          className="city-img"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%', objectFit: 'cover'
          }}
        />

        {/* Gradient overlay */}
        <div className="gradient-bottom" style={{ position: 'absolute', inset: 0, zIndex: 1 }} />

        {/* Neon top accent line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: `linear-gradient(to right, transparent, ${city.accent}80, transparent)`,
          zIndex: 2
        }} />

        {/* Corner glow */}
        <div style={{
          position: 'absolute', top: '-20px', right: '-20px',
          width: '100px', height: '100px', borderRadius: '50%',
          background: `radial-gradient(ellipse at center, ${city.accent}18 0%, transparent 70%)`,
          zIndex: 1
        }} />

        {/* Content */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '28px 24px', zIndex: 3
        }}>
          <p style={{
            fontFamily: 'Space Mono, monospace', fontSize: '9px',
            letterSpacing: '0.2em', color: city.accent,
            textTransform: 'uppercase', marginBottom: '8px', opacity: 0.9
          }}>
            {city.year}
          </p>
          <h3 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
            color: '#FFFFFF', fontWeight: 400,
            letterSpacing: '-0.01em', lineHeight: 1,
            marginBottom: '10px'
          }}>
            {city.city}
          </h3>
          <p style={{
            fontFamily: 'Inter, sans-serif', fontSize: '13px',
            color: 'rgba(255,255,255,0.65)', lineHeight: 1.6,
            fontWeight: 300, margin: 0
          }}>
            {city.text}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
