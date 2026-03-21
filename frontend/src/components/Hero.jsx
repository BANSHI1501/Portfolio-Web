import React from 'react';
import { MdPerson } from 'react-icons/md';
import { HiOutlineBriefcase } from 'react-icons/hi';
import { BsCodeSlash } from 'react-icons/bs';
import './Hero.css';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        <div className="hero-text slide-up">
          <div className="hero-badge">Full-Stack Developer</div>
          <h1 className="name">Hi, I'm <span className="highlight">Banshi</span> Prasad</h1>
          <h3 className="headline">Building digital experiences that make a difference</h3>
          <p className="bio">
            Computer Science student with a passion for creating elegant solutions to complex problems. Specializing in full-stack development with expertise in Java and the MERN stack.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="#projects" className="btn btn-secondary">View My Work &rarr;</a>
          </div>
          <div className="hero-stats">
            <div className="stat-box">
              <h3>5+</h3>
              <p>Certifications</p>
            </div>
            <div className="stat-box">
              <h3>5+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat-box">
              <h3>10+</h3>
              <p>Technologies</p>
            </div>
          </div>

          <div className="hero-quick-links">
            <a href="#about"><span className="icon"><MdPerson /></span> About Me</a>
            <a href="#projects"><span className="icon"><HiOutlineBriefcase /></span> Projects</a>
            <a href="#skills"><span className="icon"><BsCodeSlash /></span> Skills</a>
          </div>
        </div>
        <div className="hero-image-wrapper fade-in">
          <div className="image-border">
            <img src={profileImg} alt="Banshi Prasad" className="profile-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
