import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Server, Database, Brain } from 'lucide-react';

const services = [
  { icon: Code, title: 'FRONTEND_DEV', desc: 'React, Next.js, TypeScript — pixel-perfect UIs with blazing performance.' },
  { icon: Server, title: 'BACKEND_ENG', desc: 'Node.js, Express, REST & GraphQL APIs — robust server architectures.' },
  { icon: Database, title: 'DATABASE_MGR', desc: 'MongoDB, PostgreSQL, Redis — optimized data layers & caching.' },
  { icon: Brain, title: 'ML_ENGINEER', desc: 'Python, TensorFlow, scikit-learn — intelligent data-driven solutions.' },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-2xl text-primary neon-glow mb-12">
            {'>'} ABOUT_ME.exe
          </h2>

          {/* Terminal card */}
          <div className="border border-primary/20 mb-16 neon-border-glow" style={{ backgroundColor: '#0a0a0a' }}>
            {/* Terminal header */}
            <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/10">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF006E' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FFB800' }} />
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#00FF41' }} />
              <span className="ml-4 font-code text-xs text-muted-foreground">bash — minhaj@portfolio:~</span>
            </div>
            <div className="p-6 font-code text-sm leading-relaxed text-soft-green">
              <p className="mb-3">
                <span className="text-primary">minhaj@portfolio:~$</span> cat about.txt
              </p>
              <p className="text-foreground leading-relaxed">
                I'm Minhajuddin Ahmad, a Computer Science Engineering student at Lovely Professional University (Class of 2027). 
                I'm a passionate Full Stack Developer who loves building end-to-end applications — from responsive frontends 
                to scalable backend systems. I thrive on solving complex problems, learning new technologies, and shipping 
                products that make a difference.
              </p>
              <p className="mt-3 text-primary">minhaj@portfolio:~$ <span className="animate-pulse">▌</span></p>
            </div>
          </div>

          {/* Service cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
                className="group border border-primary/15 p-6 hover:border-primary/60 transition-all duration-300 hover:scale-[1.03] neon-border-glow relative overflow-hidden card-scanline"
                style={{ backgroundColor: '#0a0a0a' }}
              >
                <div className="font-code text-[10px] text-muted-foreground mb-3">
                  ┌─[ {service.title} ]─────────────┐
                </div>
                <service.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-mono text-sm text-foreground mb-2 tracking-wider">{service.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{service.desc}</p>
                <div className="font-code text-[10px] text-muted-foreground mt-3">
                  └─────────────────────────────┘
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
