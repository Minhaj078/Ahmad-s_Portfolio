import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const roles = ['Full Stack Developer', 'Backend Engineer', 'AI Explorer', 'Problem Solver'];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [scrambleComplete, setScrambleComplete] = useState(false);
  const [scrambleText, setScrambleText] = useState('');

  const currentRole = roles[roleIndex];
  const displayRole = deleting
    ? currentRole.slice(0, charIndex)
    : currentRole.slice(0, charIndex);

  // Typewriter
  useEffect(() => {
    const speed = deleting ? 40 : 80;
    const timeout = setTimeout(() => {
      if (!deleting && charIndex < currentRole.length) {
        setCharIndex(c => c + 1);
      } else if (!deleting && charIndex === currentRole.length) {
        setTimeout(() => setDeleting(true), 2000);
      } else if (deleting && charIndex > 0) {
        setCharIndex(c => c - 1);
      } else {
        setDeleting(false);
        setRoleIndex(i => (i + 1) % roles.length);
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, currentRole]);

  // Scramble effect for name
  useEffect(() => {
    const name = 'Minhaj.';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%';
    let iteration = 0;
    const interval = setInterval(() => {
      setScrambleText(
        name.split('').map((char, i) => {
          if (i < iteration) return char;
          return chars[Math.floor(Math.random() * chars.length)];
        }).join('')
      );
      if (iteration >= name.length) {
        clearInterval(interval);
        setScrambleComplete(true);
      }
      iteration += 1 / 3;
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center relative pt-20">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-mono text-sm text-muted-foreground mb-2">{'>'} SYSTEM.identify()</p>
          <h1 className="text-4xl md:text-6xl font-mono mb-2">
            <span className="text-foreground glitch-text">Hi, I'm</span>
          </h1>
          <h1
            className="text-5xl md:text-7xl font-mono neon-glow glitch-rgb text-primary mb-6"
            data-text={scrambleComplete ? 'Minhaj.' : scrambleText}
          >
            {scrambleComplete ? 'Minhaj.' : scrambleText}
          </h1>

          <div className="font-code text-lg md:text-xl text-secondary mb-6">
            <span className="text-muted-foreground">[ </span>
            {displayRole}
            <span className="animate-pulse text-primary">▌</span>
            <span className="text-muted-foreground"> ]</span>
          </div>

          <p className="text-soft-green font-body text-lg mb-8 max-w-md leading-relaxed">
            Building scalable apps with MERN, Django & FastAPI.
            Exploring AI agents, LLMs, and intelligent backend systems.
          </p>

          {/* Terminal lines */}
          <div className="font-code text-sm space-y-1 text-primary/80">
            <div>$ status --available-for-hire <span className="text-primary">✓</span></div>
            <div>$ location --punjab-india <span className="text-primary">✓</span></div>
            <div>$ coffee --always-running <span className="text-primary">✓</span></div>
          </div>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-mono text-sm px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all neon-border-glow"
            >
              [ VIEW_PROJECTS ]
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="font-mono text-sm px-6 py-3 border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all"
            >
              [ CONTACT_ME ]
            </button>
            <a href="/Minhajuddin_CV.pdf" target="_blank" rel="noopener noreferrer">
              <button className="font-mono text-sm px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all neon-border-glow">
                [ VIEW_CV ]
              </button>
            </a>
          </div>
        </motion.div>

        {/* Right - Hex Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center relative"
        >
          {/* Radar background */}
          <div className="absolute w-80 h-80 rounded-full border border-primary/10">
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: 'conic-gradient(from 0deg, transparent 0deg, rgba(0,255,65,0.1) 30deg, transparent 60deg)',
                animation: 'radar-sweep 4s linear infinite',
              }}
            />
          </div>

          {/* Hex frame */}
          <div className="relative w-64 h-64 md:w-72 md:h-72">
            {/* SVG hex border */}
            <svg viewBox="0 0 200 230" className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 10px rgba(0,255,65,0.3))' }}>
              <polygon
                points="100,5 195,60 195,170 100,225 5,170 5,60"
                fill="none"
                stroke="#00FF41"
                strokeWidth="1.5"
                strokeDasharray="1000"
                style={{ animation: 'hex-trace 2s ease-out forwards' }}
              />
            </svg>

            {/* Photo placeholder */}
            <div className="absolute inset-4 hex-clip overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: '#0a0a0a' }}
            >
              <img
                src="/profile.png"
                alt="Minhajuddin Ahmad"
                className="w-full h-full object-cover"
              />

              {/* Scanline overlay on photo */}
              <div className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.03) 2px, rgba(0,255,65,0.03) 4px)',
                }}
              />
            </div>

            {/* Corner brackets */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary" />

            {/* HUD Labels */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 font-code text-[10px] text-primary/70 label-pulse whitespace-nowrap">
              {'< MINHAJUDDIN AHMAD />'}
            </div>
            <div className="absolute top-1/2 -right-36 -translate-y-1/2 font-code text-[10px] text-primary/70 label-pulse hidden lg:block">
              [ STATUS: AVAILABLE ]
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 font-code text-[10px] text-primary/70 label-pulse whitespace-nowrap">
              [ LPU · CSE · 2027 ]
            </div>
            <div className="absolute top-1/2 -left-32 -translate-y-1/2 font-code text-[10px] text-primary/70 label-pulse hidden lg:block">
              [ AI EXPLORER ]
            </div>

            {/* Crosshair lines */}
            <div className="absolute top-0 left-1/2 w-px h-3 bg-neon-magenta/50" />
            <div className="absolute bottom-0 left-1/2 w-px h-3 bg-neon-magenta/50" />
            <div className="absolute left-0 top-1/2 h-px w-3 bg-neon-magenta/50" />
            <div className="absolute right-0 top-1/2 h-px w-3 bg-neon-magenta/50" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
