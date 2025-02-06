import React from "react";
import styles from "./About.module.css";
import heroImage from "./Images/full-stack.png";

const Hero = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.aboutContent}>
        <div className={styles.textContent}>

          <h4 className={styles.subTitle}>I'm Lesego</h4>

          <div className={styles.paragraph}>
            <p>A passionate Junior Software Developer.</p>
            <p>
              I have completed my training at CodeTribe, where I developed a
              strong foundation in web development.
            </p>
            <p>
              My goal is to build innovative, user-friendly web applications and
              contribute to open-source projects.
            </p>
            <p>
              I love solving problems and constantly learning new technologies
              to grow my skills.
            </p>
          </div>

          <hr className={styles.goldHr}></hr>

          <button className={styles.downloadButton}>Download CV</button>
        </div>
        <div className={styles.heroImage}>
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
