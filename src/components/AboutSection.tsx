import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Server, Database, Brain, Shield, Terminal, Bot, Search } from 'lucide-react';

const services = [
  { icon: Code, title: 'FULLSTACK_DEV', desc: 'MERN stack (MongoDB, Express, React, Node.js) — building clean, responsive web apps end to end.' },
  { icon: Server, title: 'BACKEND_ENG', desc: 'Django, FastAPI, Express — robust REST APIs, server architectures & scalable systems.' },
  { icon: Database, title: 'DATABASE_OPS', desc: 'MongoDB, PostgreSQL, MySQL — designing efficient schemas, queries & data pipelines.' },
  { icon: Bot, title: 'AI_EXPLORER', desc: 'LLM-powered apps, AI agents & intelligent backends — building the future of software.' },
];

const highlights = [
  { icon: '🎯', text: 'Currently seeking opportunities as a Software Engineer / Backend Developer' },
  { icon: '⚡', text: 'Skilled in MERN stack development (MongoDB, Express, React, Node.js)' },
  { icon: '🔧', text: 'Backend development using Python frameworks like Django and FastAPI' },
  { icon: '🔐', text: 'Experienced with authentication systems using JWT, bcrypt, and session-based security' },
  { icon: '📊', text: 'Built Machine Learning projects using NumPy, Pandas, Matplotlib and scikit-learn' },
  { icon: '🤖', text: 'Exploring LLM-based applications, AI agents, and intelligent backend systems' },
  { icon: '🧠', text: 'Practicing Data Structures & Algorithms for problem-solving and coding interviews' },
  { icon: '🐧', text: 'Comfortable working with Linux systems and development tools' },
  { icon: '🚀', text: 'Quick learner, team-oriented, and always eager to explore deeper backend technologies' },
  { icon: '🍕', text: 'Fun fact: Debugging with pizza is still my superpower' },
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
          <div className="border border-primary/20 mb-12 neon-border-glow" style={{ backgroundColor: '#0a0a0a' }}>
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
              <p className="text-foreground leading-relaxed mb-4">
                Hello! I'm Minhaj, a third-year Computer Science student at Lovely Professional University
                (Class of 2027) and a passionate Full Stack & Backend Developer who enjoys building scalable
                and efficient applications.
              </p>
              <p className="text-foreground leading-relaxed mb-4">
                I specialize in developing clean, responsive web applications using the MERN stack, while also
                working extensively with backend frameworks like Django and FastAPI. I enjoy designing secure
                authentication systems, building REST APIs, and working with databases.
              </p>
              <p className="text-foreground leading-relaxed">
                Beyond web development, I actively explore Machine Learning and AI technologies. I have built
                ML-based projects and am currently learning about LLM-powered applications and AI agents to
                integrate intelligent features into modern software systems.
              </p>
              <p className="mt-4 text-primary">minhaj@portfolio:~$ <span className="animate-pulse">▌</span></p>
            </div>
          </div>

          {/* Highlights list */}
          <div className="border border-primary/15 mb-16 neon-border-glow" style={{ backgroundColor: '#0a0a0a' }}>
            <div className="flex items-center gap-2 px-4 py-2 border-b border-primary/10">
              <span className="font-code text-xs text-muted-foreground">minhaj@portfolio:~$ cat highlights.log</span>
            </div>
            <div className="p-6 space-y-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.3 }}
                  className="flex items-start gap-3 font-code text-sm"
                >
                  <span className="text-base flex-shrink-0">{item.icon}</span>
                  <span className="text-foreground/90">{item.text}</span>
                </motion.div>
              ))}
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
