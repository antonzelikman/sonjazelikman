import { useState } from 'react';
import './App.css';
import PasswordGate from './components/PasswordGate';
import HeroSection from './components/HeroSection';
import PersonalJourney from './components/PersonalJourney';
import CitiesSection from './components/CitiesSection';
import TravelPhilosophy from './components/TravelPhilosophy';
import GiftReveal from './components/GiftReveal';
import FinalMessage from './components/FinalMessage';
import AudioController from './components/AudioController';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  if (!authenticated) {
    return <PasswordGate onUnlock={() => setAuthenticated(true)} />;
  }

  return (
    <div style={{ background: '#0B0B0F', minHeight: '100vh', overflowX: 'hidden' }}>
      <HeroSection />
      <PersonalJourney />
      <CitiesSection />
      <TravelPhilosophy />
      <GiftReveal />
      <FinalMessage onReplay={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
      <AudioController />
    </div>
  );
}
