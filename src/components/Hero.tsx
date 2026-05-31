import { motion } from "motion/react";
// @ts-ignore
import heroPhoto from "../assets/images/hero-decor.png";

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
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-[#1C1310]">
              {["A creative designer", "crafting calm,", "modern, and", "thoughtful", "digital", "experiences."].map((chunk, i) => (
                <motion.span
                  key={i}
                  className={`inline-block mr-[0.22em] ${i === 4 ? "text-[#D84C1B] italic" : ""}`}
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
              className="mx-auto lg:mx-0 mt-5 max-w-xl text-sm sm:text-base leading-7 text-[#5F5650] sm:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.85 }}
            >
              Full-stack developer & UI designer — I build fast, clean web products using React, Next.js, and Node.js, and ship them end-to-end.
            </motion.p>

            {/* Buttons — Resume is primary */}
            <motion.div
              className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.05 }}
            >
              <a
                href="/documents/Devika S.N (2).pdf"
                download="Devika_SN_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#FF8A4B] to-[#D84C1B] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200/60 transition-transform hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-[#1C1310]/15 bg-white/60 px-7 py-3.5 text-sm font-semibold text-[#1C1310] backdrop-blur-sm transition-transform hover:-translate-y-0.5"
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
              transition={{ type: "spring", stiffness: 70, damping: 16, duration: 0.7 }}
              className="relative w-full max-w-[640px] lg:max-w-[720px]"
            >
              {/* Hero photo */}
              <motion.img
                src={heroPhoto}
                alt="Hero portrait"
                className="h-[58vh] w-full rounded-[24px] object-cover object-[center_30%] transform scale-[1.03] sm:object-center sm:h-[66vh] lg:h-[82vh]"
                draggable={false}
                animate={{ x: [0, 6, 0, -4, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                whileHover={{ scale: 1.02 }}
              />

              {/* ════════════════════════════════
                  DOODLE OVERLAYS
              ════════════════════════════════ */}

              {/* ① Star / asterisk — top right */}
              <motion.div
                className="absolute top-[5%] right-[9%] z-10 hidden lg:block pointer-events-none select-none"
                initial={{ opacity: 0, scale: 0.3, rotate: -40 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
              >
                <motion.svg
                  width="30" height="30" viewBox="0 0 30 30" fill="none" aria-hidden
                  animate={{ rotate: [0, 20, 0, -20, 0] }}
                  transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M15 1.5 L15 28.5" stroke="#1C1310" strokeWidth="1.9" strokeLinecap="round" opacity={0.65}/>
                  <path d="M1.5 15 L28.5 15" stroke="#1C1310" strokeWidth="1.9" strokeLinecap="round" opacity={0.65}/>
                  <path d="M5 5 L25 25" stroke="#1C1310" strokeWidth="1.9" strokeLinecap="round" opacity={0.65}/>
                  <path d="M25 5 L5 25" stroke="#1C1310" strokeWidth="1.9" strokeLinecap="round" opacity={0.65}/>
                </motion.svg>
              </motion.div>

              {/* ✦ sparkle near star */}
              <motion.span
                className="absolute top-[7%] right-[22%] text-[#FF9B6A] text-xs z-10 hidden lg:block pointer-events-none select-none"
                animate={{ opacity: [0.3, 0.9, 0.3], scale: [0.8, 1.2, 0.8] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              >✦</motion.span>
              <motion.span
                className="absolute top-[10%] right-[6%] text-[#FFC49A] text-[10px] z-10 hidden lg:block pointer-events-none select-none"
                animate={{ opacity: [0.25, 0.7, 0.25], scale: [0.9, 1.1, 0.9] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >✦</motion.span>

              {/* ② "Design with purpose" — Dancing Script, tight line-height */}
              <motion.div
                className="absolute top-[14%] right-[5%] z-10 hidden lg:block pointer-events-none select-none"
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                >
                  <p style={{ fontFamily: cursive, fontSize: "1.18rem", lineHeight: 1.65, color: "#1C1310" }}>
                    Design<br />
                    with purpose,<br />
                    create with<br />
                    <span style={{ color: "#FF7C00" }}>/</span>{" "}passion.
                  </p>
                </motion.div>
              </motion.div>


              {/* ⑥ Signature "Devika ♡" — Dancing Script 700, large */}
              <motion.div
                className="absolute bottom-[7%] right-[4%] z-10 hidden lg:block pointer-events-none select-none"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
                >
                  <div className="flex items-end gap-1.5">
                    <span style={{
                      fontFamily: cursive,
                      fontSize: "3.6rem",
                      fontWeight: 700,
                      color: "#1C1310",
                      opacity: 0.8,
                      lineHeight: 1,
                      letterSpacing: "0.02em",
                    }}>
                      Devika
                    </span>
                    <motion.span
                      style={{ fontFamily: cursive, fontSize: "1.9rem", color: "#FF7C00", opacity: 0.9, lineHeight: 1.1 }}
                      animate={{ scale: [1, 1.3, 1], rotate: [0, 10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                      ♡
                    </motion.span>
                  </div>

                  {/* Underline flourish */}
                  <svg width="205" height="22" viewBox="0 0 205 22" fill="none" aria-hidden className="mt-1">
                    <motion.path
                      d="M 4 9 C 30 3, 80 15, 130 8 C 165 3, 190 12, 201 9"
                      stroke="#1C1310" strokeWidth="1.7" strokeLinecap="round" opacity={0.45}
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                      transition={{ duration: 1.0, ease: "easeOut", delay: 1.6 }}
                    />
                    {[10, 22, 34, 46, 58, 70, 82, 94, 106, 118, 130, 142].map((x) => (
                      <circle key={x} cx={x} cy={18} r="1.6" fill="#1C1310" opacity={0.2} />
                    ))}
                  </svg>
                </motion.div>
              </motion.div>

              {/* ⑦ Orange dot grid — bottom right corner */}
              <motion.div
                className="absolute bottom-[5%] right-[2%] z-10 hidden lg:block pointer-events-none select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.9 }}
                style={{
                  width: 80,
                  height: 50,
                  backgroundImage: "radial-gradient(circle, #FF7C00 1.5px, transparent 1.5px)",
                  backgroundSize: "11px 11px",
                  opacity: 0.3,
                }}
              />

              {/* ⑧ Small curved arrow doodle — between text and heart */}
              <motion.div
                className="absolute top-[40%] right-[8%] z-10 hidden lg:block pointer-events-none select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.55, duration: 0.7 }}
              >
                <svg width="44" height="38" viewBox="0 0 44 38" fill="none" aria-hidden>
                  <motion.path
                    d="M 38 8 C 28 4, 12 6, 6 18 C 2 26, 6 34, 12 34"
                    stroke="#1C1310" strokeWidth="1.4" strokeLinecap="round" fill="none" opacity={0.3}
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 2.0 }}
                  />
                  {/* Arrowhead */}
                  <motion.path
                    d="M 8 28 L 12 34 L 18 30"
                    stroke="#1C1310" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity={0.3}
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 2.6 }}
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
