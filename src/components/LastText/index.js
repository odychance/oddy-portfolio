import React from 'react'
import styles from './LastText.module.css'
import greenPoint from 'Media/Images/greenPoint.png'
import greenLight from 'Media/Images/greenLight.png'

const Index = () => {
  return (
    <div className={styles.container}>
        <div className={styles.textContainer}>
            <p className={styles.greenText}>About my language knowledge.</p>
            <p className={styles.whiteText}>I have a B2 Upper Intermediate level of English, so I don't have major problems communicating orally or in writing.</p>
        </div>
        <div className={styles.imgContainer}>
            <img className={styles.greenPoint} src={greenPoint} alt='greenPoint' />
            <img className={styles.greenLight} src={greenLight} alt='greenLight' />
        </div>

    </div>
  )
}

export default Index