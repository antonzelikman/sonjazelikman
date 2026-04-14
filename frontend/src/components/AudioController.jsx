import { useState, useRef, useEffect } from 'react';
import { MUSIC_URL } from '../lib/content';

export default function AudioController() {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
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
        position: 'fixed', bottom: '80px', right: '20px', zIndex: 1000,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px'
      }}
    >
      <audio
        ref={audioRef}
        src={MUSIC_URL}
        loop
        preload="none"
        onCanPlay={() => setLoaded(true)}
      />
      <button
        data-testid="audio-toggle-btn"
        onClick={() => setPlaying(p => !p)}
        title={playing ? 'Pause' : 'Play music'}
        style={{
          width: '46px', height: '46px', borderRadius: '50%',
          background: 'rgba(11,11,15,0.9)',
          border: `1px solid ${playing ? 'rgba(255,45,149,0.6)' : 'rgba(255,255,255,0.15)'}`,
          color: playing ? 'var(--pink)' : 'rgba(255,255,255,0.5)',
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
          backdropFilter: 'blur(10px)',
          boxShadow: playing ? '0 0 20px rgba(255,45,149,0.3)' : 'none',
          transition: 'all 0.4s ease', padding: 0
        }}
      >
        <svg
          width="20" height="20" viewBox="0 0 22 22" fill="none"
          style={{ animation: playing ? 'spin 4s linear infinite' : 'none' }}
        >
          <circle cx="11" cy="11" r="9.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
          <circle cx="11" cy="11" r="5" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1" fill="none"/>
          <circle cx="11" cy="11" r="2" fill="currentColor"/>
          {!playing && <path d="M9.5 8.5L14.5 11L9.5 13.5V8.5Z" fill="currentColor"/>}
        </svg>
      </button>
      <span style={{
        fontFamily: 'Space Mono, monospace', fontSize: '7px',
        color: playing ? 'rgba(255,45,149,0.7)' : 'rgba(255,255,255,0.3)',
        letterSpacing: '0.15em', textTransform: 'uppercase'
      }}>
        {playing ? '♫' : 'MUSIC'}
      </span>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
