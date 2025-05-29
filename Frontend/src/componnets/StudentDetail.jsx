import React from "react";
import { useNavigate } from "react-router-dom";

function StudentDetail() {

  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Student Details</h2>

        <div className="space-y-4">
          <DetailRow label="Name" value="John Doe" />
          <DetailRow label="Mobile Number" value="9876543210" />
          <DetailRow label="Registration Number" value="AIT12345" />
          <DetailRow label="Branch" value="Information Technology" />
          <DetailRow label="Year" value="Second Year" />
          <DetailRow label="Hostel" value="OBH" />
          <DetailRow label="Gender" value="Male" />
        </div>

        <div className="flex justify-between mt-8">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full mr-2" onClick={()=>navigate("/editstudents")}>
            Update
          </button>
          <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md w-full ml-2">
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