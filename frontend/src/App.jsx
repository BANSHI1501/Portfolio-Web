import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import SkillsSection from './components/Skills'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Loader visible for 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Education />
            <Certificates />
            <Projects />
            <SkillsSection />
          </main>
          <Footer />
          <ScrollToTop />
        </>
      )}
    </>
  )
}

export default App
