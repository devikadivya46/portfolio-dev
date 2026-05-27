import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export default function Header() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    // Check initial state
    const isDarkClass = document.documentElement.classList.contains("dark");
    setIsDark(isDarkClass);

    // Setup section monitoring
    const sections = ["hero", "about", "skills", "projects", "achievements", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Trigger when section fills mid-screen
      threshold: 0,
    };

    const observers = sections.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setActiveSection(id);
        }
      }, observerOptions);

      observer.observe(element);
      return { observer, element };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.element);
        }
      });
    };
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Works" },
    { id: "achievements", label: "Laurels" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Scroll-Linked Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-solar-orange via-amber-500 to-solar-orange origin-left z-[100] shadow-[0_1px_6px_rgba(249,115,22,0.45)] pointer-events-none"
        style={{ scaleX }}
      />
      
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center" id="navbar">
        <a 
          href="#hero" 
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white font-serif italic group flex items-center gap-1 select-none"
        >
          Devika.
        </a>
        
        <div className="hidden md:flex items-center space-x-1 p-1 bg-surface/50 dark:bg-slate-900/30 rounded-full shadow-neu-pressed dark:shadow-neu-pressed-dark relative">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                className={`relative px-5 py-2 rounded-full transition-colors text-xs font-bold font-display z-10 ${
                  isActive
                    ? "text-solar-orange dark:text-white"
                    : "text-slate-600 dark:text-slate-400 hover:text-solar-orange dark:hover:text-amber-500"
                }`}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    className="absolute inset-0 bg-white dark:bg-slate-800/80 rounded-full shadow-sm border border-slate-100 dark:border-slate-800 z-[-1]"
                  />
                )}
                {item.label}
              </a>
            );
          })}
        </div>

        <button
          id="dark-light-toggle"
          aria-label="Toggle dark mode"
          className="w-10 h-10 flex items-center justify-center rounded-full neu-btn-flat text-slate-600 dark:text-slate-300"
          onClick={toggleDarkMode}
        >
          <span className="material-icons-outlined text-xl">
            {isDark ? "light_mode" : "dark_mode"}
          </span>
        </button>
      </nav>
    </header>
    </>
  );
}
