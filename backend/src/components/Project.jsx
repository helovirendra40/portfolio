import React, { useState } from 'react'

const Project = () => {
    // State to store form data
  const [formData, setFormData] = useState({
    title: '',
    image: null,
    link:""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target; // Use 'files' for file input
    setFormData({
      ...formData,
      [name]: files ? files[0] : value // If input is a file, store the first file
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Create a FormData object to hold the form data
    const formDataObj = new FormData();
    formDataObj.append('title', formData.title); // Append the skill name
    formDataObj.append('image', formData.image); // Append the image file
    formDataObj.append('link', formData.link); // Append the image file

    // Send the form data using the fetch API
    try {
      const response = await fetch('https://iamveerendragangwar-portfolio-api.vercel.app/project', {
        method: 'POST',
        body: formDataObj, // Send formData as body
      });

      // Parse the response JSON
      const result = await response.json();
      console.log('Form submitted successfully:', result);
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
                type="file" 
                className="form-control" 
                name="image" 
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
