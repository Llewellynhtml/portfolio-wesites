import React from "react";
import styles from "./Timeline.module.css";

const experiences = [
  {
    date: "7th November 2024",
    title: "online-marketplace",
    company: "MLAB-SMME-VILLAGE",
    description:
      "He lost his bottle squiffy bog bleeding hunky-dory wind up morish tomfoolery spend a penny hanky panky, lemon squeezy vagabond up the kyver fantastic cheeky.!"
  },
  {
    date: "14th January 2025",
    title: "Weather-Travel-planner",
    company: "MLAB-SMME-VILLAGE",
    description:
      "He lost his bottle squiffy bog bleeding hunky-dory wind up morish tomfoolery spend a penny hanky panky, lemon squeezy vagabond up the kyver fantastic cheeky.!"
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
