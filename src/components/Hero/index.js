import React from 'react'
import './Hero.modules.css'
import example from "Media/Images/iexample1.png"
import DownScroll from './DownScroll'

const Index = () => {
  return (
    <div className='mainContainer' id='home'>
        <div className='leftContainer'>
            <div className='textContainer'>
                <div className='sdContainer'> <p className='soft'>Software</p> <p className='dev'>Developer</p></div>
                <div className='infoContainer'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                <DownScroll />
            </div>
        </div>

        <img className="image1" alt="Example1" src={example} />
    </div>
  )
}

export default Index