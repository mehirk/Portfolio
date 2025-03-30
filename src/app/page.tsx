'use client';

import { motion, stagger, useScroll, useTransform } from 'framer-motion';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Code, Layers, Monitor, Server } from 'lucide-react';

export default function Home() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]);
  const scale = useTransform(scrollY, [0, 200], [1, 0.9]);
  
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 pl-72 relative">
        <main className="min-h-screen dark-gradient">
          {/* Hero Section */}
          <section id="home" className="relative h-screen flex flex-col items-center justify-center">
            {/* Animated background elements */}
            <motion.div 
              animate={{ 
                rotate: [0, 360],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ 
                duration: 30, 
                repeat: Infinity,
                ease: "linear" 
              }}
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"
            />
            <motion.div 
              animate={{ 
                rotate: [360, 0],
                opacity: [0.05, 0.1, 0.05]
              }}
              transition={{ 
                duration: 25, 
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"
            />
            
            <div className="container px-4 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center max-w-3xl mx-auto"
              >
                <motion.h1 
                  style={{ opacity, scale }}
                  className="text-5xl md:text-7xl font-bold dark-text-gradient mb-6"
                >
                  Mehir Portfolio
                </motion.h1>
                <p className="text-xl text-zinc-200 mb-10 leading-relaxed">
                  Creating exceptional digital experiences with elegance and precision.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className="bg-zinc-800 hover:bg-zinc-700 text-white"
                      onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      View Projects
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="text-white border-zinc-600 hover:bg-zinc-800/50"
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      Contact Me
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            {/* Scroll indicator */}
            <motion.div 
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7, y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="h-14 w-8 rounded-full border-2 border-zinc-500 flex justify-center pt-2 cursor-pointer">
                <div className="h-2 w-1 rounded-full bg-zinc-300 animate-bounce"></div>
              </div>
            </motion.div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">About Me</h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm"
                >
                  <div className="flex flex-col md:flex-row gap-10 items-start">
                    <div className="md:w-1/3 flex flex-col items-center">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-48 h-48 rounded-xl overflow-hidden bg-zinc-800 flex-shrink-0 mb-6 border-2 border-zinc-700 shadow-xl"
                      >
                        <img 
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Crect width='300' height='300' fill='%232A2A2A'/%3E%3Ccircle cx='150' cy='120' r='50' fill='%23444'/%3E%3Ccircle cx='150' cy='260' r='80' fill='%23444'/%3E%3Ctext x='150' y='130' font-family='Arial' font-size='30' fill='%23999' text-anchor='middle'%3EM%3C/text%3E%3C/svg%3E" 
                          alt="Mehir" 
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                      
                      <div className="flex gap-3 mb-4">
                        <motion.a 
                          href="https://github.com" 
                          target="_blank"
                          whileHover={{ y: -3, scale: 1.1 }}
                          className="bg-zinc-800 hover:bg-zinc-700 w-9 h-9 rounded-full flex items-center justify-center"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.582 9.5 21.27 9.5 21C9.5 20.757 9.492 20.114 9.489 19.313C6.73 19.914 6.139 17.967 6.139 17.967C5.685 16.913 5.029 16.6 5.029 16.6C4.121 16.009 5.098 16.022 5.098 16.022C6.101 16.094 6.639 17.034 6.639 17.034C7.562 18.531 9.046 18.016 9.52 17.757C9.611 17.14 9.875 16.726 10.166 16.491C7.911 16.254 5.544 15.417 5.544 11.612C5.544 10.521 5.951 9.635 6.659 8.947C6.554 8.695 6.196 7.694 6.759 6.273C6.759 6.273 7.629 6 9.5 7.251C10.313 7.007 11.188 6.885 12.062 6.881C12.938 6.885 13.813 7.007 14.625 7.251C16.49 6 17.36 6.273 17.36 6.273C17.923 7.694 17.565 8.695 17.46 8.947C18.169 9.635 18.576 10.521 18.576 11.612C18.576 15.429 16.203 16.251 13.94 16.482C14.306 16.771 14.626 17.346 14.626 18.228C14.626 19.522 14.614 20.671 14.614 21C14.614 21.274 14.771 21.589 15.282 21.487C19.253 20.161 22.115 16.416 22.115 12C22.115 6.477 17.638 2 12.115 2H12Z" fill="#9CA3AF"/>
                          </svg>
                        </motion.a>
                        <motion.a 
                          href="https://linkedin.com" 
                          target="_blank"
                          whileHover={{ y: -3, scale: 1.1 }}
                          className="bg-zinc-800 hover:bg-zinc-700 w-9 h-9 rounded-full flex items-center justify-center"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#9CA3AF"/>
                          </svg>
                        </motion.a>
                        <motion.a 
                          href="https://twitter.com" 
                          target="_blank"
                          whileHover={{ y: -3, scale: 1.1 }}
                          className="bg-zinc-800 hover:bg-zinc-700 w-9 h-9 rounded-full flex items-center justify-center"
                        >
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.633 7.997C19.633 8.177 19.633 8.358 19.633 8.538C19.633 13.938 15.663 20.068 8.173 20.068C5.883 20.068 3.763 19.318 2 18.067C2.333 18.107 2.672 18.127 3.016 18.127C4.933 18.127 6.682 17.407 8.067 16.207C6.271 16.167 4.76 14.987 4.229 13.327C4.489 13.377 4.759 13.407 5.039 13.407C5.439 13.407 5.83 13.347 6.196 13.237C4.326 12.847 2.927 11.187 2.927 9.207V9.147C3.492 9.467 4.133 9.657 4.816 9.687C3.723 8.967 3.015 7.716 3.015 6.287C3.015 5.547 3.204 4.857 3.546 4.257C5.565 6.727 8.525 8.357 11.833 8.547C11.757 8.227 11.722 7.887 11.722 7.547C11.722 5.267 13.569 3.417 15.847 3.417C17.031 3.417 18.088 3.937 18.819 4.787C19.722 4.587 20.579 4.237 21.349 3.757C21.028 4.747 20.363 5.547 19.498 6.047C20.348 5.947 21.158 5.717 21.898 5.377C21.349 6.187 20.668 6.907 19.867 7.487C19.633 7.657 19.633 7.827 19.633 7.997Z" fill="#9CA3AF"/>
                          </svg>
                        </motion.a>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-zinc-400 text-sm mb-3 italic">"Crafting elegant solutions for complex problems"</p>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm rounded-lg"
                          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                          Contact Me
                        </motion.button>
                      </div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h3 className="text-2xl font-semibold mb-5 text-white border-b border-zinc-700 pb-2">Mehir Developer</h3>
                      <p className="text-zinc-200 mb-6 leading-relaxed">
                        I'm a passionate full-stack developer with expertise in modern web technologies. With a strong foundation in both frontend and backend development, I create seamless digital experiences that combine elegant design with robust functionality.
                      </p>
                      
                      <h4 className="text-lg font-medium text-white mb-4">My Journey</h4>
                      <div className="space-y-6 mb-6">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4 }}
                          className="flex gap-4"
                        >
                          <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0 border border-zinc-700">
                            <span className="text-emerald-400 font-bold">2018</span>
                          </div>
                          <div>
                            <h5 className="text-white font-medium">Started Web Development</h5>
                            <p className="text-zinc-300 text-sm">Began my journey into web development with HTML, CSS and JavaScript</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="flex gap-4"
                        >
                          <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0 border border-zinc-700">
                            <span className="text-blue-400 font-bold">2020</span>
                          </div>
                          <div>
                            <h5 className="text-white font-medium">First Agency Role</h5>
                            <p className="text-zinc-300 text-sm">Joined a digital agency and worked on diverse client projects</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="flex gap-4"
                        >
                          <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0 border border-zinc-700">
                            <span className="text-purple-400 font-bold">2022</span>
                          </div>
                          <div>
                            <h5 className="text-white font-medium">Full-Stack Mastery</h5>
                            <p className="text-zinc-300 text-sm">Expanded expertise to include backend development and cloud infrastructure</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 }}
                          className="flex gap-4"
                        >
                          <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0 border border-zinc-700">
                            <span className="text-amber-400 font-bold">Now</span>
                          </div>
                          <div>
                            <h5 className="text-white font-medium">Freelance & Consulting</h5>
                            <p className="text-zinc-300 text-sm">Working with select clients to deliver custom solutions and consulting services</p>
                          </div>
                        </motion.div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="text-center">
                          <p className="text-3xl font-bold text-white">30+</p>
                          <p className="text-zinc-300 text-sm">Projects Completed</p>
                        </div>
                        <div className="text-center">
                          <p className="text-3xl font-bold text-white">15+</p>
                          <p className="text-zinc-300 text-sm">Happy Clients</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Skills Section */}
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
                  {/* Skills cards with staggered animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <SkillCard 
                      icon={<Monitor className="h-8 w-8 text-emerald-400" />}
                      title="Frontend"
                      skills={['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion']}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <SkillCard 
                      icon={<Server className="h-8 w-8 text-blue-400" />}
                      title="Backend"
                      skills={['Node.js', 'Express', 'MongoDB', 'Firebase', 'AWS']}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <SkillCard 
                      icon={<Code className="h-8 w-8 text-purple-400" />}
                      title="Languages"
                      skills={['JavaScript', 'TypeScript', 'Python', 'HTML/CSS', 'SQL']}
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <SkillCard 
                      icon={<Layers className="h-8 w-8 text-amber-400" />}
                      title="Tools"
                      skills={['Git', 'Docker', 'Figma', 'VS Code', 'Jest']}
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <ProjectCard
                      title="E-Commerce Platform"
                      description="A full-featured online store with payment processing, product management, and customer profiles."
                      tags={['Next.js', 'Stripe', 'MongoDB']}
                      image="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%232A2A2A'/%3E%3Cpath d='M150,60 L180,100 L150,140 L120,100 Z' fill='%23444'/%3E%3Ccircle cx='150' cy='100' r='20' fill='%23666'/%3E%3Ctext x='150' y='170' font-family='Arial' font-size='12' fill='%23999' text-anchor='middle'%3EE-Commerce Platform%3C/text%3E%3C/svg%3E"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <ProjectCard
                      title="Social Media Dashboard"
                      description="Analytics dashboard for social media management with real-time data visualization."
                      tags={['React', 'D3.js', 'Firebase']}
                      image="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%232A2A2A'/%3E%3Crect x='50' y='50' width='60' height='100' fill='%23444'/%3E%3Crect x='120' y='70' width='60' height='80' fill='%23555'/%3E%3Crect x='190' y='40' width='60' height='110' fill='%23666'/%3E%3Ctext x='150' y='170' font-family='Arial' font-size='12' fill='%23999' text-anchor='middle'%3ESocial Media Dashboard%3C/text%3E%3C/svg%3E"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <ProjectCard
                      title="Task Management App"
                      description="Collaborative task management tool with real-time updates and team communication features."
                      tags={['TypeScript', 'Socket.io', 'Express']}
                      image="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%232A2A2A'/%3E%3Crect x='50' y='50' width='200' height='30' rx='5' fill='%23444'/%3E%3Crect x='50' y='90' width='200' height='30' rx='5' fill='%23555'/%3E%3Crect x='50' y='130' width='200' height='30' rx='5' fill='%23666'/%3E%3Ccircle cx='35' cy='65' r='10' fill='%23777'/%3E%3Ccircle cx='35' cy='105' r='10' fill='%23888'/%3E%3Ccircle cx='35' cy='145' r='10' fill='%23999'/%3E%3Ctext x='150' y='170' font-family='Arial' font-size='12' fill='%23999' text-anchor='middle'%3ETask Management App%3C/text%3E%3C/svg%3E"
                    />
                  </motion.div>
                </div>
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

          {/* Testimonials Section */}
          <section id="testimonials" className="py-20 md:py-32 bg-black/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">What Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <TestimonialCard
                      quote="Mehir delivered our project on time and exceeded our expectations. The attention to detail and user experience considerations were exceptional."
                      author="Alex Johnson"
                      position="CTO, TechStart Inc."
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <TestimonialCard
                      quote="Working with Mehir was a seamless experience. The communication was clear and the technical expertise truly impressive. I highly recommend their services."
                      author="Sarah Williams"
                      position="Product Manager, InnovateSoft"
                    />
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                  >
                    <TestimonialCard
                      quote="The e-commerce platform that Mehir built for us has significantly increased our conversion rates. A truly talented developer with business acumen."
                      author="Michael Chen"
                      position="Founder, StyleBoutique"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 md:py-32 bg-black/30">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white text-center">Get In Touch</h2>
                <div className="max-w-3xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm"
                  >
                    <form className="space-y-6" onSubmit={(e) => {
                      e.preventDefault();
                      // Form data
                      const formData = new FormData(e.currentTarget);
                      const name = formData.get('name');
                      const email = formData.get('email');
                      const subject = formData.get('subject');
                      const message = formData.get('message');
                      
                      // Show success message (in real app, you'd send this to a server)
                      alert(`Thank you for your message, ${name}!\n\nI'll get back to you soon at ${email}.`);
                      
                      // Reset form
                      e.currentTarget.reset();
                    }}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.1 }}
                          className="space-y-2"
                        >
                          <Label htmlFor="name" className="text-zinc-200">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            className="bg-zinc-800/50 border-zinc-700 text-white focus:ring-zinc-600"
                            required
                          />
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                          className="space-y-2"
                        >
                          <Label htmlFor="email" className="text-zinc-200">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your email"
                            className="bg-zinc-800/50 border-zinc-700 text-white focus:ring-zinc-600"
                            required
                          />
                        </motion.div>
                      </div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="subject" className="text-zinc-200">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          className="bg-zinc-800/50 border-zinc-700 text-white focus:ring-zinc-600"
                          required
                        />
                      </motion.div>
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        className="space-y-2"
                      >
                        <Label htmlFor="message" className="text-zinc-200">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Your message"
                          className="bg-zinc-800/50 border-zinc-700 text-white focus:ring-zinc-600"
                          required
                        />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative overflow-hidden rounded"
                      >
                        <Button 
                          type="submit" 
                          className="w-full bg-zinc-800 hover:bg-zinc-700 text-white relative z-10"
                        >
                          Send Message
                        </Button>
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-300"
                          initial={{ x: "-100%" }}
                          whileHover={{ x: "0%" }}
                          transition={{ duration: 0.4 }}
                        />
                      </motion.div>
                    </form>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
}

