import { motion } from "motion/react";
import { RESUME_PDF } from "../data";
// @ts-ignore
import heroPhoto from "../assets/images/port.png";

const cursive = "'Dancing Script', 'Brush Script MT', cursive";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden px-4 sm:px-6 py-8 sm:py-12"
    >
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center pt-24 sm:pt-28 lg:pt-0">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12">

          {/* ── Left column ──────────────────────────────────────── */}
          <div className="order-2 lg:order-1 lg:col-span-5 text-center lg:text-left">

            {/* Open to work badge */}
            <motion.div
              className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 rounded-full px-3.5 py-1.5 mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-emerald-700 font-display">Open to Opportunities</span>
            </motion.div>

            {/* Label fade-up */}
            <motion.p
              className="mb-4 text-sm font-medium tracking-[0.25em] text-gradient-start uppercase"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              Hi, I'm Devika
            </motion.p>

            {/* Heading — word by word reveal */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-[#1C1310] dark:text-[#F5F1EB]">
              {["Full-stack developer", "building", "thoughtful", "digital", "experiences."].map((chunk, i) => (
                <motion.span
                  key={i}
                  className={`inline-block mr-[0.22em] ${i === 3 ? "text-[#D84C1B] italic dark:text-[#FFAA55]" : ""}`}
                  style={{ display: "inline-block" }}
                  initial={{ opacity: 0, y: 28, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.1 }}
                >
                  {chunk}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle — recruiter-facing */}
            <motion.p
              className="mx-auto lg:mx-0 mt-5 max-w-xl text-sm sm:text-base leading-7 text-[#5F5650] dark:text-[#D6CEC5] sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.85 }}
            >
              Computer Science undergraduate building full-stack apps with React, Node.js, and MongoDB — open to software engineering internships.
            </motion.p>

            {/* Buttons — Resume is primary */}
            <motion.div
              className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.05 }}
            >
              <button
                onClick={(e) => {
                  e.preventDefault();
                  window.dispatchEvent(new CustomEvent("open-resume-modal"));
                }}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#FF8A4B] to-[#D84C1B] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200/60 transition-transform hover:-translate-y-0.5 dark:shadow-none dark:from-[#FF9E66] dark:to-[#E86A33] cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                Download Resume
              </button>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-[#1C1310]/15 bg-white/60 px-7 py-3.5 text-sm font-semibold text-[#1C1310] backdrop-blur-sm transition-transform hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-[#F5F1EB]"
              >
                View Work
              </a>
            </motion.div>
          </div>

          {/* ── Right column ─────────────────────────────────────── */}
          <div className="order-1 flex justify-center lg:order-2 lg:col-span-7 lg:justify-end">
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring" as const, stiffness: 70, damping: 16, duration: 0.7 }}
              className="relative w-full max-w-[640px] lg:max-w-[720px]"
            >
              {/* Hero photo */}
              <motion.img
                src={heroPhoto}
                alt="Hero portrait"
                className="h-[58vh] w-full rounded-[24px] object-cover object-[center_30%] transform scale-[1.03] sm:object-center sm:h-[66vh] lg:h-[82vh]"
                draggable={false}
                loading="eager"
                // @ts-ignore
                fetchPriority="high"
                animate={{ x: [0, 6, 0, -4, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.02 }}
              />

              {/* Floating skill tags — fill the empty space to the right of the photo */}
              <div
                className="absolute top-4 right-1 sm:top-6 sm:right-[-2%] z-20 flex flex-col gap-1.5 sm:gap-2.5 w-[115px] sm:w-44 select-none"
                aria-hidden="true"
              >
                {[
                  { icon: "design_services", title: "UI/UX Design", desc: "Crafting intuitive and clean designs", color: "text-[#D84C1B]", bg: "bg-orange-50", border: "border-orange-100", ring: "ring-orange-200/60" },
                  { icon: "code", title: "Full Stack Dev", desc: "Building scalable web applications", color: "text-violet-600", bg: "bg-violet-50", border: "border-violet-100", ring: "ring-violet-200/60" },
                  { icon: "auto_awesome", title: "Problem Solver", desc: "Solving real-world problems", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-100", ring: "ring-emerald-200/60" },
                ].map((tag, i) => (
                  <motion.div
                    key={tag.title}
                    className={`group flex items-center gap-1.5 sm:gap-2.5 rounded-lg sm:rounded-xl bg-white/95 dark:bg-[#231912]/90 backdrop-blur-sm border ${tag.border} dark:border-white/10 p-1.5 sm:p-2.5 cursor-default`}
                    initial={{ opacity: 0, x: -28 }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      y: [0, -5, 0],
                      boxShadow: [
                        "0 10px 26px rgba(28,19,16,0.08)",
                        "0 16px 34px rgba(28,19,16,0.12)",
                        "0 10px 26px rgba(28,19,16,0.08)",
                      ],
                    }}
                    transition={{
                      opacity: { duration: 0.5, ease: "easeOut", delay: 1.15 + i * 0.15 },
                      x: { type: "spring", stiffness: 130, damping: 15, delay: 1.15 + i * 0.15 },
                      y: { duration: 3.6 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: 1.9 + i * 0.15 },
                      boxShadow: { duration: 3.6 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: 1.9 + i * 0.15 },
                    }}
                    whileHover={{ scale: 1.045, y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
                  >
                    <div className={`w-5 h-5 sm:w-8 sm:h-8 shrink-0 rounded-md sm:rounded-lg ${tag.bg} ring-1 ring-inset ${tag.ring} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}>
                      <span className={`material-symbols-outlined text-[11px] sm:text-[17px] ${tag.color}`}>{tag.icon}</span>
                    </div>
                    <div>
                      <p className="text-[8.5px] sm:text-[11.5px] font-bold text-[#1C1310] dark:text-[#F5F1EB] leading-tight">{tag.title}</p>
                      <p className="text-[7.5px] sm:text-[10px] text-[#5F5650] dark:text-[#D6CEC5] leading-snug mt-0.5 hidden sm:block">{tag.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Signature doodle only */}
              <motion.div
                className="absolute bottom-[8%] right-[-2%] sm:bottom-[10%] sm:right-[4%] lg:right-[8%] z-10 flex flex-col items-center pointer-events-none select-none text-[#1C1310] dark:text-[#F5F1EB]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-end gap-1.5">
                  <span
                    style={{
                      fontFamily: cursive,
                    }}
                    className="text-[2.8rem] sm:text-[3.8rem] font-bold opacity-90 leading-none tracking-wide"
                  >
                    Devika
                  </span>
                </div>

                <svg viewBox="0 0 190 20" fill="none" aria-hidden className="mt-1 w-[150px] sm:w-[220px] h-auto">
                  <motion.path
                    d="M 3 9 C 28 3, 75 14, 122 8 C 154 4, 176 12, 187 9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    className="opacity-45"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 1.2 }}
                  />
                </svg>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
