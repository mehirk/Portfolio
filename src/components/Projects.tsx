'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce platform with payment integration, user authentication, and product management.',
      image: '/images/project-placeholder.jpg',
      category: 'web',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'A comprehensive dashboard to track and analyze social media metrics across multiple platforms.',
      image: '/images/project-placeholder.jpg',
      category: 'web',
      technologies: ['Vue.js', 'Firebase', 'Chart.js'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'A Kanban-style task management application with drag-and-drop interface and team collaboration features.',
      image: '/images/project-placeholder.jpg',
      category: 'mobile',
      technologies: ['React Native', 'Redux', 'Firebase'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'A beautiful weather application providing real-time forecasts, interactive maps, and location-based services.',
      image: '/images/project-placeholder.jpg',
      category: 'mobile',
      technologies: ['Flutter', 'Dart', 'Weather API'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website with smooth animations and dark theme.',
      image: '/images/project-placeholder.jpg',
      category: 'web',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      demoLink: '#',
      codeLink: '#',
    },
    {
      id: 6,
      title: 'Data Visualization Dashboard',
      description: 'Interactive data visualization tools for business analytics and performance monitoring.',
      image: '/images/project-placeholder.jpg',
      category: 'other',
      technologies: ['D3.js', 'React', 'Node.js', 'Express'],
      demoLink: '#',
      codeLink: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const filterCategories = [
    { name: 'All', value: 'all' },
    { name: 'Web', value: 'web' },
    { name: 'Mobile', value: 'mobile' },
    { name: 'Other', value: 'other' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 bg-dark-800">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading-secondary text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="text-gray-300 max-w-2xl mx-auto mt-6">
            Check out some of my latest projects. Each project is uniquely designed
            and built to solve specific problems while demonstrating my skills.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center mb-12 space-x-2">
          {filterCategories.map((category) => (
            <motion.button
              key={category.value}
              onClick={() => setActiveFilter(category.value)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category.value
                  ? 'bg-primary text-white'
                  : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="card overflow-hidden"
              variants={itemVariants}
            >
              <div className="relative h-48 bg-dark-600 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary opacity-70 mix-blend-overlay"></div>
                <div className="flex items-center justify-center h-full text-white text-xl">
                  Project Preview
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-dark-600 text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <motion.a
                    href={project.demoLink}
                    className="button-primary py-1 px-4 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.codeLink}
                    className="bg-transparent hover:bg-dark-600 text-white text-sm font-medium py-1 px-4 border border-white hover:border-transparent rounded-md transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 