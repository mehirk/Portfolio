'use client';

import { motion } from 'framer-motion';
import { Code, Layers, Monitor, Server } from 'lucide-react';

// Skill interface
interface Skill {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

// Skills data
const skillsData: Skill[] = [
  {
    icon: <Monitor className="h-8 w-8 text-emerald-400" />,
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    icon: <Server className="h-8 w-8 text-blue-400" />,
    title: 'Backend',
    skills: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'AWS']
  },
  {
    icon: <Code className="h-8 w-8 text-purple-400" />,
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'HTML/CSS', 'SQL']
  },
  {
    icon: <Layers className="h-8 w-8 text-amber-400" />,
    title: 'Tools',
    skills: ['Git', 'Docker', 'Figma', 'VS Code', 'Jest']
  }
];

// SkillCard component
const SkillCard = ({ icon, title, skills }: Skill) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur-sm"
  >
    <div className="mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-zinc-200 flex items-center">
          <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </motion.div>
);

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-black/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <SkillCard 
                  icon={skill.icon}
                  title={skill.title}
                  skills={skill.skills}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 