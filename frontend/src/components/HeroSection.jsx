import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HERO } from '../lib/content';

const CITY_NODES = [
  { name: 'New York', x: 265, y: 188, color: '#FF2D95' },
  { name: 'London', x: 487, y: 155, color: '#7B61FF' },
  { name: 'Paris', x: 498, y: 173, color: '#FF2D95' },
  { name: 'Barcelona', x: 480, y: 192, color: '#2D9CFF' },
  { name: 'Istanbul', x: 578, y: 183, color: '#00E5FF' },
  { name: 'Tel Aviv', x: 590, y: 198, color: '#00E5FF' },
];

const ROUTES = [
  { d: 'M 265,188 Q 370,100 487,155', color: '#FF2D95', delay: 0 },
  { d: 'M 487,155 L 498,173', color: '#7B61FF', delay: 1 },
  { d: 'M 498,173 L 480,192', color: '#2D9CFF', delay: 1.3 },
  { d: 'M 498,173 Q 538,162 578,183', color: '#00E5FF', delay: 1.6 },
  { d: 'M 578,183 L 590,198', color: '#00E5FF', delay: 2.2 },
];

function WorldMap() {
  return (
    <svg
      viewBox="0 0 1000 380"
      style={{ width: '100%', maxWidth: '900px', opacity: 0.85 }}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <pattern id="dotGrid" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="0.8" fill="rgba(45,156,255,0.18)" />
        </pattern>
        <filter id="neonGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
      </defs>

      {/* Dot grid background */}
      <rect width="1000" height="380" fill="url(#dotGrid)" />

      {/* Subtle horizontal latitude lines */}
      {[95, 190, 285].map(y => (
        <line key={y} x1="0" y1={y} x2="1000" y2={y}
          stroke="rgba(45,156,255,0.06)" strokeWidth="1" />
      ))}
      {/* Vertical longitude lines */}
      {[167, 334, 500, 667, 833].map(x => (
        <line key={x} x1={x} y1="0" x2={x} y2="380"
          stroke="rgba(45,156,255,0.06)" strokeWidth="1" />
      ))}

      {/* Animated route lines */}
      {ROUTES.map((route, i) => (
        <motion.path
          key={i}
          d={route.d}
          stroke={route.color}
          strokeWidth="1.4"
          fill="none"
          strokeDasharray="7 5"
          filter="url(#neonGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 2.5, delay: route.delay + 1.5, ease: 'easeInOut' }}
        />
      ))}

      {/* City nodes */}
      {CITY_NODES.map((city, i) => (
        <motion.g key={city.name} filter="url(#neonGlow)">
          {/* Pulse ring */}
          <motion.circle cx={city.x} cy={city.y} r={12} fill="none"
            stroke={city.color} strokeWidth="0.8"
            animate={{ r: [12, 22, 12], opacity: [0.35, 0, 0.35] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 + 2 }}
          />
          {/* Core dot */}
          <motion.circle cx={city.x} cy={city.y} fill={city.color}
            initial={{ r: 0, opacity: 0 }}
            animate={{ r: 4, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.3 + 2.5 }}
          />
          {/* Label */}
          <motion.text
            x={city.x} y={city.y + 18} fill="rgba(255,255,255,0.75)"
            fontSize="9" textAnchor="middle"
            fontFamily="Space Mono, monospace" letterSpacing="1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.75 }}
            transition={{ duration: 0.5, delay: i * 0.3 + 3 }}
          >
            {city.name.toUpperCase()}
          </motion.text>
        </motion.g>
      ))}
    </svg>
  );
}

export default function HeroSection() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 6 + Math.random() * 8,
      delay: Math.random() * 6,
      size: 1 + Math.random() * 2
    })));
  }, []);

  const stagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] } }
  };

  return (
    <section
      data-testid="hero-section"
      id="hero"
      style={{
        minHeight: '100vh', background: '#0B0B0F',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
        padding: '80px 24px 40px'
      }}
    >
      {/* Gradient bg glows */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(255,45,149,0.07) 0%, transparent 70%)'
      }} />
      <div style={{
        position: 'absolute', top: 0, right: '10%', width: '40%', height: '40%',
        background: 'radial-gradient(ellipse at center, rgba(45,156,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Floating particles */}
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute', bottom: '-10px', left: `${p.left}%`,
          width: `${p.size}px`, height: `${p.size}px`, borderRadius: '50%',
          background: p.id % 2 === 0 ? 'rgba(255,45,149,0.7)' : 'rgba(45,156,255,0.7)',
          animation: `particleFloat ${p.duration}s ${p.delay}s infinite ease-in-out`,
          pointerEvents: 'none'
        }} />
      ))}

      {/* Ghost "16" */}
      <div style={{
        position: 'absolute', fontFamily: 'Playfair Display, serif',
        fontSize: 'clamp(180px, 35vw, 400px)', fontWeight: 700,
        color: 'rgba(255,45,149,0.03)', lineHeight: 1,
        userSelect: 'none', pointerEvents: 'none',
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)', letterSpacing: '-0.05em'
      }}>16</div>

      {/* Text content */}
      <motion.div
        variants={stagger} initial="hidden" animate="show"
        style={{ textAlign: 'center', zIndex: 1, maxWidth: '700px', marginBottom: '48px' }}
      >
        <motion.p variants={item} className="overline" style={{ color: 'var(--pink)', marginBottom: '24px', display: 'block' }}>
          {HERO.overline}
        </motion.p>

        <motion.h1 variants={item} style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(5rem, 20vw, 11rem)',
          fontWeight: 400, color: '#FFFFFF',
          lineHeight: 0.9, letterSpacing: '-0.03em',
          margin: '0 0 20px 0'
        }}>
          {HERO.name}
        </motion.h1>

        <motion.p variants={item} style={{
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          fontSize: 'clamp(1rem, 3.5vw, 1.6rem)', color: 'rgba(255,45,149,0.85)',
          letterSpacing: '0.1em', marginBottom: '32px'
        }}>
          {HERO.age}
        </motion.p>

        <motion.p variants={item} style={{
          fontFamily: 'Inter, sans-serif', fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
          color: 'rgba(255,255,255,0.55)', lineHeight: 1.8,
          maxWidth: '440px', margin: '0 auto 48px', fontWeight: 300
        }}>
          {HERO.tagline}<br />{HERO.tagline2}
        </motion.p>

        <motion.div variants={item}>
          <button
            data-testid="begin-journey-btn"
            className="btn-neon"
            onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {HERO.cta}
          </button>
        </motion.div>
      </motion.div>

      {/* World Map */}
      <motion.div
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 2 }}
        style={{ width: '100%', maxWidth: '900px', zIndex: 1 }}
      >
        <WorldMap />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 0.4 }}
        transition={{ delay: 4 }}
        style={{
          position: 'absolute', bottom: '32px', left: '50%',
          transform: 'translateX(-50%)', display: 'flex',
          flexDirection: 'column', alignItems: 'center', gap: '6px'
        }}
      >
        <div style={{ width: '1px', height: '36px', background: 'linear-gradient(to bottom, transparent, rgba(255,45,149,0.6))' }} />
      </motion.div>
    </section>
  );
}
