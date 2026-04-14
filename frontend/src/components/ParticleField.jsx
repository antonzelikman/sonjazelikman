import { useMemo } from 'react';

const COLORS = ['#FF2D95', '#00E5FF', '#7B61FF', '#FFFFFF', '#FFD700', '#FF6B35', '#2D9CFF'];

export default function ParticleField() {
  const sparkles = useMemo(() => Array.from({ length: 80 }, (_, i) => ({
    id: `s${i}`,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1.5 + Math.random() * 3.5,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    dur: `${2 + Math.random() * 4}s`,
    del: `${Math.random() * 6}s`
  })), []);

  const floaters = useMemo(() => Array.from({ length: 30 }, (_, i) => ({
    id: `f${i}`,
    x: Math.random() * 100,
    size: 2 + Math.random() * 3,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    dur: `${5 + Math.random() * 9}s`,
    del: `${Math.random() * 10}s`
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
            boxShadow: `0 0 ${p.size * 5}px ${p.color}, 0 0 ${p.size * 12}px ${p.color}60`,
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
            boxShadow: `0 0 ${p.size * 6}px ${p.color}, 0 0 ${p.size * 16}px ${p.color}55`,
            '--dur': p.dur, '--del': p.del
          }}
        />
      ))}
    </div>
  );
}
