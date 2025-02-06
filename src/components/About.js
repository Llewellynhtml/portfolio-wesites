import React from "react";
import styles from "./About.module.css";
import heroImage from "./Images/full-stack.png";

const About = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <div className={styles.textContent}>
          <h2 className={styles.aboutTitle}>Hi There</h2>

          <h4 className={styles.subTitle}>I'm Lesego</h4>
          <p>
            Hello! I'm Lesego Llewellyn, a passionate Junior Software Developer.
            I have completed my training at CodeTribe, where I developed a
            strong foundation in web development. My goal is to build
            innovative, user-friendly web applications and contribute to
            open-source projects. I love solving problems and learning new
            technologies.
          </p>
          <p>
            With experience in HTML, CSS, JavaScript, React, and more, I am
            excited to work on <br></br>diverse projects and continue improving
            my skills. I am constantly seeking opportunities <br></br> to grow
            as a developer and collaborate with others to create meaningful
            solutions.
          </p>
          <button className={styles.downloadButton}>Download</button>
        </div>
        <div className={styles.heroImage}>
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default About;
