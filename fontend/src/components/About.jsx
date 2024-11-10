import React from 'react'
import image from '../assets/images/About.jpeg'
const About = () => {
  return (
    <>
      <div className='container' id="about">
        <div className='row py-5 align-items-center'>
            <div className='col-md-6'>
                <h2 className='mainHeading'>Who I am?</h2>
                <p className='text-white'>I am a Front-End developer based in Delhi, India. I am an Information Technology post-graduate from Invertis University. I am very passionate about improving my coding skills & developing websites. I build Websites using ReactJs. Working for myself to improve my skills.</p>
            </div>
            <div className='col-md-6 position-relative'>
                <div className='AboutMeHeading'>
                    <div className='position-relative'>                    
                        <span className='text-white'>ABOUT ME</span>
                        <div className='HeadingLine'></div>
                    </div>
                </div>
                <img className='aboutImage' src={image} alt='image' />
            </div>
        </div>
      </div>
    </>
  )
}

export default About
