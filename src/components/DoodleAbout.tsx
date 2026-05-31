import { motion } from "motion/react";
import { ABOUT_SITTING_CHAR } from "../data";

const float = {
  animate: { y: [0, -8, 0], transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } },
};
const floatSlow = {
  animate: { y: [0, 6, 0], x: [0, 4, 0], transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 } },
};
const spin = {
  animate: { rotate: [0, 360], transition: { duration: 24, repeat: Infinity, ease: "linear" } },
};
const blink = {
  animate: { opacity: [1, 0, 1], transition: { duration: 1.1, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.8 } },
};

export default function DoodleAbout() {
  return (
    <div className="relative w-full max-w-[360px] mx-auto select-none">

      {/* ── Outer card shell ─────────────────────── */}
      <motion.div
        className="relative rounded-[32px] overflow-hidden border border-white/70 shadow-[0_20px_56px_rgba(28,19,16,0.10)]"
        style={{ background: "linear-gradient(160deg,#FFFAF5 0%,#F5EDE3 100%)" }}
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ type: "spring", stiffness: 80, damping: 18, delay: 0.12 }}
      >
        {/* Dot grid background */}
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle,#1C1310 1px,transparent 1px)", backgroundSize: "18px 18px" }} />

        {/* Top bar */}
        <div className="flex items-center justify-between px-5 pt-4 pb-0 relative z-10">
          {/* VTU badge */}
          <div className="flex items-center gap-1.5 bg-orange-50 border border-orange-100 px-3 py-1 rounded-full">
            <motion.span className="w-2 h-2 rounded-full bg-emerald-400" variants={blink} animate="animate" />
            <span className="text-[9px] font-black uppercase tracking-[0.16em] text-[#D84C1B] font-display">VTU Student</span>
          </div>
          {/* Year */}
          <span className="text-[9px] text-[#9A8070] font-semibold font-display">2024 – 2028</span>
        </div>

        {/* Illustration */}
        <div className="relative flex items-center justify-center px-4 pt-2 pb-0">
          {/* Soft blob behind character */}
          <motion.div
            className="absolute w-48 h-48 rounded-full opacity-40 pointer-events-none"
            style={{ background: "radial-gradient(circle,#FFDCC0 0%,transparent 72%)" }}
            variants={floatSlow} animate="animate"
          />

          {/* Rotating dashed ring */}
          <motion.div
            className="absolute w-56 h-56 rounded-full border-dashed border border-[#FF8A4B]/20 pointer-events-none"
            variants={spin} animate="animate"
          />

          {/* Character image */}
          <motion.img
            src={ABOUT_SITTING_CHAR}
            alt="Sitting creative character"
            className="relative z-10 w-full max-w-[260px] h-auto object-contain drop-shadow-sm"
            variants={float}
            animate="animate"
            draggable={false}
            referrerPolicy="no-referrer"
          />

          {/* Sparkle top-right of image */}
          <motion.div
            className="absolute top-4 right-6 z-20"
            variants={float} animate="animate"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
              <path d="M10 1 L10 19 M1 10 L19 10 M3.5 3.5 L16.5 16.5 M16.5 3.5 L3.5 16.5"
                stroke="#FF8A4B" strokeWidth="1.6" strokeLinecap="round" opacity={0.7} />
            </svg>
          </motion.div>
        </div>

        {/* Bottom info strip */}
        <div className="px-5 pt-2 pb-5 relative z-10">
          <div className="rounded-2xl bg-white/70 backdrop-blur-sm border border-white/80 shadow-[0_4px_16px_rgba(28,19,16,0.07)] px-4 py-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-[11px] font-black text-[#1C1310] font-display leading-tight">Devika S. N.</p>
              <p className="text-[9.5px] text-[#9A8070] font-semibold font-display mt-0.5">Full Stack Dev &amp; Designer</p>
            </div>
            <div className="flex items-center gap-3">
              {[
                { v: "8.2", l: "CGPA" },
                { v: "20+", l: "Projects" },
              ].map(s => (
                <div key={s.l} className="text-center">
                  <span className="block text-sm font-black text-[#1C1310] font-display leading-none">{s.v}</span>
                  <span className="block text-[8px] text-[#9A8070] uppercase tracking-wider font-display mt-0.5">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative dots bottom-right */}
        <div className="absolute bottom-4 right-4 opacity-20 pointer-events-none"
          style={{ width: 52, height: 32, backgroundImage: "radial-gradient(circle,#FF7C00 1.2px,transparent 1.2px)", backgroundSize: "9px 9px" }} />
      </motion.div>

    </div>
  );
}
