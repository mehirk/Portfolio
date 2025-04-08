'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FlipCard } from '@/components/FlipCard';
import { AnimatedText } from '@/components/AnimatedText';
import { HandwritingPath } from '@/components/HandwritingPath';

// Project interface
interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
  role: string;
  date: string;
}

// Projects data
const projectsData: Project[] = [
  {
    title: "Study Link",
    description: "A scalable academic platform enabling group discussions, file sharing, and real-time collaboration.",
    tags: ['React 19', 'TypeScript', 'Express.js', 'PostgreSQL', 'Prisma ORM', 'Docker'],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%232A2A2A'/%3E%3Cpath d='M70,50 L230,50 L230,150 L70,150 Z' stroke='%23666' stroke-width='3' fill='none'/%3E%3Cpath d='M90,70 L210,70' stroke='%23999' stroke-width='2'/%3E%3Cpath d='M90,90 L210,90' stroke='%23999' stroke-width='2'/%3E%3Cpath d='M90,110 L170,110' stroke='%23999' stroke-width='2'/%3E%3Ctext x='150' y='170' font-family='Arial' font-size='12' fill='%23999' text-anchor='middle'%3EStudy Link%3C/text%3E%3C/svg%3E",
    color: "from-indigo-500/15 to-indigo-800/15",
    role: "Full-Stack Developer – Collaborative Project",
    date: "Jan 2025 – Mar 2025"
  },
  {
    title: "Secura Staff App",
    description: "Intuitive employee management system using Python with tkinter, cryptography.fernet, csv, and hashlib.",
    tags: ['Python', 'tkinter', 'cryptography.fernet', 'CSV', 'hashlib'],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%232A2A2A'/%3E%3Cpath d='M90,50 L210,50 L230,70 L230,150 L70,150 L70,70 Z' stroke='%23666' stroke-width='3' fill='none'/%3E%3Cpath d='M210,50 L210,70 L230,70' stroke='%23666' stroke-width='3' fill='none'/%3E%3Cpath d='M120,100 L180,100' stroke='%23999' stroke-width='10' stroke-linecap='round'/%3E%3Ccircle cx='150' cy='80' r='15' stroke='%23999' stroke-width='2' fill='none'/%3E%3Ctext x='150' y='170' font-family='Arial' font-size='12' fill='%23999' text-anchor='middle'%3ESecura Staff App%3C/text%3E%3C/svg%3E",
    color: "from-blue-500/15 to-blue-800/15",
    role: "Lead Developer",
    date: "July 2023 – Aug 2023"
  },
  {
    title: "Flight Management System",
    description: "Python-based flight management system with robust CSV storage and MySQL integration.",
    tags: ['Python', 'MySQL', 'CSV'],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%232A2A2A'/%3E%3Cpath d='M60,70 L120,100 L240,100 M60,130 L120,100' stroke='%23999' stroke-width='3' fill='none'/%3E%3Cpath d='M120,80 L120,120 L140,110 L140,90 Z' fill='%23666'/%3E%3Ccircle cx='190' cy='100' r='40' stroke='%23777' stroke-width='3' stroke-dasharray='10,5' fill='none'/%3E%3Ctext x='150' y='170' font-family='Arial' font-size='12' fill='%23999' text-anchor='middle'%3EFlight Management System%3C/text%3E%3C/svg%3E",
    color: "from-cyan-500/15 to-cyan-800/15",
    role: "Lead Developer",
    date: "Sept 2022 – Sept 2022"
  }
];

