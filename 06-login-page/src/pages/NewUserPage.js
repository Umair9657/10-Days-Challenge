import React from "react";

const NewUserPage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-100 to-green-300">
      <div className="bg-white p-8 rounded shadow-lg w-96">
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">New User Registration</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Full Name</label>
            <input type="text" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Enter your full name" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Email</label>
            <input type="email" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Enter your email" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Password</label>
            <input type="password" className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Enter your password" />
          </div>
          <button onClick={() => {
            alert("You Have Successfully Registerd!")
          }}
          type="submit" className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700">Register</button>
        </form>
      </div>
    </div>
  );
};

export default NewUserPage;