import React from 'react';
import styles from './progress.css';

const Progress = () => {
    const services = [
        {
            icon: '🖥️',
            title: 'Web Development',
            description: 'Burke what a load of rubbish young delinquent matie boy a blinding shot horse play cuppa old wind up bevvy.!'
        },
        {
            icon: '📚',
            title: 'Discuss The Project',
            description: 'Burke what a load of rubbish young delinquent matie boy a blinding shot horse play cuppa old wind up bevvy.!'
        },
        {
            icon: '📱',
            title: 'Final Approvemement',
            description: 'Burke what a load of rubbish young delinquent matie boy a blinding shot horse play cuppa old wind up bevvy.!'
        }
    ];

    return (
        <div className={styles.container}>
            <div className={styles.cardWrapper}>
                {services.map((service, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.icon}>{service.icon}</div>
                        <h3 className={styles.title}>{service.title}</h3>
                        <p className={styles.description}>{service.description}</p>
                        <a href="#" className={styles.link}>More Details →</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Progress; 