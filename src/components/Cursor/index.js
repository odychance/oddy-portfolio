// import React, { useEffect, useRef } from 'react'
// import styles from './Cursor.module.css'

// const lerp = (s, e, t) => (1-t) * s + t * e;

// const Index = () => {
//   const cursorRef = useRef()
//   const cursorOutlineRef = useRef()

//   useEffect(() => {
//     const { width, height } = cursorRef.current.getBoundingClientRect()

//     let circlenewx = width/2
//     let circleoldx = circlenewx
//     let circlenewy = height/2
//     let circleoldy = circlenewy

//     window.addEventListener("mousemove", e => {
//       cursorRef.current.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`

//       circleoldx = lerp(circleoldx, e.clientX, 0.05)
//       circleoldy = lerp(circleoldy, e.clientY, 0.05)

//       cursorOutlineRef.current.style.transform = `translate(calc(${circleoldx}px - 50%), calc(${circleoldy}px - 50%))`
//     })
//   }, [])

//     return (
//       <>
//         <div ref={cursorRef} className={styles.cursor}></div>
//         <div ref={cursorOutlineRef} className={styles.cursorOutline}></div>
//       </>
//   )
// }

// export default Index

import React, { useEffect, useRef } from 'react'
import styles from './Cursor.module.css'

// const lerp = (s, e, t) => (1-t) * s + t * e;
const lerp = (s, e, t) => (e - s) * t + s;

const Index = () => {
  const cursorRef = useRef()
  const cursorOutlineRef = useRef()

  const cursor = {
    current: { x: 0, y: 0 },
    last: { x: 0, y: 0 },
    ease: 0.1,
  }

  useEffect(() => {
    window.addEventListener("mousemove", e => {
      cursor.current.x = e.clientX
      cursor.current.y = e.clientY

      cursorRef.current.style.transform = `translate(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%))`
      
      const { current, last, ease } = cursor
      
      last.x = lerp(last.x, current.x, ease)
      last.y = lerp(last.y, current.y, ease)

      cursorOutlineRef.current.style.transform = `translate(calc(${last.x}px - 50%), calc(${last.y}px - 50%))`
    })
  }, [])

  return (
    <>
      <div ref={cursorRef} className={styles.cursor}></div>
      <div ref={cursorOutlineRef} className={styles.cursorOutline}></div>
    </>
  )
}

export default Index