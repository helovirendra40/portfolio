import React from "react";
import { FaLaptopCode } from "react-icons/fa";

import image from "../assets/images/img.png";
import cardBgVector from "../assets/images/blur-23.svg";
import EducationApi from "../Api/educationApi";
const myStayl = {
  
    "maxWidth" : "300px",
    "width" : "50%"
  
}
const Educations = () => {
  return (
    <>
      <div className="position-relative bg-vector" id="education">
        {/* <span className='d-d-inline-block mx-auto p-2 bg-theme text-white'>Experiences</span> */}
        <div className="d-block w-100 position-relative">
          <div className="AboutMeHeading AboutMeHeading1">
            <div className="position-relative">
              <span className="text-white">Educations</span>
              <div className="HeadingLine1"></div>
            </div>
          </div>
        </div>
        <div className="container mt-6">
          <div className="row align-items-center">
            <div className="col-md-6">
              

              {
                EducationApi.map((curElem, ind)=>{
                  return(
                    <div className="cardSec" key={ind}>
                    <p className="cardHeading">{curElem.eduction}</p>
                    <div className="d-flex align-items-center gap-4">
                      <FaLaptopCode />
                      <div>
                        <h4 className="mb-2">{curElem.university}</h4>
                        <h5 className="mb-2">{curElem.years}</h5>
                      </div>
                    </div>
                    <img className="cardBgVector" src={cardBgVector} alt="img" />
                  </div>
                  )
                })
              }
            </div>
            <div className='col-md-6'>
                <img className='vectorImg vectorImg1' src={image} alt='image' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Educations;
