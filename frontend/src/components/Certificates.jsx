import React from 'react';
import './Certificates.css';
import { FaAward } from 'react-icons/fa';

const Certificates = () => {
  const defaultCertificates = [
    {
      title: "Full Stack Web Development",
      issuer: "IIT Roorkee",
      date: "2023",
      credentialUrl: "https://docs.google.com/document/d/11C9DlD3ppuwRvbNMDMk9zJ7ySmR7PXYWKV7HfLRf9DU/edit?usp=sharing"
    },
    {
      title: "Advanced Java Programming",
      issuer: "LPU HRDC",
      date: "2025",
      credentialUrl: "https://docs.google.com/document/d/12emOr2etb_V6dLkrm5j78DzpWmppoBjmKIZepgX3760/edit?usp=sharing"
    },
    {
      title: "Gen AI & Prompt Engineering",
      issuer: "Nasscom x Bskilling",
      date: "2026",
      credentialUrl: "https://docs.google.com/document/d/1aYXgDOYfEuSsLIRSXbqrXnrG4-xnn9KO0iFNG6PGNIE/edit?usp=sharing"
    },
    {
      title: "Privacy and security in online social media",
      issuer: "NPTEL",
      date: "2025",
      credentialUrl: "https://docs.google.com/document/d/1pUBzy8K7RbE1HfAQdYhppH0M2qdRQAlnuCQCeG8z2T4/edit?usp=sharing"
    },
    {
      title: "Frontend developer (React)",
      issuer: "HackerRank",
      date: "2026",
      credentialUrl: "https://docs.google.com/document/d/1ctD0fB0Z-CcLSpxAoEYIG3fynlQjYMR30KgceyoM9Mg/edit?usp=sharing"
    },
    {
      title: "Cloud Computing",
      issuer: "Coursera/IBM",
      date: "2026",
      credentialUrl: "https://docs.google.com/document/d/1Ps7nXPoSP0amhrpqnLpbuuEfMMfJOivRhELvG_19lHw/edit?usp=sharing"
    }
  ];

  return (
    <section id="certificates" className="certificates container">
      <div className="section-header fade-in">
        <h2><span className="highlight">Certifications</span></h2>
        <div className="underline"></div>
        <p className="section-subtitle">A collection of my professional certifications and achievements.</p>
      </div>

      <div className="certificates-grid">
        {defaultCertificates.map((cert, index) => (
          <div key={index} className="cert-card glass fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="cert-icon-wrapper">
              <FaAward className="cert-icon" />
            </div>
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <div className="cert-footer">
                <span className="cert-date">{cert.date}</span>
                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="verify-btn">Verify &rarr;</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
