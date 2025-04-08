'use client';

import { motion } from 'framer-motion';

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
  },
  {
    year: '2022',
    title: 'Flight Management System',
    description: 'Developed a Python-based flight management system with robust CSV storage and MySQL integration.',
    color: 'text-purple-400'
  },
  {
    year: '2024',
    title: 'Technology Services Student Service Desk Assistant',
    description: 'Acadia University, Wolfville, NS, Canada - Providing technical support to students, faculty, and staff.',
    color: 'text-amber-400'
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
                    alt="Mehir Kumar" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                <div className="flex gap-3 mb-4">
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
                </div>
                
                <div className="text-center">
                  <p className="text-zinc-400 text-sm mb-3 italic">"Crafting elegant solutions for complex problems"</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm rounded-lg"
                    onClick={handleContactClick}
                  >
                    Contact Me
                  </motion.button>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-5 text-white border-b border-zinc-700 pb-2">Mehir Kumar</h3>
                <p className="text-zinc-200 mb-6 leading-relaxed">
                  I'm a Computer Science student at Acadia University with a passion for software development, focusing on Software Engineering and Artificial Intelligence. I have experience in both frontend and backend development, as well as IT support and social media management.
                </p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-medium text-white mb-4">Education</h4>
                  <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
                    <h5 className="text-white font-medium">Bachelor of Computer Science</h5>
                    <p className="text-zinc-300 text-sm">Acadia University, Wolfville, Nova Scotia</p>
                    <p className="text-zinc-400 text-sm">Expected Graduation: May 2027</p>
                    <p className="text-zinc-300 text-sm mt-2">Concentrations: Software Engineering, Artificial Intelligence</p>
                    <p className="text-zinc-300 text-sm">GPA: 4.00 / 4.33</p>
                    <p className="text-zinc-300 text-sm">Dean's List (2024)</p>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium text-white mb-4">Experience</h4>
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
} 