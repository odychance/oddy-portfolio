import React from 'react'
import styles from './LastText.module.css'
import greenPoint from 'Media/Images/greenPoint.png'
import greenLight from 'Media/Images/greenLight.png'

const Index = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <p className={styles.greenText}>Lorem ipsum dolor</p>
            <p className={styles.whiteText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={styles.imgContainer}>
            <img className={styles.greenPoint} src={greenPoint} alt='greenPoint' />
            <img className={styles.greenLight} src={greenLight} alt='greenLight' />
        </div>

    </div>
  )
}

export default Index