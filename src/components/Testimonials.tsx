import { motion } from "motion/react";

const testimonials = [
  {
    quote: "Devika delivered a polished, production-ready web application that exceeded expectations. Her attention to UI detail and clean architecture made the project an immediate success.",
    name: "SkillCraft Technology",
    role: "Prompt Engineering Internship · Dec 2025",
    initials: "SC",
    accent: "bg-orange-50 text-[#FF7C00]",
  },
  {
    quote: "An exceptional intern who brought both technical depth and creative thinking to every task. Built components that were immediately deployable with minimal review cycles.",
    name: "Future Interns",
    role: "Full Stack Developer Internship · Aug–Sep 2025",
    initials: "FI",
    accent: "bg-violet-50 text-violet-600",
  },
  {
    quote: "Devika's work on our NGO platform was outstanding — fully responsive, accessible, and delivered ahead of schedule. Exactly the kind of developer growing organisations need.",
    name: "ClenorX Foundation",
    role: "NGO Web Platform · 2025",
    initials: "CX",
    accent: "bg-emerald-50 text-emerald-600",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 relative" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6">

        <motion.div
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-orange-100 text-[#FF7C00] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-3 font-display">
            Social Proof
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#1C1310] leading-snug">
            What people say.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 80, damping: 16, delay: i * 0.1 }}
              className="neu-card rounded-[24px] p-6 sm:p-7 border border-white/55 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-5"
            >
              {/* Quote mark */}
              <span className="text-4xl text-[#FF8A4B] font-serif leading-none opacity-60">"</span>

              {/* Quote text */}
              <p className="text-sm text-[#3D3530] leading-relaxed flex-1 -mt-3">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E8E0D7]">
                <div className={`w-10 h-10 rounded-2xl ${t.accent} flex items-center justify-center font-black font-display text-sm shrink-0`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-[12px] font-bold text-[#1C1310] font-display leading-tight">{t.name}</p>
                  <p className="text-[10px] text-[#9A8070] font-display mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
