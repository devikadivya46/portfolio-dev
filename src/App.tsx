import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyHireMe from "./components/WhyHireMe";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Glimpses from "./components/Glimpses";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CelestialBackground from "./components/CelestialBackground";
import SectionDivider from "./components/SectionDivider";
import ResumeModal from "./components/ResumeModal";
import CelestialAudio from "./components/CelestialAudio";
import CelestialSplashScreen from "./components/CelestialSplashScreen";

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const handleOpenResume = (e: Event) => {
      e.preventDefault();
      setIsResumeOpen(true);
    };
    window.addEventListener("open-resume-modal", handleOpenResume);
    return () => {
      window.removeEventListener("open-resume-modal", handleOpenResume);
    };
  }, []);

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeEl = document.activeElement;
      const isTyping = activeEl && (
        activeEl.tagName === "INPUT" ||
        activeEl.tagName === "TEXTAREA" ||
        activeEl.hasAttribute("contenteditable") ||
        (activeEl as HTMLElement).isContentEditable
      );

      if (isTyping) return;

      // 'r' key opens/toggles the Resume modal
      if (e.key.toLowerCase() === "r") {
        e.preventDefault();
        setIsResumeOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const revealSettings = {
    initial: { opacity: 0, y: 35 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.85, ease: [0.25, 1, 0.5, 1] as const }
  };

  return (
    <div className="relative min-h-screen bg-transparent text-slate-900 transition-colors duration-300 font-sans dark:bg-[#0F0C0A] dark:text-[#F5F1EB]">
      <CelestialSplashScreen />
      <CelestialBackground />

      <Header />
      <main className="relative z-10">
        <Hero />
        
        <motion.div {...revealSettings}>
          <WhyHireMe />
        </motion.div>
        
        <SectionDivider />
        
        <motion.div {...revealSettings}>
          <Skills />
        </motion.div>
        
        <SectionDivider />
        
        <motion.div {...revealSettings}>
          <About />
        </motion.div>
        
        <SectionDivider />
        
        <motion.div {...revealSettings}>
          <Projects />
        </motion.div>
        
        <SectionDivider />
        
        <motion.div {...revealSettings}>
          <Glimpses />
        </motion.div>
        
        <SectionDivider />
        
        <motion.div {...revealSettings}>
          <Achievements />
        </motion.div>
        
        <SectionDivider />
        
        <motion.div {...revealSettings}>
          <Testimonials />
        </motion.div>
        
        <SectionDivider />
        
        <motion.div {...revealSettings}>
          <Contact />
        </motion.div>
      </main>
      <Footer />

      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
      <CelestialAudio />
    </div>
  );
}

