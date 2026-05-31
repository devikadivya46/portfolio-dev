import { motion } from "motion/react";

const stats = [
  { value: "20+", label: "Projects Built",    icon: "rocket_launch", color: "text-[#FF7C00]",   bg: "bg-orange-50"  },
  { value: "500+",label: "Users Reached",     icon: "group",         color: "text-violet-600",  bg: "bg-violet-50"  },
  { value: "8.2", label: "CGPA / 10",         icon: "school",        color: "text-emerald-600", bg: "bg-emerald-50" },
  { value: "2",   label: "Internships",       icon: "work",          color: "text-blue-600",    bg: "bg-blue-50"    },
  { value: "6+",  label: "Certifications",    icon: "verified",      color: "text-amber-600",   bg: "bg-amber-50"   },
  { value: "1st", label: "IDEATHON Winner",   icon: "emoji_events",  color: "text-[#D84C1B]",   bg: "bg-red-50"     },
];

const recognitions = [
  { label: "1st Place", event: "IDEATHON Competition",      year: "2025", icon: "emoji_events" },
  { label: "Rank 4",    event: "Code Begin Contest",         year: "2025", icon: "terminal"     },
  { label: "Awardee",   event: "Pitch Your Idea Challenge",  year: "2025", icon: "lightbulb"    },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 relative" id="recognition">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Heading */}
        <motion.div
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-orange-100 text-[#FF7C00] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-3 font-display">
            By The Numbers
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1C1310] leading-snug">
            Real results, honest numbers.
          </h2>
          <p className="mt-2 text-sm text-[#5F5650] max-w-lg">
            Verified achievements and competition results — no fabricated quotes.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 80, damping: 16, delay: i * 0.07 }}
              className="neu-card rounded-[20px] p-5 border border-white/55 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center gap-3"
            >
              <div className={`w-10 h-10 rounded-2xl ${s.bg} flex items-center justify-center`}>
                <span className={`material-symbols-outlined text-xl ${s.color}`}>{s.icon}</span>
              </div>
              <div>
                <p className={`text-2xl font-black font-display leading-none ${s.color}`}>{s.value}</p>
                <p className="text-[10px] text-[#9A8070] uppercase tracking-[0.14em] font-display font-bold mt-1 leading-tight">{s.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Competition results */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="neu-card rounded-[24px] p-6 sm:p-8 border border-white/55"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.22em] text-[#FF7C00] font-display mb-5">
            Competition Results
          </p>

          <div className="grid sm:grid-cols-3 gap-5">
            {recognitions.map((r, i) => (
              <motion.div
                key={r.event}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="material-symbols-outlined text-[#FF7C00] text-[18px]">{r.icon}</span>
                </div>
                <div>
                  <p className="text-xs font-black text-[#1C1310] font-display">{r.label}</p>
                  <p className="text-[11px] text-[#5F5650] leading-snug mt-0.5">{r.event}</p>
                  <p className="text-[10px] text-[#9A8070] font-display mt-0.5">{r.year}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Verification CTA */}
          <div className="mt-6 pt-5 border-t border-[#E8E0D7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-[11px] text-[#5F5650] italic">
              Offer letters and certificates available in the Awards section above.
            </p>
            <a
              href="https://linkedin.com/in/devika-sn-50784a338"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white hover:-translate-y-0.5 transition-transform"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              View LinkedIn
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
