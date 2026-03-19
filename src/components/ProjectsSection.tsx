import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'SmartFoodStall',
    category: 'LEGENDARY · FULL STACK + AI',
    desc: 'A full-stack smart food ordering platform with AI integration. Features intelligent recommendations, real-time ordering, and a complete admin dashboard.',
    stats: [
      { icon: '⚡', label: 'Stack', value: 'Django + ML' },
      { icon: '🛡️', label: 'Auth', value: 'Django Auth' },
      { icon: '⚙️', label: 'DB', value: 'PostgreSQL' },
    ],
    github: 'https://github.com/Minhaj078/SmartFoodStall',
    live: 'https://smartfoodstall.onrender.com/',
  },
  {
    title: 'Talksie',
    category: 'EPIC · REAL-TIME CHAT',
    desc: 'A real-time chat application with instant messaging, user authentication, and seamless communication experience.',
    stats: [
      { icon: '⚡', label: 'Stack', value: 'MERN' },
      { icon: '🛡️', label: 'Realtime', value: 'Socket.io' },
      { icon: '⚙️', label: 'DB', value: 'MongoDB' },
    ],
    github: 'https://github.com/Minhaj078/Talksie',
    live: 'https://talksie.onrender.com/',
  },
  {
    title: 'AttendXpress',
    category: 'RARE · FULL STACK',
    desc: 'A comprehensive attendance management system handling makeup classes, proxy detection, and automated reporting.',
    stats: [
      { icon: '⚡', label: 'Stack', value: 'Django + Python' },
      { icon: '🛡️', label: 'Core', value: 'Django Templates' },
      { icon: '⚙️', label: 'DB', value: 'SQLite' },
    ],
    github: 'https://github.com/Minhaj078/AttendXpress',
    live: 'https://attendxpress-1.onrender.com/',
  },
  {
    title: 'Django Note App',
    category: 'RARE · BACKEND FOCUS',
    desc: 'A robust note-taking application built with Django, featuring user authentication, CRUD operations, and clean UI.',
    stats: [
      { icon: '⚡', label: 'Stack', value: 'Django + Python' },
      { icon: '🛡️', label: 'Auth', value: 'Django Auth' },
      { icon: '⚙️', label: 'DB', value: 'PostgreSQL' },
    ],
    github: 'https://github.com/Minhaj078/Basic_Django_NoteApp',
    live: 'https://web-production-c2b77.up.railway.app/',
  },
  {
    title: 'Neon Nexus Portfolio',
    category: 'RARE · FRONTEND',
    desc: 'This very portfolio — a cyberpunk hacker terminal experience built with React, Tailwind, and Framer Motion.',
    stats: [
      { icon: '⚡', label: 'Stack', value: 'React + TS' },
      { icon: '🛡️', label: 'Style', value: 'Tailwind' },
      { icon: '⚙️', label: 'Anim', value: 'Framer' },
    ],
    github: '#',
    live: '#',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="font-mono text-2xl text-primary neon-glow mb-12">
          {'>'} ls -la ./projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="group border border-primary/15 hover:border-primary/50 transition-all duration-300 hover:translate-y-[-4px] relative overflow-hidden card-scanline"
              style={{ backgroundColor: '#0a0a0a' }}
            >
              {/* Category strip */}
              <div className="bg-primary/10 border-b border-primary/20 px-4 py-2">
                <span className="font-code text-[10px] text-primary tracking-widest">{project.category}</span>
              </div>

              <div className="p-6">
                <h3 className="font-mono text-xl text-foreground mb-3 tracking-wider">{project.title}</h3>
                <p className="font-body text-sm text-muted-foreground mb-4">{project.desc}</p>

                {/* Stats */}
                <div className="space-y-1 mb-6">
                  {project.stats.map(stat => (
                    <div key={stat.label} className="font-code text-xs flex gap-2">
                      <span>{stat.icon}</span>
                      <span className="text-muted-foreground">{stat.label}:</span>
                      <span className="text-secondary">{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs px-4 py-2 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-3 h-3" />
                    INSPECT_CODE
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-mono text-xs px-4 py-2 border border-secondary/30 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all"
                  >
                    <ExternalLink className="w-3 h-3" />
                    LAUNCH →
                  </a>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ boxShadow: 'inset 0 0 30px rgba(0,255,65,0.05)' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
