import { motion } from 'framer-motion';

const W = 960, H = 480;

const CONTINENT_PATHS = [
  {
    id: 'n-america',
    d: 'M 35 85 L 42 55 L 107 50 L 240 48 L 307 73 L 340 116 L 295 130 L 283 132 L 267 175 L 240 183 L 195 177 L 165 150 L 150 110 L 135 90 L 107 82 L 67 82 Z',
  },
  {
    id: 'europe',
    d: 'M 456 144 L 453 124 L 459 124 L 475 124 L 475 112 L 467 112 L 467 104 L 485 104 L 485 96 L 507 88 L 508 84 L 520 54 L 555 51 L 560 67 L 548 80 L 535 88 L 520 96 L 538 96 L 538 104 L 528 109 L 524 115 L 516 118 L 517 124 L 516 127 L 512 124 L 512 130 L 518 132 L 520 143 L 515 147 L 512 143 L 512 130 L 499 124 L 488 126 L 480 134 L 476 143 L 464 147 Z',
  },
  {
    id: 'italy',
    d: 'M 515 118 L 516 124 L 525 130 L 535 132 L 550 132 L 558 133 L 576 143 L 575 147 L 553 147 L 544 148 L 538 143 L 520 143 L 512 130 L 516 127 L 516 118 Z',
  },
  {
    id: 'uk',
    d: 'M 463 108 L 466 86 L 479 90 L 482 103 L 479 106 Z',
  },
  {
    id: 's-america',
    d: 'M 270 215 L 308 210 L 320 223 L 344 232 L 387 255 L 387 269 L 376 285 L 364 303 L 352 317 L 340 330 L 325 343 L 314 378 L 303 389 L 298 389 L 287 375 L 280 349 L 288 321 L 293 290 L 276 255 L 272 241 Z',
  },
  {
    id: 'africa',
    d: 'M 464 145 L 580 143 L 580 210 L 600 210 L 615 210 L 600 271 L 574 309 L 531 335 L 525 319 L 509 253 L 507 245 L 485 225 L 440 213 L 435 185 L 437 198 Z',
  },
  {
    id: 'asia',
    d: 'M 576 143 L 613 162 L 642 183 L 694 215 L 748 229 L 774 242 L 800 255 L 827 242 L 867 122 L 853 109 L 827 109 L 813 95 L 840 82 L 882 77 L 960 60 L 960 102 L 933 97 L 907 103 L 880 109 L 867 130 L 840 149 L 827 162 L 813 183 L 800 189 L 773 202 L 747 215 L 760 239 L 760 255 L 747 255 L 733 229 L 707 202 L 680 202 L 653 183 L 627 183 L 600 183 L 581 183 L 573 157 Z',
  },
  {
    id: 'australia',
    d: 'M 784 301 L 787 335 L 827 335 L 845 335 L 853 342 L 872 342 L 888 322 L 885 309 L 867 282 L 848 282 L 827 274 L 813 282 L 805 290 Z',
  },
];

