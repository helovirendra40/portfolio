import React from 'react';
import { FaLaptopCode } from "react-icons/fa";

import image from '../assets/images/img2.png'
import cardBgVector from '../assets/images/blur-23.svg'
import expApi from '../Api/expApi';
const Experiences = () => {
  return (
    <>
    
     <div className='position-relative bg-vector' id="experience">
        {/* <span className='d-d-inline-block mx-auto p-2 bg-theme text-white'>Experiences</span> */}
                <div className='d-block w-100 position-relative'>
                    <div className='AboutMeHeading AboutMeHeading1'>
                        <div className='position-relative'>                    
                            <span className='text-white'>Experiences</span>
                            <div className='HeadingLine1'></div>
                        </div>
                    </div>
                </div>
                <div className='container mt-6'>
                    <div className='row align-items-center'>
                        <div className='col-md-6'>
                            <img className='vectorImg' src={image} alt='image' />
                        </div>
                        <div className='col-md-6'>

                            {
                                expApi.map((curElem, ind)=>{
                                    return(
<div className='cardSec'>
                                <p className='cardHeading'>({curElem.duration})</p>
                                <div className='d-flex align-items-center gap-4'>
                                <FaLaptopCode />
                                    <div>
                                        <h4 className='mb-2'>{curElem.destination}</h4>
                                        <h5 className='mb-2'>{curElem.company}</h5>
                                    </div>
                                </div>
                                <img className='cardBgVector' src={cardBgVector} alt='img' />
                            </div>
                                    )
                                })
                            }
                        

                        </div>
                    </div>
                </div>
    </div> 
    </>
  )
}

export default Experiences
