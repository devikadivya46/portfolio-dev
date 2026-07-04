import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ProjectItem } from "../types";
import GithubStatsCard from "./GithubStatsCard";

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  // Lock body scroll while modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-[6px]"
            onClick={onClose}
            aria-hidden
          />

          {/* Panel — slides up from bottom */}
          <motion.div
            key="panel"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring" as const, stiffness: 280, damping: 32 }}
            className="fixed inset-x-0 bottom-0 top-[4.5rem] z-[201] flex flex-col overflow-hidden rounded-t-[28px] premium-card premium-shadow"
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} — Deep Dive`}
          >
            {/* Drag handle */}
            <div className="flex justify-center pt-3 pb-1 shrink-0">
              <div className="w-10 h-1 rounded-full bg-slate-300 dark:bg-slate-700" />
            </div>

            {/* ── Sticky header bar ──────────────────────────────── */}
            <div className="shrink-0 px-5 sm:px-8 py-4 flex items-center justify-between border-b border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/40 backdrop-blur-sm">
              <div className="flex items-center gap-4 min-w-0">
                <button
                  onClick={onClose}
                  className="flex items-center gap-1.5 text-xs font-bold font-display text-slate-500 dark:text-slate-400 hover:text-gradient-start transition-colors shrink-0"
                  aria-label="Close project detail"
                >
                  <span className="material-icons-outlined text-base leading-none">arrow_back</span>
                  Back
                </button>

                <div className="w-px h-5 bg-slate-200 dark:bg-slate-800 shrink-0" />

                <div className="min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gradient-start font-display truncate">
                    {project.category}
                  </div>
                  <h2 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white font-display truncate">
                    {project.title}
                  </h2>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold font-display text-gradient-start hover:text-gradient-end transition-colors"
                  >
                    <span className="material-symbols-outlined text-sm leading-none">rocket_launch</span>
                    Live Demo
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full neu-btn-flat flex items-center justify-center text-slate-500 hover:text-slate-800 dark:hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <span className="material-icons-outlined text-base leading-none">close</span>
                </button>
              </div>
            </div>

            {/* ── Scrollable body ────────────────────────────────── */}
            <div className="flex-1 overflow-y-auto overscroll-contain px-5 sm:px-8 py-8">
              <div className="mx-auto max-w-4xl space-y-10 pb-16">

                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#1C1310] text-white text-[10px] font-bold font-display tracking-widest">
                    {project.year}
                  </span>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-white dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 text-[10px] font-bold font-display text-slate-600 dark:text-slate-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <div>
                  <SectionLabel icon="info" text="Overview" />
                  <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mt-3">
                    {project.description}
                  </p>
                </div>

                {/* Key highlights */}
                <div>
                  <SectionLabel icon="check_circle" text="Key Highlights" />
                  <ul className="mt-4 space-y-3">
                    {project.bullets.map((bullet, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 + i * 0.08, duration: 0.35 }}
                        className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed"
                      >
                        <span className="material-icons-outlined text-solar-orange text-base shrink-0 mt-0.5 select-none">
                          check_circle
                        </span>
                        <span>{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Technical trade-offs */}
                {project.tradeoffs && project.tradeoffs.length > 0 && (
                  <div>
                    <SectionLabel icon="balance" text="Technical Trade-offs" />
                    <div className="mt-4 space-y-3">
                      {project.tradeoffs.map((t, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.08 + i * 0.1, duration: 0.35 }}
                          className="flex gap-3 p-4 rounded-2xl bg-white/70 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/40 group hover:border-orange-200 dark:hover:border-orange-900/40 transition-colors duration-300"
                        >
                          <span className="text-solar-orange font-black font-mono text-xs shrink-0 mt-0.5 select-none">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{t}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* GitHub telemetry */}
                {project.githubRepo && (
                  <div>
                    <SectionLabel icon="monitoring" text="Repository Telemetry" />
                    <div className="mt-4">
                      <GithubStatsCard
                        githubRepo={project.githubRepo}
                        fallbackStats={project.fallbackStats}
                      />
                    </div>
                  </div>
                )}

                {/* Live demo link — mobile footer */}
                {project.demoUrl && (
                  <div className="sm:hidden pt-2">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-solar-orange hover:text-orange-600 transition-colors font-display"
                    >
                      <span className="material-symbols-outlined text-sm leading-none">rocket_launch</span>
                      See live implementation
                    </a>
                  </div>
                )}

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function SectionLabel({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-2 pb-3 border-b border-dashed border-slate-200 dark:border-slate-800">
      <span className="material-symbols-outlined text-solar-orange text-lg leading-none">{icon}</span>
      <h3 className="text-sm font-bold text-slate-700 dark:text-slate-200 uppercase tracking-wider font-display">
        {text}
      </h3>
    </div>
  );
}
