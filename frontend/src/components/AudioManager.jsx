import { useRef, useEffect, useCallback } from 'react';
import { TRACKS } from '../lib/content';

const FADE_DURATION = 1500; // ms
const FADE_STEPS = 30;

export default function AudioManager({ activeTab, userInteracted }) {
  const aRef = useRef(null);
  const bRef = useRef(null);
  const primaryRef = useRef('a');
  const fadingRef = useRef(false);

  const getCurrent = useCallback(() =>
    primaryRef.current === 'a' ? aRef.current : bRef.current, []);

  const getNext = useCallback(() =>
    primaryRef.current === 'a' ? bRef.current : aRef.current, []);

  const crossfade = useCallback(async (url) => {
    if (fadingRef.current) return;
    fadingRef.current = true;
    const current = getCurrent();
    const next = getNext();
    if (!next || !url) { fadingRef.current = false; return; }
    next.src = url;
    next.volume = 0;
    next.loop = true;
    try { await next.play(); } catch { fadingRef.current = false; return; }
    const stepTime = FADE_DURATION / FADE_STEPS;
    let step = 0;
    const interval = setInterval(() => {
      step++;
      const vol = step / FADE_STEPS;
      if (next) next.volume = Math.min(1, vol);
      if (current) current.volume = Math.max(0, 1 - vol);
      if (step >= FADE_STEPS) {
        clearInterval(interval);
        if (current) { current.pause(); current.src = ''; current.volume = 1; }
        primaryRef.current = primaryRef.current === 'a' ? 'b' : 'a';
        fadingRef.current = false;
      }
    }, stepTime);
  }, [getCurrent, getNext]);

  useEffect(() => {
    if (!userInteracted) return;
    const url = TRACKS[activeTab];
    crossfade(url);
  }, [activeTab, userInteracted, crossfade]);

  return (
    <>
      <audio ref={aRef} loop preload="none" />
      <audio ref={bRef} loop preload="none" />
    </>
  );
}