function SkillCard({ icon, title, skills }) {
  return (
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
}

function ProjectCard({ title, description, tags, image }) {
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
            onClick={(e) => {
              e.preventDefault(); 
              alert(`View details for ${title} project`);
            }}
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
            onClick={(e) => {
              e.preventDefault();
              alert(`Live demo for ${title} project`);
            }}
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
}

function TestimonialCard({ quote, author, position }) {
  return (
    <motion.div 
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ duration: 0.2 }}
      className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur-sm h-full flex flex-col relative overflow-hidden"
    >
      {/* Large quote mark in background */}
      <div className="absolute -right-4 -top-4 opacity-5">
        <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.3 5.2C7.6 6.2 5 9.6 5 14.1V18H10.3V14.1H7.7C7.7 11.5 9.1 9.3 11.3 8.1V5.2ZM18.3 5.2C14.6 6.2 12 9.6 12 14.1V18H17.3V14.1H14.7C14.7 11.5 16.1 9.3 18.3 8.1V5.2Z" fill="white"/>
        </svg>
      </div>
      
      <div className="mb-4 text-emerald-400">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.3 5.2C7.6 6.2 5 9.6 5 14.1V18H10.3V14.1H7.7C7.7 11.5 9.1 9.3 11.3 8.1V5.2ZM18.3 5.2C14.6 6.2 12 9.6 12 14.1V18H17.3V14.1H14.7C14.7 11.5 16.1 9.3 18.3 8.1V5.2Z" fill="currentColor"/>
        </svg>
      </div>
      
      <p className="text-zinc-200 mb-6 flex-1 italic leading-relaxed relative z-10">{quote}</p>
      
      <div className="mt-auto flex items-center">
        <div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 mr-4 overflow-hidden">
          {/* Generate unique avatar based on name */}
          <img 
            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(author)}&background=2A2A2A&color=9CA3AF&size=100`}
            alt={author}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-white font-medium">{author}</p>
          <p className="text-zinc-300 text-sm">{position}</p>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-300"
        initial={{ width: "0%" }}
        whileInView={{ width: "100%" }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
    </motion.div>
  );
}