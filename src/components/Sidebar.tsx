"use client";

import { useState, useEffect, useRef, memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  UserIcon,
  CodeBracketIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: <HomeIcon className="w-5 h-5" /> },
  { id: "about", label: "About", icon: <UserIcon className="w-5 h-5" /> },
  {
    id: "skills",
    label: "Skills",
    icon: <CodeBracketIcon className="w-5 h-5" />,
  },
  {
    id: "projects",
    label: "Projects",
    icon: <BriefcaseIcon className="w-5 h-5" />,
  },
  {
    id: "interactions-demo",
    label: "Playground",
    icon: <PuzzlePieceIcon className="w-5 h-5" />,
  },
  {
    id: "contact",
    label: "Contact",
    icon: <EnvelopeIcon className="w-5 h-5" />,
  },
];

const SocialIcons = () => {
  const socialLinks = [
    { href: "https://github.com/mehirk", icon: <GithubIcon /> },
    {
      href: "https://linkedin.com/in/mehirkumar",
      icon: <LinkedinIcon />,
    },
    {
      href: "mailto:mehirk28@gmail.com",
      icon: <MailIcon />,
    },
  ];

  return (
    <>
      {socialLinks.map((social, index) => (
        <motion.a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -2 }}
          className={`text-zinc-400 hover:text-white`}
        >
          {social.icon}
        </motion.a>
      ))}
    </>
  );
};

// Desktop sidebar component
const DesktopSidebar = memo(
  ({
    activeSection,
    handleNavClick,
  }: {
    activeSection: string;
    handleNavClick: (id: string) => void;
  }) => {
    return (
      <div className="hidden md:flex w-64 fixed top-5 left-5 bottom-5 flex-col bg-black/90 backdrop-blur-md border border-zinc-800/50 rounded-2xl shadow-lg z-50 overflow-hidden">
        <div className="p-6 flex flex-col items-center border-b border-zinc-800/50">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="mb-4"
          >
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              {/* Photo */}
            </div>
          </motion.div>

          <h2 className="text-white font-semibold text-xl font-raleway">
            Mehir Kumar
          </h2>
          <p className="text-zinc-400 text-sm">Computer Science Student</p>
        </div>

        <nav className="px-3 py-4 flex-1 overflow-y-auto scrollbar-thin">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start px-3 py-2 relative ${
                    activeSection === item.id
                      ? "text-white bg-zinc-800/80"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/30"
                  }`}
                  onClick={() => handleNavClick(item.id)}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span className="font-medium">{item.label}</span>

                  {activeSection === item.id && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 rounded-r"></div>
                  )}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-zinc-800/50 flex justify-around items-center">
          <SocialIcons />
        </div>
      </div>
    );
  }
);

const MobileNavbar = memo(
  ({
    activeSection,
    handleNavClick,
  }: {
    activeSection: string;
    handleNavClick: (id: string) => void;
  }) => {
    const [showName, setShowName] = useState<string | null>(null);

    return (
      <>
        {/* Mobile header with name/logo */}
        <div className="md:hidden fixed top-0 left-0 right-0 bg-black/90 backdrop-blur-md border-b border-zinc-800/50 z-50 py-3 px-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="ml-3">
              <h2 className="text-white font-semibold text-lg font-raleway">
                Mehir Kumar
              </h2>
              <p className="text-zinc-400 text-xs">Computer Science Student</p>
            </div>
          </div>

          <div className="flex space-x-3">
            <SocialIcons />
          </div>
        </div>

        {/* Bottom navigation bar */}
        <div className="md:hidden fixed bottom-5 left-4 right-4 bg-black/90 backdrop-blur-md border border-zinc-800/50 rounded-full flex justify-around items-center py-3 px-4 z-50 shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`p-3 rounded-full relative ${
                activeSection === item.id
                  ? "text-white bg-zinc-800/80"
                  : "text-zinc-400 hover:text-white"
              }`}
              onClick={() => handleNavClick(item.id)}
              onTouchStart={() => setShowName(item.id)}
              onTouchEnd={() => setShowName(null)}
              onMouseEnter={() => setShowName(item.id)}
              onMouseLeave={() => setShowName(null)}
            >
              {item.icon}

              {/* Label popup on hover/touch */}
              {showName === item.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded whitespace-nowrap">
                  {item.label}
                </div>
              )}

              {activeSection === item.id && (
                <div className="absolute left-0 right-0 bottom-0 h-1 bg-purple-500 rounded-t mx-1"></div>
              )}
            </button>
          ))}
        </div>

        {/* Extra padding for content to not be hidden behind fixed elements */}
        <div className="md:hidden h-16 w-full"></div>
        <div className="md:hidden h-20 w-full mt-auto"></div>
      </>
    );
  }
);

MobileNavbar.displayName = "MobileNavbar";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Set up intersection observer for scroll spy
  useEffect(() => {
    const currentSectionRef = { current: "home" };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Filter for elements that are intersecting
      const intersectingEntries = entries.filter(
        (entry) => entry.isIntersecting
      );

      // If we have intersecting entries, find the one with the highest intersection ratio
      if (intersectingEntries.length > 0) {
        // Sort by intersection ratio (highest first)
        const mostVisibleEntry = intersectingEntries.reduce((prev, current) => {
          return current.intersectionRatio > prev.intersectionRatio
            ? current
            : prev;
        }, intersectingEntries[0]);

        const sectionId = mostVisibleEntry.target.id;

        // Special handling for the contact section which might be difficult to detect
        if (sectionId === "contact") {
          setActiveSection("contact");
          currentSectionRef.current = "contact";
        } else if (currentSectionRef.current !== sectionId) {
          currentSectionRef.current = sectionId;
          setActiveSection(sectionId);
        }
      }
    };

    observerRef.current = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -45% 0px",
      threshold: [0.2, 0.4, 0.6, 0.8],
    });

    // Observe all sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      observerRef.current?.observe(section);
    });

    // Add additional scroll listener specifically for contact section
    const handleScroll = () => {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        if (
          isVisible &&
          window.scrollY + window.innerHeight > document.body.scrollHeight - 100
        ) {
          setActiveSection("contact");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observerRef.current?.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <DesktopSidebar
        activeSection={activeSection}
        handleNavClick={handleNavClick}
      />
      <MobileNavbar
        activeSection={activeSection}
        handleNavClick={handleNavClick}
      />
    </>
  );
}
