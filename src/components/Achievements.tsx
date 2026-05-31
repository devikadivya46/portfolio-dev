import { motion } from "motion/react";
import { achievements, experiences, ACHIEVEMENTS_CHAR } from "../data";

export default function Achievements() {
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

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  return (
    <section className="py-32 relative overflow-hidden" id="achievements">
      <div className="container mx-auto px-6">
        <div className="asymmetric-grid gap-16 items-start">
          {/* Left Column (Label & Line Artwork) */}
          <motion.div
            className="col-span-12 lg:col-span-4 lg:sticky lg:top-36"
            variants={headingContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.span
              className="inline-block bg-orange-100 dark:bg-orange-900/30 text-solar-orange px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-neu-btn font-display select-none"
              variants={headingItemVariants}
            >
              History &amp; Awards
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-semibold mb-8 leading-tight text-slate-800 dark:text-white font-display"
              variants={headingItemVariants}
            >
              Where I have contributed &amp; competed
            </motion.h2>
            <motion.div
              className="relative w-48 h-48 flex items-center justify-center p-6 neu-card rounded-full select-none pointer-events-none"
              variants={headingItemVariants}
            >
              <img
                alt="Detailed hand-drawn line-art celestial character illustration"
                className="w-full h-full object-contain"
                src={ACHIEVEMENTS_CHAR}
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </motion.div>

          {/* Right Column (Experience & Achievements Cards) */}
          <motion.div
            className="col-span-12 lg:col-span-8 space-y-16"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* 1. Professional Experience Segment */}
            <div className="space-y-8">
              <h3 className="text-xs text-solar-orange font-black uppercase tracking-[0.25em] font-display flex items-center gap-2">
                <span className="material-symbols-outlined text-base">work</span>
                Professional Internships
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <motion.div
                    key={exp.id}
                    className="p-7 md:p-8 neu-card rounded-[28px] relative overflow-hidden border border-white/45 dark:border-slate-800/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(28,19,16,0.12)]"
                    variants={itemVariants}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-dashed border-slate-200 dark:border-slate-800">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 neu-btn-flat rounded-2xl flex items-center justify-center text-solar-orange font-bold font-display text-lg select-none shrink-0">
                          {exp.logoInitials}
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-800 dark:text-white font-display text-lg leading-tight">
                            {exp.role}
                          </h4>
                          <p className="text-solar-orange text-sm font-semibold font-display">
                            {exp.companyName}
                          </p>
                        </div>
                      </div>
                      
                      <div className="text-left md:text-right">
                        <div className="text-xs text-slate-400 font-mono font-bold uppercase tracking-wider">
                          {exp.duration}
                        </div>
                        <div className="text-xs text-slate-400 font-display font-medium mt-0.5">
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex gap-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                          <span className="text-solar-orange text-base select-none mt-0.5">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {exp.documentHref && (
                      <div className="mt-6 pt-5 border-t border-dashed border-slate-200 dark:border-slate-800 flex justify-start">
                        <a
                          href={encodeURI(exp.documentHref)}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-solar-orange px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white font-display shadow-[0_10px_24px_rgba(255,124,0,0.25)] transition-transform hover:-translate-y-0.5"
                        >
                          View Offer Letter
                          <span className="material-icons-outlined text-sm">open_in_new</span>
                        </a>
                      </div>
                    )}

                    {/* Decorative Watermark */}
                    <span className="material-symbols-outlined absolute top-10 right-10 text-slate-100 dark:text-slate-900/40 text-8xl pointer-events-none select-none z-0">
                      integration_instructions
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* 2. Key Hackathons & Coding Contests Segment */}
            <div className="space-y-8">
              <h3 className="text-xs text-solar-orange font-black uppercase tracking-[0.25em] font-display flex items-center gap-2">
                <span className="material-symbols-outlined text-base">emoji_events</span>
                Key Competitions &amp; Hackathons
              </h3>
              
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {achievements.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.05, y: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className="p-6 md:p-8 neu-card rounded-[22px] border border-white/45 dark:border-slate-800/40 hover:border-dashed hover:border-orange-200 transition-all duration-300 flex flex-col justify-between"
                    variants={itemVariants}
                  >
                    <div>
                      <div className="w-12 h-12 neu-btn-flat rounded-xl flex items-center justify-center text-solar-orange mb-6">
                        <span className="material-symbols-outlined text-2xl">
                          {item.iconName}
                        </span>
                      </div>
                      <div className="text-[10px] bg-orange-100/50 dark:bg-orange-950/40 text-solar-orange px-2 py-1 rounded font-black uppercase font-display inline-block mb-3 select-none">
                        {item.rank}
                      </div>
                      <h4 className="font-bold text-slate-800 dark:text-white font-display text-base mb-2 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
