import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddStudent = ({ addStudent }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [studentClass, setStudentClass] = useState('');
  const [division, setDivision] = useState('');
  const [collegeName, setCollegeName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ name, age, grade, mobile, email, address, studentClass, division, collegeName });
    navigate('/students');
  };

  return (
    <div className="container mx-auto py-8 px-4 md:px-8">
      <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6 dark:text-white">
        Add Student
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md dark:bg-gray-800">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="text"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="text"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="text"
          placeholder="Class"
          value={studentClass}
          onChange={(e) => setStudentClass(e.target.value)}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="text"
          placeholder="Division"
          value={division}
          onChange={(e) => setDivision(e.target.value)}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          required
        />
        <input
          type="text"
          placeholder="College Name"
          value={collegeName}
          onChange={(e) => setCollegeName(e.target.value)}
          className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddStudent;
