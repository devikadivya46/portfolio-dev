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
          className="mb-16"
          variants={headingContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1C1310] dark:text-white mb-4 font-display"
            variants={headingItemVariants}
          >
            Skills &amp; Expertise
          </motion.h2>
          <motion.p
            className="text-[#5F5650] dark:text-slate-400 max-w-2xl text-lg"
            variants={headingItemVariants}
          >
            A comprehensive overview of my technical arsenal and professional strengths.
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
              className="neu-card bg-[#F7F4EF] dark:bg-[#1a1a1e] p-6 sm:p-8 lg:p-10 rounded-3xl group transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1"
              variants={cardVariants}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 neu-btn-flat rounded-2xl flex items-center justify-center text-solar-orange">
                  <span className="material-symbols-outlined text-2xl">
                    {category.iconName}
                  </span>
                </div>
                <h3 className="text-xs text-solar-orange uppercase font-black tracking-[0.2em] font-display">
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
                    className="px-4 py-2 neu-btn-flat rounded-xl text-sm font-semibold select-none text-[#2B2B2B] dark:text-slate-200 hover:text-solar-orange cursor-default transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
