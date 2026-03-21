import React from 'react';
import './About.css';
import { FaUser, FaPhone, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const About = () => {
  return (
    <section id="about" className="about container">
      <div className="section-header">
        <h2>About <span className="highlight">Me</span></h2>
        <div className="underline"></div>
      </div>

      <div className="about-content">
        <div className="about-card glass">
          <h3>Personal Profile</h3>
          <p>
            I’m a Computer Science undergraduate at Lovely Professional University with a strong foundation in full-stack development. I enjoy building dynamic, user-focused web applications and solving real-world problems through clean and efficient code.
          </p>
          <p>
            My expertise includes front-end and back-end development, along with a solid understanding of algorithms and data structures. I work primarily with Java and the MERN stack to create scalable and responsive applications.
          </p>
          <p>I’m passionate about continuous learning and actively seek opportunities to apply my skills to impactful projects that make a difference.</p>
        </div>

        <div className="about-card glass">
          <h3>Contact Information</h3>
          <ul className="contact-list">
            <li>
              <span className="icon"><FaUser /></span>
              <span>Banshi Prasad</span>
            </li>
            <li>
              <span className="icon"><HiOutlineLocationMarker /></span>
              <span>Buxar, Bihar, India</span>
            </li>
            <li>
              <span className="icon"><FaPhone /></span>
              <a href="tel:+917250152489">+91 7250152489</a>
            </li>
            <li>
              <span className="icon"><FaEnvelope /></span>
              <a href="mailto:prasadbanshi2002@gmail.com">prasadbanshi2002@gmail.com</a>
            </li>
            <li>
              <span className="icon"><FaLinkedin /></span>
              <a href="https://linkedin.com/in/banshi15" target="_blank" rel="noopener noreferrer">linkedin.com/in/banshi15</a>
            </li>
            <li>
              <span className="icon"><FaGithub /></span>
              <a href="https://github.com/BANSHI1501" target="_blank" rel="noopener noreferrer">github.com/BANSHI1501</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
