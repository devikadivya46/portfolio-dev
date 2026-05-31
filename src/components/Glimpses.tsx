import { motion } from "motion/react";
// @ts-ignore
import heroPhoto from "../assets/images/hero-decor.png";
// @ts-ignore
import portraitPhoto from "../assets/images/devika_portrait_1779472832674.png";
import { journeyMilestones, experiences } from "../data";

const typeColors: Record<string, { dot: string; bg: string; text: string }> = {
  internship:    { dot: "bg-[#FF7C00]",   bg: "bg-orange-50",   text: "text-[#FF7C00]"  },
  certification: { dot: "bg-emerald-500", bg: "bg-emerald-50",  text: "text-emerald-600" },
  event:         { dot: "bg-violet-500",  bg: "bg-violet-50",   text: "text-violet-600"  },
  achievement:   { dot: "bg-amber-500",   bg: "bg-amber-50",    text: "text-amber-600"   },
};

const exploring = [
  { icon: "psychology", label: "Generative AI & LLMs", desc: "Prompt engineering, Claude API, multi-modal workflows", color: "bg-violet-50 text-violet-600" },
  { icon: "smart_toy", label: "Agentic AI Systems", desc: "Multi-agent frameworks, tool use, autonomous pipelines", color: "bg-orange-50 text-[#FF7C00]" },
  { icon: "palette", label: "UI/UX Design Systems", desc: "Design tokens, component libraries, editorial layouts", color: "bg-rose-50 text-rose-500" },
  { icon: "hub", label: "Full Stack Architecture", desc: "Next.js 15, edge deployments, scalable REST APIs", color: "bg-emerald-50 text-emerald-600" },
];

