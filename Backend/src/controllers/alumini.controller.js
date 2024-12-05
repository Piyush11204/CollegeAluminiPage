// const Alumni = require("../src/models/alumini.model");
import { Alumni } from "../models/alumini.model.js";
// Controller to handle fetching all alumni


const handleAllAlumni = async(req, res) => {
  try {
    const alumni = await Alumni.find();
    res.status(200).send(alumni);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error", error });
  }
}

// Controller to handle adding a new alumni
const handleAddAlumni = async(req, res) => {
  try {
    const alumniData = {
      fullname: req.body.fullname,
      profile: req.file ? req.file.path : null, // Handle file upload for profile
      email: req.body.email,
      phone: req.body.phone,
      education: req.body.education,
      location: req.body.location,
      yearOfPassout: req.body.yearOfPassout,
      profession: req.body.profession,
      coverImage: req.file ? req.file.path : null, // Handle file upload for cover image
    };
    
    const newAlumni = new Alumni(alumniData);
    const result = await newAlumni.save();
    res.status(201).send(result); // Send status 201 for created resource
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Internal Server Error", error });
  }
}

// Export the controller functions
export {
  handleAllAlumni,
  handleAddAlumni,
};
