import useInView from '../hooks/useInView';

const photos = [
  {
    url: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/cet7fzrm_A4002D96-DE90-4A1D-91C7-D180B3E66271_1_105_c.jpeg',
    year: '2009', age: 'Year One',
    caption: 'Day one. The very beginning.',
    sub: 'Everything was still ahead of you.'
  },
  {
    url: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/3m3orgak_251B6E11-C1F8-4B23-8141-3D138A2B27FB_1_105_c.jpeg',
    year: '2011', age: 'Age 2',
    caption: 'You discovered flowers. Fields. Wonder.',
    sub: 'The world was already calling to you.'
  },
  {
    url: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/29a2dgm8_FBE2F64F-C4F0-4F40-9FE6-69151323E4BE_1_105_c.jpeg',
    year: '2016', age: 'Age 7',
    caption: 'Your first real airport. Your first real adventure.',
    sub: 'You were already a born traveller.'
  },
  {
    url: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/149a5ckz_72BCCCE6-553C-4D94-ABB4-70B11369F418_1_105_c.jpeg',
    year: '2019', age: 'Age 10',
    caption: 'You explored places that felt almost unreal.',
    sub: 'And made them part of your story.'
  },
  {
    url: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/49dh4q9c_D778ABDE-4D74-4AEF-A5AB-C294B5E100CB_1_105_c.jpeg',
    year: '2021', age: 'Age 12',
    caption: 'Somewhere warm. Something opened in you.',
    sub: 'The world tasted good.'
  },
  {
    url: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/pmjv7cjw_98B29047-C7A4-4855-BA94-1957EFE70AB7_1_105_c.jpeg',
    year: '2023', age: 'Age 14',
    caption: 'New York. Times Square.',
    sub: 'The world got bigger. And so did you.'
  },
  {
    url: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/l8y4ougn_BB2886AA-F00F-488F-A720-C43DBEDA3FF7_1_105_c.jpeg',
    year: '2024', age: 'Age 15',
    caption: 'The small, beautiful moments between the big ones.',
    sub: 'These are the ones you remember most.',
    rotate: '180deg'
  },
  {
    url: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/dr4siwmm_CD5F61D1-EE23-408A-A024-2D0690ECAD08_1_105_c.jpeg',
    year: '2024', age: 'Age 15',
    caption: 'Growing. Still becoming.',
    sub: 'Already something beautiful.'
  },
  {
    url: 'https://customer-assets.emergentagent.com/job_sixteen-world/artifacts/8u0xjvq4_42747C17-6FF7-419D-BA57-57DCE467C6DC_1_102_o.jpeg',
    year: '2025', age: 'Right Now',
    caption: 'On the edge of everything.',
    sub: 'The journey is just beginning.'
  },
];

function PhotoItem({ photo, index }) {
  const [ref, inView] = useInView(0.15);
  const isRight = index % 2 === 1;

  return (
    <div
      ref={ref}
      data-testid={`timeline-photo-${index + 1}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isRight ? 'flex-end' : 'flex-start',
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 1s ease, transform 1s ease',
        padding: '0 0 80px 0',
        position: 'relative'
      }}
    >
      {/* Year tag */}
      <p style={{
        fontFamily: 'Space Mono, monospace',
        fontSize: '10px',
        letterSpacing: '0.25em',
        color: '#D4AF37',
        textTransform: 'uppercase',
        marginBottom: '16px',
        textAlign: isRight ? 'right' : 'left'
      }}>
        {photo.year} · {photo.age}
      </p>

      {/* Photo frame */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '520px',
        aspectRatio: '4/5',
        overflow: 'hidden'
      }}>
        <img
          src={photo.url}
          alt={photo.caption}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
            filter: 'contrast(1.08) brightness(0.87) saturate(0.82) sepia(0.06)',
            transform: photo.rotate ? `rotate(${photo.rotate})` : 'none',
            transition: 'transform 0.6s ease',
            display: 'block'
          }}
          onMouseEnter={e => {
            if (!photo.rotate) e.target.style.transform = 'scale(1.03)';
          }}
          onMouseLeave={e => {
            e.target.style.transform = photo.rotate ? `rotate(${photo.rotate})` : 'none';
          }}
        />
        {/* Vignette overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,10,0.55) 100%)'
        }} />
        {/* Film grain SVG overlay */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '180px',
          opacity: 0.04,
          mixBlendMode: 'overlay'
        }} />
      </div>

      {/* Caption */}
      <div style={{ marginTop: '20px', maxWidth: '520px', textAlign: isRight ? 'right' : 'left' }}>
        <p style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(1.1rem, 3vw, 1.45rem)',
          color: '#FDFBF7',
          fontStyle: 'italic',
          fontWeight: 400,
          margin: '0 0 6px 0',
          lineHeight: 1.3
        }}>
          {photo.caption}
        </p>
        {photo.sub && (
          <p style={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '13px',
            color: '#71717A',
            margin: 0,
            letterSpacing: '0.03em'
          }}>
            {photo.sub}
          </p>
        )}
      </div>
    </div>
  );
}

export default function JourneySection() {
  const [headerRef, headerVisible] = useInView(0.3);

  return (
    <section
      data-testid="photo-timeline"
      id="journey"
      style={{
        background: '#0a0a0a',
        padding: 'clamp(80px, 12vw, 140px) 24px',
        position: 'relative'
      }}
    >
      {/* Thin gold divider */}
      <div style={{ width: '1px', height: '80px', background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.4))', margin: '0 auto 60px' }} />

      {/* Section header */}
      <div
        ref={headerRef}
        style={{
          textAlign: 'center',
          marginBottom: '80px',
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'opacity 1s ease, transform 1s ease'
        }}
      >
        <p style={{
          fontFamily: 'Space Mono, monospace', fontSize: '10px',
          letterSpacing: '0.3em', color: '#D4AF37', textTransform: 'uppercase', marginBottom: '16px'
        }}>
          Your Story
        </p>
        <h2 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 'clamp(2.2rem, 7vw, 4rem)',
          color: '#FDFBF7', fontWeight: 400,
          letterSpacing: '-0.02em', margin: 0, lineHeight: 1.1
        }}>
          Sixteen Years
        </h2>
        <p style={{
          fontFamily: 'Outfit, sans-serif', fontSize: '15px',
          color: '#71717A', marginTop: '16px', maxWidth: '400px',
          margin: '16px auto 0', lineHeight: 1.7
        }}>
          A life already full of beauty, wonder, and becoming.
        </p>
      </div>

      {/* Timeline */}
      <div style={{ maxWidth: '600px', margin: '0 auto', position: 'relative' }}>
        {/* Vertical line */}
        <div style={{
          position: 'absolute', left: '50%', top: 0, bottom: 0,
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, rgba(212,175,55,0.2) 10%, rgba(212,175,55,0.2) 90%, transparent)',
          transform: 'translateX(-50%)',
          display: 'none'
        }} />

        {photos.map((photo, i) => (
          <PhotoItem key={i} photo={photo} index={i} />
        ))}
      </div>

      {/* Bottom divider */}
      <div style={{ width: '1px', height: '80px', background: 'linear-gradient(to bottom, rgba(212,175,55,0.4), transparent)', margin: '0 auto' }} />
    </section>
  );
}