export default function Glimpses() {
  return (
    <section id="glimpses" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 space-y-20 sm:space-y-28">

        {/* ── Section header ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative mb-10 sm:mb-14 overflow-visible"
        >
          <span className="absolute -top-4 right-0 text-[7rem] sm:text-[9rem] font-black leading-none select-none pointer-events-none hidden sm:block"
            style={{ color: "rgba(28,19,16,0.038)", fontFamily: "'Outfit',sans-serif" }}>04</span>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] rounded-full bg-[#FF7C00]" />
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#FF7C00] font-display">Behind the Scenes</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-[#FF7C00] opacity-40" />
              <div className="w-2 h-2 rounded-full bg-[#FF8A4B] opacity-25" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#1C1310] font-serif max-w-2xl">
            The Road So Far.
          </h2>
          <div className="mt-3 w-16 h-[3px] rounded-full bg-gradient-to-r from-[#FF8A4B] to-[#D84C1B]" />
          <p className="mt-4 text-[#5F5650] text-base sm:text-lg max-w-2xl leading-relaxed">
            Internships, certifications, milestones — and the things I'm obsessively learning right now.
          </p>
        </motion.div>

        {/* ══════════════════════════════════════════════════
            PART 1 — MY JOURNEY (photo + timeline)
        ══════════════════════════════════════════════════ */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="flex items-end justify-between mb-8 gap-4 flex-wrap"
          >
            <div>
              <span className="inline-block bg-orange-100 text-[#FF7C00] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-3 font-display">
                Part 01
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1C1310] leading-snug">
                My Journey
              </h3>
              <p className="text-sm text-[#5F5650] mt-1">Internships, certifications &amp; milestones — scrollable.</p>
            </div>
            {/* Legend */}
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {(["internship", "certification", "event", "achievement"] as const).map((t) => (
                <div key={t} className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${typeColors[t].dot}`} />
                  <span className="text-[10px] font-bold font-display text-slate-500 capitalize">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Photo + timeline layout */}
          <div className="grid lg:grid-cols-12 gap-6 items-start">

            {/* Portrait card */}
            <motion.figure
              initial={{ y: 24, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 80, damping: 16 }}
              className="lg:col-span-4 overflow-hidden rounded-[28px] shadow-[0_20px_50px_rgba(28,19,16,0.10)] border border-white/60"
            >
              <div className="relative h-[300px] lg:h-[360px]">
                <img src={heroPhoto} alt="Devika portrait" className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1310]/40 via-transparent to-transparent" />
                <figcaption className="absolute left-4 bottom-4 rounded-2xl bg-white/80 px-3 py-2 backdrop-blur-md shadow-lg">
                  <p className="text-[10px] uppercase tracking-[0.2em] font-black text-[#D84C1B] font-display">Creative Frame</p>
                  <p className="text-xs text-[#1C1310] mt-0.5">Calm, warm, and purposeful.</p>
                </figcaption>
              </div>
            </motion.figure>

            {/* Milestone track */}
            <div className="lg:col-span-8">
              <div className="relative">
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#F7F4EF] to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#F7F4EF] to-transparent z-10" />
                <div className="overflow-x-auto pb-3" style={{ scrollbarWidth: "none" }}>
                  <div className="flex gap-3 w-max px-1">
                    {journeyMilestones.map((m, idx) => {
                      const colors = typeColors[m.type];
                      return (
                        <motion.div
                          key={m.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ type: "spring", stiffness: 80, damping: 16, delay: idx * 0.04 }}
                          whileHover={{ y: -4 }}
                          className="group relative w-[148px] shrink-0 overflow-hidden rounded-[18px] neu-card border border-white/50 hover:border-orange-100 transition-all duration-300"
                        >
                          {m.imageSrc && (
                            <div className="absolute inset-x-0 top-0 h-[66px] z-0 overflow-hidden">
                              <img src={m.imageSrc} alt={m.imageAlt ?? m.title}
                                className="h-full w-full object-cover scale-105 group-hover:scale-[1.08] transition-transform duration-500"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f7f4ef]" />
                            </div>
                          )}
                          <div className="relative z-10 flex h-full flex-col p-1.5 pt-[60px]">
                            <div className="rounded-[12px] bg-white/90 backdrop-blur-md border border-white/60 shadow-[0_8px_16px_rgba(28,19,16,0.07)] p-2 flex-1 flex flex-col gap-2 min-h-[118px]">
                              <div className="flex items-start justify-between gap-1">
                                <div className={`w-6 h-6 rounded-lg ${colors.bg} flex items-center justify-center shrink-0`}>
                                  <span className={`material-symbols-outlined text-[14px] leading-none ${colors.text}`}>{m.icon}</span>
                                </div>
                                {m.badge && (
                                  <span className={`text-[8px] font-black font-display px-1.5 py-0.5 rounded-full ${colors.bg} ${colors.text} shrink-0`}>{m.badge}</span>
                                )}
                              </div>
                              <div>
                                <h4 className="text-[12px] font-bold text-[#1C1310] font-display leading-snug line-clamp-2">{m.title}</h4>
                                <p className="text-[9px] text-slate-500 font-display line-clamp-1 mt-0.5">{m.organization}</p>
                              </div>
                              <div className="mt-auto pt-1 border-t border-slate-100/80 flex items-center justify-between">
                                <span className="text-[9px] font-mono text-slate-400">{m.date}</span>
                                <div className="flex items-center gap-1">
                                  <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                                  <span className={`text-[8px] font-bold font-display capitalize ${colors.text}`}>{m.type}</span>
                                </div>
                              </div>
                              {m.linkHref && (
                                <a href={encodeURI(m.linkHref)} target="_blank" rel="noreferrer"
                                  className="text-[8px] font-black uppercase tracking-[0.15em] text-[#FF7C00] hover:text-orange-600 flex items-center gap-1 pointer-events-auto">
                                  View <span className="material-icons-outlined text-[10px]">open_in_new</span>
                                </a>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Journey stats */}
              <motion.div
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-5 flex flex-wrap gap-5"
              >
                {[
                  { count: "2", label: "Internships" },
                  { count: "6+", label: "Certifications" },
                  { count: "4+", label: "Events" },
                  { count: "2+", label: "Achievements" },
                ].map((s, i, arr) => (
                  <div key={i} className="flex items-center gap-5">
                    <div>
                      <span className="text-lg font-bold text-[#1C1310] font-display">{s.count}</span>
                      <span className="block text-[10px] text-slate-400 uppercase tracking-widest font-display">{s.label}</span>
                    </div>
                    {i < arr.length - 1 && <div className="w-px h-6 bg-slate-200" />}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            PART 2 — EXPERIENCES
        ══════════════════════════════════════════════════ */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="mb-8"
          >
            <span className="inline-block bg-orange-100 text-[#FF7C00] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-3 font-display">
              Part 02
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1C1310] leading-snug">
              Experiences
            </h3>
            <p className="text-sm text-[#5F5650] mt-1">Professional internships where I shipped real work.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 80, damping: 16, delay: idx * 0.1 }}
                className="neu-card rounded-[24px] p-6 sm:p-7 border border-white/55 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(28,19,16,0.11)] transition-all duration-300"
              >
                {/* Logo + title row */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 neu-btn-flat rounded-2xl flex items-center justify-center text-[#FF7C00] font-black font-display text-base shrink-0">
                    {exp.logoInitials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1C1310] font-display text-sm leading-tight">{exp.role}</h4>
                    <p className="text-[#FF7C00] text-xs font-semibold font-display">{exp.companyName}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <span className="text-[10px] text-slate-400 font-mono font-bold block">{exp.duration}</span>
                    <span className="text-[10px] text-slate-400 font-display">{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5 text-xs text-[#5F5650] leading-relaxed">
                      <span className="text-[#FF7C00] shrink-0 mt-0.5">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {exp.documentHref && (
                  <a
                    href={encodeURI(exp.documentHref)}
                    target="_blank" rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#FF7C00] px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-[0_8px_20px_rgba(255,124,0,0.28)] hover:-translate-y-0.5 transition-transform"
                  >
                    View Offer Letter
                    <span className="material-icons-outlined text-xs">open_in_new</span>
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            PART 3 — EXPLORING
        ══════════════════════════════════════════════════ */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45 }}
            className="mb-8"
          >
            <span className="inline-block bg-orange-100 text-[#FF7C00] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-3 font-display">
              Part 03
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1C1310] leading-snug">
              Currently Exploring
            </h3>
            <p className="text-sm text-[#5F5650] mt-1">Technologies, ideas, and creative spaces I'm actively learning in.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {exploring.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 80, damping: 16, delay: idx * 0.08 }}
                whileHover={{ y: -5 }}
                className="neu-card rounded-[22px] p-5 sm:p-6 border border-white/55 hover:border-orange-100 transition-all duration-300 flex flex-col gap-4"
              >
                <div className={`w-11 h-11 rounded-2xl ${item.color.split(" ")[0]} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined text-xl ${item.color.split(" ")[1]}`}>{item.icon}</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#1C1310] font-display text-sm leading-tight mb-1.5">{item.label}</h4>
                  <p className="text-xs text-[#5F5650] leading-relaxed">{item.desc}</p>
                </div>
                <div className="mt-auto flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF7C00] animate-pulse" />
                  <span className="text-[9px] font-black uppercase tracking-[0.18em] text-[#FF7C00] font-display">Active</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom accent strip with portrait */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 rounded-[28px] overflow-hidden relative bg-gradient-to-br from-[#FDF7F0] to-[#F3E4D8] border border-[#F3E7DD] shadow-[0_12px_40px_rgba(28,19,16,0.07)] p-7 sm:p-8 flex flex-col sm:flex-row items-center gap-6"
          >
            <img
              src={portraitPhoto}
              alt="Devika exploring"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white shadow-[0_8px_24px_rgba(28,19,16,0.12)] shrink-0"
            />
            <div>
              <p className="text-xs font-black tracking-[0.2em] uppercase text-[#D84C1B] font-display mb-2">A note to myself</p>
              <p className="font-serif italic text-xl sm:text-2xl text-[#1C1310] leading-snug max-w-lg">
                "Stay curious, build things that matter, and design with a heart full of purpose."
              </p>
            </div>
            {/* Decorative dots */}
            <div className="absolute bottom-5 right-6 opacity-25"
              style={{ width: 72, height: 44, backgroundImage: "radial-gradient(circle,#FF7C00 1.3px,transparent 1.3px)", backgroundSize: "10px 10px" }}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
