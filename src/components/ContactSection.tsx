import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send } from 'lucide-react';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="font-mono text-2xl text-primary neon-glow mb-12">
          {'>'} ESTABLISH_CONNECTION.sh
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Terminal form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="border border-primary/20 neon-border-glow" style={{ backgroundColor: '#0a0a0a' }}>
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/10">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF006E' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFB800' }} />
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00FF41' }} />
                <span className="ml-4 font-code text-xs text-muted-foreground">bash — contact@portfolio:~</span>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="font-code text-xs text-primary block mb-1">ENTER_NAME:</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                    className="w-full font-code text-sm px-3 py-2 border border-primary/20 bg-background text-primary focus:border-primary focus:outline-none transition-colors"
                    placeholder="> your_name"
                  />
                </div>
                <div>
                  <label className="font-code text-xs text-primary block mb-1">ENTER_EMAIL:</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                    className="w-full font-code text-sm px-3 py-2 border border-primary/20 bg-background text-primary focus:border-primary focus:outline-none transition-colors"
                    placeholder="> your@email.com"
                  />
                </div>
                <div>
                  <label className="font-code text-xs text-primary block mb-1">ENTER_MESSAGE:</label>
                  <textarea
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    required
                    rows={4}
                    className="w-full font-code text-sm px-3 py-2 border border-primary/20 bg-background text-primary focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="> type your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="font-mono text-sm px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all neon-border-glow flex items-center gap-2 hover:animate-pulse"
                >
                  <Send className="w-4 h-4" />
                  [ SEND_TRANSMISSION → ]
                </button>

                {submitted && (
                  <div className="font-code text-xs text-primary space-y-1 mt-4">
                    <p>{'>'} Transmission sent successfully... ✓</p>
                    <p>{'>'} Awaiting response from minhaj@portfolio...</p>
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Right side info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="font-code text-sm space-y-4 text-muted-foreground">
              <p className="text-primary">{'>'} CONTACT_PROTOCOLS:</p>
              <div className="space-y-2 pl-4">
                <p>📧 EMAIL: <span className="text-secondary">minhaj@example.com</span></p>
                <p>🔗 GITHUB: <span className="text-secondary">github.com/minhajuddin</span></p>
                <p>💼 LINKEDIN: <span className="text-secondary">linkedin.com/in/minhajuddin</span></p>
                <p>🐦 TWITTER: <span className="text-secondary">@minhajuddin</span></p>
              </div>
            </div>

            {/* Decorative green wireframe sphere (CSS) */}
            <div className="flex justify-center">
              <div className="relative w-40 h-40">
                {[0, 30, 60, 90, 120, 150].map(deg => (
                  <div
                    key={deg}
                    className="absolute inset-0 rounded-full border border-primary/20"
                    style={{
                      transform: `rotateY(${deg}deg)`,
                      animation: 'radar-sweep 10s linear infinite',
                    }}
                  />
                ))}
                <div className="absolute inset-0 rounded-full border border-primary/10"
                  style={{ animation: 'radar-sweep 8s linear infinite reverse' }}
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-primary/10 text-center">
          <p className="font-code text-xs text-muted-foreground">
            {'>'} DESIGNED & BUILT BY <span className="text-primary">MINHAJUDDIN AHMAD</span> © 2025
          </p>
          <p className="font-code text-[10px] text-muted-foreground/50 mt-1">
            [ SYSTEM_UPTIME: ∞ | VERSION: 2.0.0 | STATUS: OPERATIONAL ]
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
