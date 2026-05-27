import { motion } from "motion/react";

export default function DoodleAbout() {
  // Float animation for tech rings in background
  const floatVariants = {
    animate: {
      y: [0, -6, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Pulse animation for screen glare/data rays
  const pulseVariants = {
    animate: {
      opacity: [0.3, 0.7, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-square flex items-center justify-center p-4 mx-auto">
      {/* Soft elegant backlighting */}
      <div className="absolute inset-0 bg-gradient-to-tr from-solar-orange/10 via-amber-500/5 to-transparent rounded-full filter blur-3xl opacity-40 dark:opacity-25 select-none pointer-events-none" />

      {/* Premium Professional Human Line-Art Vector */}
      <svg
        viewBox="0 0 320 320"
        className="w-full h-full select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 1. PROFESSIONAL TECH TELEMETRY COORDINATES SYSTEM (Background) */}
        <motion.g variants={floatVariants} animate="animate">
          {/* Subtle Outer Coordinates Circles */}
          <circle
            cx="160"
            cy="160"
            r="140"
            className="stroke-slate-150 dark:stroke-slate-800/80"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <circle
            cx="160"
            cy="160"
            r="115"
            className="stroke-slate-200 dark:stroke-slate-800"
            strokeWidth="1.2"
          />
          
          {/* Fine compass markings */}
          <g className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="1">
            <line x1="160" y1="12" x2="160" y2="20" />
            <line x1="160" y1="300" x2="160" y2="308" />
            <line x1="12" y1="160" x2="20" y2="160" />
            <line x1="300" y1="160" x2="308" y2="160" />
          </g>
        </motion.g>

        {/* Abstract Floating Skills Node Clusters */}
        <g>
          {/* Node 1: Top-Right (React / Frontend symbol) */}
          <circle cx="255" cy="75" r="4" className="stroke-solar-orange fill-white" strokeWidth="2" />
          <path d="M 235,82 Q 255,68 275,82" className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="1" strokeDasharray="3 3" />
          
          {/* Node 2: Top-Left (Cloud Server symbol) */}
          <circle cx="65" cy="95" r="3" className="fill-slate-400 dark:fill-slate-600" />
          <line x1="65" y1="95" x2="90" y2="115" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="1" />
          
          {/* Node 3: Bottom-Right */}
          <circle cx="265" cy="225" r="3" className="fill-solar-orange/50" />
          <line x1="265" y1="225" x2="230" y2="245" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="1" />
        </g>

        {/* 2. THE MINIMALIST PORTRAIT CHARACTER (Sleek, Mature, Clean) */}
        {/* Grounding Base Line */}
        <line
          x1="50"
          y1="250"
          x2="270"
          y2="250"
          className="stroke-slate-800 dark:stroke-slate-300"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Floor Horizon Coordinates Grid Overlay */}
        <line x1="80" y1="256" x2="240" y2="256" className="stroke-slate-200 dark:stroke-slate-800" strokeWidth="1.2" />
        <line x1="110" y1="262" x2="210" y2="262" className="stroke-slate-100 dark:stroke-slate-900" strokeWidth="1" />

        {/* CHARACTER GROUP (Female Engineer with glasses, bun, working on laptop) */}
        <g>
          {/* SITTING TORSO & WAIST (High-end geometric posture) */}
          <path
            d="M 90,250 C 90,220 100,165 115,145 L 145,145 C 145,175 138,220 138,250 Z"
            className="fill-white dark:fill-slate-950 stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* SITTING LEGS COMFORTABLY OUTSTRETCHED (Slender, structured fashion-illustration lines) */}
          <path
            d="M 130,225 C 135,232 165,250 205,250 L 225,250 C 228,242 210,238 185,232 C 160,226 142,224 130,225 Z"
            className="fill-slate-800 dark:fill-slate-900 stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Professional Sleek Shoe Cuff */}
          <path
            d="M 225,250 L 235,242 L 239,250 Z"
            className="fill-white dark:fill-slate-800 stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="2"
            strokeLinejoin="round"
          />

          {/* BACK HAIR BUN (Clean, circular, top-knot profile representing Devika) */}
          <circle
            cx="98"
            cy="88"
            r="12"
            className="fill-slate-800 dark:fill-slate-100 stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="2.5"
          />
          
          {/* ELEGANT HEAD PROFILE (Turned slightly right/downwards to screen) */}
          <path
            d="M 103,98 C 95,98 96,118 106,118 C 114,118 122,114 122,106 C 122,98 112,98 103,98 Z"
            className="fill-[#fffcf6] dark:fill-slate-900 stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />

          {/* REFINED Glasses (Sleek minimalist round frame) */}
          <circle
            cx="115"
            cy="106"
            r="7"
            className="stroke-solar-orange"
            strokeWidth="2"
          />
          {/* Nose curve */}
          <path
            d="M 121,108 Q 124,109 121,111"
            className="stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* SLEEK PROFESSIONAL HAIR FLOW & NECK LINE */}
          <path
            d="M 101,98 C 96,88 108,82 118,92 C 122,96 122,102 118,105"
            className="stroke-slate-800 dark:stroke-slate-200 fill-slate-800 dark:fill-slate-100"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M 107,118 Q 109,128 113,128"
            className="stroke-slate-800 dark:stroke-slate-300"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* SWEATER V-NECK CUT */}
          <path
            d="M 111,133 L 119,141 L 127,133"
            className="stroke-slate-800 dark:stroke-slate-300"
            strokeWidth="1.8"
          />

          {/* SLENDER ARM TYPING ON LAPTOP */}
          <path
            d="M 125,152 L 148,178 L 172,174"
            className="stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Hand joint coordinates cursor */}
          <circle cx="172" cy="174" r="2.5" className="fill-solar-orange" />

          {/* ULTRA-THIN GEOMETRIC LAPTOP (Highly detailed minimal representation) */}
          <g transform="translate(162, 168)">
            {/* Laptop Base (Tilted) */}
            <line
              x1="0"
              y1="10"
              x2="42"
              y2="10"
              className="stroke-slate-800 dark:stroke-slate-200"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            {/* Laptop Open Screen */}
            <line
              x1="40"
              y1="10"
              x2="52"
              y2="-22"
              className="stroke-slate-800 dark:stroke-solar-orange"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {/* Tiny structural screen base connector */}
            <circle cx="40" cy="10" r="2" className="fill-slate-800 dark:fill-slate-200" />
          </g>

          {/* Glowing code brackets / analytics beam emitting from the screen */}
          <motion.g variants={pulseVariants} animate="animate">
            <line x1="210" y1="140" x2="230" y2="130" className="stroke-solar-orange/50" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="212" y1="152" x2="238" y2="152" className="stroke-amber-400/40" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="208" y1="164" x2="226" y2="174" className="stroke-solar-orange/50" strokeWidth="1.5" strokeLinecap="round" />
            
            {/* High-end decorative `< >` code brackets icon near laptop display */}
            <path
              d="M 235,115 L 227,119 L 235,123"
              className="stroke-solar-orange"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M 242,115 L 250,119 L 242,123"
              className="stroke-solar-orange"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.g>
        </g>

        {/* Binary Bits telemetry spark details (representing software focus) */}
        <text x="50" y="160" className="font-mono text-[9px] font-black fill-slate-300 dark:fill-slate-700 select-none">1</text>
        <text x="210" y="90" className="font-mono text-[9px] font-black fill-slate-300 dark:fill-slate-700 select-none">0</text>
        <text x="240" y="210" className="font-mono text-[9px] font-black fill-solar-orange/30 select-none">1</text>
        <text x="80" y="200" className="font-mono text-[9px] font-black fill-slate-300 dark:fill-slate-700 select-none">0</text>
      </svg>
    </div>
  );
}
