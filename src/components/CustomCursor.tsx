import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "motion/react";

interface Spark { id: number; x: number; y: number; angle: number; }

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [sparks, setSparks] = useState<Spark[]>([]);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  /* dot follows exactly */
  const dotX = useSpring(mouseX, { stiffness: 3000, damping: 80 });
  const dotY = useSpring(mouseY, { stiffness: 3000, damping: 80 });

  /* ring lags softly */
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 22 });

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
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onDown = (e: MouseEvent) => {
      setIsClicking(true);
      spawnSparks(e.clientX, e.clientY);
    };
    const onUp = () => setIsClicking(false);

    const onEnter = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a,button,[role='button'],input,textarea,select")) {
        setIsHovering(true);
      }
    };
    const onLeave = () => setIsHovering(false);

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
    };
  }, [isVisible, mouseX, mouseY, spawnSparks]);

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
        transition={{ type: "spring", stiffness: 350, damping: 22 }}
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
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
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
