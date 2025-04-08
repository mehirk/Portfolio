'use client';

import { motion } from 'framer-motion';
import { Code, Layers, Monitor, Server, Database } from 'lucide-react';
import { TiltCard } from '@/components/TiltCard';
import { AnimatedText } from '@/components/AnimatedText';

// Skill interface
interface Skill {
  icon: React.ReactNode;
  title: string;
  skills: string[];
  color: string;
  borderColor: string;
  iconBgColor: string;
}

// Skills data
const skillsData: Skill[] = [
  {
    icon: <Monitor className="h-8 w-8" />,
    title: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'TailwindCSS', 'Shadcn UI', 'HTML', 'CSS'],
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/10',
    iconBgColor: 'bg-emerald-500/5'
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST API Development', 'Prisma ORM', 'Next Auth(Auth.js)', 'Better-Auth'],
    color: 'text-blue-400',
    borderColor: 'border-blue-500/10',
    iconBgColor: 'bg-blue-500/5'
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: 'Database & Languages',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Python', 'Java', 'SQL', 'TypeScript', 'JavaScript'],
    color: 'text-indigo-400',
    borderColor: 'border-indigo-500/10',
    iconBgColor: 'bg-indigo-500/5'
  },
  {
    icon: <Layers className="h-8 w-8" />,
    title: 'Tools & Others',
    skills: ['Git', 'Docker', 'Postman', 'Github Projects', 'NumPy', 'Pandas', 'tkinter', 'IT Asset Management'],
    color: 'text-amber-400',
    borderColor: 'border-amber-500/10',
    iconBgColor: 'bg-amber-500/5'
  }
];

// SkillCard component
const SkillCard = ({ icon, title, skills, color, borderColor, iconBgColor }: Skill) => (
  <TiltCard 
    className={`glass-card backdrop-blur-md transition-all duration-300 ${borderColor} p-6 sleek-shadow glossy-effect`}
    glareOpacity={0.08}
    tiltFactor={5}
  >
    <div className={`mb-6 w-14 h-14 rounded-full flex items-center justify-center ${iconBgColor} ${color}`}>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-4 text-white text-readability-shadow">{title}</h3>
    <ul className="space-y-3">
      {skills.map((skill, index) => (
        <motion.li 
          key={index}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 * index }}
          className="text-zinc-300 flex items-center"
        >
          <span className={`w-1.5 h-1.5 ${color.replace('text', 'bg')} rounded-full mr-3`}></span>
          <span>{skill}</span>
        </motion.li>
      ))}
    </ul>
  </TiltCard>
);

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="text-center">
            <AnimatedText 
              text="Skills & Expertise"
              className="text-3xl md:text-4xl font-bold mb-4 text-white justify-center"
            />
          </div>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-cyan-400/50 to-blue-400/50 rounded-full mb-12"></div>
          
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
                  color={skill.color}
                  borderColor={skill.borderColor}
                  iconBgColor={skill.iconBgColor}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 