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
                className="max-w-4xl mx-auto"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white text-center">About Me</h2>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm"
                >
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <motion.div 
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-40 h-40 rounded-full overflow-hidden bg-zinc-800 flex-shrink-0"
                    >
                      {/* Replace with your profile image */}
                      <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900"></div>
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-3 text-white">Mehir Developer</h3>
                      <p className="text-zinc-200 mb-4">
                        I'm a passionate full-stack developer with expertise in modern web technologies. With a strong foundation in both frontend and backend development, I create seamless digital experiences that combine elegant design with robust functionality.
                      </p>
                      <p className="text-zinc-200">
                        My journey in software development began 5 years ago, and since then, I've worked on a variety of projects ranging from e-commerce platforms to complex web applications. I'm constantly exploring new technologies and approaches to deliver the best solutions for my clients.
                      </p>
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
                      image="/project1.jpg"
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
                      image="/project2.jpg"
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
                      image="/project3.jpg"
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
                    <form className="space-y-6">
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
                            placeholder="Your name"
                            className="bg-zinc-800/50 border-zinc-700 text-white focus:ring-zinc-600"
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
                            type="email"
                            placeholder="Your email"
                            className="bg-zinc-800/50 border-zinc-700 text-white focus:ring-zinc-600"
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
                          placeholder="Subject"
                          className="bg-zinc-800/50 border-zinc-700 text-white focus:ring-zinc-600"
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
                          rows={5}
                          placeholder="Your message"
                          className="bg-zinc-800/50 border-zinc-700 text-white focus:ring-zinc-600"
                        />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white">
                          Send Message
                        </Button>
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
      whileHover={{ y: -5 }}
      className="bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col"
    >
      <div className="h-48 bg-zinc-800 relative">
        {/* We'll use a placeholder for now */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-zinc-400 text-lg font-semibold">
          Project Image
        </div>
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
      </div>
    </motion.div>
  );
}

function TestimonialCard({ quote, author, position }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 backdrop-blur-sm h-full flex flex-col"
    >
      <div className="mb-4">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.3 5.2C7.6 6.2 5 9.6 5 14.1V18H10.3V14.1H7.7C7.7 11.5 9.1 9.3 11.3 8.1V5.2ZM18.3 5.2C14.6 6.2 12 9.6 12 14.1V18H17.3V14.1H14.7C14.7 11.5 16.1 9.3 18.3 8.1V5.2Z" fill="#9CA3AF"/>
        </svg>
      </div>
      <p className="text-zinc-200 mb-6 flex-1 italic">{quote}</p>
      <div className="mt-auto">
        <p className="text-white font-medium">{author}</p>
        <p className="text-zinc-300 text-sm">{position}</p>
      </div>
    </motion.div>
  );
}