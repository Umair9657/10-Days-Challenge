import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-blue-950 text-white p-4 shadow">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold hover:text-yellow-500">Student Management System</h1>
      <nav>
        <Link to="/" className="mx-2 hover:text-yellow-500">Home</Link>
        <Link to="/students" className="mx-2  hover:text-yellow-500">Students</Link>
        <Link to="/add-student" className="mx-2  hover:text-yellow-500">Add Student</Link>
      </nav>
    </div>
  </header>
);

export default Header;
