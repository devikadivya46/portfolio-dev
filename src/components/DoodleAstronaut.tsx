import { motion } from "motion/react";

export default function DoodleAstronaut() {
  // Float animation for astronaut
  const astronautVariants = {
    animate: {
      y: [0, -8, 0],
      rotate: [0, 0.5, -0.5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Pulse animation for tech circles
  const pulseVariants = {
    animate: {
      opacity: [0.3, 0.6, 0.3],
      scale: [0.98, 1.02, 0.98],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] mx-auto aspect-square flex items-center justify-center p-4">
      {/* Background ambient solar glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 via-amber-500/5 to-transparent rounded-full filter blur-3xl opacity-50 dark:opacity-30 select-none pointer-events-none" />
      
      {/* Prime Responsive Vector Canvas */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Deep reflective professional helmet visor gradient */}
          <linearGradient id="visorGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="40%" stopColor="#0f172a" />
            <stop offset="85%" stopColor="#ea580c" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>

          {/* Futuristic tech glow for joints/accents */}
          <linearGradient id="accentGlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f97316" />
            <stop offset="100%" stopColor="#fda4af" />
          </linearGradient>

          {/* Shadow filters for high-quality depth */}
          <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#0f172a" floodOpacity="0.1" />
          </filter>
        </defs>

        {/* 1. ARCHITECTURAL TELEMETRY & ALIGNMENT GRIDS (Instantly looks high-end/professional) */}
        <motion.circle
          cx="200"
          cy="200"
          r="185"
          className="stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="1"
          strokeDasharray="4 8"
          variants={pulseVariants}
          animate="animate"
        />

        <motion.circle
          cx="200"
          cy="200"
          r="170"
          className="stroke-slate-300 dark:stroke-slate-800"
          strokeWidth="1.5"
          strokeDasharray="20 4"
        />

        {/* Outer tech angle markers / ticks */}
        <g className="stroke-slate-400 dark:stroke-slate-600" strokeWidth="1.5">
          <line x1="200" y1="8" x2="200" y2="16" />
          <line x1="200" y1="384" x2="200" y2="392" />
          <line x1="8" y1="200" x2="16" y2="200" />
          <line x1="384" y1="200" x2="392" y2="200" />
        </g>

        {/* Constellation Linkage Lines */}
        <path
          d="M 60,110 L 100,60 L 140,80 M 310,80 L 340,110 L 310,150"
          className="stroke-slate-200 dark:stroke-slate-800"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.5"
        />
        <circle cx="60" cy="110" r="3" className="fill-slate-300 dark:fill-slate-700 stroke-slate-400" />
        <circle cx="100" cy="60" r="2.5" className="fill-orange-400/70" />
        <circle cx="140" cy="80" r="2.5" className="fill-slate-300 dark:fill-slate-700 stroke-slate-400" />
        <circle cx="310" cy="80" r="2" className="fill-slate-300 dark:fill-slate-700" />
        <circle cx="340" cy="110" r="3" className="fill-orange-500/80" />
        <circle cx="310" cy="150" r="2" className="fill-slate-300 dark:fill-slate-700" />

        {/* Crisp Orbit Rings */}
        <ellipse
          cx="200"
          cy="200"
          rx="155"
          ry="55"
          transform="rotate(-12 200 200)"
          className="stroke-slate-300 dark:stroke-slate-800"
          strokeWidth="1.2"
          strokeDasharray="8 6"
        />
        
        {/* Sleek Minimal Planet */}
        <g transform="translate(75, 235)">
          <circle
            cx="0"
            cy="0"
            r="10"
            className="stroke-slate-800 dark:stroke-slate-300 fill-white dark:fill-slate-900"
            strokeWidth="1.8"
          />
          <path
            d="M -16,4 Q 0,10 16,-4"
            className="stroke-orange-500"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* Fine Star sparkles (Geometric) */}
        <g className="fill-slate-800 dark:fill-slate-300">
          <path d="M 330,220 L 333,225 L 338,226 L 334,230 L 335,235 L 330,232 L 325,235 L 326,230 L 322,226 L 327,225 Z" className="stroke-slate-800 dark:stroke-slate-400" strokeWidth="1" />
          <path d="M 90,85 Q 90,95 80,95 Q 90,95 90,105 Q 90,95 100,95 Q 90,95 90,85" className="fill-orange-400 dark:fill-orange-500" />
          <path d="M 280,50 Q 280,56 274,56 Q 280,56 280,62 Q 280,56 286,56 Q 280,56 280,50" />
        </g>

        {/* 2. THE ASTRONAUT - DECKED IN FINE, CRISP ENGINEERED GEOMETRIES */}
        <motion.g
          variants={astronautVariants}
          animate="animate"
          filter="url(#subtleShadow)"
        >
          {/* SLEEK SHOULDER PACKS & BACKPLATE */}
          <path
            d="M 110,240 L 95,330 C 95,350 110,360 130,360 L 270,360 C 290,360 305,350 305,330 L 290,240 Z"
            className="fill-slate-100/50 dark:fill-slate-900/40 stroke-slate-300 dark:stroke-slate-800"
            strokeWidth="1.5"
          />

          {/* MAIN SPACE SUIT BODY (Torso) */}
          <path
            d="M 125,245 C 110,260 115,310 125,355 L 275,355 C 285,310 290,260 275,245 Z"
            className="fill-white dark:fill-slate-950 stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />

          {/* High-Tech Armor Plates on shoulders */}
          <path
            d="M 125,245 Q 140,260 160,260 L 160,285 L 122,280 Z"
            className="fill-slate-50 dark:fill-slate-900 stroke-slate-800 dark:stroke-slate-300"
            strokeWidth="1.8"
          />
          <path
            d="M 275,245 Q 260,260 240,260 L 240,285 L 278,280 Z"
            className="fill-slate-50 dark:fill-slate-900 stroke-slate-800 dark:stroke-slate-300"
            strokeWidth="1.8"
          />

          {/* Linear Tech Panel Lines */}
          <line x1="200" y1="260" x2="200" y2="355" className="stroke-slate-800 dark:stroke-slate-200" strokeWidth="2" />
          <path
            d="M 150,290 L 250,290"
            className="stroke-slate-400 dark:stroke-slate-700"
            strokeWidth="1.2"
            strokeDasharray="4 4"
          />
          <path
            d="M 140,320 L 260,320"
            className="stroke-slate-300 dark:stroke-slate-700"
            strokeWidth="1.5"
          />

          {/* Chest UI Display Console Indicator */}
          <g transform="translate(175, 298)">
            <rect
              x="0"
              y="0"
              width="50"
              height="18"
              rx="4"
              className="fill-slate-900 dark:fill-slate-900 stroke-slate-800 dark:stroke-slate-200"
              strokeWidth="1.8"
            />
            {/* Custom glowing telemetry nodes */}
            <circle cx="10" cy="9" r="2.5" className="fill-orange-500 animate-pulse" />
            <line x1="20" y1="7" x2="40" y2="7" className="stroke-slate-300 dark:stroke-slate-500" strokeWidth="1.5" />
            <line x1="20" y1="11" x2="33" y2="11" className="stroke-orange-400" strokeWidth="1.2" />
          </g>

          {/* Clean Rounded Collar Rim */}
          <path
            d="M 148,235 Q 200,250 252,235"
            className="fill-slate-50 dark:fill-slate-900 stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="2.2"
          />
          <path
            d="M 158,225 Q 200,235 242,225"
            className="stroke-slate-800 dark:stroke-slate-300"
            strokeWidth="1.8"
          />

          {/* HELMET BACK SHELL */}
          <circle
            cx="200"
            cy="150"
            r="78"
            className="fill-white dark:fill-slate-950 stroke-slate-800 dark:stroke-slate-200"
            strokeWidth="2.5"
          />

          {/* HELMET OUTER ANTENNA & COM NOTCHES */}
          <rect
            x="116"
            y="138"
            width="6"
            height="24"
            rx="2"
            transform="rotate(-15 116 138)"
            className="fill-slate-800 dark:fill-slate-300 stroke-slate-800"
            strokeWidth="1"
          />
          <rect
            x="278"
            y="138"
            width="6"
            height="24"
            rx="2"
            transform="rotate(15 278 138)"
            className="fill-slate-800 dark:fill-slate-300 stroke-slate-800"
            strokeWidth="1"
          />

          {/* THE MIRRORED VISOR - PRECISE, MINIMALIST & MATURE (This completely removes the "childish" face) */}
          <ellipse
            cx="200"
            cy="146"
            rx="64"
            ry="48"
            fill="url(#visorGradient)"
            className="stroke-slate-800 dark:stroke-slate-100"
            strokeWidth="2.5"
          />

          {/* Dynamic Light Reflection Flares across the Visor */}
          <path
            d="M 152,124 Q 200,106 244,124"
            className="stroke-white"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.9"
          />
          <path
            d="M 146,138 Q 180,120 214,131"
            className="stroke-white"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.5"
          />

          {/* Constellation overlay reflected deep inside the glass visor */}
          <g opacity="0.35" className="stroke-white">
            <line x1="165" y1="160" x2="190" y2="150" strokeWidth="0.8" />
            <line x1="190" y1="150" x2="225" y2="165" strokeWidth="0.8" />
            <circle cx="165" cy="160" r="1.5" className="fill-white" />
            <circle cx="190" cy="150" r="1.5" className="fill-amber-400" />
            <circle cx="225" cy="165" r="1.5" className="fill-white" />
          </g>

          {/* Tech UI Glare crosshairs reflected */}
          <path
            d="M 235,145 L 243,145 M 239,141 L 239,149"
            className="stroke-orange-400"
            strokeWidth="1"
            opacity="0.75"
          />

          {/* SIDE EMBLEMS ON HELMET SIDES */}
          <circle cx="121" cy="150" r="4.5" className="fill-orange-500 animate-ping" opacity="0.4" />
          <circle cx="121" cy="150" r="3" className="fill-orange-500" />
          <circle cx="279" cy="150" r="3" className="fill-slate-600 dark:fill-slate-400" />
        </motion.g>
      </svg>
    </div>
  );
}
