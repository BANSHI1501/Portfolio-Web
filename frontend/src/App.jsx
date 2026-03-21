import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import SkillsSection from './components/Skills'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './index.css'

function App() {
  return (
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
  )
}

export default App
