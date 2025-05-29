import { Student } from "../models/student.model.js";

// add a new studnet
export const addStudents = async (req, res) => {
  const { name, regno, mobile, gender, branch, year, hostel } = req.body;
  const newStudnet = new Student({
    name,
    regno,
    mobile,
    gender,
    branch,
    year,
    hostel,
  });

  try {
    const saveStudent = await newStudnet.save();
    res.status(201).json(saveStudent);
    console.log("student added ");
  } catch (error) {
    console.log(`error in adding studnet : ${error}`);
  }
};

//edit a studnet
export const updateStudents = async (req, res) => {
  try {
    const { id } = req.params;
    const update = await Student.findByIdAndUpdate(id, req.body, { new: true });
    res.json(update);
  } catch (error) {
    console.log(`error in editing studnet : ${error}`);
  }
};

//delete a studnet
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteStudent = await Student.findByIdAndDelete(id);
  } catch (error) {
    console.log(`error in deleting studnet : ${error}`);
  }
};

//view all studnet
export const getStudent = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    console.log(`error in viewing studnet : ${error}`);
  }
};

// student details
export const detailStudnet = async (req, res) => {
  try {
    const details = await Student.findById(req.params.id);
    res.json(details);
  } catch (error) {
    console.log(`error in student details : ${error}`);
  }
};
