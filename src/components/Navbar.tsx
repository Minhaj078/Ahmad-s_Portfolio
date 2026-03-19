import { useState, useEffect } from 'react';

const navLinks = ['About', 'Skills', 'Journey', 'Projects', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-primary/30 ${scrolled ? 'bg-background/95 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="font-mono text-primary text-lg tracking-widest neon-glow">
          MINHAJUDDIN.<span className="animate-pulse">_</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors terminal-link"
            >
              {link}
            </button>
          ))}
          <div className="flex items-center gap-2 font-mono text-xs text-primary">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            [ ONLINE ]
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
