export default function NeonAirplane() {
  return (
    <div className="airplane-orbit-wrap" data-testid="neon-airplane" aria-hidden="true">
      {/* Multi-layer glow halo behind the plane */}
      <div className="plane-halo plane-halo-pink" />
      <div className="plane-halo plane-halo-violet" />
      <div className="plane-halo plane-halo-cyan" />

      {/* The actual plane image from reference */}
      <img
        src="/airplane.png"
        alt=""
        className="airplane-img"
        draggable="false"
      />

      {/* Engine exhaust trail particles */}
      <div className="exhaust-trail" aria-hidden="true">
        {Array.from({ length: 14 }, (_, i) => (
          <span
            key={i}
            className="exhaust-dot"
            style={{
              '--delay': `${i * 0.12}s`,
              '--size': `${Math.max(2, 7 - i * 0.4)}px`,
              '--hue': i % 3 === 0 ? '#FF2D95' : i % 3 === 1 ? '#7B61FF' : '#00E5FF',
              '--tx': `${-20 - i * 18}px`,
              '--ty': `${Math.sin(i * 0.9) * 14}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
