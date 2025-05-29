import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function ViewStudents() {
  const students = [
    // get students details
    { name: "Ravi Kumar", regno: "AIT123", hostel: "APJ" },
    { name: "Sneha Sharma", regno: "AIT456", hostel: "Girls Hostel" },
    { name: "Arjun Mehta", regno: "AIT789", hostel: "Teen ka dibba 1" },
  ];

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
                {students.map((student, index) => (
                  <tr
                    key={index}
                    className="hover:bg-blue-50 transition duration-200"
                    onClick={()=>navigate("/studentdetails")}
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