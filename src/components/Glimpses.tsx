import { motion } from "motion/react";
// @ts-ignore
import heroPhoto from "../assets/images/hero-decor.png";
// @ts-ignore
import portraitPhoto from "../assets/images/devika_portrait_1779472832674.png";

export default function Glimpses() {
  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 80, damping: 16 },
    },
  };

  return (
    <section id="glimpses" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 sm:mb-14 max-w-3xl"
        >
          <p className="text-xs font-black tracking-[0.25em] uppercase text-[#D84C1B] mb-3 font-display">
            Glimpses
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1C1310] font-serif">
            A few personal moments, creative frames, and small details from the journey.
          </h2>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-12 lg:gap-6 items-stretch">
          <motion.figure
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 overflow-hidden rounded-[32px] bg-white/70 shadow-[0_20px_50px_rgba(28,19,16,0.10)] border border-white/60"
          >
            <div className="relative h-[320px] sm:h-[420px] lg:h-full min-h-[320px]">
              <img
                src={heroPhoto}
                alt="Portrait glimpse"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1310]/35 via-transparent to-transparent" />
              <figcaption className="absolute left-5 bottom-5 rounded-2xl bg-white/75 px-4 py-3 backdrop-blur-md shadow-lg max-w-xs">
                <p className="text-xs uppercase tracking-[0.2em] font-black text-[#D84C1B] font-display">Portrait Study</p>
                <p className="mt-1 text-sm text-[#1C1310] leading-relaxed">Soft light, calm tones, and a warm visual rhythm.</p>
              </figcaption>
            </div>
          </motion.figure>

          <div className="lg:col-span-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <motion.figure
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="overflow-hidden rounded-[28px] bg-white/70 shadow-[0_20px_50px_rgba(28,19,16,0.08)] border border-white/60"
            >
              <div className="relative h-[220px] sm:h-[260px] lg:h-[250px]">
                <img
                  src={portraitPhoto}
                  alt="Second portrait glimpse"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1310]/30 via-transparent to-transparent" />
                <figcaption className="absolute left-4 bottom-4 rounded-2xl bg-white/80 px-3 py-2 backdrop-blur-md shadow-lg">
                  <p className="text-[10px] uppercase tracking-[0.18em] font-black text-[#D84C1B] font-display">Creative Frame</p>
                </figcaption>
              </div>
            </motion.figure>

            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="rounded-[28px] bg-gradient-to-br from-[#FDF7F0] to-[#F3E4D8] border border-[#F3E7DD] shadow-[0_20px_50px_rgba(28,19,16,0.08)] p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-black tracking-[0.2em] uppercase text-[#D84C1B] font-display mb-3">What I Keep Capturing</p>
                <h3 className="text-2xl font-serif text-[#1C1310] leading-tight">
                  People, process, and the quiet in-between moments.
                </h3>
              </div>

              <div className="mt-6 space-y-3 text-sm text-[#5F5650] leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#D84C1B] shrink-0" />
                  <p>Portraits that feel warm and honest.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#FF8A4B] shrink-0" />
                  <p>Soft layouts, clean spacing, and refined details.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#9A4E2F] shrink-0" />
                  <p>Small glimpses from the work-in-progress journey.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}