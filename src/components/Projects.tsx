import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data";
import { ProjectItem } from "../types";
import ProjectDetailModal from "./ProjectDetailModal";

const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

const headingVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
} as const;

const headingItemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 80, damping: 15 } },
} as const;

/* ── Icon area gradient config per project (by index) ──────── */
const cardGradients = [
  "from-orange-50 to-amber-50 dark:from-orange-950/20 dark:to-amber-950/10",
  "from-slate-50 to-blue-50/30 dark:from-slate-900/40 dark:to-blue-950/10",
  "from-violet-50/40 to-indigo-50/30 dark:from-violet-950/15 dark:to-indigo-950/10",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterOptions = [
    "All",
    ...Array.from(new Set(projects.flatMap((p) => p.techStack))),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.techStack.includes(activeFilter));

  return (
    <>
      <section className="py-20 sm:py-24 lg:py-32 relative" id="projects">
        <div className="container mx-auto px-4 sm:px-6">

          {/* ── Section header ───────────────────────────────────── */}
          <motion.div
            className="mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="flex flex-col items-start">
              <motion.span
                variants={headingItemVariants}
                className="inline-block bg-orange-100 dark:bg-orange-900/30 text-solar-orange px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-4 shadow-neu-btn font-display select-none"
              >
                Client &amp; Personal Works
              </motion.span>
              <motion.h2
                variants={headingItemVariants}
                className="text-3xl sm:text-4xl font-serif font-bold text-slate-800 dark:text-white"
              >
                Selected Projects
              </motion.h2>
              <motion.p
                variants={headingItemVariants}
                className="mt-3 text-sm text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed"
              >
                Click <span className="font-semibold text-solar-orange">Explore Deep Dive</span> on any card for architecture details, GitHub telemetry, and trade-off analysis.
              </motion.p>
            </div>
          </motion.div>

          {/* ── Filter row ───────────────────────────────────────── */}
          <div className="flex flex-wrap items-center gap-3 mb-12 sm:mb-16 py-4 px-4 sm:px-5 neu-card rounded-2xl">
            <span className="text-[9px] uppercase tracking-widest text-slate-400 dark:text-slate-500 font-extrabold font-display shrink-0">
              Filter:
            </span>
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((tech) => {
                const isActive = activeFilter === tech;
                return (
                  <motion.button
                    key={tech}
                    onClick={() => setActiveFilter(tech)}
                    whileHover={{ scale: 1.05, y: -1 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className={`px-3.5 py-2 rounded-xl text-[11px] font-bold font-display cursor-pointer relative select-none transition-colors duration-250 ${
                      isActive
                        ? "text-white"
                        : "text-slate-600 dark:text-slate-300 hover:text-solar-orange bg-slate-50 dark:bg-slate-900/25 hover:bg-slate-100/50"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeProjectFilter"
                        className="absolute inset-0 bg-solar-orange rounded-xl z-0 shadow-md"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{tech}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>

          {/* ── Preview card grid ─────────────────────────────────── */}
          <div className="mx-auto grid max-w-5xl grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ y: 36, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.94, transition: { duration: 0.18 } }}
                  transition={{ type: "spring", stiffness: 72, damping: 14, delay: idx * 0.08 }}
                  className="group"
                >
                  <div className="premium-card overflow-hidden flex flex-col h-full transition-all duration-400 group-hover:-translate-y-2">

                    {/* ── Image / icon area ──────────────────────── */}
                    <div
                      className={`relative aspect-[16/9] flex items-center justify-center overflow-hidden bg-gradient-to-br ${
                        cardGradients[idx % cardGradients.length]
                      }`}
                    >
                      {/* Project preview image if available */}
                      {project.previewUrl ? (
                        <>
                          <img
                            src={project.previewUrl}
                            alt={project.imageAlt}
                            className="w-full h-full object-cover scale-[1.03] group-hover:scale-110 transition-transform duration-700 ease-out"
                            referrerPolicy="no-referrer"
                          />
                          {/* Gradient overlay so badges stay readable */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
                        </>
                      ) : (
                        <>
                          {/* Decorative icon fallback */}
                          <span className="material-icons-outlined text-slate-200/60 dark:text-slate-700/50 text-[120px] absolute select-none transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-700 ease-out">
                            {project.icon}
                          </span>
                        </>
                      )}

                      {/* Doodle art */}
                      {project.doodleUrl && (
                        <div className={`absolute select-none pointer-events-none opacity-40 z-10 hidden lg:block ${project.positionClass ?? "bottom-0 right-0 w-28 h-28"}`}>
                          <img
                            alt=""
                            src={project.doodleUrl}
                            className="w-full h-full object-contain"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                      )}

                      {/* Year badge */}
                      <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full bg-[#1C1310]/80 backdrop-blur-sm text-white text-[9px] font-bold font-display tracking-widest select-none">
                        {project.year}
                      </div>

                      {/* AI chip for AgentVisionX */}
                      {project.id === "agentvisionx" && (
                        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-violet-600/90 backdrop-blur-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          <span className="text-[9px] font-bold text-white font-display tracking-wider select-none">AI</span>
                        </div>
                      )}
                      {/* "In Development" chip when no live demo */}
                      {!project.demoUrl && project.id !== "clenorx" && (
                        <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/90 backdrop-blur-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                          <span className="text-[9px] font-bold text-white font-display tracking-wider select-none">In Dev</span>
                        </div>
                      )}
                    </div>

                    {/* ── Card body ──────────────────────────────── */}
                    <div className="flex flex-col flex-1 p-[18px] sm:p-5 gap-3.5">

                      {/* Tech badges */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300 text-[9px] font-bold font-display"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white font-display leading-snug">
                          {project.title}
                        </h3>
                        <p className="mt-1.5 text-[9px] font-bold uppercase tracking-widest text-solar-orange font-display">
                          {project.category}
                        </p>
                      </div>

                      {/* Tagline */}
                      {project.tagline && (
                        <p className="text-[13px] text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                          {project.tagline}
                        </p>
                      )}

                      {/* CTAs */}
                      <div className="mt-auto flex items-center gap-3 pt-2">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="group/btn premium-button inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-[11px] font-bold text-white font-display shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-orange-600/50"
                        >
                          Explore Deep Dive
                          <span className="transition-transform duration-300 group-hover/btn:translate-x-0.5">
                            <ArrowRightIcon />
                          </span>
                        </button>

                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 px-3 py-2 text-[11px] font-bold text-slate-600 dark:text-slate-300 font-display transition-all duration-250 hover:border-solar-orange hover:text-solar-orange hover:-translate-y-0.5"
                            title="Live Demo"
                          >
                            <span className="material-symbols-outlined text-sm leading-none">rocket_launch</span>
                            Live
                          </a>
                        )}
                      </div>

                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>
      </section>

      {/* Deep dive modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
