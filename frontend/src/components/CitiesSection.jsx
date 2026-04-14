import { motion } from 'framer-motion';
import { CITIES } from '../lib/content';
import CityCard from './CityCard';

export default function CitiesSection() {
  return (
    <section
      data-testid="cities-section"
      id="cities"
      style={{ background: '#0f0f14', padding: 'clamp(80px, 12vw, 130px) 24px' }}
    >
      <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, transparent, rgba(45,156,255,0.4))', margin: '0 auto 60px' }} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ textAlign: 'center', marginBottom: '72px' }}
      >
        <p className="overline" style={{ color: 'var(--blue)', marginBottom: '16px', display: 'block' }}>The World She's Explored</p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.2rem, 7vw, 4rem)', fontWeight: 400,
          color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.1
        }}>
          The places that changed you.
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'var(--muted)', marginTop: '14px', maxWidth: '400px', margin: '14px auto 0', lineHeight: 1.7, fontWeight: 300 }}>
          Every city you've visited has left something in you — and taken something with it.
        </p>
      </motion.div>

      {/* City grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
        gap: '24px',
        maxWidth: '960px',
        margin: '0 auto'
      }}>
        {CITIES.map((city, i) => (
          <CityCard key={city.id} city={city} index={i} />
        ))}
      </div>

      <div style={{ width: '1px', height: '60px', background: 'linear-gradient(to bottom, rgba(45,156,255,0.4), transparent)', margin: '60px auto 0' }} />
    </section>
  );
}
