import React from "react";
import profile from "../assets/images/profile.png";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";
import resume from '../assets/resume.pdf'

import { saveAs } from "file-saver";
import { Link } from "react-router-dom";


  
const Hero = () => {
  const downloadPdf = () => {
    saveAs(resume, resume); // Path to the PDF and the filename for download
  }
  return (
    <div className="" id="home">
      <div className="HeroSection bg-vector">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h1 className="text-white">
                Hello,
                <br />
                This is <span className="myName">VEERENDRA GANGWAR</span> , I'm
                a Professional{" "}
                <span className="myProfile">Software Developer.</span>
              </h1>

              <ul className="social my-4">
                <li>
                  <a href="https://github.com/helovirendra40/" target="_blank">
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/virendragangwar88/" target="_blank">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/veerendragangwar/"  target="_blank">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="https://x.com/VeerendraG10547" target="_blank">
                    <FaSquareXTwitter />
                  </a>
                </li>
                
              </ul>
                <div className="heroButtons">
                    <a className="btn theme-btn-1" href="#contact">CONTACT ME <RiContactsFill /></a>
                    <button onClick={downloadPdf} className="btn theme-btn-2">GET RESUME
                    <IoMdDownload /> vv</button>
        <Link to={'/dashboard-skills'}>Add Skills</Link>
                </div>


            </div>
            <div className="col-md-6">
              <div className="profileImage position-relative">
                <div className="profileBorder"></div>
                <img src={profile} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
