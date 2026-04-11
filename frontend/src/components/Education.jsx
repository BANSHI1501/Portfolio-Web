import React from 'react';
import './Education.css';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Lovely Professional University",
      period: "2023 - 2027",
      location: "Phagwara, Punjab",
      marks: "Overall CGPA (till 5th semester) 7.27",
      description: "Focus on algorithms, full-stack development, and data structures. Maintaining excellent academic standing."
    },
    {
      degree: "Class 12th",
      institution: "+2 H/S High School",
      period: "2020 - 2022",
      location: "Buxar, Bihar",
      marks: "Specialised in Physics, Chemistry, and Maths. Overall percentage 77.4%",
      description: "Completed with distinction, majoring in Physics, Chemistry, and Mathematics."
    },
    {
      degree: "Class 10th",
      institution: "DAV Public School",
      period: "2019 - 2020",
      location: "Buxar, Bihar",
      marks: "Overall percentage 74.0%",
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
              <h3 className="institution">
                <FaGraduationCap className="icon" />
                <span>{item.institution}</span>
              </h3>
              <h4 className="degree">{item.degree}</h4>
              {item.marks && <p className="marks">{item.marks}</p>}
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
