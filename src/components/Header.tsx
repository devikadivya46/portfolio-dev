import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "motion/react";

export default function Header() {
  const [isDark, setIsDark] = useState<boolean>(false);
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

  return (
    <>
      {/* Scroll-Linked Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-solar-orange via-amber-500 to-solar-orange origin-left z-[100] shadow-[0_1px_6px_rgba(249,115,22,0.45)] pointer-events-none"
        style={{ scaleX }}
      />
      
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center" id="navbar">
        <a href="#hero" className="text-xl font-bold tracking-tight text-slate-800 dark:text-white font-display">
          Devika S. N.
        </a>
        
        <div className="hidden md:flex items-center space-x-1 p-1 bg-surface/50 dark:bg-slate-900/30 rounded-full shadow-neu-pressed dark:shadow-neu-pressed-dark">
          <a
            className="px-6 py-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-solar-orange dark:hover:text-solar-orange transition-colors text-sm font-semibold font-display"
            href="#about"
          >
            About
          </a>
          <a
            className="px-6 py-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-solar-orange dark:hover:text-solar-orange transition-colors text-sm font-semibold font-display"
            href="#projects"
          >
            Works
          </a>
          <a
            className="px-6 py-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-solar-orange dark:hover:text-solar-orange transition-colors text-sm font-semibold font-display"
            href="#achievements"
          >
            Laurels
          </a>
          <a
            className="px-6 py-2 rounded-full text-slate-700 dark:text-slate-300 hover:text-solar-orange dark:hover:text-solar-orange transition-colors text-sm font-semibold font-display"
            href="#contact"
          >
            Contact
          </a>
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
