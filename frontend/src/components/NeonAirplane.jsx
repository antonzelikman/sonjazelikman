import { motion } from 'framer-motion';

export default function NeonAirplane() {
  return (
    <motion.div
      animate={{ y: [0, -16, 4, -10, 0], rotate: [0, 1.5, 0, -1, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      style={{ width: '100%', maxWidth: '860px', filter: 'drop-shadow(0 0 30px rgba(255,45,149,0.5))' }}
      data-testid="neon-airplane"
    >
      <svg viewBox="0 0 900 380" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible' }}>
        <defs>
          <filter id="gPink" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="10" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="gPinkHard" x="-80%" y="-80%" width="260%" height="260%">
            <feGaussianBlur stdDeviation="18" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="gCyan" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <filter id="gViolet" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="10" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="bodyFill" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#12062a"/><stop offset="50%" stopColor="#1a0d3e"/><stop offset="100%" stopColor="#0d0620"/>
          </linearGradient>
          <linearGradient id="wingFill" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF2D95" stopOpacity="0.22"/><stop offset="100%" stopColor="#7B61FF" stopOpacity="0.12"/>
          </linearGradient>
          <radialGradient id="cockpitGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff"/><stop offset="50%" stopColor="#00E5FF"/><stop offset="100%" stopColor="#00E5FF" stopOpacity="0"/>
          </radialGradient>
          <radialGradient id="engineGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF2D95" stopOpacity="0.85"/><stop offset="45%" stopColor="#FF2D95" stopOpacity="0.25"/><stop offset="100%" stopColor="#FF2D95" stopOpacity="0"/>
          </radialGradient>
        </defs>

        {/* Particle trail behind tail */}
        {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => (
          <motion.circle key={i}
            cx={165 - i * 22} cy={190 + Math.sin(i * 0.9) * 22}
            r={3.5 - i * 0.25}
            fill={i % 3 === 0 ? '#FF2D95' : i % 3 === 1 ? '#7B61FF' : '#00E5FF'}
            filter="url(#gPink)"
            animate={{ opacity: [0.9, 0, 0.9] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
          />
        ))}

        {/* Engine halos */}
        <motion.ellipse cx="345" cy="82" rx="50" ry="50" fill="url(#engineGlow)"
          animate={{ rx: [50, 62, 50], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
        <motion.ellipse cx="345" cy="298" rx="50" ry="50" fill="url(#engineGlow)"
          animate={{ rx: [50, 62, 50], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 0.4 }}
        />

        {/* Horizontal stabilizer */}
        <path d="M 215,180 L 95,153 L 95,227 L 215,202 Z"
          fill="rgba(123,97,255,0.12)" stroke="#7B61FF" strokeWidth="1.5" filter="url(#gViolet)" />

        {/* Vertical fin */}
        <path d="M 228,168 L 163,78 L 215,188 Z"
          fill="rgba(123,97,255,0.12)" stroke="#7B61FF" strokeWidth="1.5" filter="url(#gViolet)" />

        {/* UPPER WING */}
        <path d="M 415,148 L 218,38 L 274,92 L 428,155 Z"
          fill="url(#wingFill)" stroke="#FF2D95" strokeWidth="2" filter="url(#gPink)" />
        {/* Upper wing leading edge bright */}
        <path d="M 218,38 L 415,148" stroke="#FF2D95" strokeWidth="3" fill="none" filter="url(#gPinkHard)" opacity="0.9" />
        {/* Upper wing inner accent */}
        <path d="M 260,65 L 408,148" stroke="#00E5FF" strokeWidth="1" fill="none" opacity="0.5" />

        {/* LOWER WING */}
        <path d="M 415,232 L 218,342 L 274,288 L 428,225 Z"
          fill="url(#wingFill)" stroke="#FF2D95" strokeWidth="2" filter="url(#gPink)" />
        <path d="M 218,342 L 415,232" stroke="#FF2D95" strokeWidth="3" fill="none" filter="url(#gPinkHard)" opacity="0.9" />
        <path d="M 260,315 L 408,232" stroke="#00E5FF" strokeWidth="1" fill="none" opacity="0.5" />

        {/* MAIN FUSELAGE */}
        <path d="M 185,190 L 230,148 L 578,138 L 748,190 L 578,242 L 230,232 Z"
          fill="url(#bodyFill)" stroke="#FF2D95" strokeWidth="2.5" filter="url(#gPink)" />

        {/* Fuselage neon strips — animated dashes */}
        <path d="M 278,143 L 598,138" stroke="#FF2D95" strokeWidth="2" strokeDasharray="10 5" filter="url(#gPink)" opacity="0.9">
          <animate attributeName="strokeDashoffset" from="0" to="-30" dur="0.7s" repeatCount="indefinite"/>
        </path>
        <path d="M 278,237 L 598,242" stroke="#FF2D95" strokeWidth="2" strokeDasharray="10 5" filter="url(#gPink)" opacity="0.9">
          <animate attributeName="strokeDashoffset" from="0" to="-30" dur="0.7s" repeatCount="indefinite"/>
        </path>
        <path d="M 278,190 L 608,190" stroke="#00E5FF" strokeWidth="1" strokeDasharray="7 4" opacity="0.6">
          <animate attributeName="strokeDashoffset" from="0" to="22" dur="0.5s" repeatCount="indefinite"/>
        </path>

        {/* Window dots */}
        {[405, 455, 505, 555, 605, 655].map((x, i) => (
          <motion.circle key={i} cx={x} cy={190} r={4.5}
            fill="#00E5FF" filter="url(#gCyan)"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2 }}
          />
        ))}

        {/* Fuselage light panels */}
        <rect x="430" y="160" width="70" height="14" rx="3" fill="rgba(255,45,149,0.12)" stroke="#FF2D95" strokeWidth="0.8"/>
        <rect x="430" y="206" width="70" height="14" rx="3" fill="rgba(255,45,149,0.12)" stroke="#FF2D95" strokeWidth="0.8"/>
        <rect x="510" y="160" width="45" height="14" rx="3" fill="rgba(123,97,255,0.12)" stroke="#7B61FF" strokeWidth="0.8"/>
        <rect x="510" y="206" width="45" height="14" rx="3" fill="rgba(123,97,255,0.12)" stroke="#7B61FF" strokeWidth="0.8"/>

        {/* ENGINE PODS */}
        <circle cx="345" cy="82" r="26" fill="#120830" stroke="#FF2D95" strokeWidth="2.2" filter="url(#gPink)"/>
        <motion.circle cx="345" cy="82" r="16" fill="#FF2D95" filter="url(#gPinkHard)"
          animate={{ opacity: [0.7, 1, 0.7], r: [16, 18, 16] }}
          transition={{ duration: 1.3, repeat: Infinity }}
        />
        <circle cx="345" cy="298" r="26" fill="#120830" stroke="#FF2D95" strokeWidth="2.2" filter="url(#gPink)"/>
        <motion.circle cx="345" cy="298" r="16" fill="#FF2D95" filter="url(#gPinkHard)"
          animate={{ opacity: [0.7, 1, 0.7], r: [16, 18, 16] }}
          transition={{ duration: 1.3, repeat: Infinity, delay: 0.35 }}
        />

        {/* Festival light dots on wings */}
        {[0,1,2,3].map(i => (
          <motion.circle key={`wu${i}`} cx={250 + i * 45} cy={78 - i * 18} r={3.5}
            fill={i % 2 === 0 ? '#00E5FF' : '#FF2D95'} filter="url(#gCyan)"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.18 }}
          />
        ))}
        {[0,1,2,3].map(i => (
          <motion.circle key={`wl${i}`} cx={250 + i * 45} cy={302 + i * 18} r={3.5}
            fill={i % 2 === 0 ? '#7B61FF' : '#FF2D95'} filter="url(#gViolet)"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.18 + 0.45 }}
          />
        ))}

        {/* COCKPIT */}
        <ellipse cx="718" cy="190" rx="22" ry="18" fill="url(#cockpitGrad)" filter="url(#gPinkHard)"/>
        <ellipse cx="718" cy="190" rx="13" ry="10" fill="white" opacity="0.95"/>

        {/* Nose tip glow */}
        <motion.circle cx="748" cy="190" r="9" fill="white" filter="url(#gPinkHard)"
          animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 0.9, repeat: Infinity }}
        />

        {/* Top accent stripe */}
        <path d="M 310,143 L 430,140" stroke="#ffffff" strokeWidth="1.5" opacity="0.4"/>
        <path d="M 310,237 L 430,240" stroke="#ffffff" strokeWidth="1.5" opacity="0.4"/>
      </svg>
    </motion.div>
  );
}
