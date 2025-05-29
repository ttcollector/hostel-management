import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getStudent } from '../services/api';

function ViewStudents() {

  const [allstudents,setAllstudents] = useState([]);
  useEffect(()=>{
    getStudent()
    .then((res)=>setAllstudents(res.data))
  },[])



  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">📋 Student Records</h1>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-gray-700">
              <thead className="bg-blue-600 text-white text-left text-sm uppercase font-semibold tracking-wider">
                <tr>
                  <th className="px-6 py-4">Student Name</th>
                  <th className="px-6 py-4">Registration No</th>
                  <th className="px-6 py-4">Hostel</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {allstudents.map((student,) => (
                  <tr
                    key={student._id}
                    className="hover:bg-blue-50 transition duration-200"
                    onClick={()=>navigate(`/studentdetails/${student._id}`)}
                  >
                    <td className="px-6 py-4 font-medium">{student.name}</td>
                    <td className="px-6 py-4">{student.regno}</td>
                    <td className="px-6 py-4">{student.hostel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewStudents;