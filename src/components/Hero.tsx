import { motion } from "motion/react";
// @ts-ignore
import heroPhoto from "../assets/images/hero-decor.png";

const cursive = "'Dancing Script', 'Brush Script MT', cursive";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#F7F4EF] px-4 sm:px-6 py-8 sm:py-12"
    >
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center pt-24 sm:pt-28 lg:pt-0">
        <div className="grid w-full grid-cols-1 items-center gap-10 lg:grid-cols-12">

          {/* ── Left column (unchanged) ─────────────────────────── */}
          <div className="order-2 lg:order-1 lg:col-span-5 text-center lg:text-left">
            <p className="mb-4 text-sm font-medium tracking-[0.25em] text-[#FF7C00] uppercase">
              Hi, I'm Devika
            </p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight text-[#1C1310]">
              A creative designer crafting calm, modern, and thoughtful digital experiences.
            </h1>
            <p className="mx-auto lg:mx-0 mt-5 max-w-xl text-sm sm:text-base leading-7 text-[#5F5650] sm:text-lg">
              I build clean interfaces with warm visuals, smooth flow, and a strong focus on clarity, usability, and premium detail.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#FF8A4B] to-[#D84C1B] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/60 transition-transform hover:-translate-y-0.5"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#1C1310]/15 bg-white/60 px-6 py-3 text-sm font-semibold text-[#1C1310] backdrop-blur-sm transition-transform hover:-translate-y-0.5"
              >
                Let's Talk
              </a>
            </div>
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

              {/* ③ Heart — SVG outlined heart in orange */}
              <motion.div
                className="absolute top-[44%] right-[18%] z-10 hidden lg:block pointer-events-none select-none"
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.05, duration: 0.5, ease: "easeOut" }}
              >
                <motion.svg
                  width="26" height="24" viewBox="0 0 26 24" fill="none" aria-hidden
                  animate={{ scale: [1, 1.28, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                >
                  <path
                    d="M13 21.5 C13 21.5, 1.5 13.8, 1.5 7.5 C1.5 4.2, 4.2 1.5, 7.5 1.5 C9.8 1.5, 11.7 2.8, 13 4.6 C14.3 2.8, 16.2 1.5, 18.5 1.5 C21.8 1.5, 24.5 4.2, 24.5 7.5 C24.5 13.8, 13 21.5, 13 21.5Z"
                    stroke="#FF7C00" strokeWidth="1.6" fill="none" strokeLinejoin="round" opacity={0.88}
                  />
                </motion.svg>
              </motion.div>

              {/* ④ Orange hand-drawn spiral — mid-left of doodle zone */}
              <motion.div
                className="absolute top-[48%] right-[38%] z-10 hidden lg:block pointer-events-none select-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.7 }}
              >
                <motion.svg
                  width="72" height="76" viewBox="0 0 72 76" fill="none" aria-hidden
                  animate={{ rotate: [0, 6, 0, -6, 0] }}
                  transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
                >
                  {/* Multi-loop spiral — orange, hand-drawn feel */}
                  <motion.path
                    d="M36 38
                       C36 32, 30 26, 22 28
                       C12 30, 8 40, 12 50
                       C16 60, 28 66, 40 60
                       C54 54, 62 40, 56 26
                       C50 12, 34 6, 20 12
                       C6 18, 2 34, 8 48"
                    stroke="#FF7C00" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity={0.72}
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                    transition={{ duration: 2.0, ease: "easeOut", delay: 1.4 }}
                  />
                </motion.svg>
              </motion.div>

              {/* ⑤ Paper airplane (correct shape) + dashed circle trajectory */}
              <motion.div
                className="absolute top-[46%] right-[4%] z-10 hidden lg:block pointer-events-none select-none"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15, duration: 0.65, ease: "easeOut" }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, 3, 0, -3, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                >
                  <svg width="148" height="158" viewBox="0 0 148 158" fill="none" aria-hidden>

                    {/* ── Dashed circle trajectory (below plane) ── */}
                    <motion.circle
                      cx="46" cy="128" r="28"
                      stroke="#1C1310" strokeWidth="1.2" fill="none"
                      strokeDasharray="4 5" opacity={0.35}
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 1.8 }}
                    />
                    {/* Connecting dash from circle to plane tail */}
                    <motion.path
                      d="M 72 108 L 86 86"
                      stroke="#1C1310" strokeWidth="1.2" strokeDasharray="4 5"
                      strokeLinecap="round" opacity={0.35}
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                      transition={{ duration: 0.4, ease: "easeOut", delay: 3.0 }}
                    />

                    {/* ── Paper airplane ──
                        Nose:       (128, 28) upper-right
                        Top-back:   (10, 8)   upper-left
                        Fold dent:  (38, 52)  the characteristic notch
                        Bot-back:   (10, 78)  lower-left
                        The "dent" at fold-point gives the classic paper plane silhouette
                    ── */}
                    {/* Outer body */}
                    <motion.path
                      d="M 128 28 L 10 8 L 38 52 L 10 78 Z"
                      stroke="#1C1310" strokeWidth="2.0" strokeLinejoin="round" fill="none" opacity={0.76}
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                      transition={{ duration: 1.0, ease: "easeOut", delay: 1.0 }}
                    />
                    {/* Center fold line — nose to dent */}
                    <motion.path
                      d="M 128 28 L 38 52"
                      stroke="#1C1310" strokeWidth="1.2" strokeLinecap="round" opacity={0.45}
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                      transition={{ duration: 0.55, ease: "easeOut", delay: 1.8 }}
                    />
                    {/* Lower body crease */}
                    <motion.path
                      d="M 38 52 L 22 66"
                      stroke="#1C1310" strokeWidth="1.4" strokeLinecap="round" opacity={0.48}
                      initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: 2.1 }}
                    />
                  </svg>
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
