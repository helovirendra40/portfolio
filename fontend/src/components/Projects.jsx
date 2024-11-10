import React from 'react'
import skillImg from '../assets/images/theluxaryfluret.png';
import { FaExternalLinkAlt } from "react-icons/fa";
import projectsData from '../Api/projectsApi';
const Projects = () => {
  return (
    <>
      <div className='position-relative pt-5' id="project">
        {/* <span className='d-d-inline-block mx-auto p-2 bg-theme text-white'>Experiences</span> */}
                <div className='d-block w-100 position-relative'>
                    <div className='AboutMeHeading AboutMeHeading1'>
                        <div className='position-relative'> 
                            <a href=''>
                            <span className='text-white'>PROJECTS</span>
                            <div className='HeadingLine1'></div>
                            </a>                   
                        </div>
                    </div>
                </div>
                <div className='container mt-6'>
                    <div className='row'>
                    
                        
                   {
                    projectsData.map((curElem, ind)=>{
                        return(
                            <div key={ind} className='col-md-4'>
                            <div className='skillCard mb-4 position-relative'>
                                <div className='d-flex flex-column'>
                                    <img className='projectImg' src={curElem.image} alt='' />
                                    <div className='projectCardFooter '>
<p className='d-flex mb-0 justify-content-between align-align-items-center  webLink'>

                                        <p className='mb-0 text-center'>{curElem.name}</p>
                                        <a href={curElem.url} target='_blanck'><FaExternalLinkAlt /></a>
</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    })
                   }
                        
                        
                    </div>
                </div>
    </div>
    </>
  )
}

export default Projects
