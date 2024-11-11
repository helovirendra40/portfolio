import React, { useState } from 'react'

const Project = () => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    link: '' 
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
      const response = await fetch('https://iamveerendragangwar-portfolio-api.vercel.app/project', {
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
      <div className="container">
        <div className="form">
          <form onSubmit={handleSubmit}>
            <h1>Add Project</h1>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Project Name</label>
              <input 
                type="text" 
                className="form-control" 
                name="title" 
                value={formData.title} 
                onChange={handleChange} 
                id="title" 
                required 
              />
            </div>

            <div className="mb-3">
              <label htmlFor="link" className="form-label">Website Url</label>
              <input 
                type="text" 
                className="form-control" 
                name="link" 
                value={formData.link} 
                onChange={handleChange} 
                id="link" 
                required 
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image</label>
              <input 
                type="text" 
                className="form-control" 
                name="image" 
                value={formData.image} 
                onChange={handleChange} 
                id="image" 
                required 
              />
            </div>
            <button className="btn theme-btn-2">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Project
