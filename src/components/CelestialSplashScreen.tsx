import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Orbit, Compass, Cpu } from "lucide-react";

export default function CelestialSplashScreen() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      // Using an in-memory window property. This resets on a full browser page refresh
      // but prevents duplicate mounts, double runs in React Strict Mode, and HMR re-triggering.
      return !(window as any).__celestial_splash_completed;
    }
    return true;
  });
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    "Calibrating Star Coordinates...",
    "Igniting Quantum Engines...",
    "Aligning Creative Orbit...",
    "Mapping Developer Constellations...",
    "System Fully Aligned"
  ];

  useEffect(() => {
    if (!isVisible) return;

    // Progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          if (typeof window !== "undefined") {
            (window as any).__celestial_splash_completed = true;
          }
          setTimeout(() => {
            setIsVisible(false);
          }, 600);
          return 100;
        }
        const increment = Math.floor(Math.random() * 12) + 6;
        return Math.min(100, prev + increment);
      });
    }, 180);

    return () => {
      clearInterval(interval);
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    // Sync status updates with progress milestones
    let nextIndex = 0;
    if (progress < 25) {
      nextIndex = 0;
    } else if (progress < 50) {
      nextIndex = 1;
    } else if (progress < 75) {
      nextIndex = 2;
    } else if (progress < 95) {
      nextIndex = 3;
    } else {
      nextIndex = 4;
    }

    if (nextIndex !== statusIndex) {
      setStatusIndex(nextIndex);
    }
  }, [progress, isVisible]);

  // Lock scroll during splash screen loading
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="celestial-splash-screen"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
          }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0C0908] text-[#F5F1EB] overflow-hidden select-none"
        >
          {/* Subtle Ambient Nebula Background */}
          <div className="absolute inset-0 bg-radial-gradient from-amber-500/10 via-transparent to-transparent opacity-40 blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-600/5 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Shooting Stars Background Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
            <span className="absolute top-[10%] left-[20%] w-[2px] h-[80px] bg-gradient-to-b from-white to-transparent rotate-45 animate-[pulse_2s_infinite]" />
            <span className="absolute top-[40%] right-[15%] w-[1.5px] h-[100px] bg-gradient-to-b from-amber-200 to-transparent rotate-[35deg] animate-[pulse_3s_infinite]" />
          </div>

          <div className="relative flex flex-col items-center max-w-md w-full px-6 text-center">
            {/* Pulsing Animated Celestial Emblem */}
            <div className="relative mb-8 flex items-center justify-center">
              {/* Outer spinning ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute w-24 h-24 rounded-full border border-dashed border-solar-orange/30 dark:border-amber-500/20"
              />
              {/* Mid spinning ring */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-18 h-18 rounded-full border border-solar-orange/40 dark:border-amber-500/30"
              />
              
              {/* Glowing inner core */}
              <motion.div
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#FF8A4B] to-[#D84C1B] flex items-center justify-center shadow-[0_0_40px_rgba(255,138,75,0.4)]"
              >
                <Sparkles className="w-5 h-5 text-[#F5F1EB]" />
              </motion.div>
            </div>

            {/* Title / Brand */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-sans text-2xl font-black uppercase tracking-[0.24em] bg-gradient-to-r from-white via-[#F5F1EB] to-amber-200 bg-clip-text text-transparent mb-1"
            >
              Devika S.N
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[10px] font-mono tracking-[0.3em] uppercase text-solar-orange dark:text-amber-500 mb-8"
            >
              Portfolio Spacecraft
            </motion.p>

            {/* Status indicators */}
            <div className="h-6 flex items-center justify-center mb-4">
              <AnimatePresence mode="wait">
                <motion.p
                  key={statusIndex}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 0.8, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="text-xs font-mono text-[#E8E0D7] opacity-80 tracking-wide flex items-center gap-2"
                >
                  {statusIndex === 0 && <Orbit className="w-3.5 h-3.5 animate-spin text-solar-orange" />}
                  {statusIndex === 1 && <Cpu className="w-3.5 h-3.5 animate-pulse text-solar-orange" />}
                  {statusIndex === 2 && <Compass className="w-3.5 h-3.5 animate-spin text-solar-orange" />}
                  {statusIndex >= 3 && <Sparkles className="w-3.5 h-3.5 animate-pulse text-solar-orange" />}
                  {statuses[statusIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Clean, minimalist progress line */}
            <div className="w-full bg-[#1C1715] h-[2px] rounded-full overflow-hidden mb-3 relative border border-white/5">
              <motion.div 
                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#FF8A4B] to-amber-400"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              />
            </div>

            {/* Percentage Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[11px] font-mono text-solar-orange dark:text-amber-500 font-bold tracking-widest"
            >
              {progress}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
