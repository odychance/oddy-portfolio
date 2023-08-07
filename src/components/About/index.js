import React, {useState} from 'react'
import styles from './About.module.css'
import iexample2 from 'Media/Images/iexample2.png'
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
                <div className={styles.containerText}>
                    <p className={styles.greenText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <p className={styles.whiteText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className={styles.modalContainer} onClick={handleModal}>
                    <img id='openModal' src={iexample2} alt='referential image' className={styles.refImage} />
                    <p className={styles.textModal} > Click Here! </p>
                </div>
                <div className={styles.lastText} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
                <img src={greenLight} alt='Green light' className={styles.greenLight} />
            </div>
        </>
  )
}

export default Index