import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Activities from "./components/Activities";
import Learning from "./components/Learning";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";
function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects/>
        <Education/>
        <Certifications/>
        <Activities/>
        <Learning/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}

export default App;