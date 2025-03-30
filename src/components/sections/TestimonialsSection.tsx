'use client';

import { motion } from 'framer-motion';

// Testimonial interface
interface Testimonial {
  quote: string;
  author: string;
  position: string;
}

// Testimonials data
const testimonialsData: Testimonial[] = [
  {
    quote: "Mehir delivered our project on time and exceeded our expectations. The attention to detail and user experience considerations were exceptional.",
    author: "Alex Johnson",
    position: "CTO, TechStart Inc."
  },
  {
    quote: "Working with Mehir was a seamless experience. The communication was clear and the technical expertise truly impressive. I highly recommend their services.",
    author: "Sarah Williams",
    position: "Product Manager, InnovateSoft"
  },
  {
    quote: "The e-commerce platform that Mehir built for us has significantly increased our conversion rates. A truly talented developer with business acumen.",
    author: "Michael Chen",
    position: "Founder, StyleBoutique"
  }
];

// Testimonial card component
const TestimonialCard = ({ quote, author, position }: Testimonial) => (
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

export function TestimonialsSection() {
  return (
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
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * (index + 1) }}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  position={testimonial.position}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 