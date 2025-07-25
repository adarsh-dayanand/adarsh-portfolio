import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Awards from './components/Awards';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Certifications />
        <Awards />
        <Skills />
        {/* <Projects /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
