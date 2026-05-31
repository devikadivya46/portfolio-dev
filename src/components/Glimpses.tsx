import { motion } from "motion/react";
// @ts-ignore
import heroPhoto from "../assets/images/hero-decor.png";
// @ts-ignore
import portraitPhoto from "../assets/images/devika_portrait_1779472832674.png";
import { journeyMilestones } from "../data";

const typeColors: Record<string, { dot: string; bg: string; text: string }> = {
  internship:   { dot: "bg-[#FF7C00]",  bg: "bg-orange-50 dark:bg-orange-950/20",  text: "text-[#FF7C00]"  },
  certification:{ dot: "bg-emerald-500",bg: "bg-emerald-50 dark:bg-emerald-950/20",text: "text-emerald-600 dark:text-emerald-400" },
  event:        { dot: "bg-violet-500", bg: "bg-violet-50 dark:bg-violet-950/20",  text: "text-violet-600 dark:text-violet-400" },
  achievement:  { dot: "bg-amber-500",  bg: "bg-amber-50 dark:bg-amber-950/20",   text: "text-amber-600 dark:text-amber-500"  },
};

export default function Glimpses() {
  return (
    <section id="glimpses" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Floating info card placed at section root to sit above image and overlays */}
        <div className="hidden lg:block absolute right-12 top-24 z-50">
          <div className="w-[320px] rounded-[18px] bg-white/95 dark:bg-[#0b0b0c]/85 backdrop-blur-md border border-white/60 dark:border-slate-800/40 shadow-[0_24px_60px_rgba(28,19,16,0.12)] p-6">
            <h3 className="font-serif text-2xl leading-tight text-[#1C1310] dark:text-white mb-2">Warm, effortless<br/>design.</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Crafting thoughtful digital experiences.</p>
          </div>
        </div>

        {/* ── Section label + heading ───────────────────────── */}
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1C1310] dark:text-white font-serif">
            A few personal moments, creative frames, and small details from the journey.
          </h2>
        </motion.div>

        {/* ── Photo grid ───────────────────────────────────── */}
        <div className="grid gap-5 lg:grid-cols-12 lg:gap-6 items-stretch">
          <motion.figure
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
            className="lg:col-span-7 overflow-hidden rounded-[32px] bg-white/70 shadow-[0_20px_50px_rgba(28,19,16,0.10)] border border-white/60"
          >
              <div className="relative h-[320px] sm:h-[420px] lg:h-full min-h-[320px]">
              <img src={heroPhoto} alt="Portrait glimpse" className="h-full w-full object-cover object-center relative z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1310]/35 via-transparent to-transparent" />
              <figcaption className="absolute left-5 bottom-5 rounded-2xl bg-white/75 px-4 py-3 backdrop-blur-md shadow-lg max-w-xs">
                <p className="text-xs uppercase tracking-[0.2em] font-black text-[#D84C1B] font-display">Portrait Study</p>
                <p className="mt-1 text-sm text-[#1C1310] leading-relaxed">Soft light, calm tones, and a warm visual rhythm.</p>
              </figcaption>

              {/* Floating info card removed from here and moved to section root for proper stacking */}
            </div>
          </motion.figure>

          <div className="lg:col-span-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <motion.figure
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.08 }}
              className="overflow-hidden rounded-[28px] bg-white/70 shadow-[0_20px_50px_rgba(28,19,16,0.08)] border border-white/60"
            >
              <div className="relative h-[220px] sm:h-[260px] lg:h-[250px]">
                <img src={portraitPhoto} alt="Second portrait glimpse" className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1310]/30 via-transparent to-transparent" />
                <figcaption className="absolute left-4 bottom-4 rounded-2xl bg-white/80 px-3 py-2 backdrop-blur-md shadow-lg">
                  <p className="text-[10px] uppercase tracking-[0.18em] font-black text-[#D84C1B] font-display">Creative Frame</p>
                </figcaption>
              </div>
            </motion.figure>

            <motion.div
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ type: "spring", stiffness: 80, damping: 16, delay: 0.14 }}
              className="rounded-[28px] bg-gradient-to-br from-[#FDF7F0] to-[#F3E4D8] border border-[#F3E7DD] shadow-[0_20px_50px_rgba(28,19,16,0.08)] p-6 sm:p-7 flex flex-col justify-between"
            >
              <div>
                <p className="text-xs font-black tracking-[0.2em] uppercase text-[#D84C1B] font-display mb-3">What I Keep Capturing</p>
                <h3 className="text-2xl font-serif text-[#1C1310] leading-tight">People, process, and the quiet in-between moments.</h3>
              </div>
              <div className="mt-6 space-y-3 text-sm text-[#5F5650] leading-relaxed">
                {["Portraits that feel warm and honest.", "Soft layouts, clean spacing, and refined details.", "Small glimpses from the work-in-progress journey."].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className={`mt-1 h-2.5 w-2.5 rounded-full shrink-0 ${i === 0 ? "bg-[#D84C1B]" : i === 1 ? "bg-[#FF8A4B]" : "bg-[#9A4E2F]"}`} />
                    <p>{t}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── Journey section ───────────────────────────────── */}
        <div className="mt-16 sm:mt-20">
          {/* Sub-heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
          >
            <div>
              <p className="text-xs font-black tracking-[0.25em] uppercase text-[#D84C1B] mb-2 font-display">The Journey</p>
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1C1310] dark:text-white leading-snug">
                Internships, certifications &amp; milestones.
              </h3>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {(["internship", "certification", "event", "achievement"] as const).map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${typeColors[t].dot}`} />
                  <span className="text-[10px] font-bold font-display text-slate-500 dark:text-slate-400 capitalize">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Horizontal scroll milestone track */}
          <div className="relative">
            {/* Gradient fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-[#F7F4EF] dark:from-[#1a1a1e] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-[#F7F4EF] dark:from-[#1a1a1e] to-transparent z-10" />

            <div className="overflow-x-auto pb-4 scrollbar-none" style={{ scrollbarWidth: "none" }}>
              <div className="flex gap-4 w-max px-2">
                {journeyMilestones.map((m, idx) => {
                  const colors = typeColors[m.type];
                  return (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ type: "spring", stiffness: 80, damping: 16, delay: idx * 0.04 }}
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="group relative w-[140px] sm:w-[150px] shrink-0 overflow-hidden rounded-[18px] neu-card border border-white/45 dark:border-slate-800/40 hover:border-orange-100 dark:hover:border-orange-900/30 transition-all duration-300"
                    >
                      {m.imageSrc && (
                        <div className="absolute inset-x-0 top-0 h-[68px] z-0 overflow-hidden">
                          <img
                            src={m.imageSrc}
                            alt={m.imageAlt ?? m.title}
                            className="h-full w-full object-cover object-center scale-105 transition-transform duration-500 group-hover:scale-[1.08]"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/10 to-[#f7f4ef] dark:to-[#1a1a1e]" />
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.34),transparent_58%)] opacity-80" />
                        </div>
                      )}

                      <div className="relative z-10 flex h-full flex-col p-[6px] pt-[62px]">
                        <div className="rounded-[12px] bg-white/86 dark:bg-[#17171b]/82 backdrop-blur-md border border-white/55 dark:border-white/5 shadow-[0_10px_20px_rgba(28,19,16,0.08)] p-1 flex-1 flex flex-col gap-2 min-h-[120px]">
                          <div className="flex items-start justify-between gap-2">
                            <div className={`w-7 h-7 rounded-lg ${colors.bg} flex items-center justify-center shrink-0 shadow-[0_10px_18px_rgba(28,19,16,0.08)]`}>
                              <span className={`material-symbols-outlined text-[16px] leading-none ${colors.text}`}>
                                {m.icon}
                              </span>
                            </div>
                            {m.badge && (
                              <span className={`text-[8px] font-black font-display px-1.5 py-0.5 rounded-full ${colors.bg} ${colors.text} border border-current/20 shrink-0`}>
                                {m.badge}
                              </span>
                            )}
                          </div>

                          <div className="space-y-1">
                            <h4 className="text-[13px] font-bold text-slate-800 dark:text-slate-100 font-display leading-snug line-clamp-2">
                              {m.title}
                            </h4>
                            <p className="text-[9px] text-slate-500 dark:text-slate-400 font-display leading-snug line-clamp-2">
                              {m.organization}
                            </p>
                          </div>

                          <div className="mt-auto space-y-1">
                            <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100/90 dark:border-slate-800/90">
                              <span className="text-[9px] font-mono text-slate-400 dark:text-slate-500 leading-none">
                                {m.date}
                              </span>
                              <div className="flex items-center gap-1">
                                <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                                <span className={`text-[8px] font-bold font-display capitalize ${colors.text}`}>
                                  {m.type}
                                </span>
                              </div>
                            </div>

                            {m.linkHref && (
                              <a
                                href={encodeURI(m.linkHref)}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-1.5 text-[8px] font-black uppercase tracking-[0.18em] text-solar-orange hover:text-orange-600 transition-colors"
                              >
                                View
                                <span className="material-icons-outlined text-[11px]">open_in_new</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Milestone count summary */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 flex flex-wrap items-center gap-5"
          >
            {[
              { count: "2", label: "Internships" },
              { count: "6+", label: "Certifications" },
              { count: "4+", label: "Events & Workshops" },
              { count: "2+", label: "Achievements" },
            ].map((s, i, arr) => (
              <div key={i} className="flex items-center gap-5">
                <div className="text-center">
                  <span className="text-xl font-bold text-[#1C1310] dark:text-white font-display">{s.count}</span>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-display mt-0.5">{s.label}</span>
                </div>
                {i < arr.length - 1 && <div className="w-px h-7 bg-slate-200 dark:bg-slate-700" />}
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
