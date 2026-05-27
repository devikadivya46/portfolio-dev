import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CONTACT_TALKING_CHARS } from "../data";

export default function Contact() {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const headingContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const headingItemVariants = {
    hidden: { y: 35, opacity: 0 },
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
    // Simulate real server/network submission latency
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      // Reset after a short period
      setTimeout(() => {
        setSubmitted(false);
        setName("");
        setEmail("");
        setMessage("");
        setShowForm(false);
      }, 3500);
    }, 1200);
  };

  return (
    <section className="py-32 relative" id="contact">
      <div className="container mx-auto px-6">
        <div className="neu-card p-12 md:p-24 rounded-3xl relative overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-20 items-center">
            {/* Left Contact Content Column */}
            <motion.div
              id="contact-info"
              variants={headingContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <motion.h2
                className="text-6xl md:text-7xl font-bold mb-10 tracking-tighter text-slate-800 dark:text-white font-display"
                variants={headingItemVariants}
              >
                Time to Shine!<br />Drop a line!
              </motion.h2>
              
              <motion.div
                className="space-y-6 text-xl mb-16"
                variants={headingItemVariants}
              >
                <p className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                  <span className="w-10 h-10 flex items-center justify-center neu-btn-flat rounded-full text-solar-orange select-none">
                    <span className="material-icons-outlined text-sm">email</span>
                  </span>
                  devikadivyasn@gmail.com
                </p>
                
                <p className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                  <span className="w-10 h-10 flex items-center justify-center neu-btn-flat rounded-full text-solar-orange select-none">
                    <span className="material-icons-outlined text-sm">phone</span>
                  </span>
                  8088376546
                </p>
                
                <p className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
                  <span className="w-10 h-10 flex items-center justify-center neu-btn-flat rounded-full text-solar-orange select-none">
                    <span className="material-icons-outlined text-sm">location_on</span>
                  </span>
                  Shivamogga, Karnataka
                </p>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-8 items-center"
                variants={headingItemVariants}
              >
                {/* primary action triggers custom interactive inline form instead of just dead mailto */}
                <button
                  id="btn-collaborate-form"
                  onClick={() => setShowForm(true)}
                  className="neu-btn-primary text-white px-12 py-6 rounded-full font-black uppercase tracking-widest text-sm hover:opacity-95 transition-all font-display cursor-pointer"
                >
                  Let's collaborate
                </button>
                
                <div className="flex gap-8 text-xs font-black uppercase tracking-[0.2em] text-slate-500 font-display">
                  <a className="hover:text-solar-orange transition-colors" href="https://linkedin.com/in/devika-sn-50784a338" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a className="hover:text-solar-orange transition-colors" href="https://github.com/devikadivya46" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Talking Character Vector Column */}
            <div className="md:flex justify-center flex">
              <div className="p-6 neu-card rounded-full bg-surface dark:bg-slate-900 select-none pointer-events-none">
                <img
                  alt="Minimalist line art illustration of two characters conversing via telephones"
                  className="w-full max-w-md mx-auto object-contain transform hover:scale-105 transition-transform duration-500"
                  src={CONTACT_TALKING_CHARS}
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

          {/* Background constellation decorative doodle element */}
          <div className="absolute top-10 right-10 opacity-5 pointer-events-none select-none">
            <span className="material-icons-outlined text-9xl">brightness_4</span>
          </div>
        </div>
      </div>

      {/* Interactive Neomorphic Collaboration Form Modal overlay */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              id="message-panel"
              className="neu-card w-full max-w-lg p-10 rounded-3xl relative border border-slate-200 dark:border-slate-800"
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
            >
              <button
                id="close-form-btn"
                className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center neu-btn-flat text-slate-500 hover:text-solar-orange transition-colors"
                onClick={() => setShowForm(false)}
              >
                <span className="material-icons-outlined text-xl">close</span>
              </button>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6" id="collab-form">
                  <h3 className="text-3xl font-bold font-display text-slate-800 dark:text-white mb-2">
                    Let's Build Something Space-Age!
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 font-display">
                    Fill out the sketchpad details below and send them directly to Devika.
                  </p>
                  
                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-black tracking-widest text-slate-400 font-display">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Nicola Tesla"
                      className="w-full py-3 bg-transparent border-b border-slate-300 dark:border-slate-700 focus:border-solar-orange dark:focus:border-solar-orange outline-none transition-colors text-slate-800 dark:text-white font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-black tracking-widest text-slate-400 font-display">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. nicola@cosmic.org"
                      className="w-full py-3 bg-transparent border-b border-slate-300 dark:border-slate-700 focus:border-solar-orange dark:focus:border-solar-orange outline-none transition-colors text-slate-800 dark:text-white font-medium"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs uppercase font-black tracking-widest text-slate-400 font-display">
                      Project Message
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Describe your cosmic application requirements..."
                      className="w-full py-3 bg-transparent border-b border-slate-300 dark:border-slate-700 focus:border-solar-orange dark:focus:border-solar-orange outline-none resize-none transition-colors text-slate-800 dark:text-white font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full neu-btn-primary text-white py-4 rounded-full font-black uppercase tracking-widest text-xs tracking-widest hover:opacity-95 transition-all font-display flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      "Transmitting..."
                    ) : (
                      <>
                        Transmit Message
                        <span className="material-icons-outlined text-sm">send</span>
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div
                  className="text-center py-10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-neu-flat dark:shadow-neu-flat-dark">
                    <span className="material-icons-outlined text-4xl font-bold">check</span>
                  </div>
                  <h3 className="text-3xl font-bold font-display text-slate-800 dark:text-white mb-3">
                    Message Shared!
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-display px-4">
                    Thank you <strong>{name}</strong>! Your transmission was sent with celestial magic. Devika will contact you at <strong>{email}</strong> shortly.
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
