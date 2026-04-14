import { useMemo } from 'react';

const COLORS = ['#FF2D95', '#00E5FF', '#7B61FF', '#FFFFFF', '#FFD700', '#FF6B35', '#2D9CFF'];

export default function ParticleField() {
  const sparkles = useMemo(() => Array.from({ length: 55 }, (_, i) => ({
    id: `s${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 2.5,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    dur: `${2.5 + Math.random() * 4}s`,
    del: `${Math.random() * 5}s`
  })), []);

  const floaters = useMemo(() => Array.from({ length: 20 }, (_, i) => ({
    id: `f${i}`,
    x: Math.random() * 100,
    size: 1.5 + Math.random() * 2,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    dur: `${6 + Math.random() * 8}s`,
    del: `${Math.random() * 8}s`
  })), []);

  return (
    <div className="particle-field" aria-hidden="true">
      {sparkles.map(p => (
        <div
          key={p.id}
          className="sparkle"
          style={{
            left: `${p.x}%`, top: `${p.y}%`,
            width: `${p.size}px`, height: `${p.size}px`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            '--dur': p.dur, '--del': p.del
          }}
        />
      ))}
      {floaters.map(p => (
        <div
          key={p.id}
          className="float-particle"
          style={{
            left: `${p.x}%`, bottom: '-10px',
            width: `${p.size}px`, height: `${p.size}px`,
            borderRadius: '50%',
            background: p.color,
            boxShadow: `0 0 ${p.size * 4}px ${p.color}`,
            '--dur': p.dur, '--del': p.del
          }}
        />
      ))}
    </div>
  );
}
