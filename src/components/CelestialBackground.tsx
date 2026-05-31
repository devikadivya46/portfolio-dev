import { motion } from "motion/react";

export default function CelestialBackground() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      {/* ── Base warm gradient ───────────────────────── */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(145deg,#FFF5EC 0%,#F7F2EB 30%,#F2E8DC 65%,#EDE0D2 100%)"
      }} />

      {/* ── TOP-RIGHT  large orange glow ─────────────── */}
      <motion.div
        className="absolute"
        style={{
          top: "-140px", right: "-120px",
          width: "720px", height: "660px",
          borderRadius: "62% 38% 55% 45% / 50% 58% 42% 50%",
          background: "radial-gradient(ellipse at 38% 32%, #FFB470 0%, #FF9B5A 28%, #FFCF98 58%, transparent 80%)",
          filter: "blur(60px)",
          opacity: 0.55,
        }}
        animate={{ scale: [1, 1.07, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* ── BOTTOM-LEFT peach glow ───────────────────── */}
      <motion.div
        className="absolute"
        style={{
          bottom: "-120px", left: "-100px",
          width: "660px", height: "600px",
          borderRadius: "45% 55% 42% 58% / 55% 45% 55% 45%",
          background: "radial-gradient(ellipse at 55% 55%, #FFCA98 0%, #FFB47A 32%, #FFD8B0 62%, transparent 82%)",
          filter: "blur(70px)",
          opacity: 0.5,
        }}
        animate={{ scale: [1, 1.09, 1], x: [0, 22, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* ── CENTER-RIGHT mid blob ────────────────────── */}
      <motion.div
        className="absolute"
        style={{
          top: "36%", right: "-80px",
          width: "480px", height: "440px",
          borderRadius: "55% 45% 60% 40% / 48% 52% 48% 52%",
          background: "radial-gradient(ellipse at 44% 44%, #FFCF96 0%, #FFB87A 42%, transparent 74%)",
          filter: "blur(56px)",
          opacity: 0.42,
        }}
        animate={{ y: [0, -35, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />

      {/* ── TOP-LEFT warm accent ─────────────────────── */}
      <motion.div
        className="absolute"
        style={{
          top: "6%", left: "-60px",
          width: "400px", height: "360px",
          borderRadius: "50% 50% 44% 56% / 52% 48% 52% 48%",
          background: "radial-gradient(circle, #FFE0BC 0%, #FFD09A 38%, transparent 70%)",
          filter: "blur(60px)",
          opacity: 0.38,
        }}
        animate={{ y: [0, 28, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />

      {/* ── BOTTOM-RIGHT warm blob ───────────────────── */}
      <motion.div
        className="absolute"
        style={{
          bottom: "10%", right: "4%",
          width: "420px", height: "380px",
          borderRadius: "42% 58% 52% 48% / 56% 44% 56% 44%",
          background: "radial-gradient(ellipse at 50% 50%, #FFCC90 0%, #FFB468 36%, transparent 70%)",
          filter: "blur(64px)",
          opacity: 0.34,
        }}
        animate={{ scale: [1, 1.08, 1], rotate: [0, -6, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 8 }}
      />

      {/* ── CENTER large ambient blob ────────────────── */}
      <motion.div
        className="absolute"
        style={{
          top: "58%", left: "25%",
          width: "500px", height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, #FFD4A0 0%, #FFC07C 30%, transparent 68%)",
          filter: "blur(80px)",
          opacity: 0.25,
        }}
        animate={{ scale: [1, 1.1, 1], y: [0, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 10 }}
      />

      {/* ── Dot grid ─────────────────────────────────── */}
      <div className="absolute inset-0 opacity-[0.045]" style={{
        backgroundImage: "radial-gradient(circle, #7C4A1E 1px, transparent 1px)",
        backgroundSize: "26px 26px",
      }} />

      {/* ── Pulsing orange accent dots ───────────────── */}
      {([
        { top: "18%",  left:  "7%",  s: 6, d: 0   },
        { top: "52%",  left:  "3%",  s: 5, d: 1.4 },
        { top: "80%",  left:  "12%", s: 7, d: 3   },
        { top: "12%",  right: "14%", s: 5, d: 0.7 },
        { top: "42%",  right: "7%",  s: 6, d: 2   },
        { top: "72%",  right: "18%", s: 4, d: 4   },
        { top: "30%",  left:  "22%", s: 4, d: 1   },
        { top: "90%",  right: "10%", s: 5, d: 2.6 },
        { top: "65%",  left:  "40%", s: 3, d: 3.5 },
      ] as Array<{top:string;left?:string;right?:string;s:number;d:number}>).map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#FF8A4B]"
          style={{ top: dot.top, left: dot.left, right: dot.right, width: dot.s, height: dot.s }}
          animate={{ opacity: [0.15, 0.55, 0.15], scale: [0.8, 1.4, 0.8] }}
          transition={{ duration: 3.2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: dot.d }}
        />
      ))}

    </div>
  );
}
