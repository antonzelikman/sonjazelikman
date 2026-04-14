import { motion } from 'framer-motion';

const TAB_CONFIG = [
  { id: 'you', label: 'YOU', shortLabel: 'YOU' },
  { id: 'gift', label: 'YOUR GIFT', shortLabel: 'GIFT' },
  { id: 'things', label: 'THINGS YOU NEED', shortLabel: 'THINGS' },
  { id: 'adventures', label: 'ADVENTURES', shortLabel: 'GO' }
];

export default function NavHeader({ activeTab, onTabChange }) {
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
        onClick={() => onTabChange('you')}
        data-testid="site-logo"
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
            <span className="desktop-label"
              style={{ display: 'none' }}
            >
              {tab.label}
            </span>
            <span className="mobile-label">
              {window.innerWidth < 480 ? tab.shortLabel : tab.label}
            </span>
          </button>
        ))}
      </nav>

      <style>{`
        @media (min-width: 540px) {
          .mobile-label { display: none !important; }
          .desktop-label { display: inline !important; }
        }
        .mobile-label { display: inline; }
        .desktop-label { display: none; }
      `}</style>
    </motion.header>
  );
}
