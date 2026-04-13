import { useState, useRef, useEffect } from 'react';
import './App.css';
import PasswordGate from './components/PasswordGate';
import HeroSection from './components/HeroSection';
import JourneySection from './components/JourneySection';
import WorldSection from './components/WorldSection';
import GiftSection from './components/GiftSection';
import ClosingSection from './components/ClosingSection';
import AudioPlayer from './components/AudioPlayer';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const journeyRef = useRef(null);

  const handleBegin = () => {
    if (journeyRef.current) {
      journeyRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (authenticated) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
  }, [authenticated]);

  if (!authenticated) {
    return <PasswordGate onUnlock={() => setAuthenticated(true)} />;
  }

  return (
    <div className="sonja-app">
      <HeroSection onBegin={handleBegin} />
      <div ref={journeyRef}>
        <JourneySection />
      </div>
      <WorldSection />
      <GiftSection />
      <ClosingSection onReplay={handleReplay} />
      <AudioPlayer />
    </div>
  );
}
