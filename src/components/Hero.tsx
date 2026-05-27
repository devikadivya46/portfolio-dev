import { motion } from "motion/react";
// @ts-ignore
import heroPhoto from "../assets/images/hero-decor.png";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#F7F4EF] px-6 py-12"
    >
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-7xl items-center">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <p className="mb-4 text-sm font-medium tracking-[0.25em] text-[#FF7C00] uppercase">
              Hi, I’m Devika
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-[#1C1310] sm:text-5xl lg:text-6xl">
              A creative designer crafting calm, modern, and thoughtful digital experiences.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#5F5650] sm:text-lg">
              I build clean interfaces with warm visuals, smooth flow, and a strong focus on clarity, usability, and premium detail.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center rounded-full bg-gradient-to-br from-[#FF8A4B] to-[#D84C1B] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200/60 transition-transform hover:-translate-y-0.5"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-[#1C1310]/15 bg-white/60 px-6 py-3 text-sm font-semibold text-[#1C1310] backdrop-blur-sm transition-transform hover:-translate-y-0.5"
              >
                Let’s Talk
              </a>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:col-span-7 lg:justify-end">
            <motion.div
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 70, damping: 16, duration: 0.7 }}
              className="relative w-full max-w-[720px]"
            >

              <motion.img
                src={heroPhoto}
                alt="Hero portrait"
                className="h-[74vh] w-full rounded-[28px] object-cover object-center transform scale-[1.06] sm:h-[76vh] lg:h-[82vh]"
                draggable={false}
                animate={{ x: [0, 6, 0, -4, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                whileHover={{ scale: 1.02 }}
              />

                {/* Simple floating tagline to fill empty right area (tweaked: color, size, animation) */}
                <motion.div
                  initial={{ x: 24, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: 'spring', stiffness: 60, damping: 14, delay: 0.9 }}
                  className="absolute right-12 top-20 hidden lg:flex w-[380px] flex-col items-end"
                >
                  {/* Thin vertical accent */}
                  <div className="absolute -left-4 top-6 h-16 w-0.5 rounded bg-gradient-to-b from-[#D84C1B] to-[#FF8A4B] opacity-90" />

                  <a href="#about" className="group relative block w-[320px] rounded-[18px] bg-white px-6 py-5 shadow-[0_18px_40px_rgba(28,19,16,0.08)] border border-[#F1EAE5] transition-transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-[#D84C1B]">
                    {/* small decorative sparkle */}
                    <svg className="absolute -right-3 -top-3 w-8 h-8 text-[#FF8A4B]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                      <path d="M12 2l1.9 4.3L18 8l-4.1 1.7L12 14l-1.9-4.3L6 8l4.1-1.7L12 2z" fill="#FFB38A" opacity="0.95" />
                    </svg>
                    <p className="font-serif italic text-2xl lg:text-3xl text-[#1C1310] leading-tight group-hover:text-[#1C1310]">Warm, effortless design.</p>
                    <p className="mt-2 text-sm text-[#5F5650]">Crafting thoughtful digital experiences.</p>
                  </a>
                </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
