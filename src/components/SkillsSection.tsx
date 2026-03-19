import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillBars = [
  { name: 'FRONTEND', pct: 80 },
  { name: 'BACKEND', pct: 90 },
  { name: 'DATABASES', pct: 82 },
  { name: 'ML / AI', pct: 70 },
  { name: 'DEVOPS', pct: 60 },
];

const techIcons = [
  'React', 'Node.js', 'TypeScript', 'Python', 'MongoDB',
  'PostgreSQL', 'Docker', 'Git', 'Redis', 'TensorFlow',
  'Next.js', 'Express', 'Tailwind', 'GraphQL', 'AWS',
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const makeBar = (pct: number) => {
    const filled = Math.round(pct / 10);
    const empty = 10 - filled;
    return '█'.repeat(filled) + '░'.repeat(empty);
  };

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-mono text-2xl text-primary neon-glow mb-12">
            {'>'} TECH_STACK.scan()
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Radar display */}
            <div className="flex justify-center">
              <div className="relative w-72 h-72">
                {/* Radar circles */}
                {[1, 0.75, 0.5, 0.25].map((scale, i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border border-primary/10"
                    style={{
                      transform: `scale(${scale})`,
                    }}
                  />
                ))}
                {/* Sweep */}
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, transparent 0deg, rgba(0,255,65,0.15) 40deg, transparent 80deg)',
                    animation: 'radar-sweep 3s linear infinite',
                  }}
                />
                {/* Cross lines */}
                <div className="absolute top-0 left-1/2 w-px h-full bg-primary/10" />
                <div className="absolute left-0 top-1/2 h-px w-full bg-primary/10" />

                {/* Tech pings */}
                {techIcons.slice(0, 8).map((tech, i) => {
                  const angle = (i / 8) * Math.PI * 2 - Math.PI / 2;
                  const r = 100;
                  const x = 50 + (Math.cos(angle) * r / 144) * 50;
                  const y = 50 + (Math.sin(angle) * r / 144) * 50;
                  return (
                    <div
                      key={tech}
                      className="absolute font-code text-[9px] text-primary/80"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                        animation: `label-pulse ${2 + i * 0.3}s ease-in-out infinite`,
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary/50 mb-1 mx-auto" />
                      {tech}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Skill bars */}
            <div className="space-y-4">
              {skillBars.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="font-code text-sm"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground w-28">[{skill.name.padEnd(12)}]</span>
                    <span className="text-primary">[{makeBar(skill.pct)}]</span>
                    <span className="text-secondary">{skill.pct}%</span>
                  </div>
                </motion.div>
              ))}

              {/* Tech grid */}
              <div className="mt-8 grid grid-cols-3 gap-3">
                {techIcons.map((tech) => (
                  <div
                    key={tech}
                    className="font-code text-xs text-muted-foreground border border-primary/10 px-3 py-2 text-center hover:border-primary/50 hover:text-primary transition-all"
                    style={{ backgroundColor: '#0a0a0a' }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
