// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-gray-800 text-white p-4 flex justify-between">
    <h1 className="text-xl font-bold">iPhone Store</h1>
    <div>
      <Link to="/" className="mx-2 hover:underline">Home</Link>
      <Link to="/buy" className="mx-2 hover:underline">Buy</Link>
      <Link to="/cart" className="mx-2 hover:underline">Cart</Link>
    </div>
  </nav>
);

export default Navbar;