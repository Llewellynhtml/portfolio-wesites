import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import styles from './Navbar.module.css'; 
import navimage from './images/LSG.5.png';

const Navbar = () => {
  const location = useLocation(); 

  
  const getNavItemClass = (path) => {
    return location.pathname === path ? styles.active : ''; 
  };

  return (
    <nav className={styles.nav}>
      <img src={navimage} alt="Logo" className={styles.logoImage} />
      <ul className={styles.navList}>
        <li><Link to="/" className={`${styles.navItem} ${getNavItemClass('/')}`}>Home</Link></li>
        <li><Link to="/projects" className={`${styles.navItem} ${getNavItemClass('/projects')}`}>Projects</Link></li>
        <li><Link to="/contact" className={`${styles.navItem} ${getNavItemClass('/contact')}`}>Contact</Link></li>
        <li><Link to="/resume" className={`${styles.navItem} ${getNavItemClass('/resume')}`}>Resume</Link></li>
      </ul>

      <ul className={styles.navSocialLinks}>
        <li>
          <a href="https://github.com/Llewellynhtml?tab=overview&from=2024-12-01&to=2024-12-31" target="_blank" rel="noopener noreferrer" className={styles.navItem}>
            <FaGithub size={30} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/lesego-llewellyn-a4421a1a1/" target="_blank" rel="noopener noreferrer" className={styles.navItem}>
            <FaLinkedin size={30} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
