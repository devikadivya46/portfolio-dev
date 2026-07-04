import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CONTACT_TALKING_CHARS, socialLinks } from "../data";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 80, damping: 15 },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitting(true);
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.open(`mailto:devikadivyasn@gmail.com?subject=${subject}&body=${body}`);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
      }, 4000);
    }, 600);
  };

  return (
    <section className="py-20 sm:py-24 relative overflow-hidden" id="contact">
      
      {/* Decorative gradient overlay */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] aspect-square rounded-full bg-gradient-to-tr from-amber-200/20 to-transparent blur-3xl dark:from-orange-500/5 dark:to-transparent pointer-events-none select-none z-0" />

      <div className="container mx-auto px-4 sm:px-6 max-w-7xl relative z-10">
        
        {/* Symmetrical Section Header */}
        <div className="relative mb-12 sm:mb-16 overflow-visible">
          <span className="absolute -top-4 right-0 text-[7rem] sm:text-[9rem] font-black leading-none select-none pointer-events-none hidden sm:block"
            style={{ color: "rgba(28,19,16,0.038)", fontFamily: "'Outfit',sans-serif" }}>07</span>

          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] rounded-full bg-[#FF7C00]" />
            <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#FF7C00] font-display">Let's Connect</span>
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-[#FF7C00] opacity-40" />
              <div className="w-2 h-2 rounded-full bg-[#FF8A4B] opacity-25" />
              <div className="w-2 h-2 rounded-full bg-[#FFB38A] opacity-15" />
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold tracking-tight text-[#1C1310]">
            Let's Build<br className="hidden sm:block" /> Something Real.
          </h2>
          <div className="mt-3 w-16 h-[3px] rounded-full bg-gradient-to-r from-[#FF8A4B] to-[#D84C1B]" />
          <p className="mt-4 text-[#5F5650] text-base sm:text-lg max-w-xl leading-relaxed">
            Open to internships, freelance collaborations, and projects worth building. Let's talk.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-y-10 lg:gap-y-0 lg:gap-x-12 items-stretch">
          
          {/* LEFT COLUMN: Hand-Drawn Doodle Frame & Personal Information Cards */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-6 sm:gap-8 order-2 lg:order-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-6 sm:gap-8 h-full justify-between"
            >
              
              {/* Hand-Drawn Doodle Frame wrapper resembling the style of About/Skills */}
              <div className="premium-card p-5 sm:p-6 md:p-8 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden border border-white/20 dark:border-slate-700/40">
                <div className="w-[160px] sm:w-[220px] pointer-events-none select-none z-10 transform hover:scale-105 transition-transform duration-500">
                  <img
                    src={CONTACT_TALKING_CHARS}
                    alt="Contact illustration"
                    className="w-full h-auto filter dark:invert dark:opacity-85"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute top-4 left-4 bg-orange-100/50 dark:bg-orange-900/10 px-3 py-1 rounded-md text-[9px] font-black uppercase text-solar-orange font-display select-none">
                  Shivamogga, India
                </div>
              </div>

              {/* Quick info cards */}
              <div className="space-y-4">
                <div className="premium-card p-4 sm:p-5 rounded-2xl flex items-center gap-4 border border-white/20 dark:border-slate-700/40">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-slate-900 border border-orange-100/50 dark:border-slate-800 flex items-center justify-center text-solar-orange">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </div>
                  <div className="text-left font-display">
                    <span className="block text-[8px] uppercase font-black tracking-widest text-slate-400">EMAIL ADDRESS</span>
                    <a href="mailto:devikadivyasn@gmail.com" className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-gradient-start transition-colors">
                      devikadivyasn@gmail.com
                    </a>
                  </div>
                </div>

                <div className="neu-card p-4 sm:p-5 rounded-2xl flex items-center gap-4 border border-white/20 dark:border-slate-700/40">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-slate-900 border border-orange-100/50 dark:border-slate-800 flex items-center justify-center text-solar-orange">
                    <span className="material-symbols-outlined text-lg">phone_iphone</span>
                  </div>
                  <div className="text-left font-display">
                    <span className="block text-[8px] uppercase font-black tracking-widest text-slate-400">PHONE LINE</span>
                    <a href="tel:8088376546" className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-gradient-start transition-colors">
                      +91 8088376546
                    </a>
                  </div>
                </div>
              </div>

              {/* Symmetrical Social Circles */}
              <div className="flex justify-center lg:justify-start gap-3 select-none pl-1 pb-1">
                {socialLinks.map((social) => {
                  let displayName = social.name === "LinkedIn" ? "in" : social.name === "GitHub" ? "git" : "ig";
                  return (
                    <motion.a
                      key={social.name}
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.94 }}
                      className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-700 hover:border-gradient-start flex items-center justify-center text-xs font-bold font-display text-slate-700 dark:text-slate-400 hover:text-gradient-start transition-colors"
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={social.name}
                    >
                      {displayName}
                    </motion.a>
                  );
                })}
              </div>

            </motion.div>
          </div>

          {/* RIGHT COLUMN: Premium Embedded Inquiry/Form Card */}
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-between order-1 lg:order-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="p-5 sm:p-8 md:p-10 rounded-[28px] sm:rounded-[32px] premium-card h-full flex flex-col justify-between"
            >
              <div>
                <motion.div variants={itemVariants} className="mb-8 select-none text-left">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-800 dark:text-white mb-2">
                    Send a Message
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400 font-display font-medium leading-relaxed">
                    Have an idea, project blueprint, or just want to discuss an opportunity? Drop me a transmission below.
                  </p>
                </motion.div>

                <AnimatePresence mode="wait">
                  {!submitted ? (
                    <motion.form 
                      onSubmit={handleSubmit} 
                      className="space-y-6 text-left" 
                      id="collab-form"
                      key="contact-form"
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div variants={itemVariants} className="space-y-1.5">
                        <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500 font-display">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Nicola Tesla"
                          className="w-full py-2.5 bg-transparent border-b border-slate-300 dark:border-slate-800 focus:border-gradient-start dark:focus:border-gradient-start outline-none transition-colors text-slate-900 dark:text-white font-medium text-sm"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-1.5">
                        <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500 font-display">
                          Your Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. nicola@cosmic.org"
                          className="w-full py-2.5 bg-transparent border-b border-slate-300 dark:border-slate-800 focus:border-gradient-start dark:focus:border-gradient-start outline-none transition-colors text-slate-900 dark:text-white font-medium text-sm"
                        />
                      </motion.div>

                      <motion.div variants={itemVariants} className="space-y-1.5">
                        <label className="block text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500 font-display">
                          Project Details
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Describe your design or engineering requirements..."
                          className="w-full py-2.5 bg-transparent border-b border-slate-300 dark:border-slate-800 focus:border-gradient-start dark:focus:border-gradient-start outline-none resize-none transition-colors text-slate-900 dark:text-white font-medium text-sm leading-relaxed"
                        />
                      </motion.div>

                      <motion.button
                        variants={itemVariants}
                        type="submit"
                        disabled={submitting}
                        className="w-full mt-4 premium-button py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs font-display flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
                      >
                        {submitting ? (
                          "Transmitting..."
                        ) : (
                          <>
                            Transmit Message
                            <span className="material-icons-outlined text-sm font-bold">arrow_forward</span>
                          </>
                        )}
                      </motion.button>
                    </motion.form>
                  ) : (
                    <motion.div
                      className="text-center py-8"
                      id="form-success-box"
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring" as const, duration: 0.5 }}
                    >
                      <div className="w-16 h-16 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 border border-emerald-500/10 shadow-sm">
                        <span className="material-icons-outlined text-2xl font-bold">check</span>
                      </div>
                      <h4 className="text-xl font-bold font-display text-slate-800 dark:text-white mb-2">
                        Transmission Shared!
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-display px-4">
                        Thank you <strong>{name}</strong>! Your transmission was sent successfully. I will get back to you at <strong>{email}</strong> shortly.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
