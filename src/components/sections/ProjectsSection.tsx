'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Project interface
interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}

// Projects data
const projectsData: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with payment processing, product management, and customer profiles.",
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%232A2A2A'/%3E%3Cpath d='M150,60 L180,100 L150,140 L120,100 Z' fill='%23444'/%3E%3Ccircle cx='150' cy='100' r='20' fill='%23666'/%3E%3Ctext x='150' y='170' font-family='Arial' font-size='12' fill='%23999' text-anchor='middle'%3EE-Commerce Platform%3C/text%3E%3C/svg%3E"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management with real-time data visualization.",
    tags: ['React', 'D3.js', 'Firebase'],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%232A2A2A'/%3E%3Crect x='50' y='50' width='60' height='100' fill='%23444'/%3E%3Crect x='120' y='70' width='60' height='80' fill='%23555'/%3E%3Crect x='190' y='40' width='60' height='110' fill='%23666'/%3E%3Ctext x='150' y='170' font-family='Arial' font-size='12' fill='%23999' text-anchor='middle'%3ESocial Media Dashboard%3C/text%3E%3C/svg%3E"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team communication features.",
    tags: ['TypeScript', 'Socket.io', 'Express'],
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%232A2A2A'/%3E%3Crect x='50' y='50' width='200' height='30' rx='5' fill='%23444'/%3E%3Crect x='50' y='90' width='200' height='30' rx='5' fill='%23555'/%3E%3Crect x='50' y='130' width='200' height='30' rx='5' fill='%23666'/%3E%3Ccircle cx='35' cy='65' r='10' fill='%23777'/%3E%3Ccircle cx='35' cy='105' r='10' fill='%23888'/%3E%3Ccircle cx='35' cy='145' r='10' fill='%23999'/%3E%3Ctext x='150' y='170' font-family='Arial' font-size='12' fill='%23999' text-anchor='middle'%3ETask Management App%3C/text%3E%3C/svg%3E"
  }
];

// Project card component
const ProjectCard = ({ title, description, tags, image }: Project) => {
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
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ duration: 0.2 }}
      className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col"
    >
      <div className="h-48 bg-zinc-800 relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%232A2A2A'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial' font-size='24' fill='%23666' text-anchor='middle' dominant-baseline='middle'%3E${title}%3C/text%3E%3C/svg%3E`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60"></div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-zinc-200 mb-4 flex-1">{description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-zinc-800 text-zinc-100 px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-4 pt-4 border-t border-zinc-800 flex justify-between">
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm text-zinc-400 hover:text-white flex items-center"
            onClick={handleViewDetails}
          >
            View Details
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.a>
          
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm text-zinc-400 hover:text-white flex items-center"
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
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Featured Projects</h2>
          
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
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                />
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-12 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">
                View All Projects
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 