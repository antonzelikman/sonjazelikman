import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LS_KEY = 'sonja_adventures';

const ACCENT_COLORS = ['#FF2D95', '#00E5FF', '#7B61FF', '#FF6B35', '#FFD700', '#2D9CFF'];

function AdventureCard({ adv, index, onDelete }) {
  const accent = ACCENT_COLORS[index % ACCENT_COLORS.length];
  const isUpcoming = new Date(adv.date) >= new Date();

  return (
    <motion.div
      className="adventure-card"
      data-testid={`adventure-card-${index}`}
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, y: -20 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      layout
      whileHover={{ y: -5 }}
      style={{
        border: `1px solid ${accent}35`,
        boxShadow: `0 0 0 0 ${accent}`,
      }}
    >
      {/* Accent top bar */}
      <motion.div
        className="adventure-card-top"
        style={{ background: `linear-gradient(to right, ${accent}, transparent)` }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div style={{ padding: '24px 24px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
          <div style={{ flex: 1 }}>
            {/* Status badge */}
            <span style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px', letterSpacing: '0.18em',
              color: isUpcoming ? accent : 'rgba(255,255,255,0.3)',
              textTransform: 'uppercase',
              border: `1px solid ${isUpcoming ? `${accent}50` : 'rgba(255,255,255,0.12)'}`,
              padding: '3px 10px', borderRadius: '100px',
              display: 'inline-block', marginBottom: '12px'
            }}>
              {isUpcoming ? 'Upcoming' : 'Memory'}
            </span>

            {/* Title */}
            <h3 style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: 'clamp(1.1rem, 4vw, 1.5rem)',
              color: '#fff', fontWeight: 700,
              lineHeight: 1.2, marginBottom: '8px',
              textShadow: `0 0 30px ${accent}44`
            }}>
              {adv.title}
            </h3>

            {/* Date */}
            <p style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '13px', letterSpacing: '0.1em',
              color: `${accent}bb`, marginBottom: adv.notes ? '14px' : '0'
            }}>
              {new Date(adv.date + 'T12:00:00').toLocaleDateString('en-US', {
                weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
              })}
            </p>
          </div>

          <button
            data-testid={`delete-adventure-${index}`}
            onClick={() => onDelete(adv.id)}
            style={{
              background: 'none', border: `1px solid rgba(255,255,255,0.08)`,
              borderRadius: '50%', width: '32px', height: '32px',
              color: 'rgba(255,255,255,0.2)', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '16px', lineHeight: 1, transition: 'all 0.25s',
              flexShrink: 0, marginLeft: '16px'
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,45,149,0.5)'; e.currentTarget.style.color = 'rgba(255,45,149,0.8)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.2)'; }}
          >
            ×
          </button>
        </div>

        {adv.notes && (
          <p style={{
            fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
            fontSize: '16px', color: 'rgba(255,255,255,0.5)',
            lineHeight: 1.7, borderTop: `1px solid rgba(255,255,255,0.06)`,
            paddingTop: '14px', marginTop: '4px'
          }}>
            {adv.notes}
          </p>
        )}
      </div>
    </motion.div>
  );
}

