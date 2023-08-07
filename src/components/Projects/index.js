import React from 'react'
import styles from './Projects.module.css'
import gamming from 'Media/domains-image/gaming-ecomerce.png'
import gql from 'Media/domains-image/crm-gql.png'
import breakingbad from 'Media/domains-image/frases-breakingBad.png'
import admVet from 'Media/domains-image/administradorcitas.png'
import panic from 'Media/domains-image/panic-responsive.png'

const Index = () => {

  const projectsArr = [
    {
      name: "Ecomerce Gaming",
      domain: "https://oddy-gamingfront.vercel.app",
      image: gamming,
      id: 1
    },
    
    {
      name: "CRM GraphQL",
      domain: "https://oddy-crmgql-frontend.vercel.app/",
      image: gql,
      id: 2
    },

    {
      name: "Frases BreakingBad",
      domain: "https://oddy-breakingbad-phrase.vercel.app/",
      image: breakingbad,
      id: 3
    },

    {
      name: "Administrador de citas Vet",
      domain: "https://oddy-administradordecitas.netlify.app/",
      image: admVet,
      id: 4
    },

    {
      name: "Panic Responsive",
      domain: "https://oddy-panicresponsive.netlify.app/",
      image: panic,
      id: 5
    },
  ]

  return (
    <div id='projects' className={styles.container}>
      <h1 className={styles.title}> Projects</h1>

      <div className={styles.projects}>

        {projectsArr.map( project => (
          <div key={project.id} className={styles.containerProject} >

            <a href={`${project.domain}`} className={styles.linkDomain}>
              <img src={project.image} alt='imageDomain' className={styles.domainImg}/>
              <h2>{project.name.toUpperCase()}</h2>
            </a>
          </div>
        ))}
      
      </div>
      
    </div>
  )
}

export default Index