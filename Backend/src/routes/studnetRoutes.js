import express from "express"
import { addStudents, deleteStudent, detailStudnet, getStudent, updateStudents } from "../controllers/studentControllers.js";


const routes = express.Router();
console.log("student cum ")
routes.get("/", getStudent);
routes.post("/addstudents", addStudents);
routes.get("/studentdetails/:id", detailStudnet);
routes.put("/editstudents/:id", updateStudents);
routes.delete("/delete/:id", deleteStudent);

export default routes;
