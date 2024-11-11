const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = 5000;
const connectDB = require('./db/db_connection');
const education = require('./models/educationModel');
const experience = require('./models/ExperiencesModel');
const skill = require('./models/skillModel');
const project = require('./models/projectModel')
const contact = require('./models/contactModel');
const app = express();

// Database connection
connectDB();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON



// add exp
app.post('/contact', async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    const newContact = new contact({
        name,
        email,
        msg,
    });

    const savedContact = await newContact.save();
    res.json(savedContact);
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});

// Route to get all courses (GET request)
app.get('/contact', async (req, res) => {
  try {
    const Contact = await contact.find(); 
    res.json(Contact);
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});



// Route to delete a experience by ID (DELETE request)
app.delete('/contact/:id', async (req, res) => {
  try {
    const contactId = req.params.id;

    // Find the experience by ID and delete it
    const deletedContact = await contact.findByIdAndDelete(contactId);

    if (!deletedContact) {
      return res.status(404).json({ msg: 'Experience not found' });
    }

    res.json({ msg: 'Experience deleted successfully', deletedContact });
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});


// add exp
app.post('/skill', async (req, res) => {
  try {
    const { title, image } = req.body;
    

    const newSkill = new skill({
        title, 
        image
    });

    const savedSkill = await newSkill.save();
    res.json(savedSkill);
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});

// Route to get all courses (GET request)
app.get('/skill', async (req, res) => {
  try {
    const Skill = await skill.find(); 
    res.json(Skill);
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});

// Route to delete a skill by ID (DELETE request)
app.delete('/skill/:id', async (req, res) => {
  try {
    const skillId = req.params.id;

    // Find the skill by ID and delete it
    const deletedSkill = await skill.findByIdAndDelete(skillId);

    if (!deletedSkill) {
      return res.status(404).json({ msg: 'Experience not found' });
    }

    res.json({ msg: 'skill deleted successfully', deletedSkill });
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});


// add exp
app.post('/project', async (req, res) => {
  try {
    const { title , image, link } = req.body;

    const newProject = new project({
        title, 
        image,
        link
    });

    const savedProject = await newProject.save();
    res.json(savedProject);
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});

// Route to get all courses (GET request)
app.get('/project', async (req, res) => {
  try {
    const Project = await project.find(); 
    res.json(Project);
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});

// Route to delete a skill by ID (DELETE request)
app.delete('/project/:id', async (req, res) => {
  try {
    const projectId = req.params.id;

    // Find the skill by ID and delete it
    const deletedProject = await project.findByIdAndDelete(projectId);

    if (!deletedProject) {
      return res.status(404).json({ msg: 'Experience not found' });
    }

    res.json({ msg: 'project deleted successfully', deletedProject });
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});

// Route to handle adding a course (POST request)
app.post('/course', async (req, res) => {
  try {
    const { course, university, year } = req.body;

    const newCourse = new education({
      course,
      university,
      year,
    });

    const savedCourse = await newCourse.save();
    res.json(savedCourse);
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});

// Route to get all courses (GET request)
app.get('/course', async (req, res) => {
  try {
    const courses = await education.find(); // Find all courses in the education collection
    res.json(courses);
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});

// Route to update a course by ID (PUT request)
app.put('/course/:id', async (req, res) => {
  try {
    const { course, university, year } = req.body;
    const courseId = req.params.id;

    // Find the course by ID and update it
    const updatedCourse = await education.findByIdAndUpdate(
      courseId,
      { course, university, year }, // Fields to update
      { new: true, runValidators: true } // Options to return the updated document and run validations
    );

    if (!updatedCourse) {
      return res.status(404).json({ msg: 'Course not found' });
    }

    res.json(updatedCourse);
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});

// Route to delete a course by ID (DELETE request)
app.delete('/course/:id', async (req, res) => {
  try {
    const courseId = req.params.id;

    // Find the course by ID and delete it
    const deletedCourse = await education.findByIdAndDelete(courseId);

    if (!deletedCourse) {
      return res.status(404).json({ msg: 'Course not found' });
    }

    res.json({ msg: 'Course deleted successfully', deletedCourse });
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});




// add exp
app.post('/experience', async (req, res) => {
  try {
    const { designation, company, year } = req.body;

    const newExperience = new experience({
        designation,
        company,
        year,
    });

    const savedExperience = await newExperience.save();
    res.json(savedExperience);
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});

// Route to get all courses (GET request)
app.get('/experience', async (req, res) => {
  try {
    const Experience = await experience.find(); 
    res.json(Experience);
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});

// Route to update a experience by ID (PUT request)
app.put('/experience/:id', async (req, res) => {
  try {
    const { designation,  company,  year } = req.body;
    const experienceId = req.params.id;

    // Find the experience by ID and update it
    const updatedExperience = await experience.findByIdAndUpdate(
        experienceId,
      { designation,  company,  year }, // Fields to update
      { new: true, runValidators: true } // Options to return the updated document and run validations
    );

    if (!updatedExperience) {
      return res.status(404).json({ msg: 'Course not found' });
    }

    res.json(updatedExperience);
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});

// Route to delete a experience by ID (DELETE request)
app.delete('/experience/:id', async (req, res) => {
  try {
    const experienceId = req.params.id;

    // Find the experience by ID and delete it
    const deletedExperience = await experience.findByIdAndDelete(experienceId);

    if (!deletedExperience) {
      return res.status(404).json({ msg: 'Experience not found' });
    }

    res.json({ msg: 'Experience deleted successfully', deletedExperience });
  } catch (error) {
    console.error('Error details:', error.message);
    res.status(500).send('Server error');
  }
});





// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port number ${PORT}`);
});
