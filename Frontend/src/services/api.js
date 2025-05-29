import axios from "axios";

const api = axios.create(
    {
        baseURL: 'http://localhost:5000/api/students'
    }
)
export const addStudent = (data)=> api.post('/addstudents', data);
export const deleteStudent = (data)=> api.post('/delete', data);
export const editStudents = (data)=> api.put('/editstudents', data);
export const studentdetails = (data)=> api.get('/studentdetails', data);
export const getStudent = ()=> api.get('/', );