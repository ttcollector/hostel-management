import express from "express"
import { addStudents, deleteStudent, detailStudnet, getStudent, updateStudents } from "../controllers/studentControllers.js";


const routes = express.Router();
console.log("student cum ")
routes.get("/", getStudent);
routes.post("/addstudents", addStudents);
routes.get("/studentdetails", detailStudnet);
routes.put("/editstudents", updateStudents);
routes.post("/delete", deleteStudent);

export default routes;
