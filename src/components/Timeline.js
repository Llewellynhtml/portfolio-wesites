import React from "react";
import styles from "./Timeline.module.css";

const experiences = [
  {
    date: "7th November 2024",
    title: "online-marketplace",
    company: "MLAB-SMME-VILLAGE",
    description:
      "We were tasked with designing the app using Figma, followed by coding it within a 24-hour period for submission. This project was designed to assess the knowledge and skills we have gained over the past five months since we began our journey at Code Tribe."
  },
  {
    date: "14th January 2025",
    title: "Weather-Travel-planner",
    company: "MLAB-SMME-VILLAGE",
    description:
      "On this project, we were required to work in pairs, with each member choosing whether to focus on building the backend or the frontend. This was a test to assess how quickly we could design, execute the design, and code the project within a 24-hour timeframe. Additionally, we were tasked with hosting the project on Render. The objective was not only to test our technical skills but also to evaluate our ability to collaborate effectively with a partner and manage version control using GitHub. This project challenged us to deliver a functional product under tight deadlines, while maintaining good teamwork and project management.!"
  },

];

const Timeline = () => {
  return (
    <div className={styles.timelineSection}>
      <h2 className={styles.heading}>Code-tribe-challenge</h2>
      <div className={styles.timelineContainer}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.timelineDate}>{exp.date}</div>
            <div className={styles.timelineCircle}></div>
            <div className={styles.timelineContent}>
              <h3 className={styles.title}>{exp.title}</h3>
              <span className={styles.company}>{exp.company}</span>
              <p className={styles.description}>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
