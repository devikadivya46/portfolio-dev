import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  educationList, 
  certifications, 
  extracurriculars, 
  languages 
} from "../data";
import DoodleAbout from "./DoodleAbout";

type TabType = "education" | "certifications" | "extracurricular" | "languages";

export default function About() {
  const [activeTab, setActiveTab] = useState<TabType>("education");

  const textVariants = {
    hidden: { x: 30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

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

  const menuItems: { id: TabType; label: string; icon: string }[] = [
    { id: "education", label: "Education", icon: "school" },
    { id: "certifications", label: "Certifications", icon: "verified_user" },
    { id: "extracurricular", label: "Extracurricular", icon: "star_rate" },
    { id: "languages", label: "Languages", icon: "translate" },
  ];

  return (
    <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden" id="about">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column (Character Vector & Tab Trigger) */}
          <motion.div
            className="col-span-12 md:col-span-5 flex flex-col gap-8 sm:gap-10"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Elegant Neomorphic Graphic Board */}
            <div className="neu-card p-6 md:p-10 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden">
              <div className="w-full flex items-center justify-center z-10 transform hover:scale-105 transition-transform duration-500">
                <DoodleAbout />
              </div>
              <div className="absolute top-4 left-4 bg-orange-100/50 dark:bg-orange-900/10 px-3 py-1 rounded-md text-[9px] font-black uppercase text-solar-orange font-display">
                VTU Student
              </div>
            </div>

            {/* Tab Selectors Group */}
            <div className="flex flex-col gap-4 p-4 neu-card rounded-3xl">
              <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest font-display px-2">
                Explore Credentials
              </span>
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center justify-between px-5 py-3.5 rounded-2xl text-sm font-semibold transition-all ease-out duration-300 font-display text-left cursor-pointer ${
                        isActive
                          ? "bg-solar-orange text-white shadow-neu-primary font-bold"
                          : "text-slate-600 dark:text-slate-300 hover:text-solar-orange hover:bg-slate-50 dark:hover:bg-slate-900/20"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-lg leading-none">
                          {item.icon}
                        </span>
                        {item.label}
                      </span>
                      {isActive && (
                        <span className="material-icons-outlined text-sm">
                          chevron_right
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column (Narrative and Selected Tab Content) */}
          <div className="col-span-12 md:col-span-7">
            <motion.div
              variants={headingContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-8 sm:mb-10"
            >
              <motion.span
                className="inline-block bg-orange-100 dark:bg-orange-900/30 text-solar-orange px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-neu-btn font-display select-none"
                variants={headingItemVariants}
              >
                About Me &amp; Credentials
              </motion.span>
              
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-6 sm:mb-8 max-w-2xl text-slate-800 dark:text-white font-display"
                variants={headingItemVariants}
              >
                A deep love for minimal design, clean code &amp; problem solving
              </motion.h2>
              
              <motion.p
                className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed max-w-xl"
                variants={headingItemVariants}
              >
                I thrive on the challenge of finding the perfect balance between creativity and practicality. With a CGPA of 8.2 and a deep focus on React, Node.js, and modern web technologies, I aim to create intuitive user experiences that actually matter.
              </motion.p>
            </motion.div>

            {/* Animated Credentials Panel */}
            <div className="relative min-h-[300px] neu-card p-8 rounded-3xl" id="about-tab-content">
              <AnimatePresence mode="wait">
                {activeTab === "education" && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white pb-3 border-b border-dashed border-slate-200 dark:border-slate-800 font-display flex items-center gap-2">
                      <span className="material-symbols-outlined text-solar-orange">school</span>
                      Academic Timeline
                    </h3>
                    <div className="space-y-6">
                      {educationList.map((edu, idx) => (
                        <div key={idx} className="flex gap-4">
                          <div className="w-2.5 h-2.5 rounded-full bg-solar-orange mt-2 shrink-0 shadow-[0_0_10px_rgba(255,124,0,0.5)]" />
                          <div>
                            <div className="flex flex-wrap items-baseline gap-2">
                              <span className="font-bold text-slate-800 dark:text-slate-100 font-display text-base">
                                {edu.degree}
                              </span>
                              <span className="text-xs bg-orange-100 dark:bg-orange-950/40 text-solar-orange px-2 py-0.5 rounded font-bold">
                                {edu.score}
                              </span>
                            </div>
                            <div className="text-slate-500 dark:text-slate-400 text-sm font-semibold font-display mt-0.5">
                              {edu.institution}
                            </div>
                            <div className="text-xs text-slate-400 mt-1 font-mono">
                              {edu.duration}
                            </div>
                            {edu.details && (
                              <p className="text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
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
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white pb-3 border-b border-dashed border-slate-200 dark:border-slate-800 font-display flex items-center gap-2">
                      <span className="material-symbols-outlined text-solar-orange">verified</span>
                      Professional Certifications
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {certifications.map((cert, idx) => (
                        <div key={idx} className="p-5 neu-card rounded-2xl relative overflow-hidden group">
                          <span className="material-icons-outlined absolute right-4 top-4 text-emerald-500 text-lg">
                            lock_open
                          </span>
                          <h4 className="font-bold text-slate-800 dark:text-slate-100 font-display text-sm pr-6">
                            {cert.title}
                          </h4>
                          <p className="text-xs text-slate-400 font-display mt-1 font-medium">
                            {cert.issuer}
                          </p>
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-solar-orange to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === "extracurricular" && (
                  <motion.div
                    key="extracurricular"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white pb-3 border-b border-dashed border-slate-200 dark:border-slate-800 font-display flex items-center gap-2">
                      <span className="material-symbols-outlined text-solar-orange">groups</span>
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
                              <h4 className="font-bold text-slate-800 dark:text-slate-100 font-display text-base">
                                {activity.role}
                              </h4>
                              <span className="text-xs text-slate-400 font-mono">
                                ({activity.duration})
                              </span>
                            </div>
                            <div className="text-solar-orange text-xs font-bold font-display uppercase tracking-wider">
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
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white pb-3 border-b border-dashed border-slate-200 dark:border-slate-800 font-display flex items-center gap-2">
                      <span className="material-symbols-outlined text-solar-orange">translate</span>
                      Languages Decoded
                    </h3>
                    <div className="space-y-5 py-2">
                      {languages.map((item, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-bold text-slate-800 dark:text-white font-display">
                              {item.name}
                            </span>
                            <span className="text-xs text-slate-400 font-mono font-bold">
                              {item.proficiency}
                            </span>
                          </div>
                          <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden shadow-neu-pressed dark:shadow-neu-pressed-dark p-0.5">
                            <motion.div
                              className="h-full bg-solar-orange rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: `${item.percentage}%` }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
