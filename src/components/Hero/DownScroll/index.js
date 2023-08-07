import React from 'react'
import DownScroll from 'Media/Images/DownScroll.png'
import GreenArrow from 'Media/Images/GreenArrow.png'
import styles from './DownScroll.module.css'
import GreenLight from 'Media/Images/greenLight.png'

const Index = () => {
  return (
    <div className={styles.container}>
        <img src={DownScroll} alt='downscroll' className={styles.spinner} />
        <img src={GreenArrow} alt='greenarrow' className={styles.arrow} />
        <img src={GreenLight} alt='GreenLight' className={styles.greenLight} />
    </div>
    )
}

export default Index