import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  educationList,
  certifications,
  portfolioDocuments,
  extracurriculars,
  languages,
} from "../data";
import DoodleAbout from "./DoodleAbout";

type TabType = "education" | "certifications" | "documents" | "extracurricular" | "languages";

const menuItems: { id: TabType; label: string; icon: string }[] = [
  { id: "education", label: "Education", icon: "school" },
  { id: "certifications", label: "Certifications", icon: "verified_user" },
  { id: "documents", label: "Documents", icon: "description" },
  { id: "extracurricular", label: "Extracurricular", icon: "star_rate" },
  { id: "languages", label: "Languages", icon: "translate" },
];

function FadeUp({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ y: 28, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 80, damping: 16, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>("education");

  return (
    <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden" id="about">
      <div className="container mx-auto px-4 sm:px-6">

        {/* ── Row 1: Intro text + Doodle ───────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-20">

          {/* Intro text — left */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col gap-4">
            <FadeUp delay={0}>
              <span className="inline-block bg-orange-100 dark:bg-orange-900/30 text-solar-orange px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-neu-btn font-display select-none">
                About Me &amp; Credentials
              </span>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-slate-800 dark:text-white font-display tracking-tight">
                A deep love for minimal design, clean code &amp; problem solving
              </h2>
            </FadeUp>

            <FadeUp delay={0.18}>
              <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed max-w-xl">
                I thrive on the challenge of finding the perfect balance between creativity and practicality. With a CGPA of 8.2 and a deep focus on React, Node.js, and modern web technologies, I aim to create intuitive user experiences that actually matter.
              </p>
            </FadeUp>

            {/* Inline micro-stats */}
            <FadeUp delay={0.26}>
              <div className="flex flex-wrap items-center gap-0 mt-2">
                {[
                  { label: "CGPA", value: "8.2 / 10" },
                  { label: "Degree", value: "B.Tech CSE" },
                  { label: "Batch", value: "2024–2028" },
                ].map((stat, i, arr) => (
                  <div key={i} className="flex items-center">
                    <div className="pr-5 pl-0 first:pl-0 flex flex-col">
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 font-display font-bold">{stat.label}</span>
                      <span className="text-sm font-bold text-slate-800 dark:text-white font-display mt-0.5">{stat.value}</span>
                    </div>
                    {i < arr.length - 1 && <div className="w-px h-8 bg-slate-200 dark:bg-slate-700 mr-5" />}
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* DoodleAbout — right, compact */}
          <motion.div
            className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end"
            initial={{ scale: 0.94, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 72, damping: 16, delay: 0.12 }}
          >
            <div className="neu-card p-6 rounded-3xl w-full max-w-[360px] relative overflow-hidden">
              <div className="absolute top-4 left-4 bg-orange-100/50 dark:bg-orange-900/10 px-3 py-1 rounded-md text-[9px] font-black uppercase text-solar-orange font-display select-none z-10">
                VTU Student
              </div>
              <div className="w-full flex items-center justify-center transform hover:scale-[1.03] transition-transform duration-500">
                <DoodleAbout />
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Divider ───────────────────────────────────────────── */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent mb-12 sm:mb-16" />

        {/* ── Row 2: Sticky tab sidebar + Content ──────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Sticky tab sidebar */}
          <motion.div
            className="md:col-span-4 lg:col-span-3 md:sticky md:top-28"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.1 }}
          >
            <div className="neu-card rounded-3xl p-5">
              <span className="block text-[9px] text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.22em] font-display px-2 mb-4 select-none">
                Explore Credentials
              </span>
              <nav className="space-y-1.5" aria-label="Credentials navigation">
                {menuItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all duration-300 font-display text-left cursor-pointer group ${
                        isActive
                          ? "bg-solar-orange text-white shadow-[0_4px_14px_rgba(255,124,0,0.35)]"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/20 hover:text-solar-orange"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`material-symbols-outlined text-[18px] leading-none transition-transform duration-300 ${isActive ? "" : "group-hover:scale-110"}`}>
                          {item.icon}
                        </span>
                        {item.label}
                      </span>
                      <motion.span
                        className="material-icons-outlined text-sm"
                        animate={{ x: isActive ? 0 : -4, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        chevron_right
                      </motion.span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </motion.div>

          {/* Credentials content panel */}
          <motion.div
            className="md:col-span-8 lg:col-span-9"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.18 }}
          >
            <div className="neu-card p-7 sm:p-9 rounded-3xl min-h-[340px]">
              <AnimatePresence mode="wait">

                {activeTab === "education" && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28 }}
                    className="space-y-7"
                  >
                    <h3 className="text-base font-bold text-slate-800 dark:text-white pb-3 border-b border-dashed border-slate-200 dark:border-slate-800 font-display flex items-center gap-2">
                      <span className="material-symbols-outlined text-solar-orange text-lg">school</span>
                      Academic Timeline
                    </h3>
                    <div className="space-y-7">
                      {educationList.map((edu, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="flex flex-col items-center gap-1 pt-1 shrink-0">
                            <div className="w-2.5 h-2.5 rounded-full bg-solar-orange shadow-[0_0_10px_rgba(255,124,0,0.5)]" />
                            {idx < educationList.length - 1 && (
                              <div className="w-px flex-1 bg-gradient-to-b from-orange-200 to-transparent dark:from-orange-900/40 min-h-[32px]" />
                            )}
                          </div>
                          <div className="pb-2">
                            <div className="flex flex-wrap items-baseline gap-2">
                              <span className="font-bold text-slate-800 dark:text-slate-100 font-display text-sm sm:text-base">
                                {edu.degree}
                              </span>
                              <span className="text-[10px] bg-orange-100 dark:bg-orange-950/40 text-solar-orange px-2 py-0.5 rounded font-bold font-display">
                                {edu.score}
                              </span>
                            </div>
                            <div className="text-slate-500 dark:text-slate-400 text-sm font-semibold font-display mt-0.5">
                              {edu.institution}
                            </div>
                            <div className="text-xs text-slate-400 mt-1 font-mono">{edu.duration}</div>
                            {edu.details && (
                              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 leading-relaxed">
                                {edu.details}
                              </p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "certifications" && (
                  <motion.div
                    key="certifications"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28 }}
                    className="space-y-6"
                  >
                    <h3 className="text-base font-bold text-slate-800 dark:text-white pb-3 border-b border-dashed border-slate-200 dark:border-slate-800 font-display flex items-center gap-2">
                      <span className="material-symbols-outlined text-solar-orange text-lg">verified</span>
                      Professional Certifications
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {certifications.map((cert, idx) => (
                        <div
                          key={idx}
                          className="p-5 neu-card rounded-2xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                          <span className="material-icons-outlined absolute right-4 top-4 text-emerald-500 text-base">
                            lock_open
                          </span>
                          <h4 className="font-bold text-slate-800 dark:text-slate-100 font-display text-sm pr-6 leading-snug">
                            {cert.title}
                          </h4>
                          <p className="text-xs text-slate-400 font-display mt-1.5 font-medium">{cert.issuer}</p>
                          {cert.link && (
                            <a
                              href={encodeURI(cert.link)}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-solar-orange hover:text-orange-500 transition-colors"
                            >
                              View PDF
                              <span className="material-icons-outlined text-[14px]">open_in_new</span>
                            </a>
                          )}
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-solar-orange to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "documents" && (
                  <motion.div
                    key="documents"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28 }}
                    className="space-y-6"
                  >
                    <h3 className="text-base font-bold text-slate-800 dark:text-white pb-3 border-b border-dashed border-slate-200 dark:border-slate-800 font-display flex items-center gap-2">
                      <span className="material-symbols-outlined text-solar-orange text-lg">folder_open</span>
                      Uploaded PDFs
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {portfolioDocuments.map((doc, idx) => (
                        <a
                          key={idx}
                          href={encodeURI(doc.href)}
                          target="_blank"
                          rel="noreferrer"
                          className="p-5 neu-card rounded-2xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                        >
                          <div className="flex items-start gap-3 pr-8">
                            <span className="material-icons-outlined text-solar-orange text-lg mt-0.5">picture_as_pdf</span>
                            <div className="min-w-0">
                              <h4 className="font-bold text-slate-800 dark:text-slate-100 font-display text-sm leading-snug break-words">
                                {doc.title}
                              </h4>
                              <p className="text-xs text-slate-400 font-display mt-1 font-medium">{doc.category}</p>
                            </div>
                          </div>
                          <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-solar-orange">
                            Open PDF
                            <span className="material-icons-outlined text-[14px]">open_in_new</span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-solar-orange to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "extracurricular" && (
                  <motion.div
                    key="extracurricular"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28 }}
                    className="space-y-6"
                  >
                    <h3 className="text-base font-bold text-slate-800 dark:text-white pb-3 border-b border-dashed border-slate-200 dark:border-slate-800 font-display flex items-center gap-2">
                      <span className="material-symbols-outlined text-solar-orange text-lg">groups</span>
                      Extracurricular &amp; Leadership
                    </h3>
                    <div className="space-y-6">
                      {extracurriculars.map((activity, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="w-10 h-10 rounded-xl neu-btn-flat text-solar-orange flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-base">stars</span>
                          </div>
                          <div>
                            <div className="flex flex-wrap items-baseline gap-2">
                              <h4 className="font-bold text-slate-800 dark:text-slate-100 font-display text-sm sm:text-base">
                                {activity.role}
                              </h4>
                              <span className="text-xs text-slate-400 font-mono">({activity.duration})</span>
                            </div>
                            <div className="text-solar-orange text-[10px] font-bold font-display uppercase tracking-wider mt-0.5">
                              {activity.organization}
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                              {activity.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "languages" && (
                  <motion.div
                    key="languages"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.28 }}
                    className="space-y-6"
                  >
                    <h3 className="text-base font-bold text-slate-800 dark:text-white pb-3 border-b border-dashed border-slate-200 dark:border-slate-800 font-display flex items-center gap-2">
                      <span className="material-symbols-outlined text-solar-orange text-lg">translate</span>
                      Languages Decoded
                    </h3>
                    <div className="space-y-6 py-1">
                      {languages.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-bold text-slate-800 dark:text-white font-display">{item.name}</span>
                            <span className="text-xs text-slate-400 font-mono font-bold">{item.proficiency}</span>
                          </div>
                          <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                            <motion.div
                              className="h-full bg-gradient-to-r from-[#FF8A4B] to-[#D84C1B] rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${item.percentage}%` }}
                              transition={{ duration: 0.9, ease: "easeOut", delay: idx * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
