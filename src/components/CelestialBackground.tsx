import { motion } from "motion/react";

export default function CelestialBackground() {
  return (
    <div className="fixed inset-0 z-[-2] pointer-events-none overflow-hidden" aria-hidden="true">

      {/* ── Page base ───────────────────────────────────── */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(145deg,#FFF5EC 0%,#F7F4EF 35%,#F2EBE1 70%,#EDE3D6 100%)"
      }} />

      {/* ── TOP-RIGHT large warm glow ───────────────────── */}
      <motion.div
        className="absolute"
        style={{
          top: "-120px", right: "-100px",
          width: "680px", height: "620px",
          borderRadius: "60% 40% 55% 45% / 50% 58% 42% 50%",
          background: "radial-gradient(ellipse at 40% 35%,#FFBB80 0%,#FF9B6A 30%,#FFD4A8 60%,transparent 82%)",
          filter: "blur(72px)",
          opacity: 0.38,
        }}
        animate={{ scale: [1, 1.06, 1], rotate: [0, 4, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── BOTTOM-LEFT large peach glow ────────────────── */}
      <motion.div
        className="absolute"
        style={{
          bottom: "-100px", left: "-80px",
          width: "600px", height: "550px",
          borderRadius: "45% 55% 40% 60% / 55% 45% 55% 45%",
          background: "radial-gradient(ellipse at 55% 55%,#FFCFA8 0%,#FFB88A 35%,#FFD8BA 65%,transparent 84%)",
          filter: "blur(80px)",
          opacity: 0.32,
        }}
        animate={{ scale: [1, 1.08, 1], x: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* ── CENTER-RIGHT mid blob ───────────────────────── */}
      <motion.div
        className="absolute"
        style={{
          top: "38%", right: "-60px",
          width: "420px", height: "400px",
          borderRadius: "55% 45% 60% 40% / 48% 52% 48% 52%",
          background: "radial-gradient(ellipse at 45% 45%,#FFD0A0 0%,#FFBE88 45%,transparent 76%)",
          filter: "blur(60px)",
          opacity: 0.26,
        }}
        animate={{ y: [0, -30, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* ── TOP-LEFT soft accent ─────────────────────────── */}
      <motion.div
        className="absolute"
        style={{
          top: "8%", left: "-40px",
          width: "350px", height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle,#FFE4C4 0%,#FFCFA8 40%,transparent 72%)",
          filter: "blur(64px)",
          opacity: 0.22,
        }}
        animate={{ y: [0, 24, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* ── BOTTOM-RIGHT warm glow ──────────────────────── */}
      <motion.div
        className="absolute"
        style={{
          bottom: "12%", right: "5%",
          width: "380px", height: "340px",
          borderRadius: "42% 58% 52% 48% / 56% 44% 56% 44%",
          background: "radial-gradient(ellipse at 50% 50%,#FFCA94 0%,#FFB070 38%,transparent 72%)",
          filter: "blur(68px)",
          opacity: 0.2,
        }}
        animate={{ scale: [1, 1.07, 1], rotate: [0, -5, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      />

      {/* ── Subtle dot grid ────────────────────────────── */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: "radial-gradient(circle,#7C4A1E 1px,transparent 1px)",
        backgroundSize: "28px 28px",
      }} />

      {/* ── Very faint diagonal lines ──────────────────── */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "repeating-linear-gradient(135deg,#FF7C00 0px,#FF7C00 1px,transparent 1px,transparent 48px)",
      }} />

      {/* ── Floating warm micro-dots ───────────────────── */}
      {[
        { top: "22%", left: "8%",  size: 5, delay: 0   },
        { top: "55%", left: "4%",  size: 4, delay: 1.5 },
        { top: "78%", left: "14%", size: 6, delay: 3   },
        { top: "15%", right: "18%",size: 4, delay: 0.8 },
        { top: "45%", right: "8%", size: 5, delay: 2.2 },
        { top: "70%", right: "22%",size: 3, delay: 4   },
        { top: "32%", left: "18%", size: 3, delay: 1   },
        { top: "88%", right: "12%",size: 4, delay: 2.8 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#FF8A4B]"
          style={{ ...dot, width: dot.size, height: dot.size, opacity: 0 } as React.CSSProperties}
          animate={{ opacity: [0.12, 0.45, 0.12], scale: [0.8, 1.3, 0.8] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: dot.delay }}
        />
      ))}

    </div>
  );
}
