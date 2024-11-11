import React, { useState } from 'react';
import { IoMdDownload } from 'react-icons/io';
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import { FaGithub, FaFacebook, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  // Initialize formData with correct field names
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    msg: ''  // Changed 'msg' to 'message' to match the textarea name
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Send form data to API using fetch
    try {
      const response = await fetch('https://iamveerendragangwar-portfolio-api.vercel.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Tell the server you're sending JSON data
        },
        body: JSON.stringify(formData) // Convert form data to JSON
      });

      if (response.ok) {
        // Show success notification
        toast.success('Form submitted successfully!', {
          position: "top-right",
          autoClose: 3000,  // Auto-close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        // Clear form fields
        setFormData({
          name: '',
          email: '',
          msg: ''
        });
      } else {
        toast.error('Form submission failed. Please try again.');
      }
    } catch (error) {
      toast.error('Error submitting form. Please try again later.');
    }
  };

  return (
    <>
      <div className='container' id="contact">
        <div className='row py-5 align-items-center'>
          <div className='col-md-6'>
            <h2 className='mainHeading'>Contact with me</h2>
            <div className='contactForm'>
              <form onSubmit={handleSubmit} className='text-white'>
                
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>
                
                <div className="mb-3">
                  <label htmlFor="msg" className="form-label">Message</label>
                  <textarea 
                    className="form-control" 
                    id="msg" 
                    name="msg" 
                    value={formData.msg}  
                    onChange={handleChange} 
                    cols={5}
                    rows={5}
                    required
                  ></textarea>
                </div>
                <button className="btn theme-btn-2 d-block mx-auto">Submit</button>
              </form>
            </div>
          </div>
          <div className='col-md-6 position-relative'>
            <div className='AboutMeHeading'>
              <div className='position-relative'>                    
                <span className='text-white'>CONTACT ME</span>
                <div className='HeadingLine'></div>
              </div>
            </div>
            <div className='contactDetails'>
              <div className='d-flex gap-4 align-items-center mb-5'>                    
                <MdEmail />
                <p className='text-white mb-0'>virendragangwar88@gmail.com</p>
              </div>

              <div className='d-flex gap-4 align-items-center mb-5'>                    
                <FaPhoneVolume />
                <p className='text-white mb-0'>+91 8285484247</p>
              </div>

              <div className='d-flex gap-4 align-items-center mb-5'>                    
                <ImLocation />
                <p className='text-white mb-0'>Noida sector 62</p>
              </div>

              <ul className="ContactSocial my-4">
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
            </div>
          </div>
        </div>
      </div>
      
      {/* Toast container to show notifications */}
      <ToastContainer />
    </>
  )
}

export default Contact;
