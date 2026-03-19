import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, CheckCircle } from 'lucide-react';

const missions = [
  {
    id: '01',
    date: '2023',
    title: 'Started B.Tech CSE at LPU',
    desc: 'Embarked on the journey into Computer Science Engineering at Lovely Professional University.',
    completed: true,
  },
  {
    id: '02',
    date: '2023',
    title: 'First Full Stack Project',
    desc: 'Built and deployed first end-to-end web application using MERN stack.',
    completed: true,
  },
  {
    id: '03',
    date: '2024',
    title: 'Open Source Contributions',
    desc: 'Started contributing to open-source projects, collaborating with developers worldwide.',
    completed: true,
  },
  {
    id: '04',
    date: '2024',
    title: 'ML & AI Exploration',
    desc: 'Dove into Machine Learning and AI — building intelligent solutions with Python and TensorFlow.',
    completed: true,
  },
  {
    id: '05',
    date: '2025',
    title: 'Leveling Up — Current Quest',
    desc: 'Seeking internships and real-world projects to sharpen skills and make impact.',
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
