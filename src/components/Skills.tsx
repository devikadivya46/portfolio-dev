import { motion } from "motion/react";
import { skillCategories } from "../data";

export default function Skills() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 15 },
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

  return (
    <section className="py-20 sm:py-24 relative" id="skills">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="relative mb-16 overflow-visible"
          variants={headingContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="absolute -top-4 right-0 text-[7rem] sm:text-[9rem] font-black leading-none select-none pointer-events-none hidden sm:block"
            style={{ color: "rgba(28,19,16,0.038)", fontFamily: "'Outfit',sans-serif" }}>01</span>

          <motion.div className="flex items-center gap-3 mb-5" variants={headingItemVariants}>
            <div className="w-8 h-[2px] rounded-full bg-[#FF7C00]" />
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#FF7C00] font-display">What I Build With</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-[#FF7C00] opacity-40" />
              <div className="w-2 h-2 rounded-full bg-[#FF8A4B] opacity-25" />
              <div className="w-2 h-2 rounded-full bg-[#FFB38A] opacity-15" />
            </div>
          </motion.div>

          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold tracking-tight text-[#1C1310] mb-3"
            variants={headingItemVariants}
          >
            My Toolkit.
          </motion.h2>
          <div className="w-16 h-[3px] rounded-full bg-gradient-to-r from-[#FF8A4B] to-[#D84C1B] mb-4" />
          <motion.p
            className="text-[#5F5650] max-w-2xl text-base sm:text-lg leading-relaxed"
            variants={headingItemVariants}
          >
            A full-stack skill set — built across real projects and refined through internships.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          id="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category, catIdx) => {
            const accent = catIdx === 0
              ? { border: "border-l-[#FF7C00]", icon: "text-[#FF7C00]", bg: "bg-orange-50", dot: "bg-[#FF7C00]", note: "Used in 3+ production projects" }
              : catIdx === 1
              ? { border: "border-l-violet-500", icon: "text-violet-600", bg: "bg-violet-50", dot: "bg-violet-500", note: "Hands-on from internship work" }
              : { border: "border-l-emerald-500", icon: "text-emerald-600", bg: "bg-emerald-50", dot: "bg-emerald-500", note: "Event coordinator & team lead" };

            return (
              <motion.div
                key={category.title}
                className={`neu-card p-6 sm:p-8 rounded-3xl border-l-4 ${accent.border} hover:-translate-y-1 transition-all duration-300`}
                variants={cardVariants}
              >
                {/* Card header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${accent.bg} rounded-2xl flex items-center justify-center shrink-0`}>
                    <span className={`material-symbols-outlined text-xl ${accent.icon}`}>
                      {category.iconName}
                    </span>
                  </div>
                  <div>
                    <h3 className={`text-[11px] ${accent.icon} uppercase font-black tracking-[0.22em] font-display`}>
                      {category.title}
                    </h3>
                    <p className="text-[10px] text-[#9A8070] font-display mt-0.5">{accent.note}</p>
                  </div>
                </div>

                {/* Skill pills — cleaner, less noisy */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="px-3 py-1.5 rounded-lg text-[12px] font-semibold select-none text-[#2B2B2B] border border-[#E8E0D7] bg-white/70 hover:border-[#FF7C00]/40 hover:text-[#D84C1B] cursor-default transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>

                {/* Footer count */}
                <div className={`mt-5 pt-4 border-t border-[#E8E0D7] flex items-center gap-2`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${accent.dot}`} />
                  <span className="text-[10px] text-[#9A8070] font-display font-bold">
                    {category.skills.length} skills
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