// Equirectangular coords (960x480): x=(lon+180)/360*960, y=(90-lat)/180*480
const CITIES = [
  { name: 'Uppsala',      x: 527, y: 78,  lx: -6,  ly: -9,  anchor: 'end'    },
  { name: 'Stockholm',   x: 531, y: 83,  lx: 7,   ly: 4,   anchor: 'start'  },
  { name: 'Oslo',         x: 509, y: 78,  lx: -6,  ly: -9,  anchor: 'end'    },
  { name: 'Helsinki',    x: 547, y: 79,  lx: 6,   ly: -9,  anchor: 'start'  },
  { name: 'Amsterdam',   x: 493, y: 100, lx: -6,  ly: -8,  anchor: 'end'    },
  { name: 'London',      x: 480, y: 103, lx: -6,  ly: 5,   anchor: 'end'    },
  { name: 'Paris',        x: 486, y: 110, lx: -6,  ly: 5,   anchor: 'end'    },
  { name: 'Munich',       x: 511, y: 112, lx: 6,   ly: -7,  anchor: 'start'  },
  { name: 'Budapest',    x: 531, y: 114, lx: 6,   ly: -7,  anchor: 'start'  },
  { name: 'Grenoble',    x: 495, y: 120, lx: -6,  ly: 5,   anchor: 'end'    },
  { name: 'Croatia',     x: 524, y: 125, lx: 6,   ly: 6,   anchor: 'start'  },
  { name: 'Corsica',     x: 504, y: 128, lx: 6,   ly: -7,  anchor: 'start'  },
  { name: 'Barcelona',   x: 486, y: 131, lx: -6,  ly: -7,  anchor: 'end'    },
  { name: 'Mallorca',    x: 487, y: 136, lx: -6,  ly: 9,   anchor: 'end'    },
  { name: 'Rhodes',      x: 555, y: 143, lx: 6,   ly: -6,  anchor: 'start'  },
  { name: 'Crete',        x: 546, y: 148, lx: 0,   ly: 10,  anchor: 'middle' },
  { name: 'Tel Aviv',    x: 573, y: 156, lx: 6,   ly: 5,   anchor: 'start'  },
  { name: 'Haifa',        x: 574, y: 152, lx: 6,   ly: -6,  anchor: 'start'  },
  { name: 'New York',    x: 283, y: 131, lx: 0,   ly: -10, anchor: 'middle' },
  { name: 'Los Angeles', x: 165, y: 149, lx: 0,   ly: -10, anchor: 'middle' },
];

const PINK  = '#FF2D95';
const CYAN  = '#00E5FF';

