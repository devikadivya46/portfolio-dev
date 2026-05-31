import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import Glimpses from "./components/Glimpses";
import Achievements from "./components/Achievements";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CelestialBackground from "./components/CelestialBackground";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-900 transition-colors duration-300 font-sans">
      <CustomCursor />
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
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