// Project card component
const ProjectCard = ({ title, description, tags, image, color, role, date }: Project) => {
  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`View details for ${title} project`);
  };

  const handleLiveDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`Live demo for ${title} project`);
  };

  // Front content of the card
  const frontContent = (
    <div className="h-full flex flex-col relative overflow-hidden">
      {/* Decorative elements in the background */}
      <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/10 backdrop-blur-xl"></div>
      <div className="absolute left-6 bottom-12 w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm"></div>
      
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse-slow rounded-xl"></div>
      
      <div className="p-8 flex flex-col h-full z-10 relative">
        <div className="mb-6 flex justify-between items-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-sm border border-white/10">
            <motion.div 
              className="flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white/90">
                <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </div>

          <motion.div 
            className="text-white/80 text-sm px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {date}
          </motion.div>
        </div>

        <motion.h3 
          className="text-2xl font-bold text-white mb-2 text-shadow-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {title}
        </motion.h3>

        <motion.p 
          className="text-sm text-white/70 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {role}
        </motion.p>
        
        <motion.div 
          className="mt-auto flex items-center justify-center py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-2 text-white/90 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
              <path d="M12 9V12L15 15M3 1H5L7.5 7M7.5 7L4.5 20C4.5 20 3 23 8 23C13 23 11.5 20 11.5 20L10.5 16H13.5L14.5 20C14.5 20 16 23 21 23C26 23 24.5 20 24.5 20L21.5 7M7.5 7H21.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Click to flip</span>
          </div>
        </motion.div>
      </div>
    </div>
  );

  // Back content of the card
  const backContent = (
    <div className="p-8 h-full flex flex-col relative overflow-hidden">
      {/* Decorative shapes in the background */}
      <div className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm"></div>
      <div className="absolute left-4 top-24 w-2 h-2 rounded-full bg-white/20"></div>
      <div className="absolute right-12 top-12 w-3 h-3 rounded-full bg-white/10"></div>
      <div className="absolute left-12 bottom-12 w-4 h-4 rounded-full bg-white/15"></div>
      
      <div className="z-10 relative h-full flex flex-col">
        <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
        <p className="text-white/80 mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag, index) => (
            <motion.span 
              key={index} 
              className="text-xs px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <div className="mt-auto space-y-4">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-white flex items-center justify-center gap-2 transition-colors duration-300"
            onClick={handleViewDetails}
          >
            View Details
            <svg className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
          
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm bg-white/5 hover:bg-white/15 px-4 py-2 rounded-full text-white/80 hover:text-white flex items-center justify-center gap-2 transition-colors duration-300"
            onClick={handleLiveDemo}
          >
            Live Demo 
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </div>
  );

  // Custom gradients based on project type
  const getCardGradient = () => {
    switch(title) {
      case "Study Link":
        return "bg-gradient-to-br from-indigo-500/30 via-purple-500/25 to-indigo-800/40";
      case "Secura Staff App":
        return "bg-gradient-to-br from-blue-500/30 via-sky-400/25 to-blue-700/40";
      case "Flight Management System":
        return "bg-gradient-to-br from-cyan-500/30 via-teal-400/25 to-cyan-700/40";
      default:
        return "bg-gradient-to-br from-zinc-800/90 to-zinc-900/90";
    }
  };

  return (
    <>
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .text-shadow-sm {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
      `}</style>
    
      <FlipCard 
        frontContent={frontContent}
        backContent={backContent}
        className={`glass-card backdrop-blur-lg h-full ${getCardGradient()} sleek-shadow border border-white/15 hover:border-white/30 transition-all duration-300`}
        frontColor="bg-transparent"
        backColor="bg-transparent"
        width="100%"
        height="400px"
      />
    </>
  );
};

// Animation variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1
    }
  }
};

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <AnimatedText 
              text="Featured Projects"
              className="text-3xl md:text-4xl font-bold mb-4 text-white justify-center"
              once={true}
            />
          </div>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-indigo-400/60 to-blue-400/60 rounded-full mb-12"></div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  color={project.color}
                  role={project.role}
                  date={project.date}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-16 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-indigo-500/80 to-blue-500/80 hover:from-indigo-600/90 hover:to-blue-600/90 text-white glossy-effect sleek-shadow">
                View All Projects
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 