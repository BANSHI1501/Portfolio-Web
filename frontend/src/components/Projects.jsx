import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Website",
      category: "Full Stack",
      description: "Built a MERN-based e-commerce platform with user authentication, product management, cart and order system, secure checkout, and a responsive UI for seamless shopping experience.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      image: "/projects/ecommerce_website.png",
      github: "https://github.com/BANSHI1501/E-commerce-MERN",
      demo: "https://e-commerce-mern-git-main-banshi-s-projects.vercel.app/"
    },
    {
      title: "Advance Short URL Generator",
      category: "Backend",
      description: "Built a MERN-based URL shortener with authentication, secure links, QR code generation, click tracking, and a real-time analytics dashboard.",
      techStack: ["MongoDB", "Express", "Node.js", "React"],
      image: "/projects/short_url_generator.png",
      github: "https://github.com/BANSHI1501/LinkShield-URL-Shortener-",
      demo: "https://link-shield-url-shortener.vercel.app/"
    },
    {
      title: "E-Commerce Platform",
      category: "MERN Stack",
      description: "A feature-rich e-commerce store with payment gateway integration and dynamic cart management.",
      techStack: ["MongoDB", "Express", "React", "Node"],
      image: "",
      github: "https://github.com/BANSHI1501",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="projects container">
      <div className="section-header fade-in">
        <h2>My <span className="highlight">Projects</span></h2>
        <div className="underline"></div>
        <p className="section-subtitle">Here are some of the projects I've worked on recently.</p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card glass slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="project-img-wrapper">
              <img src={project.image} alt={project.title} className="project-img" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.github} className="project-link" title="Source Code" target="_blank" rel="noopener noreferrer">
                    <FaGithub /> <span>Code</span>
                  </a>
                  <a href={project.demo} className="project-link" title="Live Demo" target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-info">
              <span className="project-category">{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
