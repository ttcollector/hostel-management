import axios from "axios";

const api = axios.create(
    {
        baseURL: 'http://localhost:5000/api/students'
    }
)
export const addStudent = (data)=> api.post('/addstudents', data);
export const deleteStudent = (id)=> api.delete(`/delete/${id}`, );
export const editStudents = (data, id)=> api.put(`editstudents/${id}`, data);
export const studentDetail = (id)=> api.get(`studentdetails/${id}`);
export const getStudent = ()=> api.get('/', );