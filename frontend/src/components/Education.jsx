import React from 'react';
import './Education.css';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "Lovely Professional University",
      period: "2023 - 2027",
      location: "Phagwara, Punjab",
      description: "Focus on algorithms, full-stack development, and data structures. Maintaining excellent academic standing."
    },
    {
      degree: "Higher Secondary (12th)",
      institution: "State Board",
      period: "2020 - 2022",
      location: "Bihar, India",
      description: "Completed with distinction, majoring in Physics, Chemistry, and Mathematics."
    },
    {
      degree: "Secondary School (10th)",
      institution: "DAV Public School, Dumraon",
      period: "2019 - 2020",
      location: "Dumraon, Bihar",
      description: "Completed secondary education with strong academic performance."
    }
  ];

  return (
    <section id="education" className="education container">
      <div className="section-header fade-in">
        <h2><span className="highlight">Education</span></h2>
        <div className="underline"></div>
      </div>

      <div className="timeline">
        {educationData.map((item, index) => (
          <div key={index} className="timeline-item slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
            <div className="timeline-dot"></div>
             <div className="timeline-content glass">
              <div className="period-wrapper">
                <FaCalendarAlt className="icon" />
                <span className="period">{item.period}</span>
              </div>
              <h3>{item.degree}</h3>
              <h4 className="institution">
                <FaGraduationCap className="icon" />
                <span>{item.institution}</span>
              </h4>
              <div className="location">
                <HiOutlineLocationMarker className="icon" />
                <span>{item.location}</span>
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
