import { motion } from "motion/react";
import { socialLinks } from "../data";
// @ts-ignore
import devikaPortrait from "../assets/images/devika_portrait_1779472832674.png";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 14 },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12, delay: 0.4 },
    },
  };

  return (
    <section className="relative pt-32 pb-16 md:py-24 lg:py-32 xl:py-40 min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      
      {/* Soft warm golden-yellow sunset gradient glow behind (Recreates the sky warmth from her photo) */}
      <div className="absolute top-[40%] right-[10%] w-[280px] sm:w-[450px] md:w-[600px] lg:w-[800px] aspect-square rounded-full bg-gradient-to-tr from-amber-200/50 via-amber-100/25 to-transparent blur-3xl dark:from-orange-500/10 dark:via-amber-500/5 dark:to-transparent pointer-events-none select-none z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10 w-full flex flex-col justify-center">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 items-center w-full">
          
          {/* Left Column: Exquisite Editorial Typography Column */}
          <div className="col-span-12 lg:col-span-6 flex flex-col items-start justify-center text-left relative z-25 order-2 lg:order-1">
            
            {/* Live Status Badge */}
            <motion.div 
              variants={badgeVariants}
              initial="hidden"
              animate="visible"
              className="mb-6"
            >
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50/80 dark:bg-slate-900/40 backdrop-blur-md border border-orange-100/60 dark:border-slate-800/60 shadow-sm text-xs font-semibold text-orange-700 dark:text-amber-400 select-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-505 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                Available for new opportunities
              </div>
            </motion.div>

            {/* Typography Stack */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col select-none"
            >
              {/* Elegant cursive greeting */}
              <motion.h3 
                variants={itemVariants}
                className="font-serif italic font-normal tracking-tight text-5xl md:text-6xl text-slate-800 dark:text-slate-205 mb-4 leading-none"
              >
                Hello, I'm
              </motion.h3>

              {/* Stacked big editorial serif names */}
              <motion.h1 
                variants={itemVariants}
                className="font-serif font-bold text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.08] text-slate-900 dark:text-white flex flex-col gap-1.5"
              >
                <span className="text-[#5C2D24] dark:text-orange-400">Creative.</span>
                <span className="text-slate-800 dark:text-slate-200">Curious.</span>
                <span className="text-slate-810 dark:text-slate-300">Always Learning.</span>
              </motion.h1>

              {/* Small description aligned under heading */}
              <motion.p 
                variants={itemVariants}
                className="mt-6 text-sm md:text-base font-medium text-slate-600 dark:text-slate-400 font-display leading-relaxed max-w-md pl-1 border-l-2 border-orange-500/30 dark:border-orange-500/20"
              >
                A passionate designer and programmer who loves turning ideas into meaningful experiences.
              </motion.p>

              {/* Action Buttons & Outlined Social Circles */}
              <motion.div 
                variants={itemVariants}
                className="mt-10 flex flex-wrap items-center gap-6 pl-1"
              >
                {/* Clean rectangular linear button "View My Work ->" */}
                <motion.a
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-3.5 border-2 border-slate-900/90 dark:border-white/90 text-slate-900 dark:text-white font-display text-xs font-black uppercase tracking-wider rounded-md hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950 transition-all duration-300 flex items-center gap-2.5 cursor-pointer z-30"
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  View My Work
                  <span className="material-icons-outlined text-sm font-bold">arrow_forward</span>
                </motion.a>

                {/* Circles aligned horizontally matching (in) (Be) (ig) style */}
                <div className="flex gap-2.5">
                  {socialLinks.map((social) => {
                    // Match short names or display glyphs
                    let displayName = social.name === "LinkedIn" ? "in" : social.name === "GitHub" ? "git" : "ig";
                    return (
                      <motion.a
                        key={social.name}
                        whileHover={{ scale: 1.15, y: -2 }}
                        whileTap={{ scale: 0.92 }}
                        className="w-10 h-10 rounded-full border border-slate-300 hover:border-orange-500 dark:border-slate-800 dark:hover:border-amber-500 flex items-center justify-center text-xs font-bold font-display text-slate-600 dark:text-slate-400 hover:text-solar-orange dark:hover:text-amber-500 select-none transition-colors"
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.name}
                      >
                        {displayName}
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Immersive Full representation of the uploaded artwork */}
          <div className="col-span-12 lg:col-span-6 flex justify-center items-center relative z-10 order-1 lg:order-2">
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[500px] aspect-[3/4] flex items-center justify-center p-2.5 select-none"
            >
              
              {/* Luxury Frame Container with custom shadows */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400/10 via-orange-400/5 to-transparent rounded-[40px] border border-slate-200/40 dark:border-slate-800/20 shadow-2xl overflow-hidden shadow-orange-500/5 dark:shadow-none p-2 pointer-events-none z-0" />

              {/* The high-fidelity portrait core */}
              <div className="relative w-full h-full rounded-[34px] overflow-hidden bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-1 border border-slate-200/50 dark:border-slate-800/40 shadow-inner">
                <img
                  src={devikaPortrait}
                  alt="Devika Portrait"
                  className="w-full h-full object-cover rounded-[30px] filter contrast-[1.03] hover:scale-[1.03] transition-transform duration-700 ease-out select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* CSS Vector Hand-Drawn Doodle Stars (Mimicking sparkles overlay in portrait image) */}
              <div className="absolute top-[8%] left-[6%] z-20 animate-pulse" style={{ animationDuration: '3.5s' }}>
                <svg className="w-6 h-6 text-orange-400/80 dark:text-orange-400/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" fill="currentColor" />
                </svg>
              </div>
              <div className="absolute top-[18%] right-[8%] z-20 animate-pulse" style={{ animationDuration: '5s' }}>
                <svg className="w-4 h-4 text-orange-400/70" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </div>
              <div className="absolute bottom-[24%] left-[4%] z-20 animate-bounce" style={{ animationDuration: '4.5s' }}>
                <span className="material-symbols-outlined text-amber-500/45 dark:text-amber-500/25 text-3xl select-none">sparkles</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
