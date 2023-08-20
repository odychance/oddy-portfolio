import React from 'react'
import './Hero.modules.css'
import example from "Media/Images/iexample4.jpeg"
import OddyPerfil from "Media/Images/OddyPerfil.png"

import DownScroll from './DownScroll'

const Index = () => {
  return (
    <div className='mainContainer' id='home'>
        <div className='leftContainer'>
            <div className='textContainer'>
                <div className='sdContainer'> <p className='soft'>Software</p> <p className='dev'>Developer</p></div>
                <div className='infoContainer'>My path within the programming area began in 2020, driven by my brother's guidance, my first steps were hesitant, but with determination and valuable help I began to find my way.</div>
                <DownScroll />
            </div>
        </div>

        <div className='containerImage'>
          <img className="image1" alt="Example1" src={OddyPerfil} />
          {/* <img className="oddyfoto" alt="oddy Foto" src={OddyPerfil} /> */}

        </div>
    </div>
  )
}

export default Index