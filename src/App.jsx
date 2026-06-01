import { useRef, useEffect } from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import About from './components/About';
import Services from './components/Services';
import NDTMethods from './components/NDTMethods';

import Sectors from './components/Sectors';
import PopularSolutions from './components/PopularSolutions';
import WhyChooseFexsa from './components/WhyChooseFexsa';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Suppress console output in production for security
if (typeof window !== 'undefined' && import.meta.env?.PROD) {
  console.log = () => {};
  console.warn = () => {};
  console.error = () => {};
  console.info = () => {};
  console.debug = () => {};
}

function App() {
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Services />
        <NDTMethods />

        <Sectors />
        <PopularSolutions />
        <WhyChooseFexsa />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;