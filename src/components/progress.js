import React from "react";
import styles from "./progress.module.css";

const Progress = () => {
  const steps = [
    {
      icon: "🖥️",
      title: "Web Development",
      description:
        "We create high-quality, responsive websites tailored to your business needs with modern technologies.",
    },
    {
      icon: "📚",
      title: "Discuss The Project",
      description:
        "We discuss the project scope, goals, and features to ensure clarity and a successful outcome.",
    },
    {
      icon: "📱",
      title: "Final Approval",
      description:
        "After thorough testing and feedback, we deliver the final version for approval and launch.",
    },
  ];

  return (
    <div className={styles.progressSection}>
      <div className={styles.cardContainer}>
        {steps.map((step, index) => (
          <div key={index} className={styles.progressCard}>
            <div className={styles.progressIcon}>{step.icon}</div>
            <h3 className={styles.progressTitle}>{step.title}</h3>
            <p className={styles.progressDescription}>{step.description}</p>
            <button className={styles.progressButton}>More Details →</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
