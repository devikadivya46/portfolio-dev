import { useEffect, useState, useMemo } from "react";
import { motion } from "motion/react";

interface MicroStar {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
}

export default function CelestialBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate deterministic, perfect micro-stars for desktop/mobile performance
  const starsArray = useMemo<MicroStar[]>(() => {
    const generated: MicroStar[] = [];
    const count = 48; // Balanced number of stars to avoid overloading DOM
    let seed = 4691;
    for (let i = 0; i < count; i++) {
      seed = (seed * 9301 + 49297) % 233280;
      const x = (seed % 10000) / 100;
      seed = (seed * 9301 + 49297) % 233280;
      const y = (seed % 10000) / 100;
      seed = (seed * 9301 + 49297) % 233280;
      const size = 1 + (seed % 2.5);
      seed = (seed * 9301 + 49297) % 233280;
      const delay = (seed % 80) / 10;
      seed = (seed * 9301 + 49297) % 233280;
      const duration = 3 + (seed % 5);

      generated.push({ id: i, x, y, size, delay, duration });
    }
    return generated;
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* 1. Deep Celestial Base Gradient System */}
      <div className="celestial-bg" aria-hidden="true" />

      {/* 2. Micro Blueprint / Celestial Wireframe Grid overlay */}
      <div className="celestial-grid absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true" />

      {/* 3. Deep space nebula orbs system */}
      <div className="nebula-layer absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden="true">
        <div className="nebula-cloud cloud-1" />
        <div className="nebula-cloud cloud-2" />
        <div className="nebula-cloud cloud-3" />
      </div>

      {/* 4. Elegant Interactive Twinkling Stars */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none pb-24" aria-hidden="true">
        {starsArray.map((star) => (
          <motion.div
            key={star.id}
            style={{
              position: "absolute",
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
            }}
            className="rounded-full bg-orange-400 dark:bg-white"
            animate={{
              opacity: [0.15, 0.85, 0.15],
              scale: [0.9, 1.25, 0.9],
            }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* 5. Minimalist Sophisticated Telemetry Labels (Architectural aesthetic) */}
        <div className="absolute top-[8%] left-8 font-mono text-[9px] tracking-[0.25em] text-orange-500/25 dark:text-orange-400/15 uppercase font-medium">
          GRID REF SYSTEM // EQUATORIAL
        </div>
        <div className="absolute top-[28%] right-10 font-mono text-[9px] tracking-[0.2em] text-slate-400/25 dark:text-slate-500/15 uppercase">
          EPOCH J2026.46 // COORD.01
        </div>
        <div className="absolute bottom-[20%] left-12 font-mono text-[9px] tracking-[0.3em] text-orange-500/25 dark:text-orange-400/15 uppercase">
          SECTOR: 04_SN (ALT.9482)
        </div>
        <div className="absolute bottom-[8%] right-8 font-mono text-[9px] tracking-[0.25em] text-slate-400/25 dark:text-slate-500/15 uppercase">
          ✦ AZIMUTH ACTIVE // RANGE 360°
        </div>
      </div>
    </>
  );
}
