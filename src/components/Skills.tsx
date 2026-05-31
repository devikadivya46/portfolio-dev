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
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10"
          id="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="premium-card p-6 sm:p-8 lg:p-10 rounded-3xl group transition-all duration-400 hover:scale-[1.02] hover:-translate-y-1"
              variants={cardVariants}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 neu-btn-flat rounded-2xl flex items-center justify-center text-gradient-start">
                  <span className="material-symbols-outlined text-2xl">
                    {category.iconName}
                  </span>
                </div>
                <h3 className="text-xs text-gradient-start uppercase font-black tracking-[0.2em] font-display">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    className="px-4 py-2 neu-btn-flat rounded-xl text-sm font-semibold select-none text-slate-900 dark:text-slate-200 hover:text-gradient-start cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
              <p className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-700 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400 font-display">
                {category.title === "Languages & Frameworks" && "Used in 3+ production projects"}
                {category.title === "Databases & Tools" && "Hands-on from internship work"}
                {category.title === "Soft Skills" && "Event coordinator & team lead"}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
