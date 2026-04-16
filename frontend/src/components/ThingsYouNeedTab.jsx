import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getSmartResponse, QUICK_SUGGESTIONS } from '../lib/content';

const LS_KEY = 'sonja_packing_list';

function PackItem({ item, onDelete, index }) {
  return (
    <motion.div
      className="pack-item"
      data-testid={`pack-item-${index}`}
      initial={{ opacity: 0, x: -30, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 30, scale: 0.9 }}
      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      layout
    >
      <div style={{ flex: 1 }}>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '17px', color: '#fff',
          fontWeight: 500, marginBottom: '5px'
        }}>
          {item.name}
        </p>
        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px', color: 'rgba(0,229,255,0.75)',
          lineHeight: 1.6, fontStyle: 'italic'
        }}>
          {item.response}
        </p>
      </div>
      <button
        data-testid={`delete-item-${index}`}
        onClick={() => onDelete(index)}
        style={{
          background: 'none', border: 'none',
          color: 'rgba(255,255,255,0.2)',
          cursor: 'pointer', padding: '4px 8px',
          fontSize: '18px', lineHeight: 1,
          transition: 'color 0.2s',
          flexShrink: 0, alignSelf: 'center'
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,45,149,0.8)'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.2)'}
      >
        ×
      </button>
    </motion.div>
  );
}

export default function ThingsYouNeedTab() {
  const [items, setItems] = useState(() => {
    try { return JSON.parse(localStorage.getItem(LS_KEY)) || []; } catch { return []; }
  });
  const [inputValue, setInputValue] = useState('');
  const [lastResponse, setLastResponse] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = (name = inputValue.trim()) => {
    if (!name) return;
    const response = getSmartResponse(name);
    const newItem = { name, response, id: Date.now() };

    setIsTyping(true);
    setTimeout(() => {
      setLastResponse(response);
      setIsTyping(false);
    }, 600);

    setItems(prev => [newItem, ...prev]);
    setInputValue('');
    inputRef.current?.focus();
  };

  const deleteItem = (index) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  const clearAll = () => {
    setItems([]);
    setLastResponse(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addItem();
  };

  return (
    <div className="things-page" data-testid="things-tab">
      {/* Header */}
      <motion.div
        className="tab-header"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="overline neon-cyan" style={{ display: 'block', textAlign: 'center', marginBottom: '20px' }}>
          Things You Need
        </p>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(2.2rem, 9vw, 4.5rem)',
          fontWeight: 700, color: '#fff',
          textAlign: 'center', lineHeight: 1.05,
          textShadow: '0 0 60px rgba(0,229,255,0.2)',
          marginBottom: '16px'
        }}>
          Pack Like a<br />
          <span className="neon-cyan">Born Traveller.</span>
        </h1>
        <p style={{
          fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: 'rgba(255,255,255,0.35)', textAlign: 'center',
          marginBottom: '56px'
        }}>
          Type something to pack. See what the universe says back.
        </p>
      </motion.div>

      {/* Input */}
      <motion.div
        className="things-input-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.7 }}
      >
        <div style={{ position: 'relative' }}>
          <input
            ref={inputRef}
            data-testid="packing-input"
            className="things-input"
            type="text"
            placeholder="What are you packing?"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <AnimatePresence>
            {inputValue && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="btn-neon btn-neon-cyan"
                data-testid="add-item-btn"
                style={{
                  position: 'absolute', right: 0, top: '50%',
                  transform: 'translateY(-50%)',
                  padding: '10px 24px', fontSize: '10px'
                }}
                onClick={() => addItem()}
              >
                Add +
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Response bubble */}
        <AnimatePresence mode="wait">
          {isTyping && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="ai-response-bubble"
            >
              <span className="typing-dot" />
              <span className="typing-dot" />
              <span className="typing-dot" />
            </motion.div>
          )}
          {!isTyping && lastResponse && (
            <motion.div
              key={lastResponse}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="ai-response-bubble"
              data-testid="ai-response"
            >
              {lastResponse}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Quick suggestions */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.7 }}
        style={{ maxWidth: '600px', margin: '0 auto 52px', padding: '0 24px' }}
      >
        <p style={{
          fontFamily: 'Space Mono, monospace', fontSize: '11px',
          letterSpacing: '0.22em', color: 'rgba(255,255,255,0.25)',
          marginBottom: '14px', textAlign: 'center', textTransform: 'uppercase'
        }}>
          Quick add
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center' }}>
          {QUICK_SUGGESTIONS.map(s => (
            <motion.button
              key={s}
              className="suggestion-chip"
              data-testid={`suggestion-${s.toLowerCase().replace(/ /g, '-')}`}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => addItem(s)}
            >
              {s}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* List */}
      <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 24px' }}>
        {items.length > 0 && (
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', marginBottom: '20px'
          }}>
            <p style={{
              fontFamily: 'Space Mono, monospace', fontSize: '12px',
              letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)',
              textTransform: 'uppercase'
            }}>
              {items.length} item{items.length !== 1 ? 's' : ''} packed
            </p>
            <button
              data-testid="clear-all-btn"
              onClick={clearAll}
              style={{
                background: 'none', border: 'none',
                color: 'rgba(255,45,149,0.4)',
                fontFamily: 'Space Mono, monospace', fontSize: '9px',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                cursor: 'pointer', transition: 'color 0.2s',
                padding: '4px 0'
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(255,45,149,0.9)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,45,149,0.4)'}
            >
              Clear all
            </button>
          </div>
        )}

        <AnimatePresence mode="popLayout">
          {items.map((item, i) => (
            <PackItem key={item.id} item={item} onDelete={deleteItem} index={i} />
          ))}
        </AnimatePresence>

        {items.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ textAlign: 'center', padding: '60px 0' }}
          >
            <p style={{
              fontFamily: 'Playfair Display, serif', fontStyle: 'italic',
              fontSize: '1.3rem', color: 'rgba(255,255,255,0.2)'
            }}>
              Your adventure kit is empty.<br />Start packing.
            </p>
          </motion.div>
        )}
      </div>

      <div style={{ height: '80px' }} />
    </div>
  );
}
