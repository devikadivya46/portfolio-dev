import { motion } from "motion/react";
import { socialLinks } from "../data";
// @ts-ignore
import devikaPortrait from "../assets/images/devika_portrait_1779472832674.png";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 60, damping: 12 },
    },
  };

  return (
    <section className="pt-40 pb-24 relative overflow-hidden" id="hero">
      <div className="container mx-auto px-6">
        <div className="asymmetric-grid gap-12 items-center">
          {/* Left Description Column */}
          <motion.div
            className="col-span-12 md:col-span-7 relative z-10 lg:pr-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8 text-slate-800 dark:text-white tracking-tight font-display"
              variants={itemVariants}
            >
              Building Impactful, User-Centric Digital Experiences
            </motion.h1>

            <motion.p
              className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed"
              variants={itemVariants}
            >
              I am a motivated Computer Science undergraduate and full-stack developer passionate about delivering end-to-end web solutions.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-8 items-center"
              variants={itemVariants}
            >
              <a
                id="hero-cta"
                className="neu-btn-primary text-white px-10 py-5 rounded-full font-bold flex items-center gap-2 hover:opacity-95 transition-all font-display group"
                href="#contact"
              >
                Let's collaborate
                <span className="material-icons-outlined text-sm group-hover:translate-x-1 transition-transform">
                  rocket_launch
                </span>
              </a>

              <div className="flex gap-4" id="hero-socials">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    id={`social-hero-${social.name.toLowerCase()}`}
                    className="w-12 h-12 flex items-center justify-center rounded-full neu-btn-flat text-slate-400 hover:text-solar-orange hover:scale-105 transition-all"
                    href={social.url}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt={social.name}
                      className="w-5 h-5 dark:invert"
                      src={social.iconSrc}
                      referrerPolicy="no-referrer"
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Designed Neomorphic Portrait Card */}
          <motion.div
            className="col-span-12 md:col-span-5 relative flex justify-center items-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[440px] mx-auto aspect-square flex items-center justify-center p-6">
              
              {/* Spinning Celestial Grid Overlay (behind image to match cosmic portfolio identity) */}
              <div className="absolute inset-0 pointer-events-none select-none z-0">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full opacity-60 dark:opacity-45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="180"
                    className="stroke-slate-200 dark:stroke-slate-800"
                    strokeWidth="1"
                    strokeDasharray="4 6"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="150"
                    className="stroke-slate-300 dark:stroke-slate-800"
                    strokeWidth="1.5"
                    strokeDasharray="15 3"
                  />
                  {/* Glowing Orbit Rings */}
                  <ellipse
                    cx="200"
                    cy="200"
                    rx="165"
                    ry="60"
                    transform="rotate(-15 200 200)"
                    className="stroke-orange-500/25 dark:stroke-orange-500/15"
                    strokeWidth="1.2"
                    strokeDasharray="8 6"
                  />
                  {/* Subtle Tech Coordinates */}
                  <g className="stroke-slate-300 dark:stroke-slate-700" strokeWidth="1">
                    <line x1="200" y1="12" x2="200" y2="24" />
                    <line x1="200" y1="376" x2="200" y2="388" />
                    <line x1="12" y1="200" x2="24" y2="200" />
                    <line x1="376" y1="200" x2="388" y2="200" />
                  </g>
                </svg>
              </div>

              {/* Floating Neomorphic Frame Container with slow float animation */}
              <motion.div
                className="z-10 relative select-none neu-card p-5 rounded-[42px] max-w-[320px] sm:max-w-[350px] w-full transform transition-all duration-500 hover:translate-y-[-6px]"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Embedded Outer Glowing Border */}
                <div className="relative rounded-[32px] overflow-hidden bg-gradient-to-tr from-solar-orange via-amber-400 to-transparent p-[3px] shadow-neu-pressed dark:shadow-neu-pressed-dark">
                  
                  {/* Portrait Asset */}
                  <img
                    src={devikaPortrait}
                    alt="Devika"
                    className="w-full h-auto aspect-square rounded-[29px] object-cover bg-slate-50 dark:bg-slate-950 transition-transform duration-700 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Glassy Overlay Gradient on image lower quarter */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent pointer-events-none rounded-b-[29px]" />
                </div>

                {/* Floating Premium Badge in Top Corner */}
                <div className="absolute -top-3 -right-3 z-20 flex items-center gap-1.5 px-4 py-2 rounded-full bg-solar-orange shadow-neu-primary text-white font-display text-[10px] font-black tracking-widest uppercase select-none animate-pulse-subtle">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Online
                </div>

                {/* Bottom Signature Banner Integrated with Neomorphic Grid */}
                <div className="mt-5 flex items-center justify-between px-2">
                  <div className="flex flex-col">
                    <span className="text-xs font-black uppercase tracking-widest text-solar-orange font-display">
                      Devika S N
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-extrabold font-display uppercase tracking-wider">
                      Full-Stack Engineer
                    </span>
                  </div>

                  {/* Aesthetic Tech Icon Wheel */}
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900/50 flex items-center justify-center border border-slate-200/50 dark:border-slate-800/30">
                    <span className="material-icons-outlined text-solar-orange text-sm animate-spin-slow">
                      join_inner
                    </span>
                  </div>
                </div>
              </motion.div>

              {/* Sparkle details decoration */}
              <div className="absolute top-[20%] left-[-2%] z-20 animate-bounce" style={{ animationDuration: '4s' }}>
                <span className="material-icons-outlined text-solar-orange/40 text-2xl">star</span>
              </div>
              <div className="absolute bottom-[15%] right-[-4%] z-20 animate-bounce" style={{ animationDuration: '5s' }}>
                <span className="material-icons-outlined text-amber-500/30 text-3xl">token</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
