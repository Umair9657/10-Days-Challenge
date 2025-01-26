import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <div className="text-2xl font-bold">E-Shop</div>
      <nav className="space-x-4">
        <Link to="/products" className="hover:text-gray-300">Products</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link>
        <Link to="/login" className="hover:text-gray-300">Login</Link>
        <Link to="/cart" className="hover:text-gray-300">Cart</Link>
      </nav>
      <div className="flex items-center space-x-4"><CiSearch />
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 rounded focus:outline-none"
        />
        <FaShoppingCart className="text-2xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;