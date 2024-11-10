import React from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg text-white">
        <div className="container">
          <a className="navbar-brand" href="#">
            Veerendra Gangwar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            
<RiMenu3Fill />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" to="/#about">
                    ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience">
                EXPERIENCE
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#skills">
                SKILLS
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#education">
                EDUCATION
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#project">
                PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
