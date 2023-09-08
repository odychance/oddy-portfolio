import React from 'react'
import { Link } from 'react-scroll'
import styles from './Navbar.module.css'

const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <div className={styles.container}>
          <div className={styles.oddy} >Oddy Chance</div>

          <ul className={styles.containerButtons}>
              <button className={styles.containerButton}>
                <a href="/cv.pdf" download>Download CV</a>
              </button>
              <li className={styles.containerButton}>
                <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
              </li>
              <li className={styles.containerButton}>
                <Link to="about" spy={true} smooth={true} offset={-100} duration={500}>About</Link>
              </li>
              <li className={styles.containerButton}>
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={500}>Project</Link>
              </li>
              <li className={styles.containerButton}>
                <Link to="contact" spy={true} smooth={true} offset={-150} duration={500}>Contact</Link>
              </li>
          </ul>
      </div>
      <div className={styles.animatedLine}></div>
    </div>
  )
}

export default Header