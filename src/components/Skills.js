import React from 'react';
import styles from './Skills.module.css';
import { SiHtml5, SiCss3, SiFirebase } from "react-icons/si";
import { DiJavascript1, DiReact as DiReactIcon, DiNodejs, DiMongodb, DiGit } from "react-icons/di";

const skillsData = [
  { name: 'HTML', level: 75, logo: <SiHtml5 size={48} />, description: "Used to structure and create the content of web pages. Used in multiple projects." },
  { name: 'CSS', level: 80, logo: <SiCss3 size={48} />, description: "Styled and designed web pages to be visually appealing." },
  { name: 'JavaScript', level: 67, logo: <DiJavascript1 size={48} />, description: "Used it to add dynamic behavior and functionality to websites." },
  { name: 'React', level: 65, logo: <DiReactIcon size={48} />, description: "Built dynamic and interactive user interfaces with React." },
  { name: 'Node.js', level: 60, logo: <DiNodejs size={48} />, description: "Built server-side applications and APIs using Node.js." },
  { name: 'MongoDB', level: 85, logo: <DiMongodb size={48} />, description: "Used MongoDB to store and manage data in NoSQL databases." },
  { name: 'Firebase', level: 70, logo: <SiFirebase size={48} />, description: "Integrated Firebase for real-time databases, authentication, and hosting." },
  { name: 'Git', level: 50, logo: <DiGit size={48} />, description: "Experience in using Git for source code tracking, and working with GitHub repositories." }
];

const Skills = () => {
  return (
    <section id="skills-matrix" className={styles.skillsSection}>
      <h2 className={styles.skillsTitle}>Acquired Skills</h2>
      <div className={styles.skillsContainer}>
        <div className={styles.skillsColumn}>
          {skillsData.slice(0, 4).map((skill, index) => (
            <div key={index} className={styles.skillBarContainer}>
              <div className={styles.skillHeader}>
                <div className={styles.skillLogo}>{skill.logo}</div>
                <h4>{skill.name}</h4>
              </div>
              <div className={styles.progressBarWrapper}>
                <div 
                  className={styles.progressBar} 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className={styles.skillPercentage}>{skill.level}%</div>
            </div>
          ))}
        </div>

        <div className={styles.skillsColumn}>
          {skillsData.slice(4).map((skill, index) => (
            <div key={index} className={styles.skillBarContainer}>
              <div className={styles.skillHeader}>
                <div className={styles.skillLogo}>{skill.logo}</div>
                <h4>{skill.name}</h4>
              </div>
              <div className={styles.progressBarWrapper}>
                <div 
                  className={styles.progressBar} 
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className={styles.skillPercentage}>{skill.level}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
