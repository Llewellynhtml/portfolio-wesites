import React, { useState } from 'react';
import styles from './Skills.module.css';
import {
  DiJavascript1,
  DiReact as DiReactIcon,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import { SiFirebase, SiHtml5, SiCss3 } from "react-icons/si";



const skillsData = [
  { name: 'HTML', level: 'Intermediate', logo: <SiHtml5 size={48} />, description: "Used to structure and create the content of web pages. Used in multiple projects." },
  { name: 'CSS', level: 'Advanced', logo: <SiCss3 size={48} />, description: "Styled and designed web pages to be visually appealing." },
  { name: 'JavaScript', level: 'Intermediate', logo: <DiJavascript1 size={48} />, description: "Used it to add dynamic behavior and functionality to websites." },
  { name: 'React', level: 'Intermediate', logo: <DiReactIcon size={48} />, description: "Built dynamic and interactive user interfaces with React." },
  { name: 'Node.js', level: 'Intermediate', logo: <DiNodejs size={48} />, description: "Built server-side applications and APIs using Node.js." },
  { name: 'MongoDB', level: 'Beginner', logo: <DiMongodb size={48} />, description: "Used MongoDB to store and manage data in NoSQL databases." },
  { name: 'Firebase', level: 'Intermediate', logo: <SiFirebase size={48} />, description: "Integrated Firebase for real-time databases, authentication, and hosting." },
  { name: 'Git', level: 'Beginner', logo: <DiGit size={48} />, description: "Experience in using Git for source code tracking, and working with GitHub repositories." }
];

const Skills = () => {
  const [flippedIndex, setFlippedIndex] = useState(null); 

  const handleCardClick = (index) => {
    setFlippedIndex(prevIndex => (prevIndex === index ? null : index)); 
  };

  return (
    <section id="skills-matrix" className={styles.skillsSection}>
      <h2 className={styles.skillsTitle}>Skills</h2>
      <div className={styles.skillsCards}>
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className={`${styles.card} ${flippedIndex === index ? styles.cardFlipped : ''}`}
            onClick={() => handleCardClick(index)}
            style={{
              backgroundColor: skill.name === 'HTML' ? '#f16529' : 
                               skill.name === 'CSS' ? '#2965f1' : 
                               skill.name === 'JavaScript' ? '#f7df1e' : 
                               skill.name === 'React' ? '#61dafb' : 
                               skill.name === 'Node.js' ? '#3c873d' : 
                               skill.name === 'MongoDB' ? '#4DB33D' : 
                               '#ffca28'
            }}
          >
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <div className={styles.cardLogo}>{skill.logo}</div>
                <div className={styles.cardText}>
                  <h4>{skill.name}</h4>
                  <p>{skill.level}</p>
                </div>
              </div>
              <div className={styles.cardBack}>
                <div className={styles.cardText}>
                  <h4>More Info</h4>
                  <p>{skill.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
