import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const LoginPage = () => {
  const handleGoogleSignIn = () => {
    window.open("https://accounts.google.com/signin", "_blank");
  };

  const handleFacebookSignIn = () => {
    window.open("https://www.facebook.com/login", "_blank");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-100 via-blue-300 to-blue-500">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 mb-6">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-8">Login to your account to continue</p>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input type="text" className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your username" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input type="password" className="w-full px-4 py-3 border border-gray-300 rounded-lg 
                shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" placeholder="Enter your password" />
          </div>
          <button onClick={() =>{
            alert("You Login!")
          }}
          type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Login</button>
        </form>
        <div className="flex justify-between items-center mt-6">
          <button onClick={handleGoogleSignIn} className="flex items-center justify-center w-1/2 bg-red-500 text-white py-2 px-4 
            rounded-lg shadow-md hover:bg-red-600 mr-2">
            <FaGoogle className="mr-2 text-lg" />
          </button>
          <button onClick={handleFacebookSignIn} className="flex items-center justify-center w-1/2 bg-blue-800 text-white py-2
           px-4 rounded-lg shadow-md hover:bg-blue-900 ml-2">
            <FaFacebook className="mr-2 text-lg" />
          </button>
        </div>
        <p className="text-center mt-6 text-gray-700">
          New here? <Link to="/new-user" className="text-blue-600 font-semibold hover:underline">Create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;