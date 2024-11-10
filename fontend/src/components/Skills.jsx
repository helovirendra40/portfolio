import React from 'react'
import SkillsData from '../Api/Skills'
// console.log(SkillsData);
const Skills = () => {
  return (
    <>
       <div className='position-relative py-5' id="skills">
        {/* <span className='d-d-inline-block mx-auto p-2 bg-theme text-white'>Experiences</span> */}
                <div className='d-block w-100 position-relative'>
                    <div className='AboutMeHeading AboutMeHeading1'>
                        <div className='position-relative'>                    
                            <span className='text-white'>SKILLS</span>
                            <div className='HeadingLine1'></div>
                        </div>
                    </div>
                </div>
                <div className='container mt-6'>
                    <div className='row'>
                    
                        

                        {
                           SkillsData.map((curElem, ind)=>{
                            return(
                                <div key={ind} className='col-lg-2 col-md-3 col-sm-4 col-6'>
                            <div className='skillCard mb-4 position-relative'>
                                <div className='d-flex flex-column'>
                                    <img className='skillImg' src={curElem.image} alt='' />
                                    <p className='mb-0 text-center'>{curElem.name}</p>
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

export default Skills
