'use client';

import { motion } from 'framer-motion';
import { TiltCard } from '@/components/TiltCard';
import { AnimatedText } from '@/components/AnimatedText';

// Timeline entry interface
interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  color: string;
}

// Timeline data
const timelineData: TimelineEntry[] = [
  {
    year: '2024',
    title: 'Technology Services Student Service Desk Assistant',
    description: 'Acadia University, Wolfville, NS, Canada - Providing technical support to students, faculty, and staff.',
    color: 'text-amber-400'
  },
  {
    year: '2023',
    title: 'IT Intern with Junior Software Development Focus',
    description: 'Alucor LTD, Dubai, UAE - Engineered a secure Password Manager app using advanced encryption techniques.',
    color: 'text-emerald-400'
  },
  {
    year: '2022',
    title: 'Programmer and Social Media Manager',
    description: 'Vision Concept Aviation Training Institute, Dubai, UAE - Automated location plotting processes with Python.',
    color: 'text-blue-400'
  }
];

// Timeline entry component
const TimelineEntry = ({ entry, index }: { entry: TimelineEntry; index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: 0.1 * index }}
    className="flex gap-4"
  >
    <div className="w-12 h-12 rounded-lg bg-zinc-800 flex items-center justify-center flex-shrink-0 border border-zinc-700">
      <span className={`${entry.color} font-bold`}>{entry.year}</span>
    </div>
    <div>
      <h5 className="text-white font-medium">{entry.title}</h5>
      <p className="text-zinc-300 text-sm">{entry.description}</p>
    </div>
  </motion.div>
);

// Social link component
const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <motion.a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -3, scale: 1.1 }}
    className="bg-zinc-800 hover:bg-zinc-700 w-9 h-9 rounded-full flex items-center justify-center"
  >
    {icon}
  </motion.a>
);

export function AboutSection() {
  const handleContactClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <AnimatedText
              text="About Me"
              className="text-3xl md:text-4xl font-bold text-white justify-center"
              once={true}
            />
          </div>
          
          <TiltCard 
            className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8 backdrop-blur-sm"
            glareOpacity={0.05}
            tiltFactor={3}
            perspective={1500}
          >
            <div className="flex flex-col md:flex-row gap-10 items-start">
              <div className="w-full">
                <h3 className="text-2xl font-semibold mb-5 text-white border-b border-zinc-700 pb-2">Mehir Kumar</h3>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-zinc-200 leading-relaxed flex-1">
                    I'm a Computer Science student at Acadia University with a passion for software development, focusing on Software Engineering and Artificial Intelligence. I have experience in both frontend and backend development, as well as IT support and social media management.
                  </p>
                  <div className="flex gap-3 ml-4">
                    <SocialLink 
                      href="https://github.com/mehirk"
                      icon={
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.839 21.489C9.339 21.582 9.5 21.27 9.5 21C9.5 20.757 9.492 20.114 9.489 19.313C6.73 19.914 6.139 17.967 6.139 17.967C5.685 16.913 5.029 16.6 5.029 16.6C4.121 16.009 5.098 16.022 5.098 16.022C6.101 16.094 6.639 17.034 6.639 17.034C7.562 18.531 9.046 18.016 9.52 17.757C9.611 17.14 9.875 16.726 10.166 16.491C7.911 16.254 5.544 15.417 5.544 11.612C5.544 10.521 5.951 9.635 6.659 8.947C6.554 8.695 6.196 7.694 6.759 6.273C6.759 6.273 7.629 6 9.5 7.251C10.313 7.007 11.188 6.885 12.062 6.881C12.938 6.885 13.813 7.007 14.625 7.251C16.49 6 17.36 6.273 17.36 6.273C17.923 7.694 17.565 8.695 17.46 8.947C18.169 9.635 18.576 10.521 18.576 11.612C18.576 15.429 16.203 16.251 13.94 16.482C14.306 16.771 14.626 17.346 14.626 18.228C14.626 19.522 14.614 20.671 14.614 21C14.614 21.274 14.771 21.589 15.282 21.487C19.253 20.161 22.115 16.416 22.115 12C22.115 6.477 17.638 2 12.115 2H12Z" fill="#9CA3AF"/>
                        </svg>
                      }
                    />
                    <SocialLink 
                      href="https://linkedin.com/in/mehirkumar"
                      icon={
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#9CA3AF"/>
                        </svg>
                      }
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-zinc-800 hover:bg-zinc-700 w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white"
                      onClick={handleContactClick}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.button>
                  </div>
                </div>
                
                <div className="mb-6">
                  <AnimatedText
                    text="Education"
                    className="text-lg font-medium text-white mb-4 justify-start"
                    once={true}
                  />
                  <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
                    <h5 className="text-white font-medium">Bachelor of Computer Science</h5>
                    <p className="text-zinc-300 text-sm">Acadia University, Wolfville, Nova Scotia</p>
                    <p className="text-zinc-400 text-sm">Expected Graduation: May 2027</p>
                    <p className="text-zinc-300 text-sm mt-2">Concentrations: Software Engineering, Artificial Intelligence</p>
                    <p className="text-zinc-300 text-sm">GPA: 4.00 / 4.33</p>
                    <p className="text-zinc-300 text-sm">Dean's List (2024)</p>
                  </div>
                </div>
                
                <AnimatedText
                  text="Experience"
                  className="text-lg font-medium text-white mb-4 justify-start"
                  once={true}
                />
                <div className="space-y-6 mb-6">
                  {timelineData.map((entry, index) => (
                    <TimelineEntry key={entry.year + entry.title} entry={entry} index={index} />
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">4.00</p>
                    <p className="text-zinc-300 text-sm">GPA</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-white">3+</p>
                    <p className="text-zinc-300 text-sm">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
} 