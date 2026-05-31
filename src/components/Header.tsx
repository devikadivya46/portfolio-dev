import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "motion/react";

export default function Header() {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
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
    { id: "achievements", label: "Awards" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll-Linked Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-solar-orange via-amber-500 to-solar-orange origin-left z-[100] shadow-[0_1px_6px_rgba(249,115,22,0.45)] pointer-events-none"
        style={{ scaleX }}
      />
      
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex flex-col gap-3" id="navbar">
        <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("hero");
            }}
            className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 dark:text-white font-serif italic flex items-center gap-1 select-none"
          >
            Devika.
          </a>

          {/* System status micro-badge */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200/70 dark:border-emerald-800/40 select-none">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_6px_rgba(34,197,94,0.8)]" />
            </span>
            <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400 font-display">
              Available for Hire
            </span>
          </div>
        </div>
        
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
                  handleNavClick(item.id);
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

        {/* Menu button — all screen sizes */}
        <button
          className="w-10 h-10 flex items-center justify-center rounded-full neu-btn-flat text-[#1C1310]"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="material-icons-outlined text-xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>
        </div>

      </nav>
    </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
            <motion.nav
              className="absolute top-20 left-4 right-4 bg-[#F7F4EF] dark:bg-[#1a1a1e] rounded-3xl p-5 shadow-[0_20px_60px_rgba(28,19,16,0.18)] border border-white/60 dark:border-slate-800/40"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            >
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.id);
                        setIsMenuOpen(false);
                      }}
                      className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-bold font-display transition-all ${
                        isActive
                          ? "bg-[#FF7C00] text-white shadow-[0_4px_14px_rgba(255,124,0,0.35)]"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-[#FF7C00]"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
