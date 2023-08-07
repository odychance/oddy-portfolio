import React from 'react'
import Navbar from 'components/Navbar/index.js'
import Hero from 'components/Hero/index.js'
import About from 'components/About/index.js'
import Courses from 'components/Courses/index.js'
import Projects from 'components/Projects/index.js'
import TechAndTools from 'components/TechAndTools/index.js'
import LastText from 'components/LastText/index.js'
import Footer from 'components/Footer/index.js'

const Index = () => {
  return (
    <div style={{overflow: 'hidden'}}>
        <Navbar />
        <Hero />
        <About />
        <Courses />
        <Projects />
        <TechAndTools />
        <LastText />
        <Footer />
    </div>
  )
}

export default Index