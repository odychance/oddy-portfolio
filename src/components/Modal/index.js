import React from 'react'
import { Link } from 'react-scroll'
import styles from './Modal.module.css'
import profilePhoto from 'Media/Images/profilePhoto.png'
import OddyChance2 from 'Media/Images/OddyChance2.png'
import video from 'Media/Video/video.mp4'

const Index = ({ showModal, setShowModal }) => {

    // const handleCloseModal = () => {
    //     const modal = document.querySelector('#modal')
    //     const closeModal = document.querySelector('#closeModal')

    //     closeModal.addEventListener('click', () => {
    //         modal.classList.remove('showModal')
    //     })
    // }

  return (
    <div className={`${styles.backgroundContainer} ${showModal && styles.showModal}`} id='modal'>
        <div className={styles.closeModal} onClick={setShowModal} >
            <div className={styles.xModal1}></div>
            <div className={styles.xModal2}></div>
        </div>
        
        <div className={styles.container}>

            <img src={profilePhoto} alt='profile photo' className={styles.photo} />

            <div className={styles.containerTop}>
                <div className={styles.containerInfo}>
                    <h1 className={styles.headerText}> ODDY CHANCE </h1>
                    <p className={styles.infoMe}> Software developer Jr. ready for every challenge. </p>
                    <div className={styles.buttonsContact} >
                        <button className={styles.buttonContact}>   
                            <Link to="contact" spy={true} smooth={true} offset={-100} duration={500}  onClick={setShowModal}>CONTACT</Link>
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.containerBottom}>

                <section className={styles.containerVideo}>
                    <div className={styles.mainVideo}>
                        <video className={styles.video} src={video} muted autoPlay loop/>
                    </div>
                </section>

                <div className={styles.containerEnd} >
                    <div className={styles.containerInfoText} >
                        <p className={styles.endingInfo}> Skills</p>
                        <p className={styles.endingInfo2}> consectetur adipisicing elit. Est ab eveniet labore officia eum ducimus soluta quae nam facere minima</p>
                    </div>
                </div>
            </div>
            <div className={styles.containerLogo}>
                <img src={OddyChance2} alt='Oddy Logo' className={styles.logo} />
            </div>
        </div> 
    </div>
  )
}

export default Index