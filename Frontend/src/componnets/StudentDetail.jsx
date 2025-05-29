import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { deleteStudent, studentDetail } from "../services/api";

function StudentDetail() {

  const {id} = useParams();

  const [studentdetail, setstudentdetail] = useState([]);
  useEffect(()=>{
    studentDetail(id)
    .then(res => {
      setstudentdetail(res.data)
    })
  },[])

  const handleDelete = () => {

    deleteStudent(id)
    .then(navigate('/'))

  }

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Student Details</h2>

        <div className="space-y-4">
          <DetailRow label="Name" value={studentdetail.name} />
          <DetailRow label="Mobile Number" value={studentdetail.mobile} />
          <DetailRow label="Registration Number" value={studentdetail.regno} />
          <DetailRow label="Branch" value={studentdetail.branch} />
          <DetailRow label="Year" value={studentdetail.year} />
          <DetailRow label="Hostel" value={studentdetail.hostel} />
          <DetailRow label="Gender" value={studentdetail.gender} />
        </div>

        <div className="flex justify-between mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full mr-2" onClick={()=>navigate(`/editstudents/${studentdetail._id}`)}>
            Update
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md w-full ml-2" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between border-b pb-2">
    <span className="text-gray-600 font-medium">{label}</span>
    <span className="text-gray-800">{value}</span>
  </div>
);

export default StudentDetail;