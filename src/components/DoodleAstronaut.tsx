import { motion } from "motion/react";

export default function DoodleAstronaut() {
  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const rotateVariants = {
    animate: {
      rotate: [0, 2, -2, 0],
      transition: {
        duration: 5.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full max-w-[360px] sm:max-w-[420px] aspect-auto mx-auto flex items-center justify-center p-0">
      <svg
        viewBox="0 0 420 420"
        className="w-full h-full select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* ═══════════════════════════════════════
            BACKGROUND FRAME - Clean elegant border
            ═══════════════════════════════════════ */}
        <circle cx="210" cy="210" r="200" className="stroke-slate-200 dark:stroke-slate-700" strokeWidth="1.8" />
        <circle cx="210" cy="210" r="195" className="stroke-slate-100 dark:stroke-slate-800" strokeWidth="1" opacity="0.5" />

        {/* ═══════════════════════════════════════
            CORNER ACCENTS - Minimal geometric marks
            ═══════════════════════════════════════ */}

        {/* Top Right */}
        <motion.g variants={floatVariants} animate="animate">
          <g transform="translate(340, 60)">
            <line x1="0" y1="-6" x2="0" y2="6" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="1.4" strokeLinecap="round" />
            <line x1="-6" y1="0" x2="6" y2="0" className="stroke-slate-400 dark:stroke-slate-500" strokeWidth="1.4" strokeLinecap="round" />
          </g>
        </motion.g>

        {/* Top Left */}
        <motion.g variants={rotateVariants} animate="animate">
          <g transform="translate(80, 70)">
            <circle cx="0" cy="0" r="4" className="stroke-solar-orange" strokeWidth="1.5" opacity="0.7" />
            <path d="M -6,-6 L 6,6 M 6,-6 L -6,6" className="stroke-solar-orange" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
          </g>
        </motion.g>

        {/* Bottom Right */}
        <motion.g variants={floatVariants} animate="animate">
          <g transform="translate(350, 340)">
            <path d="M -8,0 Q 0,-6 8,0 Q 0,6 -8,0 Z" className="stroke-slate-300 dark:stroke-slate-600" strokeWidth="1.4" fill="none" />
          </g>
        </motion.g>

        {/* Bottom Left */}
        <motion.g variants={rotateVariants} animate="animate">
          <circle cx="70" cy="330" r="8" className="stroke-solar-orange" strokeWidth="1.6" opacity="0.6" />
        </motion.g>

        {/* ═══════════════════════════════════════
            CENTER - MAIN ASTRONAUT FIGURE
            ═══════════════════════════════════════ */}
        <motion.g variants={floatVariants} animate="animate">

          {/* BODY: Clean geometric suit outline */}
          <path
            d="M 150,200 L 140,280 C 140,310 165,330 210,330 C 255,330 280,310 280,280 L 270,200 Z"
            className="stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="2"
            fill="rgba(255,255,255,0.05)"
            strokeLinejoin="round"
          />

          {/* CENTER CHEST PANEL - Tech detail */}
          <rect x="185" y="220" width="50" height="60" rx="6" className="stroke-slate-400 dark:stroke-slate-600" strokeWidth="1.4" opacity="0.7" />

          {/* NECK COLLAR - Simple circle connection */}
          <circle cx="210" cy="195" r="18" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" fill="none" />

          {/* HELMET - Main focal point */}
          <circle
            cx="210"
            cy="130"
            r="52"
            className="stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="2.4"
            fill="rgba(255,255,255,0.08)"
          />

          {/* VISOR - Gradient reflection glass effect */}
          <ellipse
            cx="210"
            cy="125"
            rx="42"
            ry="38"
            className="stroke-slate-700 dark:stroke-slate-300"
            strokeWidth="2"
            fill="url(#helmetGloss)"
          />

          {/* LIGHT REFLECTION on visor */}
          <path
            d="M 170,105 Q 210,92 245,110"
            className="stroke-white"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.8"
          />

          {/* Subtle interior visor detail */}
          <path
            d="M 175,135 Q 210,140 245,135"
            className="stroke-white"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.4"
          />

          {/* HELMET ANTENNA/COMM PORTS - Sleek side details */}
          <g transform="translate(158, 115)">
            <rect x="0" y="0" width="5" height="22" rx="2.5" className="fill-slate-600 dark:fill-slate-400" />
            <circle cx="2.5" cy="8" r="1.5" className="fill-solar-orange" opacity="0.8" />
          </g>
          <g transform="translate(257, 115)">
            <rect x="0" y="0" width="5" height="22" rx="2.5" className="fill-slate-600 dark:fill-slate-400" />
            <circle cx="2.5" cy="8" r="1.5" className="fill-solar-orange" opacity="0.8" />
          </g>

          {/* SUIT SIDE PANELS - Minimal geometric details */}
          <path d="M 145,220 L 135,280 C 135,305 150,325 175,330" className="stroke-slate-400 dark:stroke-slate-600" strokeWidth="1.3" opacity="0.6" />
          <path d="M 275,220 L 285,280 C 285,305 270,325 245,330" className="stroke-slate-400 dark:stroke-slate-600" strokeWidth="1.3" opacity="0.6" />

          {/* LEGS - Simple clean lines */}
          <line x1="180" y1="330" x2="175" y2="360" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" strokeLinecap="round" />
          <line x1="240" y1="330" x2="245" y2="360" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" strokeLinecap="round" />

          {/* BOOTS/FEET - Minimal geometric shape */}
          <rect x="170" y="358" width="10" height="8" rx="2" className="fill-slate-700 dark:fill-slate-400" />
          <rect x="240" y="358" width="10" height="8" rx="2" className="fill-slate-700 dark:fill-slate-400" />

          {/* ARMS - Geometric suit sleeves */}
          <path d="M 150,210 L 110,240 C 105,245 105,260 115,265" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 270,210 L 310,240 C 315,245 315,260 305,265" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" strokeLinecap="round" fill="none" />

          {/* HAND DETAILS - Minimal gloves */}
          <circle cx="112" cy="270" r="5" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />
          <circle cx="308" cy="270" r="5" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="1.5" fill="rgba(255,255,255,0.05)" />

        </motion.g>

        {/* ═══════════════════════════════════════
            ORBITS - Subtle background elements
            ═══════════════════════════════════════ */}
        <motion.g variants={rotateVariants} animate="animate">
          <ellipse cx="210" cy="210" rx="120" ry="35" className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="1" strokeDasharray="8 5" opacity="0.4" transform="rotate(-15 210 210)" />
        </motion.g>

        {/* Floating accent stars - minimal */}
        <motion.g variants={floatVariants} animate="animate">
          <circle cx="95" cy="150" r="3.5" className="fill-solar-orange" opacity="0.6" />
          <circle cx="325" cy="280" r="2.5" className="fill-slate-400 dark:fill-slate-600" opacity="0.5" />
        </motion.g>

        {/* ═══════════════════════════════════════
            GRADIENT DEFINITIONS
            ═══════════════════════════════════════ */}
        <defs>
          <radialGradient id="helmetGloss" cx="40%" cy="30%">
            <stop offset="0%" stopColor="#1e293b" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#0f172a" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ea580c" stopOpacity="0.4" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
