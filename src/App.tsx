import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Domains from "./components/Domains";
import Projects from "./components/Projects";
import Team from "./components/Team";
import JoinUs from "./components/JoinUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Domains />
        <Projects />
        <Team />
        <JoinUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
