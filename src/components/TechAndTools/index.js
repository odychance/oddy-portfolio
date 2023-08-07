import React from 'react'
import styles from './TechAndTools.module.css'
import greenRings from 'Media/Images/greenRings.png'
import greenLight from 'Media/Images/greenLight.png'
import apollo from 'Media/Icons/apollo.png'
import expressJs from 'Media/Icons/expressJs.png'
import graphQl from 'Media/Icons/graphQL.png'
import javascript from 'Media/Icons/javascript.png'
import mongoDB from 'Media/Icons/mongoDB.png'
import next from 'Media/Icons/next.png'
import nodeJs from 'Media/Icons/nodeJs.png'
import postman from 'Media/Icons/postman.png'
import react from 'Media/Icons/react.png'
import sass from 'Media/Icons/sass.png'
import strapi from 'Media/Icons/Strapi.png'
import styledComponents from 'Media/Icons/styledComponents.png'
import tailwind from 'Media/Icons/tailwind.png'

const Index = () => {
  return (
    <div className={styles.container}>
        <p className={styles.title} > Tech And Tools </p>

        <div className={styles.imageContainer}>
            <img className={styles.greenRings} src={greenRings} alt='container of icons' />
            <img className={`${styles.apollo} ${styles.group}`} src={apollo} alt='apollo icons' />
            <img className={`${styles.expressJs} ${styles.group}`} src={expressJs} alt='apollo icons' />
            <img className={`${styles.graphQl} ${styles.group}`} src={graphQl} alt='apollo icons' />
            <img className={`${styles.javascript} ${styles.group}`} src={javascript} alt='apollo icons' />
            <img className={`${styles.javascript2} ${styles.group}`} src={javascript} alt='apollo icons' />
            <img className={`${styles.mongoDB} ${styles.group}`} src={mongoDB} alt='apollo icons' />
            <img className={`${styles.mongoDB2} ${styles.group}`} src={mongoDB} alt='apollo icons' />
            <img className={`${styles.mongoDB3} ${styles.group}`} src={mongoDB} alt='apollo icons' />
            <img className={`${styles.next} ${styles.group}`} src={next} alt='apollo icons' />
            <img className={`${styles.nodeJs} ${styles.group}`} src={nodeJs} alt='apollo icons' />
            <img className={`${styles.nodeJs2} ${styles.group}`} src={nodeJs} alt='apollo icons' />
            <img className={`${styles.postman} ${styles.group}`} src={postman} alt='apollo icons' />
            <img className={`${styles.postman2} ${styles.group}`} src={postman} alt='apollo icons' />
            <img className={`${styles.react} ${styles.group}`} src={react} alt='apollo icons' />
            <img className={styles.sass} src={sass} alt='apollo icons' />
            <img className={`${styles.strapi} ${styles.group}`} src={strapi} alt='apollo icons' />
            <img className={`${styles.styledComponents} ${styles.group}`} src={styledComponents} alt='apollo icons' />
            <img className={`${styles.tailwind} ${styles.group}`} src={tailwind} alt='apollo icons' />
            <img className={`${styles.tailwind2} ${styles.group}`} src={tailwind} alt='apollo icons' />
            <img className={styles.greenLight} src={greenLight} alt='apollo icons' />

        </div>
    </div>
  )
}

export default Index