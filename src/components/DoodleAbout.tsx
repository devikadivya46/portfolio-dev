import { motion } from "motion/react";

const float = {
  animate: { y: [0, -8, 0], transition: { duration: 5, repeat: Infinity, ease: "easeInOut" } },
};
const floatSlow = {
  animate: { y: [0, 6, 0], x: [0, 4, 0], transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 } },
};
const blink = {
  animate: { opacity: [1, 0, 1], transition: { duration: 1.1, repeat: Infinity, ease: "easeInOut", repeatDelay: 1.5 } },
};
const spin = {
  animate: { rotate: [0, 360], transition: { duration: 22, repeat: Infinity, ease: "linear" } },
};
const pulse = {
  animate: { scale: [1, 1.04, 1], transition: { duration: 3.5, repeat: Infinity, ease: "easeInOut" } },
};

const skills = ["React.js", "Next.js", "Node.js", "Python", "UI/UX", "Tailwind"];
const stats = [
  { value: "8.2", label: "CGPA" },
  { value: "20+", label: "Projects" },
  { value: "2+", label: "Internships" },
];

export default function DoodleAbout() {
  return (
    <div className="relative w-full max-w-[360px] mx-auto select-none">
      <svg
        viewBox="0 0 380 460"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Avatar gradient */}
          <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8A4B" />
            <stop offset="100%" stopColor="#D84C1B" />
          </linearGradient>
          {/* Card shadow gradient */}
          <linearGradient id="cardGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#F0EAE2" stopOpacity="0.6" />
          </linearGradient>
          {/* Soft blob */}
          <radialGradient id="blob1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFD8B8" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#FFD8B8" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="blob2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FF8A4B" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FF8A4B" stopOpacity="0" />
          </radialGradient>
          {/* Dot grid pattern */}
          <pattern id="dotGrid" x="0" y="0" width="18" height="18" patternUnits="userSpaceOnUse">
            <circle cx="9" cy="9" r="1.1" fill="#1C1310" opacity="0.065" />
          </pattern>
          {/* Clip for card */}
          <clipPath id="cardClip">
            <rect x="12" y="12" width="356" height="436" rx="30" />
          </clipPath>
        </defs>

        {/* ── Card background ─────────────────────── */}
        <rect x="12" y="12" width="356" height="436" rx="30" fill="url(#cardGlow)" />
        <rect x="12" y="12" width="356" height="436" rx="30" fill="url(#dotGrid)" opacity="0.7" />
        <rect x="12" y="12" width="356" height="436" rx="30"
          stroke="#E8E0D6" strokeWidth="1.5" />

        {/* Background blobs */}
        <motion.ellipse cx="310" cy="80" rx="88" ry="80" fill="url(#blob1)" variants={float} animate="animate" />
        <motion.ellipse cx="55" cy="380" rx="80" ry="70" fill="url(#blob2)" variants={floatSlow} animate="animate" />

        {/* ── Rotating dashed ring ─────────────────── */}
        <motion.g transform="translate(190, 145)" variants={spin} animate="animate">
          <circle cx="0" cy="0" r="76"
            stroke="#FF8A4B" strokeWidth="1" strokeDasharray="6 10" opacity="0.22" />
        </motion.g>

        {/* ── Avatar circle ─────────────────────────── */}
        <motion.g variants={pulse} animate="animate">
          {/* Outer ring */}
          <circle cx="190" cy="145" r="68" stroke="url(#avatarGrad)" strokeWidth="2.5" opacity="0.25" />
          {/* Avatar fill */}
          <circle cx="190" cy="145" r="58" fill="url(#avatarGrad)" />
          {/* Monogram "D" */}
          <text
            x="186" y="164"
            textAnchor="middle"
            fill="white"
            fontSize="54"
            fontFamily="'Playfair Display', Georgia, serif"
            fontStyle="italic"
            fontWeight="700"
            opacity="0.95"
          >D</text>
          {/* Tiny "S.N." below monogram */}
          <text x="190" y="176" textAnchor="middle" fill="white" fontSize="10"
            fontFamily="'Outfit', sans-serif" fontWeight="600" opacity="0.75" letterSpacing="3">S.N.</text>
        </motion.g>

        {/* ── Name ─────────────────────────────────── */}
        <text x="190" y="228" textAnchor="middle" fill="#1C1310"
          fontSize="18" fontFamily="'Playfair Display', serif" fontWeight="700">
          Devika S. N.
        </text>

        {/* ── Role pills ───────────────────────────── */}
        {/* Pill 1: Full Stack Dev */}
        <rect x="72" y="237" width="116" height="22" rx="11" fill="#FF8A4B" opacity="0.12" />
        <text x="130" y="252" textAnchor="middle" fill="#D84C1B"
          fontSize="9.5" fontFamily="'Outfit', sans-serif" fontWeight="800" letterSpacing="0.5">
          FULL STACK DEV
        </text>
        {/* Pill 2: Designer */}
        <rect x="196" y="237" width="88" height="22" rx="11" fill="#1C1310" opacity="0.06" />
        <text x="240" y="252" textAnchor="middle" fill="#5F5650"
          fontSize="9.5" fontFamily="'Outfit', sans-serif" fontWeight="800" letterSpacing="0.5">
          DESIGNER
        </text>

        {/* ── Divider ──────────────────────────────── */}
        <line x1="40" y1="273" x2="340" y2="273" stroke="#E8E0D6" strokeWidth="1" />

        {/* ── Stats row ─────────────────────────────── */}
        {stats.map((s, i) => {
          const cx = 80 + i * 110;
          return (
            <motion.g key={s.label}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}>
              {/* Stat bubble */}
              <rect x={cx - 38} y="282" width="76" height="52" rx="16"
                fill="white" opacity="0.8"
                style={{ filter: "drop-shadow(0 4px 10px rgba(28,19,16,0.08))" }}
              />
              <text x={cx} y="307" textAnchor="middle" fill="#1C1310"
                fontSize="18" fontFamily="'Outfit', sans-serif" fontWeight="800">
                {s.value}
              </text>
              <text x={cx} y="323" textAnchor="middle" fill="#9A8070"
                fontSize="8.5" fontFamily="'Outfit', sans-serif" fontWeight="700" letterSpacing="1">
                {s.label.toUpperCase()}
              </text>
            </motion.g>
          );
        })}

        {/* ── Skills grid ──────────────────────────── */}
        {skills.map((skill, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const x = 44 + col * 100;
          const y = 352 + row * 26;
          const w = skill.length * 6.8 + 20;
          return (
            <motion.g key={skill}
              initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.55 + i * 0.07, type: "spring", stiffness: 200, damping: 18 }}>
              <rect x={x} y={y} width={w} height="19" rx="9.5"
                fill="#1C1310" opacity="0.06" />
              <rect x={x} y={y} width={w} height="19" rx="9.5"
                stroke="#D6CFC6" strokeWidth="0.8" />
              <text x={x + w / 2} y={y + 13} textAnchor="middle"
                fill="#3D3530" fontSize="9" fontFamily="'Outfit', sans-serif" fontWeight="700">
                {skill}
              </text>
            </motion.g>
          );
        })}

        {/* ── Currently building strip ─────────────── */}
        <rect x="26" y="408" width="328" height="28" rx="14" fill="#FF8A4B" opacity="0.09" />
        <motion.circle cx="44" cy="422" r="4" fill="#22c55e" variants={blink} animate="animate" />
        <text x="55" y="426" fill="#5F5650"
          fontSize="9.5" fontFamily="'Outfit', sans-serif" fontWeight="700" letterSpacing="0.3">
          Currently building Anvesync &amp; AgentVision X
        </text>

        {/* ── Corner sparkles ──────────────────────── */}
        <motion.g variants={float} animate="animate">
          <line x1="344" y1="26" x2="344" y2="34" stroke="#FF8A4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
          <line x1="340" y1="30" x2="348" y2="30" stroke="#FF8A4B" strokeWidth="1.5" strokeLinecap="round" opacity="0.55" />
        </motion.g>
        <motion.g variants={floatSlow} animate="animate">
          <circle cx="352" cy="50" r="3" fill="#FF8A4B" opacity="0.3" />
          <circle cx="362" cy="40" r="2" fill="#FF8A4B" opacity="0.2" />
        </motion.g>

        {/* Top-left status badge */}
        <rect x="26" y="26" width="95" height="20" rx="10" fill="#FF8A4B" opacity="0.12" />
        <circle cx="37" cy="36" r="3.5" fill="#22c55e" opacity="0.9" />
        <text x="44" y="40" fill="#D84C1B"
          fontSize="8.5" fontFamily="'Outfit', sans-serif" fontWeight="900" letterSpacing="1">
          VTU STUDENT
        </text>

        {/* Top-right year */}
        <text x="354" y="40" textAnchor="end" fill="#9A8070"
          fontSize="8.5" fontFamily="'Outfit', sans-serif" fontWeight="600" opacity="0.7">
          2024 – 2028
        </text>
      </svg>
    </div>
  );
}
