import React from 'react'
import courses from 'Courses.json'
import styles from './TargetCourses.module.css'

const index = () => {
    const coursesArr = courses.Courses

  return (
    <div>
        {coursesArr.map((item, index) => {
            return (
                <div
                className={styles.container}
                key={index}>
                    <a href={item.urlCourse} className={styles.alink} target='_blank'>
                        <p className={styles.text}>{item.name}</p>
                        <p className={styles.text}>{item.status}</p>
                        <img className={styles.imageCourse} src={item.imageCourse} alt='telative image' />
                    </a>
                </div>
            )
        })}
    </div>
  )
}

export default index