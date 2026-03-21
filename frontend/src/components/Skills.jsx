import { FaJava, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDocker, FaJenkins, FaGithub, FaGitAlt } from 'react-icons/fa';
import { SiC, SiCplusplus, SiPython, SiKotlin, SiJavascript, SiKubernetes, SiMysql, SiMongodb } from 'react-icons/si';
import { MdLanguage } from 'react-icons/md';
import { BsFileEarmarkTextFill, BsDatabaseFill, BsBriefcaseFill, BsGlobe } from 'react-icons/bs';

import './Skills.css';

const Skills = ({ title, icon, skills }) => {
  return (
    <div className="skills-category glass slide-up">
      <h3 className="category-title">
        <span className="category-icon">{icon}</span> {title}
      </h3>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-icon-wrapper">
              <span className="skill-icon">{skill.icon}</span>
            </div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const categories = [
    {
      title: "Programming Languages",
      icon: <span style={{fontFamily: 'monospace', fontWeight: 'bold'}}>&lt; &gt;</span>,
      skills: [
        { name: "C", icon: <SiC /> },
        { name: "Python", icon: <SiPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Kotlin", icon: <SiKotlin /> }
      ]
    },
    {
      title: "Frameworks",
      icon: <BsGlobe />,
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <span className="text-icon">ex</span> },
        { name: "React js", icon: <FaReact /> }
      ]
    },
    {
      title: "Tools",
      icon: <span style={{fontFamily: 'monospace', fontWeight: 'bold'}}>&gt;_</span>,
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "MS Office", icon: <BsFileEarmarkTextFill /> },
        { name: "Docker", icon: <FaDocker /> },
        { name: "Jenkins", icon: <FaJenkins /> },
        { name: "Kubernetes", icon: <SiKubernetes /> }
      ]
    },
    {
      title: "Databases",
      icon: <BsDatabaseFill />,
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> }
      ]
    },
    {
      title: "Soft Skills",
      icon: <BsBriefcaseFill />,
      skills: [
        { name: "Time Management", icon: "⏰" },
        { name: "Teamwork", icon: "👥" },
        { name: "Problem-Solving", icon: "🧩" }
      ]
    },
    {
      title: "Languages",
      icon: <span style={{fontFamily: 'monospace', fontWeight: 'bold'}}>文A</span>,
      skills: [
        { name: "English", icon: <span className="text-icon">EN</span> },
        { name: "Hindi", icon: <span className="text-icon">HI</span> }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section container">
      <div className="section-header fade-in">
        <h2>My <span className="highlight">Skills</span></h2>
        <div className="underline"></div>
      </div>
      
      <div className="skills-categories-wrapper">
        {categories.map((cat, index) => (
          <Skills key={index} title={cat.title} icon={cat.icon} skills={cat.skills} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
