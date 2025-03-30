'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Project interface
interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  color: string;
}

// Projects data
const projectsData: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment processing, product management, and customer profiles.",
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%232A2A2A'/%3E%3Cpath d='M150,60 L180,100 L150,140 L120,100 Z' fill='%23444'/%3E%3Ccircle cx='150' cy='100' r='20' fill='%23666'/%3E%3Ctext x='150' y='170' font-family='Arial' font-size='12' fill='%23999' text-anchor='middle'%3EE-Commerce Platform%3C/text%3E%3C/svg%3E",
    color: "from-indigo-500/15 to-indigo-800/15"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with real-time data visualization.",
    tags: ['React', 'D3.js', 'Firebase'],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%232A2A2A'/%3E%3Crect x='50' y='50' width='60' height='100' fill='%23444'/%3E%3Crect x='120' y='70' width='60' height='80' fill='%23555'/%3E%3Crect x='190' y='40' width='60' height='110' fill='%23666'/%3E%3Ctext x='150' y='170' font-family='Arial' font-size='12' fill='%23999' text-anchor='middle'%3ESocial Media Dashboard%3C/text%3E%3C/svg%3E",
    color: "from-blue-500/15 to-blue-800/15"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team communication features.",
    tags: ['TypeScript', 'Socket.io', 'Express'],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%232A2A2A'/%3E%3Crect x='50' y='50' width='200' height='30' rx='5' fill='%23444'/%3E%3Crect x='50' y='90' width='200' height='30' rx='5' fill='%23555'/%3E%3Crect x='50' y='130' width='200' height='30' rx='5' fill='%23666'/%3E%3Ccircle cx='35' cy='65' r='10' fill='%23777'/%3E%3Ccircle cx='35' cy='105' r='10' fill='%23888'/%3E%3Ccircle cx='35' cy='145' r='10' fill='%23999'/%3E%3Ctext x='150' y='170' font-family='Arial' font-size='12' fill='%23999' text-anchor='middle'%3ETask Management App%3C/text%3E%3C/svg%3E",
    color: "from-cyan-500/15 to-cyan-800/15"
  }
];

// Project card component
const ProjectCard = ({ title, description, tags, image, color }: Project) => {
  const handleViewDetails = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`View details for ${title} project`);
  };

  const handleLiveDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    alert(`Live demo for ${title} project`);
  };

  return (
    <motion.div 
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className={`glass-card backdrop-blur-md h-full flex flex-col relative overflow-hidden group bg-gradient-to-br ${color} sleek-shadow`}
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/5 via-white/0 to-transparent glossy-effect"></div>
      
      <div className="h-48 relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%232A2A2A'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='%23666' text-anchor='middle' dominant-baseline='middle'%3E${title}%3C/text%3E%3C/svg%3E`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent opacity-70"></div>
        
        <motion.div 
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/5 backdrop-blur-lg flex items-center justify-center text-white/80 border border-white/10"
          whileHover={{ rotate: 180, scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 2V6M8 2V6M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col z-10">
        <h3 className="text-xl font-semibold mb-2 text-white/90 text-readability-shadow">{title}</h3>
        <p className="text-zinc-300 mb-6 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-6 pt-4 border-t border-white/5 flex justify-between">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05, x: 3 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm text-white/60 hover:text-white/90 flex items-center group transition-colors duration-300"
            onClick={handleViewDetails}
          >
            View Details
            <svg className="w-4 h-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
          
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full text-white/70 hover:text-white/90 flex items-center transition-colors duration-300"
            onClick={handleLiveDemo}
          >
            Live Demo 
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-indigo-950/5 to-black/0 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-blue-300 to-indigo-300 animated-gradient-bg text-readability-shadow">
              Featured Projects
            </span>
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-indigo-400/50 to-blue-400/50 rounded-full mb-12"></div>
          
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
                />
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-16 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-indigo-600/80 to-blue-600/80 hover:from-indigo-700/90 hover:to-blue-700/90 text-white glossy-effect sleek-shadow">
                View All Projects
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 