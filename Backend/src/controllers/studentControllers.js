import { Student } from "../models/student.model.js";

// add a new studnet 
export const addStudents = async(req, res) => {
    console.log("student camer ")
    const {name, regno, mobile, gender, branch, year, hostel} = req.body;
    const newStudnet = new Student({
        name, 
        regno, 
        mobile, 
        gender, 
        branch, 
        year, 
        hostel
    })
    const saveStudent = await newStudnet.save();
    res.status(201).json(saveStudent);
    console.log("student added ")
};

//edit a studnet
export const updateStudents = async(req , res) => {
    const {id} = req.params;
    const update = await Student.findByIdAndUpdate(id,
        req.body, {new: true}
    );
    res.json(update);
}

//delete a studnet
export const deleteStudent = async (req, res) => {
    const{id} = req.params;
    const deleteStudent = await Student.findByIdAndDelete(id)
}

//view all studnet
export const getStudent = async (req, res) => {
    const students = await Student.find();
    res.json(students);
}

// student details 
export const detailStudnet = async (req, res) => {
    const details = await Student.findById(req.params.id);
    res.json(details);
}