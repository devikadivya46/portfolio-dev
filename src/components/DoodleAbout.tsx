import { motion, Variants } from "motion/react";
// @ts-ignore
import aboutIllustration from "../assets/images/about-illustration.svg";

const float: Variants = {
  animate: { y: [0, -8, 0], transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut" } },
};
const floatSlow: Variants = {
  animate: { y: [0, 6, 0], x: [0, 4, 0], transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 } },
};
const spin: Variants = {
  animate: { rotate: [0, 360], transition: { duration: 24, repeat: Infinity, ease: "linear" } },
};
const blink: Variants = {
  animate: { opacity: [1, 0, 1], transition: { duration: 1.1, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.8 } },
};

export default function DoodleAbout() {
  return (
    <div className="relative w-full max-w-[360px] mx-auto select-none">

      {/* ── Outer card shell ─────────────────────── */}
      <motion.div
        className="relative rounded-[32px] overflow-hidden border border-white/60 shadow-[0_24px_64px_rgba(28,19,16,0.13)]"
        style={{ background: "linear-gradient(145deg,#FFF3EA 0%,#FDEBD8 40%,#F6D9C2 100%)" }}
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ type: "spring" as const, stiffness: 80, damping: 18, delay: 0.12 }}
      >
        {/* ── Rich layered background ─────────────── */}

        {/* Large warm blob — top-right */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            top: "-30px", right: "-30px",
            width: "220px", height: "220px",
            borderRadius: "62% 38% 55% 45% / 48% 56% 44% 52%",
            background: "radial-gradient(ellipse at 40% 40%,#FFCDA0 0%,#FFB87A 40%,transparent 75%)",
            opacity: 0.55,
          }}
          variants={floatSlow} animate="animate"
        />

        {/* Medium blob — bottom-left */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            bottom: "30px", left: "-20px",
            width: "160px", height: "140px",
            borderRadius: "45% 55% 40% 60% / 55% 45% 55% 45%",
            background: "radial-gradient(ellipse at 50% 50%,#FFD5AE 0%,#FFBE88 50%,transparent 78%)",
            opacity: 0.45,
          }}
          variants={float} animate="animate"
        />

        {/* Small accent blob — mid-left */}
        <motion.div
          className="absolute pointer-events-none"
          style={{
            top: "38%", left: "-10px",
            width: "80px", height: "90px",
            borderRadius: "50%",
            background: "radial-gradient(circle,#FFC89A 0%,transparent 70%)",
            opacity: 0.4,
            filter: "blur(6px)",
          }}
          variants={floatSlow} animate="animate"
        />

        {/* Dot grid overlay */}
        <div className="absolute inset-0 opacity-[0.045] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle,#7C4A1E 1px,transparent 1px)", backgroundSize: "18px 18px" }} />

        {/* Subtle diagonal stripe texture */}
        <div className="absolute inset-0 opacity-[0.018] pointer-events-none"
          style={{
            backgroundImage: "repeating-linear-gradient(45deg,#FF7C00 0px,#FF7C00 1px,transparent 1px,transparent 14px)",
          }} />

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
          {/* Organic blob directly behind character */}
          <motion.div
            className="absolute pointer-events-none"
            style={{
              width: "260px", height: "240px",
              borderRadius: "60% 40% 54% 46% / 52% 58% 42% 48%",
              background: "radial-gradient(ellipse at 45% 45%,#FFD4A8 0%,#FFBF88 35%,#FFA96A 65%,transparent 85%)",
              opacity: 0.62,
              filter: "blur(2px)",
            }}
            variants={floatSlow} animate="animate"
          />

          {/* Rotating dashed ring */}
          <motion.div
            className="absolute w-56 h-56 rounded-full border-dashed border border-[#FF8A4B]/20 pointer-events-none"
            variants={spin} animate="animate"
          />

          {/* Character image */}
          <motion.img
            src={aboutIllustration}
            alt="Portfolio and analytics illustration"
            className="relative z-10 w-full max-w-[260px] h-auto object-contain drop-shadow-sm"
            variants={float}
            animate="animate"
            draggable={false}
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
