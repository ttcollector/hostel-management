import React from "react";
import { useState, useEffect } from "react";
import { addStudent } from "../services/api";
import { useNavigate } from "react-router-dom";

function AddStudent() {
  const [form, setForm] = useState({
    name: "",
    regno: "",
    mobile: "",
    gender: "male",
    branch: "comp",
    year: "fe",
    hostel: "apj",
  });

  



  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(form).then(navigate("/"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 sm:p-6 rounded-2xl shadow-lg w-full max-w-2xl md:max-w-xl sm:max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Add a New Student
        </h1>
        <form
          action="submit"
          onSubmit={handleSubmit}
          method="post"
          className="flex flex-col gap-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Student's Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Registration Number
            </label>
            <input
              type="number"
              name="regno"
              value={form.regno}
              onChange={handleChange}
              placeholder="Enter reg. no."
              className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              placeholder="Enter mobile no."
              onChange={handleChange}
              className="mt-1 w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <div className="flex gap-4">
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  checked={form.gender === "male"}
                  onChange={handleChange}
                  name="gender"
                  value="male"
                  className="accent-blue-600"
                />
                Male
              </label>
              <label className="flex items-center gap-1">
                <input
                  type="radio"
                  checked={form.gender === "female"}
                  onChange={handleChange}
                  name="gender"
                  value="female"
                  className="accent-pink-600"
                />
                Female
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Branch
            </label>
            <select
              name="branch"
              className="mt-1 w-full px-3 py-2 border rounded-md"
              value={form.branch}
              onChange={handleChange}
            >
              <option value="comp">Comp</option>
              <option value="it">IT</option>
              <option value="entc">E&TC</option>
              <option value="mech">Mech</option>
              <option value="are">ARE</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Year
            </label>
            <select
              name="year"
              className="mt-1 w-full px-3 py-2 border rounded-md"
              value={form.year}
              onChange={handleChange}
            >
              <option value="fe">First Year</option>
              <option value="se">Second Year</option>
              <option value="te">Third Year</option>
              <option value="be">Fourth Year</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Hostel
            </label>
            <select
              name="hostel"
              className="mt-1 w-full px-3 py-2 border rounded-md"
              value={form.hostel}
              onChange={handleChange}
            >
              <option value="apj">APJ</option>
              <option value="obh">OBH</option>
              <option value="teen1">Teen ka dibba 1</option>
              <option value="teen2">Teen ka dibba 2</option>
              <option value="hflank">H Flank</option>
              <option value="gflank">G Flank</option>
              <option value="snbose">SN Bose</option>
              <option value="drom">Dorm</option>
              <option value="gh">Girls Hostel</option>
            </select>
          </div>

          <div className="flex gap-4 mt-4">
            <input
              type="submit"
              value="Submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 cursor-pointer"
            />
            <input
              type="reset"
              value="Reset"
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddStudent;
