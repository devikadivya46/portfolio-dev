import { useEffect, useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";

interface Spark { id: number; x: number; y: number; angle: number; }

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [sparks, setSparks] = useState<Spark[]>([]);

  // Refs for tracking interactive elements for magnetic pull
  const hoveredElRef = useRef<HTMLElement | null>(null);
  const lastMagneticElRef = useRef<HTMLElement | null>(null);

  // Separate motion values for dot and ring to allow beautiful gravitational separation
  const dotTargetX = useMotionValue(-200);
  const dotTargetY = useMotionValue(-200);
  const ringTargetX = useMotionValue(-200);
  const ringTargetY = useMotionValue(-200);

  /* dot follows with celestial precision */
  const dotX = useSpring(dotTargetX, { stiffness: 1200, damping: 55 });
  const dotY = useSpring(dotTargetY, { stiffness: 1200, damping: 55 });

  /* ring lags softly like an orbiting moon */
  const ringX = useSpring(ringTargetX, { stiffness: 180, damping: 22 });
  const ringY = useSpring(ringTargetY, { stiffness: 180, damping: 22 });

  const spawnSparks = useCallback((x: number, y: number) => {
    const newSparks: Spark[] = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x,
      y,
      angle: (i / 8) * 360,
    }));
    setSparks((prev) => [...prev, ...newSparks]);
    setTimeout(() => {
      setSparks((prev) => prev.filter((s) => !newSparks.some((n) => n.id === s.id)));
    }, 700);
  }, []);

  useEffect(() => {
    /* Only on pointer devices (desktop) */
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const onMove = (e: MouseEvent) => {
      const clientX = e.clientX;
      const clientY = e.clientY;

      if (hoveredElRef.current) {
        try {
          const rect = hoveredElRef.current.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const dx = centerX - clientX;
          const dy = centerY - clientY;

          const dist = Math.hypot(dx, dy);
          
          let pullRing = 0.45; // 45% pull
          let pullDot = 0.15;  // 15% pull

          // Handle distance-scaled decay (for extremely large buttons or fast movements)
          if (dist > 150) {
            const factor = Math.max(0, 1 - (dist - 150) / 100);
            pullRing *= factor;
            pullDot *= factor;
          }

          dotTargetX.set(clientX + dx * pullDot);
          dotTargetY.set(clientY + dy * pullDot);
          ringTargetX.set(clientX + dx * pullRing);
          ringTargetY.set(clientY + dy * pullRing);

          // Apply subtle celestial button displacement (magnetic meet)
          const btnPullX = -dx * 0.12;
          const btnPullY = -dy * 0.12;
          const maxBtnMove = 8;
          const boundedBtnX = Math.max(-maxBtnMove, Math.min(maxBtnMove, btnPullX));
          const boundedBtnY = Math.max(-maxBtnMove, Math.min(maxBtnMove, btnPullY));

          if (lastMagneticElRef.current && lastMagneticElRef.current !== hoveredElRef.current) {
            lastMagneticElRef.current.style.transform = "";
            lastMagneticElRef.current.style.transition = "";
          }
          lastMagneticElRef.current = hoveredElRef.current;
          
          hoveredElRef.current.style.transition = "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)";
          hoveredElRef.current.style.transform = `translate(${boundedBtnX}px, ${boundedBtnY}px)`;
        } catch (err) {
          dotTargetX.set(clientX);
          dotTargetY.set(clientY);
          ringTargetX.set(clientX);
          ringTargetY.set(clientY);
        }
      } else {
        dotTargetX.set(clientX);
        dotTargetY.set(clientY);
        ringTargetX.set(clientX);
        ringTargetY.set(clientY);

        // Gently restore displaced button back to rest
        if (lastMagneticElRef.current) {
          lastMagneticElRef.current.style.transition = "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)";
          lastMagneticElRef.current.style.transform = "";
          lastMagneticElRef.current = null;
        }
      }

      if (!isVisible) setIsVisible(true);
    };

    const onDown = (e: MouseEvent) => {
      setIsClicking(true);
      spawnSparks(e.clientX, e.clientY);
    };
    const onUp = () => setIsClicking(false);

    const onEnter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (!t) return;
      
      // Match interactive items (nav, button, links, elements with cursor-pointer, etc.)
      const interactive = t.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-pointer, [role='tab']"
      ) as HTMLElement | null;

      if (interactive) {
        setIsHovering(true);
        hoveredElRef.current = interactive;
      } else {
        setIsHovering(false);
        hoveredElRef.current = null;
      }
    };

    const onLeave = () => {
      setIsHovering(false);
      hoveredElRef.current = null;
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onEnter);
    document.addEventListener("mouseout", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onEnter);
      document.removeEventListener("mouseout", onLeave);

      // Clean up transform on unmount
      if (lastMagneticElRef.current) {
        lastMagneticElRef.current.style.transform = "";
        lastMagneticElRef.current.style.transition = "";
      }
    };
  }, [isVisible, dotTargetX, dotTargetY, ringTargetX, ringTargetY, spawnSparks]);

  if (!isVisible) return null;

  return (
    <>
      {/* ── Outer ring ─────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9998] border-2"
        style={{
          x: ringX, y: ringY,
          translateX: "-50%", translateY: "-50%",
          borderColor: isHovering ? "#D84C1B" : "#FF8A4B",
        }}
        animate={{
          width: isHovering ? 52 : isClicking ? 28 : 38,
          height: isHovering ? 52 : isClicking ? 28 : 38,
          opacity: isHovering ? 0.7 : 0.4,
        }}
        transition={{ type: "spring" as const, stiffness: 350, damping: 22 }}
      />

      {/* ── Center dot ─────────────────────────────── */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] bg-[#FF7C00]"
        style={{
          x: dotX, y: dotY,
          translateX: "-50%", translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 5 : isClicking ? 10 : 7,
          height: isHovering ? 5 : isClicking ? 10 : 7,
          opacity: isHovering ? 0.9 : 1,
        }}
        transition={{ type: "spring" as const, stiffness: 600, damping: 30 }}
      />

      {/* ── Click sparks ───────────────────────────── */}
      <AnimatePresence>
        {sparks.map((spark) => {
          const rad = (spark.angle * Math.PI) / 180;
          const dist = 28 + Math.random() * 18;
          return (
            <motion.div
              key={spark.id}
              className="fixed top-0 left-0 rounded-full pointer-events-none z-[9997] bg-[#FF8A4B]"
              style={{ x: spark.x - 3, y: spark.y - 3, width: 5, height: 5 }}
              initial={{ opacity: 0.9, scale: 1 }}
              animate={{
                x: spark.x + Math.cos(rad) * dist,
                y: spark.y + Math.sin(rad) * dist,
                opacity: 0,
                scale: 0.2,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            />
          );
        })}
      </AnimatePresence>
    </>
  );
}