export default function WorldExplorerSection() {
  return (
    <motion.section
      data-testid="world-explorer-section"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: 'relative',
        padding: 'clamp(60px, 10vw, 120px) 0',
        overflow: 'hidden',
      }}
    >
      {/* Ambient glows */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: '20%', left: '10%',
        width: '400px', height: '400px',
        background: 'radial-gradient(ellipse, rgba(255,45,149,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: '20%', right: '10%',
        width: '350px', height: '350px',
        background: 'radial-gradient(ellipse, rgba(0,229,255,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: 'clamp(32px, 5vw, 56px)', padding: '0 24px' }}
      >
        <span style={{
          fontFamily: 'Space Mono, monospace', fontSize: '11px',
          letterSpacing: '0.28em', color: `${CYAN}bb`,
          textTransform: 'uppercase', display: 'block', marginBottom: '20px',
        }}>
          The Explorer
        </span>
        <h2 style={{
          fontFamily: 'Playfair Display, serif', fontWeight: 700,
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          color: '#fff', lineHeight: 1.15,
          textShadow: '0 0 40px rgba(255,255,255,0.08)',
        }}>
          Twenty cities.<br />
          <em style={{ color: PINK, fontStyle: 'italic',
            textShadow: '0 0 30px rgba(255,45,149,0.5)' }}>
            One story.
          </em>
        </h2>
      </motion.div>

      {/* World map SVG */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={{
          width: '100%', maxWidth: '1100px',
          margin: '0 auto', padding: '0 12px',
          position: 'relative',
        }}
      >
        {/* Neon frame glow */}
        <div style={{
          position: 'absolute', inset: 0,
          boxShadow: 'inset 0 0 60px rgba(255,45,149,0.03)',
          pointerEvents: 'none', zIndex: 1,
        }} />

        <svg
          viewBox={`0 0 ${W} ${H}`}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Graticule lines */}
          {[-60, -30, 0, 30, 60].map(lat => {
            const y = (90 - lat) / 180 * H;
            return <line key={`lat${lat}`} x1={0} y1={y} x2={W} y2={y}
              stroke="rgba(255,255,255,0.04)" strokeWidth="0.6" />;
          })}
          {[-120, -60, 0, 60, 120].map(lon => {
            const x = (lon + 180) / 360 * W;
            return <line key={`lon${lon}`} x1={x} y1={0} x2={x} y2={H}
              stroke="rgba(255,255,255,0.04)" strokeWidth="0.6" />;
          })}
          {/* Equator highlight */}
          <line x1={0} y1={H / 2} x2={W} y2={H / 2}
            stroke="rgba(0,229,255,0.08)" strokeWidth="1" strokeDasharray="6 6" />

          {/* Continent fills */}
          {CONTINENT_PATHS.map(c => (
            <path key={c.id} d={c.d}
              fill="rgba(255,255,255,0.045)"
              stroke="rgba(0,229,255,0.15)"
              strokeWidth="0.8"
              strokeLinejoin="round"
            />
          ))}

          {/* City markers */}
          {CITIES.map((city, i) => (
            <g key={city.name}>
              {/* Outer pulse ring */}
              <motion.circle
                cx={city.x} cy={city.y} r={8}
                fill="none"
                stroke={PINK}
                strokeWidth="0.8"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: [0, 0.55, 0], scale: [0.5, 2.2, 2.2] }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.9 + i * 0.07,
                  duration: 1.6,
                  repeat: Infinity,
                  repeatDelay: 2.5 + (i % 4) * 0.3,
                  ease: 'easeOut',
                }}
              />
              {/* Core dot */}
              <motion.circle
                cx={city.x} cy={city.y} r={3.5}
                fill={PINK}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.07, type: 'spring', stiffness: 200, damping: 12 }}
                style={{ filter: `drop-shadow(0 0 5px ${PINK})` }}
              />
              {/* Label */}
              <motion.text
                x={city.x + city.lx}
                y={city.y + city.ly}
                textAnchor={city.anchor}
                fontSize="7.5"
                letterSpacing="0.5"
                fill="rgba(255,255,255,0.7)"
                fontFamily="Space Mono, monospace"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 + i * 0.07 }}
              >
                {city.name}
              </motion.text>
            </g>
          ))}
        </svg>
      </motion.div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.5 }}
        style={{
          display: 'flex', justifyContent: 'center',
          gap: 'clamp(28px, 8vw, 100px)',
          margin: 'clamp(36px, 6vw, 60px) auto 0',
          padding: '0 24px', maxWidth: '700px', flexWrap: 'wrap',
        }}
      >
        {[
          { num: '20', label: 'Cities' },
          { num: '3',  label: 'Continents' },
          { num: '15', label: 'Years old' },
        ].map(({ num, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.15 }}
            style={{ textAlign: 'center' }}
          >
            <div style={{
              fontFamily: 'Playfair Display, serif', fontWeight: 700,
              fontSize: 'clamp(2.5rem, 8vw, 4rem)',
              color: PINK,
              textShadow: `0 0 30px rgba(255,45,149,0.6)`,
              lineHeight: 1,
            }}>
              {num}
            </div>
            <div style={{
              fontFamily: 'Space Mono, monospace', fontSize: '10px',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)', marginTop: '10px',
            }}>
              {label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Explorer narrative */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
        style={{
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          fontSize: 'clamp(1rem, 3vw, 1.35rem)',
          color: 'rgba(255,255,255,0.4)',
          lineHeight: 1.9, textAlign: 'center',
          maxWidth: '660px',
          margin: 'clamp(28px, 5vw, 48px) auto 0',
          padding: '0 24px',
        }}
      >
        From the stillness of Uppsala to the electricity of New York.{' '}
        From the ancient light of Tel Aviv to the warmth of Los Angeles.
        <br /><br />
        <span style={{ color: 'rgba(255,255,255,0.6)' }}>
          You've been crossing borders since you were small.
          This isn't where the Explorer in you begins —
          it's where you finally start to see her.
        </span>
      </motion.p>

      {/* Bottom rule */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.5 }}
        style={{
          width: '100px', height: '1px',
          background: `linear-gradient(to right, transparent, ${CYAN}60, transparent)`,
          margin: 'clamp(40px, 7vw, 72px) auto 0',
        }}
      />
    </motion.section>
  );
}
