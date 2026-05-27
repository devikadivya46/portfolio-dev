import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects, PORTFOLIO_DOODLE_HEADER } from "../data";
import GithubStatsCard from "./GithubStatsCard";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const headingContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const headingItemVariants = {
    hidden: { y: 35, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const projectCardVariants = (delay: number) => ({
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 14,
        delay,
      },
    },
  });

  // Calculate unique filters dynamically from standard project data tech stacks
  const filterOptions = ["All", ...Array.from(new Set(projects.flatMap((p) => p.techStack)))];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.techStack.includes(activeFilter));

  return (
    <section className="py-20 sm:py-24 lg:py-32 relative" id="projects">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8"
          variants={headingContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex flex-col items-start">
            <motion.span
              className="inline-block bg-orange-100 dark:bg-orange-900/30 text-solar-orange px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-neu-btn font-display select-none"
              variants={headingItemVariants}
            >
              Client &amp; Personal Works
            </motion.span>
            <motion.h2
              className="text-4xl sm:text-5xl md:text-8xl font-bold max-w-4xl leading-tight text-slate-800 dark:text-white tracking-tight font-display"
              variants={headingItemVariants}
            >
              Crafting digital tools with impact.
            </motion.h2>
          </div>
          <motion.div
            className="hidden md:block"
            variants={headingItemVariants}
          >
            <img
              alt="Character holding a board doodle"
              className="w-40 h-40 object-contain transform -rotate-6 hover:rotate-0 transition-transform duration-500 select-none pointer-events-none"
              src={PORTFOLIO_DOODLE_HEADER}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </motion.div>

        {/* Dynamic Tech Filter Row */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-12 sm:mb-16 py-4 px-4 sm:px-6 neu-card rounded-2xl">
          <span className="text-[10px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-extrabold font-display">
            Filter:
          </span>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((tech) => {
              const isActive = activeFilter === tech;
              return (
                <motion.button
                  key={tech}
                  onClick={() => setActiveFilter(tech)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95, y: 1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className={`px-4 py-2.5 rounded-xl text-xs font-bold font-display cursor-pointer relative select-none transition-colors duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-300 hover:text-solar-orange bg-slate-50 dark:bg-slate-900/25 hover:bg-slate-100/50"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeProjectFilter"
                      className="absolute inset-0 bg-solar-orange rounded-xl z-0 shadow-md border border-orange-600/10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tech}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mx-auto grid max-w-6xl md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isSecond = idx === 1;
              return (
                <motion.div
                  layout
                  key={project.id}
                  className={`group relative ${isSecond ? "pt-0 md:pt-16" : ""}`}
                  variants={projectCardVariants(0)}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Neomorphic Project Card Canvas */}
                  <div className="neu-card p-4 sm:p-5 rounded-[24px] mb-8 sm:mb-10 overflow-hidden transform group-hover:translate-y-[-6px] transition-all duration-500 relative">
                    
                    {/* Outer Tech Display Symbol */}
                    <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center relative shadow-neu-pressed dark:shadow-neu-pressed-dark mb-5 sm:mb-6">
                      <span className="material-icons-outlined text-slate-200 dark:text-slate-800 text-7xl sm:text-8xl lg:text-9xl absolute opacity-28 select-none transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700 ease-out">
                        {project.icon}
                      </span>
                      
                      {/* Floating Tech Badges */}
                      <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-20">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="bg-white/80 dark:bg-slate-900/90 backdrop-blur-sm shadow-sm text-slate-700 dark:text-slate-300 text-[9px] sm:text-[10px] font-bold font-display px-2 py-1 rounded-md">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="relative z-10 text-center px-4">
                        <div className="text-solar-orange font-black uppercase tracking-[0.18em] text-[9px] sm:text-[10px] mb-2 font-display">
                          {project.year}
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-white font-display">
                          {project.title}
                        </div>
                      </div>
                    </div>

                    {/* Bullet points detailing exact work contributions */}
                    <div className="space-y-3 px-1 sm:px-2 mb-6 sm:mb-7">
                      <p className="text-slate-500 dark:text-slate-400 font-semibold text-xs uppercase tracking-wider font-display">Key Highlights</p>
                      <ul className="space-y-2.5">
                        {project.bullets.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex gap-3 text-[13px] sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                            <span className="material-icons-outlined text-solar-orange text-sm sm:text-base select-none mt-0.5 shrink-0">
                              check_circle
                            </span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* GitHub Repository Telemetry Stats Section */}
                    {project.githubRepo && (
                      <div className="mb-6 sm:mb-7 px-1 sm:px-2">
                        <GithubStatsCard 
                          githubRepo={project.githubRepo} 
                          fallbackStats={project.fallbackStats}
                        />
                      </div>
                    )}

                    {/* Live URL Link Button */}
                    {project.demoUrl && (
                      <div className="px-1 sm:px-2">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          referrerPolicy="no-referrer"
                          className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-solar-orange hover:text-orange-600 transition-colors font-display"
                        >
                          <span className="material-symbols-outlined text-sm leading-none">rocket_launch</span>
                          See live implementation
                        </a>
                      </div>
                    )}
                  </div>

                  {/* Floating Celestial Line Art Doodle */}
                  {project.doodleUrl && (
                    <div className={`absolute select-none pointer-events-none opacity-60 z-20 hidden lg:block ${project.positionClass}`}>
                      <img
                        alt={project.imageAlt}
                        className="w-full h-full object-contain"
                        src={project.doodleUrl}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
