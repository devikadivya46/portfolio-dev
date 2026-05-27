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
      transition: { type: "spring", stiffness: 80, damping: 15 },
    },
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
      }, 5000);
    }, 1200);
  };

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      
      {/* Decorative gradient overlay */}
      <div className="absolute top-[30%] left-[-10%] w-[400px] aspect-square rounded-full bg-gradient-to-tr from-amber-200/20 to-transparent blur-3xl dark:from-orange-500/5 dark:to-transparent pointer-events-none select-none z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        {/* Symmetrical Section Header */}
        <div className="mb-16 text-center md:text-left select-none">
          <p className="text-solar-orange text-xs font-bold tracking-[0.25em] uppercase font-display mb-3">✦ GET IN TOUCH ✦</p>
          <h2 className="text-4xl md:text-5xl font-black font-serif tracking-tight text-slate-900 dark:text-white">
            Let's create something <span className="italic font-normal">extraordinary</span> together.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 items-stretch">
          
          {/* LEFT COLUMN: Hand-Drawn Doodle Frame & Personal Information Cards */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-8 order-2 lg:order-1">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col gap-8 h-full justify-between"
            >
              
              {/* Hand-Drawn Doodle Frame wrapper resembling the style of About/Skills */}
              <div className="neu-card p-6 md:p-8 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden bg-white/50 dark:bg-slate-900/10 border border-slate-200/50 dark:border-slate-800/40">
                <div className="w-[180px] sm:w-[220px] pointer-events-none select-none z-10 transform hover:scale-105 transition-transform duration-500">
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
                <div className="neu-card p-5 rounded-2xl flex items-center gap-4 border border-orange-100/30 dark:border-slate-800/20">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-slate-900 border border-orange-100/50 dark:border-slate-800 flex items-center justify-center text-solar-orange">
                    <span className="material-symbols-outlined text-lg">mail</span>
                  </div>
                  <div className="text-left font-display">
                    <span className="block text-[8px] uppercase font-black tracking-widest text-slate-400">EMAIL ADDRESS</span>
                    <a href="mailto:devikadivyasn@gmail.com" className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-solar-orange transition-colors">
                      devikadivyasn@gmail.com
                    </a>
                  </div>
                </div>

                <div className="neu-card p-5 rounded-2xl flex items-center gap-4 border border-orange-100/30 dark:border-slate-800/20">
                  <div className="w-11 h-11 rounded-xl bg-orange-50 dark:bg-slate-900 border border-orange-100/50 dark:border-slate-800 flex items-center justify-center text-solar-orange">
                    <span className="material-symbols-outlined text-lg">phone_iphone</span>
                  </div>
                  <div className="text-left font-display">
                    <span className="block text-[8px] uppercase font-black tracking-widest text-slate-400">PHONE LINE</span>
                    <a href="tel:8088376546" className="text-sm font-bold text-slate-700 dark:text-slate-200 hover:text-solar-orange transition-colors">
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
                      className="w-10 h-10 rounded-full border border-slate-300 dark:border-slate-800 hover:border-orange-505 flex items-center justify-center text-xs font-bold font-display text-slate-650 dark:text-slate-400 hover:text-solar-orange transition-colors"
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
              className="p-8 md:p-10 rounded-[32px] bg-[#FFFAF5] dark:bg-[#16161a] border border-orange-100/45 dark:border-slate-800/40 shadow-neu-flat dark:shadow-neu-flat-dark h-full flex flex-col justify-between"
            >
              <div>
                <motion.div variants={itemVariants} className="mb-8 select-none text-left">
                  <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-white mb-2">
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
                          className="w-full py-2.5 bg-transparent border-b border-slate-300 dark:border-slate-800 focus:border-solar-orange dark:focus:border-solar-orange outline-none transition-colors text-slate-850 dark:text-white font-medium text-sm"
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
                          className="w-full py-2.5 bg-transparent border-b border-slate-300 dark:border-slate-800 focus:border-solar-orange dark:focus:border-solar-orange outline-none transition-colors text-slate-850 dark:text-white font-medium text-sm"
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
                          className="w-full py-2.5 bg-transparent border-b border-slate-300 dark:border-slate-800 focus:border-solar-orange dark:focus:border-solar-orange outline-none resize-none transition-colors text-slate-850 dark:text-white font-medium text-sm leading-relaxed"
                        />
                      </motion.div>

                      <motion.button
                        variants={itemVariants}
                        type="submit"
                        disabled={submitting}
                        className="w-full mt-4 bg-slate-900 hover:bg-slate-850 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-950 py-3.5 rounded-xl font-bold uppercase tracking-wider text-xs font-display flex items-center justify-center gap-2 shadow-sm hover:opacity-95 transition-all duration-300 cursor-pointer"
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
                      transition={{ type: "spring", duration: 0.5 }}
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
