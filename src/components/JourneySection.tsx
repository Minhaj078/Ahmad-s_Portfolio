import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const missions = [
  {
    id: '01',
    date: '2021 — 2023',
    title: 'High School — DAV Public School, Bokaro',
    desc: 'Completed high school education, discovered a passion for coding and problem-solving. Built the foundation for a career in Computer Science.',
    completed: true,
  },
  {
    id: '02',
    date: '2023 — Present',
    title: 'B.Tech CSE — Lovely Professional University',
    desc: 'Pursuing Bachelors in Technology in Computer Science and Engineering from LPU, Punjab. Diving deep into software development, DSA, and system design.',
    completed: true,
  },
  {
    id: '03',
    date: '2023 — 2024',
    title: 'Full Stack Development — MERN Stack',
    desc: 'Learned and built end-to-end projects using MongoDB, Express, React, and Node.js. Mastered REST APIs, authentication, and deployment workflows.',
    completed: true,
  },
  {
    id: '04',
    date: '2025',
    title: 'Open Source — Hacktoberfest 2025',
    desc: 'Contributed to open-source projects during Hacktoberfest 2025. Collaborated with developers worldwide, submitted PRs, and earned recognition.',
    completed: true,
  },
  {
    id: '05',
    date: '2025 — Present',
    title: 'AI / ML Exploration — Current Quest',
    desc: 'Exploring LLM-powered applications, AI agents, and intelligent backend systems. Building projects that integrate AI into real-world software.',
    completed: false,
  },
];

const JourneySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="journey" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className="font-mono text-2xl text-primary neon-glow mb-12">
          {'>'} MISSION_LOG.txt
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-primary/30" />

          <div className="space-y-8">
            {missions.map((mission, i) => (
              <motion.div
                key={mission.id}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Node */}
                <div className="absolute left-2 md:left-6 top-4 w-4 h-4 border-2 border-primary flex items-center justify-center"
                  style={{ backgroundColor: mission.completed ? '#00FF41' : '#000' }}
                >
                  {!mission.completed && <span className="animate-pulse text-primary text-[8px]">▌</span>}
                </div>

                <div
                  className="border border-primary/15 p-6 hover:border-primary/40 transition-all neon-border-glow"
                  style={{ backgroundColor: '#0a0a0a' }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-code text-xs text-primary">
                      ▶ MISSION {mission.id} — {mission.completed ? 'COMPLETED' : 'IN PROGRESS'}
                    </span>
                    {mission.completed ? (
                      <CheckCircle className="w-4 h-4 text-primary" />
                    ) : (
                      <Shield className="w-4 h-4 text-secondary" />
                    )}
                  </div>
                  <div className="font-code text-[10px] text-primary/60 mb-2">{mission.date}</div>
                  <h3 className="font-mono text-lg text-foreground mb-2 tracking-wider">{mission.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{mission.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
