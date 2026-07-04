import { motion } from "motion/react";
import { RESUME_PDF } from "../data";

const valueProps = [
  {
    icon: "rocket_launch",
    stat: "3 Live Projects",
    desc: "Real products with real users — not just tutorials or clones.",
    color: "text-[#FF7C00]",
    bg: "bg-orange-50",
    border: "border-orange-100",
  },
  {
    icon: "code",
    stat: "Full-Stack",
    desc: "React · Next.js · Node.js · TypeScript · PostgreSQL · REST APIs.",
    color: "text-violet-600",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: "verified_user",
    stat: "1 Internship",
    desc: "Production code shipped as a Full Stack Web Developer Intern at Future Intern.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: "design_services",
    stat: "Design + Dev",
    desc: "Figma → code → deploy. One person, end-to-end ownership.",
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
];

export default function WhyHireMe() {
  return (
    <section className="pb-4 pt-2 relative" id="value-props">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Available badge + role targeting */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45 }}
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 rounded-full px-4 py-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-700 font-display">
                Available — Jun 2026 onwards
              </span>
            </span>
            <span className="hidden sm:inline-flex items-center gap-2 bg-[#FF7C00]/8 border border-[#FF7C00]/20 rounded-full px-4 py-1.5">
              <span className="material-symbols-outlined text-[#FF7C00] text-[14px]">work</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D84C1B] font-display">
                Seeking Full-Stack · Frontend · SDE roles
              </span>
            </span>
          </div>
        </motion.div>

        {/* Value props */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {valueProps.map((v, i) => (
            <motion.div
              key={v.stat}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring" as const, stiffness: 80, damping: 16, delay: i * 0.09 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`neu-card rounded-[22px] p-5 sm:p-6 border ${v.border} hover:shadow-[0_16px_40px_rgba(28,19,16,0.10)] transition-all duration-300 flex flex-col gap-3`}
            >
              <div className={`w-11 h-11 rounded-2xl ${v.bg} flex items-center justify-center`}>
                <span className={`material-symbols-outlined text-xl ${v.color}`}>{v.icon}</span>
              </div>
              <div>
                <p className={`text-lg font-black font-display leading-tight ${v.color}`}>{v.stat}</p>
                <p className="text-[11px] text-[#5F5650] leading-relaxed mt-1">{v.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA strip */}
        <motion.div
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 p-5 rounded-[20px] bg-gradient-to-r from-[#FFF3EA] to-[#FFF8F3] border border-[#FFD4A8]/50"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.45 }}
        >
          <p className="text-sm text-[#5F5650] text-center sm:text-left">
            <span className="font-bold text-[#1C1310]">B.Tech CSE · VTU · 8.2 CGPA</span>
            {" "}— ready to contribute from day one.
          </p>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                window.dispatchEvent(new CustomEvent("open-resume-modal"));
              }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-[#FF8A4B] to-[#D84C1B] px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.15em] text-white shadow-[0_6px_20px_rgba(255,124,0,0.28)] hover:-translate-y-0.5 transition-transform cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>
              Download Resume
            </button>
            <a
              href="https://linkedin.com/in/devika-sn-50784a338"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] px-5 py-2.5 text-[11px] font-black uppercase tracking-[0.15em] text-white hover:-translate-y-0.5 transition-transform"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              LinkedIn
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
