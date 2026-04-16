import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';
import PasswordGate from './components/PasswordGate';
import NavHeader from './components/NavHeader';
import ParticleField from './components/ParticleField';
import AudioManager from './components/AudioManager';
import YouTab from './components/YouTab';
import YourGiftTab from './components/YourGiftTab';
import ThingsYouNeedTab from './components/ThingsYouNeedTab';
import AdventuresTab from './components/AdventuresTab';

const TAB_PAGES = { you: YouTab, gift: YourGiftTab, things: ThingsYouNeedTab, adventures: AdventuresTab };

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('you');
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  const handleUnlock = () => {
    setAuthenticated(true);
    setAudioEnabled(true);
    setUserInteracted(true);
  };

  const handleGoToStart = () => {
    setAuthenticated(false);
    setActiveTab('you');
    setAudioEnabled(false);
    setUserInteracted(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (!userInteracted) setUserInteracted(true);
  };

  const toggleAudio = () => {
    setAudioEnabled(prev => !prev);
    if (!userInteracted) setUserInteracted(true);
  };

  if (!authenticated) {
    return <PasswordGate onUnlock={handleUnlock} />;
  }

  const ActivePage = TAB_PAGES[activeTab];

  return (
    <div style={{ background: '#080810', minHeight: '100vh', overflowX: 'hidden' }}>
      <ParticleField />
      <NavHeader activeTab={activeTab} onTabChange={handleTabChange} onGoToStart={handleGoToStart} />
      <AudioManager activeTab={activeTab} userInteracted={userInteracted && audioEnabled} />

      <button
        data-testid="audio-toggle"
        className={`audio-btn ${audioEnabled ? 'playing' : ''}`}
        onClick={toggleAudio}
        title={audioEnabled ? 'Mute music' : 'Play music'}
      >
        {audioEnabled ? (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
          </svg>
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/>
          </svg>
        )}
      </button>

      <main className="page-content">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <ActivePage onTabChange={handleTabChange} />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