function AddAdventureModal({ onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !date) return;
    onSave({ title: title.trim(), date, notes: notes.trim(), destination: destination.trim(), id: Date.now() });
    onClose();
  };

  return (
    <motion.div
      className="modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={e => e.target === e.currentTarget && onClose()}
      data-testid="add-adventure-modal"
    >
      <motion.div
        className="modal-card"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <p className="overline neon-violet" style={{ display: 'block', marginBottom: '24px' }}>
          New Adventure
        </p>
        <h2 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(1.4rem, 5vw, 2rem)',
          color: '#fff', marginBottom: '32px', lineHeight: 1.2
        }}>
          Where are you going?
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Adventure Title *
              </label>
              <input
                data-testid="adventure-title-input"
                className="modal-input"
                placeholder="e.g. Tokyo with my best friends"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                autoFocus
              />
            </div>

            <div>
              <label style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Date *
              </label>
              <input
                data-testid="adventure-date-input"
                className="modal-input"
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                required
                style={{ colorScheme: 'dark' }}
              />
            </div>

            <div>
              <label style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Destination (optional)
              </label>
              <input
                data-testid="adventure-destination-input"
                className="modal-input"
                placeholder="e.g. Tokyo, Japan"
                value={destination}
                onChange={e => setDestination(e.target.value)}
              />
            </div>

            <div>
              <label style={{ fontFamily: 'Space Mono, monospace', fontSize: '11px', letterSpacing: '0.18em', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                Notes / Dreams (optional)
              </label>
              <textarea
                data-testid="adventure-notes-input"
                className="modal-textarea"
                placeholder="What do you want to do there? How does it feel to imagine it?"
                value={notes}
                onChange={e => setNotes(e.target.value)}
                rows={3}
              />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', marginTop: '28px' }}>
            <button
              type="button"
              data-testid="cancel-adventure-btn"
              className="btn-neon"
              style={{ flex: 1 }}
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              data-testid="save-adventure-btn"
              className="btn-neon btn-neon-violet"
              style={{ flex: 1 }}
            >
              Save Adventure
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default function AdventuresTab() {
  const [adventures, setAdventures] = useState(() => {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch { return []; }
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(adventures));
  }, [adventures]);

  const saveAdventure = (adv) => {
    setAdventures(prev =>
      [...prev, adv].sort((a, b) => new Date(a.date) - new Date(b.date))
    );
  };

  const deleteAdventure = (id) => {
    setAdventures(prev => prev.filter(a => a.id !== id));
  };

  const upcoming = adventures.filter(a => new Date(a.date) >= new Date());
  const past = adventures.filter(a => new Date(a.date) < new Date());

  return (
    <div className="adventures-page" data-testid="adventures-tab">
      {/* Header */}
      <motion.div
        className="tab-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="overline neon-violet" style={{ display: 'block', textAlign: 'center', marginBottom: '20px' }}>
          Adventures
        </p>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.2rem, 9vw, 4.5rem)',
          fontWeight: 700, color: '#fff',
          textAlign: 'center', lineHeight: 1.05,
          textShadow: '0 0 60px rgba(123,97,255,0.25)',
          marginBottom: '16px'
        }}>
          Where Are You<br />
          <span className="neon-violet">Going Next?</span>
        </h1>
        <p style={{
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
          color: 'rgba(255,255,255,0.35)', textAlign: 'center',
          marginBottom: '48px'
        }}>
          Your future adventures live here. Dream them. Plan them. Go.
        </p>

        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <motion.button
            data-testid="add-adventure-btn"
            className="btn-neon btn-neon-violet btn-pulse"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowModal(true)}
          >
            + Plan an Adventure
          </motion.button>
        </div>
      </motion.div>

      {/* Content */}
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 24px' }}>
        {adventures.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              textAlign: 'center', padding: '80px 24px',
              border: '1px dashed rgba(123,97,255,0.2)', borderRadius: '12px'
            }}
          >
            <p style={{
              fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
              fontSize: '1.35rem', color: 'rgba(255,255,255,0.25)',
              lineHeight: 1.7, marginBottom: '32px'
            }}>
              The map is blank. That means everything<br />is still possible.
            </p>
            <button
              data-testid="add-first-adventure-btn"
              className="btn-neon btn-neon-violet"
              onClick={() => setShowModal(true)}
            >
              Add Your First Adventure
            </button>
          </motion.div>
        ) : (
          <>
            {upcoming.length > 0 && (
              <div style={{ marginBottom: '48px' }}>
                <p className="overline neon-violet" style={{ display: 'block', marginBottom: '24px' }}>
                  Upcoming — {upcoming.length}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <AnimatePresence mode="popLayout">
                    {upcoming.map((adv, i) => (
                      <AdventureCard key={adv.id} adv={adv} index={i} onDelete={deleteAdventure} />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}

            {past.length > 0 && (
              <div>
                <p className="overline" style={{ display: 'block', marginBottom: '24px', color: 'rgba(255,255,255,0.3)' }}>
                  Memories — {past.length}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', opacity: 0.7 }}>
                  <AnimatePresence mode="popLayout">
                    {past.map((adv, i) => (
                      <AdventureCard key={adv.id} adv={adv} index={i + upcoming.length} onDelete={deleteAdventure} />
                    ))}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div style={{ height: '80px' }} />

      {/* Modal */}
      <AnimatePresence>
        {showModal && <AddAdventureModal onClose={() => setShowModal(false)} onSave={saveAdventure} />}
      </AnimatePresence>
    </div>
  );
}
