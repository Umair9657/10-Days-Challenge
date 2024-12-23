import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">
        <h1 className="hover:text-yellow-500 text-2xl font-bold">FLEX GYM</h1>
        <ul className="flex space-x-6">
          <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-yellow-500">About</Link></li>
          <li><Link to="/services" className="hover:text-yellow-500">Packages</Link></li>
          <li><Link to="/contact" className="hover:text-yellow-500">Contact</Link></li>
          <li><Link to="/register" className="hover:text-yellow-500">Register</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

