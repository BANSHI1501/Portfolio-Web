import React, { useState, useEffect } from 'react';
import { BsSun, BsMoonStars, BsList, BsX } from 'react-icons/bs';
import './Header.css';

const Header = () => {
  const [theme, setTheme] = useState('dark');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header fade-in">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-text"><span className="highlight" style={{color: 'var(--primary-color)'}}>B</span>anshi Prasad</span>
        </div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#certificates">Certificates</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="header-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
            {theme === 'dark' ? <BsSun /> : <BsMoonStars />}
          </button>
          <a href="/Banshi_CV.pdf" download="Banshi_CV.pdf" className="btn btn-primary desktop-cv-btn">
            Download CV
          </a>
          <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMenuOpen ? <BsX /> : <BsList />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <div className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#certificates" onClick={closeMenu}>Certificates</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <div className="mobile-cv-wrapper">
            <a href="/Banshi_CV.pdf" download="Banshi_CV.pdf" className="mobile-cv-btn" onClick={closeMenu}>
              Download CV
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
