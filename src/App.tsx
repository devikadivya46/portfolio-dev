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
import CustomCursor from "./components/CustomCursor";
import SectionDivider from "./components/SectionDivider";

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-900 transition-colors duration-300 font-sans">
      <CustomCursor />
      <CelestialBackground />

      <Header />
      <main className="relative z-10">
        <Hero />
        <WhyHireMe />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Glimpses />
        <SectionDivider />
        <Achievements />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
