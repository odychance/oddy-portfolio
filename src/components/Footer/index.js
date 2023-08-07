import React from 'react'
import styles from './Footer.module.css'
import { ReactComponent as Gmail } from "Media/Svg/gmail.svg"
import { ReactComponent as Linkedin } from "Media/Svg/linkedin.svg"
import { ReactComponent as Whatsapp } from "Media/Svg/whatsapp.svg"
import { ReactComponent as Github } from "Media/Svg/Githubf.svg"

const Index = () => {
  return (
    <div className={styles.container} id='contact'>
        <h1 className={styles.git}> Get in touch </h1>
        <ul className={styles.contactBar}>
            <div className={styles.contactBtnContainer}>
                <li className={styles.contact}> <a href='mailto:odychance96@gmail.com' className={styles.contactText}>Email</a></li>
                <Gmail className={styles.icon}/>
            </div>
            <div className={styles.contactBtnContainer}>
                <li className={styles.contact}> <a href='https://github.com/odychance' className={styles.contactText}>Github</a></li>
                <Github className={`${styles.icon} ${styles.github}`}/>
            </div>
            <div className={styles.contactBtnContainer}>
                <li className={styles.contact}> <a href='https://www.linkedin.com/in/oddychance' className={styles.contactText}>LinkedIn</a></li>
                <Linkedin className={styles.icon}/>
            </div>
            <div className={styles.contactBtnContainer}>
                <li className={styles.contact}> <a href='https://wa.me/541132584511' className={`${styles.contactText} ${styles.whatsapp}`}>Whatsapp</a></li>
                <Whatsapp className={styles.icon} />
            </div>
        </ul>
        
    </div>
    )
}

export default Index