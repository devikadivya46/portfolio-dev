import { useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  educationList,
  certifications,
  portfolioDocuments,
  extracurriculars,
  languages,
} from "../data";

type TabType = "education" | "certifications" | "documents" | "extracurricular" | "languages";
type PreviewDoc = {
  title: string;
  href: string;
};

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
      transition={{ type: "spring" as const, stiffness: 80, damping: 16, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>("education");
  const [previewDoc, setPreviewDoc] = useState<PreviewDoc | null>(null);

  const openPreview = (doc: PreviewDoc) => {
    setPreviewDoc(doc);
  };

  const previewModal = (
    <AnimatePresence>
      {previewDoc && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/80 p-3 sm:p-5 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="flex h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.97 }}
            transition={{ type: "spring" as const, stiffness: 260, damping: 28 }}
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-slate-50 px-4 py-3 sm:px-5">
              <div className="flex min-w-0 items-center gap-2">
                <span className="material-icons-outlined text-solar-orange">picture_as_pdf</span>
                <h3 className="truncate text-sm font-black text-slate-800 font-display">
                  {previewDoc.title}
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={encodeURI(previewDoc.href)}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-[#FF7C00] px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-transform hover:-translate-y-0.5"
                >
                  Open
                  <span className="material-icons-outlined text-sm">open_in_new</span>
                </a>
                <button
                  type="button"
                  onClick={() => setPreviewDoc(null)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-200 px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-slate-700 transition-colors hover:bg-slate-300 hover:text-slate-950 cursor-pointer"
                  title="Back to portfolio"
                >
                  <span className="material-icons-outlined text-sm">arrow_back</span>
                  Back
                </button>
              </div>
            </div>
            <iframe
              src={`${encodeURI(previewDoc.href)}#toolbar=1&navpanes=0`}
              title={`${previewDoc.title} PDF preview`}
              className="h-full w-full bg-slate-100"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden" id="about">
      <div className="container mx-auto px-4 sm:px-6">

        {/* ── Row 1: Intro text ───────────────────────── */}
        <div className="flex flex-col items-center justify-center text-center mb-16 sm:mb-20">

          {/* Intro text */}
          <div className="w-full max-w-3xl flex flex-col items-center gap-4">
            <div className="relative overflow-visible w-full flex flex-col items-center">
              <span className="absolute -top-4 right-1/2 translate-x-1/2 text-[7rem] sm:text-[9rem] font-black leading-none select-none pointer-events-none hidden sm:block"
                style={{ color: "rgba(28,19,16,0.038)", fontFamily: "'Outfit',sans-serif" }}>02</span>

              <FadeUp delay={0}>
                <div className="flex items-center gap-3 mb-5 justify-center">
                  <div className="w-8 h-[2px] rounded-full bg-[#FF7C00]" />
                  <span className="inline-block bg-orange-100 text-[#FF7C00] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.22em] font-display select-none">
                    The Person Behind the Work
                  </span>
                </div>
              </FadeUp>

              <FadeUp delay={0.1}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold leading-tight text-[#1C1310] dark:text-[#F5F1EB] tracking-tight mb-3">
                  Driven by Code, Guided by Design.
                </h2>
                <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-[#FF8A4B] to-[#D84C1B] mb-4 mx-auto" />
              </FadeUp>

              <FadeUp delay={0.18}>
                <p className="text-[#5F5650] dark:text-[#CBBBB0] text-base sm:text-lg leading-relaxed max-w-xl text-center">
                  B.Tech CSE student building clean, purposeful digital products — with a sharp eye for design and a love for well-crafted code.
                </p>
              </FadeUp>
            </div>

            {/* Inline micro-stats */}
            <FadeUp delay={0.26}>
              <div className="flex flex-wrap items-center justify-center gap-0 mt-4">
                {[
                  { label: "CGPA", value: "8.2 / 10" },
                  { label: "Degree", value: "B.Tech CSE" },
                  { label: "Batch", value: "2024–2028" },
                ].map((stat, i, arr) => (
                  <div key={i} className="flex items-center">
                    <div className="px-6 flex flex-col items-center">
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 font-display font-bold">{stat.label}</span>
                      <span className="text-sm font-bold text-slate-800 dark:text-white font-display mt-0.5">{stat.value}</span>
                    </div>
                    {i < arr.length - 1 && <div className="w-px h-8 bg-slate-200 dark:bg-slate-700" />}
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
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
            transition={{ type: "spring" as const, stiffness: 80, damping: 18, delay: 0.1 }}
          >
            <div className="premium-card rounded-3xl p-5">
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
                          ? "bg-gradient-to-r from-gradient-start to-gradient-end text-white premium-shadow-mid"
                          : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900/20 hover:text-gradient-start"
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
            transition={{ type: "spring" as const, stiffness: 80, damping: 18, delay: 0.18 }}
          >
            <div className="premium-card p-7 sm:p-9 rounded-3xl min-h-[340px]">
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
                          className="p-5 premium-card rounded-2xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <span className="material-icons-outlined absolute right-4 top-4 text-emerald-500 text-base">
                            lock_open
                          </span>
                          <h4 className="font-bold text-slate-800 dark:text-slate-100 font-display text-sm pr-6 leading-snug">
                            {cert.title}
                          </h4>
                          <p className="text-xs text-slate-400 font-display mt-1.5 font-medium">{cert.issuer}</p>
                          {cert.link && (
                            <button
                              type="button"
                              onClick={() => openPreview({ title: cert.title, href: cert.link! })}
                              className="inline-flex items-center gap-1.5 mt-3 text-xs font-bold text-solar-orange hover:text-orange-500 transition-colors cursor-pointer"
                            >
                              Preview PDF
                              <span className="material-icons-outlined text-[14px]">visibility</span>
                            </button>
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
                        <button
                          type="button"
                          key={idx}
                          onClick={() => openPreview({ title: doc.title, href: doc.href })}
                          className="p-5 neu-card rounded-2xl relative overflow-hidden group transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg text-left cursor-pointer"
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
                            Preview PDF
                            <span className="material-icons-outlined text-[14px]">visibility</span>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-solar-orange to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </button>
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

      {createPortal(previewModal, document.body)}
    </section>
  );
}
