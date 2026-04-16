import { motion } from 'framer-motion';

const TAB_CONFIG = [
  { id: 'you', label: 'YOU', shortLabel: 'YOU' },
  { id: 'gift', label: 'YOUR GIFT', shortLabel: 'GIFT' },
  { id: 'things', label: 'THINGS YOU NEED', shortLabel: 'THINGS' },
  { id: 'adventures', label: 'ADVENTURES', shortLabel: 'GO' }
];

export default function NavHeader({ activeTab, onTabChange, onGoToStart }) {
  return (
    <motion.header
      className="sonja-header"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div
        className="header-logo"
        style={{ cursor: 'pointer' }}
        onClick={onGoToStart}
        data-testid="site-logo"
        title="Back to the beginning"
      >
        SONJA's <span>ADVENTURES</span>
      </div>

      <nav className="nav-pills" data-testid="main-nav">
        {TAB_CONFIG.map(tab => (
          <button
            key={tab.id}
            data-testid={`nav-tab-${tab.id}`}
            className={`pill-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span aria-hidden="true" className="tab-label-mobile">{tab.shortLabel}</span>
            <span className="tab-label-desktop">{tab.label}</span>
          </button>
        ))}
      </nav>

      <button
        data-testid="go-to-start-btn"
        onClick={onGoToStart}
        title="Back to the beginning"
        style={{
          background: 'transparent',
          border: '1px solid rgba(255,45,149,0.35)',
          borderRadius: '50%',
          width: '38px',
          height: '38px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          color: 'rgba(255,45,149,0.7)',
          flexShrink: 0,
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = '#FF2D95';
          e.currentTarget.style.color = '#FF2D95';
          e.currentTarget.style.boxShadow = '0 0 18px rgba(255,45,149,0.5)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(255,45,149,0.35)';
          e.currentTarget.style.color = 'rgba(255,45,149,0.7)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {/* Airplane icon */}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
        </svg>
      </button>
    </motion.header>
  );
}
