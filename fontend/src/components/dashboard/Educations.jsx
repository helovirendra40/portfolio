import React, { useState } from 'react'

const Education = () => {

  const [formData, setFormData] = useState({
    course: '',
    university: '',
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
      const response = await fetch('http://localhost:5000/course', {
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
        <h1>Education</h1>
        <div className="mb-3">
            <label htmlFor="course" className="form-label">Course Name</label>
            <input type="text" className="form-control" name="course" value={formData.course} onChange={handleChange} id="course" required />
        </div>
        <div className="mb-3">
            <label htmlFor="university" className="form-label">University Name</label>
            <input type="text" className="form-control" name="university" value={formData.university} onChange={handleChange} id="university" required />
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

export default Education
