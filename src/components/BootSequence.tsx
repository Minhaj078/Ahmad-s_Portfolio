import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const lines = [
  '> INITIALIZING PORTFOLIO.exe...',
  '> LOADING MODULES: [██████████] 100%',
  '> ESTABLISHING SECURE CONNECTION...',
  '> DECRYPTING ASSETS...',
  '> WELCOME, VISITOR.',
  '> Redirecting to minhaj.dev...',
];

const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setTimeout(onComplete, 600);
      return;
    }

    const line = lines[currentLine];
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const updated = [...prev];
          updated[currentLine] = line.slice(0, currentChar + 1);
          return updated;
        });
        setCurrentChar(c => c + 1);
      }, 20 + Math.random() * 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine(l => l + 1);
        setCurrentChar(0);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center"
        style={{ backgroundColor: '#000' }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-xl w-full px-8">
          <div className="font-code text-sm md:text-base space-y-1" style={{ color: '#00FF41' }}>
            {displayedLines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
            <span className="inline-block w-2 h-4 animate-pulse" style={{ backgroundColor: '#00FF41' }} />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default BootSequence;
