import React from 'react'
import styles from './Courses.module.css'
import TargetCourses from './TargetCourses'

const Index = () => {

    return (
    <div className={styles.container}>
        <h1 className={styles.title}> Courses</h1>
        <TargetCourses />
    </div>
  )
}

export default Index