import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { MOTIF_BG_DECO, CELESTIAL_DOODLE_RECURRING } from "./data";

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-900 dark:text-slate-100 bg-surface dark:bg-background-dark transition-colors duration-300 font-sans">
      {/* Fixed Celestial Background Panels */}
      <div className="celestial-bg" aria-hidden="true" />
      <div className="nebula-layer animate-pulse-subtle" aria-hidden="true">
        <div className="nebula-cloud cloud-1" />
        <div className="nebula-cloud cloud-2" />
        <div className="nebula-cloud cloud-3" />
      </div>

      {/* Scattered Floating Celestial Doodles */}
      <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden select-none" aria-hidden="true">
        {/* Galaxy Motif 1 */}
        <img
          alt=""
          className="absolute top-[15%] right-[5%] w-[300px] opacity-[0.18] -rotate-12 select-none pointer-events-none"
          src={MOTIF_BG_DECO}
          referrerPolicy="no-referrer"
        />
        {/* Celestial Doodle 1 */}
        <img
          alt=""
          className="celestial-motif absolute top-[5%] left-[10%] w-[180px] opacity-[0.08] rotate-12 select-none pointer-events-none"
          src={CELESTIAL_DOODLE_RECURRING}
          referrerPolicy="no-referrer"
        />
        {/* Celestial Doodle 2 */}
        <img
          alt=""
          className="celestial-motif absolute top-[40%] left-[2%] w-[220px] opacity-[0.06] -rotate-45 select-none pointer-events-none"
          src={CELESTIAL_DOODLE_RECURRING}
          referrerPolicy="no-referrer"
        />
        {/* Celestial Doodle 3 */}
        <img
          alt=""
          className="celestial-motif absolute top-[65%] right-[12%] w-[250px] opacity-[0.07] rotate-180 select-none pointer-events-none"
          src={CELESTIAL_DOODLE_RECURRING}
          referrerPolicy="no-referrer"
        />
        {/* Celestial Doodle 4 */}
        <img
          alt=""
          className="celestial-motif absolute top-[85%] left-[8%] w-[200px] opacity-[0.05] rotate-[22deg] select-none pointer-events-none"
          src={CELESTIAL_DOODLE_RECURRING}
          referrerPolicy="no-referrer"
        />
        {/* Galaxy Motif 2 */}
        <img
          alt=""
          className="absolute top-[55%] left-[-5%] w-[400px] opacity-[0.15] rotate-45 select-none pointer-events-none"
          src={MOTIF_BG_DECO}
          referrerPolicy="no-referrer"
        />
        {/* Celestial Doodle 5 */}
        <img
          alt=""
          className="celestial-motif absolute bottom-[20%] right-[3%] w-[280px] opacity-[0.08] -rotate-12 select-none pointer-events-none"
          src={CELESTIAL_DOODLE_RECURRING}
          referrerPolicy="no-referrer"
        />
        {/* Celestial Doodle 6 */}
        <img
          alt=""
          className="celestial-motif absolute bottom-[40%] left-[15%] w-[150px] opacity-[0.06] select-none pointer-events-none"
          src={CELESTIAL_DOODLE_RECURRING}
          referrerPolicy="no-referrer"
        />
        {/* Galaxy Motif 3 */}
        <img
          alt=""
          className="absolute bottom-[5%] right-[10%] w-[250px] opacity-[0.2] rotate-180 select-none pointer-events-none"
          src={MOTIF_BG_DECO}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Main Layout Elements */}
      <Header />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
