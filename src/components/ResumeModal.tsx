import { motion, AnimatePresence } from "motion/react";
import { RESUME_PDF } from "../data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
} as const;

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-md selection:bg-orange-500/30">
          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative flex h-full max-h-[92vh] w-full max-w-5xl flex-col rounded-3xl bg-white shadow-2xl overflow-hidden"
          >
            {/* Header / Controls */}
            <div className="flex items-center justify-between gap-2 border-b border-slate-100 bg-slate-50/50 px-4 py-3 sm:px-6 sm:py-4">
              <div className="flex min-w-0 items-center gap-2">
                <span className="material-symbols-outlined text-solar-orange shrink-0">
                  badge
                </span>
                <span className="truncate font-display text-xs sm:text-sm font-extrabold uppercase tracking-wider text-slate-800">
                  Resume & CV
                </span>
                <span className="hidden sm:inline-block shrink-0 rounded-full bg-emerald-100 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-emerald-800 animate-pulse">
                  Up-To-Date
                </span>
              </div>
              <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
                <a
                  href={RESUME_PDF}
                  download
                  className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-br from-[#FF8A4B] to-[#D84C1B] px-3.5 sm:px-5 py-2 text-[11px] sm:text-xs font-black uppercase tracking-wider text-white shadow-md hover:-translate-y-0.5 transition-transform cursor-pointer whitespace-nowrap"
                >
                  <span className="material-icons-outlined text-sm">download</span>
                  Download
                </a>
                <button
                  onClick={onClose}
                  className="shrink-0 rounded-full bg-slate-100 p-2 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors cursor-pointer"
                  title="Close"
                >
                  <span className="material-icons-outlined text-lg block">close</span>
                </button>
              </div>
            </div>

            {/* Resume Canvas (Scrollable area) */}
            <div className="flex-1 overflow-y-auto bg-slate-100/50 p-3 sm:p-10">
              {/* Printable Area (Simulating an A4 paper sheet with premium animations) */}
              <motion.div
                id="printable-resume-area"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="mx-auto w-full max-w-[210mm] bg-white p-5 sm:p-14 shadow-lg rounded-2xl text-slate-900 border border-slate-100/60"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {/* Header Block */}
                <motion.div variants={itemVariants} className="border-b-2 border-slate-900 pb-4 text-center">
                  <h1 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950">
                    DEVIKA S N
                  </h1>
                  <p className="mt-2.5 text-[11px] font-medium tracking-wide text-slate-600 flex flex-wrap justify-center gap-x-3 gap-y-1 font-sans">
                    <span className="hover:text-slate-900 transition-colors cursor-pointer">8088376546</span>
                    <span className="text-slate-300">|</span>
                    <span className="hover:text-slate-900 transition-colors cursor-pointer">devikadivyasn@gmail.com</span>
                    <span className="text-slate-300">|</span>
                    <span className="hover:text-slate-900 transition-colors cursor-pointer">Shivamogga, Karnataka</span>
                  </p>
                  <p className="mt-1 text-[11px] font-medium text-slate-500 flex flex-wrap justify-center gap-x-3 gap-y-1 font-sans">
                    <motion.a
                      href="https://linkedin.com/in/devika-sn-50784a338"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="hover:text-orange-600 underline decoration-slate-300 hover:decoration-orange-600 transition-colors inline-block"
                    >
                      linkedin.com/in/devika-sn-50784a338
                    </motion.a>
                    <span className="text-slate-300">|</span>
                    <motion.a
                      href="https://github.com/devikadivya46"
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.02 }}
                      className="hover:text-orange-600 underline decoration-slate-300 hover:decoration-orange-600 transition-colors inline-block"
                    >
                      github.com/devikadivya46
                    </motion.a>
                  </p>
                </motion.div>
 
                {/* Main Content Layout */}
                <div className="mt-6 space-y-5 text-[11px] text-slate-800 leading-relaxed font-sans">
                  
                  {/* Career Objective */}
                  <motion.div 
                    variants={itemVariants}
                    className="group/section hover:bg-slate-50/50 p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-xl transition-all duration-300"
                  >
                    <h2 className="font-serif text-[12px] font-bold uppercase tracking-widest text-slate-950 border-b border-slate-200 pb-1 mb-2 group-hover/section:border-orange-500/30 transition-colors">
                      CAREER OBJECTIVE
                    </h2>
                    <p className="text-slate-700 leading-relaxed text-justify">
                      Motivated Computer Science undergraduate (CGPA 8.2) with hands-on full-stack development experience in React, Node.js, and MongoDB. Demonstrated ability to design and deliver end-to-end web solutions across NGO and HR-tech domains. Seeking a software engineering internship to build impactful, user-centric applications.
                    </p>
                  </motion.div>
 
                  {/* Education */}
                  <motion.div 
                    variants={itemVariants}
                    className="group/section hover:bg-slate-50/50 p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-xl transition-all duration-300"
                  >
                    <h2 className="font-serif text-[12px] font-bold uppercase tracking-widest text-slate-950 border-b border-slate-200 pb-1 mb-2 group-hover/section:border-orange-500/30 transition-colors">
                      EDUCATION
                    </h2>
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-slate-950">B.Tech in Computer Science & Engineering</p>
                          <p className="text-slate-600">PES Institute of Technology and Management, Shivamogga (VTU)</p>
                          <p className="text-slate-500 italic mt-0.5">CGPA: 8.20 / 10</p>
                        </div>
                        <p className="text-right font-semibold text-slate-700 whitespace-nowrap">Aug 2024 – Jun 2028</p>
                      </div>
 
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-slate-950">Class XII (Pre-University Study)</p>
                          <p className="text-slate-600">HKS PU College | State Board</p>
                          <p className="text-slate-500 italic mt-0.5">Percentage: 89%</p>
                        </div>
                        <p className="text-right font-semibold text-slate-700 whitespace-nowrap">Mar 2023</p>
                      </div>
 
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-bold text-slate-950">Class X (High School)</p>
                          <p className="text-slate-600">Rotary English School | State Board</p>
                          <p className="text-slate-500 italic mt-0.5">Percentage: 96%</p>
                        </div>
                        <p className="text-right font-semibold text-slate-700 whitespace-nowrap">Mar 2021</p>
                      </div>
                    </div>
                  </motion.div>
 
                  {/* Skills Grid */}
                  <motion.div 
                    variants={itemVariants}
                    className="group/section hover:bg-slate-50/50 p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-xl transition-all duration-300"
                  >
                    <h2 className="font-serif text-[12px] font-bold uppercase tracking-widest text-slate-950 border-b border-slate-200 pb-1 mb-2 group-hover/section:border-orange-500/30 transition-colors">
                      TECHNICAL & SOFT SKILLS
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 leading-snug">
                      <p><strong>Languages:</strong> <span className="text-slate-700">Python, JavaScript, SQL, HTML, CSS</span></p>
                      <p><strong>Frameworks & Libraries:</strong> <span className="text-slate-700">React.js, Next.js, Node.js, Express.js, Tailwind CSS</span></p>
                      <p><strong>Databases:</strong> <span className="text-slate-700">MySQL, MongoDB</span></p>
                      <p><strong>Tools & Platforms:</strong> <span className="text-slate-700">Git, GitHub, Postman, VS Code, Vercel, REST APIs</span></p>
                      <p className="sm:col-span-2 mt-0.5"><strong>Soft Skills:</strong> <span className="text-slate-700">Communication, Leadership, Event Coordination, Team Collaboration</span></p>
                    </div>
                  </motion.div>
 
                  {/* Internship Experience */}
                  <motion.div 
                    variants={itemVariants}
                    className="group/section hover:bg-slate-50/50 p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-xl transition-all duration-300"
                  >
                    <h2 className="font-serif text-[12px] font-bold uppercase tracking-widest text-slate-950 border-b border-slate-200 pb-1 mb-2 group-hover/section:border-orange-500/30 transition-colors">
                      INTERNSHIP EXPERIENCE
                    </h2>
                    <div>
                      <div className="flex justify-between items-start mb-1.5">
                        <div>
                          <span className="font-bold text-slate-950">Full Stack Web Developer Intern</span>
                          <span className="text-slate-600 font-medium"> — Future Intern</span>
                        </div>
                        <p className="text-right font-semibold text-slate-700 whitespace-nowrap">May 2025 – Jul 2025</p>
                      </div>
                      <ul className="list-disc pl-4 space-y-1 text-slate-700 text-justify">
                        <li>Developed and deployed responsive web applications using React.js and Node.js, building reusable UI components and MongoDB-backed REST APIs across multiple client projects.</li>
                        <li>Contributed to Git-based version control workflows, maintained clean component architecture, and participated in code reviews.</li>
                      </ul>
                    </div>
                  </motion.div>
 
                  {/* Projects */}
                  <motion.div 
                    variants={itemVariants}
                    className="group/section hover:bg-slate-50/50 p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-xl transition-all duration-300"
                  >
                    <h2 className="font-serif text-[12px] font-bold uppercase tracking-widest text-slate-950 border-b border-slate-200 pb-1 mb-2 group-hover/section:border-orange-500/30 transition-colors">
                      PROJECTS
                    </h2>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-start mb-1.5">
                          <div>
                            <span className="font-bold text-slate-950">ClenorX Foundation — Financial Literacy NGO Platform</span>
                            <span className="text-slate-500 italic block sm:inline sm:ml-2">Next.js, React.js, Tailwind CSS, Vercel</span>
                          </div>
                          <p className="text-right font-semibold text-slate-700 whitespace-nowrap">2025</p>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-slate-700 text-justify">
                          <li>Designed and built a full-stack NGO platform empowering children and SHGs in rural Karnataka with financial literacy education — volunteer registration, donation portal, and contact system.</li>
                          <li>Deployed on Vercel with mobile-responsive design, reaching 500+ students and SHG members across Tier-3 cities in Karnataka.</li>
                        </ul>
                      </div>
 
                      <div>
                        <div className="flex justify-between items-start mb-1.5">
                          <div>
                            <span className="font-bold text-slate-950">Anvesync — Workforce Management Platform</span>
                            <span className="text-slate-500 italic block sm:inline sm:ml-2">Next.js, TypeScript, Prisma, Tailwind CSS, PostgreSQL</span>
                          </div>
                          <p className="text-right font-semibold text-slate-700 whitespace-nowrap">2026</p>
                        </div>
                        <ul className="list-disc pl-4 space-y-1 text-slate-700 text-justify">
                          <li>Built a full-stack HR platform with employee records, location-aware attendance, leave management, and admin analytics with role-based access control (Admin / Manager / Employee).</li>
                          <li>Implemented secure Next.js API routes backed by Prisma ORM and PostgreSQL for scalable multi-role data access.</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
 
                  {/* Certifications */}
                  <motion.div 
                    variants={itemVariants}
                    className="group/section hover:bg-slate-50/50 p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-xl transition-all duration-300"
                  >
                    <h2 className="font-serif text-[12px] font-bold uppercase tracking-widest text-slate-950 border-b border-slate-200 pb-1 mb-2 group-hover/section:border-orange-500/30 transition-colors">
                      CERTIFICATIONS
                    </h2>
                    <ul className="list-disc pl-4 space-y-1 text-slate-700">
                      <li><strong>NPTEL Elite Gold:</strong> Programming in Python, NPTEL (IIT Madras)</li>
                      <li><strong>Python (Basic) Certificate:</strong> HackerRank</li>
                      <li><strong>Python Foundation Certificate:</strong> Infosys Springboard</li>
                    </ul>
                  </motion.div>
 
                  {/* Achievements */}
                  <motion.div 
                    variants={itemVariants}
                    className="group/section hover:bg-slate-50/50 p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-xl transition-all duration-300"
                  >
                    <h2 className="font-serif text-[12px] font-bold uppercase tracking-widest text-slate-950 border-b border-slate-200 pb-1 mb-2 group-hover/section:border-orange-500/30 transition-colors">
                      ACHIEVEMENTS
                    </h2>
                    <ul className="list-disc pl-4 space-y-1 text-slate-700">
                      <li><strong>Winner — IDEATHON:</strong> Secured 1st place for innovative problem-solving and product ideation.</li>
                      <li><strong>4th Place — Code Begin:</strong> Ranked 4th in a competitive coding event among undergraduate participants.</li>
                      <li><strong>Prize — Pitch Your Idea:</strong> Recognised for impactful business pitch at an inter-college event.</li>
                    </ul>
                  </motion.div>
 
                  {/* Extracurriculars & Leadership */}
                  <motion.div 
                    variants={itemVariants}
                    className="group/section hover:bg-slate-50/50 p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-xl transition-all duration-300"
                  >
                    <h2 className="font-serif text-[12px] font-bold uppercase tracking-widest text-slate-950 border-b border-slate-200 pb-1 mb-2 group-hover/section:border-orange-500/30 transition-colors">
                      EXTRACURRICULAR & LEADERSHIP
                    </h2>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-baseline mb-0.5">
                          <p className="font-bold text-slate-950">Campus Mantri, GeeksforGeeks</p>
                          <p className="text-slate-500 font-semibold italic text-[10px]">Present</p>
                        </div>
                        <p className="text-slate-700 text-[11px] leading-relaxed text-justify pl-4 border-l border-slate-200">
                          Serve as official student representative for GeeksforGeeks on campus, promoting coding culture and driving platform engagement. Organise coding contests, workshops, and awareness sessions to encourage participation in DSA and competitive programming.
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between items-baseline mb-0.5">
                          <p className="font-bold text-slate-950">Campus Ambassador, Anvesana Innovation & Entrepreneurial Forum</p>
                          <p className="text-slate-500 font-semibold italic text-[10px]">Aug 2025 – Present</p>
                        </div>
                        <p className="text-slate-700 text-[11px] leading-relaxed text-justify pl-4 border-l border-slate-200">
                          Organised 4+ technical events and workshops with 30+ student participants.
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between items-baseline mb-0.5">
                          <p className="font-bold text-slate-950">Core Member, ASTRA Club</p>
                          <p className="text-slate-500 font-semibold italic text-[10px]">Active</p>
                        </div>
                        <p className="text-slate-700 text-[11px] leading-relaxed text-justify pl-4 border-l border-slate-200">
                          Coordinated coding sessions, project development, and peer mentorship programmes.
                        </p>
                      </div>
                    </div>
                  </motion.div>
 
                  {/* Languages */}
                  <motion.div 
                    variants={itemVariants}
                    className="group/section hover:bg-slate-50/50 p-3 sm:p-4 -mx-3 sm:-mx-4 rounded-xl transition-all duration-300"
                  >
                    <h2 className="font-serif text-[12px] font-bold uppercase tracking-widest text-slate-950 border-b border-slate-200 pb-1 mb-1.5 group-hover/section:border-orange-500/30 transition-colors">
                      LANGUAGES
                    </h2>
                    <p className="text-slate-700 font-semibold">
                      English (Fluent) <span className="text-slate-300 mx-1.5">|</span> Kannada (Native) <span className="text-slate-300 mx-1.5">|</span> Hindi (Conversational)
                    </p>
                  </motion.div>
 
                </div>
              </motion.div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
