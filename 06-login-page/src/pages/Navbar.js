import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">React App</h1>
        <ul className="flex space-x-6">
        <li><Link to="/login" className="text-white hover:text-yellow-300">Login</Link></li>
          <li><Link to="/new-user" className="text-white hover:text-yellow-300">New User</Link></li>
          <li><Link to="/contact" className="text-white hover:text-yellow-300">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;