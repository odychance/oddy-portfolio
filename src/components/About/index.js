import React, {useState} from 'react'
import styles from './About.module.css'
import iexample3 from 'Media/Images/iexample3.png'
import greenLight from 'Media/Images/greenLight.png'
import Modal from 'components/Modal'

const Index = () => {

    const [ modal, setModal ] = useState(false)

    const handleModal = () => {
        setModal(!modal)
    }
    
    return (
        <>
            <Modal 
                showModal={modal}
                setShowModal={handleModal}
            />
            
            <div className={styles.container} id='about'>
                {/* <div className={styles.containerText}> */}
                    <p className={styles.greenText}>
                    Over time I have been able to participate in projects focusing mainly on the frontend using technologies such as Reactjs and Nextjs. 
                    </p>
                    <p className={styles.whiteText}>
                    However, my passion for innovation and wanting to go further led me to explore Fullstack solutions, including the use of technologies such as Nodejs, GraphQL, MongoDB and Strapi.
                    </p>
                {/* </div> */}

                <div className={styles.modalContainer} onClick={handleModal}>
                    <img id='openModal' src={iexample3} alt='referential image' className={styles.refImage} />
                    <p className={styles.textModal} > Click Here! </p>
                </div>
                <div className={styles.lastText} >
                Despite the achievements, I recognize that there is always more to learn. Currently, my focus continues to be professional and personal growth; I am immersed in the constant acquisition of knowledge to evolve in software engineering. I am excited to be part of a dynamic and collaborative team, where I can contribute in a meaningful way and learn from teamwork.
                </div>
                <img src={greenLight} alt='Green light' className={styles.greenLight} />
            </div>
        </>
  )
}

export default Index