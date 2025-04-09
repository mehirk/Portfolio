"use client";

import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";
import { AnimatedText } from "@/components/AnimatedText";

// Timeline entry interface
interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  color: string;
}

// Timeline data
const timelineData = [
  {
    year: "2024",
    title: "Technology Services Student Service Desk Assistant",
    description:
      "Acadia University, Wolfville, NS, Canada - Providing technical support to students, faculty, and staff.",
    color: "text-amber-400",
  },
  {
    year: "2023",
    title: "IT Intern with Junior Software Development Focus",
    description:
      "Alucor LTD, Dubai, UAE - Engineered a secure Password Manager app using advanced encryption techniques.",
    color: "text-emerald-400",
  },
  {
    year: "2022",
    title: "Programmer and Social Media Manager",
    description:
      "Vision Concept Aviation Training Institute, Dubai, UAE - Automated location plotting processes with Python.",
    color: "text-blue-400",
  },
];

// Timeline entry component
const TimelineEntry = ({
  entry,
  index,
}: {
  entry: TimelineEntry;
  index: number;
}) => (
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

export function AboutSection() {
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
                <h3 className="text-2xl font-semibold mb-5 text-white border-b border-zinc-700 pb-2">
                  Mehir Kumar
                </h3>
                <div className="flex justify-between items-center mb-6">
                  <p className="text-zinc-200 leading-relaxed flex-1">
                    I'm a Computer Science student at Acadia University with a
                    passion for software development, focusing on Software
                    Engineering and Artificial Intelligence. I have experience
                    in both frontend and backend development, as well as IT
                    support and social media management.
                  </p>
                </div>

                <div className="mb-6">
                  <AnimatedText
                    text="Education"
                    className="text-lg font-medium text-white mb-4 justify-start"
                    once={true}
                  />
                  <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700/50">
                    <h5 className="text-white font-medium">
                      Bachelor of Computer Science
                    </h5>
                    <p className="text-zinc-300 text-sm">
                      Acadia University, Wolfville, Nova Scotia
                    </p>
                    <p className="text-zinc-400 text-sm">
                      Expected Graduation: May 2027
                    </p>
                    <p className="text-zinc-300 text-sm mt-2">
                      Concentrations: Software Engineering, Artificial
                      Intelligence
                    </p>
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
                    <TimelineEntry
                      key={entry.year + entry.title}
                      entry={entry}
                      index={index}
                    />
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
