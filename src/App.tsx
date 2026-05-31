import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Glimpses from "./components/Glimpses";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CelestialBackground from "./components/CelestialBackground";

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-900 transition-colors duration-300 font-sans">
      {/* Dynamic Animated Cosmic/Telemetry Background Layer */}
      <CelestialBackground />

      {/* Main Layout Elements */}
      <Header />
      <main className="relative z-10">
        <Hero />
        <Skills />
        <About />
        <Projects />
        <Glimpses />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
