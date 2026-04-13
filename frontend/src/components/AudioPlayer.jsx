import { useState, useRef, useEffect } from 'react';

// To use music: place your MP3 file at /app/frontend/public/music.mp3
// Recommended: "There Is A Light That Never Goes Out" by The Smiths (or "How Soon Is Now?")

export default function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  }, [playing]);

  return (
    <div
      data-testid="floating-audio-player"
      style={{
        position: 'fixed',
        bottom: '80px',
        right: '20px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px'
      }}
    >
      <audio ref={audioRef} src="/music.mp3" loop preload="none" />

      <button
        data-testid="audio-toggle-btn"
        onClick={() => setPlaying(p => !p)}
        title={playing ? 'Pause music' : 'Play music'}
        style={{
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: 'rgba(10,10,10,0.85)',
          border: '1px solid rgba(212,175,55,0.4)',
          color: '#D4AF37',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s ease',
          padding: 0
        }}
        onMouseEnter={e => e.currentTarget.style.borderColor = '#D4AF37'}
        onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'}
      >
        {/* Vinyl disc icon */}
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"
          style={{ animation: playing ? 'spin 3s linear infinite' : 'none' }}>
          <circle cx="11" cy="11" r="10" stroke="#D4AF37" strokeWidth="1.2" fill="none"/>
          <circle cx="11" cy="11" r="6" stroke="#D4AF37" strokeOpacity="0.4" strokeWidth="1" fill="none"/>
          <circle cx="11" cy="11" r="2.5" fill="#D4AF37"/>
          {!playing && (
            <path d="M9.5 8.5L14.5 11L9.5 13.5V8.5Z" fill="#D4AF37"/>
          )}
        </svg>
      </button>

      <span style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: '8px',
        color: 'rgba(212,175,55,0.6)',
        letterSpacing: '0.1em',
        textTransform: 'uppercase'
      }}>
        {playing ? 'ON' : 'MUSIC'}
      </span>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
