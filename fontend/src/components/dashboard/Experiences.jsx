import React, { useState } from 'react'

const Experiences = () => {

  const [formData, setFormData] = useState({
    designation: '',
    company: '',
    year: ''
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
      const response = await fetch('http://localhost:5000/experience', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' // Tell the server you're sending JSON data
        },
        body: JSON.stringify(formData) // Convert form data to JSON
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Form submitted successfully:', data);
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <>
    <div className='container'>
      <div className='form'>
      
        <form onSubmit={handleSubmit}>
        <h1>Experience</h1>
        <div className="mb-3">
            
            <label htmlFor="designation" className="form-label">Designation</label>
            <input type="text" className="form-control" name="designation" value={formData.designation} onChange={handleChange} id="designation" required />
        </div>
        <div className="mb-3">
            <label htmlFor="company" className="form-label">Company</label>
            <input type="text" className="form-control" name="company" value={formData.company} onChange={handleChange} id="company" required />
        </div>
        <div className="mb-3">
            <label htmlFor="year" className="form-label">Year</label>
            <input type="text"  value={formData.year} onChange={handleChange} className="form-control" name="year" id="year" required />
            
        </div>      
        <button className='btn theme-btn-2'>Submit</button>  
        </form>
        </div>
    </div> 
    </>
  )
}

export default Experiences
